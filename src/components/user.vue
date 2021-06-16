<template>
  <div>
    <div class="userexist" v-if="user">
      <h1>user</h1>
      {{ user }}
      {{ user.email }}
    </div>
    {{ errorMessage }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import api from "../axios.js";

export default {
  name: "user",
  data() {
    return {
      // userData: "",
      errorMessage: "",
      // user: {
      //   email: "",
      // },
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },

  mounted() {
    api
      .get("http://localhost:5000/user")
      .then((response) => {
        // console.log(response);
        // this.userData = response.data;
        this.$store.dispatch("user", response.data);
      })
      .catch((error) => {
        // console.log(error.message);
        console.log(error.response);
        this.errorMessage = error.response.data;
      });
  },
};
</script>
