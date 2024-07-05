<template>
  <div class="slidebar__container">
    <div class="close__container">
      <svg
        @click="closePanel(false)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
    <ul class="list__navigation">
      <div v-if="loadAdminPanel">
        <li>
          <div class="button__list" @click="showAdminPanel">
            <p>AdminPanel</p>
            <img src="../../images/icons8-arrow-down-24.png" alt="arrow_down" />
          </div>
        </li>
        <li v-if="showAdmin">
          <div
            v-for="item in listAdmin"
            :key="item.id"
            @click="adminPanel(item.namerouter)"
          >
            {{ item.nazwa }}
          </div>
        </li>
      </div>

      <li>
        <router-link :to="{ name: 'aboutus' }">O nas</router-link>
      </li>
      <li>
        <div class="button__list" @click="showGalleries">
          <p>Galerie</p>
          <img src="../../images/icons8-arrow-down-24.png" alt="arrow_down" />
        </div>
      </li>
      <li v-if="showGalleryLinks">
        <div
          v-for="item in galleriesItems"
          :key="item.id"
          @click="singleGallery(item.nazwa)"
        >
          {{ item.nazwa }}
        </div>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Kontakt</router-link>
      </li>
      <li v-if="loadAdminPanel">
        <button @click.prevent="logout">Wyloguj się</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ListAdmin from "./navigation-list-gallery/ListAdmin.js";

export default defineComponent({
  emits: ["close-slide-bar"],
  setup(_, context) {
    //values
    const router = useRouter();
    const store = useStore();
    const galleriesItems = ref(
      inject("galleries") as { id: string; nazwa: string }[]
    );
    const showGalleryLinks = ref<boolean>(false);
    const showAdmin = ref<boolean>(false);
    const listAdmin =
      ref<{ id: string; nazwa: string; namerouter: string }[]>(ListAdmin);

    //functions
    const closePanel = (value: boolean) => {
      context.emit("close-slide-bar", value);
    };

    const logout = () => {
      store.dispatch("auth/logout");
    };

    const singleGallery = (nazwa: string) => {
      router.push({
        name: "gallery",
        params: { nazwa: nazwa },
      });
    };

    const adminPanel = (name: string) => {
      router.push({
        name: name,
      });
    };

    const showGalleries = () => {
      showGalleryLinks.value = !showGalleryLinks.value;
    };
    const showAdminPanel = () => {
      showAdmin.value = !showAdmin.value;
    };

    //computed
    const loadAdminPanel = computed(() => {
      const accessToken = store.getters["auth/LoginPanel"].accessToken;
      const refreshToken = store.getters["auth/LoginPanel"].refreshToken;

      if (accessToken === null || refreshToken === null) {
        return false;
      }
      return true;
    });

    return {
      closePanel,
      galleriesItems,
      singleGallery,
      showGalleries,
      showGalleryLinks,
      logout,
      loadAdminPanel,
      listAdmin,
      showAdminPanel,
      showAdmin,
      adminPanel,
    };
  },
});
</script>

<style lang="scss" scoped>
.slidebar__container {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  .close__container {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      width: 3rem;
      height: 3rem;
    }
  }
  .list__navigation {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    font-size: 30px;
    li {
      width: 100%;
      text-align: center;

      button {
        width: max-content;
        border: none;
        background-color: transparent;
        color: black;
        font-size: 20px;
        padding: 2px;
      }

      a,
      button {
        display: block;
        width: 100%;
        color: black;
        text-decoration: none;
      }
      a:hover,
      button:hover {
        background-color: #f8f9fa;
        color: var(--color-yellow);
      }

      .button__list {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
      .button__list:hover {
        background-color: #f8f9fa;
        color: var(--color-yellow);
      }
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
      }
    }
  }
}
</style>
