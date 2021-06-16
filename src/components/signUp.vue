<template>
  <div>
    <div class="container">
      <form @submit.prevent="checkForm">
        <h1>signUp</h1>
        <label>Fullname</label><br />
        <input
          type="text"
          placeholder="email"
          required
          v-model="data.name"
        /><br />
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
export default {
  name: "signUp",
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    checkForm: function() {
      axios
        .post("http://localhost:5000/register", this.data)
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
