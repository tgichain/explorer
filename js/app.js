const server_url = "http://49.4.10.4:4100/"

vum1 = new Vue({
	el: '#height',
	data: {
		height: "",
	},
	beforeCreate: function() {
		//height=setInterval(function(){
		$.ajax({
			type: 'Get',
			url: server_url+"api/blocks/getHeight",
			success: function(data) {
				console.log(data)
				vum1.height = data.height;
			}
		})
		//},5000);
	}
});
height=setInterval(function(){
	$.ajax({
		type: 'Get',
		url: server_url+"api/blocks/getHeight",
		success: function(data) {
			console.log(data)
			vum1.height = data.height;
		}
	})

},5000);
vum = new Vue({
	el: '#app',
	data: {
		supply: "",
	},
	beforeCreate: function() {
		//supply=setInterval(function(){
		$.ajax({
			type: 'Get',
			url: server_url+"api/blocks/getSupply",
			success: function(data) {
				console.log(data)
				vum.supply = data.supply;
			}
		})
		//},5000);
	}
});
supply=setInterval(function(){
	$.ajax({
		type: 'Get',
		url: server_url+"api/blocks/getSupply",
		success: function(data) {
			console.log(data)
			vum.supply = data.supply;
		}
	})

},5000);

//时间戳换
function getLocalTime(nS) {     
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}
//公钥换名字
function publickeyusername(publicKey) {
	
	$.ajax({
		url: server_url+"api/delegates/get?publicKey="+publicKey,
		success:function(res){
			
			if(res.success){
				//console.log(res.delegate.username)
				// $(obj).html(res.delegate.username)
				return res.delegate.username
			}else{
				return publicKey
				// $(obj).html(publicKey)
			}
			
		}
	})
}
$('#sousuoa').click(function(){
	var name = $('#sltnamea').val()
	 sltname(name)
	 console.log(11111)  
})
$('#sousuob').click(function(){
	var name = $('#sltnameb').val()
	 sltname(name)
	 console.log(2222)
})



//获取url参数
function getParam(paramName) { 
    paramValue = "", isFound = !1; 
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) { 
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), paramValue 
} 

function sltname(sltname){
	// var sltname = $('#sltname').val()
	//var error = false
	$.ajax({
		url: server_url+"api/transactions/get?id="+sltname,
		success:function(res){
			
			if(res.success){
				window.location.href='/transaction.html?id='+sltname
			}else{
				//$('#error').html('没有找到相关内容')
			}
			
		}

	})
	$.ajax({
		url: server_url+"api/accounts?address="+sltname,
		success:function(res){
			
			if(res.success){
				window.location.href='/wallets.html?id='+sltname
			}else{
				//$('#error').html('没有找到相关内容')
			}
			
		}

	})
	$.ajax({
		url: server_url+"api/blocks/get?id="+sltname,
		success:function(res){
			
			if(res.success){
				window.location.href='/block.html?id='+sltname
			}else{
				// $('#error').html('没有找到相关内容')
			}
			
		}

	})
}
