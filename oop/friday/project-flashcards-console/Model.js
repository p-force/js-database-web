const fs = require('fs');
const path = require('path');
const topicsDirect = path.join(__dirname, 'topics');
class Model {
  constructor() {
    this.array = [];
  }
  returnTopicsFile() {
     return new Promise((resolve, rejecet) => {
      fs.readdir(topicsDirect, (errDirect, dataDirect) => {
        if(errDirect){
          return rejecet(errDirect);
        }else{
          return resolve(dataDirect);
        }
      })
    })
  }
  returnTopicsFileCallBack(item) {
    item = this.returnTopicsFile()
    .then(dataReadDir => {
      return dataReadDir;
    });
  }
  returnReadFileMenu(number) {
    const result_0 = this.returnTopicsFile().then(data => {
      const res_0 = fs.readFileSync(path.join(__dirname, 'topics', `${data[0]}`), 'utf8');
      const newArray_0 = [];
      const resultArray_0 = res_0.split('\n').map(element => {
        if(element !== ''){
          newArray_0.push(element);
        }
      });
      return newArray_0;
 
    });
    const result_1 = this.returnTopicsFile().then(data => {
      const res_1 = fs.readFileSync(path.join(__dirname, 'topics', `${data[1]}`), 'utf8');
      const newArray_1 = [];
      const resultArray_0 = res_1.split('\n').map(element => {
        if(element !== ''){
          newArray_1.push(element);
        }
      });
      return newArray_1;
    });
    const result_2 = this.returnTopicsFile().then(data => {
       const res_2 = fs.readFileSync(path.join(__dirname, 'topics', `${data[2]}`), 'utf8');
       const newArray_2 = [];
      const resultArray_2 = res_2.split('\n').map(element => {
        if(element !== ''){
          newArray_2.push(element);
        }
      });
      return newArray_2;
    })   
    if(number === 1){
      return result_0
    } else if(number === 2){
      return result_1
    }else {
      return result_2;
    }
}
}

module.exports = Model;