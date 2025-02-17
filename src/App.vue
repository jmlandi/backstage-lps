<script setup lang="ts"></script>

<template>
  <nav>
    <img class="logo" src="/logo.png" alt="Backstage Produções">
    <div id="nav-icons">
      <a href="https://www.instagram.com/backstageproductionsbr/" target="_blank">
        <v-icon name="bi-instagram" fill="000000" :scale="1.70" />
      </a>
      <a href="https://www.facebook.com/people/Backstage-Productions-Br/61558564295158/" target="_blank">
        <v-icon name="bi-facebook" fill="000000" :scale="1.70" />
      </a>
      <a href="https://www.linkedin.com/company/backstage-productions-uk/" target="_blank">
        <v-icon name="co-linkedin-in" fill="000000" :scale="1.70" />
      </a>
      <a href="https://open.spotify.com/user/manituszerman?si=167cc7befe4e4e3b&nd=1&dlsi=2508b25e78484d03" target="_blank">
        <v-icon name="bi-spotify" fill="000000" :scale="1.70" />
      </a>
    </div>
  </nav>
  <img class="grafismo grafismo-top" src="/grafismo.png">
  <router-view class="fit-content"></router-view>
  <img class="grafismo grafismo-bottom" src="/grafismo.png">
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 80vw;
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 60px;
    max-width: 100%;
    padding-right: 5%;
    padding-left: 5%;
  }

  .fit-content {
    margin-top: 2rem;
    margin-bottom: 2rem;
    min-height: calc(100vh - 4rem - 60px);
    z-index: 999;
  }

  #nav-icons {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 10px;
  }

  .logo {
    max-width: 160px;
    min-width: 90px;
    width: 50vw;
  }

  .grafismo {
    width: 50vw;
    min-width: 300px;
    max-width: 500px;
    position: fixed;
    opacity: 0.5;
    z-index: -1;
  }
  .grafismo-top {
    left: -3em;
    top: -3em;
  }
  .grafismo-bottom {
    right: -3em;
    bottom: -3em;
  }
</style>