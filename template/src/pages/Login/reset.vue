<template>
  <q-page class="flex flex-center">
    <q-form @submit="reset" class="login">
      <q-card>
        <q-card-section class="bg-white">
           <router-link to="/">
            <img src="~/assets/logo.png" height="26px" alt="logo" />
          </router-link>
        </q-card-section>
        <q-card-section class="email-panel" v-if="!sendResetMail">
          <q-input
            dense
            color="red"
            v-model="auth.attributes.email"
            type="email"
            outlined
            placeholder="E Mail Adresiniz"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || '',
            ]"
          />
          <div class="q-pt-lg">
            * Şifreni sıfırlaman için sana bir sıfırlama e postası göndereceğiz.
          </div>
          <div class="q-pt-lg">
            Hesabınız yok mu ?
            <router-link to="/login/signup">Bir tane oluştur !</router-link>
          </div>
        </q-card-section>
        <q-card-section v-else>
          <p>Sıfırlama e postası {{ auth.attributes.email }} adresine gönderildi. Lütfen bu adresi kontrol ediniz. Gönderdiğimiz linki kullanarak şifrenizi sıfırlayabilirsiniz.</p>
        </q-card-section>
        <q-card-section class="text-right">
          <q-btn type="submit" style="width: 108px" color="red" label="Sıfırla" v-if="!sendResetMail"/>
          <q-btn to="/" style="width: 108px" color="red" label="Tamam" v-else/>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import AuthModel from "models/AuthModel";
export default {
  data() {
    return {
      auth: new AuthModel(),
      sendResetMail: false,
    };
  },
  methods: {
    reset() {
      this.auth.resetPassword().then((res) => {
        this.sendResetMail = true;
      });
    },
  },
};
</script>
