import Vue from "vue";
import Vuex from "vuex";
import { fetchPhotos } from "./actions";
import { images } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: []
  },
  mutations: {
    images
  },
  actions: {
    fetchPhotos
  }
});
