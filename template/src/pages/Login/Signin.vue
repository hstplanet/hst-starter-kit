<template>
  <q-page class="flex flex-center">
    <q-form @submit="signin">
      <q-card class="login">
        <q-card-section class="bg-white">
          <img src="~/assets/logo.png" height="42px" alt="logo" />
        </q-card-section>
        <q-card-section class="email-panel">
          <span>Oturum aç</span>
          <q-input
            dense
            color="red"
            v-model="auth.user.email"
            type="email"
            placeholder="E Mail veya Telefon"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Lütfen e-posta adresinizi giriniz.',
            ]"
          />
          <q-input
            dense
            color="red"
            v-model="auth.user.password"
            type="password"
            placeholder="Şifre"
            class="q-mt-sm"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Şifrenizi giriniz.']"
          />
          <div class="q-pt-lg">
            Hesabınız yok mu ?
            <router-link to="/login/signup">Bir tane oluştur !</router-link>
          </div>
          <div class="q-pt-md">
            Şifrenizi mi unuttunuz ?
            <router-link to="/login/reset">Şifreni sıfırla !</router-link>
          </div>
        </q-card-section>
        <q-card-section class="text-right">
          <q-btn type="submit" style="width: 108px" color="red" label="Giriş" />
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
    };
  },
  methods: {
    signin() {
      this.auth.login().then((res) => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="scss"></style>
