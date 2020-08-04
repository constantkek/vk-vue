<template>
  <!-- <script type="text/javascript" src="https://vk.com/js/api/openapi.js?168"></script> -->

  <!-- VK Widget -->
  <div id="vk_groups"></div>
</template>

<script>
export default {
  mounted() {
    VK.Widgets.Group("vk_groups", { mode: 4, height: "400" }, -122685267)
  }
}
</script>

<style>

</style>