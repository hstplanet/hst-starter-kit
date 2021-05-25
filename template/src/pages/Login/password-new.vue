<template>
  <q-page class="flex flex-center">
    <q-form @submit="signin" class="login">
      <q-card>
        <q-card-section class="bg-white">
          <router-link to="/">
            <img src="~/assets/logo.png" height="26px" alt="logo" />
          </router-link>
        </q-card-section>
        <q-card-section class="email-panel">
          <q-input
            dense
            color="red"
            v-model="auth.attributes.password"
            type="password"
            placeholder="Şifre"
            outlined
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '']"
          />
          <q-input
            dense
            color="red"
            v-model="auth.attributes.confirmPassword"
            type="password"
            placeholder="Şifre Onay"
            error-message="Şifreler uyuşmuyor."
            :error="passwordError"
            outlined
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '']"
          />
        </q-card-section>
        <q-card-section class="text-right">
          <q-btn type="submit" style="width: 108px" color="red" label="Sıfırla" />
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
      passwordError: false,
    };
  },
  created() {
    if (this.$route.query.token === undefined) {
      this.$router.push("/");
    }
  },
  methods: {
    signin() {
      if (
        this.auth.attributes.password === this.auth.attributes.confirmPassword
      ) {
        this.auth
          .sendNewPassword(this.$route.query.token)
          .then(() => {
            this.$router.push("/login/signin");
          })
          .catch(() => {});
      } else {
        this.passwordError = true;
      }
    },
  },
};
</script>
