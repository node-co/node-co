<template>
  <section id="contactanos">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="5" class="hidden-xs-only">
              <h1 class="font-weight-light display-2 mb-2">CONECTÉMONOS</h1>
              <h1 class="font-weight-light">
                Únete a nuestros canales y conoce todo lo que sucede en la
                comunidad..
              </h1>
            </v-col>
            <v-col cols="1" sm="5" class="">
              <v-col cols="9">
                <v-subheader
                  ><v-icon class="mr-2"> mdi-check-circle </v-icon>
                  Eventos</v-subheader
                >
                <v-subheader
                  ><v-icon class="mr-2"> mdi-check-circle </v-icon>
                  Charlas</v-subheader
                >
                <v-subheader
                  ><v-icon class="mr-2"> mdi-check-circle </v-icon> Ofertas
                  laborales</v-subheader
                >
                <v-subheader
                  ><v-icon class="mr-2"> mdi-check-circle </v-icon> Noticias
                  Tech</v-subheader
                >
                <v-subheader
                  ><v-icon class="mr-2"> mdi-check-circle </v-icon> Hablar con
                  otros desarrolladores</v-subheader
                >
                <v-subheader
                  ><v-icon class="mr-2"> mdi-check-circle </v-icon>
                  Networking</v-subheader
                >
              </v-col>
            </v-col>
          </v-row>
          <v-btn
            rounded
            href=""
            target="_blank"
            large
            color="white"
            class="mt-4"
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
            class="mt-4"
          >
            <v-icon class="mr-2"> mdi-slack </v-icon>
            Slack
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#contactanos {
  background-color: slategray;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#contactanos .container,
#contactanos .row {
  height: 100%;
}
</style>