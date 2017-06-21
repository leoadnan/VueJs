<template>
  <div id="">
    <ul class="list-inline">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/example1">Ex1: Props and Events</router-link></li>
        <li><router-link to="/example2">Ex2: Slots, Dynamic components and Misc</router-link></li>
        <li><router-link to="/example3">Ex3: Second Project</router-link></li>
        <li><router-link to="/example4">Ex4: Form</router-link></li>
        <li><router-link to="/example5">Ex5: Directives</router-link></li>
        <li><router-link to="/example6">Ex6: Filters & Mixin</router-link></li>
        <li><router-link to="/example7">Ex7: Animation</router-link></li>
        <li><router-link to="/example8">Ex8: Http Vue-resource</router-link></li>
        <li><router-link to="/example9">Ex9: Routing</router-link></li>
      </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
