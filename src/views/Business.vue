<template>
    <div id="app">
        <NavBar></NavBar>
        Business
        <Bottom></Bottom>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue';
    import Bottom from '@/components/Bottom.vue'

    export default {
        name: 'Home',
        components: {
            NavBar,
            Bottom
        }
    }
</script>
