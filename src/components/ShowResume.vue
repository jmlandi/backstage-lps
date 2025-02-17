<script setup lang="ts">
    
    defineProps<{
        showImageFileName: string,
        showTitle: string,
        showDate: string,
        showLocation: string,
        showHour: string,
        showCheckoutURL: string,
    }>(); 
</script>

<template>
    <div class="show-container">
        <div class="show-content">
            <img :src="`/shows/${showImageFileName}`">
            <div class="show-text">
                <h4>{{ showTitle }}</h4>
                <div class="show-content-detail">
                    <v-icon name="bi-calendar-fill" />
                    <p> {{ showDate }} </p>
                </div>
                <div class="show-content-detail">
                    <v-icon name="io-location-sharp" />
                    <p> {{ showLocation }} </p>
                </div>
                <div class="show-content-detail">
                    <v-icon name="bi-clock-fill" />
                    <p> {{ showHour }} </p>
                </div>
            </div>
        </div>
        <a :href="showCheckoutURL" class="btn">COMPRE AGORA!</a>
    </div>
</template>

<style scoped>
    h4 {
        font-weight: 900;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .show-container {
        margin-top: 2rem;
        margin-bottom: 2.25rem;
        max-width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    .show-container .btn {
        width: 100%;
        text-align: center;
        font-weight: 700;
    }

    .show-content {
        padding: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-image: url("/show_fade_bg.jpg");
        background-size: cover;
        border-radius: 25px;
        gap: 0.5rem;
        transition: 0.2s all ease-out;
    }

    .show-content img {
        width: 100%;
        border-radius: 25px;
    }

    .show-text {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: start;
        width: 100%;
        flex-direction: column;
    }

    .show-text > * {
        color: #e6e6e6;
    }

    .show-content-detail {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font-weight: 300;
        font-size: 1rem;
    }

    @media (min-width: 768px) {
        .show-container { margin: 0px; max-width: 430px;}
    }
</style>