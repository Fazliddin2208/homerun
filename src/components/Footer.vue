<template>
    <div class="container">
        <div class="top">
            <v-img src="@/assets/omeru.png" max-width="10%"></v-img>
            <v-btn color="info">Start free trial</v-btn>
        </div>
        
        <div class="bottom">
            <div class="first">
                <v-list v-for="menu in menus" :key="menu.id" class="my-list">
                    <v-list-item class="my-title"><b>{{menu.title}}</b></v-list-item>
                    <v-list-item v-for="lin in menu.links" :key="lin.key" class="links"><a href="" :class="lin.color" class="my-link">{{lin.link}} <span :class="lin.badgeClass">{{lin.badge}}</span></a></v-list-item>
                </v-list>
            </div>

            <div class="second">
                <h3>Art of Work newsletter</h3>
                <p>Receive must-read articles and trends on company culture, hiring and work/life balance.</p>
                <h3>Sign up to our newsletter</h3>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2">Join</span>
                    </div>
                </div>
                <a href="https://www.instagram.com"><fa :icon="['fab', 'instagram' ]" class="instagram"/></a>
                <a href="https://www.linkedin.com"><fa :icon="['fab', 'linkedin-in' ]" class="linkedin"/></a>
                <a href="https://www.twitter.com"><fa :icon="['fab', 'twitter' ]" class="twitter"/></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menus:[
                    {
                        id:1,
                        title:'Product',
                        links:[
                            {link:'Hire',color:'green',badge:'',badgeClass:'',key:1},
                            {link:'Create',color:'yellow',badge:'',badgeClass:'',key:2},
                            {link:'Templates',color:'default',badge:'',badgeClass:'',key:3},
                            {link:'All Features',color:'default',badge:'',badgeClass:'',key:4},
                        ]
                    },
                    {
                        id:2,
                        title:'Learn',
                        links:[
                            {link:'Blog',color:'default',badge:'',badgeClass:'',key:1},
                            {link:'Help Center',color:'default',badge:'',badgeClass:'',key:2},
                        ]
                    },
                    {
                        id:3,
                        title:'About Homerun',
                        links:[
                            {link:'About Us',color:'default',badge:'',badgeClass:'',key:1},
                            {link:'We\'re Hiring',color:'default',badge:'2',badgeClass:'number',key:2},
                            {link:'Contact Us',color:'default',badge:'',badgeClass:'',key:3},
                        ]
                    },
                    {
                        id:4,
                        title:' ',
                        links:[
                            {link:'Pricing',color:'default',badge:'',badgeClass:'',badgeClass:'',key:5},
                            {link:'New in Homerun ✨',color:'default',badge:'',badgeClass:'',key:6}
                        ]
                    },
                    {
                        id:5,
                        title:'Guides',
                        links:[
                            {link:'Remote Hiring',color:'default',badge:'new',badgeClass:'string',key:1},
                            {link:'Employer Branding',color:'default',badge:'',badgeClass:'',key:2},
                            {link:'Job Interviewing',color:'default',badge:'',badgeClass:'',key:3},
                            {link:'Diversity & Inclusion',color:'default',badge:'',badgeClass:'',key:4},
                            {link:'Attracting Talent',color:'default',badge:'',badgeClass:'',key:5},
                            {link:'GDPR Hiring',color:'default',badge:'',badgeClass:'',key:6}
                        ]
                    },
                    {
                        id:6,
                        title:'Legal',
                        links:[
                            {link:'Terms',color:'default',badge:'',badgeClass:'',key:1},
                            {link:'Privacy',color:'default',badge:'',badgeClass:'',key:2},
                        ]
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

.form-control{
    border: 2px solid rgba(119, 130, 145, 0.3);
    border-radius: 0.25rem 0 0 0.25rem;
    width: 90%;
    padding: 0 10px;
    background-color: rgba(119, 130, 145, 0.3);
}
.input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    margin: 20px 0;
}
.input-group-append {
    margin-left: -1px;
    display: -ms-flexbox;
    display: flex;
    width: 25%;
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
    background-color: #595D68;
    color: white;
    width: 100%;
}

.container{
    width: 80%;
    margin: 50px auto;
    background-color: #000;
    padding-top: 20px;
    border-radius: 20px;
    .top{
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .bottom{
        width: 90%;
        margin: 50px auto;
        display: flex;
        flex-direction: row;
        padding-bottom: 50px;
        .first{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;  
            align-items: baseline;
            width: 69%;     
            .my-list{
                color: green;
                overflow: hidden;
                width: 32%;
                height: auto;
                background: none;
                line-height: -5px;
                padding: 0;
                .my-title{
                    color: #fff;
                    display: flex;
                    align-items: flex-start;
                    align-content: flex-start;
                    justify-content: flex-start;

                    b{
                        font-size: 16px;
                    }
                }
                .links{
                    margin-bottom: -15px;
                }
                .my-link{
                    text-decoration: none;
                    margin-bottom: 20px;
                }
            }
        }
        .second{
            width: 30%;
            color: white;
            text-align: left;
            h3{
                font-size: 16px;
                margin-top: 5px;
            }
            p{
                color: #778291;
                font-size: 17px;
                margin: 19px 0 30px;
            }
            .instagram, .linkedin, .twitter{
                margin-top: 15px;
                width: 15px;
                height: 15px;
                padding: 5px;
                border-radius: 100%;
                margin-right: 7px;
                cursor: pointer;
            }
            .instagram{
                background-color: #CD486B;
            }
            .linkedin{
                background-color: #007BB6;
            }
            .twitter{
                background-color: #4099FF;
            }
        }
    }
}

.green{
    color: #0C9F64;
}
.yellow{
    color: #FEC104;
}
.default{
    color: #778291;
}
.number{
    background-color: #FC4945;
    font-size: 12px;
    color: white;
    display: inline-block;
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 100%
}
.string{
    background-color: #F64775;
    font-size: 12px;
    color: white;
    display: inline-block;
    width: 40px;
    height: 20px;
    border-radius: 15px;
}
</style>