<template>
  <div class="s-container" :class="{'show': showSidebar}">
    <div class="logo">
      <img class="logo__img " src="../../assets/images/logo.png" alt="Avatarka">
      <hr>
    </div>

  <div class="control">
    <i class="fas fa-angle-double-right" @click="showNav"></i>
  </div>
  <div class="navigation-icons">
    <i class="fas fa-fw fa-tachometer-alt"></i>
    <i class="fas fa-download"></i>
    <i class="far fa-list-alt"></i>
    <i class="fas fa-sort"></i>
    <i class="far fa-trash-alt"></i>
    <i class="far fa-chart-bar"></i>
  </div>
  <div class="navigation-links">
    <transition-group name="fade">
      <div v-show="showLink" key="1">Панель</div>
      <div v-show="showLink" key="2">Ввод</div>
      <div v-show="showLink" key="3">База</div>
      <div v-show="showLink" key="4">Рейтинг</div>
      <div v-show="showLink" key="5">Удаление</div>
      <div v-show="showLink" key="6">Статистика</div>
    </transition-group>
  </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showSidebar: false,
      showLink: false
    }
  },
  methods: {
    showNav () {
      if (this.showSidebar) {
        this.showLink = false
        setTimeout(() => {
          this.showSidebar = false
        }, 500)
      } else {
        this.showSidebar = true
        setTimeout(() => {
          this.showLink = true
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .s-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    padding: 10px;
    min-height: calc(100vh - 20px);
    background-color: rgba(40, 55, 129, 0.9);
    border: solid rgba(255, 255, 255, 1);
    border-width: 0 1px 0 0;
    z-index: 999;
    transition: all .5s ease-in-out;

    .control {
      margin: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin-bottom: 10px;

      i {
        color: #9e9e9e;
        font-size: 30px;
        cursor: pointer;
        transition: all .5s ease-in-out;
      }
    }

    &.show {
      width: 200px;

      .control > i {
        color: #fff;
        transform: rotateZ(-180deg);
      }

      .navigation-icons i{
        color: #fff ;
      }

      .logo img {
        transform: rotate(270deg);
        transition: all .5s ease-in-out;
      }
    }

    .navigation-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      float: left;

      i {
        color: #9e9e9e;
        font-size: 1.8rem;
        padding: 10px 0;
        cursor: pointer;
        transition: all .5s ease-in-out;

        &:hover {
          color: #fff;
        }
      }
    }

    .navigation-links {
      padding-top: 14px;
      float: left;

      div {
        color: #9e9e9e;
        font-size: 1.3rem;
        padding-left: 10px;
        margin-bottom: 18px;
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @mixin nav-childs($values...) {
    @each $var in $values {
      &:nth-child(#{$var}) {
        transition: transform linear calc(.1s * #{$var}), display .5s;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    @include nav-childs(1, 2, 3, 4, 5);
  }

  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }

  .logo {
    margin: 30px 0 20px 0;

    hr {

      padding-top: 20px;
      border-bottom: 1px solid #e0e0e0;
    }

    img {
      height: 40px;
      width: 40px;
      transform: rotate(15deg);
      transition: all .5s ease-in-out;
    }
  }
</style>
