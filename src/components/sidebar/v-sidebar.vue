<template>
  <div class="s-container" :class="{'show': showSidebar}">
    <div class="logo">
      <img class="logo__img " src="../../assets/images/logo.png" alt="Avatarka">
      <hr>
    </div>

  <div class="control">
    <i class="fas fa-angle-double-right" @click="showNav"></i>

  </div>
    <hr>
    <div class="justify-content-center">
      <div class="new-item d-flex align-items-center ">
        <div class="new-item__icons pb-3"><i class="fas fa-fw fa-tachometer-alt"></i></div>
        <div name="fade"  class="new-item__link" v-show="showLink" key="1">Панель управления</div>
      </div>
      <div class="new-item item-align-center">
        <div class="new-item__icons"><i class="fas fa-download"></i></div>
        <div name="fade" class="new-item__link" v-show="showLink" key="2">Ввод линков</div>
      </div>
      <div class="new-item item-align-center">
        <div class="new-item__icons"><i class="far fa-list-alt"></i></div>
        <div name="fade" class="new-item__link" v-show="showLink" key="3">База линков</div>
      </div>
      <div class="new-item item-align-center">
        <div class="new-item__icons"><i class="fas fa-sort"></i></div>
        <div  name="fade" class="new-item__link" v-show="showLink" key="4">Рейтинг</div>
      </div>
      <div class="new-item item-align-center">
        <div class="new-item__icons"><i class="far fa-trash-alt"></i></div>
        <div name="fade" class="new-item__link" v-show="showLink" key="5">Удаление</div>
      </div>
      <div class="new-item item-align-center">
        <div class="new-item__icons"><i class="far fa-chart-bar"></i></div>
        <div name="fade" class="new-item__link" v-show="showLink" key="6">Графики</div>
      </div>
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
  .new-item{
    height: 50px;
    display: flex;
    &__icons{
      padding-left: 8px;
      width: 30px;
    }
    &__link {
      width: 160px;
      text-align: center;
      color: #9e9e9e;
      font-size: 16px;
      padding-left: 10px;
      margin-bottom: 18px;
      cursor: pointer;
    }
    i {
      color: #9e9e9e;
      font-size: 25px;
      cursor: pointer;
      transition: all .5s ease-in-out;
    }
  }
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
      margin: 10px 0;
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
    hr{
      border-bottom: 1px solid #fff;
      width: 100%;
    }
    &.show {
      .new-item{
        i {
          color: #fff ;
        }
        &__link:hover {

          color: #fff;

        }
      }
      width: 200px;

      .control > i {
        color: #fff;
        transform: rotateZ(-180deg);
      }
     .logo img {
        transform: rotate(290deg);
        transition: all .5s ease-in-out;
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
    @include nav-childs(1, 2, 3, 4, 5, 6);
  }

  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }

  .logo {
    margin: 10px 0 0 0;

    hr {
      border-bottom: 1px solid #e0e0e0;
    }

    img {
      height: 30px;
      width: 30px;
      transform: rotate(15deg);
      transition: all .5s ease-in-out;
    }
  }
</style>
