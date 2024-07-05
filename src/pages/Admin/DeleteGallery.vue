<template>
  <div class="delete__container__page">
    <ul class="box__list">
      <li v-for="item in loadGalleries" :key="item.id">
        <p>{{ item.nazwa }}</p>
        <div class="buttons__options">
          <button class="edit" @click="editGallery(item.nazwa)">
            Edytuj galerie
          </button>
          <button class="delete" @click.prevent="removeGallery(item.nazwa)">
            Usuń galerie
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    //values
    const store = useStore();
    const router = useRouter();

    const editGallery = (name: string) => {
      router.push({
        name: "editgallery",
        params: { name: name },
      });
    };

    const removeGallery = async (name: string) => {
      const url = ``;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          authorization: `Bearer ${store.getters["auth/LoginPanel"].accessToken}`,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        console.log(responseData);
        return;
      }
      console.log(responseData);
      store.dispatch("gallery/loadGalleries");
    };

    //computed
    const loadGalleries = computed(() => {
      return store.getters["gallery/loadGalleries"];
    });

    return { loadGalleries, removeGallery, editGallery };
  },
});
</script>

<style lang="scss" scoped>
.delete__container__page {
  width: 100%;
  display: flex;
  justify-content: center;

  .box__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 10px;

    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
      border-radius: 8px;
      @media (min-width: 400px) {
        flex-direction: row;
      }

      p {
        font-size: 20px;
        margin: 0;
        padding: 0;
      }
      .buttons__options {
        display: flex;
        gap: 10px;
        button {
          font-size: 17px;
          background-color: black;
          border: none;
          color: white;
          padding: 5px;
          cursor: pointer;
          @media (min-width: 400px) {
            font-size: 20px;
          }
        }
        .delete {
          background-color: red;
        }
        .edit {
          background-color: blue;
        }
      }
    }

    @media (min-width: 1300px) {
      width: 70%;
    }
  }
}
</style>
