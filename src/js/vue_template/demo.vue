<template>
    <div>
        <h3>Simple Vue Demo</h3> 
         <p>{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
</template>
<script>
    export default {
        name: "app",
        data: function () {
            return {
                message: 'Hello Vue.js!'
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
</script>