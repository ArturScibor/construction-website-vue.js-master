<template>
  <div class="galleries__container__page">
    <full-screen-gallery
      v-if="images_full_screen.fullscreen"
      :array="loadSingleGallery"
      :index="images_full_screen.index"
      @off-background="offFullScreen"
    ></full-screen-gallery>
    <div class="name__title__container">
      <h2>{{ nameGallery }}</h2>
    </div>

    <ul class="list">
      <li v-for="(image, index) in loadSingleGallery" :key="image.id">
        <div class="background" @click="openFullScreen(index, true)">
          <h2>Zobacz zdjęcie</h2>
        </div>
        <img
          :src="'' + image.path"
          alt="photo_image"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import TheFullScreanImageVue from "@/components/gallery/The-FullScrean-Image.vue";

export default defineComponent({
  name: "TheGallery",
  components: {
    "full-screen-gallery": TheFullScreanImageVue,
  },
  setup() {
    //values
    const router = useRoute();
    const store = useStore();
    const images_full_screen: {
      index: number;
      fullscreen: boolean;
    } = reactive({
      index: 0,
      fullscreen: false,
    });

    //functions
    store.dispatch("gallery/loadSingleGallery", router.params.nazwa);

    const openFullScreen = (index: number, value: boolean) => {
      images_full_screen.index = index;
      images_full_screen.fullscreen = value;
    };

    const offFullScreen = (value: boolean) => {
      images_full_screen.fullscreen = value;
    };

    //computed
    const nameGallery = computed(() => {
      return router.params.nazwa;
    });

    const loadSingleGallery = computed(() => {
      return store.getters["gallery/loadSingleGallery"];
    });

    //wachers
    watch(nameGallery, () => {
      store.dispatch("gallery/loadSingleGallery", router.params.nazwa);
    });

    return {
      nameGallery,
      loadSingleGallery,
      images_full_screen,
      openFullScreen,
      offFullScreen,
    };
  },
});
</script>

<style lang="scss" scoped>
.galleries__container__page {
  width: 100%;
  min-height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 5%, rgba(255, 208, 0, 1));

  .name__title__container {
    width: 100%;
    text-align: center;
    padding: 10px;
    h2 {
      margin: 0;
      padding: 0;
      font-size: 50px;
      text-decoration: underline;
      text-transform: uppercase;
      color: white;
    }
  }
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 0;
    padding: 10px;

    li {
      width: 18rem;
      height: 13rem;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      list-style: none;
      cursor: pointer;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
      .background {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        transition: all 0.5s ease-out;
        h2{
          color: black;
          font-size: 25px;
          text-transform: uppercase;
        }
      }
    }
    li:hover .background {
      top: 0;
    }
  }
}
@media (min-width: 750px) {
  .galleries__container__page {
    .list {
      width: 70%;
    }
  }
}
</style>
