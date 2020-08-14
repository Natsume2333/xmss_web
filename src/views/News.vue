<template>
    <div id="app">
        <NavBar></NavBar>
        News
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <Bottom></Bottom>
    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue';
    import Bottom from '@/components/Bottom.vue'

    export default {
        name: 'Home',
        data() {
            return {
                input: ''
            }
        },
        components: {
            NavBar,
            Bottom
        }
    }
</script>
