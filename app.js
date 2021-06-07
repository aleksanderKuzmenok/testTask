let search = document.querySelector('#search');
let button = document.querySelector('#button');


button.addEventListener('click', searchText);
function searchText(){
    if (search.value === 'google'){
        alert('Yandex круче. Но это не точно');
        setTimeout(()=>{
         alert('Yandex круче. Но это не точно')
        } ,3000)
    } else {
        alert(search.value);
    }
    console.log(friends[0].name);
    
}

let pit = {name: 'Петр', age: 17};
let nik = {name: 'Ник', age: 20};
let bob = {name: 'Боб', age: 22};
let jon = {name: 'Джон', age: 30};
let friends = [pit, nik, bob, jon];

function superSum(num1, num2) {
    alert(num1 + num2);
}
superSum(4, 6);

let array1 = [1, 34, 6, 3, 79, -534, -3, 9];

function minmaxNumber (){
   let minNamber = array1[0];
   let maxNamber = array1[0];
      for (let i = 0; i < array1.length; i++){
      if (minNamber > array1[i]){
         minNamber = array1[i];
      } if (maxNamber < array1[i]){
         maxNamber = array1[i];
      }
   }
   return [minNamber, maxNamber];
}
console.log(minmaxNumber(array1));

let a = 5;
let b = 'streeng';
[a, b] = [b, a];
console.log(a);
console.log(b);

let arr = [1, 2, 3, 4, -5, 5, 1, 7, 13]; // random arry

function findMax() {
   return Math.max(...arr);
}
console.log(findMax(arr));




  
    

