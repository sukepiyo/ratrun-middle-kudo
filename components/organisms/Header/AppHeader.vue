<template>
  <header>
    <div class="pc-header">
      <nav class="nav">
        <ul class="nav-list">
          <!-- * :key 
                n番目を特定。v-forを使う場合は必須　-->
          <li v-for="(page, key) in pageList" :key="key">
            <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="sp-header">
      <button @click="isClickMenu" class="menu-button">
        <img src="@/assets/svg/hamburger.svg" alt="" class="stroke" />
      </button>
      <!-- * v-show
              true: 表示、false: 非表示 cssのdisplayプロパティを切り替えている(block<=>none)
            そのため表示速度が早い(ラグが少ない) ユーザーの使用頻度が高いものに使用する
           * v-if, v-else-if, v-else
              DOMを削除、追加している(ラグが出る場合がある) ユーザーの使用頻度が高いものに使用しない -->
      <div v-show="isOpenedMenu" class="display-menu">
        <ul class="nav-list-sp">
          <li v-for="(page, key) in pageList" :key="key">
            <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
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
    const isOpenedMenu = ref(false);
    const isClickMenu = () => {
      isOpenedMenu.value = !isOpenedMenu.value;
    };
    return { pageList, isOpenedMenu, isClickMenu };
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
      height: 100vh;
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
.pc-header {
  display: block;
  @include mobile {
    display: none;
  }
}

.sp-header {
  width: 100%;
  display: none;
  @include mobile {
    display: block;
  }
}
.menu-button {
  width: 32px;
  height: 32px;
  position: fixed;
  right: 0;
  margin: 10px;
  z-index: 10;
}

.display-menu {
  z-index: 9;
  display: initial;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
  right: 0;
}
.stroke {
  width: 32px;
  height: 32px;
}
</style>
