<template>
  <div class="container">
    <v-row>
      <div class="my-top">
        <v-col
          md="3"
        >
          <v-img 
          src="@/assets/logo.png"
          alt=""
          class="my-logo"
          ></v-img>
          
        </v-col>

        <v-col
          md="6"
        >
          <ul class="my-menu">

            <router-link 
            v-for="menu in menus"
            :key="menu.id"
            class="my-list"
            :to="menu.url"
            >
            <a>{{menu.link}} <span :class="menu.badgeClass">{{menu.badge}}</span></a>
            </router-link>
          </ul>
        </v-col>

        <v-col
          md="3"
        >
          <v-btn>
            Log in
          </v-btn>

          <v-btn
            color="#0099FF"
            class="mx-2 trial"
          >
            Start free trial
          </v-btn>
        </v-col>
      </div>
  </v-row>
  </div>
  <v-app>
    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    menus:[
        {link:'Product',url:'/',badge:'',badgeClass:'', id:1},
        {link:'Templates',url:'/templates',badge:'new',badgeClass:'my-badge', id:2},
        {link:'Pricing',url:'/',badge:'',badgeClass:'', id:3},
        {link:'Customers',url:'/customers',badge:'',badgeClass:'', id:4},
        {link:'Learn',url:'/learn',badge:'',badgeClass:'', id:5}
      ]
  }),
}
</script>
<style lang="scss" scoped>
.my-logo{
  width: 40%;
} 
.trial{
  color: white !important;
} 
.container{
  width: 95%;
  margin: 20px auto;
  text-align: center;
  .my-top{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .my-menu{
    // border: 1px solid red;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .my-list{
      width: 20%;
      text-align: left;
      text-decoration: none;
      a{
        font-family: Roboto;
        text-decoration: none;
        color: black;
        .my-badge{
          display: inline;
          padding: 1px 5px;
          border-radius: 20px;
          background-color: #F64775;
          color: white;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
