<template>
  <index-page v-if="page == 'index'" @change-page="changePage"></index-page>
  <register-form
    v-else-if="page == 'register'"
    @change-page="changePage"
  ></register-form>
</template>
<script>
import IndexPage from "./components/IndexPage.vue";
import RegisterForm from "./components/RegisterForm.vue";

export default {
  name: "App",
  components: {
    IndexPage,
    RegisterForm,
  },
  data() {
    return {
      page: "index",
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
  },
};
</script>
