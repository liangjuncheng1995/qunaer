

















export default {
	//用户Id的获取
	getUserId: function() {
		return window.android ? window.android.getAndroidData(1):""
	},
	isEquipment: function() {//浏览器环境判断
		var UA = navigator.userAgent,
		    isAndroid = /android|adr|linux/gi.test(UA),  
		    isIOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid,  
		    isBlackBerry = /BlackBerry/i.test(UA),  
		    isWindowPhone = /IEMobile/i.test(UA),  
		    isMobile = isAndroid || isIOS || isBlackBerry || isWindowPhone;  
		return{  
		    isAndroid: isAndroid,  
		    isIOS: isIOS,  
		    isMobile: isMobile,  
		    isWeixin: /MicroMessenger/gi.test(UA),  
		    isQQ: /QQ/gi.test(UA),  
		    isPC: !isMobile,  
		    isWeibo: /WeiBo/gi.test(UA)  
		}  
	},
	//版本号的获取
	getVersion: function() {
		var OutsideApp
		try{//2.3.0以上
	        var version = window.android.getAndroidData(3)//版本号的获取
	        var versionNumber = version.replace(/\./g,"");
	        console.log(versionNumber)
	        return versionNumber
	    }catch(err) {
	    	console.log("方法报错了在外部浏览器")
	    	return OutsideApp = true
 	    }
	}
}


// export function prefixStyle(style) {
//   if(vendor === false) {
//     return false
//   }
//   if(vendor === 'standard'){
//     return style
//   }
//   return vendor + style.charAt(0).toUpperCase() + style.substr(1)
// }
