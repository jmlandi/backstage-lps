<script setup lang="ts">
    import ShowResume from '../components/ShowResume.vue';
</script>

<template>
    <main>
        <div id="banner">
            <img src="/banner_home.jpg" alt="Agenda Backstage">
        </div>
        <div id="events">
            <ShowResume
                showImageFileName="show_21022025.jpg"
                showTitle="Roupa Nova Turnê 40 Anos | Taubaté, SP"
                showDate="21/02/2025"
                showLocation="Associação de Taubaté"
                showHour="19h às 01h"
                showCheckoutURL="https://shotgun.live/pt-br/web/events/roupa-nova-taubate-sp"
            />
            <ShowResume
                showImageFileName="show_22042025.jpg"
                showTitle="Simplesmente Roupa Nova | Pelotas, RS"
                showDate="22/04/2025"
                showLocation="Theatro Guarany"
                showHour="20h às 22h30"
                showCheckoutURL="https://shotgun.live/pt-br/web/events/simplesmente-roupa-nova-pelotas-rs"
            />
            <ShowResume
                showImageFileName="show_23042025.jpg"
                showTitle="Simplesmente Roupa Nova | Novo Hamburgo, RS"
                showDate="23/04/2025"
                showLocation="Teatro Feevale"
                showHour="19h às 22h30"
                showCheckoutURL="https://shotgun.live/pt-br/web/events/simplesmente-roupa-nova-nova-hamburgo-rs"
            />
            <ShowResume
                showImageFileName="show_23052025.jpg"
                showTitle="Roupa Nova Turnê 2025 | Guarujá, SP"
                showDate="23/05/2025"
                showLocation="Arena Jequitimar"
                showHour="19h às 23h"
                showCheckoutURL="https://shotgun.live/pt-br/web/events/roupa-nova-turne-40-anos-guaruja-sao-paulo"
            />
        </div>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #banner {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #banner img {
        border-radius: 25px;
        max-width: 90%;
    }

    #events {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    @media (min-width: 768px) {
        main {
            display: flex;
            justify-content: center;
            align-items: start;
            gap: 0px;
        }

        #banner {
            width: 30%;
            justify-content: start;
        }

        #banner img {
            max-width: 100%;
            width: 100%;
        }

        #events {
            width: 60%;
            align-items: start;
            justify-content: end;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 3rem 1rem;
        }
    }
</style>