<template>
  <q-page class="flex flex-center">
    <q-form @submit="signUp" class="login">
      <q-card>
        <q-card-section class="bg-white">
          <img src="~/assets/logo.png" height="42px" alt="logo" />
        </q-card-section>
        <q-card-section class="email-panel">
          <span class="q-mb-md block">Kayıt Ol</span>
          <q-input
            color="red"
            dense
            input-style="height : 30px"
            v-model="auth.user.email"
            type="email"
            placeholder="E Mail"
          />
          <q-input
            color="red"
            dense
            input-style="height : 30px"
            v-model="auth.user.password"
            type="password"
            placeholder="Şifre"
            class="q-mt-md"
          />
          <q-input
            color="red"
            dense
            input-style="height : 30px"
            v-model="auth.user.confirmPassword"
            type="password"
            placeholder="Şifre Onay"
            class="q-mt-md"
            error-message="Şifreler uyuşmuyor."
            :error="!this.passwordCheck"
          />
          <q-input
            color="red"
            dense
            input-style="height : 30px"
            v-model="auth.user.name"
            type="text"
            placeholder="Adınız"
          />
          <q-input
            color="red"
            dense
            input-style="height : 30px"
            v-model="auth.user.lastname"
            type="text"
            placeholder="Soyadınız"
            class="q-mt-md"
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
          <q-btn type="submit" style="width: 108px" color="red" label="Kayıt Ol" />
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
      passwordCheck: true,
      auth: new AuthModel(),
    };
  },
  methods: {
    signUp() {
      this.auth.createAccount().then(res => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
