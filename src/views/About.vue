<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ $root.stateGlobal }}</p>
    <button v-on:click="$root.inc()">inc</button>
  </div>
</template>
