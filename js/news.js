
  
    
$(function(){
function padZero(n){
  if(n < 10){
    return '0' + n;
  }
  else{
    return n;
  }
}

template.defaults.imports.dateFormat = date =>{
      var _date = new Date(date)
  var _Year = _date.getFullYear();
  var _Month = padZero(_date.getMonth());
  var _Date = padZero(_date.getDate());
  var _Day = padZero(_date.getDay());
  var _Hour = padZero(_date.getHours());
  var _Minute = padZero(_date.getMinutes());
  var _Seconds = padZero(_date.getSeconds());
 return _Year+'年' + _Month + '月'+ _Date + '日' +' ' +_Hour + '点' + _Minute +'分'+ _Seconds + '秒' ;
}



    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', function (res) {
          if (res.status !== 200) {
            return alert('获取新闻列表数据失败！')
          }
          for (var i = 0; i < res.data.length; i++) {
            res.data[i].tags = res.data[i].tags.split(',')
          }
          console.log(res)
          var htmlStr = template('tmp-news', res)
          $('#news-list').html(htmlStr)
        })
      }    
      getNewsList()
})