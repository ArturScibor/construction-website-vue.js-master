<template>
  <li class="item__list">
    <div class="image">
      <img :src="getPicture(image)" alt="photo__icon" />
    </div>
    <div class="description">
      <h3>
        <span>{{ name }}</span
        >&nbsp;-&nbsp;{{ description }}
      </h3>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemInformationImage",
  props: {
    image: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
  setup() {
    //functions
    const getPicture = (picture: string) => {
      return require(`../../images/6ikony/${picture}`);
    };
    return { getPicture };
  },
});
</script>

<style lang="scss" scoped>
.item__list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 5px;

  .image {
    max-width: 60px;
    max-height: 60px;
    background-color: #212529;
    border-radius: 50%;
    padding: 5px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .description {
    h3 {
      font-size: 14px;
      color: white;
    }
    span {
      color: var(--color-yellow);
    }
  }
}
@media (min-width: 750px) {
  .item__list {
    .description {
      h3 {
        font-size: 20px;
      }
    }
  }
}
</style>
