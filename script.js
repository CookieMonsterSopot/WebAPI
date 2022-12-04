// 1. DOCUMENT
// Document to obiekt globalny generowany przez przeglądarke, jest to obiektowa reprezentacja naszego dokumentu HTML.
// console.log(document);
// console.log(document.body);

// 2. SELEKTORY
// Selektory to funkcje do wybierania elementów ze strony.

// a) document.querySelector()
// Przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujący element, jeżeli nie znajdzie nic to zwraca null.

// - id
const navH1 = document.querySelector("#nav-h1");
// console.log(navH1);

// - class
const firstNavSpan = document.querySelector(".nav-span");
// console.log(firstNavSpan);

// - tagname
const navElement = document.querySelector("nav");
// console.log(navElement);

// b) document.querySelectorAll()
// Przyjmuje jako argument selektor CSSowy, zwraca NodeList, jeżeli nie znajdzie nic to zwraca null.
const navSpans = document.querySelectorAll(".nav-span");
//console.log(navSpans);
// console.log(navSpans[2]);
// const navSpansArray = [...navSpans];
// console.log(navSpansArray);
//navSpansArray.map((el) => el.id);

//[1, 2, 3, 4] => ...[1, 2, 3, 4] => 1, 2, 3, 4
//const arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr[0], arr[1], arr[2], arr[3]);
// console.log(...arr);
// const add = (a, b, c, d) => a + b + c + d;
// console.log(add(...arr));

// c) document.getElementById()
// Metoda przyjmuje stringa z id, zwraca element o danym id, jeżeli nic nie znajdzie zwróci null.
const contentDiv = document.getElementById("content");
// console.log(contentDiv);

// d) document.getElementsByClassName()
// Metoda przyjmuje stringa z klasą, zwraca HTMLCollection, jeżeli nie znajdzie żadnego elementu zwraca null.
// const articleParagraphs = [
//   ...document.getElementsByClassName("article-paragraph"),
// ];
//const articleParagraphs = document.getElementsByClassName("article-paragraph");

// console.log(articleParagraphs);

// 2. SUB-SELEKTORY

// a) element.children
console.log(contentDiv);
console.log(contentDiv.children);
