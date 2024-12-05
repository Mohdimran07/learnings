//  Linear Probing

// Sequentially searches the hash table starting from the initial hash index
// The gap between probes is always 1
// Prone to clustering issues where consecutive slots are filled

class HashTable {
  constructor(size = 5) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  insert(key, value) {
    let index = this._hash(key);
    while (this.table[index] !== undefined) {
      index = (index + 1) % this.size; // Linear probing
    }
    this.table[index] = { key, value };
  }

  get(key) {
    let index = this._hash(key);
    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        return this.table[index].value;
      }
      index = (index + 1) % this.size; // Linear probing
    }
    return undefined; // Key not found
  }

  remove(key) {
    let index = this._hash(key);
    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        this.table[index] = undefined; // Mark as deleted
        return;
      }
      index = (index + 1) % this.size; // Linear probing
    }
  }
  display() {
    console.log("Hash Table Contents:");
    console.log(this.table);
    // for (let i = 0; i < this.size; i++) {
    //   if (this.table[i] !== undefined) {
    //     console.log(
    //       `Index ${i}: Key = ${this.table[i].key}, Value = ${this.table[i].value}`
    //     );
    //   } else {
    //     console.log(`Index ${i}: Empty`);
    //   }
    // }
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.insert("apple", "red");
hashTable.insert("banana", "yellow");
hashTable.insert("banana", "blue");
hashTable.insert("orange", "orange");
hashTable.insert("blue", "hkjah");
hashTable.insert("green", "hkjah");
hashTable.display();

// console.log('Value for key "banana":', hashTable.get("banana")); // Output: "yellow"
// hashTable.remove("banana");
// console.log('Value for key "banana":', hashTable.get("banana")); // Output: undefined
