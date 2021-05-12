<template>
  <q-layout view="lHh Lpr fff" class="bg-img">
    <q-header elevated class="bg-white text-black" height-hint="64"> </q-header>
    <q-page-container class="GPL__page-container">
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-9 q-pa-sm text-center">
      Web sitemiz, web sitesi kullanımınızı analiz etmek, içeriği kişiselleştirmek,
      ziyaret tercihlerinizi hatırlamak, web sitesi kullanım istatistiklerini amaçlarla
      sınırlı ve gizliliğe uygun şekilde çerezleri kullanır.
    </q-footer>
  </q-layout>
</template>

<script>
export default {};
</script>

<style lang="scss">
.bg-img {
  background-image: linear-gradient(
    to left,
    #d9e3d8,
    #dee2d6,
    #e2e1d5,
    #e6e0d5,
    #e9dfd6,
    #ecded8,
    #eddddc,
    #ecdde0,
    #e9dee5,
    #e3dfe9,
    #dde1eb,
    #d9e3ea
  );
}

.login {
  width: 30%;
  a{
    color: $grey-8;
    &:hover {
      color: $red;
    }
  }
}

@media screen and (max-width: 1366px) {
  .login {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .login {
    width: 90%;
  }
}
</style>