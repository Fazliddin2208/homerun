<template>
    <div>
        <div class="cart" 
        v-for="action in actions" :key="action.id">
            <div class="left">
                <h3 :class=action.color>{{action.main}}</h3>
                <h2>{{action.title}}</h2>
                <p>{{action.text}}</p>
                <v-btn>{{action.button}}</v-btn>
            </div>

            <div class="right">
                <v-img :src="action.photo" class="my-img"></v-img>
                <p>{{action.imgTitle}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actions:[
                    {
                        id:1,
                        main:'Hire',color:"green",
                        title:'An all-in-one tool for your entire team.',
                        text:'No more ping-ponging between emails, spreadsheets, and other apps. Bring everything together in one place.',
                        button:'Learn more',
                        photo:require('@/assets/dashboard.png'),
                        imgTitle:'All your jobs, candidates, messages and notes in one place.'

                    },
                    {
                        id:2,
                        main:'Create',color:"yellow",
                        title:'An experience candidates simply love.',
                        text:'Treat candidates with a rich career site, beautiful job posts, tailored application forms and faster response times.',
                        button:'Learn more',
                        photo:require('@/assets/transfer.png'),
                        imgTitle:'Career page created with Homerun.'

                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.cart{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 50px auto;
    &:nth-child(even){
        flex-direction: row-reverse;
    }
    .left{
        width: 30%;
        .green{
            color: #0C9F64;
        }
        .yellow{
            color: #FEC104;
        }
        h2{
            font-size: 45px;
        }
        p{
            margin-bottom: 20px;
        }
    }
    .right{
        width: 68%;
        .my-img{
            width: 100%;
        }
        p{
            margin-top: 10px;
            text-align: center;
            color: rgba(14, 16, 22, 0.4);
        }
    }
}
</style>