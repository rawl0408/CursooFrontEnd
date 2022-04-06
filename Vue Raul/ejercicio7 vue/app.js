var vm = new Vue({
    el: "#ejercicioeuro",
    data: {
        numero: 0,
        resultado: 0,
        conversion: ""

    },

    filters: {
        conversion: function () {
            this.numero = this.resultado + "€"
            return this.numero 
        }
    }
})