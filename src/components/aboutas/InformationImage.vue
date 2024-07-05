<template>
  <div class="information__image__container">
    <ul class="information">
      <item-information-image
        v-for="item in InformationImageJsArray"
        :key="item"
        :image="item.path"
        :name="item.name"
        :description="item.description"
      ></item-information-image>
    </ul>
    <div class="image">
      <img src="../../images/people.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ItemInformationImageVue from "./ItemInformationImage.vue";
import InformationImageJS from "./JS/ListInformationImage.js";

export default defineComponent({
  name: "InformationImage",
  components: {
    "item-information-image": ItemInformationImageVue,
  },
  setup() {
    const InformationImageJsArray =
      ref<{ path: string; name: string; description: string }[]>(
        InformationImageJS
      );
    return { InformationImageJsArray };
  },
});
</script>

<style lang="scss" scoped>
.information__image__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .information {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
  }
  .image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
@media (min-width: 1000px) {
  .information__image__container {
    flex-direction: row;
  }
}
</style>
