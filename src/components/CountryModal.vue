<template>
  <b-modal
    v-if="country != null"
    v-model="this.$store.state.showModal"
    size="lg"
    centered
    hide-footer
    hide-header
  >
    <div class="modal-header">
      <b-button block variant="outline-secondary" size="sm" @click="toggleModal"
        >X</b-button
      >
    </div>
    <div v-if="country !== null" class="modal-content">
      <b-row>
        <b-col lg="7" md="7" sm="12" xs="12">
          <div class="left-section">
            <img :src="country.flags.svg" alt="" class="country-flag" />
          </div>
        </b-col>
        <b-col lg="5" md="5" sm="12" xs="12">
          <div class="right-section">
            <ul>
              <h2>{{ country.name }}</h2>
              <li><span>Capital</span>: {{ country.capital }}</li>
              <li>
                <span>Currencies</span>:
                <span
                  class="sub-span"
                  v-for="currency in country.currencies"
                  :key="currency.name"
                  >{{ currency.name }},
                </span>
              </li>
              <li><span>Poluation</span>: {{ country.population }}</li>
              <li><span>ISO Code</span>: {{ country.alpha3Code }}</li>
              <li>
                <span>Offical languages</span>:
                <span
                  class="sub-span"
                  v-for="language in country.languages"
                  :key="language.name"
                  >{{ language.name }},
                </span>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CountryModal",
  computed: {
    country() {
      return this.$store.state.countryDetails[0];
    },
  },
  methods: {
    toggleModal() {
      this.$store.commit("showModal");
    },
  },
});
</script>

<style scoped lang="scss">
::v-deep .modal-body {
  background-color: var(--primary-color);
  border-radius: $border-raduis;
}

::v-deep .modal-content {
  border: none;
  border-radius: $border-raduis;
  background: none;
}

.modal-header {
  border: none;
  padding: 0;
  margin-bottom: 10px;
  justify-content: flex-end;

  button {
    width: fit-content;
    border-color: var(--accent-color);
    color: var(--text-color);

    &:hover {
      background-color: var(--accent-color);
    }
  }
}

.modal-content {
  border: none;
  background-color: var(--primary-color);
  color: var(--text-color);
  border-radius: $border-raduis;

  .left-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  .right-section {
    background-color: var(--primary-color);
    padding: 0 0 3px 15px;
    border-radius: $border-raduis;

    h2 {
      font-weight: 300;
    }

    ul {
      list-style: none;
      font-weight: 100;
      padding: 0;
      margin: 0;
      font-size: 14px;

      li {
        span {
          font-weight: 500;
        }
        .sub-span {
          font-weight: 100 !important;
        }
      }
    }
  }
}
</style>
