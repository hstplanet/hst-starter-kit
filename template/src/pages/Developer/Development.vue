<template>
  <q-page class="container q-py-md">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="(model, index) in models"
        :key="index"
        expand-separator
        :label="model.model.model"
        caption="Model"
        header-class="bg-grey-3"
      >
        <!-- Ön Tanım -->
        <q-card>
          <q-card-section>
            <p class="q-ma-none">Attributes</p>
            <span class="text-caption">
              Oluşturulan modelin ön tanımlı şablon örneği aşağıdaki gibidir.
              Model ile ilgili GET POST PUT DELETE gibi rest api işlemlerini
              buradan yapabilirsiniz.
            </span>
            <json-viewer :value="model.model.attributes" />
          </q-card-section>
        </q-card>
        <!-- İşlemler -->
        <q-card>
          <q-card-section>
            <q-list bordered class="rounded-borders">
              <!-- GET -->
              <q-expansion-item
                expand-icon-class="text-white"
                expand-separator
                label="GET"
                default-opened
              >
                <q-card>
                  <q-card-section>
                    <div class="row justify-between">
                      <div class="">
                        <p class="q-ma-none">
                          Veritabanında bulunan modele ait tüm verileri getirir.
                        </p>
                        <span class="text-caption text-grey-8">
                          Veriler kaydedilmiş olan sıra ile gelir ve ön tanımlı
                          olarak en fazla ilk 30 veri alınır.
                        </span>
                      </div>
                      <q-btn
                        label="GET"
                        color="teal"
                        dense
                        style="min-height: 40px"
                        class="text-capitalize q-px-md"
                        @click="find(model)"
                      />
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <json-viewer
                      boxed
                      theme="my-awesome-json-theme"
                      :value="model.find"
                    />
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <!-- GET ID -->
              <q-expansion-item
                expand-icon-class="text-white"
                expand-separator
                label="GET / {id}"
              >
                <q-card>
                  <q-card-section>
                    <div class="row justify-between">
                      <div class="">
                        <p class="q-ma-none">
                          Veritabanında bulunan modele ait belirtilen id ile
                          eşleşen veriyi getirir.
                        </p>
                        <span class="text-caption text-grey-8">
                          Veriler kaydedilmiş olan sıra ile gelir ve ön tanımlı
                          olarak en fazla ilk 30 veri alınır.
                        </span>
                      </div>

                      <div class="flex flex-center q-gutter-md">
                        <q-input
                          dense
                          style="min-height: 40px"
                          outlined
                          color="teal"
                          placeholder="0"
                          v-model="model.id"
                        />
                        <q-btn
                          label="GET"
                          color="teal"
                          dense
                          style="min-height: 40px"
                          class="text-capitalize q-px-md"
                          @click="findOne(model)"
                          :disable="model.id <= 0"
                        />
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <json-viewer
                      boxed
                      theme="my-awesome-json-theme"
                      :value="model.findOne"
                    />
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <!-- POST -->
              <q-expansion-item
                expand-icon-class="text-white"
                expand-separator
                label="POST"
              >
                <q-card>
                  <q-card-section>
                    <div class="row justify-between">
                      <div class="">
                        <p class="q-ma-none">
                          Veritabanında bulunan modele ait tüm verileri getirir.
                        </p>
                        <span class="text-caption text-grey-8">
                          Veriler kaydedilmiş olan sıra ile gelir ve ön tanımlı
                          olarak en fazla ilk 30 veri alınır.
                        </span>
                      </div>
                      <q-btn
                        label="POST"
                        color="teal"
                        dense
                        style="min-height: 40px"
                        class="text-capitalize q-px-md"
                        @click="openPostDialog(model)"
                      />
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <json-viewer
                      boxed
                      theme="my-awesome-json-theme"
                      :value="model.create"
                    />
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <!-- PUT -->
              <q-expansion-item
                expand-icon-class="text-white"
                expand-separator
                label="PUT"
              >
                <q-card>
                  <q-card-section>
                    <div class="row justify-between">
                      <div class="">
                        <p class="q-ma-none">
                          Veritabanında bulunan modele ait tüm verileri getirir.
                        </p>
                        <span class="text-caption text-grey-8">
                          Veriler kaydedilmiş olan sıra ile gelir ve ön tanımlı
                          olarak en fazla ilk 30 veri alınır.
                        </span>
                      </div>
                      <div class="flex flex-center q-gutter-md">
                        <q-input
                          dense
                          style="min-height: 40px"
                          outlined
                          color="teal"
                          placeholder="0"
                          v-model="model.id"
                        />
                        <q-btn
                          label="PUT"
                          color="teal"
                          dense
                          style="min-height: 40px"
                          class="text-capitalize q-px-md"
                          @click="openPutDialog(model)"
                          :disable="model.id <= 0"
                        />
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <json-viewer
                      boxed
                      theme="my-awesome-json-theme"
                      :value="model.update"
                    />
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <!-- Delete -->
              <q-expansion-item
                expand-icon-class="text-white"
                expand-separator
                label="DELETE"
              >
                <q-card>
                  <q-card-section>
                    <div class="row justify-between">
                      <div class="">
                        <p class="q-ma-none">
                          Veritabanında bulunan modele ait belirtilen id ile
                          eşleşen veriyi siler.
                        </p>
                        <span class="text-caption text-grey-8">
                          Veriler kaydedilmiş olan sıra ile gelir ve ön tanımlı
                          olarak en fazla ilk 30 veri alınır.
                        </span>
                      </div>

                      <div class="flex flex-center q-gutter-md">
                        <q-input
                          dense
                          style="min-height: 40px"
                          outlined
                          color="teal"
                          placeholder="0"
                          v-model="model.id"
                        />
                        <q-btn
                          label="DELETE"
                          color="teal"
                          dense
                          style="min-height: 40px"
                          class="text-capitalize q-px-md"
                          @click="destroy(model)"
                          :disable="model.id <= 0"
                        />
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <json-viewer
                      boxed
                      theme="my-awesome-json-theme"
                      :value="model.delete"
                    />
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <q-dialog v-model="postDialog" persistent v-if="postModel !== null">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="save_alt" text-color="grey-8" />
          <span class="q-ml-sm">
            {{ postModel.model.model }} modelini kullanarak veri kaydı
            yapılacaktır.
          </span>
        </q-card-section>
        <q-card-section>
          <div
            class="row"
            v-for="(attr, index) in Object.keys(postModel.model.attributes)"
            :key="index"
          >
            {{ attr }}
            <q-input
              class="q-my-sm full-width"
              dense
              outlined
              color="teal"
              :placeholder="attr"
              v-model="postModel.model.attributes[attr]"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="İptal" color="primary" v-close-popup />
          <q-btn
            flat
            label="Kaydet"
            @click="create"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
// Models
import Profile from "models/Profile";

// Komponents
import JsonViewer from "vue-json-viewer";
export default {
  data() {
    return {
      postDialog: false,
      postModel: null,
      isPut: false,
      models: [
        {
          model: new Profile(),
          id: -1,
          find: [],
          findOne: {},
          update: {},
          delete: {},
          create: {},
        },
      ],
    };
  },
  components: {
    JsonViewer,
  },
  methods: {
    find(model) {
      model.model.find().then((res) => {
        model.find = res;
      });
    },
    findOne(model) {
      model.model.findOne({ id: model.id }).then((res) => {
        model.findOne = res;
      });
    },
    create() {
      if (!this.isPut) {
        this.postModel.model.create().then((res) => {
          this.postModel.create = res;
        });
      } else {
        this.postModel.model
          .update({ id: parseInt(this.postModel.id) })
          .then((res) => {
            this.postModel.update = res;
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    openPostDialog(model) {
      this.postModel = model;
      this.postDialog = true;
    },
    openPutDialog(model) {
      this.isPut = true;
      model.model.findOne({ id: model.id }).then((res) => {
        this.postModel = model;
        this.postModel.model.attributes = res;
        delete this.postModel.model.attributes.createdAt;
        delete this.postModel.model.attributes.updatedAt;
        delete this.postModel.model.attributes.id;
        delete this.postModel.model.attributes.update;
        delete this.postModel.model.attributes.destroy;
        this.postDialog = true;
      });
    },
    destroy(model) {
      model.model.destroy({ id: model.id }).then((res) => {
        model.delete = res;
      });
    },
  },
  created() {},
};
</script>

<style lang="scss">
.my-awesome-json-theme {
  background: $grey-10;
  white-space: nowrap;
  color: #fff;
  font-size: 14px;
  font-family: Consolas, Menlo, Courier, monospace;

  .jv-ellipsis {
    color: #fff;
    background-color: transparent;
    display: inline-block;
    line-height: 0.9;
    font-size: 0.9em;
    padding: 0px 4px 2px 4px;
    border-radius: 3px;
    vertical-align: 2px;
    cursor: pointer;
    user-select: none;
  }
  .jv-button {
    color: #49b3ff;
  }
  .jv-key {
    color: #fff;
  }
  .jv-item {
    &.jv-array {
      color: #fff;
      padding-left: 5px;
    }
    &.jv-boolean {
      color: #fc1e70;
      padding-left: 5px;
    }
    &.jv-function {
      color: #067bca;
      padding-left: 5px;
    }
    &.jv-number {
      color: #fc1e70;
      padding-left: 5px;
    }
    &.jv-number-float {
      color: #fc1e70;
      padding-left: 5px;
    }
    &.jv-number-integer {
      color: #fc1e70;
      padding-left: 5px;
    }
    &.jv-object {
      color: #fff;
      padding-left: 5px;
    }
    &.jv-undefined {
      color: #e08331;
      padding-left: 5px;
    }
    &.jv-string {
      color: #42b983;
      word-break: break-word;
      white-space: normal;
      padding-left: 5px;
      a {
        color: #42b983;
      }
    }
  }
  .jv-code {
    .jv-toggle {
      &:before {
        padding: 0px 2px;
        border-radius: 2px;
      }
      &:hover {
        &:before {
          background: #eee;
        }
      }
    }
  }
}
</style>