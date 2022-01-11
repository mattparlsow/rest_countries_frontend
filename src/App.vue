<template>
  <div id="app">
    <div class="wrapper">
      <div class="controls-wrapper">
        <search-bar />
        <theme-toggle />
      </div>
      <div class="grid-wrapper">
        <span class="error-message" v-if="this.$store.state.error != null">{{
          this.$store.state.error
        }}</span>
          <transition-group name="list" tag="b-row">
            <b-col
              lg="3"
              md="4"
              sm="6"
              xs="12"
              v-for="country in this.countries"
              :key="country.name"
            >
              <country-card
                :countryName="country.name"
                :flagUrl="country.flags.png"
              />
            </b-col>
          </transition-group>
      </div>
    </div>
    <country-modal />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CountryCard from "@/components/CountryCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import CountryModal from "@/components/CountryModal.vue";
import {Country} from "@/types/types";

export default Vue.extend({
  name: "App",
  components: {
    CountryCard,
    SearchBar,
    ThemeToggle,
    CountryModal,
  },
  mounted() {
    this.$store
      .dispatch("getCountries")
      .then(() => this.$store.commit("filterCountries", ""));
  },
  computed: {
    countries(): Array<Country> {
      return this.$store.state.filteredCountries;
    },
  },
});
</script>

<style lang="scss">
body {
  background-color: var(--background-color) !important;
  color: var(--text-color);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, Helvetica,
    Arial, sans-serif;
}

#app {
  padding: 50px;
  height: 100vh;
  color: var(--text-color);


  .wrapper {
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;

    .row{
      position: relative !important;
    }

    .controls-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .grid-wrapper {
      height: 100%;
      border-radius: $border-raduis;
      padding: 10px;
      background-color: var(--primary-color);
      box-shadow: var(--shadow);
      overflow-x: hidden;
      overflow-y: scroll;

      .error-message {
        display: flex;
        justify-content: center;
      }
    }
  }
}

/*Animations*/
.list-enter-active,
.list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  z-index: -1;
}

.list-move {
  transition: all .5s ease;
}

#app,
.controls-wrapper,
.grid-wrapper {
  transition: all .3s ease;
}
</style>
