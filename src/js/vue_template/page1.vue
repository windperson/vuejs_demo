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
        props: ['data'],
        data: function () {
            return {
                my_counter: 0
            };
        },
        methods: {
            next_page: function () {
                this.$emit("test","page-1 -> page-2");                
                this.$router.push({name: "page-2"});
            },
            counter_up: function () {
                this.my_counter++;
            }
        }
    }
</script>