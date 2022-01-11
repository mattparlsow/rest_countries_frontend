<template>
  <b-card>
    <div class="img-wrapper">
      <img :src="flagUrl" alt="" />
    </div>
    <b-button block variant="outline-secondary" size="sm" @click="getCountry">{{
      countryName
    }}</b-button>
  </b-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CountryCard",
  props: {
    countryName: {
      type: String,
      required: true
    },
    flagUrl: {
      type: String,
      required: true
    },
  },
  methods: {
    getCountry(): void {
      this.$store
        .dispatch("getCountryDetails", this.countryName)
        .then(() => this.$store.commit("showModal"));
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  border-radius: $border-raduis;
  padding: 10px;
  background-color: var(--secondary-color);
  border: none;
  margin-bottom: 15px;

  .card-body {
    padding: 0;
    padding-top: 5px;

    .btn {
      border-color: var(--accent-color);
      color: var(--text-color);
      max-width: 200px;
      margin: 0 auto;

      &:hover {
        background-color: var(--accent-color);
      }
    }
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    img {
      border-radius: $border-raduis;
      width: 100%;
      height: 120px;
      object-fit: cover;
      max-width: 200px;
    }
  }
}

/*Animation for theme toggle*/
.card,
.btn {
  transition: all .3s ease;
}
</style>
