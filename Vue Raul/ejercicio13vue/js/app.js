var vm = new Vue({
    el: '#databinding',
    data() {
        return {
            author: "Manz"
        }
    },
    mounted() {
        console.log("El componente " + this.$options.el + " ha sido montado.");
        console.log("Esto es el nombre: " +  this.$refs.nom);
        console.log("Esto es el nombre: " +  this.$refs.parrafo);
    }
})