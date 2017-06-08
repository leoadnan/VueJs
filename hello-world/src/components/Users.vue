<template>
   <div class="users">
      <h1>Users</h1>
      <form v-on:submit.prevent="addUser">
         <input type="text" v-model="newUser.name" placeholder="Enter name"/>
         <br />
         <input type="text" v-model="newUser.email" placeholder="Enter email"/>
         <input type="submit" value="Submit"/>
      </form>
      <ul>
         <li v-for="user in users">
            <input type="checkbox" class="toggle" v-model="user.contacted"/>
            <span :class="{contacted: user.contacted}">
               {{user.name}} {{user.email}}
            </span>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   name: 'users',
   data() {
      return {
         newUser: {},
         users: []
      }
   },
   methods: {
      addUser: function(){
         this.users.push({
            name: this.newUser.name,
            email: this.newUser.email,
            contacted: false
         })
      }
   },
   created: function() {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
         .then(function(response){
            this.users = response.data;
         });
   }
}
</script>

<style scoped>
.contacted {
   text-decoration: line-through;
}
</style>
