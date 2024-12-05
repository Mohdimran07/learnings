class HashTable {
  constructor(size = 7) {
    this.size = size;
    this.table = new Array(size);
    this.count = 0; // To keep track of the number of elements
  }

  // Primary hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // Secondary hash function for double hashing
  _secondaryHash(key) {
    return 5 - (key.charCodeAt(0) % 5); // A prime number less than the size
  }

  // Insert key-value pair
  insert(key, value) {
    if (this.count >= this.size / 2) {
        console.log("key", key);
      console.log(`Hash table is full for the key: ${key}, cannot insert new key.`);
      return;
    }

    let index = this._hash(key);
    let step = this._secondaryHash(key);

    while (this.table[index] !== undefined) {
      index = (index + step) % this.size; // Double hashing
    }

    this.table[index] = { key, value };
    this.count++;
  }

  // Retrieve value by key
  get(key) {
    let index = this._hash(key);
    let step = this._secondaryHash(key);

    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        return this.table[index].value;
      }
      index = (index + step) % this.size; // Double hashing
    }
    return undefined; // Key not found
  }

  // Remove key-value pair
  remove(key) {
    let index = this._hash(key);
    let step = this._secondaryHash(key);

    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        this.table[index] = undefined; // Mark as deleted
        this.count--;
        return;
      }
      index = (index + step) % this.size; // Double hashing
    }
  }

  // Display the hash table
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined) {
        console.log(
          `Index ${i}: Key = ${this.table[i].key}, Value = ${this.table[i].value}`
        );
      }
    }
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.insert("apple", "red");
hashTable.insert("banana", "yellow");
hashTable.insert("orange", "orange");
hashTable.insert("grape", "purple");
hashTable.insert("green", "purple");

console.log('Value for key "banana":', hashTable.get("banana")); // Output: "yellow"
// hashTable.remove("banana");
console.log('Value for key "banana":', hashTable.get("banana")); // Output: undefined

// Display the contents of the hash table
hashTable.display();
