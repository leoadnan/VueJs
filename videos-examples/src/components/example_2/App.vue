<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='appQuote'">Quote</button>
                <button @click="selectedComponent='appAuthor'">Author</button>
                <button @click="selectedComponent='appNew'">New</button>
                <hr/>
                <keep-alive>
                    <coomponent :is="selectedComponent">
                        <h2 slot="title">{{ quoteTitle }}</h2>
                        <p>A wonderful Quote</p>
                    </coomponent>
                </keep-alive>
                <!-- <app-quote>
                        <h2 slot="title">{{ quoteTitle }}</h2>
                        <p>A wonderful Quote</p>
                    </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>

import AppQuote from './Quote.vue';
import AppAuthor from './Author.vue';
import AppNew from './New.vue';
export default {
    data: function () {
        return {
            quoteTitle: 'The Quote',
            selectedComponent: 'appQuote'
        }
    },
    components: {
        appQuote: AppQuote,
        appAuthor: AppAuthor,
        appNew: AppNew
    }
}
</script>

<style scoped>

</style>
