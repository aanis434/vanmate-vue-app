<template>
  <findVanByModel></findVanByModel>
  <popular-vechiles></popular-vechiles>
</template>

<script>
import FindVanByModel from "./components/FindVanByModel.vue";
import PopularVechiles from "./components/PopularVehicles.vue";

export default {
  name: "App",
  components: {
    FindVanByModel,
    PopularVechiles,
  },
};
</script>

<style>
</style>
