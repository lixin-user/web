// 给jQuery的原型添加bgc方法
// jQuery的原型：
//  jQuery.prototype
//  jQuery.fn
//  $.prototype
//  $.fn  (推荐使用)

$.fn.bgc = function(color){
    // this:  谁调用的，this就指向谁
    //          是一个jq对象
    console.log(this);

    this.css("backgroundColor", color);

    // 返回当前的jq对象，目的，为了链式编程
    return this;
}
