Vue.component("friend-datos", {
    
    template: `
    <li>
    <h2> {{ amigo.name }} </h2>

    <button @click="toggleMostrar">Show Details</button>

    <ul v-if="mostrar">
      <li> <strong> Phone:</strong> {{ amigo.phone }} </li>
      <li> <strong> Email:</strong> {{ amigo.email }} </li>
      <li> <strong> Gender:</strong> {{ amigo.gender }} </li>
      <li> <strong> Age:</strong> {{ amigo.age }} </li>
      <li> <strong> Work:</strong> {{ amigo.work }} </li>
    </ul>

  </li>
      `,
    props: ["amigo"],
    data() {   
        return{
            mostrar: true,
        };
      },
      methods: {
        toggleMostrar() {
          //alert("mostrar " + this.mostrar);
          this.mostrar = !this.mostrar;
        },
      },
  });