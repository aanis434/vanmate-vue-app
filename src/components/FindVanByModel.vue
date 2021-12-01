<template>
  <!-- find van by model section start  -->
  <section>
    <div class="container font-inter mb-12 relative">
      <!-- content heading start  -->
      <div class="flex items-center justify-between pb-12">
        <h2 class="text-2xl lg:text-3xl font-bold">Find Van by Model</h2>
        <div class="flex items-center justify-around"></div>
      </div>
      <!-- content heading end  -->
      <!-- content start  -->
      <div id="card-slider">
        <!-- carousel component with props value start  -->
        <carousel :options="options" :items="items">
          <template #splideSlide>
            <SplideSlide v-for="(item, index) in items" :key="index">
              <div
                class="
                  shadow-lg
                  rounded-md
                  px-5
                  pt-11
                  pb-5
                  flex flex-col
                  items-center
                  justify-around
                "
              >
                <div class="splide__slide__container">
                  <img :src="require('@/' + item.img)" alt="" />
                </div>
                <div
                  class="flex flex-col items-center justify-items-end space-y-2"
                >
                  <h4 class="text-base font-semibold capitalize">
                    {{ item.title }}
                  </h4>
                  <a
                    href="#"
                    class="
                      text-xs
                      font-bold
                      text-gray-500
                      bg-gray-200
                      px-4
                      py-3
                      rounded-md
                      hover:text-blue-500 hover:bg-blue-200
                    "
                    >{{ item.subtitle }}</a
                  >
                </div>
              </div>
            </SplideSlide>
          </template>
        </carousel>
        <!-- carousel component with props value end  -->
      </div>
      <!-- content end  -->
    </div>
  </section>
  <!-- find van by model section end  -->
</template>

<script>
import { SplideSlide } from "@splidejs/vue-splide";
import Carousel from "./Carousel.vue";

export default {
  name: "FindVanByModel",
  components: {
    Carousel,
    SplideSlide,
  },
  data() {
    return {
      options: {
        perPage: 4,
        rewind: true,
        gap: 16,
        pagination: false,
        cover: true,
        heightRatio: 0.5,
        breakpoints: {
          992: {
            perPage: 2,
          },
          767: {
            perPage: 1,
          },
        },
      },
      items: [
        {
          img: "assets/images/van-1.png",
          title: "Small vans",
          subtitle: "23,457 vechicles",
        },
        {
          img: "assets/images/van-1.png",
          title: "Large vans",
          subtitle: "23,457 vechicles",
        },
        {
          img: "assets/images/van-3.png",
          title: "Medium vans",
          subtitle: "23,457 vechicles",
        },
        {
          img: "assets/images/van-4.png",
          title: "Electric vans",
          subtitle: "23,457 vechicles",
        },
        {
          img: "assets/images/van-1.png",
          title: "Magnetic vans",
          subtitle: "23,457 vechicles",
        },
        {
          img: "assets/images/van-1.png",
          title: "Super GL vans",
          subtitle: "23,457 vechicles",
        },
      ],
    };
  },
};
</script>

<style>
.splide__slide img {
  width: 100%;
  height: 9rem;
}
</style>