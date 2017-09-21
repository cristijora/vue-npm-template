<template>
    <my-component></my-component>
</template>
<script>
    import MyComponent from '../src/index'
    export default {
        components: {MyComponent},
        data () {
            return {
                msg: 'Hello'
            }
        }
    }
</script>