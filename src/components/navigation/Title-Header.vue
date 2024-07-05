<template>
    <div class="title__header">
        <h1>We<span>Create.</span></h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"TitleHeader",
    setup () {
        

        return {}
    }
})
</script>

<style lang="scss" scoped>
    .title__header{
        height: 100%;
        display: flex;
        align-items: center;
        h1{
            margin: 0;
            padding: 0;
            span{
                color: var(--color-yellow);
            }
        }
    }
</style>