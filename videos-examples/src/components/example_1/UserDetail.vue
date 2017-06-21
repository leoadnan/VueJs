<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{reverseName()}}</p>
        <p>Age: {{userAge}}</p>
        <button @click="resetName">Reset Name Using Emit</button>
        <button @click="resetFn()">Reset Name Using callback</button>
    </div>
</template>

<script>
    import {eventBus} from '../../main.js';
export default {
    props: {
        name: {
            type: String,
            required: true 
        },
        resetFn:Function,
        userAge: Number
    },
    methods: {
        reverseName() {
            return this.name.split("").reverse().join("");
        },
        resetName() {
            this.name = 'Max';
            this.$emit('nameWasReset',this.name);
        },
    },
        created() {
            eventBus.$on('ageWasChanged', (age)=>{
                this.userAge = age;
            })
        }
}
</script>

<style scoped>
div {
    background-color: lightcoral;
}
</style>
