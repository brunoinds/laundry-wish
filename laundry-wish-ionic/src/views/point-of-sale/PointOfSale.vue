<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>💰 Point Of Sale</ion-title>
                <ion-buttons slot="primary">
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :scrollX="false" :scrollY="false">
            <section class="pos">
                <article>
                    <ion-header>
                        <ion-toolbar>
                            <ion-title>Products</ion-title>
                        </ion-toolbar>
                    </ion-header>
                    <ion-content>
                        <ion-searchbar></ion-searchbar>
                        <ion-list>
                            <ion-item>
                                <ion-label>Item</ion-label>
                                <ion-label position="floating">Item</ion-label>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                    
                </article>
                <aside>
                    <ion-header>
                        <ion-toolbar>
                            <ion-title>Added products</ion-title>
                        </ion-toolbar>
                    </ion-header>
                    
                    <section>
                        <ion-list>
                            <ion-item>
                                <ion-label>Discounts</ion-label>
                                <ion-label slot="end">$0.00</ion-label>
                            </ion-item>
                            <ion-item>
                                <ion-label>Tax</ion-label>
                                <ion-label slot="end">$0.00</ion-label>
                            </ion-item>
                            <ion-item>
                                <ion-label><b>Total</b></ion-label>
                                <ion-label slot="end"><b>$0.00</b></ion-label>
                            </ion-item>
                        </ion-list>
                    </section>
                    <ion-footer>
                        <ion-button expand="block" color="primary" @click="openCreateCustomerModal()">
                            <ion-icon name="add-outline"></ion-icon>
                            <ion-label>Finish</ion-label>
                        </ion-button>
                    </ion-footer>
                    
                </aside>
            </section>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonFooter, IonTitle, IonContent, IonSplitPane, IonList, IonItem, IonLabel, IonSearchbar, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { Request } from "@/helpers/api/Request";
import { ICustomer } from "@/interfaces/Customers/Customer";
import CreateCustomerModal from "@/components/modals/Customers/CreateCustomerModal.vue";
import { computed, ref } from "vue";
import { modalController } from "@ionic/vue";

</script>


<style scoped lang="scss">
.pos{
    display: grid;
    grid-template-columns: 3fr 500px; /* Two columns, 1/4 width for the aside and 3/4 width for the main content */
    grid-gap: 20px;


    position: absolute;
    top: 0px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
}
</style>