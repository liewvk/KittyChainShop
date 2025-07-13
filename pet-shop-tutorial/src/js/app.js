App = {
  web3Provider: null,
  contracts: {},
  account: null,

  init: async function () {
    const petsData = await $.getJSON("pets.json");

    const petsRow = $("#petsRow");
    const petTemplate = $("#petTemplate");

    petsData.forEach((pet) => {
      const petCard = petTemplate.clone();
      petCard.find(".panel-title").text(pet.name);
      petCard.find("img").attr("src", pet.picture).addClass("pet-img");
      petCard.find(".pet-breed").text(pet.breed);
      petCard.find(".pet-age").text(pet.age);
      petCard.find(".pet-location").text(pet.location);
      petCard.find(".btn-adopt").attr("data-id", pet.id);
      petCard.removeAttr("id").show();
      petsRow.append(petCard);
    });

    return App.initWeb3();
  },

  initWeb3: async function () {
    if (typeof window.ethereum !== 'undefined') {
      App.web3Provider = window.ethereum;
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (!accounts || accounts.length === 0) {
          throw new Error("No accounts found.");
        }
        App.account = accounts[0];
        console.log("Connected account:", App.account);
      } catch (error) {
        console.error("Error getting accounts:", error);
        return;
      }
      App.web3 = new Web3(App.web3Provider);
    } else {
      alert("No Ethereum provider detected. Please install MetaMask.");
      return;
    }

    return App.initContract();
  },

  initContract: async function () {
    try {
      const data = await $.getJSON("build/contracts/Adoption.json");
      App.contracts.Adoption = TruffleContract(data);
      App.contracts.Adoption.setProvider(App.web3Provider);

      const instance = await App.contracts.Adoption.deployed();
      console.log("✅ Contract loaded at:", instance.address);

      App.bindEvents();
      App.markAdopted();
    } catch (error) {
      console.error("❌ Contract load error:", error);
      alert("Failed to load Adoption contract. Make sure it's deployed and JSON is available.");
    }
  },

  bindEvents: function () {
    $(document).on("click", ".btn-adopt", App.handleAdopt);
  },

  markAdopted: async function () {
    try {
      const instance = await App.contracts.Adoption.deployed();
      const adopters = await instance.getAdopters.call();

      for (let i = 0; i < adopters.length; i++) {
        if (adopters[i] !== "0x0000000000000000000000000000000000000000") {
          $(".btn-adopt[data-id='" + i + "']")
            .text("Success")
            .attr("disabled", true);
        }
      }
    } catch (error) {
      console.error("markAdopted error:", error);
    }
  },

  handleAdopt: async function (event) {
    event.preventDefault();
    const petId = parseInt($(event.target).data("id"));

    try {
      const instance = await App.contracts.Adoption.deployed();
      const gas = await instance.adopt.estimateGas(petId, { from: App.account });
      const result = await instance.adopt(petId, { from: App.account, gas });

      console.log("Adoption successful:", result);
      $(event.target).text("Success").attr("disabled", true);
      App.markAdopted();
    } catch (err) {
      console.error("Adoption failed:", err);
      alert("Transaction failed: " + err.message);
    }
  }
};

$(function () {
  $(window).on("load", function () {
    App.init();
  });
});

$(document).on("error", ".pet-img", function () {
  $(this).attr("src", "images/default.jpg");
});

