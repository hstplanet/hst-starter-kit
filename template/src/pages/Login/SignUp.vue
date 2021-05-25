<template>
  <q-page class="flex flex-center">
    <q-form @submit="signUp" class="login">
      <q-card>
        <q-card-section class="bg-white">
           <router-link to="/">
            <img src="~/assets/logo.png" height="26px" alt="logo" />
          </router-link>
        </q-card-section>
        <q-card-section class="email-panel">
          <!-- E Posta -->
          <q-input
            color="red"
            dense
            v-model="auth.attributes.email"
            outlined
            type="email"
            placeholder="E Mail Adresiniz"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || '',
            ]"
          />
          <!-- Şifre -->
          <q-input
            color="red"
            dense
            v-model="auth.attributes.password"
            outlined
            type="password"
            placeholder="Şifre"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || '',
            ]"
          />
          <!-- Şifre Onay -->
          <q-input
            color="red"
            dense
            v-model="auth.attributes.confirmPassword"
            outlined
            type="password"
            placeholder="Şifre Onay"
            error-message="Şifreler uyuşmuyor."
            class="q-mb-md"
            :error="passwordControl"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || '',
            ]"
          />
          <!-- Adınız -->
          <q-input
            color="red"
            dense
            v-model="auth.attributes.name"
            outlined
            type="text"
            placeholder="Adınız"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || '',
            ]"
          />
          <!-- Soyadınız -->
          <q-input
            color="red"
            dense
            v-model="auth.attributes.lastname"
            outlined
            type="text"
            placeholder="Soyadınız"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || '',
            ]"
          />
          <div class="q-pt-lg">
            Zaten hesabın var mı ?
            <router-link to="/login/signin">Giriş yap !</router-link>
          </div>
          <div class="q-pt-md">
            Şifrenizi mi unuttunuz ?
            <router-link to="/login/reset">Şifreni sıfırla !</router-link>
          </div>
        </q-card-section>
        <q-card-section class="text-right">
          <q-btn
            type="submit"
            style="width: 108px"
            color="red"
            label="Kayıt Ol"
          />
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
      passwordCheck: false,
      auth: new AuthModel(),
    };
  },
  methods: {
    signUp() {
      this.auth.createAccount().then((res) => {
        this.$router.push("/mailverified");
      });
    },
  },
  computed: {
    passwordControl() {
      if (
        this.auth.attributes.confirmPassword !== this.auth.attributes.password
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style></style>
