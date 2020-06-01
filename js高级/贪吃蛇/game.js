(function(){
  function Game(){
    this.food = new Food();
    this.snack = new Snack();
  }
  Game.prototype.star = function(){
    this.food.render();
    this.snack.render();
    var timeId = setInterval(function(){
      this.snack.move();
      var maxX = map.offsetWidth / this.snack.width - 1;
      var maxY = map.offsetHeight / this.snack.height - 1;
      if(this.snack.body[0].x<0||this.snack.body[0].x>maxX||this.snack.body[0].y<0||this.snack.body[0].y>maxY){
        alert('game over');
        clearInterval(timeId);
        return;
      }
      this.snack.render();
      var snackX = this.snack.body[0].x;
      var snackY = this.snack.body[0].y;
      var foodX = this.food.x;
      var foodY = this.food.y;
      if(snackX==foodX&&snackY==foodY){
       this.food.render();
       this.snack.body[this.snack.body.length] = {
          x:0,
          y:0,
         col:'blue',
        }
      }
    }.bind(this),150); 
    document.onkeydown = function(e){
      switch (e.keyCode){
        case 37:
          if(this.snack.direction === 'right') break;
          this.snack.direction = 'left';
          break;
        case 38:
          if(this.snack.direction === 'bottom') break;
          this.snack.direction = 'top';
          break;
        case 39:
          if(this.snack.direction === 'left') break;
          this.snack.direction = 'right';
          break;
        case 40:
          if(this.snack.direction === 'top') break;
          this.snack.direction = 'bottom';
          break;
      }
    }.bind(this); 
  }
  window.Game = Game;   
})();