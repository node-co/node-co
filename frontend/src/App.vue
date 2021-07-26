<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <nodeco />
      <meetup />
      <charlas />
      <contactanos />
      <organizadores />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="white"
        @click="toTop"
      >
        <v-icon color="secondary">mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<style scoped>
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/FooterSection";
import nodeco from "./components/NodeCoSection";
import charlas from "./components/CharlasSection";
import contactanos from "./components/ContactanosSection";
import meetup from "./components/MeetupSection";
import organizadores from "./components/OrganizadoresSection";

export default {
  name: "App",

  components: {
    navigation,
    foote,
    nodeco,
    charlas,
    contactanos,
    meetup,
    organizadores
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "secondary";
      this.flat = true;
    }
    document.title = "NodeCo";
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      }
    },
    
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
