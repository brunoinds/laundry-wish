<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 100px) {
  ion-app {
    zoom: 79%;
  }
}
</style>
