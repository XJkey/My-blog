<template>
  <div class="search">
    <form action="" class="flex">
      <input type="text" class="outline-none flex-grow" :placeholder="placeholder">
      <button type="submit" class="flex-grow-0">,7</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        placeholder: '',
        //内容的第几个字节
        iPlaceholder: 0,
        pContent: ['搜不到？', '请选用正确的关键词', '网站不能右键复制粘贴？', '请学会键盘快捷键Ctrl+C／V'],
        //第几个内容
        iContent: 0
      }
    },
    mounted() {
      this.timer = window.setInterval(this.inputPlaceholder, 100)
    },
    methods: {
      inputPlaceholder : function() {
        let i = this.iContent
        let j = this.pContent.length;
        let k = this.iPlaceholder;
        if (j) {
          this.placeholder = this.pContent[i].slice(0, [k]);
          this.iPlaceholder++
          if (k > this.pContent[i].length - 1) {
            this.iPlaceholder = 0;
            window.clearInterval(this.timer)
            setTimeout(()=>{
                this.timer = window.setInterval(this.inputPlaceholder, 100)
            },500)
            this.iContent++;
            if (this.iContent > j - 1) {
              this.iContent = 0
            }
          }
        }
      }
    },
  }

</script>


<style lang="scss">
  .search {
    width: 100%;
    height: 50px;
    padding: 8px;
    background-color: rgba(10, 10, 0, 0.7);
    border-radius: 4px;

    form {
      width: 100%;

      input {
        height: 34px;
        line-height: 34px;
        background: rgba(0, 0, 0, 0);
        border: 1px solid #f89693;
        border-radius: 4px;
        color: #999;
        font-size: 14px;
        padding: 4px 0 4px 10px;

        &:focus {
          background: #fff;
          border: none;
          box-shadow: black 0 0 50pxs;
        }
      }

      button {
        height: 34px;
        margin-left: 10px;
        color: #fff;
        background-color: #d9534f;
        border-radius: 4px;
        padding: 5px 10px;
        transition: all .25s ease-in-out;

        &:hover {
          background-color: #ca2925;
          transition: all .25s ease-in-out;
        }
      }
    }

  }

</style>
