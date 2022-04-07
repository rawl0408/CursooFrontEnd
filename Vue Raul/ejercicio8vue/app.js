const app = new Vue({
  el: "#my-app",
  data: {
    name: "Ejemplo de ===> COMPONENTE",
    firstname: "Rawl",
    lastname: "Garcia",
    count: 0,
  },
  methods: {
    onAdd() {
      this.count += 1;
    },
  },
});
