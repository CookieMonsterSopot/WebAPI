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
console.log(firstNavSpan);

// - tagname
