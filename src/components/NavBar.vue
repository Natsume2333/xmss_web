<template>
    <div id="app">
        <div class="NavBar_left">
            <img src="../assets/img/logo.png">
        </div>
        <ul style="list-style: none;padding: 0">
            <li v-for="title in titleList">
                <a :href=title.router>{{title.title}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                titleList:[
                    {
                        title:"网页首页",
                        router:"/",
                    },
                    {
                        title:"传媒案例",
                        router:"/Case",
                    },
                    {
                        title:"业务范围",
                        router:"/BriefIntroduction",
                    },
                    {
                        title:"新闻中心",
                        router:"/News",
                    },
                    {
                        title:"公司简介",
                        router:"/Business",
                    },
                    {
                        title:"关于我们",
                        router:"/AboutUs",
                    },
                    {
                        title:"联系我们",
                        router:"/ContactMe",
                    },

                ],
            }
        }
    }
</script>
<style scoped>
    #app{
        display: flex;
        height: 90px;
        align-items: center;
        position:absolute;
        z-index: 100;
    }
    .NavBar_left{
        margin-left: 200px;
    }
ul{
    display: flex;
    margin-left: 154px;
}
    li{
        margin: 0 30px;
    }
    a:link,:visited{
        color: #f5f5f5;
    }
    a:hover {
        color: #ef3332;
    }
    a{
        font-size: 14px;
        TEXT-DECORATION:none
    }
</style>
