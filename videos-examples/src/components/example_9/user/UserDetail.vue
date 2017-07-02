<template>
    <div>
        <h3>Some User Details</h3>
        <p>Loaded User ID is {{$route.params.id}}</p>
        <!-- :to="'/user/'+$route.params.id+'/edit'" -->
        <router-link tag="button" :to="link" class="btn btn-primary">
            Edit User
        </router-link>
        <br/>
        <br/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            link: { 
                name: 'userEdit', 
                params: { 
                    id: this.$route.params.id 
                }, 
                query: { 
                    locale: 'en',
                    q: 100 
                },
                hash: '#data' 
            }
        }
    },
    beforeRouteEnter(to,form,next){
        let isUserAuthenticate = true;
        if(isUserAuthenticate){
            next();
        }
        else {
            next(false);
        }
    }
}
</script>
