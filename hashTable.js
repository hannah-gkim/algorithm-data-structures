//charCodeAt() => returns an integer between 0 - 65535
// how well hash function spread numbers evenly is important, not having collision?
//here if tableSie changes, our hash is going to change as well, so need to re-hash every item in our table
function hashStringToInt(str, tableSize) {
  // str here is firstName
  // returns idx, where key value is store at
  // 17 and 13 are just arbitrary prime picked.. can be anything?
  let hash = 17;
  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize;
  }
  console.log("hash->", hash);
  return hash;
}

class hashTable {
  // table will store values only?
  // [...."bob"....]
  table = new Array(100);
  //to keep track of how many items are in the table
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      //[  [ 'firstName', 'bob' ],  [...], ...   ]
      if (item) {
        item.forEach(([key, value]) => {
          //[ 'firstName', 'bob' ]
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };
  // "firstName", "bob"
  setItem = (key, value) => {
    this.numItems++;
    // do this to make find more efficient? so that we don't loop through so many elements in one idx
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      this.resize();
    }
    // "firstName", tableSize
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      //here "bob" is store to table's idx
      // this can't avoid collision. to avoid collision we want to use []
      // this.table[idx] = value;
      this.table[idx] = [[key, value]];
    }
  };
  // "firstName"
  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((x) => x[0] === key)[1]; // returns 'bob'
  };
}

const myTable = new hashTable();
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "tim");
myTable.setItem("age", 5);
myTable.setItem("dateOfBirth", "01 / 01 / 2015");

console.log("firstName->", myTable.getItem("firstName"));
console.log("lastName->", myTable.getItem("lastName"));
console.log("age->", myTable.getItem("age"));
console.log("dateOfBirth->", myTable.getItem("dateOfBirth"));
console.log("table arr->", myTable.table);
// console.log("table length->", myTable.table.length);
