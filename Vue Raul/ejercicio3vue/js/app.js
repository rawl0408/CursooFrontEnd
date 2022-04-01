const app = new Vue({
    el: "#app",
    template: "#plantilla",
    data: {
        mensaje: "Esto es un texto incrustado con {{ }}",
        imagen: "img/vue.png",
        href: "https://campus.uoc.edu/",
        mensajeHTML: "<b>Esto es un texto incrustado con HTML directo</b><br>",
        variable1: true,
        number: 10,
        title: "Geeks for Geeks",
        name: "Vue.js",
        topic: "Instances",
        realName: "Rawl",
        goals: [],
        enteredValue: ''
    },
    methods: {

        addGoal() {
            console.log(this.goals);
            console.log("Goal añadido: " + this.enteredValue);
            //aqui hay que añadir para que se printe
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
});