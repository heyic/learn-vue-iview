<template>

    <div>
        <span>{{ msg }}</span>
        <button v-bind:disabled="isButtonDisabled">Button</button>
        <a :href="url">百度</a>
        <button @click="click">请点击</button>
    </div>

</template>


<script>
    export default {

        data() {
           return {
                msg: "hello world",
                isButtonDisabled: true,
                url: "https://www.baidu.com/"
            }
        },
        methods: {
            click() {
                this.msg = "点击了"
            }
        }

    }
</script>
