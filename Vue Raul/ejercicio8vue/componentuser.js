Vue.component("user-detail", {
    //template: "#boto",
    template: `
      <div>
          <p> Hi {{ first }} {{ second }} </p>
      </div>
      `,
    props: ["first", "second"]
  });