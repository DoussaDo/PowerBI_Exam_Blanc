// Questions et commentaires modifiables
const serie01 = [
  // QUESTION 01
  {
    "num": 1,
    "title": "Comment se nomme le langage de formules dans Power Query ?",
    "options": [
      "Le langage C",
      "Le langage M",
      "Le langage R",
      "Le langage JSON",
      "Le langage Javascript"
    ],
    "answer": 1,
    "explanation": "Le langage M est le langage de formules de Power Query. DAX sert plutôt aux mesures et colonnes calculées du modèle Power BI.",
    "type": "single",
    "image": "images/serie01/Q01.png",
    "full": "images/serie01/Q01.png",
    "verified": true
  },

  // QUESTION 02
  {
    "num": 2,
    "title": "Comment se nomme la fenêtre qui affiche le langage M de la requête ?",
    "options": [
      "L’éditeur avancé",
      "L’éditeur de requêtes",
      "Le Studio M",
      "Le Studio de requêtes",
      "Git M"
    ],
    "answer": 0,
    "explanation": "L’Éditeur avancé affiche et permet de modifier le script M complet de la requête, composé d’étapes de transformation.",
    "type": "single",
    "image": "images/serie01/Q02.png",
    "full": "images/serie01/Q02.png",
    "verified": true
  },

  // QUESTION 03
  {
    "num": 3,
    "title": "Quel est le contenu de l’étiquette du visuel en anneau ?",
    "options": [
      "Pourcentage du total",
      "Catégorie, valeur des données",
      "Catégorie, pourcentage du total",
      "Valeur des données, pourcentage du total",
      "Toutes les étiquettes détaillées"
    ],
    "answer": 2,
    "explanation": "Les étiquettes affichent la catégorie (ville) et le pourcentage du total, par exemple Paris 27,96 %. Elles n’affichent pas la valeur brute.",
    "type": "single",
    "image": "images/serie01/Q03.png",
    "full": "images/serie01/Q03.png",
    "verified": true
  },

  // QUESTION 04
  {
    "num": 4,
    "title": "Quel est le rôle des métriques dans le Service Power BI ?",
    "options": [
      "Organiser et suivre des indicateurs regroupés par tableau",
      "Créer des visualisations affichant les actualisations des jeux de données",
      "Filtrer simultanément plusieurs espaces de travail",
      "Gérer les autorisations d’accès",
      "Analyser les usages des rapports"
    ],
    "answer": 0,
    "explanation": "Les métriques (objectifs) servent à organiser, suivre et comparer des indicateurs clés, leurs cibles et leur progression.",
    "type": "single",
    "image": "images/serie01/Q04.png",
    "full": "images/serie01/Q04.png",
    "verified": true
  },

  // QUESTION 05
  {
    "num": 5,
    "title": "Quels sont les types de licences de Microsoft Power BI ?",
    "options": [
      "Il n’y a pas de licence, tout est gratuit",
      "Accès gratuit aux fonctions de base et accès payant aux fonctions complémentaires",
      "Chaque outil exige un achat définitif",
      "Des outils gratuits, mais un abonnement est nécessaire pour certains usages collaboratifs",
      "Tous les outils deviennent payants après essai"
    ],
    "answer": 3,
    "explanation": "Power BI propose des fonctionnalités gratuites et des licences payantes pour la publication, le partage et la collaboration. Le niveau de licence dépend de l’usage.",
    "type": "single",
    "image": "images/serie01/Q05.png",
    "full": "images/serie01/Q05.png",
    "verified": true
  },

  // QUESTION 06
  {
    "num": 6,
    "title": "Complétez la mesure DAX « Evolution CA » avec une fonction de TIME INTELLIGENCE permettant de réaliser ce pourcentage d’évolution. Evolution CA = VAR _CA_MOIS_PRECEDENT = CALCULATE ( [CA], XXXXXXXXXXX( Calendrier[Date], -1, MONTH ) ) RETURN DIVIDE ( [CA] - _CA_MOIS_PRECEDENT, _CA_MOIS_PRECEDENT )",
    "options": [
      "DATEADD",
      "DATESYTD",
      "SAMEPERIODLASTYEAR",
      "TOTALYTD",
      "ALL"
    ],
    "answer": 0,
    "explanation": "DATEADD(Calendrier[Date], -1, MONTH) récupère la période du mois précédent. On calcule ensuite ([CA] − CA du mois précédent) / CA du mois précédent. Par exemple, passer de 100 à 120 correspond à +20 %.",
    "type": "single",
    "image": "images/serie01/Q06.png",
    "full": "images/serie01/Q06.png",
    "verified": true
  },

  // QUESTION 07
  {
    "num": 7,
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
    "explanation": "Une forme peut recevoir une action (1 : Vrai). Un bouton ne possède pas nécessairement une action déjà configurée (2 : Faux). La navigation entre pages est possible (3 : Vrai), tout comme un lien Web (4 : Faux). Une action peut aussi déclencher une extraction / exploration détaillée selon la configuration (5 : Vrai).",
    "type": "tf",
    "image": "images/serie01/Q07.png",
    "full": "images/serie01/Q07.png",
    "verified": true
  },

  // QUESTION 08
  {
    "num": 8,
    "title": "Pour créer rapidement un rapport depuis un fichier Excel sur OneDrive, quelle action effectuer d’abord ?",
    "options": [
      "Nouveau → Rapport",
      "Nouveau → Rapport paginé",
      "Nouveau → Tableau de bord",
      "Nouveau → Jeu de données",
      "Nouveau → Jeu de données de streaming"
    ],
    "answer": 3,
    "explanation": "Dans l’interface représentée, « Nouveau → Jeu de données » permet d’importer le fichier Excel pour créer ensuite un rapport. Les intitulés ont évolué dans les versions récentes.",
    "type": "single",
    "image": "images/serie01/Q08.png",
    "full": "images/serie01/Q08.png",
    "verified": true
  },

  // QUESTION 09
  {
    "num": 9,
    "title": "Ce modèle de données est appelé un modèle en…",
    "options": [
      "Étoile",
      "Flocon",
      "Constellation",
      "Chaîne"
    ],
    "answer": 1,
    "explanation": "C’est un modèle en flocon : certaines dimensions sont normalisées et reliées à d’autres dimensions, plutôt que toutes directement à la table de faits.",
    "type": "single",
    "image": "images/serie01/Q09.png",
    "full": "images/serie01/Q09.png",
    "verified": true
  },

  // QUESTION 10
  {
    "num": 10,
    "title": "Complétez la mesure DAX « TOTAL QUANTITE SANS FILTRE » pour que le ratio « RATIO TOTAL QUANTITE » puisse être calculé. La mesure « TOTAL QUANTITE SANS FILTRE » calcule le TOTAL et n’est pas impactée par le contexte de filtre.\n\nTOTAL QUANTITE SANS FILTRE = XXXXXXX ([CA], XXXXXX (VENTES))",
    "options": [
      "CALCULATE et ALL",
      "SUM et ALL",
      "CALCULATE et FILTER",
      "DIVIDE et ALL"
    ],
    "answer": 0,
    "explanation": "La formule attendue est CALCULATE([CA], ALL(VENTES)). CALCULATE réévalue [CA] dans un contexte de filtre modifié ; ALL(VENTES) retire les filtres de VENTES. Le dénominateur reste ainsi global pour calculer la part de chaque pays. Attention : l’intitulé parle de quantité, mais la formule fournie utilise bien [CA].",
    "type": "single",
    "image": "images/serie01/Q10.png",
    "full": "images/serie01/Q10.png",
    "verified": true
  },

  // QUESTION 11
  {
    "num": 11,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les visuels Questions et réponses, si elle est vraie ou fausse.",
    "options": [
      "Ils permettent aux utilisateurs d’interagir avec les données en posant des questions en langage naturel, et d’obtenir des réponses sous forme de graphiques et de tableaux dynamiques.",
      "Ils peuvent être exploités en langage naturel français.",
      "Pour les utiliser, il faut configurer un modèle de données avec des relations entre les tables et des mesures calculées pour répondre aux questions posées par les utilisateurs.",
      "Ils sont limités aux seules questions qui peuvent être répondues par des graphiques linéaires, tels que les graphiques à barres et les graphiques linéaires.",
      "Ils peuvent être personnalisés en modifiant les options d’affichage, les couleurs, les types de graphiques utilisés pour répondre aux questions, et en ajoutant des filtres pour explorer les données plus en profondeur."
    ],
    "answer": [
      true,
      false,
      true,
      false,
      true
    ],
    "explanation": "Le visuel Q&A interprète des questions en langage naturel (1 : Vrai). Le français n’était pas pris en charge dans le contexte de cette question (2 : Faux). Un modèle de données bien structuré facilite les réponses, même si toutes les relations et mesures ne sont pas strictement obligatoires (3 : réponse attendue Vrai dans ce quiz). Les réponses ne se limitent pas aux graphiques linéaires (4 : Faux) et le visuel est personnalisable (5 : Vrai).",
    "type": "tf",
    "image": "images/serie01/Q11.png",
    "full": "images/serie01/Q11.png",
    "verified": true
  },

  // QUESTION 12
  {
    "num": 12,
    "title": "Concernant les abonnements dans Power BI Service, indique Vrai ou Faux.",
    "options": [
      "Je peux m’abonner à un rapport.",
      "Je ne peux pas m’abonner à un tableau de bord.",
      "Je peux m’abonner à un jeu de données.",
      "Pour voir tous les abonnements d’un espace de travail, je vais dans les notifications.",
      "Je peux créer plusieurs abonnements pour un même élément."
    ],
    "answer": [
      true,
      false,
      false,
      true,
      false
    ],
    "explanation": "Un abonnement peut envoyer périodiquement une vue d’un rapport (1 : Vrai). Les tableaux de bord peuvent également être concernés (2 : Faux). L’abonnement ne s’applique pas directement à un jeu de données comme à un rapport (3 : Faux). Les notifications permettent de consulter des abonnements dans le contexte de ce quiz (4 : Vrai). La dernière affirmation est considérée fausse dans ce corrigé historique (5 : Faux).",
    "type": "tf",
    "image": "images/serie01/Q12.png",
    "full": "images/serie01/Q12.png",
    "verified": true
  },

  // QUESTION 13
  {
    "num": 13,
    "title": "Comment ajouter les vignettes désépinglées à la disposition mobile d’un tableau de bord ?",
    "options": [
      "Dans le volet « Vignettes désépinglées », je fais un clic droit sur la vignette et utilise la commande Épingler.",
      "Je fais directement glisser la vignette depuis le volet « Vignettes désépinglées » dans la vue du mobile.",
      "Dans le volet « Vignettes désépinglées », je clique sur le pictogramme en forme d’épingle en haut à droite de la vignette.",
      "Dans la zone « Modifier la disposition pour appareils mobiles », je double-clique sur le mobile et choisis la vignette à ajouter.",
      "Dans la zone « Modifier la disposition pour appareils mobiles », je fais un clic droit sur le mobile et coche les vignettes à épingler."
    ],
    "answer": 2,
    "explanation": "Dans « Vignettes désépinglées », l’icône d’épingle située en haut à droite d’une vignette permet de l’ajouter à la disposition mobile.",
    "type": "single",
    "image": "images/serie01/Q13.png",
    "full": "images/serie01/Q13.png",
    "verified": true
  },

  // QUESTION 14
  {
    "num": 14,
    "title": "Concernant Mon espace de travail dans Power BI Service, indique Vrai ou Faux.",
    "options": [
      "Il a pour vocation le partage de rapports dont je suis le créateur.",
      "Il est utilisé pour des projets d’équipe dont je suis responsable.",
      "C’est le bac à sable personnel de chaque utilisateur pour créer du contenu.",
      "Il contient des jeux de données généralement privés qui ne sont pas destinés à être partagés.",
      "Il ne nécessite aucune licence payante."
    ],
    "answer": [
      false,
      false,
      true,
      true,
      true
    ],
    "explanation": "« Mon espace de travail » est un espace personnel pour préparer et tester des contenus, et non un espace de collaboration d’équipe. Il peut héberger des jeux de données privés. Un usage personnel est possible sans licence Pro, sous réserve des fonctionnalités utilisées.",
    "type": "tf",
    "image": "images/serie01/Q14.png",
    "full": "images/serie01/Q14.png",
    "verified": true
  },

  // QUESTION 15
  {
    "num": 15,
    "title": "Quelle fonction DAX applique les valeurs de OBJAgences[Agences] comme filtres sur Vendeurs[Agences] ?",
    "options": [
      "TREATAS",
      "RELATED",
      "USERELATIONSHIP",
      "VALUES",
      "LOOKUPVALUE"
    ],
    "answer": 0,
    "explanation": "TREATAS transfère les valeurs d’une colonne vers une autre colonne comme filtre, même lorsqu’il n’existe pas de relation physique entre les tables.",
    "type": "single",
    "image": "images/serie01/Q15.png",
    "full": "images/serie01/Q15.png",
    "verified": true
  },

  // QUESTION 16
  {
    "num": 16,
    "title": "Concernant les interactions du VISUEL 3, indique Vrai ou Faux.",
    "options": [
      "Cliquer sur France dans VISUEL 3 met en surbrillance VISUEL 2.",
      "Cliquer sur France dans VISUEL 3 met en surbrillance VISUEL 4.",
      "Cliquer sur France dans VISUEL 3 n’impacte pas VISUEL 1.",
      "Cliquer sur France dans VISUEL 3 filtre VISUEL 5.",
      "Cliquer sur France dans VISUEL 3 met en surbrillance VISUEL 6."
    ],
    "answer": [
      true,
      false,
      true,
      true,
      false
    ],
    "explanation": "Les interactions sont définies visuel par visuel : surbrillance pour VISUEL 2 (1 : Vrai), pas pour VISUEL 4 (2 : Faux), aucune interaction sur VISUEL 1 (3 : Vrai), filtrage de VISUEL 5 (4 : Vrai), pas de surbrillance sur VISUEL 6 (5 : Faux).",
    "type": "tf",
    "image": "images/serie01/Q16.png",
    "full": "images/serie01/Q16.png",
    "verified": true
  },

  // QUESTION 17
  {
    "num": 17,
    "title": "Je souhaite utiliser un outil externe à la solution Power BI afin de pouvoir créer des Calculation Group et gérer l’OLS. Quel outil externe puis-je utiliser ?",
    "options": [
      "Tabular Master",
      "Tabular Studio",
      "Tabular Editor",
      "Tabular Profiler",
      "Tabular Sculpter"
    ],
    "answer": 2,
    "explanation": "Tabular Editor permet de créer et de modifier des Calculation Groups, ainsi que de gérer la sécurité au niveau des objets (OLS, Object-Level Security) dans un modèle tabulaire.",
    "type": "single",
    "image": "images/serie01/Q17.png",
    "full": "images/serie01/Q17.png",
    "verified": true
  },

  // QUESTION 18
  {
    "num": 18,
    "title": "Dans mon rapport, j’ai créé un groupe de calcul (Calculation group) pour permettre à mes calculs de Time Intelligence de travailler sur la mesure de mon choix. Choisissez le nom de la fonction floutée dans les 3 expressions DAX de la capture ci-dessus.",
    "options": [
      "SELECTEDVALUE",
      "SELECTEDMEASURE",
      "CALCULATE",
      "USERELATIONSHIP"
    ],
    "answer": 1,
    "explanation": "SELECTEDMEASURE() renvoie la mesure active dans le contexte d’un élément de groupe de calcul. On peut ainsi appliquer TotalYTD ou SAMEPERIODLASTYEAR à différentes mesures sans dupliquer les calculs.",
    "type": "single",
    "image": "images/serie01/Q18.png",
    "full": "images/serie01/Q18.png",
    "verified": true
  },

  // QUESTION 19
  {
    "num": 19,
    "title": "Concernant les visuels Power Platform, indique Vrai ou Faux.",
    "options": [
      "Power Apps permet de créer des applications sans code, et Power Automate automatise les flux de travail.",
      "Power Apps permet de créer des modèles de données et Power Automate génère des rapports.",
      "Power Apps permet de compléter les données sources d’un rapport Power BI.",
      "Power Automate peut déclencher un flux par commandes vocales.",
      "Power Automate permet de déclencher des actualisations à intervalles réguliers."
    ],
    "answer": [
      true,
      false,
      true,
      false,
      true
    ],
    "explanation": "Power Apps sert à créer des applications et des formulaires, Power Automate à automatiser des processus. Un visuel Power Apps peut faciliter la saisie ou la mise à jour de données. Des flux peuvent être déclenchés par des événements et planifiés régulièrement.",
    "type": "tf",
    "image": "images/serie01/Q19.png",
    "full": "images/serie01/Q19.png",
    "verified": true
  },

  // QUESTION 20
  {
    "num": 20,
    "title": "Concernant les applications dans Power BI Service, indique Vrai ou Faux.",
    "options": [
      "Un espace de travail peut contenir plusieurs applications.",
      "Une application peut contenir plusieurs tableaux de bord.",
      "Une application peut pointer vers plusieurs rapports.",
      "Une application peut afficher un contenu approprié à diverses audiences.",
      "Une application ne peut pas pointer vers un rapport situé dans un autre espace de travail."
    ],
    "answer": [
      false,
      true,
      true,
      true,
      true
    ],
    "explanation": "Une application Power BI peut rassembler plusieurs rapports et tableaux de bord et présenter des contenus adaptés aux audiences. Un espace de travail ne publie normalement qu’une application, même si elle peut être mise à jour.",
    "type": "tf",
    "image": "images/serie01/Q20.png",
    "full": "images/serie01/Q20.png",
    "verified": true
  },

  // QUESTION 21
  {
    "num": 21,
    "title": "Concernant la licence Power BI Pro, indique Vrai ou Faux.",
    "options": [
      "Elle permet la création locale de rapports Power BI Report Server.",
      "Elle permet la création de visuels par IA.",
      "Elle permet la création de datamarts.",
      "Elle ne permet pas l’exploitation des pipelines de déploiement.",
      "Elle ne permet pas la mise en place de métriques."
    ],
    "answer": [
      false,
      true,
      false,
      true,
      false
    ],
    "explanation": "Power BI Pro donne accès à plusieurs fonctionnalités de création et de partage. La création locale de rapports Report Server dépend d’autres conditions de licence. Les capacités liées aux datamarts et aux pipelines dépendent de la version et des droits disponibles.",
    "type": "tf",
    "image": "images/serie01/Q21.png",
    "full": "images/serie01/Q21.png",
    "verified": true
  },

  // QUESTION 22
  {
    "num": 22,
    "title": "La mesure « CA » calcule le chiffre d’affaires. Dans cette capture, il s’affiche pour chaque mois de l’année 2019. Complétez la mesure DAX « CUMUL ANNUEL » avec une fonction de TIME INTELLIGENCE permettant le cumul annuel de la mesure « CA » mois après mois.\n\nCUMUL ANNUEL = XXXXXXX ([CA],Calendrier[Date])",
    "options": [
      "TOTALYTD",
      "DATEADD",
      "SAMEPERIODLASTYEAR",
      "DATESINPERIOD"
    ],
    "answer": 0,
    "explanation": "TOTALYTD([CA], Calendrier[Date]) calcule le chiffre d’affaires cumulé depuis le début de l’année jusqu’à la date courante. Le cumul repart de zéro à chaque nouvelle année.",
    "type": "single",
    "image": "images/serie01/Q22.png",
    "full": "images/serie01/Q22.png",
    "verified": true
  },

  // QUESTION 23
  {
    "num": 23,
    "title": "Dans ce rapport, aucun visuel n’est sélectionné. Quelles possibilités de filtrage offre-t-il ?",
    "options": [
      "Je ne peux filtrer que sur les dates dans cette page.",
      "Je peux filtrer sur les dates et sur les agences uniquement dans cette page.",
      "Je peux filtrer sur les dates sur toutes les pages du rapport et sur les agences sur toutes les pages du rapport.",
      "Je peux filtrer sur les agences dans cette page et sur les dates sur toutes les pages.",
      "Je peux filtrer sur les dates dans cette page et sur les agences sur toutes les pages du rapport."
    ],
    "answer": 4,
    "explanation": "Le volet Filtres distingue les filtres de cette page et ceux de toutes les pages : Date est limitée à la page actuelle, tandis que Agences agit sur tout le rapport.",
    "type": "single",
    "image": "images/serie01/Q23.png",
    "full": "images/serie01/Q23.png",
    "verified": true
  },

  // QUESTION 24
  {
    "num": 24,
    "title": "Où faut-il cliquer dans Power Query pour afficher la zone encadrée en bleu ?",
    "options": [
      "Onglet Afficher → Vue du diagramme",
      "Accueil → Éditeur avancé",
      "Transformer → Type de données",
      "Affichage → Volet des requêtes"
    ],
    "answer": 0,
    "explanation": "Il faut cliquer sur « Afficher » dans Power Query pour accéder à la vue du diagramme des étapes, visible dans la zone bleue.",
    "type": "single",
    "image": "images/serie01/Q24.png",
    "full": "images/serie01/Q24.png",
    "verified": true
  },

  // QUESTION 25
  {
    "num": 25,
    "title": "Dans le Service Power BI, comment atteindre les options qui permettent de gérer le type de licence d’un espace de travail ?",
    "options": [
      "En cliquant sur le bouton « Gérer l’accès ».",
      "En cliquant sur les paramètres du Service Power BI puis en allant dans le volet Premium.",
      "En cliquant sur les paramètres de l’espace de travail puis en allant dans le volet Premium.",
      "En cliquant sur les paramètres du Service Power BI puis en allant dans le volet À propos de.",
      "En cliquant sur les paramètres de l’espace de travail puis en allant dans le volet À propos de."
    ],
    "answer": 2,
    "explanation": "La configuration de capacité et de licence dépend de l’espace de travail : on ouvre ses paramètres, puis la rubrique Premium dans l’interface présentée. Ce réglage ne se trouve pas dans « Gérer l’accès », qui sert aux autorisations.",
    "type": "single",
    "image": "images/serie01/Q25.png",
    "full": "images/serie01/Q25.png",
    "verified": true
  }

];