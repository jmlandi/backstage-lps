<script setup lang="ts"></script>

<template>
    <main>
        <h1 class="expanded">Ops...</h1>
        <h4 class="expanded txt">Não encontramos sua página</h4>
        <router-link to="/" class="btn">Ir para atrações</router-link>
    </main>
</template>

<style scoped>
    h1 {
        font-size: 6rem;
    }
    h4 {
        margin-top: -1rem;
        font-size: 2rem;
        font-weight: 300;
    }

    main {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: start;
        gap: 0.5rem;
        flex-direction: column;
    }
</style>