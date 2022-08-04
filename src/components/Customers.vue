<template>
    <div class="container">
        <v-img src="@/assets/jlogo.png" class="logo"></v-img>
        <h1>Join the club.</h1>
        <p>Homerun customers share a passion for culture, design and innovation.</p>
        <p>We all agree hiring can be more meaningful and personal.</p>
        <v-btn class="my-btn">About our customers</v-btn>

        <v-carousel :show-arrows="false">
            <v-carousel-item
                v-for="carouselItem in carouselItems"
                class="cart"
                >
                    <div class="cart" 
                    >
                        <div class="left"><v-img :src="carouselItem.firstImg" class="my-img1"></v-img></div>
                        <div class="right">
                            <v-img :src="carouselItem.secondImg" class="my-img2"></v-img>
                            <h4>“{{carouselItem.story}}”</h4>
                            <p>{{carouselItem.name}}</p>
                            <p>{{carouselItem.job}}</p>
                            <v-btn class="my-btn">{{carouselItem.button}}</v-btn>
                        </div>
                        
                    </div>
                </v-carousel-item>
        </v-carousel>

        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                carouselItems:[
                    {
                        firstImg:require('@/assets/carouselItem.png'),
                        secondImg: require('@/assets/dopper.png'),
                        story:"You don't need to be a pro in HR or even in Homerun to be able to use it. It's so easy that anyone in the team can figure it out.",
                        name:'Isabel machielse',
                        job: 'People & culture coordinator',
                        button:'Read customer story'
                    },
                    {
                        firstImg:require('@/assets/carouselItem.png'),
                        secondImg: require('@/assets/dopper.png'),
                        story:"You don't need to be a pro in HR or even in Homerun to be able to use it. It's so easy that anyone in the team can figure it out.",
                        name:'Isabel machielse',
                        job: 'People & culture coordinator',
                        button:'Read customer story'
                    },
                    {
                        firstImg:require('@/assets/carouselItem.png'),
                        secondImg: require('@/assets/dopper.png'),
                        story:"You don't need to be a pro in HR or even in Homerun to be able to use it. It's so easy that anyone in the team can figure it out.",
                        name:'Isabel machielse',
                        job: 'People & culture coordinator',
                        button:'Read customer story'
                    },
                    {
                        firstImg:require('@/assets/carouselItem.png'),
                        secondImg: require('@/assets/dopper.png'),
                        story:"You don't need to be a pro in HR or even in Homerun to be able to use it. It's so easy that anyone in the team can figure it out.",
                        name:'Isabel machielse',
                        job: 'People & culture coordinator',
                        button:'Read customer story'
                    }
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: RThin;
    src: url(@/fonts/Roboto-Thin.ttf);
}
.container{
    width: 80%;
    background-color: #202E78;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 50px 0;
    .logo{
        width: 60px;
        margin-bottom: 10px;
    }
    p{
        &:nth-child(odd){
            margin-top: 20px !important;
        }
        &:nth-child(even){
            margin-bottom: 50px !important;
        }
    }
    .my-btn{
        border: 2px solid white;
        background: none;
        &:nth-child(odd){
            margin-bottom: 50px;
        }
    }
    .cart{
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        background-color: #000639;
        width: 90%;
        margin: 0 auto;
        .left{
            width: 50%;
            .my-img1{
                width: 100%;
            }
        }
        .right{
            width: 50%;
            font-family: RThin;
            padding: 20px;
            text-align: left;
            .my-img2{
                width: 120px;
                margin-bottom: 30px;
            }
            h4{
                font-family: RThin;
                font-size: 30px;
            }
            p{
                text-transform: capitalize;
            }
        }
    }
}
</style>