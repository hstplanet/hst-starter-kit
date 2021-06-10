<template>
  <div class="AccountCard">
    <!-- isLogin True -->
    <q-item class="cursor-pointer" v-if="isLogin">
      <q-item-section avatar>
        <q-avatar>
          <img :src="auth.attributes.photoURL" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label></q-item-label>
        <q-item-label caption></q-item-label>
      </q-item-section>
      <!-- Account Menu -->
      <q-menu>
        <q-card class="text-center" style="min-width: 300px">
          <q-card-section>
            <q-avatar size="76px">
              <img :src="auth.attributes.photoURL" />
            </q-avatar>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-item-section>
              <q-item-label v-html="auth.attributes.fullName" />
              <q-item-label caption v-html="auth.attributes.emailAddress" />
            </q-item-section>
          </q-card-section>
          <q-card-section
            v-if="userData !== null && userData.emailStatus !== 'confirmed'"
            class="q-pa-sm bg-red text-white"
          >
            Hesabınız onaylanmamış.
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <q-btn
              class="text-capitalize text-grey-8 q-py-sm text-caption full-width"
              align="left"
              icon="settings"
              flat
              label="Hesap Ayarları"
              v-close-popup
            />
            <q-separator />
            <q-btn
              class="text-capitalize text-grey-8 q-py-sm text-caption full-width"
              align="left"
              icon="logout"
              flat
              label="Oturumu Kapat"
              @click="logout"
              v-close-popup
            />
          </q-card-section>
        </q-card>
      </q-menu>
    </q-item>
    <!-- isLogin False -->
    <div class="row no-wrap q-mx-xs" v-else>
      <q-btn
        class="text-capitalize text-grey-8 full-width text-no-wrap"
        align="left"
        flat
        label="Giriş Yap"
        style="font-size: 14px"
        to="login/signin"
      />
      <q-separator vertical class="q-mx-sm" />
      <q-btn
        class="text-capitalize text-grey-8 full-width text-no-wrap"
        align="left"
        flat
        label="Üye Ol"
        style="font-size: 14px"
        to="login/signup"
      />
    </div>
  </div>
</template>

<script>
import AuthModel from "models/AuthModel";
export default {
  name: "AccountCard",
  data() {
    return {
      auth: new AuthModel(),
      userData: null,
      isLogin: false,
    };
  },
  created() {
    this.auth
      .onAuthStateChanged()
      .then((res) => {
        this.userData = res;
        this.auth.attributes = res;
        this.isLogin = true;
      })
      .catch((err) => {
        this.isLogin = false;
      });
  },
  methods: {
    logout() {
      this.auth
        .logout()
        .then((e) => {
          this.$router.push("/");
          this.$router.go();
        })
        .catch((err) => {});
    },
  },
};
</script>

<style>
</style>