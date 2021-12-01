<template>
  <findVanByModel></findVanByModel>
  <img src="./assets/images/van-1.png" alt="">
</template>

<script>
import FindVanByModel from "./components/FindVanByModel.vue";

export default {
  name: "App",
  components: {
    FindVanByModel,
  },
};
</script>

<style>
/* .splide__slide img {
  width: 100%;
  height: auto;
}

.splide__arrow {
  border-radius: none;
  border-radius: 6px;
  background-color: #e5e5e5;
  opacity: 1;
  /* color: #9A9EA7; 
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

/* floating select level  
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

/* active state 
.floating-select:focus ~ .floating-select:focus ~ {
  width: 50%;
}

/* active state 
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
} */
</style>
