<template>
  <q-page padding>
    <!-- content -->
    <h1> Store Test </h1>


<q-tabs align="justify" v-model="selectedTab">
      <q-tab slot="title" name="tab-1" icon="store" />
      <q-tab slot="title" name="tab-2" icon="list" />
      <q-tab-pane name="tab-1">
        <div  class="q-pa-md shadow-1 q-ma-sm"
        v-for="trank in getTranke" :key="trank.id">
        {{trank.name}} <br>
        {{trank.beschreibung}}
        <br>
        <q-btn @click="bestelldas(trank)"
        class="fit q-mt-md"
        no-caps color="primary"
        :label="`${trank.name} bestellen`"/>
          </div>
    </q-tab-pane>
      <q-tab-pane name="tab-2">
          <div  class="q-pa-md shadow-1 q-ma-sm"
            v-for="bestellung in getBestellungen" :key="bestellung.id">
            {{bestellung.name}} <br>
            {{bestellung.beschreibung}}
            <br>
            <q-btn @click="remove(bestellung)"
            class="fit q-mt-md"
            no-caps color="primary"
            :label="`${bestellung.name} geliefert`"/>
            </div>
        </q-tab-pane>
</q-tabs>


  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      selectedTab: 'tab-1',
    };
  },
  methods: {
    bestelldas(item) {
      this.$store.dispatch('vuexStore/bestellThis', item);
    },
    remove(item) {
      this.$store.dispatch('vuexStore/geliefert', item);
    },
  },
  computed: {
    getTranke() {
      return this.$store.state.vuexStore.tranke;
    },
    getBestellungen() {
      return this.$store.state.vuexStore.bestellungen;
    },
  },
};
</script>

<style>
</style>
