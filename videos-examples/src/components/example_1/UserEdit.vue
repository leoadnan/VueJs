<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{userAge}}</p>
        <button @click="changeAge"> Change Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../../main.js';
    export default {
        props: ['userAge'],
        methods: {
            changeAge() {
                this.userAge=30;
                //this.$emit('ageWasChanged',this.userAge);
                //eventBus.$emit('ageWasChanged', this.userAge);
                eventBus.changeAge(this.userAge)
            }
        }
    }
</script>

<style scoped>
div {
    background-color: lightgreen;
}
</style>
