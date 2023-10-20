// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
    prices:  [34, 5, 32, 37, 9],
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
    prices:  [34, 5, 2, 37, 29],
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
    prices:  [34, 40, 12, 7, 9],
  }
  const enrico = {
    name: "Enrico",
    lastName: "Brignano",
    isAmbassador: false,
    prices:  [34, 3, 12, 7, 9],
  }
  const carlo = {
    name: "Carlo",
    lastName: "Verdone",
    isAmbassador: true,
    prices:  [45, 3, 1, 15, 8],
  }

  const shippingCost = 50
  const shippingCostPlafond = 100

  let totale 
  let carrello 
  let utenti = [
    
  ]
  let ambassador =  [

  ]
  utenti.push(marco,paul,amy,enrico,carlo)
  let utenteCheEffettuaLAcquisto = enrico  //cambia il valore qui per provare se il tuo algoritmo funziona!

  //CALCOLO IL carrello
  carrello = utenti[utenti.indexOf(utenteCheEffettuaLAcquisto)].prices.reduce((acc, valore) => acc + valore, 0);
  totale = carrello
  //SE E' AMBASSADOR SCONTO
  utenti[utenti.indexOf(utenteCheEffettuaLAcquisto)].isAmbassador ? totale = totale * 0.7 : totale = totale

  if (totale <= shippingCostPlafond) {
    totale = totale + shippingCost
  }

  console.log("Carrello di",utenteCheEffettuaLAcquisto.name,":",carrello,"Importo da pagare:",totale);
  console.log("\n");


  for (let i = 0; i < utenti.length; i++) {   

    utenti[i].isAmbassador ? console.log(utenti[i].name,utenti[i].lastName,"è un Ambassador") 
    : console.log(utenti[i].name,utenti[i].lastName,"non è un Ambassador" );
    // Se ambassador = true push in ambassador[]
    if (utenti[i].isAmbassador) {
      ambassador.push(utenti[i])
    }
  }
console.log(ambassador);
//  const prices = [34, 5, 2, 7, 9]
//   const shippingCost = 50
//   let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

//   let utenti = [
    
//   ]
//   let ambassador = {

//   }
// console.log(utenti);
// utenti.push(marco,paul,amy)
// console.log(utenti);


//   let totale = 0
//   for (let i = 0; i < prices.length; i++) {
//         totale += prices[i]
//   }
// //   utenteCheEffettuaLAcquisto.isAmbassador ? true : totale = totale * 0.7 # <----  PERCHE' NON FUNZIONA?

// if (utenteCheEffettuaLAcquisto.isAmbassador){
//         totale = totale * 0.7 
// }
//   console.log(totale);
//     totale <= 100
//     totale ? totale = totale - shippingCost : totale = totale 

//     console.log(totale);

