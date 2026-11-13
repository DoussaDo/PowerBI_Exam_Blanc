// Série 05 : TOSA Power BI, questions 01 à 14


const serie05 = [
  {
    "num": 1,
    "title": "Quel est le rôle d'une colonne clé dans le modèle de données ?",
    "type": "single",
    "options": [
      "Sécuriser l'accès aux données d'une table.",
      "Permettre la création de relations entre les tables.",
      "Autoriser la création de colonnes calculées.",
      "Attribuer un rôle aux valeurs d'une colonne.",
      "Supprimer les doublons d'une colonne."
    ],
    "answer": 1,
    "explanation": "Les colonnes clés permettent d'établir les relations entre les tables.",
    "image": "images/serie05/Q01.png",
    "full": "images/serie05/Q01.png",
    "verified": true
  },
  {
    "num": 2,
    "title": "Dans Power Query, comment afficher un 0 à la place de l'erreur dans la colonne Evolution ?",
    "type": "single",
    "options": [
      "En cliquant droit sur la colonne et en utilisant la commande Remplacer les valeurs.",
      "En cliquant droit sur la colonne et en utilisant la commande Remplacer les erreurs.",
      "En cliquant droit sur la colonne et en utilisant la commande Transformer, puis Nettoyer.",
      "En cliquant droit sur la colonne et en utilisant la commande Supprimer les erreurs.",
      "En cliquant droit sur la colonne et en utilisant la commande Renommer."
    ],
    "answer": 1,
    "explanation": "Remplacer les erreurs permet de remplacer les cellules en erreur par la valeur 0.",
    "image": "images/serie05/Q02.png",
    "full": "images/serie05/Q02.png",
    "verified": true
  },
  {
  num: 3,
  title: "Mettez dans l'ordre chronologique les actions à mener pour créer cette info-bulle personnalisée.",
  type: "dropdown",
  options: [],
  text: "Créer le visuel qui s’affichera dans l’info-bulle : {0}\nModifier les dimensions du canevas : {1}\nConfigurer la propriété « Info-bulle » du graphique en anneau : {2}\nCréer et nommer un nouvel onglet : {3}\nConfigurer le type de page sur info-bulle : {4}",
  dropdowns: [
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "4", "5"]
  ],
  answer: ["4", "3", "5", "1", "2"],
  explanation: "Ordre proposé : 1. Créer et nommer un nouvel onglet. 2. Configurer le type de page sur info-bulle. 3. Modifier les dimensions du canevas. 4. Créer le visuel qui s’affichera dans l’info-bulle. 5. Configurer la propriété « Info-bulle » du graphique en anneau.",
  image: "images/serie05/Q03.png",
  full: "images/serie05/Q03.png",
  verified: false
},
  {
    "num": 4,
    "title": "Parmi les affirmations suivantes concernant les fonctionnalités des entités dans le Service Power BI, laquelle est inexacte ?",
    "type": "single",
    "options": [
      "Un jeu de données publié permet de créer des rapports dans le Service.",
      "Il est possible de partager un rapport dans Teams.",
      "Le Service Power BI permet de générer des métriques d'utilisation des rapports.",
      "Il est possible de planifier des actualisations des jeux de données.",
      "Un rapport publié se met directement à jour quand un fichier PBIX est modifié."
    ],
    "answer": 4,
    "explanation": "Modifier un fichier PBIX local ne met pas automatiquement à jour le rapport déjà publié dans le Service.",
    "image": "images/serie05/Q04.png",
    "full": "images/serie05/Q04.png",
    "verified": true
  },
  {
    "num": 5,
    "title": "Quelles actions doivent être appliquées à cette requête dans Power Query ?",
    "type": "multiple",
    "options": [
      "Modifier le type de données des colonnes Ref transaction et Ref article.",
      "Supprimer les colonnes inutiles.",
      "Modifier le type de données des colonnes Date de création de la transaction et Date de modification de la transaction.",
      "Filtrer pour ne conserver que les lignes pertinentes pour l'analyse.",
      "Inverser les lignes."
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "La correction de la capture marque les propositions 2 et 4 comme bonnes réponses non choisies, et la proposition 3 comme bonne réponse choisie.",
    "image": "images/serie05/Q05.png",
    "full": "images/serie05/Q05.png",
    "verified": true
  },
  {
    "num": 6,
    "title": "Dans un rapport publié dans le Service, comment puis-je exporter les données d'un visuel vers Excel ?",
    "type": "single",
    "options": [
      "Je clique sur le bouton Exporter et j'utilise la commande Analyser dans Excel.",
      "Je clique sur le bouton Plus d'options du visuel et j'utilise la commande Obtenir des insights.",
      "Je clique sur le bouton Plus d'options du visuel et j'utilise la commande Exporter des données.",
      "Je clique sur le bouton Plus d'options du visuel et j'utilise la commande Afficher sous forme de table.",
      "Je clique sur le bouton Plus d'options du visuel et j'utilise la commande Partager, puis « Exporter dans Excel »."
    ],
    "answer": 2,
    "explanation": "La commande Exporter des données se trouve dans le menu Plus d'options du visuel.",
    "image": "images/serie05/Q06.png",
    "full": "images/serie05/Q06.png",
    "verified": true
  },
  {
    "num": 7,
    "title": "Quel est le rôle des flux de données dans le Service Power BI ?",
    "type": "single",
    "options": [
      "Ils permettent d'activer des filtres de confidentialité pour restreindre l'accès à certaines données.",
      "Ils servent à centraliser, transformer et nettoyer les données avant de les utiliser dans des rapports Power BI.",
      "Ils sont utilisés pour automatiser la gouvernance des jeux de données du Service Power BI.",
      "Ils déclenchent automatiquement des notifications par courrier électronique chaque fois qu'une nouvelle source de données est connectée.",
      "Ils sont principalement utilisés pour sauvegarder des copies hors ligne des rapports."
    ],
    "answer": 1,
    "explanation": "Les flux de données mutualisent les étapes de préparation des données dans le Service.",
    "image": "images/serie05/Q07.png",
    "full": "images/serie05/Q07.png",
    "verified": true
  },
  {
    "num": 8,
    "title": "Cette colonne « Nom du mois » de la table de dates affiche les mois dans l'ordre alphabétique dans les visuels. Comment peut-on la trier par ordre chronologique ?",
    "type": "single",
    "options": [
      "Dans le volet Format des visuels, définir l'ordre de tri des colonnes dans la section Propriétés de tri.",
      "Dans le menu Plus d'options des visuels, définir l'ordre de tri des colonnes dans le sous-menu Tri personnalisé.",
      "Dans l'onglet contextuel de la colonne « Nom du mois », définir l'ordre de tri des colonnes avec le bouton « Trier par colonne ».",
      "Dans l'onglet contextuel de la colonne « Nom du mois », définir l'ordre de tri des colonnes avec le bouton « Tri personnalisé ».",
      "Dans l'onglet contextuel de la table de dates, définir une hiérarchie."
    ],
    "answer": 2,
    "explanation": "Trier par colonne permet de trier le nom des mois selon une colonne de numéro de mois.",
    "image": "images/serie05/Q08.png",
    "full": "images/serie05/Q08.png",
    "verified": true
  },
  {
    "num": 9,
    "title": "Veuillez indiquer, pour chaque affirmation concernant la licence Pro de la Solution Power BI, si elle est vraie ou fausse.",
    "type": "tf",
    "options": [
      "Elle permet la création locale de rapports Power BI Report Server.",
      "Elle permet la création de visuels par IA.",
      "Elle permet la création de datamarts.",
      "Elle ne permet pas l'exploitation des pipelines de déploiement.",
      "Elle ne permet pas la mise en place de métriques."
    ],
    "answer": [
      false,
      true,
      false,
      true,
      false
    ],
    "explanation": "Réponses reproduites de la correction TOSA affichée sur la capture. Certaines fonctionnalités et licences ont évolué.",
    "image": "images/serie05/Q09.png",
    "full": "images/serie05/Q09.png",
    "verified": true
  },
  {
    "num": 10,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les options d'affichage de cette capture faite dans Power Query, si elle est vraie ou fausse.",
    "type": "tf",
    "options": [
      "L'option d'affichage « À espacement fixe » a été activée.",
      "L'option d'affichage « Barre de formule » a été activée.",
      "L'option d'affichage « Qualité de la colonne » a été activée.",
      "L'option d'affichage « Distribution des colonnes » a été activée.",
      "L'option d'affichage « Profil de colonne » a été activée."
    ],
    "answer": [
      false,
      true,
      true,
      false,
      true
    ],
    "explanation": "La quatrième réponse est affichée comme fausse dans la correction : le choix Vrai est marqué incorrect.",
    "image": "images/serie05/Q10.png",
    "full": "images/serie05/Q10.png",
    "verified": true
  },
  {
    "num": 11,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les flux de données, si elle est vraie ou fausse.",
    "type": "tf",
    "options": [
      "Un même flux de données peut être utilisé comme source de données pour plusieurs rapports publiés dans différents espaces de travail.",
      "Il est impossible d'utiliser des flux de données pour combiner des données provenant de différentes sources.",
      "Il est possible de lier des tables entre plusieurs flux de données.",
      "Un flux de données permet de programmer une actualisation incrémentielle pour ses tables.",
      "Il est impossible de programmer des actualisations planifiées pour les flux de données."
    ],
    "answer": [
      true,
      false,
      true,
      true,
      false
    ],
    "explanation": "Les flux de données permettent de réutiliser des données préparées, de combiner des sources et de planifier des actualisations, selon les capacités disponibles.",
    "image": "images/serie05/Q11.png",
    "full": "images/serie05/Q11.png",
    "verified": true
  },
  {
    "num": 12,
    "title": "Quelles sont les actions pertinentes à appliquer à la requête ci-dessus ?",
    "type": "multiple",
    "options": [
      "Filtrer les lignes où la colonne « ID » contient la valeur null pour les éliminer de l'import.",
      "Conserver la colonne « Adresse de livraison ».",
      "Supprimer la colonne « Commentaire ».",
      "Remplir vers le bas la colonne « Région ».",
      "Aucune analyse n'est requise sur la colonne « Ville », mais il est recommandé de la conserver en vue d'une éventuelle utilisation future."
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "La capture indique les propositions 1 et 3 comme bonnes réponses choisies et la proposition 4 comme bonne réponse non choisie.",
    "image": "images/serie05/Q12.png",
    "full": "images/serie05/Q12.png",
    "verified": true
  },
  {
    "num": 13,
    "title": "Veuillez indiquer, pour chaque affirmation concernant ces visuels, si elle est vraie ou fausse.",
    "type": "tf",
    "options": [
      "Le visuel 1 est un graphique en secteurs.",
      "Le visuel 2 est un graphique à barres groupées.",
      "Le visuel 2 est un graphique à barres empilées.",
      "Le visuel 3 est un histogramme groupé.",
      "Le visuel 3 est un histogramme empilé 100%."
    ],
    "answer": [
      false,
      false,
      true,
      false,
      true
    ],
    "explanation": "Le visuel 1 est un graphique en anneau ; le visuel 2 montre des barres empilées et le visuel 3 des colonnes empilées à 100 %.",
    "image": "images/serie05/Q13.png",
    "full": "images/serie05/Q13.png",
    "verified": true
  },
  {
    "num": 14,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les tableaux de bord dans le Service Power BI, si elle est vraie ou fausse.",
    "type": "tf",
    "options": [
      "Je peux commenter des visuels du tableau de bord.",
      "Je peux filtrer l'ensemble d'un tableau de bord.",
      "Je peux créer manuellement des visuels dans le tableau de bord.",
      "Je peux m'abonner au tableau de bord.",
      "Je peux ajouter des images et des vidéos sur le tableau de bord."
    ],
    "answer": [
      true,
      false,
      false,
      true,
      true
    ],
    "explanation": "Un tableau de bord rassemble des vignettes épinglées et peut inclure des médias, commentaires et abonnements ; il n'a pas le même filtrage qu'un rapport.",
    "image": "images/serie05/Q14.png",
    "full": "images/serie05/Q14.png",
    "verified": true
  },
   {
    num: 15,
    title: "Veuillez compléter l'expression DAX ci-dessous pour dénombrer les lignes de la table Articles.",
    type: "text", options: [],
    formula: "Nombre de lignes dans la table Articles = _____(ARTICLES)",
    answer: "COUNTROWS",
    explanation: "COUNTROWS(ARTICLES) renvoie le nombre de lignes de la table ARTICLES. La capture montre une saisie « 28 », qui correspond au résultat affiché, pas au nom de la fonction.",
    image: "images/serie05/Q15.png", full: "images/serie05/Q15.png", verified: false
  },
{
  num: 16,
  title: "Associez chaque réglage de segment au visuel qui lui correspond.",
  type: "matching_text",
  options: [
    "Liste verticale sélection unique",
    "Vignette",
    "Liste verticale avec option « multi sélection avec ctrl »",
    "Liste déroulante",
    "Liste verticale sans option « multi sélection avec ctrl »"
  ],
  answer: ["D", "A", "E", "B", "C"],
  explanation: "A = Vignette ; B = Liste déroulante ; C = Liste verticale sans option « multi sélection avec ctrl » ; D = Liste verticale sélection unique ; E = Liste verticale avec option « multi sélection avec ctrl ».",
  image: "images/serie05/Q16.png",
  full: "images/serie05/Q16.png",
  verified: true
},
  {
    num: 17,
    title: "Veuillez indiquer, pour chaque affirmation concernant les segments, si elle est vraie ou fausse.",
    type: "tf",
    options: [
      "Un segment peut être affiché sur plusieurs pages.",
      "La sélection d'un choix dans un segment peut impacter plusieurs pages.",
      "Il est possible de configurer une date relative pour un segment chronologique.",
      "Il est impossible de filtrer un segment pour qu'il n'affiche pas toutes les valeurs.",
      "Il est impossible d'ajouter une zone de recherche dans un segment."
    ],
    answer: [true, true, true, false, false],
    explanation: "Un segment peut être synchronisé entre plusieurs pages ; les segments de dates peuvent être relatifs ; on peut filtrer les valeurs proposées et activer une recherche.",
    image: "images/serie05/Q17.png", full: "images/serie05/Q17.png", verified: true
  },
  {
    num: 18,
    title: "Veuillez indiquer, pour chaque affirmation concernant une table de dates, si elle est vraie ou fausse.",
    type: "tf",
    options: [
      "Elle permet de faciliter les calculs de mesures basées sur des périodes.",
      "Elle permet d'assurer la cohérence des filtres et des relations temporelles dans un modèle de données.",
      "Elle permet de stocker les informations temporelles sous différents formats.",
      "Elle permet la planification des actualisations du modèle de données.",
      "Elle facilite la gestion des étapes du développement du rapport."
    ],
    answer: [true, true, true, false, false],
    explanation: "La capture présente des réponses erronées aux propositions 3 et 5 : la proposition 3 est vraie, la proposition 5 est fausse. Une table de dates sert à l'analyse temporelle, pas à planifier les actualisations.",
    image: "images/serie05/Q18.png", full: "images/serie05/Q18.png", verified: true
  },
  {
    num: 19,
    title: "Veuillez indiquer, pour chaque affirmation concernant les thèmes, si elle est vraie ou fausse.",
    type: "tf",
    options: [
      "Ils peuvent stocker les couleurs de l'entreprise.",
      "Ils peuvent paramétrer des tailles de caractères.",
      "Ils peuvent afficher des formats conditionnels.",
      "Ils peuvent configurer le format du volet filtre.",
      "Ils peuvent stocker du contenu texte."
    ],
    answer: [true, true, false, true, false],
    explanation: "Un thème définit notamment les couleurs et la typographie ainsi que certains paramètres du volet Filtres. Les réponses suivent la correction de la capture.",
    image: "images/serie05/Q19.png", full: "images/serie05/Q19.png", verified: true
  },
  {
    num: 20,
    title: "Veuillez indiquer, pour chaque affirmation concernant le comportement de ce rapport (dans un contexte standard), si elle est vraie ou fausse.",
    type: "tf",
    options: [
      "En cliquant sur la barre « Viandes » du visuel 1, les visuels 2 et 3 sont mis en surbrillance.",
      "En cliquant sur la portion « Paris » du visuel 2, les visuels 1 et 3 sont mis en surbrillance.",
      "En cliquant sur le texte « Laurent » du visuel 3, les visuels 1 et 2 ne sont pas mis en surbrillance.",
      "Il est impossible de sélectionner la barre des viandes et la barre des poissons du visuel 1.",
      "Il est impossible de sélectionner la barre des viandes du visuel 1 et le vendeur Laurent du visuel 3."
    ],
    answer: [true, true, false, false, false],
    explanation: "Les interactions entre visuels et la multisélection sont possibles dans un rapport standard. La cinquième proposition a été cochée Vrai à tort sur la capture.",
    image: "images/serie05/Q20.png", full: "images/serie05/Q20.png", verified: true
  },
  {
    num: 21,
    title: "Où dois-je cliquer pour atteindre toutes les cartes de performance dans mon Service Power BI ?",
    type: "single",
    options: [
      "Sur l'entrée Métriques / Hub de métriques dans le menu latéral.",
      "Sur l'entrée Applications.",
      "Sur l'entrée Espaces de travail.",
      "Sur le bouton Créer."
    ],
    answer: 0,
    explanation: "La capture pointe l'entrée dédiée aux métriques et cartes de performance dans le menu latéral. Question de clic sur image adaptée en QCM.",
    image: "images/serie05/Q21.png", full: "images/serie05/Q21.png", verified: false
  },
  {
    num: 22,
    title: "Veuillez indiquer, pour chaque affirmation concernant l'organisation de ce modèle de données, si elle est vraie ou fausse.",
    type: "tf",
    options: [
      "Pour créer la table « Autres mesures », j'ai cliqué sur l'onglet Modélisation, puis sur Nouvelle table.",
      "Pour modifier le pictogramme et la position de la table des ventes, j'ai masqué toutes les colonnes sauf les mesures.",
      "Pour créer le dossier « Géographie », j'ai utilisé le mode Modèle et le volet Propriétés.",
      "Pour créer la hiérarchie « Organisation » les colonnes « Agence », « Id Employé » et « Vendeur » doivent obligatoirement être masquées.",
      "Pour masquer la table Agences, j'ai désactivé son chargement depuis Power Query."
    ],
    answer: [false, true, true, false, true],
    explanation: "La première proposition est signalée incorrecte sur la capture lorsqu'elle est cochée Vrai. Les autres réponses suivent les marqueurs visibles de la correction TOSA.",
    image: "images/serie05/Q22.png", full: "images/serie05/Q22.png", verified: true
  },
  {
    num: 23,
    title: "Je veux afficher les métriques d'utilisation de ce tableau de bord. Où dois-je cliquer ?",
    type: "single",
    options: [
      "Dans Plus d'options (…) du tableau de bord, puis Ouvrir les métriques d'utilisation.",
      "Sur le bouton Partager.",
      "Sur le bouton S'abonner au tableau de bord.",
      "Sur le bouton Modifier."
    ],
    answer: 0,
    explanation: "Il faut cliquer sur les ... du tableau de bord pour accéder aux métriques d'utilisation. La capture montre le menu contextuel avec l'option correspondante.",
    image: "images/serie05/Q23.png", full: "images/serie05/Q23.png", verified: false
  },
  {
    num: 24,
    title: "Dans le Service Power BI, comment atteindre les options qui permettent de gérer le type de licence d'un espace de travail ?",
    type: "single",
    options: [
      "En cliquant sur le bouton « Gérer l'accès ».",
      "En cliquant sur les paramètres du Service Power BI puis en allant dans le volet Premium.",
      "En cliquant sur les paramètres de l'espace de travail puis en allant dans le volet Premium.",
      "En cliquant sur les paramètres du Service Power BI puis en allant dans le volet À propos de.",
      "En cliquant sur les paramètres de l'espace de travail puis en allant dans le volet À propos de."
    ],
    answer: 2,
    explanation: "Selon la capture TOSA, les paramètres de l'espace de travail, section Premium, permettent de gérer le type de licence. Les intitulés peuvent varier selon la version du Service.",
    image: "images/serie05/Q24.png", full: "images/serie05/Q24.png", verified: true
  }
];
