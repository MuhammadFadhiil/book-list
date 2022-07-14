<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Book Search</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/books" class="nav-link">Search</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/books/fav" class="nav-link">Favorite</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
