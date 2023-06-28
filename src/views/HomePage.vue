<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Aplikasi Panggilan Telepon</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <p><strong>Nomor yang dihubungiiii:</strong></p>
        <ion-input v-model="phoneNumber" aria-label="Phone" fill="solid" type="tel" placeholder="+62 xxx xxxx xxxx" v-maskito="phoneOptions"></ion-input>
        <ion-button expand="block" color="primary" @click="makeCall">
          Panggil
        </ion-button>
      </div>

      <ion-alert
        :is-open="isError"
        header="Gagal"
        sub-header="Nomor tidak valid"
        message="Harap masukan nomor HP yang valid"
        :buttons="alertButtons"
        @didDismiss="setOpen(false)"
      ></ion-alert>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-title size="small">043270718 - Ahmad Nurfadilah - Jakarta</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonAlert, IonContent, IonHeader, IonFooter, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { maskito as vMaskito } from '@maskito/vue';
import { ref } from 'vue';

const isError = ref(false);
const phoneNumber = ref("");
const alertButtons = ['OK'];

const phoneOptions = {
  mask: ['+', '6', '2', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
  elementPredicate: (el: HTMLIonInputElement) => {
    return new Promise((resolve) => {
      requestAnimationFrame(async () => {
        const input = await el.getInputElement();
        resolve(input);
      });
    });
  },
};

const setOpen = (state: boolean) => {
  isError.value = state;
};

const makeCall = () => {
  if (phoneNumber.value) {
    window.open(`tel:${phoneNumber.value}`, "_system");
  } else {
    setOpen(true);
    // alert("Mohon masukkan nomor telepon");
  }
}
</script>

<style scoped>
ion-content{
  --ion-background-color:#F2E3DB;
}

ion-footer ion-toolbar {
  --background: #41644A;
}

ion-footer ion-toolbar ion-title {
  --color: #F2E3DB;
  font-weight: bold;
}

#container {
  text-align: center;
  position: absolute;
  left: 2rem;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
}
</style>
