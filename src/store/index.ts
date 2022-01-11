import {Country, ApiResponse, CountryDetails} from "@/types/types";
import Vue from "vue";
import Vuex from "vuex";
import API_ENDPOINT from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [] as Array<Country>,
    countryDetails: [] as Array<CountryDetails>,
    showModal: false,
    theme: "light",
    error: "",
    filteredCountries: [] as Array<Country>,
  },
  mutations: {
    setCountries(state, payload: Array<Country>) {
      state.countries = payload;
    },
    filterCountries(state, payload: string ) {
      state.filteredCountries = state.countries.filter((el: Country) => (el.name.toLowerCase()).includes(payload.toLowerCase()))
    },
    setCountryDetails(state, payload: Array<CountryDetails>) {
      state.countryDetails = payload;
    },
    showModal(state){
      state.showModal = !state.showModal;
    },
    setError(state, payload: string) {
      state.error = payload;
    }
  },
  actions: {
    async getCountries({ commit }) {
      try {
        const response = await fetch(`${API_ENDPOINT}/countries/all`);
        const json: ApiResponse = await response.json()
        if(response.ok){
          commit("setCountries", json.message);
        } else {
          console.log("error")
          commit("setError", json.message);
        }
      } catch (error) {
        commit("setError", "Error communicating to API");
      }
    },
    async getCountryDetails({ commit }, name: string) {
      try {
        const response = await fetch(`${API_ENDPOINT}/countries/${name}`);
        const json: ApiResponse = await response.json()
        if(response.ok){
          commit("setCountryDetails", json.message);
        } else {
          console.log("error")
          commit("setError", json.message);
        }
      } catch (error) {
        commit("setError", "Error communicating to API");
      }
    },
  },
  getters:{},
  modules: {},
});
