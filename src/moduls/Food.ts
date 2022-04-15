import { Stage } from './Stage';

class Food extends Stage {
  food: HTMLElement;
  food_div: NodeList;
  color: string = '';
  constructor() {
    super();
    this.food = document.querySelector('#food')!;
    // this.food_div = this.food.getElementsByTagName('div');
    this.food_div = this.food.querySelectorAll('div');
  }

  //获取食物的坐标
  get X() {
    return this.food.offsetLeft;
  }
  get Y() {
    return this.food.offsetTop;
  }

  get FoodWidth() {
    return this.food.getBoundingClientRect().width;
  }
  get FoodHeight() {
    return this.food.getBoundingClientRect().height;
  }

  //食物的随机位置
  random() {
    let stagew = this.StageWidth;
    let stageh = this.StageHeight;
    let foodw = this.FoodWidth;
    let foodh = this.FoodHeight;
    let x = Math.floor(Math.random() * ((stagew - foodw) / foodw)) * foodw;
    let y = Math.floor(Math.random() * ((stageh - foodh) / foodh)) * foodh;
    return { x, y };
  }
  //改变食物位置和颜色
  channge() {
    const { x, y } = this.random();
    this.food.style.left = x + 'px';
    this.food.style.top = y + 'px';
    this.color = this.randomColor();
    for (let i = 0; i < this.food_div.length; i++) {
      (this.food_div[i] as HTMLElement).style.backgroundColor = this.color;
    }
  }
  //设置食物的随机颜色
  randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    if (r === 183 && g === 212 && b === 168) this.randomColor();
    return `rgb(${r},${g},${b})`;
  }
}

//测试
// const food = new Food();
// console.log(food.X, food.Y);
// food.channge();
// console.log(food.X, food.Y);
// console.log(food.random());

export { Food };
