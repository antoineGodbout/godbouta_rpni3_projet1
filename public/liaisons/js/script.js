/**
 * @author Antoine Godbout
 *
 * Table des matières
 * 1. Interractions de formulaire
 * 2. Menu
 * 3. Etapes du steps left
 * Initialisation
 */


// 1. Interractions de formulaire

//Formulaire caché Faire un don en memoire de quelqu'un
const intialisationCheckboxMemoire = function(){
    const checkboxMemoire = document.querySelector('#memoire');
    checkboxMemoire.addEventListener("change",function (){afficherFormulaireMemoire(checkboxMemoire)});
}
const afficherFormulaireMemoire = function (boiteCoche){
    if(boiteCoche.checked === true) {
        document.querySelector('#formulaire_memoire').classList.remove("element_cache");
    }
    else {
        document.querySelector('#formulaire_memoire').classList.add("element_cache");
    }
}

//Option Mon Choix dans les montants de don
const refInputMonChoix = document.querySelector("#monChoixTexte");
const initialisationInputChoix = function (){
    //Ajouter un ecouteur sur le groupe de bouton
    const inputsMontant = document.querySelectorAll('input[name="radio_montant"]');
    inputsMontant.forEach(function (input){
        input.addEventListener("change", function (){afficherInputMontantDon(input)});
    })
}
const afficherInputMontantDon = function (refInput) {
    if(refInputMonChoix.checked === true) {
        document.querySelector('#monChoixInput').classList.remove("element_cache");
        document.querySelector('#monChoixTexte').classList.add("element_cache");
        document.querySelector('#monChoixInput').focus();
    }
    else{
        document.querySelector('#monChoixInput').classList.add("element_cache");
        document.querySelector('#monChoixTexte').classList.remove("element_cache");
    }
}

// Bloc organisation
const initialiserCheckboxOrganisation = function (){
    const refCheckbox = document.querySelector("#organisation_check");
    refCheckbox.addEventListener("change",function (){afficherBlocOrganisation()});
}

const afficherBlocOrganisation = function () {
    document.querySelector("#individu").classList.toggle("element_cache");
    document.querySelector("#organisation").classList.toggle("element_cache");
}

// Info sur le code CVV
const initialiserInfoCVV = function (){
    const refLogoInfo = document.querySelector('#cvv');
    refLogoInfo.addEventListener("click", function (){afficherInfoCVV()});
}
const afficherInfoCVV = function () {
    const refMessageInfo = document.querySelector('#info_cvv');
    refMessageInfo.classList.toggle("element_cache");
}

// 2. Menu
//Code récupéré et adapté à partir du projet OFF
var menu={
    lblMenuFerme:"Menu",
    lblMenuOuvert:"Fermer",
    refBouton:null,refLibelle:null,
    refMenu:null,
    configurerNav:function(){
        this.refMenu=document.querySelector(".menu");
        this.refBouton=document.createElement("button");
        this.refLibelle=document.createElement("span");
        this.refBouton.appendChild(this.refLibelle);
        this.refBouton.className="menu__controle";
        this.refLibelle.className="menu__libelle";
        this.refLibelle.innerHTML=this.lblMenuFerme;
        this.refMenu.prepend(this.refBouton);
        this.refBouton.addEventListener("click",function(){menu.ouvrirFermerNav()})},
    ouvrirFermerNav:function(){
        this.refMenu.classList.toggle("menu--ferme");
        if(this.refMenu.classList.contains("menu--ferme")){
            this.refLibelle.innerHTML=this.lblMenuFerme}
        else{
            this.refLibelle.innerHTML=this.lblMenuOuvert
        }
    }
};

// 3. Etapes du steps left
var etapeCourante = 1;

const changerEtape = function (toggle){
    etapeCourante = etapeCourante + toggle;
    switch (etapeCourante){
        case 1: etape1();
            break;
        case 2: etape2();
            break;
        case 3: etape3();
            break;
        default: etape1();
    }
}

const etape1 = function() {
    document.querySelector('#section_don').classList.remove("element_cache");
    document.querySelector('#section_coordonnes').classList.add("element_cache");
    document.querySelector('#section_validation').classList.add("element_cache");
    document.querySelector('#bouton_retour').classList.add("element_cache");
    document.querySelector('#bouton_soumettre').classList.add("element_cache");
    document.querySelector('#steps_left use').setAttribute('href', "#stepsleft_mobile1");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const etape2 = function() {
    document.querySelector('#section_don').classList.add("element_cache");
    document.querySelector('#section_coordonnes').classList.remove("element_cache");
    document.querySelector('#section_validation').classList.add("element_cache");
    document.querySelector('#bouton_retour').classList.remove("element_cache");
    document.querySelector('#bouton_avancer').classList.remove("element_cache");
    document.querySelector('#bouton_soumettre').classList.add("element_cache");
    document.querySelector('#steps_left use').setAttribute('href', "#stepsleft_mobile2");
    document.querySelector('.formulaire_navigation').classList.remove("formulaire_navigationEtape3");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const etape3 = function() {
    document.querySelector('#section_coordonnes').classList.add("element_cache");
    document.querySelector('#bouton_avancer').classList.add("element_cache");
    document.querySelector('#section_validation').classList.remove("element_cache");
    document.querySelector('#bouton_soumettre').classList.remove("element_cache");
    document.querySelector('#steps_left use').setAttribute('href', "#stepsleft_mobile3");
    document.querySelector('.formulaire_navigation').classList.add("formulaire_navigationEtape3");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialisation

const initialiserTout = function (){
    // 1. Interractions de formulaire
    intialisationCheckboxMemoire();
    initialisationInputChoix();
    initialiserInfoCVV();
    initialiserCheckboxOrganisation();
    // 2. Menu
    menu.configurerNav();
    // 3. Etapes du steps left
    etape1();
    document.getElementById("bouton_avancer").addEventListener('click', function(){changerEtape(1)});
    document.getElementById("bouton_retour").addEventListener('click', function(){changerEtape(-1)});
}

window.addEventListener("load", function (){initialiserTout();});