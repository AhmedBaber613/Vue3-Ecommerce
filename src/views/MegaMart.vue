<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Home',
  setup() {
    const products = ref([]);
    const categories = ref([]);
    const descriptionLength = 40;

    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`Error fetching: ${response.status}`);
        const data = await response.json();
        products.value = data;

        // Get unique categories (optional)
        categories.value = [...new Set(data.map(product => product.category))];
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    onMounted(() => {
      fetchProducts();
    });

    function truncate(text) {
      return text.length > descriptionLength ? text.slice(0, descriptionLength) + "..." : text;
    }

    // Expose variables and functions to the template
    return {
      products,
      categories,
      truncate
    };
  }
};
</script>

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
      <img src="123.png" height="20" width="20" />
      Cart
    </button>
  </header>

  <div class="parent-container">
    <div
      v-for="(product, index) in products"
      :key="product.id"
      :class="['pro-max', { 'pro-max1': index < 3 }]"
    >
      <img :src="product.image" class="img" />
      <h2>{{ product.title }}</h2>
      <p class="desc">{{ truncate(product.description) }}</p>
      <p class="price">${{ product.price }}</p>
    </div>
  </div>
</template>