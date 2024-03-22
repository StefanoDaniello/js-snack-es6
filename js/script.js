/*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/

// snack 1







// snack 2
let studenti=[
    {
        id: 213,
        nome: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        nome: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        nome: 'Francesca da Polenta',
        grades: 84
    }
  
];

let grades = 70
let id= 120
/*
let aula1=studenti.filter((el)=>{
    return (el.grades > grades && el.id <= id)
})
console.log(aula1)

let aula2=studenti.filter((el)=>{
    return (el.grades > grades && el.id > id)
})
console.log(aula2)
*/



let aula1=studenti.map((el)=>{
    let lista={
        id:el.id,
        nome: el.nome.toUpperCase(),
        grades: el.grades
    }
    return lista
});
console.log(aula1)

let aula2=aula1.filter((el)=>{
    return (el.grades > grades && el.id > id)
})
console.log(aula2)
let aula3=aula1.filter((el)=>{
    return (el.grades > grades && el.id <= id)
})
console.log(aula3)