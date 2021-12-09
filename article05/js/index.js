
// function checkForm1(){
//   $(".body").css("overflow", 'hidden')
//   $(".success1,.success-content1").css('display', 'block')
// }

//调整重加弹框居中结束
function clikcNone1() {
  $(".success1,.success-content1").css('display', 'none')
  $(".body").css("overflow", 'auto')
}




//显示函数
function clikcShow() {
  $(".body").css("overflow", 'hidden')
  $('#checkFormPopHtml').css("display", "block"); //显示总弹框父元素
  $('#pop-contain').css("display", "block"); //然后显示弹框
}
//调整重加弹框居中结束
function clikcNone() {
  $('#checkFormPopHtml,#pop-contain').css('display', 'none');
  $(".body").css("overflow", 'auto')
}

function checkForm() {
  clikcShow();
}

// 投保人姓名校验
$("#user").on("blur", function () {
  console.log("姓名校验")
  checkName($(this));
});

//投保人手机号码校验
$("#phone").on("blur", function () {
  checkTel($(this));
});



// 提交表单
$("#sendClick").click(function () {
  if (checkAll()) {
 
    var sendClickobj = {
      "name": $('#user').val(),
      "sex": "",
      "mobile": $('#phone').val(),
      "checkno": $("#code").val(),
      "age": "",
      "channelCode": "0002",
      "pageType": "",
      "planId": ""
    }

    $('#checkFormPopHtml,#pop-contain').css('display', 'none');
    $(".success,.success-content").css('display', 'block')



    
    // 发送用户信息到后台
    $.ajax({
      url: "/life/activity/getChannelData.do",
      type: "post",
      async: true,
      data: sendClickobj,
      beforeSend: function () {
        // $(".loading").show();
      },
      success: function (data) {
        var data = JSON.parse(data)
        console.log(data)
        if (data.code == 00 || data.code == 02) {
          $('#checkFormPopHtml,#pop-contain').css('display', 'none');
          $(".success,.success-content").css('display', 'block')
        } else {

          $(".phoneError").css("visibility", "visible")
          $(".phoneError").text(data.message)
        }

      },
      error: function (data) {
        console.log(data)
      },
      complete: function () {

      }
    });

  } else {
    return
  }

})





// 关闭成功按钮
$("#success-close").click(function () {
  $('.success,.success-content').css('display', 'none');
  $(".body").css("overflow", 'auto')
})


