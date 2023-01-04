const View = require("./View");

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    while(true) {
      const arrOfTopics = await this.model.returnTopicsFileCallBack()
      const answer = await this.view.printMenu(arrOfTopics);
      const massText = await this.model.returnReadFileMenu(arrOfTopics.indexOf(answer) + 1);
      if (!await this.view.getTopic(massText)){
        console.log('\nКвиз окончен🍺');
        break;
      }
    }
    this.view.exit();
  }

  
}

module.exports = Controller