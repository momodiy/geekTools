/*
* Author: stevenlee
* Date: 2018/7/19
* Description: ... 
*/

//前端发送请求至后端，需发送一个多层嵌套的对象时，得到415报错。
$.ajax({
  url: pUrl + '/screenConfig/updateScreenConfigByKey',
  contentType: 'application/json; charset=UTF-8',
  type: 'post',
  data: JSON.Stringify(screenConfig),
  success:
    res => {
      console.log(res);
    }
})