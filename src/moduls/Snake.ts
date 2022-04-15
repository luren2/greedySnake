import { Food } from './Food';

class Snake extends Food {
  //全身
  snake: HTMLElement;
  snake_head: HTMLElement;
  //html集合(包括snake_head)
  snake_body: HTMLCollection;
  // snake_body: NodeList;
  constructor() {
    super();
    this.snake = document.querySelector('#snake')!;
    //第一个
    this.snake_head = document.querySelector('#snake div')!;
    this.snake_body = this.snake.getElementsByTagName('div')!;
    // this.snake_body = document.querySelectorAll('anske div')!;
  }

  //获取坐标(snake_head)
  get X() {
    return this.snake_head.offsetLeft;
  }
  get Y() {
    return this.snake_head.offsetTop;
  }

  //设置坐标(snake_head)
  set X(value) {
    if (this.X === value) return;
    //不能掉头
    if (
      this.snake_body[1] &&
      (this.snake_body[1] as HTMLElement).offsetLeft === value
    ) {
      if (value > this.X) {
        value = this.X - this.FoodWidth;
      } else {
        value = this.X + this.FoodWidth;
      }
    }

    if (value < 0 || value > this.StageWidth - this.FoodWidth) {
      throw new Error('撞到墙了!');
    }

    this.isHitHimself();
    this.movebody();
    this.snake_head.style.left = value + 'px';
  }

  set Y(value) {
    if (this.Y === value) return;
    //不能掉头
    if (
      this.snake_body[1] &&
      (this.snake_body[1] as HTMLElement).offsetTop === value
    ) {
      if (value > this.Y) {
        value = this.Y - this.FoodWidth;
      } else {
        value = this.Y + this.FoodWidth;
      }
    }

    if (value < 0 || value > this.StageHeight - this.FoodHeight) {
      throw new Error('撞到墙了!');
    }

    this.isHitHimself();
    this.movebody();
    this.snake_head.style.top = value + 'px';
  }

  //增加身体和颜色
  addBody() {
    let div = document.createElement('div');
    div.style.backgroundColor = (
      this.food_div[0] as HTMLElement
    ).style.backgroundColor;
    this.snake.appendChild(div);

    // this.snake.insertAdjacentHTML('beforeend', '<div"></div>');
  }
  //判断是否撞到自己
  isHitHimself() {
    for (let i = 1; i < this.snake_body.length; i++) {
      let x = (this.snake_body[i] as HTMLElement).offsetLeft;
      let y = (this.snake_body[i] as HTMLElement).offsetTop;
      if (x == this.X && y == this.Y) {
        throw new Error('撞到自己了！');
      }
    }
  }
  //身体移动 要从后面开始
  movebody() {
    for (let i = this.snake_body.length - 1; i > 0; i--) {
      let x = (this.snake_body[i - 1] as HTMLElement).offsetLeft;
      let y = (this.snake_body[i - 1] as HTMLElement).offsetTop;
      if (i === 1) {
        (this.snake_body[i] as HTMLElement).style.left = x + 1 + 'px';
        (this.snake_body[i] as HTMLElement).style.top = y + 1 + 'px';
      } else {
        (this.snake_body[i] as HTMLElement).style.left = x + 'px';
        (this.snake_body[i] as HTMLElement).style.top = y + 'px';
      }
    }
  }
}

export { Snake };
// const food = new Food();
// console.log(food.X, food.Y);
// const snake = new Snake();
// console.log(snake.FoodWidth, snake.FoodHeight);
