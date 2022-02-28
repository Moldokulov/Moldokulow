// function AlertName(name) {
//     alert(name);
//     }
//     AlertName(prompt("Ваше имя?"));


// function sum ( ) {
//     let sum = 0;
//     for(let i =1; i<=100;i++) {
//     sum += i;
//     }
//     alert(sum);
//     }
//     sum( );  


// function coube(num) {
//     alert(Math.pow(num,3));
//     }
// coube(prompt("Число для возведения в куб"));


// function check(num){
//     if(num>0) {
//     alert("+++");
//     }
//     else alert("---");
//     }
//     check(-5);
//     check(18);


// function sum (num1,num2,num3){
//     alert(num1+num2+num3);
//     }
//     sum(1,2,3);









// // Создаем новую сущность Vue.js
// var demo = new Vue({
	
// 	// DOM элемент, к которому прикреплена сущность
// 	el: '#main',

//     // Начало модели.
// 	// Определяем свойства и присваиваем им необходимые значения.
// 	data: {
// 		active: 'home'
// 	},

// 	// Функции, которые будем использовать.
// 	methods: {
// 		makeActive: function(item){
// 			// Когда модель будет изменена, представление обновится.
// 			this.active = item;
// 		}
// 	}
// });





// var demo = new Vue({
//     el: '#main',
//     data: {
//         searchString: "",

//         // Модель данных. Эти данные в другом случае передавались бы ajax'ом, но сейчас описаны прямо здесь для упрощения.

//         articles: [
//             {
//                 "title": "27 сайтов с задачками для оттачивания навыков программирования",
//                 "url": "https://proglib.io/p/27-puzzle-websites-to-sharpen-your-skills/",
//                 "image": "https://proglib.io/wp-content/uploads/2016/10/coding-time-100x70.jpg"
//             },
//             {
//                 "title": "Готовимся к собеседованию в Google: 8 месяцев непрерывной работы",
//                 "url": "https://proglib.io/p/8-month-for-google-interview/",
//                 "image": "https://proglib.io/wp-content/uploads/2017/01/0_b11a3_8ff3ef7b_XL-100x70.jpg"
//             },
//             {
//                 "title": "15 материалов по разработке игр",
//                 "url": "https://proglib.io/p/gamedev-compilation/",
//                 "image": "https://proglib.io/wp-content/uploads/2017/05/gamedev-100x70.png"
//             },
//             {
//                 "title": "10 лучших видеокурсов для изучения Linux",
//                 "url": "https://proglib.io/p/linux-courses/",
//                 "image": "https://proglib.io/wp-content/uploads/2017/01/ruqlwta5wqy-100x70.jpg"
//             },
//             {
//                 "title": "Учебный план по осваиванию современного JavaScript",
//                 "url": "https://proglib.io/p/learning-modern-javascript/",
//                 "image": "https://proglib.io/wp-content/uploads/2016/12/1raWO3dhM4jMjf9VY-kZzNg-100x70.png"
//             }
//         ]
//     },
//     computed: {
//         // Вычисленное свойство, которое содержит только те статьи, которые соответствуют searchString.
//         filteredArticles: function () {
//             var articles_array = this.articles,
//                 searchString = this.searchString;

//             if(!searchString){
//                 return articles_array;
//             }

//             searchString = searchString.trim().toLowerCase();

//             articles_array = articles_array.filter(function(item){
//                 if(item.title.toLowerCase().indexOf(searchString) !== -1){
//                     return item;
//                 }
//             })

//             // Возвращает массив с отфильтрованными данными.
//             return articles_array;;
//         }
//     }
// });





// function nameSum (){

// }



// function Sum(n){
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// document.writeln(Sum(837)); 



// function text(){
//     let name = prompt("Ведите текст")
//     let name1 = ["а", "о","и", "е", "ё", "э", "ы", "у", "ю", "я", "А", "О","И", "Е", "Ё", "Э", "Ы", "У", "Ю", "Я"]

//     for (let i = 0; i < name1.lenght; i++);
//     for (let name2 = 0; name2<name.lenght; name2++);

// }
// text()







// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//       );
//     }
//   }
  
//   class Board extends React.Component {
//     renderSquare(i) {
//       return <Square />;
//     }
  
//     render() {
//       const status = 'Next player: X';
  
//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );

// let user = new Object();
// user.name = "Марс";
// user.age = 16;
// user.growth = "1.85м";



let name = {
  age: 16,
  growth: 185,
}
console.log(  name.age('delete'))