<template>
  <div class="slider-inner">
    <Carousel @slide-start="slideFunction" ref="myCarousel" :items-to-show="1">
      <Slide v-for="(image, key) in images" :key="key">
        <img :src="getImg(image)" alt="" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="gallery">
      <button @click="clickImg(key)" v-for="(image, key) in images" :key="key"
        :class="key == currentPage ? 'focused-img' : 'non-focused-img'">
        <img :src="getImg(image)" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "CarouselComponent",
  props: {
    images: {
      type: Array,
      default: null,
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup(props) {
    const myCarousel = ref(null);
    const currentPage = ref(0);

    const slideFunction = ({ slidingToIndex }) => {
      currentPage.value = slidingToIndex;
    };

    // const getImg = (file) => {
    //   return new URL(`../../../assets/png/${file}`, import.meta.url).href;
    // };
    const getImg = (file) => {
      return new URL(`../../../assets/images/${file}`, import.meta.url).href;
    };

    const clickImg = (carouselNum) => {
      console.log(myCarousel.value)
      // myCarousel.value.$refs.myCarousel.slideTo(carouselNum); 以前の仕様
      myCarousel.value.slideTo(carouselNum);
    };

    return {
      myCarousel,
      currentPage,
      slideFunction,
      getImg,
      clickImg,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 300px;
  width: 500px;
  margin: 0 auto;

  @include mobile {
    width: 100%;
    height: auto;
  }
}

.gallery {
  display: flex;
  gap: 20px;
  margin: 40px 0;
  justify-content: center;

  @include mobile {
    gap: 10px;
  }

  img {
    height: 80px;
    width: 120px;

    @include mobile {
      width: 60px;
      height: 40px;
    }
  }

  button: {
    background: #fff;
  }

  .focused-img {
    border: 1px solid red;
    background: #fff;
  }

  .non-focused-img {
    border: none;
    background: #fff;
  }
}
</style>
