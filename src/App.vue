<template>
 <div id="app">
  <header id="header">
    <div class="container">
      <div class="logo">Shoptime</div>
      <div class="menu">
        <router-link :to="'Home'" class="active">HOME</router-link>
        <router-link :to="'Order'">ORDERS</router-link>
        <router-link :to="'Product'">PRODUCT</router-link>
      </div>
      <div class="admin">ADMIN</div>
    </div>
  </header>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
