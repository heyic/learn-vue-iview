<template>

    <div>
        <span>{{ msg }}</span>
        <button v-bind:disabled="isButtonDisabled">Button</button>
    </div>

</template>


<script>
    export default {

        data() {
           return {
                msg: "hello world",
                isButtonDisabled: true
            }
        }
    }
</script>
