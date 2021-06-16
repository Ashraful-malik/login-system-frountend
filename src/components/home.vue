<template>
  <div>
    <h1>home</h1>
    {{ user.email }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import cookies from "js-cookie";
const reftoken = cookies.get("reftoken");
import api from "../axios";
export default {
  name: "home",
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    this.getRefToken();
  },
  methods: {
    async getRefToken() {
      await api
        .post("http://localhost:5000/refresh-token", { refreshToken: reftoken })
        .then((response) => {
          cookies.set("accesstoken", response.data.accessToken);
          console.log(response.data.accessToken);
        });
    },
  },
};
</script>
