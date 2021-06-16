<template>
  <div class="center examplex">
    <vs-navbar center-collapsed v-model="active">
      <vs-navbar-item :active="active == 'components'">
        <router-link to="/" class="nav-link" id="guide">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        <router-link to="/user" class="nav-link" id="guide">user</router-link>
      </vs-navbar-item>
      <template>
        <vs-button v-if="user" class="pr-10" @click.prevent="handleclick">
          logout
        </vs-button>
        <vs-button>
          <router-link to="/login" class="nav-link" id="guide"
            >Login</router-link
          ></vs-button
        >
        <vs-button>
          <router-link to="/signup" class="nav-link" id="guide"
            >signUp</router-link
          >
        </vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cookies from "js-cookie";

export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  data: () => ({
    active: "guide",
  }),
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    handleclick() {
      cookies.remove("accesstoken");
      this.$store.dispatch("user", null);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link {
  color: lightseagreen;
  text-decoration: none;
}
</style>
