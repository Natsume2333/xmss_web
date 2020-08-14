<template>
    <div id="app">
        <NavBar></NavBar>
        传媒案例
        <Bottom></Bottom>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'
    import Bottom from '@/components/Bottom.vue'

    export default {
        name: 'Home',
        components: {
            NavBar,
            Bottom
        }
    }
</script>
