<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <div>创建dev分支123</div>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
