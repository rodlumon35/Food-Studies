<template>
  <div>
    <div>
      <label for="title">Title</label>
      <input type="text" name="title" id="title" v-model="pub.title" /><br />
      <label for="content">Article</label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        v-model="pub.content"
      ></textarea><br>
      <label for="publisher">Author</label>
      <input type="text" name="publisher" id="publisher" v-model="pub.publisher"/>
      <button @click="publicate">Send</button><button>Cancel</button>
    </div>
  </div>
</template>
<script>
const apiRoot = "https://food-studies-api.herokuapp.com/api/publication/";

export default {
  name: "publication-form",
  data() {
    return {
      pub: {
        title: "",
        content: "",
        publisher: "",
      },
    };
  },
  methods: {
    async publicate() {
      if (this.pub.title != "" || this.pub.content != "") {
        const _pub = {
            title: this.pub.title,
            content: this.pub.content,
            publisher: this.pub.publisher,
          },
          settings = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(_pub),
          };
        let response = await fetch(`${apiRoot}publish`, settings),
          data = await response.json();
      }
    },
  },
};
</script>
<style scoped>
</style>