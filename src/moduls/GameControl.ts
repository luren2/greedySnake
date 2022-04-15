import { Snake } from './Snake';
import { Food } from './Food';
import { ScorePanel } from './ScorePanel';

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  //存取移动方向
  direction: string = '';
  //判断是否存活
  isLive: boolean = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(1, 5);
    this.init();
  }

  //初始化
  init() {
    //绑定键盘按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    //调用move方法
    this.move();
  }
  keydownHandler(e: KeyboardEvent) {
    this.direction = e.key;
  }

  move() {
    //根据方向使位置改变
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.direction) {
      case 'ArrowUp':
        y -= this.food.FoodHeight;
        break;
      case 'ArrowDown':
        y += this.food.FoodHeight;
        break;
      case 'ArrowLeft':
        x -= this.food.FoodWidth;
        break;
      case 'ArrowRight':
        x += this.food.FoodWidth;
        break;
    }
    //先检查再移动
    this.checkEat(x, y);

    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (error: any) {
      this.isLive = false;
      alert(error.message);
    }

    // console.log(this);
    // console.log(x, y);

    this.isLive &&
      setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  //检查是否吃到食物
  checkEat(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      this.snake.addBody();
      this.scorePanel.addScore();
      this.food.channge();
    }
  }
}

export { GameControl };
