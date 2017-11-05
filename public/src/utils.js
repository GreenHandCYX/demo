//公用功能模块
define(['jquery'],function($){
    //检测是否已登录
    $.ajax({
        url:'/api/employee/checkRootLogin',
        type:'get',
        success:function(info){
            if(!info.success){
              return  location.href = '/login.html'
            }
            
        }
    })
})