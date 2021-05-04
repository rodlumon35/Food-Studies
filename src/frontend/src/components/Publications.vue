<template>
  <div
    class="bg-light d-flex justify-content-between container shadow-lg m-5 p-5 flex-column"
  >
    <div>
      <header class="d-flex justify-content-between">
        <h1>Publications</h1>
        <i class="fas fa-plus-circle" id="add"></i>
      </header>
    </div>
    <div
      v-for="publication in publicationsList"
      :key="publication._id"
      :id="publication._id"
      class="publication"
    >
      <div>
        <header
          class="d-flex justify-content-between border p-2 border-dark rounded"
        >
          <div><i class="fas fa-user"></i></div>
          <div>{{ publication.publisher }}</div>
        </header>
      </div>
      <div class="body d-flex justify-content-between m-4">
        <div class="content">{{ publication.content }}</div>
        <div
          class="col-4 border border-dark d-flex flex-column justify-content-between"
          style="min-height: 200px"
        >
          <div>pdf</div>
          <div><i class="fas fa-download"></i></div>
        </div>
      </div>
      <hr class="w-100" />
    </div>
  </div>
</template>

<script>
const apiRoot = "https://food-studies-api.herokuapp.com/api/publication/";

export default {
  name: "publication-component",
  data() {
    return {
      publicationsList: [],
    };
  },
  methods: {
    async getPublications() {
      let response = await fetch(apiRoot),
        data = await response.json();
      data.forEach((publication) => {
        this.publicationsList.push(publication);
      });
    },
  },
  mounted() {
    this.getPublications();
  },
};
</script>

<style scoped>
.publication {
    background-color: rgb(244, 248, 247);
    padding: 2%;
    margin: 2% 0;
}
#add {
    font-size: 2em
}
#add:hover {
    cursor: pointer;
}
</style>