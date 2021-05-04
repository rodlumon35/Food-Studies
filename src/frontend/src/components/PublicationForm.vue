<template>
  <div>
    <div class="bg-light p-4 d-flex flex-column">
      <div>
        <h1 class="display-4">Add Publication</h1>
      </div>
      <div class="d-flex flex-column mt-2">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="pub.title" />
      </div>
      <div class="d-flex flex-column mt-2">
        <label for="content">Article</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          v-model="pub.content"
        ></textarea>
      </div>
      <div class="d-flex flex-column mt-2">
        <label for="publisher">Author</label>
        <input
          type="text"
          name="publisher"
          id="publisher"
          v-model="pub.publisher"
        />
      </div>
      <div class="d-flex justify-content-between mt-2">
        <div @click="publicate" class="btn bg-primary text-light">Send</div>
        <div class="btn bg-danger text-light">Cancel</div>
      </div>
    </div>
  </div>
</template>
<script>
const apiRoot =
  "https://food-studies-api.herokuapp.com/api/publication/publish";

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
        let response = await fetch(`${apiRoot}`, settings),
          data = await response.json();
        console.log(data);
      }
    },
  },
};
</script>
<style scoped>
</style>