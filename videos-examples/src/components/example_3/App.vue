<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuote"></app-header>
        <app-new-quote @newQuoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted='deleteQuote'></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>    
    </div>
</template>

<script>
import AppQuoteGrid from './QuoteGrid.vue';
import AppNewQuote from './NewQuote.vue';
import AppHeader from './Header.vue';
export default {
    data: function () {
        return {
            maxQuote: 10,
            quotes: [
                'A quote to start with something.'
            ]
        }
    },
    methods: {
        newQuote(quote) {
            if (this.quotes.length >= this.maxQuote){
                return alert('Please delete quote first');
            }
            this.quotes.push(quote);
        },
        deleteQuote(index){
            this.quotes.splice(index,1);
        }
    },
    components: {
        appQuoteGrid: AppQuoteGrid,
        appNewQuote: AppNewQuote,
        appHeader:AppHeader
    }
}
</script>

<style>

</style>
