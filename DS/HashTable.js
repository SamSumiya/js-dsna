class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hashed = this._hash(key)
    if (!this.data[hashed]) {
      this.data[hashed] = [];
      this.data[hashed].push([key, value])
    } else {
      this.data[hashed].push([key, value]);
    } 
  }
  get(key) {
    const hashed = this._hash(key)
    const targetBucket = this.data[hashed]
    if (targetBucket) {
      for (let i = 0; i < targetBucket.length; i++) {
        if (targetBucket[i][0] === key) {
          return targetBucket[i][1];
        }
      }
    }
    return undefined
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
