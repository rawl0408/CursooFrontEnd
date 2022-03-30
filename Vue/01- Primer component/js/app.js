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
        show: function() {
            return "Welcome to this tutorial on" +
            this.name + " - " + this.topic;
        },
        showName: function (nombre) {
            return "Welcome to this tutorial on " + 
            nombre + " " + this.name + " - " + nombre
        },
        reset: function () {
            this.number = 0;
        },
        saludame: function (event) {
            alert("Hola " + this.realName + " como estás?")
            alert(event.target.tagName)
        },
        addGoal() {
            console.log(this.goals);
            console.log("Goal añadido: " + this.enteredValue);
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
});