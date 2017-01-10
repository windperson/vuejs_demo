<template>
    <transition>
        <router-view v-on:test="test_event_handler"></router-view>
    </transition>
</template>
<script>
    export default {
        // created: function () {
        //     this.$on('test', function (msg) {
        //         console.log(msg);
        //     })
        // }
        methods:{
         test_event_handler: function (msg){
             console.log(msg);
         }
        }
    }
</script>