<template>
  <div class="aboutus__container__page">
    <title-session title="Czym zajmujemy się na codzień?"></title-session>
    <information-image></information-image>
    <title-session title="Nasze osiągnięcia"></title-session>
    <list-success></list-success>
    <title-session title="Nasze ceny"></title-session>
    <list-price></list-price>
    <title-session title="Blogi"></title-session>
    <list-blogs></list-blogs>
  </div>
</template>

<script lang="ts">
import InformationImageVue from "@/components/aboutas/InformationImage.vue";
import ListBlogs from "@/components/aboutas/ListBlogs.vue";
import ListPrice from "@/components/aboutas/ListPrice.vue";
import ListSuccess from "@/components/aboutas/ListSuccess.vue";
import TitleSessionVue from "@/components/util/Title-Session.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUs",
  components: {
    "title-session": TitleSessionVue,
    "information-image": InformationImageVue,
    "list-success": ListSuccess,
    "list-price":ListPrice,
    'list-blogs':ListBlogs
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.aboutus__container__page {
  width: 100%;
  min-height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 5%, rgba(255, 208, 0, 1));
  padding: 10px;
}
</style>
