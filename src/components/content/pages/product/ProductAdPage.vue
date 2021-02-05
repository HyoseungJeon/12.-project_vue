<template>
  <div>
    <body>
        <!-- <p>
      <a @click="prev">Previous</a> || <a @click="next">Next</a>
    </p> -->

    <!-- :src="images[Math.abs(currentNumber) % images.length]" -->

    <div v-for="(number,index) in [currentNumber]" v-bind:key="index" transition="fade">
        <img id='image_size'
         :src="images[Math.abs(currentNumber) % images.length]"
         v-on:mouseover="stopRotation"
         v-on:mouseout="startRotation"
         />
    </div>
    </body>
  </div>
</template>

<script>
export default {
    name: 'product-ad-page',
    data: function(){
        return{
            images: ['http://localhost:8100/img/ad_1.bbc59a40.png', 'http://localhost:8100/img/ad_2.b7eda2af.png', 'http://localhost:8100/img/ad_3.eefea796.png'],
            //images: ['http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'],
            //@/assets/images/H_icon.png
            currentNumber: 0,
            timer: null
        }
    },

    ready: function () {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 5000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    }
}
</script>

<style>
.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}
#image_size{
    height: 450px;
    width: 100%;
}
</style>