<template>
  <section id="charlas">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="11">
          <v-row align="center" justify="center">
            <v-col cols="8" md="6">
              <h1 class="font-weight-light display-2">
                Somos una comunidad de tod@s para TOD@S, por eso te invitamos a
                compartir tu conocimiento.
              </h1>
              <h1 class="font-weight-light display-1 mb-3">
                Agrega tu charla en este formulario
              </h1>
            </v-col>
            <v-col>
              <v-row justify="center">
                <v-col>
                  <v-card ref="form">
                    <v-card-text>
                      <h1 class="font-weight-light display-1 mb-3 text-center">
                        ¡Hola! Gracias por participar como speaker en nuestra
                        comunidad
                      </h1>
                      <br />
                      <v-row>
                        <v-col cols="4">
                          <v-subheader>Nombres y Apellidos</v-subheader>
                        </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Escribe tu nombre y apellidos"
                            single-line
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="4">
                          <v-subheader>Nombre de la charla</v-subheader>
                        </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Qué tema vas a dar"
                            single-line
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="4">
                          <v-subheader>Objetivo del tema</v-subheader>
                        </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Cuéntanos de que trata la charla"
                            single-line
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="4">
                          <v-subheader>Cuéntanos quién eres</v-subheader>
                        </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Cuéntanos un poco de ti"
                            single-line
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="4">
                          <v-subheader>Email</v-subheader>
                        </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Escribe tu correo electrónico"
                            single-line
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="4">
                          <v-subheader>Número de contacto</v-subheader>
                        </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Para contactarte, déjanos tu número de celular"
                            single-line
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-divider class="mt-12"></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-slide-x-reverse-transition>
                        <v-tooltip v-if="formHasErrors" left>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              icon
                              class="my-0"
                              v-bind="attrs"
                              @click="resetForm"
                              v-on="on"
                            >
                              <v-icon>mdi-refresh</v-icon>
                            </v-btn>
                          </template>
                          <span>Refresh form</span>
                        </v-tooltip>
                      </v-slide-x-reverse-transition>
                      <v-btn color="primary" text @click="submit">
                        Enviar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#charlas {
  background-color: #f4f7f5;
}
</style>
