<template>
  <!-- popular vehicles start -->
  <section class="my-20">
    <div class="container font-inter">
      <!-- content heading start  -->
      <div class="flex items-center justify-between pb-12">
        <h2 class="text-2xl lg:text-3xl font-bold">Popular Vehicles</h2>
        <div class="flex items-center justify-around"></div>
      </div>
      <!-- content heading end  -->
      <!-- content start  -->
      <div class="popular-slider">
        <!-- carousel component with props value start  -->
        <carousel :options="options" :items="items">
          <template #splideSlide>
            <SplideSlide v-for="(item, index) in items" :key="index">
              <!-- card item start  -->
              <div
                class="
                  flex flex-col
                  space-y-3
                  rounded-lg
                  border border-gray-200
                "
              >
                <div
                  :class="item.bgColor"
                  class="
                    flex
                    justify-between
                    items-center
                    pt-4
                    pb-2
                    px-6
                    rounded-tl-md rounded-tr-md
                  "
                >
                  <h4 class="text-base font-semibold text-white capitalize">
                    {{ item.heading }}
                  </h4>
                  <h4 class="text-base font-semibold text-white capitalize">
                    {{ item.subheading }}
                  </h4>
                </div>
                <div class="mx-auto">
                  <img
                    :src="require('@/' + item.img)"
                    alt=""
                    class="w-full h-52"
                  />
                </div>
                <div class="px-6">
                  <h2 class="font-semibold text-lg capitalize tracking-wide">
                    {{ item.title }}
                  </h2>
                  <h6
                    class="
                      text-base
                      capitalize
                      text-gray-400
                      letter
                      tracking-tighter
                    "
                  >
                    {{ item.subtitle }}
                  </h6>
                </div>
                <div
                  class="
                    flex
                    items-start
                    justify-center
                    divide-x divide-gray-100
                  "
                >
                  <!-- features item start  -->
                  <div
                    class="
                      flex flex-col
                      justify-items-center
                      items-center
                      space-y-1
                      px-4
                    "
                    v-for="(feature, index) in item.features"
                    :key="index"
                  >
                    <div>
                      <img
                        :src="require('@/' + feature.icon)"
                        class="opacity-50"
                        alt=""
                      />
                    </div>
                    <h5 class="capitalize font-semibold text-xs text-gray-500">
                      {{ feature.name }}
                    </h5>
                    <h5 class="capitalize text-xs text-gray-500">
                      {{ feature.type }}
                    </h5>
                  </div>
                  <!-- item end  -->
                </div>
                <div class="px-6 flex justify-between items-center py-6">
                  <div>
                    <h5 class="font-bold text-black text-2xl">
                      £{{ item.price }}
                    </h5>
                    <div class="flex items-center justify-evenly text-gray-400">
                      <p class="text-xs capitalize">Per Month Ex. VAT</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <a
                    :href="item.btnLink"
                    :class="item.bgColor"
                    class="
                      capitalize
                      font-semibold
                      text-base text-white
                      px-5
                      py-3
                      rounded-lg
                    "
                    >view offer</a
                  >
                </div>
              </div>
              <!-- card item end  -->
            </SplideSlide>
          </template>
        </carousel>
        <!-- carousel component with props value end  -->
      </div>
      <!-- content end  -->
    </div>
  </section>
  <!-- popular vehicles end -->
</template>

<script>
import { SplideSlide } from "@splidejs/vue-splide";
import Carousel from "./Carousel.vue";

export default {
  name: "PopularVechiles",
  components: {
    Carousel,
    SplideSlide,
  },
  data() {
    return {
      options: {
        perPage: 3,
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
          heading: "In Stock Deal",
          subheading: "2 - 3 Week Delivery",
          img: "assets/images/popular_vehicles-1.png",
          title: "Ford Transit Custom Limited L1H1",
          subtitle: "2.0 EcoBlue 130ps Low Roof Limited Van",
          bgColor: "bg-primary",
          price: "205.95",
          btnLink: "#",
          features: [
            {
              icon: "assets/images/transmission.png",
              name: "Trasmission",
              type: "Manual",
            },
            {
              icon: "assets/images/fuel.png",
              name: "Fuel Type",
              type: "Dissel",
            },
            {
              icon: "assets/images/emissions.png",
              name: "Emissions",
              type: "125/Km",
            },
            {
              icon: "assets/images/economy.png",
              name: "Economy",
              type: "56.5MPG",
            },
          ],
        },
        {
          heading: "Hot Deals",
          subheading: "2 - 3 Week Delivery",
          img: "assets/images/popular_vehicles-2.png",
          title: "Ford Transit Custom Limited L1H1",
          subtitle: "2.0 EcoBlue 130ps Low Roof Limited Van",
          bgColor: "bg-secondary",
          price: "305.95",
          btnLink: "#",
          features: [
            {
              icon: "assets/images/transmission.png",
              name: "Trasmission",
              type: "Manual",
            },
            {
              icon: "assets/images/fuel.png",
              name: "Fuel Type",
              type: "Dissel",
            },
            {
              icon: "assets/images/emissions.png",
              name: "Emissions",
              type: "125/Km",
            },
            {
              icon: "assets/images/economy.png",
              name: "Economy",
              type: "56.5MPG",
            },
          ],
        },
        {
          heading: "Electric Vechicles",
          subheading: "2 - 3 Week Delivery",
          img: "assets/images/popular_vehicles-3.png",
          title: "Ford Transit Custom Limited L1H1",
          subtitle: "2.0 EcoBlue 130ps Low Roof Limited Van",
          bgColor: "bg-ternary",
          price: "405.95",
          btnLink: "#",
          features: [
            {
              icon: "assets/images/transmission.png",
              name: "Trasmission",
              type: "Manual",
            },
            {
              icon: "assets/images/fuel.png",
              name: "Fuel Type",
              type: "Dissel",
            },
            {
              icon: "assets/images/emissions.png",
              name: "Emissions",
              type: "125/Km",
            },
            {
              icon: "assets/images/economy.png",
              name: "Economy",
              type: "56.5MPG",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.splide__slide img {
  width: 100%;
  height: auto;
}
</style>