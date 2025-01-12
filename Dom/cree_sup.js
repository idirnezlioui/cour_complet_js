//cree un element 

let nouveauparagraphe=document.createElement("p")
nouveauparagraphe.textContent="le texte volu"
document.body.appendChild(nouveauparagraphe)

//supprimer un element

let ellementsupprimer=document.querySelector("p")
ellementsupprimer.remove()