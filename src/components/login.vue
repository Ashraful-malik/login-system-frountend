<template>
  <div>
    <div class="container">
      <form @submit.prevent="submitForm" to="/">
        <h1>logiddn</h1>
        <label>Email</label><br />
        <input
          type="email"
          placeholder="email"
          required
          v-model="data.email"
        /><br />
        <label>password</label><br />
        <input
          type="password"
          placeholder="email"
          required
          v-model="data.password"
        /><br />
        <button>login</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import cookies from "js-cookie";
export default {
  name: "login",
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm: function() {
      console.log(this.data);
      axios
        .post("http://localhost:5000/login", this.data)
        .then((response) => {
          console.log(response.data);
          cookies.set("reftoken", response.data.refreshToken);

          this.$router.push("/user");
        })
        .catch((err) => {
          // console.log(err);
          console.log(err.response);
        });
    },
  },
};
</script>
