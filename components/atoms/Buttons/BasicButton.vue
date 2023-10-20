<template>
  <button class="btn">{{ title }}</button>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "詳しくみる" },
    borderRadius: { type: String, default: "0px" },
    padding: { type: String, default: "0.5em 3em" },
    fontSize: { type: String, default: "1.2em" },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  display: block;
  margin: 0 auto;
  padding: v-bind(padding);
  background-color: #40407f;
  color: #fff;
  font-size: v-bind(fontSize);
  border-radius: v-bind(borderRadius);
}
</style>
