<template>
  <div class="d-flex mt-5 justify-content-center container">
    <input
      type="tel"
      class="rounded form-control col-10"
      v-model="product"
      @keyup.enter="searchProduct"
    />
    <button class="btn col-2" style="font-size: 1.5em" @click="searchProduct()">
      🔎
    </button>
  </div>
</template>

<script>
export default {
  name: "search-bar",
  data() {
    return { product: "" };
  },
  methods: {
    searchProduct() {
      this.$emit("search-product", this.product);
    },
  },
};
</script>
