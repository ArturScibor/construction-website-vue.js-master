<template>
  <div class="app">
    <div class="navigation__container">
      <the-navigation></the-navigation>
    </div>
    <div class="pages__container">
      <router-view></router-view>
    </div>
    <div class="footer__container">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script lang="ts">
import TheFooter from "../src/components/util/The-Footer.vue";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import TheHeaderVue from "./components/navigation/The-Header.vue";

export default defineComponent({
  name: "App",
  components: {
    "the-footer": TheFooter,
    "the-navigation": TheHeaderVue,
  },
  setup() {
    //values
    const store = useStore();

    //functions
    store.dispatch("gallery/loadGalleries");
    store.dispatch("auth/tryLogin")

    return {};
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 7rem;

  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-yellow);
    border: 1px solid white;
  }
}

body {
  margin: 0;
  padding: 0;
}

:root {
  --color-yellow: #ffd000;
}

.app {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .navigation__container {
    width: 100%;
    height: 5rem;
  }

  .pages__container {
    width: 100%;
    min-height: calc(100vh - 10rem);
  }

  .footer__container {
    width: 100%;
    height: 5rem;
  }
}
</style>
