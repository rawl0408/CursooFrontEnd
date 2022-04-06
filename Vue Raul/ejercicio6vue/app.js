var vm = new Vue({
    el: "#ejerciciosuma",
    data: {
        n1: 0,
        n2: 0,
        total: 0
    },
    watch: {
        n1: function (elemento) {
            this.total = parseInt(elemento) + parseInt(this.n2)
        },
        n2: function (elemento) {
            this.total = parseInt(elemento) + parseInt(this.n1)
        },
    },
    computed: {
        computedSum: function () {
            return total = parseInt(this.n1) + parseInt(this.n2)
        }
    },
    methods: {
        showSum: function () {
            total = parseInt(this.n1) + parseInt(this.n2)
            alert (total)
        }
    }
})