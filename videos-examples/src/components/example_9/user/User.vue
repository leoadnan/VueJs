<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>The User Page</h1>
                <!-- <router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link> -->
                <!-- <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link> -->
                 <hr/> 
                <!-- <p>Loaded ID: {{id}}</p> -->
                <router-view></router-view>
                <button @click="navigateToHome" class="btn btn-primary">Go to Routing</button>
                <br/><br/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     };
    // },
    // watch: {
    //     '$route'(to, from) {
    //         // console.log('User watch prop')
    //         this.id = to.params.id;
    //     }
    // },
    methods: {
        navigateToHome() {
            // this.$router.push('/example9')
            this.$router.push({name:'Exampe_9'})
        }
    }
}
</script>