<template>
  <q-page class="flex flex-center">
    <q-card class="login">
      <q-card-section class="bg-white">
        <img src="~/assets/logo.png" height="42px" alt="logo" />
      </q-card-section>
      <q-card-section class="email-panel">
        <span>Kayıt Ol</span>
        <q-input
          color="red"
          dense
          input-style="height : 30px"
          v-model="form.email"
          type="email"
          placeholder="E Mail"
        />
        <q-input
          color="red"
          dense
          input-style="height : 30px"
          v-model="form.password"
          type="password"
          placeholder="Şifre"
          class="q-mt-md"
        />
        <q-input
          color="red"
          dense
          input-style="height : 30px"
          v-model="form.passwordConfirm"
          type="password"
          placeholder="Şifre Onay"
          class="q-mt-md"
          error-message="Şifreler uyuşmuyor."
          :error="!this.passwordCheck"
          @input="formZero"
        />
        <q-input
          color="red"
          dense
          input-style="height : 30px"
          v-model="form.name"
          type="text"
          placeholder="Adınız"
        />
        <q-input
          color="red"
          dense
          input-style="height : 30px"
          v-model="form.lastName"
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
        <q-btn @click="signUp" style="width: 108px" color="red" label="Kayıt Ol" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      passwordCheck: true,
      auth: {},
      form: {},
    };
  },
  created() {
    this.form = this.auth.data;
  },
  methods: {
    signUp() {
      
    },
    formZero() {
     
    },
  },
};
</script>

<style></style>
