
  <template>
  <section id="organizadores">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="display-2">ORGANIZADORES</h1>
              <h1 class="font-weight-light">
                Conoce quiénes lideran la comunidad
              </h1>
            </v-col>
            <v-sheet
              class="mx-auto transparent"
              elevation="10"
              max-width="1200"
              height="460"
              outlined
            >
              <v-slide-group v-model="model" class="pa-2" multiple show-arrows>
                <v-slide-item
                  v-slot="{ toggle }"
                  class="text-center"
                  v-for="(feature, i) in meetup"
                  :key="i"
                >
                  <v-card
                    class="ma-4"
                    height="600"
                    width="300"
                    @click="toggle"
                    outlined
                    color="transparent"
                  >
                    <div class="profile-card js-profile-card">
                      <div class="profile-card__img">
                        <img :src="feature.profile" alt="Organizador" />
                      </div>

                      <div class="profile-card__cnt js-profile-cnt">
                        <div class="profile-card__name">
                          {{ feature.nameComplete }}
                        </div>
                        <div class="profile-card__txt">
                          {{ feature.profession }}
                        </div>

                          <div class="profile-card-inf__item">
                            <div class="profile-card-inf__title">
                              <v-icon class="mr-2">mdi-linkedin</v-icon>{{ feature.linkedin }}
                            </div>
                          </div>

                        <div class="profile-card-ctr">
                          <button class="profile-card__button button--green">
                            contactar
                          </button>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
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
      meetup: [
        {
          profile:
            "https://media-exp1.licdn.com/dms/image/C4E03AQHNEni99wtOmQ/profile-displayphoto-shrink_800_800/0/1578933133501?e=1632960000&v=beta&t=QBlWrNN3u1PbWVWMzHKW0bswji7ltluoPXebCbfWeD0",
          nameComplete: "CAMILO MONTOYA",
          profession:
            "Consultor Desarrollo de Software / Profesor / HablemosJS / javascript, React , NodeJS Python Fundador de la comunidad NodeCo",
          linkedin: "camilomontoyau",
        },
        {
          profile:
            "https://media-exp1.licdn.com/dms/image/C4E03AQF3fWZYD2bu1g/profile-displayphoto-shrink_800_800/0/1516338069744?e=1632960000&v=beta&t=Du7-hFL92L8iZLPMpm17n7gfipBCsxMl3Nj_02zdamQ",
          nameComplete: "RUBÉN RESTREPO",
          profession:
            "Desarrollador de software en Auth0 organizador NodeCo y ISM_Medellin",
          linkedin: "rubenrestrepo",
        },
        {
          profile:
            "https://media-exp1.licdn.com/dms/image/C4E03AQEicQGQ3x8l1w/profile-displayphoto-shrink_800_800/0/1556118463562?e=1632960000&v=beta&t=Sa8bOMCb9o8oZXrjMgGkGv14iaLmIYDwO6VNqpvGSSM",
          nameComplete: "MIGUELANGEL RENDON",
          profession: "FullStack Javascript Node, Hapi, Vue",
          linkedin: "silvermiguel96",
        },
        {
          profile:
            "https://media-exp1.licdn.com/dms/image/C4E03AQE-N3hOCY0Z9g/profile-displayphoto-shrink_800_800/0/1607101295552?e=1632960000&v=beta&t=RX16A1xnwKnWhHUmDeAwTlHgUtuD52UNIkWVsdBOgjE",
          nameComplete: "LINA MARÍA MONTAÑO",
          profession:
            "Backend Developer JS and Python Mentora en Coderiseorg Organizadora de NodeCO Podcast CaminoDev",
          linkedin: "calypsobronte",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,700&subset=latin-ext");

.transparent {
  background-color: rgba(255, 255, 255, 0) !important;
  border-color: white !important;
}

.profile-card {
  width: 100%;
  margin: auto;
  border-radius: 12px;
  border-width: 1px;
  border-style: solid;
  border-color:  rgba(177, 177, 177, 0.994);;
  position: relative;
  top: 80px;
  

  &.active {
    .profile-card__cnt {
      filter: blur(6px);
    }

    .profile-card-message,
    .profile-card__overlay {
      opacity: 1;
      pointer-events: auto;
      transition-delay: 0.1s;
    }

    .profile-card-form {
      transform: none;
      transition-delay: 0.1s;
    }
  }
  &__cnt {
    margin-top: -65px;
    text-align: center;
    padding: 0 20px;
    padding-bottom: 40px;
    transition: all 0.3s;
  }

  &__name {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
  }

  &__txt {
    font-size: 12px;
    color: #00AA46;
    margin-bottom: 15px;
  }

  &-inf {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 35px;

    &__item {
      
      min-width: 10px;

      @media screen and (max-width: 768px) {
        padding: 10px 20px;
        min-width: 120px;
      }
    }

    &__title {
      font-size: 18px;
      //color: #6944ff;
      color: #878787;
    }

    &__txt {
      font-weight: 500;
      margin-top: 7px;
    }
  }

  &__img {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    z-index: 4;
    box-shadow: 0px 0px 0px 7px rgba(216, 216, 216, 0.5);

    @media screen and (max-width: 576px) {
      width: 120px;
      height: 120px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &-ctr {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    @media screen and (max-width: 576px) {
      flex-wrap: wrap;
    }
  }

  &__button {
    background: none;
    border: none;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    font-size: 19px;
    min-width: 201px;
    border-radius: 50px;
    min-height: 55px;
    color: #fff;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all 0.3s;
    position: absolute;
    top: 90%;

    @media screen and (max-width: 768px) {
      min-width: 170px;
      margin: 15px 25px;
    }

    @media screen and (max-width: 576px) {
      min-width: inherit;
      margin: 0;
      margin-bottom: 16px;
      width: 100%;
      max-width: 300px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:focus {
      outline: none !important;
    }

    @media screen and (min-width: 768px) {
      &:hover {
        transform: translateY(-5px);
      }
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &.button--green {
      background: green;
    }
  }
}
</style>

<style>
#organizadores {
  z-index: 0;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>