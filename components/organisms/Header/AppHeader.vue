<template>
  <header>
    <nav class="nav">
      <ul class="nav-list">
        <li v-for="(page, key) in pageList" :key="key">
          <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  setup() {
    const pageList = reactive([
      { to: "/", title: "ホーム" },
      { to: "#", title: "経営理念" },
      { to: "#", title: "事業理念" },
      { to: "#", title: "営業目的" },
      { to: "#", title: "お問い合わせ" },
    ]);
    return { pageList };
  },
};
</script>
<style lang='scss' scoped>
header {
  position: absolute;
  z-index: 10;
  width: 100%;
}
.nav {
  &-list {
    display: flex;
    gap: 20px;
    padding: 20px;
    a {
      color: #fff;
      &:hover {
        opacity: 0.7;
      }
    }
    &-sp {
      display: block;
      padding: 50px;
      li {
        padding-bottom: 20px;
      }
      a {
        color: #2d2d2d;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
