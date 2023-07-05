<template>
  <div class="x" data-test="x" :dir="documentDirection">
    <router-view />
  </div>
</template>

<script lang="ts">
  import {
    QueryPreviewInfo,
    SnippetCallbacks,
    SnippetConfig,
    XOn,
    XProvide
  } from '@empathyco/x-components';
  import { Tagging } from '@empathyco/x-components/tagging';
  import { UrlHandler } from '@empathyco/x-components/url';
  import { SnippetConfigExtraParams } from '@empathyco/x-components/extra-params';
  import { Component, Inject, Provide, Vue, Watch } from 'vue-property-decorator';
  import { useDevice } from './composables/use-device.composable';
  import currencies from './i18n/currencies';
  import './tailwind/index.css';
  import MainView from "./main-view.vue";

  @Component({
    components: {
      MainView
    }
  })
  export default class App extends Vue {
    @Inject('snippetConfig')
    protected snippetConfig!: SnippetConfig;
    protected device = useDevice();

    protected get documentDirection(): string {
      return (
          document.documentElement.dir ||
          document.body.dir ||
          (this.snippetConfig.documentDirection ?? 'ltr')
      );
    }
  }
</script>
