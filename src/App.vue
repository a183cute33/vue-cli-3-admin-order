<template>
 <div id="app">
  <header id="header">
    <div class="container">
      <div class="logo">Shoptime</div>
      <div class="menu">
        <router-link :to="'Home'" v-on:click.native="setActive('home')" v-bind:class="{ active: isActive === 'home' }">HOME</router-link>
        <!-- <router-link :to="'Order'" v-on:click.native="setActive('order')" v-bind:class="{ active: isActive === 'order' }">ORDERS</router-link> -->
        <router-link :to="'Product'" v-on:click.native="setActive('product')" v-bind:class="{ active: isActive === 'product' }">PRODUCT</router-link>
      </div>
      <div class="admin">ADMIN</div>
    </div>
  </header>
  <router-view/>
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isActive: "home"
    };
  },
  methods: {
    setActive(str) {
      this.isActive = str;
    }
  }
};
</script>

<style>
</style>
