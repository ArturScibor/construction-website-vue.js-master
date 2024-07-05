<template>
  <div class="contact__container_page">
    <title-session title="Skontaktuj się z nami"></title-session>
    <div class="box__information">
      <frame-map></frame-map>
      <form-box></form-box>
    </div>
  </div>
</template>

<script lang="ts">
import FameMapVue from "@/components/contact/Fame-Map.vue";
import FormBoxVue from "@/components/contact/Form-Box.vue";
import TitleSessionVue from "@/components/util/Title-Session.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheContact",
  components:{
    'title-session':TitleSessionVue,
    'frame-map':FameMapVue,
    'form-box':FormBoxVue
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
  .contact__container_page{
    width: 100%;
    min-height: calc(100vh - 10rem);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: #212529;
    .box__information{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  @media (min-width: 1100px){
    .contact__container_page{
      .box__information{
        flex-direction: row;
      }
    }
  }
</style>
