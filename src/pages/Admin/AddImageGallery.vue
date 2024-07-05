<template>
  <div class="add__image__container__page">
    <form class="box__panel" enctype="multipart/form-data">
      <div class="inputs__panel">
        <input
          type="text"
          v-model="valuesGallery.name"
          placeholder="Nazwa galerii"
        />
        <select name="galleries" v-model="valuesGallery.select_name">
          <option value="">--Wybierz galerie--</option>
          <option v-for="item in loadGalleries" :key="item.id">
            {{ item.nazwa }}
          </option>
        </select>
      </div>
      <p class="error">{{ error }}</p>
      <uploader-container
        :restartUploader="reloadUploader"
        :type="true"
        @array-images="imagesUploader"
      ></uploader-container>
      <button @click.prevent="submitForm" :disabled="checkInputs">
        Dodaj galerie/zdjecia
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import UploadContainerVue from "@/components/util/UploadContainer.vue";
import { defineComponent, computed, reactive, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AddImagesGallery",
  components: {
    "uploader-container": UploadContainerVue,
  },
  setup() {
    //values
    const store = useStore();
    const valuesGallery = reactive({
      name: "",
      select_name: "",
      select_id: "",
    });
    const arrayGallery = ref<{ id: string; nazwa: string }[]>([]);
    const arrayImagesUploader = ref<{}[]>([]);
    const error = ref<string>("");
    const reloadUploader = ref<boolean>(false);

    //functions

    const restartError = () => {
      setTimeout(() => {
        error.value = "";
      }, 5000);
    };

    const loadGallery = () => {
      const galleries = store.getters["gallery/loadGalleries"];
      for (const image of galleries) {
        arrayGallery.value.push(image);
      }
    };
    loadGallery();

    const imagesUploader = (value: {}[]) => {
      arrayImagesUploader.value = value
    };

    const submitForm = async () => {
      if (valuesGallery.name === "" && valuesGallery.select_name === "") {
        error.value = "Wybierz typ dodania galerii!";
        restartError();
        return;
      }
      if (valuesGallery.name !== "" && valuesGallery.select_name !== "") {
        error.value = "Możesz tylko jedną z opcji";
        restartError();
        return;
      }

      if (valuesGallery.name === "") {
        const findId = arrayGallery.value.filter(
          (gallery) => gallery.nazwa == valuesGallery.select_name
        );
        valuesGallery.select_name = findId[0].nazwa;
        valuesGallery.select_id = findId[0].id;
      }

      const FD = new FormData();
      FD.append(
        "folder_image",
        `${valuesGallery.name || valuesGallery.select_name}`
      );
      let img: any;
      for (img of arrayImagesUploader.value) {
        FD.append("images", img);
      }

      const url = ``;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          authorization: `Bearer ${store.getters["auth/LoginPanel"].accessToken}`,
        },
        body: FD,
      });
      const responseData = await response.json();
      if (!response.ok) {
        error.value = responseData.error;
        restartError();
        return;
      }
      error.value = responseData.succes;
      restartError();
      valuesGallery.name = "";
      valuesGallery.select_name = "";
      valuesGallery.select_id = "";
      reloadUploader.value = true;
      store.dispatch("gallery/loadGalleries");
    };

    //computed
    const loadGalleries = computed(() => {
      return store.getters["gallery/loadGalleries"];
    });

    const checkInputs = computed(() => {
      if (arrayImagesUploader.value.length === 0) {
        return true;
      }
      return false;
    });

    //wachers
    watch(loadGalleries, () => {
      loadGallery();
    });

    return {
      loadGalleries,
      submitForm,
      valuesGallery,
      arrayGallery,
      error,
      imagesUploader,
      reloadUploader,
      checkInputs,
    };
  },
});
</script>

<style lang="scss" scoped>
.add__image__container__page {
  width: 100%;
  min-height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  .box__panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;

    .inputs__panel {
      input,
      select {
        width: 100%;
        border: none;
      }
      width: 100%;
      display: flex;
      gap: 10px;
      input,
      select {
        padding: 5px;
        font-size: 20px;
        outline: none;
        border-bottom: 2px solid #ccc;
      }
      input:focus,
      select:focus {
        border-bottom: 2px solid var(--color-yellow);
      }
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 20px;
      color: var(--color-yellow);
      margin: 0;
      padding: 0;
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
    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
}
@media (min-width: 1200px) {
  .add__image__container__page {
    .box__panel {
      width: 70%;
    }
  }
}
</style>
