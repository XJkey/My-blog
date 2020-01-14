<template>
    <div class='message-box'>
        <h3 class="comments-title"><i class="fa fa-pencil"></i>欢迎留言</h3>

        <div class="">
            <textarea class='outline-none' placeholder="赶快发表你的见解吧！" name="" id="" cols="30" rows="10"></textarea>
        </div>

        <button class="submitMessage">发表评论</button>
    </div>
</template>

<script>

</script>

<style lang="scss">
 .message-box{
    textarea{
        background-color: rgba(0,0,0,0);
        width: 100%;
        border:2px solid;
        border-radius:4px;
        border-color: rgb(193, 193, 193);
        padding:10px;
        font-size:14px;
        transition: all 0.5s;
        &:focus{
            background-color: #fff;
            border: 2px solid #f89693;
            transition: all 0.5s;
        } 
    }
    .submitMessage{
        margin-top: 20px;
        width: 100%;
        color: rgb(217, 83, 79);
        border: 2px solid rgb(217, 83, 79);
        &:hover{
            color: #fff;
        }
    }
 }
</style>