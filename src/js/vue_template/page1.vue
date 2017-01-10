<template>
    <transition name="fade">
        <div>
            <h3>Page 1</h3>
            <p>This is page1, <br/> data = <span> {{ data }} </span><br/> counter = {{ my_counter }}
            </p>
            <button v-on:click="counter_up">+ 1</button>
            <br/>
            <button v-on:click="next_page">next page</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "page1",
        props: ['data','eventbus'],
        data: function () {
            return {
                my_counter: 0
            };
        },
        methods: {
            next_page: function () {
                this.eventbus.$emit("test",{src: "page1", dst:"page2"});                
                this.$router.push({name: "page-2"});
            },
            counter_up: function () {
                this.my_counter++;
            }
        }
    }
</script>