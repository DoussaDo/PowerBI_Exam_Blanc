// Série 04 - Examen blanc TOSA Power BI


const serie04 = [
  {
    "num": 1,
    "title": "Quel est l'objectif d'une requête faite à l'aide de Power Query dans Power BI Desktop ?",
    "options": [
      "Décrire un besoin à une source de données pour obtenir des visuels dynamiquement.",
      "Créer des graphiques interactifs à partir de plusieurs sources de données.",
      "Modifier les propriétés d'une source de données pour l'adapter à un usage spécifique.",
      "Se connecter à une source de données, la nettoyer et la transformer afin de la charger dans le modèle de données.",
      "Créer un visuel de type Questions et réponses qui utilise l'intelligence artificielle de Microsoft."
    ],
    "answer": 3,
    "explanation": "Power Query sert à connecter, préparer et transformer les données avant leur chargement.",
    "type": "single",
    "image": "images/serie04/Q01.png",
    "full": "images/serie04/Q01.png",
    "verified": true
  },
  {
    "num": 2,
    "title": "Dans cette table, quel bouton permet de créer une colonne contenant le montant ?",
    "options": [
      "Nouvelle mesure",
      "Mesure rapide",
      "Nouvelle colonne",
      "Nouvelle table"
    ],
    "answer": [
      2
    ],
    "explanation": "La commande Nouvelle colonne crée une colonne calculée DAX dans la table.",
    "type": "multiple",
    "image": "images/serie04/Q02.png",
    "full": "images/serie04/Q02.png",
    "verified": true
  },
  {
    "num": 3,
    "title": "Dans le Service Power BI, quel est le rôle d'une alerte placée dans un tableau de bord ?",
    "options": [
      "Envoyer des notifications et des e-mails aux utilisateurs lorsque des seuils prédéfinis sont atteints sur des indicateurs.",
      "Envoyer des notifications quand le jeu de données est mis à jour.",
      "Envoyer des notifications quand le rapport est modifié.",
      "Envoyer des notifications quand le tableau de bord est modifié.",
      "Envoyer des notifications quand une mise en forme conditionnelle est ajoutée."
    ],
    "answer": 0,
    "explanation": "Les alertes de données surveillent des seuils sur certains indicateurs épinglés à un tableau de bord.",
    "type": "single",
    "image": "images/serie04/Q03.png",
    "full": "images/serie04/Q03.png",
    "verified": true
  },
  {
    "num": 4,
    "title": "Comment puis-je créer un tableau de bord dans Power BI Desktop ?",
    "options": [
      "Power BI Desktop ne permet pas de créer des tableaux de bord.",
      "En épinglant les visuels à faire apparaître dans le tableau de bord.",
      "En écrivant directement le code en Python dans le mode rapport.",
      "En utilisant la commande Insérer un tableau de bord de l'onglet Accueil.",
      "En cliquant sur le bouton Tableau de bord de l'onglet Modélisation."
    ],
    "answer": 0,
    "explanation": "Les tableaux de bord sont créés dans le Service Power BI, pas dans Desktop.",
    "type": "single",
    "image": "images/serie04/Q04.png",
    "full": "images/serie04/Q04.png",
    "verified": true
  },
  {
    "num": 5,
    "title": "Je veux modifier les paramètres de l'étape appliquée « Autres colonnes supprimées ». Où dois-je cliquer ?",
    "options": [
      "Sur l'icône d'engrenage de l'étape dans Étapes appliquées.",
      "Sur la barre de formule de l'étape.",
      "Sur Fermer et appliquer.",
      "Sur le nom de la requête."
    ],
    "answer": 0,
    "explanation": "La capture demande un clic précis sur une image. Cette version propose une question équivalente à choix.",
    "type": "single",
    "image": "images/serie04/Q05.png",
    "full": "images/serie04/Q05.png",
    "verified": true
  },
  {
    "num": 6,
    "title": "Veuillez indiquer, pour chaque affirmation concernant une table de dates, si elle est vraie ou fausse.",
    "options": [
      "Elle permet de faciliter les calculs de mesures basées sur des périodes.",
      "Elle permet d'assurer la cohérence des filtres et des relations temporelles dans un modèle de données.",
      "Elle permet de stocker les informations temporelles sous différents formats.",
      "Elle permet la justification des actualisations du modèle de données.",
      "Elle facilite la gestion des objets de développement du rapport."
    ],
    "answer": [
      true,
      true,
      true,
      false,
      false
    ],
    "explanation": "Une table calendrier facilite les analyses temporelles et les relations de dates.",
    "type": "tf",
    "image": "images/serie04/Q06.png",
    "full": "images/serie04/Q06.png",
    "verified": true
  },
  {
    "num": 7,
    "title": "Cliquez sur le bouton permettant d'insérer une zone de texte libre dans le rapport.",
    "options": [
      "Zone de texte (onglet Insertion)",
      "Nouvelle mesure",
      "Nouvelle colonne",
      "Segment"
    ],
    "answer": 0,
    "explanation": "La commande Zone de texte ajoute un bloc de texte libre. L'exercice d'origine est un clic sur image",
    "type": "single",
    "image": "images/serie04/Q07.png",
    "full": "images/serie04/Q07.png",
    "verified": true
  },
  {
    "num": 8,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les fonctionnalités d'affichage du Service Power BI, si elle est vraie ou fausse.",
    "options": [
      "Je peux trier les colonnes de la liste des éléments d'un espace de travail.",
      "Je peux filtrer les rapports, les tableaux de bord et les jeux de données.",
      "La capture d'écran est un mode d'affichage de l'espace de travail.",
      "Je peux voir quels jeux de données de l'espace de travail ont été mis à jour.",
      "Je peux atteindre l'application de l'espace de travail directement dans l'espace de travail."
    ],
    "answer": [
      true,
      true,
      true,
      true,
      false
    ],
    "explanation": "Les réponses sont reconstituées à partir des coches vertes et croix rouges de la capture. Les fonctions du Service peuvent varier selon la version.",
    "type": "tf",
    "image": "images/serie04/Q08.png",
    "full": "images/serie04/Q08.png",
    "verified": true
  },
  
   {
  num: 9,
  title: "Reliez les pictogrammes de Power BI à leur rôle.",
  type: "matching_text",
  options: [
    "Une mesure",
    "Une hiérarchie",
    "Une colonne calculée",
    "Une colonne de dates d'une table de dates",
    "Une colonne avec un résumé d'agrégation"
  ],
  answer: ["B", "E", "A", "C", "D"],
  image: "images/serie04/Q09.png",
  full: "images/serie04/Q09.png",
  verified: true
},
{
  num: 10,
  title: "Complétez la mesure DAX « Evolution CA » avec une fonction de TIME INTELLIGENCE permettant de calculer le pourcentage d'évolution.",
  type: "text",
  options: [],
  formula: `Evolution CA =

VAR _CA_MOIS_PRECEDENT =
    CALCULATE(
        [CA],
        _____(Calendrier[Date], -1, MONTH)
    )

RETURN
    DIVIDE(
        [CA] - _CA_MOIS_PRECEDENT,
        _CA_MOIS_PRECEDENT
    )`,
  answer: "DATEADD",
  explanation: "DATEADD(Calendrier[Date], -1, MONTH) permet de récupérer la période du mois précédent. La fonction DIVIDE calcule ensuite le pourcentage d'évolution du chiffre d'affaires.",
  image: "images/serie04/Q10.png",
  full: "images/serie04/Q10.png",
  verified: true
},

  {
    "num": 11,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les boutons, si elle est vraie ou fausse.",
    "options": [
      "Une action peut être associée à une forme simple (rectangle, ellipse...).",
      "Un bouton a toujours une action prédéfinie associée lors de sa création.",
      "Un bouton peut servir pour naviguer dans les onglets du rapport.",
      "Un bouton ne peut pas pointer vers un site web.",
      "Un bouton peut déclencher une extraction."
    ],
    "answer": [
      true,
      false,
      true,
      false,
      true
    ],
    "explanation": "Les boutons et formes peuvent déclencher des actions configurées : navigation, URL ou autres actions selon le contexte.",
    "type": "tf",
    "image": "images/serie04/Q11.png",
    "full": "images/serie04/Q11.png",
    "verified": true
  },
  {
    "num": 12,
    "title": "Dans le Service Power BI, je dois suivre une fois par semaine l'évolution des valeurs d'un rapport. Quelle solution est la plus pertinente pour ne plus avoir à consulter ce rapport ?",
    "options": [
      "Créer un flux Power Automate qui envoie un mail hebdomadaire avec un lien vers le rapport.",
      "Configurer un abonnement hebdomadaire directement sur le rapport.",
      "Ajouter une tâche Microsoft To Do avec un rappel hebdomadaire.",
      "Configurer une alerte hebdomadaire directement sur le rapport.",
      "Ajouter un événement hebdomadaire Outlook avec un lien vers le rapport."
    ],
    "answer": 1,
    "explanation": "L'abonnement permet l'envoi régulier d'un instantané ou lien du rapport selon les paramètres disponibles.",
    "type": "single",
    "image": "images/serie04/Q12.png",
    "full": "images/serie04/Q12.png",
    "verified": true
  },
  {
    "num": 13,
    "title": "J'ai commencé un modèle de données sous Excel avec des mesures DAX. Comment puis-je importer mon travail réalisé dans Excel dans un projet Power BI ?",
    "options": [
      "Dans Power BI Desktop, utiliser le menu Fichier puis Importer.",
      "Dans Power BI Desktop, importer les données à partir d'Excel comme ceci.",
      "Installer un outil externe pour faire la migration.",
      "Dans le Service Power BI, utiliser Charger puis Parcourir.",
      "Dans le Service Power BI, utiliser un flux de données."
    ],
    "answer": 0,
    "explanation": "Power BI Desktop propose l'import d'un classeur Excel contenant un modèle Power Pivot. Le libellé exact dépend de la version.",
    "type": "single",
    "image": "images/serie04/Q13.png",
    "full": "images/serie04/Q13.png",
    "verified": true
  },

{
  num: 14,
  title: "Comment formater une colonne numérique en monétaire pour que le format soit automatiquement appliqué dans les visualisations ?",
  type: "dropdown",
  text: "Après avoir sélectionné la colonne à formater, il faut passer par l'onglet contextuel {0} et choisir {1} dans la zone {2}.",
  dropdowns: [
    ["Outils de colonne", "Outils de mesure", "Modélisation", "Affichage"],
    ['le format "Devise"', 'le format "Texte"', 'le format "Pourcentage"', 'le format "Nombre entier"'],
    ["Mise en forme", "Propriétés", "Filtres", "Données"]
  ],
  answer: [
    "Outils de colonne",
    'le format "Devise"',
    "Mise en forme"
  ],
  explanation: "Le format monétaire se définit au niveau de la colonne, dans Outils de colonne > Mise en forme > Devise.",
  image: "images/serie04/Q14.png",
  full: "images/serie04/Q14.png",
  verified: true
},

  {
    "num": 15,
    "title": "Dans un rapport publié dans le Service, comment exporter les données d'un visuel vers Excel ?",
    "options": [
      "Cliquer sur Exporter puis Analyser dans Excel.",
      "Cliquer sur Plus d'options du visuel puis Obtenir des insights.",
      "Cliquer sur Plus d'options du visuel puis Exporter des données.",
      "Cliquer sur Plus d'options du visuel puis Afficher sous forme de table.",
      "Cliquer sur Plus d'options du visuel puis Partager."
    ],
    "answer": 2,
    "explanation": "Le menu Plus d'options (…) du visuel donne accès à Exporter des données, si autorisé.",
    "type": "single",
    "image": "images/serie04/Q15.png",
    "full": "images/serie04/Q15.png",
    "verified": true
  },
  {
    "num": 16,
    "title": "Quel est le rôle des métriques dans le Service Power BI ?",
    "options": [
      "Organiser et suivre des indicateurs regroupés par tableau.",
      "Créer des visualisations affichant les actualisations des jeux de données.",
      "Filtrer simultanément les données sur plusieurs espaces de travail.",
      "Gérer les autorisations d'accès aux rapports.",
      "Analyser les usages des rapports dans le Service Power BI."
    ],
    "answer": 0,
    "explanation": "Les métriques (objectifs/scorecards selon la version) permettent de suivre des indicateurs et leur progression.",
    "type": "single",
    "image": "images/serie04/Q16.png",
    "full": "images/serie04/Q16.png",
    "verified": true
  },
  {
    "num": 17,
    "title": "Veuillez indiquer, pour chaque affirmation concernant l'utilisation de Power BI, si elle est vraie ou fausse.",
    "options": [
      "Pour ouvrir un fichier PBIX, j'utilise le menu Fichier, puis Ouvrir, puis Parcourir cet appareil.",
      "Pour dupliquer une page de rapport, j'utilise le clic droit sur l'onglet de la page concernée.",
      "Pour enregistrer un rapport au format PBIX, j'utilise le menu Fichier de Power BI Desktop et je clique sur Publier.",
      "Pour afficher les relations du rapport, j'utilise le mode Vue de données.",
      "Il est impossible de créer un rapport dans le Service Power BI."
    ],
    "answer": [
      true,
      true,
      false,
      false,
      false
    ],
    "explanation": "Un PBIX s'ouvre depuis Fichier; les relations sont dans la vue Modèle. On peut aussi créer des rapports dans le Service.",
    "type": "tf",
    "image": "images/serie04/Q17.png",
    "full": "images/serie04/Q17.png",
    "verified": true
  },

{
  num: 18,
  title: "La colonne des quantités est nommée QT et la table qui l'héberge s'intitule VENTES. Quelle est la formule pour créer une mesure réalisant le total des quantités ?",
  type: "text",
  prefix: "TOTAL =",
  options: [],
  answer: [
    "SUM(VENTES[QT])",
    "SUM ( VENTES[QT] )"
  ],
  explanation: "La fonction SUM additionne les valeurs de la colonne QT de la table VENTES.",
  image: "images/serie04/Q18.png",
  full: "images/serie04/Q18.png",
  verified: true
},

  {
    "num": 19,
    "title": "Je désire afficher l'onglet « Détails produits » filtré sur la catégorie « Poissons ». Quelle commande vais-je utiliser ?",
    "options": [
      "Analyser",
      "Inclure",
      "Traiter",
      "Extraire",
      "Filtrer"
    ],
    "answer": 3,
    "explanation": "La commande Extraire (drillthrough) ouvre une page de détail en transmettant le filtre sur la catégorie sélectionnée.",
    "type": "single",
    "image": "images/serie04/Q19.png",
    "full": "images/serie04/Q19.png",
    "verified": true
  },
  {
    "num": 20,
    "title": "Veuillez indiquer, pour chaque affirmation concernant l'actualisation des jeux de données dans le Service Power BI, si elle est vraie ou fausse.",
    "options": [
      "Il est possible de planifier plusieurs actualisations quotidiennes.",
      "Les mises à jour ne peuvent être programmées qu'aux heures et demi-heures, excluant tout autre horaire.",
      "Il est possible de ne sélectionner que certains jours de la semaine pour déclencher des actualisations.",
      "Il est possible de sélectionner des dates spécifiques pour déclencher des actualisations.",
      "Seul le propriétaire du jeu de données peut être averti en cas d'échec de l'actualisation."
    ],
    "answer": [
      true,
      true,
      true,
      false,
      false
    ],
    "explanation": "Réponses tirées de la correction affichée sur la capture du test. Les contraintes de programmation peuvent évoluer avec le Service.",
    "type": "tf",
    "image": "images/serie04/Q20.png",
    "full": "images/serie04/Q20.png",
    "verified": true
  },

{
  num: 21,
  title: "À partir de ce modèle de données, veuillez indiquer si les affirmations concernant la propriété « Direction du filtrage croisé » de ces relations sont vraies ou fausses.",
  type: "tf",
  options: [
    "La propagation des filtres de la table « Clients » vers la table « Ventes » est possible.",
    "La propagation des filtres de la table « Produits » vers la table « Ventes » est possible.",
    "La propagation des filtres de la table « Clients » vers la table « Produits » est possible.",
    "La propagation des filtres de la table « Produits » vers la table « Clients » est possible.",
    "La propagation des filtres de la table « Ventes » vers les tables « Clients » et « Produits » est possible."
  ],
  answer: [
    true,
    true,
    false,
    false,
    false
  ],
  explanation: "Les relations sont de type un-à-plusieurs (1:*), avec un filtrage à sens unique des tables de dimension vers la table de faits. Clients et Produits peuvent filtrer Ventes, mais Ventes ne filtre pas les dimensions en retour. Les filtres ne se propagent pas non plus de Clients vers Produits, ni inversement.",
  image: "images/serie04/Q21.png",
  full: "images/serie04/Q21.png",
  verified: true
},

  {
    "num": 22,
    "title": "Complétez l'expression pour calculer NB ABSENCES pour le service PRODUCTION : NB ABSENCES PRODUCTION = XXXXX([NB ABSENCES], COLLABORATEURS[SERVICE] = \"PRODUCTION\")",
    "options": [],
    "formula": "NB ABSENCES PRODUCTION = _____([NB ABSENCES], COLLABORATEURS[SERVICE] = \"PRODUCTION\")",
    "answer": "CALCULATE",
    "explanation": "CALCULATE([NB ABSENCES], COLLABORATEURS[SERVICE] = \"PRODUCTION\") évalue la mesure sous le filtre du service Production.",
    "type": "text",
    "image": "images/serie04/Q22.png",
    "full": "images/serie04/Q22.png",
    "verified": true
  },
  {
    "num": 23,
    "title": "Veuillez indiquer, pour chaque affirmation concernant le volet Filtres d'un rapport, si elle est vraie ou fausse.",
    "options": [
      "Il est possible de filtrer un champ date sur une période fixe.",
      "Il est impossible de filtrer un champ date sur une période relative.",
      "Il est possible de filtrer un champ numérique avec une expression de type « est supérieur ou égal », « est inférieur ou égal ».",
      "Il est impossible de filtrer un champ texte avec une expression de type « contient », « ne contient pas ».",
      "Il est possible de filtrer un champ de visuel sur ses valeurs les plus élevées."
    ],
    "answer": [
      true,
      false,
      true,
      false,
      true
    ],
    "explanation": "Le volet Filtres prend en charge dates, comparaisons numériques, filtres textuels et Top N.",
    "type": "tf",
    "image": "images/serie04/Q23.png",
    "full": "images/serie04/Q23.png",
    "verified": true
  },
  {
    "num": 24,
    "title": "Je veux paramétrer l'envoi régulier de ce rapport par mail. Où dois-je cliquer ?",
    "options": [
      "Partager",
      "Exporter",
      "S'abonner au rapport",
      "Modifier",
      "Créer des insights"
    ],
    "answer": 2,
    "explanation": "La commande S'abonner au rapport configure des envois périodiques. L'original est une question de clic sur image, adaptée en QCM.",
    "type": "single",
    "image": "images/serie04/Q24.png",
    "full": "images/serie04/Q24.png",
    "verified": true
  },
  {
    "num": 25,
    "title": "À quel type de visuel correspond le visuel 4 de cette capture d'écran ?",
    "options": [
      "Influenceurs clés",
      "Arborescence de décomposition",
      "Questions et réponses",
      "Narration intelligente",
      "Visuel Python"
    ],
    "answer": 2,
    "explanation": "Le visuel 4 est un visuel Questions et réponses : on voit une barre de saisie en langage naturel au-dessus du résultat.",
    "type": "single",
    "image": "images/serie04/Q25.png",
    "full": "images/serie04/Q25.png",
    "verified": true
  }
];
