<template>
  <div class="form__box__container">
    <form>
      <h3>Skontaktuj Się</h3>
      <input type="text" placeholder="imię" class="box" />
      <input type="text" placeholder="e-mail" class="box" />
      <input type="number" placeholder="numer telefonu" class="box" />
      <textarea
        name=""
        placeholder="wiadomość"
        class="box"
        cols="30"
        rows="10"
      ></textarea>
      <button class="btn">Wyślij wiadomość</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.form__box__container {
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    background-color: white;
    @media (min-width: 750px){
      width: 80%;
    }

    h3 {
      margin: 0;
      padding: 0;
      font-size: 30px;
    }
    input,
    textarea {
      border: none;
    }
    .box {
      width: 100%;
      padding: 10px;
      border-bottom: 2px solid #ccc;
      background-color: white;
      font-size: 20px;
      outline: none;
    }
    .box:focus {
      border-color: var(--color-yellow);
    }
    .btn {
      width: max-content;
      padding: 10px;
      background: black;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
