

  // Créer un tableau contenant plusieurs noms de fruits (par exemple : "Pomme", "Banane", "Cerise", "Mangue", "Orange").
// Afficher les éléments du tableau dans le DOM sous forme de liste (<ul> avec des <li>).
// créer un ul dans le HTML
//faire console log de fruit et de fruit[i] quel est la différence
// faire une boucle for sur le tableau ajouté dans cette boucle li avec createelement et li textcontent=fruit[i]
 
// dans la boucle faire un click event quand on clique sur fruit[i] le fruit cliqué disparait de la liste
 


const input=document.querySelector("#input")
const btn12=document.querySelector("#btn12")
btn12.addEventListener("click",()=>{
    const result=input.value
    const myliste=document.querySelector("#myliste")
    const ocho =document.createElement("li")
    ocho.textContent=result
    myliste.appendChild(ocho)
    if (result==="") {
        alert("rentre l'info avant que je te charcle")
        
    }
    else{

    }
    
    console.log(result)
   
    
    
})

let tableau=["mangue","pomme","flan","cerices","faim"]
console.log(tableau)



const maliste=document.querySelector("#maliste")
for (let i = 0; i < tableau.length; i++) {
const nueve =document.createElement("li")
nueve.textContent=tableau[i]
maliste.appendChild(nueve)
console.log(tableau[i])

nueve.addEventListener("click",()=>{
    nueve.style.background="black"
      nueve.style.color="white"
})
}



