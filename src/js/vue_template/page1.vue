<template>
    <transition name="fade">
        <div>
            <h3>Page 1</h3>
            <p>This is page1, <br/> data = <span> {{ data }} </span><br/> counter = {{ my_counter }}
            </p>
            <button v-on:click="counter_up">+ 1</button>
            <br/>
            <hr/>
            <div v-on:click="changeShowHeader"><span>toggle</span>
                <transition name="fade">
                    <span v-if="show_status_toggle">&nbsp;▲&nbsp;</span>
                    <span v-else>&nbsp;▼&nbsp;</span>
                </transition>
            </div>
            <transition name="fade">
                <div v-if="show_status_toggle">
                    <span>Header Shown</span>
                </div>
            </transition>
            <hr/>
            <button v-on:click="next_page">next page</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "page1",
        props: ['data', 'eventbus'],
        data: function () {
            return {
                my_counter: 0,
                show_status: false
            };
        },
        methods: {
            next_page: function () {
                this.eventbus.$emit("test", { src: "page1", dst: "page2" });
                this.$router.push({ name: "page-2" });
            },
            counter_up: function () {
                this.my_counter++;
            },
            changeShowHeader: function () {
                this.show_status = !this.show_status;
            }
        },
        computed: {
            show_status_toggle: function () {
                return this.show_status;
            }
        }
    }
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>