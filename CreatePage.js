// Create Element

// Create Container
let container = document.createElement("div");
container.className = "container";

// create Card
let card = document.createElement("div");
card.className = "card";

// create img 
let img = document.createElement("img");
img.src = "/image-product-desktop.jpg";
img.alt = "logo";

// create div Text
let texts = document.createElement("div");
texts.className = "texts";

// create paragraph
let paragraph = document.createElement("p");
paragraph.className = "perfume-text";
// create Content in paragraph
paragraph.appendChild(document.createTextNode("perfume"))
// add paragraph in texts
texts.appendChild(paragraph);

// create h1 
let h1 = document.createElement("h1");
h1.setAttribute("style","font-size: 36px;")
// create Content
h1.appendChild(document.createTextNode("Gabrielle Essence Eau De Parfum"))
// add h1 in texts
texts.appendChild(h1);

// create Second Paragraph
let paragraph2 = document.createElement("p");
paragraph2.className = "P-under-head-title";
// create Content
paragraph2.appendChild(document.createTextNode("A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."))
// add paragraph2 in texts
texts.appendChild(paragraph2);

// create div to price
let price = document.createElement("div");
price.className = "price";
// create content
let h2InPrice = document.createElement("h2")
// create content
h2InPrice.appendChild(document.createTextNode("$149.99"))

let paragraphInPrice = document.createElement("p");
// create content 
paragraphInPrice.appendChild(document.createTextNode("$169.99"))

// add all content in div price
price.appendChild(h2InPrice);
price.appendChild(paragraphInPrice);
//  add price in texts
texts.appendChild(price);


// create div btn 
let btnDiv = document.createElement("div");
btnDiv.className = "btn";
// create btn in div and content btn
let btn = document.createElement("button");
// add content on btn
btn.innerHTML = `<img src="/icon-cart.svg" alt="Cart-icon"> Add to card`;
// add all content in div btn
btnDiv.appendChild(btn);
// add btn in texts
texts.appendChild(btnDiv);

// add all elements in container

container.appendChild(card);
card.appendChild(img);
card.appendChild(texts);
document.body.appendChild(container);

// ----------------------------------------------------------------------------------------------------------

//(          Css Code           )

document.body.style.backgroundColor = "hsl(30, 38%, 92%)";

container.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
card.style.cssText = `
background-color: hsl(0, 0%, 100%);
display: flex;
width: 40% ;
border-radius: 10px;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
-ms-border-radius: 10px;
-o-border-radius: 10px;
`

texts.style.cssText = `
padding: 30px 10px 10px 10px;
`

paragraph.style.cssText = `
font-size: 10px;
    letter-spacing: 6px;
    color:  hsl(228, 12%, 48%);
    text-transform: uppercase;
    font-family: VariableFont;
    font-weight: 500;
`

h1.style.cssText = `
font-size: 36px;
font-family: Fraunces-VariableFont;
color:  hsl(212, 21%, 14%);
padding: 14px 0 14px 0;
`

paragraph2.style.cssText = `
padding-bottom: 20px;
padding-top: 10px;
color: hsl(228, 12%, 48%);
font-family: VariableFont;
font-family: 700;
font-size: 14px;
`

img.style.cssText = `
width: 50%;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
margin-right: 20px;
`

price.style.cssText = `
display: flex;
align-items: center;
gap: 20px;
`

paragraphInPrice.style.cssText = `
text-decoration: line-through;
color: hsl(228, 12%, 48%);
font-size: 13px;
font-family: Fraunces-VariableFont;
transform: translateY(2px);
-webkit-transform: translateY(2px);
-moz-transform: translateY(2px);
-ms-transform: translateY(2px);
-o-transform: translateY(2px);
`

h2InPrice.style.cssText = `
color: hsl(158, 36%, 37%);
    font-size: 29px;
    font-family: Fraunces-VariableFont;
`

btnDiv.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
height: 30%;
`

btn.style.cssText = `
width: 100%;
margin-right: 20px;
padding: 13px;
border-radius: 7px;
-webkit-border-radius: 7px;
-moz-border-radius: 7px;
-ms-border-radius: 7px;
-o-border-radius: 7px;
border: none;
background-color: hsl(158, 36%, 37%);
color: #fff;
font-family: VariableFont;
font-weight: 700;
cursor: pointer;
`


