// Récupération des éléments du DOM
const experiencesEl = document.getElementById('experiences')
const educationEl = document.getElementById('education')
const skillsEl = document.getElementById('skills')
const hobbiesEl = document.getElementById('hobbies')
const darkLightToggleButton = document.getElementById('darkLightToggle')
const bodyElement = document.getElementById('body')
const tabElementsArray = document.getElementsByClassName('tab')
const switchLanguageButton = document.getElementById('switchLanguageButton')
const gitHubLink = document.getElementById('seeGitHub')

// Réglages par défaut
let lng = "fr"
let colorTheme = "dark-theme"

/**
 * Permet d'afficher la section Expériences || Formation || Compétences || Intérêts selon le bouton sélectioné
 * @param {*} tab Bouton sélectionné
 */
function updateDisplay(tab) {
    switch (tab) {
        case 'experiences':
            experiencesEl.setAttribute('style', 'display: block')
            educationEl.setAttribute('style', 'display: none')
            skillsEl.setAttribute('style', 'display: none')
            hobbiesEl.setAttribute('style', 'display: none')
            break;
        case 'education':
            experiencesEl.setAttribute('style', 'display: none')
            educationEl.setAttribute('style', 'display: block')
            skillsEl.setAttribute('style', 'display: none')
            hobbiesEl.setAttribute('style', 'display: none')
            break;
        case 'skills':
            experiencesEl.setAttribute('style', 'display: none')
            educationEl.setAttribute('style', 'display: none')
            skillsEl.setAttribute('style', 'display: block')
            hobbiesEl.setAttribute('style', 'display: none')
            break;
        case 'hobbies':
            experiencesEl.setAttribute('style', 'display: none')
            educationEl.setAttribute('style', 'display: none')
            skillsEl.setAttribute('style', 'display: none')
            hobbiesEl.setAttribute('style', 'display: block')
            break;
        default:
            console.log(`tab not found`);
    }
}

/**
 * Permet de calculer l'âge selon la date de naissance indiquée
 * @param {*} dateString Date de naissance au format mm/dd/yyyy
 */
function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    let ageString = age + ' ans' 
    document.getElementById('age').innerHTML = ageString
}
getAge('07/05/1982')

/**
 * Permet de mettre à jour le DOM selon la langue sélectionnée
 */
function updateContent() {
    document.getElementById('avatarBegin').innerHTML = i18next.t('avatarBegin'),
    document.getElementById('avatarEnd').innerHTML = i18next.t('avatarEnd'),
    document.getElementById('avatarOccupation').innerHTML = i18next.t('avatarOccupation'),
    document.getElementById('subTitle').innerHTML = i18next.t('subTitle');
    document.getElementById('introductionTitle').innerHTML = i18next.t('introductionTitle')
    document.getElementById('aboutText').innerHTML = i18next.t('aboutText')
    document.getElementById('identityName').innerHTML = i18next.t('identityName')
    document.getElementById('identityAge').innerHTML = i18next.t('identityAge')
    document.getElementById('identityDrivingLicense').innerHTML = i18next.t('identityDrivingLicense')
    document.getElementById('bCategory').innerHTML = i18next.t('bCategory')
    document.getElementById('identityEmail').innerHTML = i18next.t('identityEmail')
    document.getElementById('identityLinks').innerHTML = i18next.t('identityLinks')
    document.getElementById('seeLinkedIn').innerHTML = i18next.t('seeLinkedIn')
    document.getElementById('seeGitHub').innerHTML = i18next.t('seeGitHub')
    // Expériences
    document.getElementById('experiencesExperiencesButton').innerHTML = i18next.t('experiencesButton')
    document.getElementById('experiencesEducationButton').innerHTML = i18next.t('educationButton')
    document.getElementById('experiencesSkillsButton').innerHTML = i18next.t('skillsButton')
    document.getElementById('experiencesInterestsButton').innerHTML = i18next.t('interestsButton')
    document.getElementById('rofimOccupationTitle').innerHTML = i18next.t('rofimOccupationTitle')
    document.getElementById('rofimOccupationDescription').innerHTML = i18next.t('rofimOccupationDescription')
    document.getElementById('antidotOccupationTitle').innerHTML = i18next.t('twOccupationTitle')
    document.getElementById('antidotOccupationDescription').innerHTML = i18next.t('antidotOccupationDescription')
    document.getElementById('diginextOccupationTitle').innerHTML = i18next.t('twOccupationTitle')
    document.getElementById('diginextOccupationDescription').innerHTML = i18next.t('diginextOccupationDescription')
    document.getElementById('eatonOccupationTitle').innerHTML = i18next.t('twOccupationTitle')
    document.getElementById('eatonOccupationDescription').innerHTML = i18next.t('eatonOccupationDescription')
    document.getElementById('musicSchools').innerHTML = i18next.t('musicSchools')
    document.getElementById('musicTeachertitle').innerHTML = i18next.t('musicTeachertitle')
    document.getElementById('musicTeacherDescription').innerHTML = i18next.t('musicTeacherDescription')
    // Formation
    document.getElementById('educationExperiencesButton').innerHTML = i18next.t('experiencesButton')
    document.getElementById('educationEducationButton').innerHTML = i18next.t('educationButton')
    document.getElementById('educationSkillsButton').innerHTML = i18next.t('skillsButton')
    document.getElementById('educationInterestsButton').innerHTML = i18next.t('interestsButton')
    document.getElementById('since').innerHTML = i18next.t('since')
    document.getElementById('cornetPerfectingClass').innerHTML = i18next.t('cornetPerfectingClass')
    document.getElementById('remote').innerHTML = i18next.t('remote')
    document.getElementById('frontEndDeveloperBachelor').innerHTML = i18next.t('frontEndDeveloperBachelor')
    document.getElementById('trumpetPerfectingClass').innerHTML = i18next.t('trumpetPerfectingClass')
    document.getElementById('lctMaster').innerHTML = i18next.t('lctMaster')
    document.getElementById('musicalStudiesDiploma').innerHTML = i18next.t('musicalStudiesDiploma')
    // Compétences
    document.getElementById('skillsExperiencesButton').innerHTML = i18next.t('experiencesButton')
    document.getElementById('skillsEducationButton').innerHTML = i18next.t('educationButton')
    document.getElementById('skillsSkillsButton').innerHTML = i18next.t('skillsButton')
    document.getElementById('skillsInterestsButton').innerHTML = i18next.t('interestsButton')
    document.getElementById('it').innerHTML = i18next.t('it')
    document.getElementById('others').innerHTML = i18next.t('others')
    document.getElementById('englishLevel').innerHTML = i18next.t('englishLevel')
    document.getElementById('spanishLevel').innerHTML = i18next.t('spanishLevel')
    document.getElementById('goodCommunication').innerHTML = i18next.t('goodCommunication')
    document.getElementById('teamWork').innerHTML = i18next.t('teamWork')
    document.getElementById('adaptability').innerHTML = i18next.t('adaptability')
    // Intérêts
    document.getElementById('interestsExperiencesButton').innerHTML = i18next.t('experiencesButton')
    document.getElementById('interestsEducationButton').innerHTML = i18next.t('educationButton')
    document.getElementById('interestsSkillsButton').innerHTML = i18next.t('skillsButton')
    document.getElementById('interestsInterestsButton').innerHTML = i18next.t('interestsButton')
    document.getElementById('music').innerHTML = i18next.t('music')
    document.getElementById('gravelBike').innerHTML = i18next.t('gravelBike')
    document.getElementById('mountainBike').innerHTML = i18next.t('mountainBike')
    document.getElementById('copyright').innerHTML = i18next.t('copyright')
}

// Librairie i18next avec le dictionnaire à utiliser pour les traductions
i18next.init({
    lng: 'fr',
    debug: true,
    resources: {
      fr: {
        translation: {
            "avatarBegin": "Bonjour ! Je m'appelle",
            "avatarEnd": "et je suis",
            "avatarOccupation": "Développeuse front",
            "subTitle": "Développeuse front",
            "introductionTitle": "Présentation",
            "aboutText": "Après plusieurs années en tant que professeur de trompette et de formation musicale dans des écoles de musique en Auvergne, j'ai effectué une 1<sup>ère</sup> reconversion en tant que rédactrice technique. J'ai occupé cette fonction pendant sept ans dans des entreprises aussi bien du secteur industriel que dans l'édition de logiciels, en Auvergne et en Provence-Alpes-Côte-d'Azur. J'ai effectué une nouvelle reconversion en 2020-2021 pour devenir développeuse front-end, spécialisée en JS.",
            "identityName": "Nom",
            "identityAge": "Age",
            "identityDrivingLicense" : "Permis de conduire",
            "bCategory": "Permis B",
            "identityEmail": "E-mail",
            "identityLinks": "Liens",
            "seeLinkedIn": "Voir mon profil LinkedIn",
            "seeGitHub": "Voir mon GitHub",
            "experiencesButton": "Expériences",
            "educationButton": "Formation",
            "skillsButton": "Compétences",
            "interestsButton": "Intérêts",
            "rofimOccupationTitle": "Chargée de support et développeuse front",
            "rofimOccupationDescription": "Gestion des appels au support des patients pour le module Téléconsultation et modifications de fonctionnalités existantes",
            "twOccupationTitle": "Rédactrice technique",
            "antidotOccupationDescription": "Gestion de la documentation technique en anglais avec DITA et Author-it",
            "diginextOccupationDescription": "Rédaction d'aides en ligne (orientées tâches) de logiciels destinés aux forces armées, refonte de manuels existants selon nouvelle charte graphique, traduction technique EN->FR",
            "eatonOccupationDescription": "Gestion de la documentation multilingue et des étiquettes et mise à la charte Eaton",
            "musicSchools": "Écoles de musique",
            "musicTeachertitle": "Professeur de trompette et formation musicale",
            "musicTeacherDescription": "Enseignement individuel et collectif, direction d'ensembles",
            "since": "Depuis",
            "cornetPerfectingClass": "Perfectionnement de Cornet à pistons, en cours",
            "remote": "À distance",
            "frontEndDeveloperBachelor": "Bachelor de Développeur Front-End",
            "trumpetPerfectingClass": "Perfectionnement de Trompette à l'unanimité avec les félicitations du jury",
            "lctMaster": "Master en Langues et Communication Technique",
            "musicalStudiesDiploma": "DEM, dominante Trompette",
            "leaMaster": "Maîtrise Langues Etrangères Appliquées, option Information et Traduction Spécialisée, Anglais-Espagnol",
            "it": "Informatique",
            "others": "Autres",
            "englishLevel": "Anglais : courant",
            "spanishLevel": "Espagnol : lu, parlé, écrit",
            "goodCommunication":"Bonne communication",
            "teamWork":"Travail d'équipe",
            "adaptability": "Adaptabilité",
            "music": "Musique",
            "gravelBike": "Gravel",
            "mountainBike": "VTT",
            "copyright": "Tous droits réservés © 2021"                
        }
      },
      en: {
        translation: {
            "avatarBegin": "Hello ! My name is",
            "avatarEnd": "and I am a",
            "avatarOccupation": "Front-end developer",
            "subTitle": "Front-end Developer",
            "introductionTitle": "Introduction",
            "aboutText": "After several years teaching the trumpet and music theory in music schools in Auvergne region, I retrained a 1<sup>st</sup> in technical writing. I worked as a technical writer during seven years in companies in the industrial sector as well as in software publishing, in Auvergne and Provence-Alpes-Côte-d'Azur regions. I retrained in 2020-2021 to become a front-end developer, specialized in JS.",
            "identityName": "Name",
            "identityAge": "Age",
            "identityDrivingLicense" : "Driving Licence",
            "bCategory": "Category B",
            "identityEmail": "Email",
            "identityLinks": "Links",
            "seeLinkedIn": "See my LinkedIn profile",
            "seeGitHub": "See my GitHub",
            "experiencesButton": "Experience",
            "educationButton": "Education",
            "skillsButton": "Skills",
            "interestsButton": "Interests",
            "rofimOccupationTitle": "Customer support manager and Front-end developer",
            "rofimOccupationDescription": "Management of patients' calls to the hotline for the Teleconsultation module and existing features update",
            "twOccupationTitle": "Technical writer",
            "antidotOccupationDescription": "Management of the technical documentation in English using DITA and Author-it",
            "diginextOccupationDescription": "Writing of task-oriented online helps for software aimed at armed forces, redesign of existing manuals following the new graphical guidelines, technical EN > FR translation",
            "eatonOccupationDescription": "Management of the multilingual documentation and product labels, and redesign to Eaton graphical guidelines",
            "musicSchools": "Music schools",
            "musicTeachertitle": "Trumpet and music theory teacher",
            "musicTeacherDescription": "One-to-one and collective teaching, music ensembles direction",
            "since": "Since",
            "cornetPerfectingClass": "Perfecting class in Cornet, in progress",
            "remote": "Remote",
            "frontEndDeveloperBachelor": "Front-end Developer Bachelor",
            "trumpetPerfectingClass": "Perfecting class in Trumpet, Very Honorable with unanimous jury congratulations",
            "lctMaster": "Master's degree in Languages and Technical Communication",
            "musicalStudiesDiploma": "Musical Studies Diploma, major in Trumpet",
            "leaMaster": "Maîtrise (1st year of Master's degree) in Foreign languages applied to trade and communication, option Information and Technical Translation, English-Spanish",
            "it": "IT",
            "others": "Others",
            "englishLevel": "English: fluent",
            "spanishLevel": "Spanish: read, spoken, written",
            "goodCommunication":"Good communication",
            "teamWork":"Team work",
            "adaptability": "Adaptability",
            "music": "Music",
            "gravelBike": "Gravel",
            "mountainBike": "MTB",
            "copyright": "All rights reserved © 2021"                
        }
      }
    }
  }).then(function(t) {
    updateContent()
})

/**
 * Listener sur le bouton switchLanguageButton pour changer la langue du site
 */
switchLanguageButton.addEventListener('click', () => {
    if(lng === 'fr') {
        lng = 'en'
        i18next.changeLanguage('en')
        switchLanguageButton.innerHTML = "Français"
        updateContent()
    } else {
        lng = 'fr'
        i18next.changeLanguage('fr')
        switchLanguageButton.innerHTML = "English"
        updateContent()
    }
})

/**
 * Listener sur le bouton darkLightToggleButton pour passer de mode sombre à mode clair et inversement
 */
darkLightToggleButton.addEventListener('click', () => {
    if(colorTheme === 'light-theme') {
        colorTheme = 'dark-theme'
        bodyElement.setAttribute('class', colorTheme)
        for(let i = 0; i < tabElementsArray.length; i++) {
            tabElementsArray[i].setAttribute('class', 'tab dark-theme')
        }
        darkLightToggleButton.setAttribute('class', colorTheme)
        switchLanguageButton.setAttribute('class', colorTheme)
        darkLightToggleButton.innerHTML = "Mode clair"
        console.log(switchLanguageButton)
    } else {
        colorTheme = 'light-theme'
        bodyElement.setAttribute('class', colorTheme)
        for(let i = 0; i < tabElementsArray.length; i++) {
            tabElementsArray[i].setAttribute('class', 'tab light-theme')
        }
        darkLightToggleButton.setAttribute('class', colorTheme)
        switchLanguageButton.setAttribute('class', colorTheme)
        darkLightToggleButton.innerHTML = "Mode sombre"
        console.log(switchLanguageButton) 
    }
})

gitHubLink.addEventListener('click', (event) => {
    event.preventDefault()
    window.open("https:/github.com/cecileprezut",'_blank');
})