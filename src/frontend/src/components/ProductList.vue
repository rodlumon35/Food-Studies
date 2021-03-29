<template>
  <div id="product-list">
    <h1>Productos</h1>
    <div class="d-flex flex-wrap justify-content-between">
      <div
        v-for="product of productList"
        class="product border rounded m-1"
        style="width: 200px"
        :key="product.id"
      >
        <div class="info p-2">
          <p>{{ product.name }}</p>
          <p class="text-right font-weight-bold">{{ product.price }} €</p>
        </div>
        <div class="actions bg-info align-self-end text-right p-1">
          <button @click="add(product.id)" class="btn btn-dark">
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-list",
  props: {
    productList: Array,
  },
  methods: {
    add(id) {
      let product = {
        id: id,
        name: this.productList[id - 1].name,
        price: this.productList[id - 1].price,
      };
      this.$emit("add-product", product);
    },
  },
};
</script>

<style scoped>
</style>