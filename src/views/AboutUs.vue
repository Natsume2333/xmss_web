<template>
    <div id="app">
        <NavBar></NavBar>
        关于我们
        <Bottom></Bottom>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue';
    import Bottom from '@/components/NavBar.vue'

    export default {
        name: 'Home',
        components: {
            NavBar,
            Bottom
        }
    }
</script>
