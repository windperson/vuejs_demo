<template>
    <transition>
        <!--<router-view v-on:test="test_event_handler"></router-view>-->
        <router-view :eventbus="eventbus" :data="data"></router-view>
    </transition>
</template>
<script>
import Vue from 'vue'
let eventbus = new Vue();
    export default {
        created: function () {
            eventbus.$on('test', function (msg) {
                console.log(msg);
            });
        },

        data: function () {
            return {
                data: {abc: 123, def: '789'},
                eventbus: eventbus
            };
        },
        // created: function () {
        //     this.$on('test', function (msg) {
        //         console.log(msg);
        //     })
        // }
        methods: {
            test_event_handler: function (msg) {
                console.log(msg);
            }
        }
    }
</script>