<template>
  <div>
    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/img/logo.png" max-width="100px" max-height="100px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#nodeco')">
          <span class="mr-2">NUESTRA COMUNIDAD</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#meetup')">
          <span class="mr-2">MEETUP</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#charlas')">
          <span class="mr-2">CHARLAS</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#organizadores')">
          <span class="mr-2">ORGANIZADORES</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contactanos')">
          <span class="mr-2">CONTACTANOS</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
