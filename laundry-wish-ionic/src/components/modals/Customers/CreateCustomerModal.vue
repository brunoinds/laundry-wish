<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>New Customer</ion-title>
                <ion-buttons slot="end">
                    <ion-button :disabled="isCreating" @click="createNewCustomer" :strong="true">Create</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list :inset="true">
                <ion-item>
                    <ion-input label="Name" label-placement="stacked" placeholder="Enter customer names" v-model="form.name"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input label="Phone" label-placement="stacked" v-model="form.phone"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input label="Email" label-placement="stacked" v-model="form.email"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input label="Address" label-placement="stacked" v-model="form.address"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input label="Address details" label-placement="stacked" v-model="form.address_details"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-toggle v-model="form.allow_notifications">Enable receive notifications</ion-toggle>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
, IonList
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButtons, IonButton, IonToggle } from '@ionic/vue';
import { Request } from "@/helpers/api/Request";
import { ICustomer } from "@/interfaces/Customers/Customer";
import { ref } from "vue";


const isCreating = ref(false);
const form = ref({
    business_id: 1,
    name: '',
    phone: '',
    email: '',
    address: '',
    address_details: '',
    allow_notifications: false,
})

const createNewCustomer = () => {
    Request.post('/v1/customers', {
        body: form.value
    }).then(({response}) => {
        console.log(response)
    }).catch((error) => {
        if (error.errors && error.message){
            alert(error.message)
        }
    })
}

</script>
