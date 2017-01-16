<template>
    <transition name="fade">
        <div>
            <h3>Page 2</h3>
            <p>This is page2, <br/> data = <span> {{ data }} </span><br/> counter = {{ my_counter }}
            </p>
            <button v-on:click="counter_up">+ 1</button>
            <br/>
            <button v-on:click="change_img">change image</button>
            <img :src="imgurl"/>
            <hr/>
            <button v-on:click="prev_page">prev page</button> | <button v-on:click="next_page">next page</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "page2",
        props: ['data','eventbus'],
        data: function () {
            return {
                my_counter: 0,
                imgurl: ""
            };
        },
        methods: {
            next_page: function () {
                this.eventbus.$emit("test",{src: "page2", dst:"page3"});                
                this.$router.push({name: "page-3"});
            },
            prev_page: function () {
                this.eventbus.$emit("test",{src: "page2", dst:"page1"});                
                this.$router.back();
            },
            counter_up: function () {
                this.my_counter++;
            },
            change_img: function () {
                this.imgurl = "http://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
            }
        }
    }
</script>