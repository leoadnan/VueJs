<template>
  <div id="">
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to="/example1" tag="li" active-class="active"><a>Ex1: Props and Events</a></router-link>
      <router-link to="/example2" tag="li" active-class="active"><a>Ex2: Slots, Dynamic components and Misc</a></router-link>
      <router-link to="/example3" tag="li" active-class="active"><a>Ex3: Second Project</a></router-link>
      <router-link to="/example4" tag="li" active-class="active"><a>Ex4: Form</a></router-link>
      <router-link to="/example5" tag="li" active-class="active"><a>Ex5: Directives</a></router-link>
      <router-link to="/example6" tag="li" active-class="active"><a>Ex6: Filters & Mixin</a></router-link>
      <router-link to="/example7" tag="li" active-class="active"><a>Ex7: Animation</a></router-link>
      <router-link to="/example8" tag="li" active-class="active"><a>Ex8: Http Vue-resource</a></router-link>
      <router-link to="/example9" tag="li" active-class="active"><a>Ex9: Routing</a></router-link>
      <router-link to="/example10" tag="li" active-class="active"><a>Ex10: Vuex</a></router-link>
      <router-link to="/example11" tag="li" active-class="active"><a>Ex11: Node Master</a></router-link>
    </ul>
    <br><br>
    <router-view name="routing_example9_top"></router-view>
    <router-view></router-view>
    <router-view name="routing_example9_bottom"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
