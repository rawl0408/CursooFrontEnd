const app = new Vue({
    el: '#app',
    data: {
        courses: [
            {
                id: 1,
                title: 'Curso introductorio JavaScript',
                subtitle: 'Aprende lo básico en JS',
                description: 'En este curso explicaremos de la mano de los mejores profesores JS los principios básicos',
                type: 'course-js'
            },
            {
                id: 2,
                title: 'Curso avanzado JavaScript',
                subtitle: 'Aprende lo avanzado en JS',
                description: 'En este curso explicaremos de la mano de los mejores profesores JS los principios avanzados',
                type: 'course-js'
            },
            {
                id: 3,
                title: 'Curso introductorio Cascading Style Sheets',
                subtitle: 'Aprende lo básico en CSS',
                description: 'En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos',
                type: 'course-css'
            },
            {
                id: 4,
                title: 'Curso avanzado Cascading Style Sheets',
                subtitle: 'Aprende lo avanzado en CSS',
                description: 'En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos',
                type: 'course-css'
            },            
            {
                id: 5,
                title: 'Curso de VUE framework principiante',
                subtitle: 'Primeros pasos en VUE',
                description: 'En este curso te guiaremos para que aprendas a utilizar el framework VUE',
                type: 'course-vue',
                date: "22 January to 22 March"
            },
            {
                id: 6,
                title: 'Curso de VUE framework avanzado',
                subtitle: 'Aprende todo sobre VUE',
                description: 'En este curso aprenderás todo sobre VUE para volverte un experto.',
                type: 'course-vue',
                date: "19 August to 19 December"
            },


        ],
        cart: []
    },
    methods: {
        addToCart: function (course) {
            this.cart.push(course);
        }
    },
   
   
})

