<template>
  <section>
    <div class="menu__icon">
      <svg
        @click="offBackground"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
    <div class="menu_container">
      <button class="button__nafigation left" @click="interation('-')">
        <img src="../../images/back.png" alt="photo_arrow" />
      </button>
      <img
        :src="'https://projekt2.server.arturscibor.pl/' + array[idx].path"
        alt="photo"
      />
      <button class="button__nafigation right" @click="interation('+')">
        <img src="../../images/next.png" alt="photo_arrow" />
      </button>
    </div>
  </section>
</template>
<script>
export default {
  props: ["index", "array"],
  emits: ["off-background", "idx-value"],
  data() {
    return {
      idx: this.index,
      isActive: false,
    };
  },
  methods: {
    offBackground() {
      this.$emit("off-background", this.isActive);
    },
    interation(val) {
      if (val === "+") {
        if (this.idx >= this.array.length - 1) {
          this.idx = -1;
        }
        this.idx++;
      } else {
        if (this.idx < 1) {
          this.idx = this.array.length;
        }
        this.idx--;
      }
      this.$emit("idx-value", this.idx);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
  z-index: 99;
  background-color: rgb(255, 255, 255, 0.8);

  .menu__icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    svg{
      width: 2.5rem;
      height: 2.5rem;
      fill: white;
      cursor: pointer;
      background-color: black;
      border-radius: 50%;
      padding: 0.1rem;
    }
  }
  .menu_container {
    width: 98%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0.1rem;

    .button__nafigation {
      display: flex;
      color: black;
      position: absolute;
      background-color: transparent;
      border: none;
      cursor: pointer;
      img{
        width: 2rem;
        height: 2rem;
      }
    }
    .left {
      left: 1px;
    }
    .right {
      right: 1px;
    }
    @media (min-width: 1000px) {
      width: 60%;
      height: 70vh;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
