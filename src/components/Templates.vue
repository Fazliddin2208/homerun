<template>
    <div class="container">
        <h4 class="my-badge">new</h4>
        <h1>Kickstart hiring</h1>
        <h1>with Homerun templates.</h1>
        <p>Ready to use job templates to help you with</p>
        <p>the hardest parts of creating a job post.</p>
        <v-btn
        style="color: white !important;"
        color="cyan"
        class="my-button"
        >
        Explore all templates</v-btn>
        <v-img src="@/assets/templates.png"></v-img>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: RThin;
    src: url(@/fonts/Roboto-Thin.ttf);
}
.container{
    background-color: #181818;
    border-radius: 20px;
    margin: 50px auto;
    width: 80%;
    padding: 50px 0;
    color: white;
    .my-badge{
        background-color: #F64775;
        color: white;
        display: inline-block !important;
        width: 55px;
        border-radius: 55px;
        font-family: RThin;
        cursor: default;
        margin-bottom: 30px;
    }
    h1{
        margin-top: -10px;
    }
    p{
        margin-top: 20px;
        font-family: RThin;
        &:nth-child(odd){
            margin-top: 0;
            margin-bottom: 50px;
        }
    }
    .my-button{
        font-size: 13px;
        text-transform: none;
        font-family: RThin;
        margin-bottom: 50px;
    }
}
</style>