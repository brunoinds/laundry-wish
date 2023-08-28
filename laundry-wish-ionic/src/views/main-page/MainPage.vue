<template>
    <ion-split-pane when="xs" content-id="main">
        <ion-menu content-id="main">
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Laundry Wish</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <main>
                    <ion-accordion-group>
                        <ion-accordion value="first">
                            <ion-item slot="header" color="light">
                                <ion-label>Point of Sale</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">First Content</div>
                        </ion-accordion>
                        <ion-accordion value="second">
                            <ion-item slot="header" color="light">
                                <ion-label>Customers</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">Second Content</div>
                        </ion-accordion>
                        <ion-accordion value="third">
                            <ion-item slot="header" color="light">
                                <ion-label>Third Accordion</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">Third Content</div>
                        </ion-accordion>
                    </ion-accordion-group>
                </main>
            </ion-content>
        </ion-menu>

        <ion-router-outlet id="main"></ion-router-outlet>
    </ion-split-pane>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonSplitPane, IonRouterOutlet, IonMenu, IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>


<style scoped lang="scss">
ion-split-pane{
    > ion-menu{
        width: 100px;
    }
}
</style>
