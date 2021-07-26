<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-text class="final">
        <v-img
          src="@/assets/img/logo-footer.png"
          max-width="120px"
          max-height="100px"
        />
        <v-spacer />
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0"> </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="py-2 text-center">
        <strong>
          © {{ new Date().getFullYear() }} — NodeCO. Todos los derechos
          reservados. Medellín - Colombia</strong
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}

.final {
  text-align: right;
}
.foo {
  background-color: white;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "https://www.facebook.com/nodecolombia",
      },
      {
        text: "mdi-twitter",
        link: "https://twitter.com/node_co",
      },
      {
        text: "mdi-youtube",
        link: "https://www.youtube.com/c/nodecolombia",
      },
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/node_co/",
      },
      {
        text: "mdi-twitch",
        link: "https://www.twitch.tv/node_co",
      }
    ],
  }),
};
</script>
