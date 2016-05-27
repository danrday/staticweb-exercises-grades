var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeAs = []
var gradeBs = []
var gradeCs = []
var gradeDs = []
var gradeFs = []


scores.sort();

var lowestGrade = scores[0];
var highestGrade = scores[scores.length - 1];

console.log("Highest:", highestGrade);
console.log("Lowest:", lowestGrade);


for (i = 0 ; i < scores.length; i++ ) {
  var x = scores[i];
  if (x < 60) {
    gradeFs.push(scores[i]);
  } else if (x < 70) {
      gradeDs.push(scores[i]);
  } else if (x < 80) {
      gradeCs.push(scores[i]);
  } else if (x < 90) {
      gradeBs.push(scores[i]);
  } else  {
      gradeAs.push(scores[i]);
    }
  }

  console.log("grade As", gradeAs);
   console.log("grade Bs", gradeBs);
    console.log("grade Cs", gradeCs);
     console.log("grade Ds", gradeDs);
      console.log("grade Fs", gradeFs);
