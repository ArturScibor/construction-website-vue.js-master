<template>
  <li class="list__gallery">
    <div class="button__list" @click="showGalleries()">
      <p>Galerie</p>
      <img src="../../../images/icons8-arrow-down-24.png" alt="arrow_down" />
    </div>
    <ul
      class="list"
      v-if="showGalleriesButton"
      @mouseover="showGalleriesMove(true)"
      @mouseleave="showGalleriesMove(false)"
    >
      <li
        v-for="item in galleriesItems"
        :key="item.id"
        @click="singleGallery(item.nazwa)"
      >
        {{ item.nazwa }}
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    //values
    const router = useRouter();
    const showGalleriesButton = ref<boolean>(false);
    const galleriesItems = ref(
      inject("galleries") as { id: string; nazwa: string }[]
    );

    //functions
    const showGalleries = () => {
      showGalleriesButton.value = !showGalleriesButton.value;
    };

    const showGalleriesMove = (value: boolean) => {
      showGalleriesButton.value = value;
    };

    const singleGallery = (nazwa: string) => {
      router.push({
        name: "gallery",
        params: { nazwa: nazwa },
      });
    };

    return {
      showGalleriesMove,
      showGalleriesButton,
      showGalleries,
      galleriesItems,
      singleGallery,
    };
  },
});
</script>

<style lang="scss" scoped>
.list__gallery {
  display: flex;
  justify-content: center;
  position: relative;
  .button__list {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    gap: 5px;
    img {
      width: 16px;
      height: 16px;
    }
    p {
      margin: 0;
    }
  }
  .button__list:after {
    content: "";
    width: 0;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: var(--color-yellow);
    transition: 0.5s;
  }
  .button__list:hover:after {
    width: 100%;
  }
  .list {
    width: 12rem;
    position: absolute;
    z-index: 98;
    margin: 0;
    padding: 0;
    top: 27px;
    background-color: white;
    li {
      list-style: none;
      cursor: pointer;
      padding: 10px;
    }
    li:hover {
      background-color: #f8f9fa;
      color: var(--color-yellow)
    }
  }
}
</style>
