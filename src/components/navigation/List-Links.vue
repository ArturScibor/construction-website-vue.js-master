<template>
  <ul>
    <list-admin v-if="loadAdminPanel"></list-admin>
    <li>
      <router-link :to="{ name: 'aboutus' }">O nas</router-link>
    </li>
    <list-items></list-items>
    <li>
      <router-link :to="{ name: 'contact' }">Kontakt</router-link>
    </li>
    <li v-if="loadAdminPanel">
      <button  @click.prevent="logout">Wyloguj się</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ListItemsVue from "./navigation-list-gallery/ListItems.vue";
import ListAdminPanel from "./navigation-list-gallery/ListAdminPanel.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "List-Links",
  components: {
    "list-items": ListItemsVue,
    "list-admin": ListAdminPanel,
  },
  setup() {
    //values
    const store = useStore()

    //functions
    const logout = () =>{
      store.dispatch('auth/logout')
    }

    //computed

    const loadAdminPanel = computed(()=> {
      const accessToken = store.getters['auth/LoginPanel'].accessToken
      const refreshToken = store.getters['auth/LoginPanel'].refreshToken

      if(accessToken === null || refreshToken === null){
        return false
      }
      return true
    })

    return {loadAdminPanel, logout};
  },
});
</script>

<style lang="scss" scoped>
ul {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    width: max-content;
    position: relative;
    text-align: center;
    font-size: 25px;
    text-decoration: none;

    button{
      border: none;
      background-color: transparent;
      color: black;
      font-size: 20px;
      padding: 2px;
    }

    a, button {
      display: block;
      position: relative;
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
    a:after, button:after {
      content: "";
      width: 0;
      height: 3px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: var(--color-yellow);
      transition: 0.5s;
    }
    a:hover:after, button:hover:after {
      width: 100%;
    }
    a.active:after {
      width: 100%;
    }
  }
}
</style>
