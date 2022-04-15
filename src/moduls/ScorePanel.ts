class ScorePanel {
  score: number = 0;
  level: number = 1;
  everyScore: number; //设置每几分升一级
  maxLevel: number; //设置最大等级

  scoreSpan: HTMLElement;
  levelSpan: HTMLElement;
  constructor(everyScore: number = 10, maxLevel: number = 10) {
    this.everyScore = everyScore;
    this.maxLevel = maxLevel;
    this.scoreSpan = document.querySelector('#score')!;
    this.levelSpan = document.querySelector('#level')!;
  }

  addScore() {
    this.score++;
    this.scoreSpan.textContent = 'SCORE:' + this.score;
    if (this.score % this.everyScore === 0) {
      this.addLevel();
    }
  }
  addLevel() {
    if (this.level >= this.maxLevel) return;
    this.level++;
    this.levelSpan.textContent = 'LEVEL:' + this.level;
  }
}

//测试
//   const scorePanel = new ScorePanel(1, 3);
//   // scorePanel.addScore();
//   // scorePanel.addLevel();
//   // scorePanel.addLevel();
//   for (let i = 0; i < 10; i++) {
//     scorePanel.addScore();
//   }
export { ScorePanel };
