var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

console.log(names.sort());
console.log(names);

var priceList = [1000, 50, 2, 7, 14];
priceList.sort();

console.log(priceList);

function lenCompare(a, b){
    return a.length - b.length;
}

names.sort(lenCompare);
console.log(names);