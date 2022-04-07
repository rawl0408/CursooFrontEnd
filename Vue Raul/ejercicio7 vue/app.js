var vm = new Vue({
    el: "#ejercicioeuro",
    data: {
        numero: 0,
        resultado: 0,
        conversion: ""

    },

    filters: {
        conversion: function (value) {
            return value + " €" 
        },
        decimales: function (value){
            return Math.round(value)
        }
    }
})