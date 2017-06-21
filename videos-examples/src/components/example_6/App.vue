<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase}}</p>
                <button @click="fruits.push('Berries')">Add New Item</button>
                <input v-model="filterText" />
                <ul>
                    <li v-for="f in filterFruit">{{f}}</li>
                </ul>
                <hr/>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import AppList from './List';
import {fruitMixin} from './fruitMixin.js';

export default {
    data() {
        return {
            text: 'Hello there!',
        }
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    components: {
        appList: AppList
    },
    mixins: [fruitMixin]
}
</script>

<style>

</style>
