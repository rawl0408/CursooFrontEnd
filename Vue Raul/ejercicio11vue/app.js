new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: "titulo 01" }
        ],
        postFontSize: 1,
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    }
})