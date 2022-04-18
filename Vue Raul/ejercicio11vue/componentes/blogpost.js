Vue.component('blog-post', {
    props: ['post'],
    data: function () {
        return {
            valor: 1
        }
    },
    template: `
    <div class="blog-post">
    <h3>{{ post.title }}</h3>
    Valor del texto <input v-model="valor">

    <button v-on:click="enviarPadre()"> Agrandar texto Opcion1 </button>

    <button v-on:click="$emit('enlarge-text', valor)"> Agrandar texto Opcion2 </button>
    </div>
    `,
    methods: {
        enviarPadre: function () {
            this.$emit('enlarge-text', this.valor);
        }
    }
})