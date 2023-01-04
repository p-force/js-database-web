const View = require("./View");

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    
  }

  async run() {
    while (true) {
      const arrOfTopics = await this.model.returnTopicsFileCallBack();
      const answer = await this.view.printMenu(arrOfTopics);
      console.log()
      const massText = await this.model.returnReadFileMenu(arrOfTopics.indexOf(answer));//массив
      if (!await this.view.getTopic(massText)){
        console.log('Квиз окончен');
        break;
      }
    }
  }

  
}

module.exports = Controller