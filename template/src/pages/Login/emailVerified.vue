<template>
  <q-page class="flex flex-center">
    <div class="column" style="width: 50%">
      <span class="text-red text-h4">Aramıza Hoşgeldin</span>
      <span class="text-h6">{{apiName}} Hesabınızı doğrulayın.</span>
      <q-separator color="red" class="q-my-sm" />
      <p>
        E-Posta adresinize doğrulama yapmanız için bir mail gönderdik. Bu maildeki linki
        kullanarak doğrulama yapabilirsiniz. E Postanın gelmediğini düşünüyorsanız lütfen
        gereksiz postalar klasörünü kontrol edin. Eğer bir sorun yaşadıysanız size tekrar
        mail gönderebiliriz.
      </p>
      <q-btn
        class="text-capitalize q-mt-mda"
        label="Tekrar Mail Gönder"
        color="red"
        text-color="white"
        @click="sendMail"
      />
    </div>
  </q-page>
</template>

<script>
import AuthModel from 'models/AuthModel';
import hstconf from 'app/hst.conf';
export default {
  data() {
    return {
      auth : new AuthModel()
    };
  },
  methods: {
    sendMail() {
      this.auth.sendEmailVerification();
    },
  },
  computed : {
    apiName(){
      if (hstconf.hstcloud !== undefined) {
        return hstconf.hstcloud.apiKey;
      }
      return "";
    }
  }
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
