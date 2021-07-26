<template>
  <section id="nodeco" dark align-center color="transparent">
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col cols="12" md="5" xl="8">
            <h1 class="display-2 font-weight-bold mb-4">
              Comunidad Tech NodeJS + Javascript
            </h1>
            <h1 class="font-weight-light">en COLOMBIA</h1>
            <v-btn
              rounded
              href="https://www.meetup.com/es/node_co/"
              target="_blank"
              large
              color="accent"
              class="mt-4"
            >
              <v-icon class="mr-2">mdi-emoticon-happy</v-icon>
              UNETE A LA COMUNIDAD
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
#nodeco {
  background-image: linear-gradient(
      rgba(92, 92, 92, 0.45),
      rgba(100, 100, 100, 0.45)
    ),
    url("~@/assets/img/img-meetup-2.jpeg");
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 490px;
}

#nodeco .container,
#nodeco .row {
  height: 120%;
  color: white;
}
</style>