<template>	
	<div style="height: auto;">
		<div class="home">
			<div class="home-title">呼唤朋友来组团<br>每天瓜分百万奖金</div>
            <span class="user">用户名:{{dataList.username}}</span>
            <span class="user">电话号码:{{dataList.phone}}</span>
		</div>
		<!-- 活动进行中activity -->
	</div>
</template>

<script type="text/javascript">
	export default {
        data() {
            return {
                dataList:"",
                flag:0 //进入首页的时候的状态
            }

        },
		created() {
            console.log("用户ID:" + this.common.getUserId())
            console.log("环境的判断:" + this.common.isEquipment().isIOS)
            console.log("版本号:" + this.common.getVersion())
            var self = this
                var PupilId = 1
                var msgType = 10//类型10为获取点赞页面首页的数据
                var jsonshang = {
                    userId: this.common.getUserId(),
                    PupilId: PupilId,
                    msgType: msgType
                }
                var jsonStr1 = JSON.stringify(jsonshang)
                window.android.getJsData(3,jsonStr1)
                window.getMessageToApprentice = function(data) {
                    console.log(data)
                    setTimeout(function() {
                        self.dataList = data
                    },0)
                }
            
		}
	}
</script>

<style type="text/css">
	.home {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f58723;
    }
    .home-title {
    	text-align: center;
    	color: #fff;
    	font-size: 20px;
    	line-height: 30px;
    	margin-top:150px;
    }
    .user {
        text-align: center;
       color: #fff;
       font-size: 20px;
    }
</style>