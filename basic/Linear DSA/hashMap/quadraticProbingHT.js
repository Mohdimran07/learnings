class HashTable {
  constructor(size = 7) {
    this.size = size;
    this.table = new Array(size);
    this.count = 0; // To keep track of the number of elements
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  insert(key, value) {
    if (this.count >= this.size / 2) {
      console.log("Hash table is full. Consider resizing.");
      return;
    }

    let index = this._hash(key);
    let i = 0; // Quadratic probing counter

    while (this.table[index] !== undefined) {
      // If the key already exists, update the value
      if (this.table[index] && this.table[index].key === key) {
        this.table[index].value = value;
        return;
      }
      i++;
      index = (index + i * i) % this.size; // Quadratic probing
    }

    this.table[index] = { key, value };
    this.count++;
  }

  get(key) {
    let index = this._hash(key);
    let i = 0; // Quadratic probing counter

    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        return this.table[index].value;
      }
      i++;
      index = (index + i * i) % this.size; // Quadratic probing
    }
    return undefined; // Key not found
  }

  remove(key) {
    let index = this._hash(key);
    let i = 0; // Quadratic probing counter

    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        this.table[index] = undefined; // Mark as deleted
        this.count--;
        return;
      }
      i++;
      index = (index + i * i) % this.size; // Quadratic probing
    }
  }

  display() {
    console.log(this.table);
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.insert("apple", "red");
hashTable.insert("banana", "yellow");
hashTable.insert("orange", "orange");
hashTable.insert("grape", "purple");

// console.log('Value for key "banana":', hashTable.get("banana")); // Output: "yellow"
// hashTable.remove("banana");
// console.log('Value for key "banana":', hashTable.get("banana")); // Output: undefined

// Display the hash table
hashTable.display();
