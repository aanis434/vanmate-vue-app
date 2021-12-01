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
.splide__arrow {
  border-radius: none;
  border-radius: 6px;
  background-color: #e5e5e5;
  opacity: 1;
  /* color: #9A9EA7; */
}

.splide__arrow--next {
  top: -65px;
  right: 0;
}

.splide__arrow--prev {
  top: -65px;
  left: 94%;
}

.search-filter {
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 1920px) {
  .splide__arrow--prev {
    top: -65px;
    left: 95%;
  }
}
@media (max-width: 1536px) {
  .splide__arrow--prev {
    top: -65px;
    left: 94%;
  }
}
@media (max-width: 1200px) {
  .splide__arrow--prev {
    top: -65px;
    left: 92%;
  }
}
@media (max-width: 991px) {
  .splide__arrow--prev {
    top: -65px;
    left: 90%;
  }
}
@media (max-width: 767px) {
  .splide__arrow--prev {
    top: -65px;
    left: 82%;
  }
}
</style>