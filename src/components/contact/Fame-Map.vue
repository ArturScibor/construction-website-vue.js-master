<template>
    <div class="frame__container__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39097.44073548432!2d21.0151792887331!3d52.23266550640335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1692091272778!5m2!1spl!2spl" class="frame" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {}
    }
})
</script>

<style lang="scss" scoped>
    .frame__container__map{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .frame{
            width: 100%;
            height: 450px;
        }
    }
    @media (min-width: 750px){
        .frame__container__map{
            .frame{
                width: 80%;
                height: 550px;
            }
        } 
    }
</style>