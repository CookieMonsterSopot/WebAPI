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
// console.log(contentDiv);
// console.log(contentDiv.children);

// b) element.childNodes
//console.log(contentDiv.childNodes);

// c) element.firstElementChild
const list = document.querySelector("ul");
// console.log(list);
// console.log(list.firstElementChild);

// d) element.lastElementChild
//console.log(list.lastElementChild);

// e) element.nextElementSibling / previousElementSibling
const middleLi = list.children[1];
//console.log(middleLi.nextElementSibling);

// f) element.parentElement
//console.log(middleLi.parentElement);

// Zad 1.
// Zapisz w zmiennych wszystkie elementy występujące w naszym dokumencie HTML. Staraj się nie modyfikować samego HTMLa, lecz jeżeli będzie to konieczne, zrób to.

const body = document.querySelector("body");
// console.log(body);
const nav = document.querySelector("nav");
const articles = contentDiv.children;
const firstArticleH2 = articles[0].firstElementChild;
const firstArticleP = articles[0].lastElementChild;
const listItems = list.children;
// console.log(nav);
// console.log(articles);
// console.log(firstArticleH2);
// console.log(firstArticleP);
// console.log(listItems);

// 3. TWORZENIE I DODAWANIE ELEMENTÓW

// a) document.createElement()
// createElement jest funkcją która tworzy elementy jako obiekty JSowe. Ten obiekt możemy dowolnie modyfikować i wstawiać do DOM aby wyświetlić element na stronie. Jako argument przyjmuje nazwe tagu w stringu.
const additionalLi = document.createElement("li");
additionalLi.textContent = "This was appended using .appendChild() method.";
additionalLi.id = "additional-li";
console.log(additionalLi);
//<li id="additional-li">This was appended using .appendChild() method.</li>

// b) element.appendChild()
// appendChild to metoda do wstawiania elementów stworzonych w JSie do DOM. Wywołuje się tą metode na elemencie do którego chcemy wstawić nowy element, a jako argument podajemy element do wstawienia (element stworzony w JSie)

// list to zmienna przechowujaca selektor do ul'a na stronie (jest wyżej), linia 65
list.appendChild(additionalLi);

// c) element.insertBefore()
// Metoda doda nowy element (1 argument) przed element podany w drugim argumencie. Metoda wywoływana na elemencie w którym mają zajść zmiany
const additionalLi2 = document.createElement("li");
additionalLi2.textContent = "Nowe LI, wstawione przy pomocy insertBefore()";
const firstLi = list.firstElementChild;
list.insertBefore(additionalLi2, firstLi);

// d) string + insertAdjacentHTML()
const html = `<li id="li-to-remove">Li to remove</li>`;
list.insertAdjacentHTML("beforeend", html);

// 4. USUWANIE ELEMENTÓW

// a) Czyszczenie zawartości elementów przy pomocy innerHTML. Wyczyści wszystko pomiędzy tagami danego elementu, ale tagi zostawi.
const liToRemove = document.getElementById("li-to-remove");
// liToRemove.innerHTML = "";
// <li id="li-to-remove">Li to remove <p>123321</p></li>
// *innerHTML = ''*
/* <li id="li-to-remove"></li> */

// b) element.remove()
// Ta metoda po prostu usuwa element na którym została wywołana, usuwa cały element z tagami włącznie
liToRemove.remove();

// c) element.removeChild()
// Metoda usuwa wskazany element dziecko elementu na którym została wywołana.
// list to wyżej zdefiniowana zmienna
list.removeChild(list.firstElementChild);
