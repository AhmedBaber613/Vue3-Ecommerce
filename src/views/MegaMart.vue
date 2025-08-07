<script setup>
import { ref, onMounted } from 'vue'
import MegaMartComp from '../components/MegamartComp.vue'

const products = ref([])
const categories = ref([])
const addToCart = ref(0)
const isLoading = ref(true)
const descriptionLength = 40

async function fetchProducts() {
  try {
    isLoading.value = true
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok) throw new Error(`Error fetching: ${response.status}`)
    const data = await response.json()
    products.value = data
    categories.value = ['all', ...new Set(data.map(p => p.category))]
  } catch (err) {
    console.error("Fetch error:", err)
  } finally {
    isLoading.value = false
  }
}

function truncate(text) {
  return text.length > descriptionLength
    ? text.slice(0, descriptionLength) + "..."
    : text
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <MegaMartComp
    :products="products"
    :categories="categories"
    :addToCart="addToCart"
    :isLoading="isLoading"
    :truncate="truncate"
  />
</template>
