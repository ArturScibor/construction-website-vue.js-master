<template>
  <div class="name__session__container">
    <h3><span></span>{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
      defoult: "Brak Tytułu!",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.name__session__container {
  width: 100%;
  display: flex;
  padding: 10px;
  h3 {
    position: relative;
    font-size: 35px;
    padding-left: 20px;
    margin: 0;
    color: white;
    span {
      width: 10px;
      height: 100%;
      position: absolute;
      left: 0;
      background-color: var(--color-yellow);
    }
  }
}
@media (min-width: 500px){
    .name__session__container{
        h3{
            font-size: 45px;
        }
    }
}
</style>
