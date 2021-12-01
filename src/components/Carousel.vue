<template>
  <Splide :options="options">
      <!-- custom arrow start -->
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
      <button class="splide__arrow splide__arrow--next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>
    <!-- custom arrow end  -->
    <slot name="splideSlide"></slot>
  </Splide>
</template>

<script>
import { Splide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default {
  components: {
    Splide,
  },
  props: ["options", "items"],
  data() {
    return {};
  },
};
</script>
<style>
</style>