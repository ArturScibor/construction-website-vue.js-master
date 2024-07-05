<template>
  <ul class="list__price">
    <li class="item__price" v-for="(item, index) in listPrice" :key="index">
      <div class="image__title">
        <img :src="getImage(item.path)" alt="photo_icon" />
        <h2>
          Projekt&nbsp;<span>{{ item.title }}</span>
        </h2>
      </div>
      <div class="information__price">
        <h2>
          $<span>{{ item.price }}</span
          >&nbsp;/mo
        </h2>
        <p>Budowa konstrukcji</p>
        <p>Projektowanie wnętrz</p>
        <p>Architektura</p>
        <p>Wywóz/Dowóz materiału</p>
        <p>Wsparcie 24/7</p>
      </div>
      <button>Wybierz plan</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListPrice from "./JS/ListPrice.js";

export default defineComponent({
  setup() {
    //values
    const listPrice =
      ref<{ path: string; title: string; price: number }[]>(ListPrice);

    //functions
    const getImage = (picture: string) => {
      return require(`../../images/3ikony/${picture}`);
    };

    return { listPrice, getImage };
  },
});
</script>

<style lang="scss" scoped>
.list__price {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  .item__price {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 5px;
    background-color: white;
    border: 2px solid #6c757d;

    .image__title {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        margin: 0;
        padding: 0;
        font-size: 25px;
      }
      span {
        color: var(--color-yellow);
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
    .information__price {
      h2 {
        margin: 0;
        padding: 0;
        text-align: center;
        span {
          font-size: 50px;
        }
      }
      p{
        text-align: center;
        margin: 10px 0;
        font-size: 25px;
        color: #6C757D
      }
    }
    button{
        width: 15rem;
        background-color: black;
        border: none;
        color: white;
        font-size: 20px;
        padding: 8px;
        cursor: pointer;
    }
  }
}
@media (min-width: 750px){
    .list__price{
        .item__price{
            width: 25rem;
            gap: 80px;
            .image__title{
                font-size: 40px;
            }
        }
    }
}
</style>
