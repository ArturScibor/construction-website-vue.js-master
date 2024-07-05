<template>
  <ul class="list__success">
    <li v-for="(item, index) in ListSuccessArrayJS" :key="index">
      <h2>{{ item.number }}+</h2>
      <h3>{{ item.title }}</h3>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListSuccessJS from "./JS/ListSuccess";

export default defineComponent({
  setup() {
    const ListSuccessArrayJS =
      ref<{ number: number; title: string }[]>(ListSuccessJS);

    return { ListSuccessArrayJS };
  },
});
</script>

<style lang="scss" scoped>
.list__success {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  margin: 0;
  padding: 10px;
  list-style: none;
  li {
    width: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background-color: #E9ECEF;
    h2, h3{
        margin: 5px 0;
        padding: 0;
    }
    h2{
        font-size: 35px;
    }
    h3{
        font-size: 20px;
    }
  }
}
@media(min-width: 750px){
    .list__success{
        gap: 10px;
        li{
            h2{
                font-size: 45px;
            }
            h3{
                font-size: 25px;
            }
        }
    }
}
</style>
