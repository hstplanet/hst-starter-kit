<template>
  <q-page class="flex flex-center">
    <q-inner-loading :showing="!view">
      <q-spinner-rings size="120px" color="red" />
    </q-inner-loading>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      view: false,
    };
  },
  created() {
    // E-Mail ile Kullanıcıyı Onaylama
  },
};
</script>

<style lang="scss">
.login {
  width: 440px;
  .logo {
    img {
      height: 32px;
    }
  }
  .email-panel {
    span {
      display: block;
      color: #1b1b1b;
      font-weight: 600;
      font-size: 1.5rem;
      padding: 0;
      margin-bottom: 12px;
      font-family: "Segoe UI", "Helvetica Neue", "Lucida Grande", "Roboto", "Ebrima",
        "Nirmala UI", "Gadugi", "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI",
        "Khmer UI", "Tunga", "Lao UI", "Raavi", "Iskoola Pota", "Latha", "Leelawadee",
        "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic",
        "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue",
        "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti",
        "MV Boli", "Myanmar Text", "Cambria Math";
    }
  }

  .q-field__control {
    height: 36px;
  }

  a {
    color: #3498db;
  }
}
</style>
