// Your JS goes here
// console.log('booyah');
// let bodyElement = document.getElementsByTagName('body')[0];
// console.log(bodyElement);
// let box = document.createElement('div');
// let myStyles = {
//   width: "200px",
//   height: "200px",
//   backgroundColor: "red"
// }
// Object.assign(box.style, myStyles);
//
// // box.style.width = "20px";
// // box.style.backgroundColor = "green";
//
// bodyElement.appendChild(box);




let bodyStyle = {
  width: "1050px"
}

Object.assign(document.body.style, bodyStyle);

for (var i = 0; i<49; i++){
  var color = "#" + Math.floor(Math.random() * 16777216).toString(16);

   let bodyElement = document.getElementsByTagName('body')[0];
   let box = document.createElement('div');
   let myStyles = {
     width: "150px",
     height: "150px",
     backgroundColor: color,
     float: "left",
     // display: "table-cell",
    }

  //   if(i%2 === 0){
  //   myStyles.backgroundColor = "black";
  // }
   Object.assign(box.style, myStyles);

bodyElement.appendChild(box);
console.log(color);

   }
