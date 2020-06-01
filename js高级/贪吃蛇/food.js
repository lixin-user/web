(function(){
  var flag;
  function Food(obj){
    obj = obj||{};
    this.width = obj.width||20;
    this.height = obj.height||20;
    this.bgc = obj.bgc||'green';
    this.x = obj.x||0;
    this.y = obj.y||0;
  }
  Food.prototype.render = function(){
    if(flag){
      map.removeChild(flag);
    }
    var div = document.createElement('div');
    flag = div;
    div.style.position = 'absolute';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.bgc;
    var maxX = map.offsetWidth/this.width-1;
    var maxY = map.offsetHeight/this.height-1;
    this.x = Tool.getRandom(0,maxX);
    this.y = Tool.getRandom(0,maxY);
    div.style.left = this.x*this.width + 'px';
    div.style.top = this.y*this.height + 'px';
    map.appendChild(div);
  }
  window.Food = Food;
})();