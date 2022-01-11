<template>
  <div class="toggle-wrapper">
    <div id="theme-toggle" class="toggle" @click="darkMode = !darkMode">
      <transition name="slide-right-left">
        <div class="icon-wrapper" :class="darkMode ? 'right' : 'left'">
          <transition name="slide-up-down" mode="out-in">
            <b-icon-brightness-high-fill
              class="theme-icon"
              v-if="!darkMode"
              key="on"
            ></b-icon-brightness-high-fill>
            <b-icon-moon class="theme-icon" v-else key="off"></b-icon-moon>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "theme-toggle",
  data() {
    return {
      darkMode: false,
    };
  },
  watch: {
    darkMode(): void {
      let root = document.documentElement;

      if (this.darkMode) {
        root.setAttribute("theme", "dark");
      } else {
        root.setAttribute("theme", "light");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.toggle {
  display: flex;
  align-items: center;
  width: 40px;
  background-color: var(--secondary-color);
  border-radius: 50px;
  height: 14px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }

  .icon-wrapper {
    background-color: var(--primary-color);
    border-radius: 50px;
    padding: 5px;
    display: flex;
    box-shadow: var(--shadow);
    overflow: hidden;

    /*Animations for toggle dark theme on */
    &.right {
      transition: all .3s ease;
      transform: translateX(15px);
      svg {
        fill: #edcf74;
      }
    }

    /*Animations for toggle light theme on */
    &.left {
      transition: all .3s ease;
      transform: translateX(0px);
      svg {
        fill: #ffab06;
      }
    }
  }
}

/*Animations*/
.slide-right-left-enter-active,
.slide-right-left-leave-active {
  transition: all 0.3s ease;
}

.slide-up-down-enter-active,
.slide-up-down-leave-active{
    transition: all 0.15s ease;
}

.slide-up-down-enter-to,
.slide-up-down-leave {
  transform: translateY(0);
}

.slide-up-down-enter,
.slide-up-down-leave-to {
  transform: translateY(25px);
}

.slide-right-left-enter-to,
.slide-right-left-leave {
  transform: translateX(15px);
}
</style>
