<template>
    <div class="my-header">
        <h1>Where hiring <br> comes together.</h1>
        <h4>Everything you need to organise your hiring <br> and make a great impression.</h4>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Work email" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">Start free trial</span>
            </div>
        </div>
        <p>Join thousands of teams hiring with Homerun</p>
        

        <div class="sponsors">
            <v-carusel-item 
                v-for="sponsor in sponsors" 
                :key="sponsor.id">
                <img
                    :src="sponsor.imgSrc"
                    :alt="sponsor.imgSrc"
                    class="sponsor-img">
            </v-carusel-item>
        </div>
        

    </div>
</template>

<script>
    export default {
        data() {
            return {
                sponsors: [
                    {id:1, imgSrc:require("@/assets/tbwa.png")},
                    {id:2, imgSrc:require("@/assets/tony.png")},
                    {id:3, imgSrc:require("@/assets/bufer.png")},
                    {id:4, imgSrc:require("@/assets/volks.png")},
                    {id:5, imgSrc:require("@/assets/gecko.png")},
                    {id:6, imgSrc:require("@/assets/publicis.png")},
                    {id:7, imgSrc:require("@/assets/tnw.png")}
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
@font-face{
    font-family: Roboto;
    src: url("@/fonts/Roboto.ttf");
}

.my-header{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    h1{
        font-size: 110px;
        font-weight: 400;
        text-align: center;
        line-height: 100px;
        font-family: Roboto;
    }
    h4{
        margin-top: 40px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 23px;
        font-family: Roboto;
        font-weight: 400;
    }
    p{
        margin: 20px 0;
    }
}
.form-control{
    border: 2px solid #0099FF;
    border-radius: 0.25rem 0 0 0.25rem;
    width: 300px;
    padding: 0 10px;
}
.input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
}
.input-group-append {
    margin-left: -1px;
    display: -ms-flexbox;
    display: flex;
}
.input-group-text {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    border: 1px solid 0.25rem;
    border-radius: 0 0.25rem 0.25rem 0 ;
    background-color: #0099FF;
    color: white;
}

.sponsors{
    width: 80%;
    display: flex;
    flex-direction: row;
    height: 100px;
    text-align: center;
    .sponsor-img{
        width: 100%;
        height: 100px;
    }
}

</style>