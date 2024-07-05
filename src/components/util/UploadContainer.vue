<template>
  <div class="uploader__container">
    <div class="input__box">
      <label for="file">Wybierz zdjęcie/a</label>
      <input
        type="file"
        :multiple="type"
        id="file"
        accept="image/*"
        ref="uploader"
        @change="addArrayImages"
      />
    </div>
    <ul class="box__images">
      <li
        class="item__image"
        v-for="(image, index) in loadArrayImages"
        :key="index"
      >
        <p>
          {{ convertSize(image.size) }}
        </p>
        <p>
          {{ image.name }}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          @click="deleteImage(image.lastModified)"
        >
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "UploaderContainer",
  emits: ["array-images"],
  props: {
    type: {
      required: true,
      type: Boolean,
    },
    restartUploader: {
      required: true,
      type: Boolean,
    },
  },
  setup(props, ctx) {
    //values
    const arrayImages = ref<File[]>([]);
    const uploader = ref<any>(null);

    //functions
    const addArrayImages = (e: InputEvent) => {
      const images = (e.target as HTMLInputElement).files as FileList;
      for (const image of images) {
        arrayImages.value.push(image);
      }
      ctx.emit("array-images", arrayImages.value);
      uploader.value.value = "";
    };

    const deleteImage = (image: number) => {
      const index = arrayImages.value.findIndex(
        (id) => id.lastModified === image
      );
      arrayImages.value.splice(index, 1);
      ctx.emit("array-images", arrayImages.value);
    };

    const convertSize = (size: number) => {
      return (size / (1024 * 1024)).toFixed(2) + "-MB";
    };

    const restartUploader = () => {
      arrayImages.value = [];
      uploader.value.value = "";
    };

    //computed
    const loadArrayImages = computed(() => {
      return arrayImages.value;
    });

    //watchers
    watch(
      () => props.restartUploader,
      () => {
        restartUploader();
      }
    );

    return {
      addArrayImages,
      arrayImages,
      loadArrayImages,
      convertSize,
      deleteImage,
      uploader,
    };
  },
});
</script>

<style lang="scss" scoped>
.uploader__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: hidden;

  .input__box {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      display: none;
    }
    label {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      padding: 5px;
      color: white;
      cursor: pointer;
      transition: 0.5s;
      background-color: var(--color-yellow);
    }
    label:hover {
      color: black;
      background-color: #212529;
    }
  }

  .box__images {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;

    .item__image {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      padding: 10px;
      background-color: #212529;

      p {
        margin: 0;
        padding: 0;
        color: white;
        font-size: 12px;
      }
      svg {
        width: 2rem;
        height: 2rem;
        fill: white;
        cursor: pointer;
      }
    }
  }
}
@media (min-width: 450px) {
  .uploader__container {
    .box__images {
      .item__image {
        width: max-content;
      }
    }
  }
}
</style>
