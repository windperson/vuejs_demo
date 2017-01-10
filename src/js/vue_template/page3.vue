<template>
    <transition name="fade">
        <div>
            <h3>Page 3</h3>
            <p>This is page3, <br/> data = <span> {{ data }} </span><br/> counter = {{ my_counter }}
            </p>
            <button v-on:click="counter_up">+ 1</button>
            <br/>
            <button v-on:click="prev_page">prev page</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "page3",
        props: ['data'],
        data: function () {
            return {
                my_counter: 0
            };
        },
        methods: {
            prev_page: function () {
                this.$emit("test","page-3 -> page-2");                
                this.$router.back();
            },
            counter_up: function () {
                this.my_counter++;
            }
        }
    }
</script>