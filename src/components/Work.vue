<template>
    <div class="my-work">
        <h1>How Homerun works</h1>
        <v-img src="../assets/hhw.png" alt="salom" class="my-img"></v-img>
        <v-btn class="my-btn"><fa icon="circle-play"/> Watch: Homerun in 90 seconds</v-btn>
        <iframe class="my-iframe" width="40%" height="315" src="https://www.youtube.com/embed/FlD7tyMDbuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen v-show="vidVisible" ></iframe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                vidVisible: false
            }
        },
        mounted() {
            let myBtn = document.querySelector(".my-btn")
            let iframe = document.querySelectorAll("my-iframe")
            myBtn.addEventListener("click",()=> {
                this.vidVisible = !this.vidVisible
            })
        },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>
.my-work{
    width: 80%;
    margin: 0 auto;
    padding: 50px 0 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .my-img{
        width: 70%;
        margin: 0 auto;
    }
    .my-btn{
        width: 330px;
        border-radius: 330px;
        padding: 10px;
        position: relative;
        margin: -20px auto;
        box-shadow: 0px 7px 10px rgba(186, 193, 197, 0.2);
    }
    iframe{
        margin: 0 auto;
        position: absolute;
        border: 1px solid black;
    }
}
</style>