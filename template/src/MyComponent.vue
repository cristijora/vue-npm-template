<template>
    <div>
        {{msg}}
        <p>This template uses <a href="https://github.com/egoist/poi" target="_blank">POI</a> which is configuration wrapper for Vue and React. POI is used for development server only</p>
        <p>For production build, this template uses <a href="https://egoist.moe/bili/#/" target="_blank">Bili</a> which is a rollup plugin for Vue and React.
            The plugin is used to bundle your code and is based on <b>rollup-plugin-vue</b>. Checkout <b>bili.config.js</b> for bundle specific configuration.
        </p>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'This is your component. Your are 1 step away from publishing it to npm'
        }
    }
}
</script>
<style>
    p{
        font-size: 18px;
    }
</style>