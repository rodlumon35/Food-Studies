<template>
  <div id="cart" style="width: 1000px">
    <h1>Carrito</h1>
    <table class="table rounded">
      <thead class="text-center bg-info text-light">
        <th>id</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Subtotal</th>
        <th>#</th>
      </thead>
      <tbody>
        <tr v-for="p of cart" :key="p.id" class="text-center">
          <td class="align-center">{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td class="align-center">{{ p.price }}</td>
          <td class="d-flex justify-content-between">
            <button
              class="btn btn-outline-primary btn-sm"
              style="width: 2em; font-size: 1em; font-weight: 900"
              @click="increaseProductQuantity(p.id)"
            >
              +
            </button>
            {{ p.quantity }}
            <button
              class="btn btn-outline-danger btn-sm"
              style="width: 2em; font-size: 1em; font-weight: 900"
              @click="decreaseProductQuantity(p.id)"
            >
              -
            </button>
          </td>
          <td class="align-center">{{ p.subtotal }}</td>
          <td style="font-size: 2em">
            <button class="btn" @click="deleteProduct(p.id)">🗑️</button>
          </td>
        </tr>
      </tbody>
      <tfoot style="font-size: 2.5em">
        <th colspan="5" class="text-right">Total</th>
        <th class="text-right">{{ parseFloat(cart.total).toFixed(2) }}€</th>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "product-cart",
  props: {
    cart: Array,
  },
  methods: {
    deleteProduct(id) {
      console.log("borrando ", id);
      this.$emit("delete-product", id);
    },
    increaseProductQuantity(id) {
      this.$emit("increase-product", id);
    },
    decreaseProductQuantity(id) {
      this.$emit("decrease-product", id);
    },
  },
};
</script>