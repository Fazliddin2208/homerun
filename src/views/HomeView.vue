<template>
  <div class="container">
    
  </div>
  
  <Header />
  <Work />
  <Learn />
  <Customers />
  <Templates />
  <Trial />
  <Footer />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Work from '@/components/Work.vue';
import Learn from '@/components/Learn.vue';
import Customers from '@/components/Customers.vue';
import Templates from '@/components/Templates.vue';
import Trial from '@/components/Trial.vue';
import Footer from '@/components/Footer.vue';
export default defineComponent({
  name: 'HomeView',
  data: () => ({
      alignments: [
        'start',
      ],
      
    }),
  components: {
    HelloWorld,
    Header,
    Work,
    Learn,
    Customers,
    Templates,
    Trial,
    Footer,
    Learn
},
});
</script>

<style lang="scss">
@font-face{
  font-family: Roboto;
  src: url("@/fonts/Roboto.ttf");
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  text-align: center;
  margin: 0 auto;
}
</style>