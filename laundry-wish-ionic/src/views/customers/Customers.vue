<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>👨‍👩‍👦‍👦 Customers</ion-title>
                <ion-buttons slot="primary">
                    <ion-button @click="openCreateCustomerModal()">
                        <ion-icon slot="icon-only" name="add"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-searchbar :animated="true" placeholder="Search for a customer" @ionInput="(event) => {searchQuery = event.srcElement.value}"></ion-searchbar>

            <ion-list :inset="true">
                <ion-item v-for="customer in customers" :key="customer.id">
                    <ion-label>
                        <h2>{{ customer.name }}</h2>
                        <p>{{ customer.email }}</p>
                    </ion-label>
                    <ion-buttons slot="end">
                        <ion-button @click="editCustomer" :strong="true">Edit</ion-button>
                    </ion-buttons>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
, IonList
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSearchbar, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { Request } from "@/helpers/api/Request";
import { ICustomer } from "@/interfaces/Customers/Customer";
import CreateCustomerModal from "@/components/modals/Customers/CreateCustomerModal.vue";
import { computed, ref } from "vue";
import { modalController } from "@ionic/vue";

const searchQuery = ref<string>('');
const customersData = ref<Array<ICustomer>>([]);
const customers = computed<Array<ICustomer>>(() => {
    return customersData.value.filter((customer) => {
        return customer.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
})

const loadCustomers = () => {
    Request.get('/v1/customers').then(({response}) => {
        customersData.value = response
    })
}
loadCustomers()


const openCreateCustomerModal = async () => {
    const modal = await modalController.create({
        component: CreateCustomerModal,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
        this.message = `Hello, ${data}!`;
    }
}

</script>
