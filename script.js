// 1. DOCUMENT
// Document to obiekt globalny generowany przez przeglądarke, jest to obiektowa reprezentacja naszego dokumentu HTML.
// console.log(document);
// console.log(document.body);

// 2. SELEKTORY
// Selektory to funkcje do wybierania elementów ze strony.

// a) document.querySelector()
// Przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujący element, jeżeli nie znajdzie nic to zwraca null.

// - id
//const navH1 = document.querySelector("#nav-h1");
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

/* <li>to jest previousElementSibling dla mojego elementu</li>
<li>To LI mam wybrane</li>
<li>to jest nextElementSibling</li> */

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
document.body.appendChild(liToRemove);
// c) element.removeChild()
// Metoda usuwa wskazany element dziecko elementu na którym została wywołana.
// list to wyżej zdefiniowana zmienna
list.removeChild(list.firstElementChild);

// 5. ZAMIANA ELEMENTÓW

// a) element.replaceChild()
// Metoda zamienia podane w argumentach elementy, 1 wstawia, 2 usuwa.
list.replaceChild(additionalLi2, list.firstElementChild);
// replaceChild() = remove() + appendChild() / insertBefore() / insertAdjacentHTMl()

// 6. KLONOWANIE ELEMENTÓW

// a) element.cloneNode()
// Metoda klonująca element. Wywoływana na elemencie który chcemy sklonować.

// a.1) klonowanie płytkie - same tagi
// contentDiv to zmienna definiowana wyżej
const shallowDivClone = contentDiv.cloneNode(false);

// a.2) klonowanie głębokie - tagi + zawartość elementu
const deepDivClone = contentDiv.cloneNode(true);
console.log(deepDivClone);

// 7. AKTUALIZACJA/DODAWANIE/USUWANIE ZAWARTOŚCI ELEMENTÓW

// a) element.textContent i element.innerText
// Metody stosowane zamiennie, jednak standardem jest textContent, tej własności będziemy używać.
// shallowDivClone.textContent = "123321";
// console.log(shallowDivClone);
// shallowDivClone.innerText = "321123";
// console.log(shallowDivClone);

// b) element.innerHTML
// console.log(list.innerHTML);
// const html2 = "<h1>lalalalalalalalala</h1>";
// list.innerHTML = html2;

// c) element.appendChild()

// 8. AKTUALIZACJA/DODAWANIE/USUWANIE ATRYBUTÓW ELEMENTÓW.

// a) element.attributes
// Główne zastosowanie .attributes to sprawdzenie ilości atrybutów danego elementu.
//console.log(liToRemove.attributes.length);

// b) element.setAttribute()
// Metoda w pierwszym argumencie przyjmuje nazwę atrybutu do dodania, w drugim wartość tego atrybutu.
//contentDiv.setAttribute("class", "main-container");

// Zad 2.
// Na wszystkich h2 w article dodaj klasę "article-heading"

const allH2s = [...document.querySelectorAll("h2")];
allH2s.forEach((h2) => {
  h2.setAttribute("class", "article-heading");
});

// c) element.removeAttribute() - w argumencie metoda przyjmuje nazwę atrybutu który ma usunąć, metoda jest wywoływana na elemencie z którego chcemy usunąć atrybut
allH2s.forEach((h2) => {
  h2.removeAttribute("class");
});

// d) inne
contentDiv.id = "123";
contentDiv.className = "312";
contentDiv.name = "456";

// Zad. 2
// a) Usuń wszystkie elementy z body przy pomocy którejś z poznanych metod.
// b) Odwtórz widok strony przy pomocy poznanych metod (document.createElement, element.appendChild())
// Nie dotykamy pliku HTMLowego, chyba ze to konieczne.

document.body.innerHTML = "";

// navElement.remove();
// contentDiv.remove();

const navEl = document.createElement("nav");
const navH1 = document.createElement("h1");
navH1.setAttribute("id", "nav-h1");
navH1.textContent = "DOM";
navEl.appendChild(navH1);

const spanTC = ["Home", "Page 1", "Page 2", "Page 3"];
spanTC.forEach((el) => {
  const span = document.createElement("span");
  if (el === "Home") span.setAttribute("id", "first-span");
  span.setAttribute("class", "nav-span");
  span.textContent = el;
  navEl.appendChild(span);
});
document.body.appendChild(navEl);

const divContent = document.createElement("div");
divContent.setAttribute("id", "content");
document.body.appendChild(divContent);
//
const renderHomePage = () => {
  const article = document.createElement("article");
  const articleH2 = document.createElement("h2");
  articleH2.textContent = "How to access the DOM?";
  article.appendChild(articleH2);
  const articleP = document.createElement("p");
  articleP.setAttribute("class", "article-paragraph");
  articleP.textContent =
    "You don't have to install anything additional, just JavaScript will do. We have a few methods called 'selectors', these methods are used to access DOM elements and are found on the global 'document' object, which is an object representation of the whole HTML document. Here are some of them:";
  article.appendChild(articleP);
  const ul = document.createElement("ul");
  article.appendChild(ul);
  const li = document.createElement("li");
  li.textContent = 'document.querySelector("cssSelectorHere")';
  ul.appendChild(li);
  divContent.appendChild(article);
};
renderHomePage();

// Zad 3. Formularz kontaktowy
// a) stwórz funkcję displayForm
// W funkcji:
// b) stwórz element <form> i nadaj mu id 'contact-form'
// c) stwórz element <h2> i nadaj mu textContent 'Contact us!'
// d) stwórz element <input> i nadaj mu type 'email' oraz id 'contact-form-input-email'
// e) stwórz element <textarea> i nadaj mu id 'contact-form-textarea'
// f) stwórz element <button> i nadaj mu type 'submit', id 'contact-form-submit-button' oraz textContent 'Send'
// g) podepnij wszystkie elementy (przy pomocy appendChild) do elementu form, a sam form do diva id content
// h) testowo wywołaj funkcję

const displayForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "contact-form");
  const h2 = document.createElement("h2");
  h2.textContent = "Contact us!";
  const input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("id", "contact-form-input-email");
  const textarea = document.createElement("textarea");
  textarea.setAttribute("id", "contact-form-textarea");
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "contact-form-submit-button");
  button.textContent = "Send";
  form.appendChild(h2);
  form.appendChild(input);
  form.appendChild(textarea);
  form.appendChild(button);
  divContent.appendChild(form);
};
displayForm();
