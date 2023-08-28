<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>🤖 Machines</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { Request } from "@/helpers/api/Request";

const loadMachines = async () => {
    return Request.get('/v1/machines')
}

const machines = await loadMachines()

console.log(machines)

</script>
