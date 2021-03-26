// Training set
var data = 
    [{person: 'Homer', hairLength: 0, weight: 250, age: 36, sex: 'female'},
     {person: 'Lisa', hairLength: 4, weight: 20, age: 1, sex: 'female'},
     {person: 'Lisa', hairLength: 1, weight: 170, age: 70, sex: 'male'},
     {person: 'Lisa', hairLength: 8, weight: 160, age: 41, sex: 'female'},
     {person: 'Lisa', hairLength: 10, weight: 180, age: 38, sex: 'male'},
     {person: 'Lisa', hairLength: 4, weight: 20, age: 1, sex: 'female'},
     {person: 'Lisa', hairLength: 1, weight: 170, age: 70, sex: 'male'},
     {person: 'Lisa', hairLength: 8, weight: 160, age: 41, sex: 'female'},
     {person: 'Lisa', hairLength: 10, weight: 180, age: 38, sex: 'male'},
     {person: 'Lisa', hairLength: 4, weight: 20, age: 1, sex: 'female'},
     {person: 'Lisa', hairLength: 1, weight: 170, age: 70, sex: 'male'},
     {person: 'Lisa', hairLength: 8, weight: 160, age: 41, sex: 'female'},
     {person: 'Lisa', hairLength: 10, weight: 180, age: 38, sex: 'male'},
     {person: 'Lisa', hairLength: 4, weight: 20, age: 1, sex: 'female'},
     {person: 'Lisa', hairLength: 1, weight: 170, age: 70, sex: 'male'},
     {person: 'Lisa', hairLength: 8, weight: 160, age: 41, sex: 'female'},
     {person: 'Lisa', hairLength: 10, weight: 180, age: 38, sex: 'male'},
     {person: 'Homer', hairLength: 10, weight: 150, age: 34, sex: 'male'},
     {person: 'Homer', hairLength: 2, weight: 90, age: 10, sex: 'female'},
     {person: 'Lisa', hairLength: 6, weight: 78, age: 8, sex: 'male'},
     {person: 'Lisa', hairLength: 4, weight: 20, age: 1, sex: 'female'},
     {person: 'Lisa', hairLength: 1, weight: 170, age: 70, sex: 'male'},
     {person: 'Lisa', hairLength: 8, weight: 160, age: 41, sex: 'female'},
     {person: 'Lisa', hairLength: 10, weight: 180, age: 38, sex: 'male'},
     {person: 'Homer', hairLength: 6, weight: 200, age: 45, sex: 'male'}];

let categoryAttr = 'sex'

// Configuration
var config = {
    trainingSet: data, 
    categoryAttr: categoryAttr, 
    //ignoredAttributes: ['person']
};

// Building Decision Tree
var decisionTree = new dt.DecisionTree(config);

// Building Random Forest
var numberOfTrees = 3;
var randomForest = new dt.RandomForest(config, numberOfTrees);

// Testing Decision Tree and Random Forest
var comic = {person: 'Comic guy', hairLength: 8, weight: 290, age: 38};

var decisionTreePrediction = decisionTree.predict(comic);
var randomForestPrediction = randomForest.predict(comic);

let testData = []
let answers = []
let results = []
data.forEach(item => {
  let testItem = {}
  let answer
  Object.keys(item).forEach(key => {
    if (categoryAttr === key) {
      answer = item[key]
    }
    else {
      testItem[key] = item[key]
    }
  })
  
  let result = decisionTree.predict(testItem)
  answers.push(answer)
  results.push(result)
})

console.log(answers)
console.log(results)

let correctRate = 0
results.forEach((r, i) => {
  if (r === answers[i]) {
    correctRate++
  }
})
correctRate = correctRate / results.length
console.log(correctRate)

// Displaying predictions
document.getElementById('testingItem').innerHTML = JSON.stringify(comic, null, 0);
document.getElementById('decisionTreePrediction').innerHTML = JSON.stringify(decisionTreePrediction, null, 0);
document.getElementById('randomForestPrediction').innerHTML = JSON.stringify(randomForestPrediction, null, 0);

// Displaying Decision Tree
document.getElementById('displayTree').innerHTML = treeToHtml(decisionTree.root);

// Recursive (DFS) function for displaying inner structure of decision tree
function treeToHtml(tree) {
    // only leafs containing category
    if (tree.category) {
        return  ['<ul>',
                    '<li>',
                        '<a href="#">',
                            '<b>', tree.category, '</b>',
                        '</a>',
                    '</li>',
                 '</ul>'].join('');
    }
    
    return  ['<ul>',
                '<li>',
                    '<a href="#">',
                        '<b>', tree.attribute, ' ', tree.predicateName, ' ', tree.pivot, ' ?</b>',
                    '</a>',
                    '<ul>',
                        '<li>',
                            '<a href="#">yes</a>',
                            treeToHtml(tree.match),
                        '</li>',
                        '<li>', 
                            '<a href="#">no</a>',
                            treeToHtml(tree.notMatch),
                        '</li>',
                    '</ul>',
                '</li>',
             '</ul>'].join('');
}

// --------------
//
//let headers = Object.keys(data[0])
//let csv = []
//csv.push(headers.join(','))
//data.forEach(row => {
//  let line = []
//  headers.forEach(header => {
//    line.push(row[header])
//  })
//  csv.push(line.join(','))
//})
//console.log(csv.join('\n'))
