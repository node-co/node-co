import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#056E16",
                secondary: "#000000",
                accent: "#056E16"
            }
        }
    }
});
