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




import {getRndInteger} from './utility.js'


// snack 1
let invitati=[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

for(let i=0; i<invitati.length;i++){
    let tableName=getRndInteger(1,5)
    let place=getRndInteger(1,3)
    let nome=invitati[i]
    let lista=[
        {
        tableName: tableName,
        guestName: nome,
        place: place
        }
    ];
    console.log(lista)
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}






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

/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

*/


// snack 3

let bici=[
    {
        name:'red',
        wheight:10
    },
    {
        name:'blue',
        wheight:20
    },
    {
        name:'yellow',
        wheight:60
    },
    {
        name:'green',
        wheight:80
    },
    {
        name:'white',
        wheight:2000
    }
    
];



function maggiore(a,b) {
    if (a.wheight < b.wheight){
      return -1;
    }
    else if (a.wheight > b.wheight){
      return 1;
    }
    return 0;
  }

bici.sort(maggiore);
console.log(bici);

const nuovo=bici[0]
console.log(nuovo)

const {name,wheight}=nuovo
console.log(`La bici meno pensate è: ${name} con un peso di ${wheight} kg`)
const stContainer=document.querySelector('.st-container')
stContainer.innerHTML=(`La bici meno pensate è: ${name} con un peso di ${wheight} kg`)



// snack 4
/*
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!
Buon pomeriggio e buon divertimento !!!! 
*/

let squadre=[
    {
        nome:'Barcellona',
        punti:0,
        falli:0
    },
    {
        nome:'Napoli',
        punti:0,
        falli:0
    },
    {
        nome:'Francia',
        punti:0,
        falli:0
    },
    {
        nome:'Roma',
        punti:0,
        falli:0
    }
];

const random=squadre.map((el)=>{
    el.punti=getRndInteger(0,15)
    el.falli=getRndInteger(0,15)
    return el
})
console.log(random)

let array=[]
const container=document.getElementById('container')
for(let i=0;i<random.length;i++){
    let prova=random
    array.push({punti:prova[i].punti,falli:prova[i].falli})
    const li= document.createElement('li')
    li.innerHTML=(`punti:${prova[i].punti},falli:${prova[i].falli}`)
    container.appendChild(li)
}
console.log(array)
