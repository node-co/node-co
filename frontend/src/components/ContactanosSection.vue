<template>
  <section id="contactanos" class="py-3">
    <v-container class="d-flex">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <h3 class="font-weight-light display-2 mb-2">CONECTÉMONOS</h3>
          <p class="font-weight-light body-1">
            Únete a nuestros canales y conoce todo lo que sucede en la
            comunidad.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-subheader
            class="body-1"
            v-for="(service, index) in services"
            :key="index"
          >
            <v-icon class="mx-3" large color="white">
              mdi-check-circle
            </v-icon>
            {{ service.name }}</v-subheader
          >
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
            rounded
            href=""
            target="_blank"
            large
            color="white"
            class="mx-4"
          >
            <v-icon class="mr-2"> mdi-meetup </v-icon>
            Meetup
          </v-btn>
          <v-btn
            rounded
            href=""
            target="_blank"
            large
            color="white"
            class="mx-4"
          >
            <v-icon class="mr-2"> mdi-slack </v-icon>
            Slack
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { name: "Eventos" },
        { name: "Charlas" },
        { name: "Ofertas laborales" },
        { name: "Noticias Tech" },
        { name: "Hablar con otros desarrolladores" },
        { name: "Networking" },
      ],
    };
  },
};
</script>

<style scoped>
#contactanos {
  background-color: slategray;
}
</style>
