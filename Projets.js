//Part1
function afficheAge(){
    const ag=parseInt(document.getElementById('saisirAge').value);
    if (isNaN(ag)||ag<=0){
        document.getElementById("result").innerHTML="Saisie incorrecte!!!";
    } else if (ag<18){
        document.getElementById("result").innerHTML="Vous avez "+ag+", donc vous êtes mineur.";
    } else {document.getElementById("result").innerHTML="Vous avez "+ag+", donc vous êtes majeur.";}}
function parite(){
    const nb=document.getElementById('saisirNB').value;
    if (isNaN(nb)||nb<=0){
        document.getElementById("pair").innerHTML="Saisie incorrecte!!!";
    }
    else if (nb%2==0){
        document.getElementById("pair").innerHTML=nb+" est un nombre pair";
    } else {document.getElementById("pair").innerHTML=nb+" est un nombre impair";}
}
function afficheMois() {
    const m=document.getElementById('saisirMois').value;
    if(m==12){{document.getElementById("num").innerHTML="le mois "+m+"est Décembre";}}
    else if(m==11){{document.getElementById("num").innerHTML="le mois "+m+"est Novembre";}}
    else if(m==10){{document.getElementById("num").innerHTML="le mois "+m+"est Octobre";}}
    else if(m==9){{document.getElementById("num").innerHTML="le mois "+m+"est Septembre";}}
    else if(m==8){{document.getElementById("num").innerHTML="le mois "+m+"est Août";}}
    else if(m==7){{document.getElementById("num").innerHTML="le mois "+m+"est Juillet";}}
    else if(m==6){{document.getElementById("num").innerHTML="le mois "+m+"est Juin";}}
    else if(m==5){{document.getElementById("num").innerHTML="le mois "+m+"est Mai";}}
    else if(m==4){{document.getElementById("num").innerHTML="le mois "+m+"est Avril";}}
    else if(m==3){{document.getElementById("num").innerHTML="le mois "+m+"est Mars";}}
    else if(m==2){{document.getElementById("num").innerHTML="le mois "+m+"est Février";}}
    else if(m==1){{document.getElementById("num").innerHTML="le mois "+m+"est Janvier";}}
    else {{document.getElementById("num").innerHTML="Merci de saisir un entier entre 1 et 12";}}
}

//Part2
var y=0;
function estPrem(y) {
    if (y<=1) return false;
    for (let i=2; i<= Math.sqrt(y); i++) {
        if (y%i=== 0) return false;
    }
    return true;
}

const sec=Math.floor(Math.random()*100) + 1;
function secretNB (){
    const nb=parseInt(document.getElementById('saisirSecret').value);
    if(isNaN(nb)||nb==0){
        document.getElementById("secret").innerText="Saisie incorrecte!!!";
    } else if (nb<sec){
        document.getElementById("secret").innerText="Le nombre secret est plus grand";
    } else if (nb==sec){
        document.getElementById("secret").innerText="Vous avez trouver le nombre secret";
    } else if (nb>sec){
        document.getElementById("secret").innerText="Le nombre secret est plus petit";
    }        
}

function Fibonacci(){
    const f=document.getElementById('saisirSeq').value;
    if (isNaN(f)||f<0){document.getElementById("fibonacci").innerText="Saisie incorrecte!!!"}
    else{
        let x1 = 0, x2 = 1, suiv;
        let mfib="";
        for (let i = 1; i <= f; i++) {
            mfib= mfib+" "+x1;
            suiv = x1 + x2;
            x1 = x2;
            x2 = suiv;
        }
        document.getElementById("fibonacci").innerText=mfib;}
}

//Part3
function Facteur(){
    let fact=1;
    let mfact="";
    let nbrfact=parseInt(document.getElementById('saisirFact').value);
    if(isNaN(nbrfact)||nbrfact<=0){document.getElementById("factnbr").innerText="Saisie incorrecte!!!";}
    else{
    for(let i=1;i<=nbrfact;i++){
        if(nbrfact%i==0){mfact+=i+", ";}
    }
    document.getElementById("factnbr").innerText="Les facteurs de "+nbrfact+" sont: "+mfact;}
}
function CalculMoyenne(){ 
    var note;
    let som=0;
    var i=0;
    var m;
    var dernote;
    do{
        note=parseInt(prompt('Entrer une note'));
        //if (isNaN(note)=true){alert('Saisir un nombre correcte');continue;}
        som+=note;
        i++;
        dernote=note;
    } while(note>=0)
    i=i-1;
    som-=dernote;
    m=som/i;
    document.getElementById("moye").innerText="La moyenne des "+i+" notes est de: "+m;
}

const etoile ="*";
const retour ="<br>";
var haut;
function formerTriangle(haut) {
    var strTriangle = "";
    var noLigne = 0;
    var noColonne = 0;
    while (noLigne <= haut) {
        while (noColonne < noLigne) {
            strTriangle+=etoile;
            noColonne++;
        } 
        strTriangle += retour;
        noLigne++;
        noColonne = 0;
    } 
    return strTriangle;    
}
function afficherTriangle(triangle) {
    var elTriangle = document.getElementById("tri");
    elTriangle.innerHTML = triangle;   
}
function dessineTriangle() {
    const haut=document.getElementById('saisirTri').value;
    var strTriangle = formerTriangle(haut);
    afficherTriangle(strTriangle);        
}

//Part4
function afficheLongChain() {
    const chaine = document.getElementById('chain').value;
    const longChaine =chaine.length;
    document.getElementById('Long').innerText ="La longeur de la chaine est de : "+longChaine;
}
function extraitChain(){
    const chaine = document.getElementById('chain').value;
    const extChaine =chaine.substring(0,3);
    document.getElementById('Extrait').innerText ="Les 3 premiers caractères sont : "+extChaine;
}
function jour(j){
    if(j==1){document.getElementById('afficheJour').innerText='Jour : '+'Lundi';}
    else if(j==2){document.getElementById('afficheJour').innerText='Jour : '+'Mardi';}
    else if(j==3){document.getElementById('afficheJour').innerText='Jour : '+'Mercredi';}
    else if(j==4){document.getElementById('afficheJour').innerText='Jour : '+'Jeudi';}
    else if(j==5){document.getElementById('afficheJour').innerText='Jour : '+'Vendredi';}
    else if(j==6){document.getElementById('afficheJour').innerText='Jour : '+'Samedi';}
    else {document.getElementById('afficheJour').innerText='Jour : '+'Dimanche';}
}
function mois(m){
    if(m==0){document.getElementById('afficheMois').innerText='Mois : '+'Janvier';}
    else if(m==1){document.getElementById('afficheMois').innerText='Mois : '+'Février';}
    else if(m==2){document.getElementById('afficheMois').innerText='Mois : '+'Mars';}
    else if(m==3){document.getElementById('afficheMois').innerText='Mois : '+'Avril';}
    else if(m==4){document.getElementById('afficheMois').innerText='Mois : '+'Mai';}
    else if(m==5){document.getElementById('afficheMois').innerText='Mois : '+'Juin';}
    else if(m==6){document.getElementById('afficheMois').innerText='Mois : '+'Juillet';}
    else if(m==7){document.getElementById('afficheMois').innerText='Mois : '+'Août';}
    else if(m==8){document.getElementById('afficheMois').innerText='Mois : '+'Septembre';}
    else if(m==9){document.getElementById('afficheMois').innerText='Mois : '+'Octobre';}
    else if(m==10){document.getElementById('afficheMois').innerText='Mois : '+'Novembre';}
    else {document.getElementById('afficheMois').innerText='Mois : '+'Décembre';}
}
function AfficheDate(){
    var d=new Date(document.querySelector('#saisirDate').value);
    const a=d.getFullYear();
    const m=d.getMonth();
    const j=d.getDay();
    jour(j);
    mois(m);
    document.getElementById('afficheAnnee').innerText='Année : '+a;
}
function DiffDate(){
    const dateAct=new Date() 
    const d2=new Date(document.querySelector('#saisirDate').value);
    const dif= dateAct-d2;
    document.getElementById('DifDate').innerText='Le nombre de jour entre la la date actuelle et la date choisie est : '+Math.floor((dif) / (1000*60*60*24))+' jours.';
}
function caculPret(){
    const mont=parseInt(document.getElementById('montant').value);
    const tx=parseInt(document.getElementById('taux').value);
    const an=parseInt(document.getElementById('duree').value);
    const txm=(tx/100)/12;
    const m=an*12;
    const mens=Math.floor((mont * txm)/ (1-Math.pow((1+txm),-m)));
    if(isNaN(mont)||isNaN(tx)||isNaN(an)){alert('Saisie incorrecte! Merci de saisir des chiffres.');return;}
    else if (mont<0||tx<=0||an<=0){alert('Saisir un chiffre positif supérieur à 0.');return;}
    else{
        document.getElementById('mensualite').innerHTML=new Intl.NumberFormat("de-DE",{ style: "currency", currency: "XOF" }).format(mens);
    }
}
