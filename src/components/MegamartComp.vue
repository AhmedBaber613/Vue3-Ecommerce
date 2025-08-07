<template>
  <header class="header">
    <div class="header-left">
      <p class="m">M</p>
      <span>Mega Mart</span>
      <div class="drop-down-banner">
        <select id="dropdown">
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <input type="text" placeholder="Search..." class="input" />
      </div>
    </div>
    <button class="cart-btn">
      <img src="../assets/123.jpg" height="20" width="20" />
      <p class="cart-label">
        Cart <span class="custom-badge">{{ addToCart }}</span>
      </p>
    </button>
  </header>

  <div class="parent-container">
    <div
      v-for="(product, index) in products"
      :key="product.id"
      :class="['pro-max', { 'pro-max1': index < 3 }]"
    >
      <p>
        <img :src="product.image" class="img" />
        <h2>{{ product.title }}</h2>
        <p class="desc">{{ truncate(product.description) }}</p>
        <p class="price">${{ product.price }}</p>
      </p>
      <div class="overlay">
        <button class="display-btn" @click="addToCart++">Add to cart🛒</button>
      </div>
    </div>
  </div>

  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script setup>
// Accept props from parent
const props = defineProps({
  products: Array,
  categories: Array,
  addToCart: Number,
  isLoading: Boolean,
  truncate: Function
})
</script>
