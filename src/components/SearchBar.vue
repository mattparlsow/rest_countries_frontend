<template>
  <div class="search-wrapper">
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        type="search"
        v-model="searchTerm"
        placeholder="Search country by name..."
      ></b-form-input>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SearchBar",
  computed: {
    searchTerm: {
      get (): string{
        return this.$store.state.searchTerm
      },
      set (value: string) {
        this.$store.commit("filterCountries", value)
      }
    }
  }
});
</script>

<style scoped lang="scss">
.search-wrapper {
  width: 100%;
  max-width: 350px;
  display: inline-block;

  .input-group {
    margin-bottom: 0 !important;

    .form-control {
      background-color: var(--primary-color);
      border: none;
      box-shadow: none;
      color: var(--text-color);
      border-top-right-radius: $border-raduis;
      border-bottom-right-radius: $border-raduis;
    }

    .input-group-text {
      width: 100%;
      max-width: 350px;
      display: inline-block;
      background-color: var(--primary-color);
      border: none;
      border-top-left-radius: $border-raduis !important;
      border-bottom-left-radius: $border-raduis !important;
    }
  }
}

/*Animation for theme toggle*/
.form-control, .input-group-text{
      transition: all .3s ease;
}
</style>
