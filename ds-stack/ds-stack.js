var Stack = function() {
    this._storage =[]
    this.counteradd=0
    this. counterremove=0

    this.add = function(value){
    	counteradd++
     this._storage[counteradd]=value
    };
    this.remove = function() {
      delete this._storage[counteradd].length-1
      counterremove++
    };
  };