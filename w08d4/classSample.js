class Rectangle {

  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  area(){
    return this.length * this.width;
  }

}

class Box extends Rectangle {
  constructor(length,width,height){
    super(length,width);
    this.height = height;
  }

  volume(){
    return this.area() * this.height;
  }

}

const r = new Rectangle(3,4);
const bb = new Box(5,6,7);

console.log('r',r);
console.log('r.area()',r.area());
console.log('bb',bb);
console.log('bb.volume()',bb.volume());
