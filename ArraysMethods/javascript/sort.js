/*

var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

names.sort();
console.log(names);

*/

// 2

/*

var priceList = [1000, 50, 2, 7, 14];

function lenCompare(a, b){
    return a - b;
}

priceList.sort(lenCompare);
console.log(priceList);

*/

// 3

var priceList = [1000, 50, 2, 7, 14];

Array.prototype.mySort = function(cb){
    for (let i = 0; i < this.length - 1; i++){
        let swapped = false;

        for (let j = 0; j < this.length - i - 1; j++){
            let check = cb(this[j], this[j + 1]);

            if (check < this[j] && check >= 0){
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
                swapped = true;
            }
        }

        if(swapped == false){
            break;
        }
    }
}

function lenCompare(a, b){
    return a - b;
}

priceList.mySort(lenCompare);
console.log(priceList);