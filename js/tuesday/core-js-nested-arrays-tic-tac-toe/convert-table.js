let tableData = [
  ["firstName", "lastName", "city", "state"],
  ["Elisabeth", "Gardenar", "Toledo", "OH"],
  ["Jamaal", "Du", "Sylvania", "OH"],
  ["Kathlyn", "Lavoie", "Maumee", "OH"]
]

function convertTable() {
  let arr = [];
  for (let i = 1; i < tableData.length; i++) {
    let currentObj = {};    
    for (let j = 0; j < tableData[i].length; j++)
      currentObj[tableData[0][j]] = tableData[i][j];
    arr.push(currentObj);
  }
  return (arr);
}

module.exports =  { convertTable };