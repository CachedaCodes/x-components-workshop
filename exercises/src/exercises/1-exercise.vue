<template>
  <div class="x-p-64">
    <h1 class="x-title1 x-mb-20">Styling in the Archetype</h1>
    <div class="x-flex x-gap-12">
      <ol class="x-flex-1">
        <li>1. Color of the primary button should be #111</li>
        <li>2. Color of the auxiliary button should be #222</li>
        <li>3. Border of the secondary button should be #222</li>
      </ol>
      <div class="x-flex-1 x-flex x-flex-col x-items-center x-gap-12">
        <h3 class="x-title1-sm">Default button</h3>
        <button class="x-button">
          Click
        </button>
        <h3 class="x-title1-sm">Auxiliary button</h3>
        <button class="x-button x-button-auxiliary">
          Click
        </button>
        <h3 class="x-title1-sm">Auxiliary outlined button</h3>
        <button class="x-button x-button-auxiliary x-button-outlined">
          Click
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>