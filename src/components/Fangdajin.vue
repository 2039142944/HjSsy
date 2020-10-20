<template>
  <div id="preview">
    <div class="card bg-transparent position-absolute">
      <img class="card-img-top" :src="`/${pics[i].md}`" alt="Card image cap" />
      <div
        id="mask"
        class="position-absolute"
        :class="{ 'd-none': hide }"
        :style="maskStyle"
        style="
          z-index: 100;
          background-color: lightYellow;
          opacity: 0.5;
          width: 176px;
          height: 176px;
        "
      ></div>
      <div
        id="super-mask"
        class="position-absolute"
        @mouseover="toggle"
        @mouseout="toggle"
        @mousemove="move"
        style="width: 392px; height: 392px; z-index: 110"
      ></div>
      <div
        id="div-lg"
        class="position-absolute"
        :class="{ 'd-none': hide }"
        style="left: 400px; width: 402px; height: 402px; z-index: 100"
        :style="{
          'background-image': `url(/${pics[i].lg})`,
          'background-position': `-${parseInt(maskStyle.left) * 2}px -${
            parseInt(maskStyle.top) * 2
          }px`,
        }"
      ></div>
      <div class="card-body p-0 text-center">
        <img
          src="/images/fangdajin/left.png"
          class="btn float-left btn-light border-0 p-1 pt-4 pb-4"
          :class="{ disabled: times == 0 }"
          @click="moveRight"
        />
        <div
          style="width: 248px; overflow: hidden"
          class="d-inline-block pt-2 mx-0 m-auto"
        >
          <!-- <ul class="list-unstyled mb-0"> -->
          <ul
            class="list-unstyled mb-0"
            :style="{
              width: pics.length * 67 + 'px',
              'margin-left': -57 * times + 'px',
            }"
            @mouseover="changei"
          >
            <li v-for="(p, i) of pics" :key="i" class="float-left p-1">
              <img :src="`/${p.sm}`" :data-i="i" />
            </li>
          </ul>
        </div>
        <img
          src="/images/fangdajin/right.png"
          class="btn float-right btn-light border-0 p-1 pt-4 pb-4"
          @click="moveLeft"
          :class="{ disabled: times == pics.length - 4 }"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
    .card-body img:nth-child(1){
        max-width:50px;
    }
    .card-body img:nth-child(3){
        max-width:50px;
    }
</style>
<script>
export default {
  data() {
    return {
      //因为页面上需要加载一组图片，所以data中需要有一个保存所有图片的数组
      pics: [
          {sm: "images/fangdajin/sm/fd-sm-1.jpg",md: "images/fangdajin/md/md-1.jpg", lg: "images/fangdajin/lg/lg-1.jpg" },
          {sm: "images/fangdajin/sm/fd-sm-2.jpg",md: "images/fangdajin/md/md-2.jpg", lg: "images/fangdajin/lg/lg-2.jpg" },
          {sm: "images/fangdajin/sm/fd-sm-3.jpg",md: "images/fangdajin/md/md-3.jpg", lg: "images/fangdajin/lg/lg-3.jpg" },
          {sm: "images/fangdajin/sm/fd-sm-4.jpg",md: "images/fangdajin/md/md-4.jpg", lg: "images/fangdajin/lg/lg-4.jpg" },
          {sm: "images/fangdajin/sm/fd-sm-5.jpg",md: "images/fangdajin/md/md-5.jpg", lg: "images/fangdajin/lg/lg-5.jpg" },
          {sm: "images/fangdajin/sm/fd-sm-6.jpg",md: "images/fangdajin/md/md-6.jpg", lg: "images/fangdajin/lg/lg-6.jpg" },
          {sm: "images/fangdajin/sm/fd-sm-7.jpg",md: "images/fangdajin/md/md-7.jpg", lg: "images/fangdajin/lg/lg-7.jpg" },
          {sm: "images/fangdajin/sm/fd-sm-8.jpg",md: "images/fangdajin/md/md-8.jpg", lg: "images/fangdajin/lg/lg-8.jpg" }
          ],
      //因为小图片列表左右移动核心是点击的次数，所以data中需要用times变量记录点击了几次
      times: 0,
      //因为中图片和大图片具体使用哪一张图片和选中的第几张的下标有直接关系
      //比如: 鼠标进入ul下第2张小图片[1]
      // 则中图片采用pics中[1]位置的图片的md版本
      // 大图片采用pics中[1]位置的图片的lg版本
      //比如: 鼠标进入ul下第2张小图片[2]
      // 则中图片采用pics中[2]位置的图片的md版本
      // 大图片采用pics中[2]位置的图片的lg版本
      //所以只需要一个变量i，就可控制中图片和大图片
      i: 0,
      //因为需要同时动态控制小遮罩层和大图片的显示隐藏，所以需要一个变量
      hide: true,
      //因为要修改mask的位置，所以为mask绑定style对象
      maskStyle: {
        left: "0",
        top: "0",
      },
    };
  },
  methods: {
    move(e) {
      var left = e.offsetX - 88;
      var top = e.offsetY - 88;
      if (left < 0) left = 0;
      else if (left > 180) left = 180;
      if (top < 0) top = 0;
      else if (top > 190) top = 190;
      this.maskStyle = {
        left: left + "px",
        top: top + "px",
      };
    },
    toggle() {
      this.hide = !this.hide;
    },
    changei(e) {
      //e.target代替this
      //只允许img元素触发事件
      if (e.target.nodeName == "IMG") {
        this.i = e.target.dataset.i;
      }
    },
    moveLeft() {
      if (this.times < this.pics.length - 4) {
        this.times++;
      }
    },
    moveRight() {
      if (this.times != 0) {
        this.times--;
      }
    },
  },
};
</script>