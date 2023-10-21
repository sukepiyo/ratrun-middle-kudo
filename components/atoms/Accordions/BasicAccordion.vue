<template>
  <div class="accordionWrapper">
    <button @click="isClickTitle" class="accordionTitle">{{ title }}</button>
    <transition>
      <div v-show="isAccordion" class="accordionBody">
        <p>{{ description }}</p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "タイトル1" },
    description: { type: String, default: "アコーディオン展開イメージ昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。" },
  },
  setup() {
    const isAccordion = ref(false);
    const isClickTitle = () => {
      isAccordion.value = !isAccordion.value;
    };
    return { isAccordion, isClickTitle };
  },
};
</script>
<style lang="scss" scoped>
.accordionWrapper {
  &:has(+ *) {
    margin-bottom: 30px;
  }
}
.accordionTitle {
  width: 100%;
  padding: 0.5em;
  font-size: 1.6em;
  color: #fff;
  background-color: #666666;
  // transition: all 0.3s;
  position: relative;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 1em;
    // aspect-ratio: 1 /1;
    height: 3px;
    background-color: #fff;

    position: absolute;
    // top: 0.5em;
    top: 50%;
    right: 0.5em;
  }

  &::after {
    transform: rotate(90deg);
  }
}
.accordionBody {
  padding: 1em;
  background-color: #d8d8d8;
  // transition: all 0.3s;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
