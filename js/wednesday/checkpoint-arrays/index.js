const filterByAge = (el) => {
  return (el.age < 50);
};

const filterByScore = (el) => {
  return (el.score > 75)
};

const filterByServiceRecord = (el) => {
  return (el.serviceRecord > 5);
};

const sortByScore = (candidates) => {
  candidates.sort(el.score);
};

const getMeanAge = (candidates) => {

};

const getMeanAgeReduce = (candidates) => {
  const count = (candidates) => candidates.reduce((acc, num) => acc + num, 0);
  return(count);
};

const getNamesOnly = (el) => {
  return (el.name);
};

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getMeanAgeReduce,
  getNamesOnly,
};
