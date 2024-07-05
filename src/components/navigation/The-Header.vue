<template>
  <header class="header">
    <title-header></title-header>
    <list-links v-if="!buttonToggle"></list-links>
    <button-toggle
      @open-slide-bar="openSlideBar"
      v-if="buttonToggle"
    ></button-toggle>
    <slide-bar @close-slide-bar="openSlideBar" v-if="showSlideBar"></slide-bar>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref, provide } from "vue";
import { useStore } from "vuex";
import ButtonToggleVue from "./Button-Toggle.vue";
import ListLinksVue from "./List-Links.vue";
import SlideBarVue from "./Slide-Bar.vue";
import TitleHeaderVue from "./Title-Header.vue";

export default defineComponent({
  name: "The-Header",
  components: {
    "title-header": TitleHeaderVue,
    "list-links": ListLinksVue,
    "slide-bar": SlideBarVue,
    "button-toggle": ButtonToggleVue,
  },
  setup() {
    //values
    const store = useStore();
    const arrayLinksGalleries = ref<{ id: string; nazwa: string }[]>([]);
    const showSlideBar = ref<boolean>(false);
    const buttonToggle = ref<boolean>(false);

    //functions
    const openSlideBar = (value: boolean) => {
      showSlideBar.value = value;
    };

    const checkWidthScreen = () => {
      if (window.innerWidth <= 1000) {
        buttonToggle.value = true;
      } else {
        buttonToggle.value = false;
        openSlideBar(false);
      }
    };
    window.addEventListener("resize", checkWidthScreen);
    checkWidthScreen();

    //computed
    const loadGalleries = computed(() => {
      return store.getters["gallery/loadGalleries"];
    });

    //provides
    provide("galleries", loadGalleries);

    return { arrayLinksGalleries, showSlideBar, buttonToggle, openSlideBar };
  },
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 0 5px 5px -5px #000000;
}
</style>
