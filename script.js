/*function Book(title, author, pagesNumber, read) {
  this.title = title;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.read = read;
  this.info = function () {
    return (
      this.title + ' by ' + this.author + ', ' + pagesNumber + ', ' + this.read
    );
  };
}


*/
alert('Hello world');
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

Object.setPrototypeOf(table, head);
Object.setPrototypeOf(bed, table);
//Object.setPrototypeOf(pockets, bed);
alert(pockets.pen); // 3
alert(bed.glasses); // 1
alert(table.money); // undefined
