<template>
  <div>
    <Navbar />
    <div class="spacing">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style scoped></style>
