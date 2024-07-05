<template>
    <footer class="footer">
        <p>&copy;Copyright 2023 Artur Ścibor. Wszystkie prawa zastrzeżone.</p>
    </footer>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 -5px 5px -5px #000000;
        font-size: 18px;
        text-align: center;
        p{
            padding: 0;
            margin: 0;
        }
    }
    @media (min-width: 750px){
        .footer{
            font-size: 20px;  
        }
    }
</style>