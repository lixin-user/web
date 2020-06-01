(function(){
  function Snack(obj){
    obj = obj||{};
    this.width = obj.width||20;
    this.height = obj.height||20;
    this.direction = obj.direction||'right';
    this.body =[
      {x:3,y:2,col:'red'},
      {x:2,y:2,col:'blue'},
      {x:1,y:2,col:'blue'}
    ]
  }
  var arr = [];
  Snack.prototype.render = function(){  
      for(var i=0,length=arr.length;i<length;i++){
        map.removeChild(arr[0]);
        arr.shift();
      }
      this.body.forEach(function(item){
      var div = document.createElement('div');
      arr.push(div);
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.left = item.x * this.width + 'px';
      div.style.top = item.y * this.height + 'px';
      div.style.backgroundColor = item.col;
      div.style.position = 'absolute';
      map.appendChild(div);
    }.bind(this))
  }
  Snack.prototype.move = function(){
    for(var i=this.body.length-1;i>0;i--){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
    switch (this.direction){
      case 'left':
        this.body[0].x -= 1;
        break;
      case 'right':
        this.body[0].x += 1;
        break;
      case 'top':
        this.body[0].y -= 1;
        break;
      case 'bottom':
        this.body[0].y += 1;
        break;
    }
  }
  window.Snack = Snack;
})();