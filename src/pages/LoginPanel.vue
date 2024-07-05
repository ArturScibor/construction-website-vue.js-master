<template>
  <div class="login__container__page">
    <loading-spinner v-if="loadingSpinner"></loading-spinner>
    <div class="box__login">
      <h2>Zaloguj się</h2>
      <div class="inputrs">
        <input
          type="text"
          placeholder="login"
          class="input"
          v-model="login_panel.login"
        />
        <input
          type="password"
          placeholder="hasło"
          class="input"
          v-model="login_panel.password"
        />
      </div>
      <button class="btn" @click.prevent="submit">Zaloguj się</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import LoadingSpinner from "../components/util/BaseSpinner.vue";

export default defineComponent({
  name: "LoginPanel",
  components: {
    "loading-spinner": LoadingSpinner,
  },
  setup() {
    //values
    const store = useStore();
    const router = useRouter();
    const login_panel = reactive<{ login: string; password: string }>({
      login: "",
      password: "",
    });
    const loadingSpinner = ref<boolean>(false);

    //functions
    const submit = async () => {
      const url = ``;

      loadingSpinner.value = true;
      const response = await fetch(url, {
        method: "POST",
      });
      const responseData = await response.json();
      if (!response.ok) {
        console.log(responseData);
        loadingSpinner.value = false;
        return;
      }
      loadingSpinner.value = false;
      store.dispatch("auth/LoginPanel", responseData);
      router.push({
        name: "addimagegallery",
      });
      login_panel.login = "";
      login_panel.password = "";
    };

    return { submit, login_panel, loadingSpinner };
  },
});
</script>

<style lang="scss" scoped>
.login__container__page {
  width: 100%;
  min-height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 5%, rgba(255, 208, 0, 1));
  padding: 10px;

  .box__login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    align-items: center;
    background-color: white;

    h2 {
      font-size: 40px;
      margin: 10px 0;
      padding: 0;
    }

    .inputrs {
      display: flex;
      flex-direction: column;
      gap: 5px;
      input {
        border: none;
      }

      .input {
        width: 100%;
        padding: 10px;
        border-bottom: 2px solid #ccc;
        background-color: white;
        font-size: 20px;
        outline: none;
      }
      .input:focus {
        border-color: var(--color-yellow);
        transition: 1s ease-in-out;
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
  .login__container__page {
    .box__login {
      .inputrs {
        .input {
          width: 15rem;
        }
      }
      button {
        width: 15rem;
      }
    }
  }
}
</style>
