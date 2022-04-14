<script setup lang="ts"></script>

<template>
  <div class="welcome">
    <div class="intro">
      <div class="hello">Hello</div>
      <div class="name">我是张跑跑，一个小小的程序猿</div>
      <div class="hobby">喜欢去探究那些奇妙的东西</div>
    </div>
    <div class="title">
      <div class="first">解密 vite</div>
      <div class="second">自己手写一个 vite</div>
    </div>
  </div>
</template>

<style scope lang="scss">
.welcome {
  background-image: url("../../assets/welcome.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  height: 100vh;
  overflow: hidden;
  font-weight: bold;

  .intro {
    letter-spacing: 6px;
    margin-left: 100px;
  }

  .hello {
    font-size: 80px;
    margin-top: 100px;
  }

  .name {
    font-size: 40px;
    margin-top: 60px;
  }

  .hobby {
    font-size: 40px;
    margin-top: 60px;
  }

  .title {
    font-size: 40px;
    color: black;
    margin-top: 100px;
    margin-right: 200px;
    text-align: right;
    letter-spacing: 4px;

    .first {
      font-size: 60px;
    }

    .second {
      margin-top: 20px;
    }
  }
}
</style>
