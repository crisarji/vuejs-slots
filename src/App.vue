<template>
  <div id="app">
    <h1 class="text-2xl font-bold">Employee Listing</h1>
    <div class="flex justify-around text-lg font-bold py-4">
      <router-link to="/agent">Agents</router-link>
      <router-link to="/supervisor">Supervisors</router-link>
      <router-link to="/manager">Managers</router-link>
    </div>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  <footer class="footer">
    <div>Icons made by <a href="" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 
  </footer>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 25px;
  height: 100vh;
  @apply bg-indigo-100;
}
.router-link-active{
  @apply text-red-700 border-b-2 border-red-500 py-2 text-base px-1
}
.footer {
  position: fixed;
  bottom: 0;
}
</style>
