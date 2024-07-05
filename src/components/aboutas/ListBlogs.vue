<template>
  <ul class="list__blogs">
    <li class="item__blog" v-for="(item, index) in listBlogs" :key="index">
      <div class="image__box">
        <img :src="getImage(item.path)" alt="photo_blog" />
      </div>

      <div class="description">
        <h2>{{ item.title }}</h2>
        <h3>{{ item.description }}</h3>
      </div>
      <button>Przeczytaj więcej</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListBlogs from "./JS/ListBlogs.js";

export default defineComponent({
  setup() {
    //values
    const listBlogs =
      ref<{ path: string; title: string; description: string }[]>(ListBlogs);

    //functions
    const getImage = (picture: string) => {
      return require(`../../images/zdjeciaBlogi/${picture}`);
    };

    return { listBlogs, getImage };
  },
});
</script>

<style lang="scss" scoped>
.list__blogs {
  width: 100%;
  display: grid;
  gap: 50px;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: auto;
  margin: 0;
  padding: 5px;
  list-style: none;

  .item__blog {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 5px;
    background-color: white;

    .image__box {
      width: 100%;
      height: 15rem;

      img {
        width: 100%;
        height: 15rem;
      }
    }
    .description {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2,
      h3 {
        margin: 10px;
        padding: 0;
        text-align: center;
      }
      h2 {
        color: var(--color-yellow);
      }
    }

    button {
      width: 100%;
      background-color: black;
      border: none;
      color: white;
      font-size: 20px;
      padding: 8px;
      cursor: pointer;
    }
  }
}

@media (min-width: 430px) {
    .list__blogs {
        grid-auto-columns: 18rem;
        gap: 100px;
      .item__blog{
          width: 23rem;
      }
      button{
          width: 15rem;
      }
    }
  }


</style>
