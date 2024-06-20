// 10. We have group of people in the form of array and you have to group people basis upon age ?

let peopleArr = [
  { name: "A", age: 10 },
  { name: "B", age: 17 },
  { name: "C", age: 14 },
  { name: "D", age: 10 },
];

const groupByAge = (peopleArr = []) => {
  const groupByAgeObj = {};

  peopleArr.forEach((cItem) => {
    if (!groupByAgeObj.hasOwnProperty(cItem.age)) {
      groupByAgeObj[cItem.age] = [cItem.name];
    } else {
      groupByAgeObj[cItem.age].push(cItem.name);
    }
  });

  return groupByAgeObj;
};
console.log(groupByAge(peopleArr));
