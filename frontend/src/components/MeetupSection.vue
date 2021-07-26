<template>
  <section id="meetup">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center text-white">
              <h1 class="display-2">MEETUPS</h1>
              <h1 class="font-weight-light">
                Descubre los eventos que hemos realizado
              </h1>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in meetup"
              :key="i"
            >
              <v-card class="mx-auto card" max-width="400">
                <youtube
                  :video-id="feature.videoId"
                  @ready="ready"
                  @playing="playing"
                  player-width="auto"
                  player-height="auto"
                ></youtube>

                <v-card-subtitle class="pb-0">
                  {{ feature.date }}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{ feature.title }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    rounded
                    :href="urlComun + feature.videoId"
                    target="_blank"
                    large
                    color="accent"
                    class="mt-4"
                  >
                    <v-icon class="mr-2">mdi-youtube</v-icon>
                    VER LA CHARLA
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      urlComun: "https://www.youtube-nocookie.com/embed/",
      meetup: [
        {
          date: "Jueves, 12 enero de 2021",
          title: "Estrategias para manejo de Backpressure en Node JS",
          videoId: "IZrqS1QApDY",
        },
        {
          date: "Miercoles, 26 de mayo de 2020",
          title:
            "Lo mejor de Deno características principales de Deno, y como aprender a utilizarlo.",
          videoId: "Tv-4yCYyn3o",
        },
        {
          date: "Miércoles, 16 de septiembre de 2020",
          title:
            "Herramientas y configuraciones para trabajar con nodejs y docker en windows",
          videoId: "TS6ObX22EEI",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    onLoadMeetup(id) {
      this.$router.push(urlComun + id);
    },
    playing(event) {
      // The player is playing a video.
      this.meetup.videoId = event;
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.meetup.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>


<style>
#meetup {
  z-index: 0;
  background-image: linear-gradient(
      rgba(0, 44, 4, 0.94),
      rgba(0, 67, 26, 0.686)
    ),url("~@/assets/img/img-meetup-3.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.text-white {
  color: white;
}
</style>

<style>
section {
  position: relative;
}
</style>
