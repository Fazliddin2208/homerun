<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <v-img 
                src="@/assets/capterra.png"
                width="50%"
                class="my-img"
                ></v-img>
                <h1>{{rating}}</h1>
                <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                large
                half-increments
                class="rating"
                ></v-rating>
                <p>Average review on Capterra,</p>
                <p>independent review site</p>
            </div>
            <div class="right">
                <v-img 
                src="@/assets/intercom.png"
                max-width="50%"
                class="my-img"
                ></v-img>
                <h1>98,8%</h1>
                <v-img 
                src="@/assets/smile.png"
                max-width="15%"
                class="smile"
                ></v-img>
                <p>Average rating based on</p>
                <p>1500+ support conversations</p>
            </div>
        </div>

        <div class="bottom">
            <v-img 
            src="@/assets/dog.png"
            class="bottom-img"
            ></v-img>
            <h1>Start your free</h1>
            <h1>Homerun trial today</h1>
            <v-btn class="bottom-btn">Start free trial</v-btn>
            <div class="condition">
                <p>✔️ Totally free for 15 days</p>
                <p>✔️ No credit card needed</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
        rating: 4.5,
    }),
    }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0px auto;
    padding-top: 50px;
    .top{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80%;
        margin: 0 auto;
        .my-img{
                margin: 0 auto;
                margin-bottom: 15px;
        }
        .left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
        }
        h1{
            font-size: 60px;
        }
        .smile, .rating{
            height: 50px;
            margin: 0 auto 20px;
        }
    }
    .bottom{
        width: 100%;
        margin-top: 80px;
        background-color: #3CA9FF;
        color: white;
        border-radius: 20px;
        .bottom-img{
            width: 15%;
            margin: 40px auto 10px;
        }
        h1{
            font-size: 50px;
            margin-bottom: -20px;
        }
        .bottom-btn{
            background-color: #0E1016;
            margin: 35px auto;
            font-family: RThin;
        }
        .condition{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 40%;
            margin: 0 auto 40px;
        }
    }
}
</style>