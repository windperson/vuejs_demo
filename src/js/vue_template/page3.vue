<template>
    <transition name="fade">
        <div>
            <h3>Page 3</h3>
            <p>This is page3, <br/> data = <span> {{ data }} </span><br/> counter = {{ my_counter }}
            </p>
            <button v-on:click="counter_up">+ 1</button>
            <br/>
            <a href="#" v-scroll-to="'#element'">Scroll to #element</a>
            <div v-for="n in 100">
                <span>The {{ n }}</span>
            </div>
            <div id="element">
                Hi. I'm element.
            </div>

            <button v-on:click="prev_page">prev page</button>
        </div>
    </transition>
</template>

<script>
    var Vue = require('vue');
    var vueScrollTo = require('vue-scrollTo');
    Vue.use(vueScrollTo);
    export default {
        name: "page3",
        props: ['data', 'eventbus'],
        data: function () {
            return {
                my_counter: 0
            };
        },
        methods: {
            prev_page: function () {
                this.eventbus.$emit("test", { src: "page3", dst: "page2" });
                this.$router.back();
            },
            counter_up: function () {
                this.my_counter++;
            }
        }
    }
</script>