<template>
  <div class="edit__container__page">
    <ul class="list__images">
      <li v-for="(image, index) in loadSingleGallery" :key="index">
        <img :src="'' + image.path" />
        <button @click.prevent="deleteImage(image.id)">Usuń zdjęcie</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    //values
    const store = useStore();
    const router = useRoute();

    //functions
    store.dispatch("gallery/loadSingleGallery", router.params.name);
    const deleteImage = async (id: string) => {
      const response = await fetch(
        ``,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${store.getters["auth/LoginPanel"].accessToken}`,
          },
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        console.log(responseData);
        return;
      }
      console.log(responseData);
      store.dispatch("gallery/loadSingleGallery", router.params.name);
    };

    //computed
    const loadSingleGallery = computed(() => {
      return store.getters["gallery/loadSingleGallery"];
    });

    return { loadSingleGallery, deleteImage };
  },
});
</script>

<style lang="scss" scoped>
.edit__container__page {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  .list__images {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
    @media (min-width: 750px) {
      width: 70%;
    }

    li {
      width: 15rem;
      height: 10rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      button {
        position: absolute;
        bottom: 0;
        background-color: red;
        padding: 5px;
        font-size: 20px;
        border: none;
        color: white;
        cursor: pointer;
      }
      button:hover {
        background-color: rgb(218, 84, 84);
      }
    }
  }
}
</style>
