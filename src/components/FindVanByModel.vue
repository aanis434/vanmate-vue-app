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
                  px-5
                  pt-11
                  pb-5
                  flex flex-col
                  items-center
                  justify-around
                  shadow-lg
                  rounded-md
                  bg-gray-50
                "
              >
                <img
                  class="w-full max-h-40 object-contain"
                  :src="require('@/' + item.img)"
                  alt=""
                />
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
        padding: 16,
        pagination: false,
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
  height: auto;
}

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

/* floating select level */
.floating-label {
  position: relative;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 10px;
}

.floating-select {
  font-size: 14px;
  font-weight: 600;
  padding: 4px 4px;
  display: block;
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
}

.floating-select:focus {
  outline: none;
}

.float-label {
  color: #999;
  font-size: 12px;
  text-transform: capitalize;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.floating-select:focus ~ label,
.floating-select:not([value=""]):valid ~ label {
  top: -15px;
  font-size: 14px;
}

/* active state */
.floating-select:focus ~ .floating-select:focus ~ {
  width: 50%;
}

/* active state */
.floating-select:focus ~ {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
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
  .floating-select:focus ~ label,
  .floating-select:not([value=""]):valid ~ label {
    top: -15px;
    font-size: 14px;
  }
}
</style>