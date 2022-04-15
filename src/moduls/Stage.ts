class Stage {
  stage: HTMLElement;
  constructor() {
    this.stage = document.querySelector('#stage')!;
  }
  //获取舞台的宽高
  get StageWidth() {
    return this.stage.getBoundingClientRect().width;
  }
  get StageHeight() {
    return this.stage.getBoundingClientRect().height;
  }
}
export { Stage };
