var vm = new Vue({
  el: "#databinding",
  data: {
    cliente: "Rawl",
    title: "Conversor de Moneda",
    currencyfrom: [
      { name: "USD", desc: "US Dollar" },
      { name: "EUR", desc: "Euro" },
      { name: "INR", desc: "Indian Rupee" },
      { name: "BHD", desc: "Bahraini Dinar" },
    ],

    convertfrom: "INR",
    convertto: "USD",
    amount: "",
  },
  computed: {
    total: function () {

      //reasignamos las variables para que sea mas limpio
      var to = this.convertto;
      var from = this.convertfrom;
      var final = "";

      //para que el valor que aparece en total no sea 0

      if (this.amount == 0) {
        return "";
      }

      //switches para las conversiones
      switch (from) {
        case "INR":
          if (to == "USD") {
            final = this.amount * 0.016;
          }
          if (to == "EUR") {
            final = this.amount * 0.013;
          }
          if (to == "BHD") {
            final = this.amount * 0.059;
          }
          break;

        case "USD":
          if (to == "INR") {
            final = this.amount * 63.88;
          }
          if (to == "EUR") {
            final = this.amount * 0.84;
          }
          if (to == "BHD") {
            final = this.amount * 0.38;
          }
          break;

        case "EUR":
          if (to == "INR") {
            final = this.amount * 76.22;
          }
          if (to == "USD") {
            final = this.amount * 1.19;
          }
          if (to == "BHD") {
            final = this.amount * 0.45;
          }
          break;

        case "BHD":
          if (to == "INR") {
            final = this.amount * 169.44;
          }
          if (to == "USD") {
            final = this.amount * 2.65;
          }
          if (to == "EUR") {
            final = this.amount * 2.22;
          }
          break;
      }
      return final;
    },
  },
});
