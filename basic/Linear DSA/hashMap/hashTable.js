class HashTable {
  constructor(val = 10) {
    this.table = new Array(val);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    // console.log(`hash fn of ${key} is ${hash}`);
    // console.log(
    //   `hash fn of ${key} is ${hash} % table length ${this.table.length} = ${hash % this.table.length}`
    // );
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    // console.log(`idx of ${key} is ${index}`);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    console.log(this.table[index]);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
    // for (let i = 0; i < this.size; i++) {
    //   if (this.table[i] !== undefined) {
    //     console.log("table",this.table[i][0][i]);
    //     console.log(
    //       `Index ${i}: Key = ${this.table[i][0][i]}, Value = ${this.table[i][1][i]}`
    //     );
    //   } else {
    //     console.log(`Index ${i}: Empty`);
    //   }
    // }
  }
}

const ht = new HashTable(3);

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);
// ht.set("ǻ", 200);
ht.set("imran", 23);
ht.set("irfan", 25);
ht.set("rehan", 28);
ht.set("subhan", 28);
ht.set("goutham", 31);
ht.set("sumit", 31);
ht.set("sandeep", 31);
ht.set("apple", 31);
ht.set("ball", 35);
ht.set("cat", 38);

// console.log(ht.get("subhan"));

// ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

// console.log(ht.size); // 3
// ht.remove("Spain");
ht.display();
console.log(ht.get("subhan"));
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
