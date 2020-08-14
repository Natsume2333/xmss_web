<template>
    <div class="bottom">
        <div class="left_bottom">
            <div class="company_name">
                <p>鑫梦盛世影视文化传播（深圳）有限公司</p>
            </div>
            <div class="link">
                <div class="address">
                    <span>地址：深圳市南山区赤湾自贸区少帝路1号</span>
                </div>
                <div class="phone">
                    <span>电话：0755-00000000</span>
                </div>
            </div>
            <div class="movie_cooperation">
                <div class="title">影视合作</div>
                <div class="detail">
                    xmssyingshi@erdongpictures.com
                </div>
            </div>
            <div class="star_cooperation">
                <div class="title">艺人合作</div>
                <div class="detail">
                    xmssyingshi@erdongpictures.com
                </div>
            </div>
            <div class="advertise_cooperation">
                <div class="title">广告拍摄合作</div>
                <div class="detail">
                    xmssyingshi@erdongpictures.com
                </div>
            </div>
        </div>
        <div class="right_bottom">
            <div class="official_wechat">
                <div>
                    <img src="../assets/img/bottom/bottom2.png" alt="">
                </div>
                <div class="text">官方微信</div>
            </div>
            <div class="official_webo">
                <div>
                    <img src="../assets/img/bottom/bottom1.png" alt="">
                </div>
                <div class="text">官方微博</div>
            </div>
        </div>
    </div>
</template>

<script>

</script>
<style>
    .bottom{
        height: 479px;
        width: 100%;
        background-color: black;
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

    }
    /*左边大盒子*/
    .left_bottom{
        display: flex;
        flex-direction: column;
    }
    /*公司名称*/
    .company_name{
        color: white;
        font-size: 30px;
        margin-top: 130px;
        margin-bottom: 32px;
        font-family: Source;
    }
    /*地址与电话*/
    .link{
        display: flex;
        flex-direction: row;
        margin-bottom: 24px;
    }
    /*地址*/
    .address{
        color: white;
        font-size: 16px;
        margin-right: 20px;
    }
    /*电话*/
    .phone{
        color: #fafffe;
        font-size: 16px;
    }
    /*影视合作盒子*/
    .movie_cooperation{
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }
    /*艺人合作盒子*/
    .star_cooperation{
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }
    /*广告拍摄合作盒子*/
    .advertise_cooperation{
        display: flex;
        flex-direction: column;
        margin-bottom: 98px;
    }
    /*合作标题*/
    .title{
        color: white;
        font-size: 16px;
        margin-bottom: 3px;
    }
    /*网址*/
    .detail{
        color: #feffff;
        font-size: 12px;
    }

    /*右边盒子*/
    .right_bottom{
        display: flex;
        flex-direction: row;
        margin-top: 192px;
        text-align: center;
    }
    /*官方微信*/
    .official_wechat{
        margin-right: 88px;
    }

    /*文字*/
    .text{
        margin-bottom: 98px;
        font-size: 16px;
        margin-top: 10px;
    }
</style>
