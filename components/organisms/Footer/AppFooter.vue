<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="logo">
        <img class="logo__img" src="~/assets/img/logo-2.png" alt="ロゴ" />
        <p class="logo__copy">Interior design<span>&</span>Construction</p>
      </div>
      <ul class="list">
        <span>
          <li v-for="(page, key) in pageList.slice(0, 5)" :key="key">
            <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
          </li>
        </span>
        <span>
          <li v-for="(page, key) in pageList.slice(5, 9)" :key="key">
            <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
          </li>
        </span>
      </ul>
      <div class="address">
        <div class="address__text">
          <p>建築・建築デザイン・原状回復・内装解体・建物解体・アスベスト除去工事はSENTIAにお任せください！</p>
          <p>株式会社SENTIA</p>
          <p>〒454-0982</p>
          <p>愛知県名古屋市高見1-20-2</p>
          <p>TEL : 052-1212-2029</p>
        </div>
        <ul class="address__sns">
          <!-- 要確認箇所-->
        </ul>
      </div>
    </div>
    <div class="footer__bottom">Copyright(c) 店舗設計・デザイン・施工CYPHER. AllRights Reserved</div>
  </footer>
</template>

<script>
export default {
  setup() {
    const pageList = reactive([
      { to: "/", title: "ホーム" },
      { to: "#", title: "私たちについて" },
      { to: "#", title: "選ばれる理由" },
      { to: "#", title: "ワークフロー" },
      { to: "#", title: "FAQ" },
      { to: "#", title: "会社概要" },
      { to: "#", title: "お問い合わせ・お見積もり" },
      { to: "#", title: "個人情報保護法について" },
    ]);
    return { pageList };
  },
};
</script>
<style lang="scss" scoped>
.footer {
  margin-top: 200px; // レイアウト確認用
  background-color: #756d6d;
  &__top {
    margin: 0 auto;
    padding: 80px 40px; //後で調整
    width: min(100%, 1400px);
    color: #fff;
    display: flex;
    gap: 40px;
    & > * {
      flex: 1;
    }
    @include mobile {
      flex-direction: column;
    }
  }
  &__bottom {
    padding: 20px;
    background-color: #fff;
    text-align: center;
    @include mobile {
      text-align: left;
    }
  }
}
.logo {
  text-align: center;
  &__copy {
    margin-top: 80px;
    font-size: 1.6em;
    span {
      display: block;
    }
  }
}
.list {
  display: flex;
  gap: 60px;
  & li {
    margin-bottom: 1em;
  }
  @include mobile {
    flex-direction: column;
    gap: 0;
  }
}
.address {
  &__text {
    outline: 2px solid #fff;
    border: 2px solid #fff;
    outline-offset: 6px;
    padding: 1em;
    & > *:first-of-type {
      margin-bottom: 1em;
    }
    & > *:nth-child(2) {
      font-size: 1.4em;
    }
    @include mobile {
      outline: none;
      padding: 2em 1em;
      & > *:nth-child(2) {
        margin: 1em 0 2em;
      }
      & > *:nth-child(4) {
        margin-bottom: 1em;
      }
    }
  }
}
</style>
