<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__left">
        <img src="~/assets/img/logo-2.png" alt="ロゴ" />
        <p class="footer__copy">Interior design<span>&</span>Construction</p>
      </div>
      <ul class="footer__list">
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
      <div class="footer__right">
        <div class="footer__block">
          <p>
            建築・建築デザイン・原状回復・内装解体・建物解体・アスベスト除去工事はSENTIAにお任せください！
          </p>
          <p>株式会社SENTIA</p>
          <p>〒454-0982</p>
          <p>愛知県名古屋市高見1-20-2</p>
          <p>TEL : 052-1212-2029</p>
        </div>
        <ul class="footer__sns">
          <!-- 要確認箇所-->
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      Copyright(c) 店舗設計・デザイン・施工CYPHER. AllRights Reserved
    </div>
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
<style lang='scss' scoped>
.footer {
  margin-top: 200px; // レイアウト確認用
  background-color: #756d6d;
  &__top {
    margin: 0 auto;
    padding: 20px;
    width: min(100%, 1200px);
    color: #fff;
    display: flex;
    gap: 60px;
  }
  &__copy {
    text-align: center;
    span {
      display: block;
    }
  }
  &__block {
    border: double;
  }
  &__list {
    display: flex;
    gap: 60px;
    & li {
      margin-bottom: 1em;
    }
  }
  &__bottom {
    padding: 20px;
    background-color: #fff;
    text-align: center;
  }
}
</style>
