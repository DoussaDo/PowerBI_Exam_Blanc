// Série 02 : Examen blanc TOSA Power BI
// Les exercices interactifs sont adaptés au format QCM/Vrai-Faux.
// 
const serie02 = [
  // QUESTION 01
  {
    "num": 1,
    "title": "Voici un modèle de données de type « Schéma en étoile ». Quel type de table se trouve au centre du modèle ?",
    "options": [
      "Une table de dimensions.",
      "Une table de faits.",
      "Une table calculée.",
      "Une table de paramètres.",
      "Une table de filtres."
    ],
    "answer": 1,
    "explanation": "Dans un schéma en étoile, la table de faits est au centre et est reliée aux tables de dimensions.",
    "type": "single",
    "image": "images/serie02/Q01.png",
    "full": "images/serie02/Q01.png",
    "verified": true
  },
  // QUESTION 02
  {
    "num": 2,
    "title": "Quel outil d’audit ai-je activé pour afficher cette zone encadrée en bleu ?",
    "options": [
      "Profil de la colonne",
      "Qualité de la colonne",
      "L’éditeur avancé",
      "Paramètres de la source de données",
      "Vision"
    ],
    "answer": 0,
    "explanation": "Dans Power Query, le profil de colonne affiche notamment la distribution et les statistiques des valeurs.",
    "type": "single",
    "image": "images/serie02/Q02.png",
    "full": "images/serie02/Q02.png",
    "verified": true
  },
  // QUESTION 03
  {
    "num": 3,
    "title": "Comment se nomme le mode activé dans le visuel ?",
    "options": [
      "Exportation",
      "Focus",
      "Exploration",
      "Concentration",
      "Isolé"
    ],
    "answer": 2,
    "explanation": "Le mode d’exploration (drill) permet de naviguer dans les niveaux d’une hiérarchie directement depuis un visuel.",
    "type": "single",
    "image": "images/serie02/Q03.png",
    "full": "images/serie02/Q03.png",
    "verified": true
  },
  // QUESTION 04
  {
    "num": 4,
    "title": "Dans un espace de travail, au moment de rajouter un collaborateur, je lui attribue un rôle. Quel rôle n’existe pas ?",
    "options": [
      "Administrateur",
      "Membre",
      "Analyste",
      "Collaborateur",
      "Visionneuse"
    ],
    "answer": 2,
    "explanation": "Les rôles d’espace de travail comprennent notamment Administrateur, Membre, Contributeur et Visionneuse. « Analyste » n’est pas un rôle standard.",
    "type": "single",
    "image": "images/serie02/Q04.png",
    "full": "images/serie02/Q04.png",
    "verified": true
  },
  // QUESTION 05
  {
    "num": 5,
    "title": "Cliquez sur le bouton permettant d’ouvrir directement l’éditeur Power Query. Quel bouton faut-il choisir ?",
    "options": [
      "Transformer les données",
      "Actualiser",
      "Publier",
      "Nouvelle mesure",
      "Gérer les relations"
    ],
    "answer": 0,
    "explanation": "Dans Power BI Desktop, « Transformer les données » ouvre l’éditeur Power Query. Question à cliquer adaptée en QCM pour le format du quiz.",
    "type": "single",
    "image": "images/serie02/Q05.png",
    "full": "images/serie02/Q05.png",
    "verified": true
  },
  // QUESTION 06
  {
    "num": 6,
    "title": "Complétez la mesure DAX « TOTAL QUANTITE SANS FILTRE » pour que le ratio « RATIO TOTAL QUANTITE » puisse être calculé. TOTAL QUANTITE SANS FILTRE = XXXXXXX([CA], XXXXXX(VENTES))",
    "options": [
      "CALCULATE et ALL",
      "SUM et FILTER",
      "CALCULATE et REMOVEFILTERS",
      "DIVIDE et ALL",
      "TOTALYTD et FILTER"
    ],
    "answer": 0,
    "explanation": "La correction attendue dans cet exercice est CALCULATE([CA], ALL(VENTES)). ALL(VENTES) supprime le contexte de filtre appliqué à cette table. L’énoncé du document utilise [CA] malgré le nom de mesure relatif aux quantités.",
    "type": "single",
    "image": "images/serie02/Q06.png",
    "full": "images/serie02/Q06.png",
    "verified": true
  },
  // QUESTION 07
  {
    "num": 7,
    "title": "Cliquez sur le bouton permettant d'insérer un texte libre dans le rapport.. Quel bouton faut-il choisir ?",
    "options": [
      "Zone de texte",
      "Transformer les données",
      "Nouvelle mesure",
      "Publier",
      "Actualiser"
    ],
    "answer": 0,
    "explanation": "« Entrer des données » permet de créer une nouvelle table en saisissant directement des valeurs. Question à cliquer adaptée en QCM.",
    "type": "single",
    "image": "images/serie02/Q07.png",
    "full": "images/serie02/Q07.png",
    "verified": true
  },
  // QUESTION 08
  {
    "num": 8,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les rapports paginés, si elle est vraie ou fausse.",
    "options": [
      "Ils sont optimisés pour l’impression, mais ont des fonctionnalités interactives limitées.",
      "Ils sont particulièrement adaptés pour la distribution au format PDF.",
      "Les rapports paginés créés à partir d’un espace de travail ne sont pas modifiables par Power BI Report Builder.",
      "Seul l’outil Power BI Report Builder permet de créer des rapports avec des filtres.",
      "Les rapports paginés créés à partir d’un espace de travail peuvent se connecter à des sources de données locales."
    ],
    "answer": [
      true,
      true,
      false,
      false,
      false
    ],
    "explanation": "Les rapports paginés privilégient une mise en page précise, notamment pour l’impression et le PDF. Ils peuvent être conçus dans Report Builder et accéder à différentes sources de données.",
    "type": "tf",
    "image": "images/serie02/Q08.png",
    "full": "images/serie02/Q08.png",
    "verified": true
  },
  // QUESTION 09
  {
    "num": 9,
    "title": "Associez chaque description au volet Power BI Desktop correspondant. Indiquez Vrai ou Faux pour chaque association.",
    "options": [
      "Zone des filtres → Volet filtres",
      "Liste des tables et champs → Volet données",
      "Liste des segments synchronisés → Volet segments",
      "Réglages d’apparence du visuel → Volet format",
      "Ordre des objets et visibilité → Volet sélection"
    ],
    "answer": [
      true,
      true,
      true,
      true,
      true
    ],
    "explanation": "Les cinq correspondances décrivent les volets de l’interface. L’exercice d’origine est un glisser-déposer, adapté ici en vrai/faux.",
    "type": "tf",
    "image": "images/serie02/Q09.png",
    "full": "images/serie02/Q09.png",
    "verified": true
  },
  // QUESTION 10
  {
    "num": 10,
    "title": "Veuillez indiquer, pour chaque affirmation concernant la RLS statique, si elle est vraie ou fausse.",
    "options": [
      "Elle permet de sauvegarder des données.",
      "Elle nécessite un réglage dans le Service au niveau de la sécurité.",
      "Elle contrôle les données que les consommateurs peuvent voir.",
      "Elle nécessite une mise à jour manuelle pour chaque utilisateur.",
      "Elle donne le droit aux consommateurs de modifier les données sources."
    ],
    "answer": [
      false,
      true,
      true,
      true,
      false
    ],
    "explanation": "La sécurité au niveau des lignes (RLS) limite les lignes visibles selon des rôles. En RLS statique, l’affectation aux rôles se gère dans le Service. Elle ne permet ni de sauvegarder ni de modifier les sources.",
    "type": "tf",
    "image": "images/serie02/Q10.png",
    "full": "images/serie02/Q10.png",
    "verified": true
  },
  // QUESTION 11
  {
    "num": 11,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les boutons, si elle est vraie ou fausse.",
    "options": [
      "Une action peut être associée à une forme simple (rectangle, ellipse…).",
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
    "explanation": "Les boutons et certaines formes peuvent recevoir des actions, notamment navigation et URL web. Un bouton n’a pas obligatoirement d’action préconfigurée. L’exercice considère aussi possible une action d’extraction (drill-through).",
    "type": "tf",
    "image": "images/serie02/Q11.png",
    "full": "images/serie02/Q11.png",
    "verified": true
  },
  // QUESTION 12
  {
    "num": 12,
    "title": "Veuillez indiquer, pour chaque affirmation concernant l’espace « Parcourir » dans le Service Power BI, si elle est vraie ou fausse.",
    "options": [
      "Il permet d’afficher tous les éléments de la plateforme auxquels un utilisateur a accès.",
      "Il permet d’obtenir des données externes pour les analyser.",
      "Il permet de visualiser des outils de visualisation favoris.",
      "Il permet de filtrer les rapports, les tableaux de bord et les jeux de données.",
      "Il permet de créer un rapport à partir d’un jeu de données."
    ],
    "answer": [
      true,
      false,
      true,
      true,
      false
    ],
    "explanation": "L’espace Parcourir sert à retrouver et filtrer du contenu auquel on a accès. La création d’un rapport et l’importation de données relèvent d’autres fonctionnalités.",
    "type": "tf",
    "image": "images/serie02/Q12.png",
    "full": "images/serie02/Q12.png",
    "verified": true
  },
  // QUESTION 13
  {
    "num": 13,
    "title": "Quelle fonction DAX me permet de renvoyer les paramètres régionaux de l’utilisateur ?",
    "options": [
      "USERCULTURE()",
      "MACHINECULTURE()",
      "REPORTCULTURE()",
      "SETCULTURE()",
      "GETCULTURE()"
    ],
    "answer": 0,
    "explanation": "USERCULTURE() renvoie les paramètres régionaux (culture) de l’utilisateur dans le contexte du modèle.",
    "type": "single",
    "image": "images/serie02/Q13.png",
    "full": "images/serie02/Q13.png",
    "verified": true
  },
  
  // QUESTION 14
  {
    "num": 14,
    "title": "Observez les cinq pictogrammes Power BI de la capture, numérotés de 1 à 5 de haut en bas. Indiquez si les associations suivantes sont vraies ou fausses.",
    "options": [
      "Pictogramme 1 → Une colonne calculée",
      "Pictogramme 2 → Une mesure",
      "Pictogramme 3 → Une hiérarchie",
      "Pictogramme 4 → Une colonne numérique avec agrégation",
      "Pictogramme 5 → Une colonne de dates"
    ],
    "answer": [
      true,
      true,
      false,
      true,
      false
    ],
    "explanation": "Les associations correctes, de haut en bas, sont : 1. Colonne calculée ; 2. Mesure ; 3. Colonne de dates ; 4. Colonne numérique avec agrégation (Σ) ; 5. Hiérarchie. Les affirmations 3 et 5 sont donc fausses.",
    "type": "tf",
    "image": "images/serie02/Q14.png",
    "full": "images/serie02/Q14.png",
    "verified": true
  },
  // QUESTION 15
  {
    "num": 15,
    "title": "Complétez la mesure DAX « Evolution CA » avec une fonction de TIME INTELLIGENCE permettant de réaliser ce pourcentage d’évolution. CALCULATE([CA], XXXXXXX(Calendrier[Date], -1, MONTH))",
    "options": [
      "DATEADD",
      "TOTALYTD",
      "DATESYTD",
      "SAMEPERIODLASTYEAR",
      "PARALLELPERIOD"
    ],
    "answer": 0,
    "explanation": "DATEADD(Calendrier[Date], -1, MONTH) décale le contexte de dates d’un mois pour récupérer le CA du mois précédent. Le taux d’évolution compare ensuite le CA actuel à ce CA précédent.",
    "type": "single",
    "image": "images/serie02/Q15.png",
    "full": "images/serie02/Q15.png",
    "verified": true
  },
  // QUESTION 16
  {
    "num": 16,
    "title": "Veuillez indiquer, pour chaque affirmation concernant le volet « Contenu associé » d’un tableau de bord dans le Service Power BI, si elle est vraie ou fausse.",
    "options": [
      "Il affiche tous les rapports d’où proviennent les visuels épinglés dans ce tableau de bord.",
      "Il affiche tous les jeux de données d’où proviennent les visuels épinglés dans ce tableau de bord.",
      "Il permet d’accéder à la vue de traçabilité.",
      "Il permet d’afficher l’application de l’espace de travail.",
      "Il permet de lancer une analyse dans Excel."
    ],
    "answer": [
      true,
      true,
      true,
      false,
      true
    ],
    "explanation": "Le volet « Contenu associé » permet d'identifier les rapports et les jeux de données à l'origine des visuels épinglés sur un tableau de bord. Il donne également accès à la vue de traçabilité, qui permet de comprendre les dépendances entre les différents éléments Power BI. Il ne sert pas à afficher l'application de l'espace de travail. Enfin, il permet d'accéder à la fonctionnalité « Analyser dans Excel » pour explorer les données à l'aide de tableaux croisés dynamiques.",
    "type": "tf",
    "image": "images/serie02/Q16.png",
    "full": "images/serie02/Q16.png",
    "verified": true
  },
  // QUESTION 17
  {
    "num": 17,
    "title": "Complétez la phrase : Ce type de modèle de données est appelé un modèle en ______.",
    "options": [
      "étoile",
      "flocon",
      "constellation",
      "galaxie",
      "arbre"
    ],
    "answer": 1,
    "explanation": "Un schéma en flocon normalise certaines dimensions en plusieurs tables reliées entre elles, contrairement au schéma en étoile.",
    "type": "single",
    "image": "images/serie02/Q17.png",
    "full": "images/serie02/Q17.png",
    "verified": true
  },
  // QUESTION 18
  {
    "num": 18,
    "title": "Dans Power BI Desktop, je me suis connecté à un jeu de données publié dans le Service. Veuillez indiquer, pour chaque affirmation concernant ce type de modèle de données, si elle est vraie ou fausse.",
    "options": [
      "Ce type de modèle de données ne stocke aucune donnée.",
      "Le mode de connexion est appelé « Live connection ».",
      "Si j’ajoute une source de données locale, le modèle doit basculer vers une connexion DirectQuery.",
      "Je peux ajouter des colonnes calculées aux tables.",
      "Je peux afficher les valeurs des tables dans la vue de données."
    ],
    "answer": [
      true,
      true,
      true,
      false,
      false
    ],
    "explanation": "Une connexion en direct s’appuie sur un modèle distant. L’ajout d’un modèle local peut faire évoluer la connexion vers un modèle composite. Les possibilités de calcul et de vue Données diffèrent selon le mode.",
    "type": "tf",
    "image": "images/serie02/Q18.png",
    "full": "images/serie02/Q18.png",
    "verified": true
  },
 
// QUESTION 19
{
  "num": 19,
  "title": "Dans ce visuel, j'ai mis en forme les pays de mon secteur (France et Pologne) en vert (code couleur #1f7f0b) et les autres pays en bleu (code couleur #3000fc). Pour cela, j'ai appliqué la mesure « DAX MFC » en mise en forme conditionnelle. Complétez la mesure pour qu'elle fonctionne.",
  "options": [
    "SELECTEDVALUE(Clients[Pays]) IN {\"FRANCE\", \"POLOGNE\"}",
    "SELECTEDVALUE(Clients[Pays]) = \"FRANCE\" AND \"POLOGNE\"",
    "SUM(Clients[Pays])",
    "ALL(Clients[Pays])",
    "ISBLANK(Clients[Pays])"
  ],
  "answer": 0,
  "explanation": "L’opérateur DAX IN teste si une valeur figure dans une liste. Il peut être utilisé dans IF pour renvoyer une couleur différente selon le pays.",
  "type": "single",
  "image": "images/serie02/Q19.png",
  "full": "images/serie02/Q19.png",
  "verified": true
},

  // QUESTION 20
  {
    "num": 20,
    "title": "Dans le Service Power BI, dans Mon espace de travail, je souhaite créer un rapport rapidement à partir d’un fichier Excel stocké dans mon OneDrive. Quelle action dois-je réaliser en premier ?",
    "options": [
      "Je déroule le bouton Nouveau et sélectionne « Rapport ».",
      "Je déroule le bouton Nouveau et sélectionne « Rapport paginé ».",
      "Je déroule le bouton Nouveau et sélectionne « Tableau de bord ».",
      "Je déroule le bouton Nouveau et sélectionne « Jeu de données ».",
      "Je déroule le bouton Nouveau et sélectionne « Jeu de données de streaming »."
    ],
    "answer": 3,
    "explanation": "Dans l’interface présentée, l’étape attendue est de créer un jeu de données à partir du fichier Excel, puis de construire un rapport dessus.",
    "type": "single",
    "image": "images/serie02/Q20.png",
    "full": "images/serie02/Q20.png",
    "verified": true
  },
  // QUESTION 21
  {
    "num": 21,
    "title": "Veuillez indiquer, pour chaque affirmation concernant l’organisation de ce modèle de données, si elle est vraie ou fausse.",
    "options": [
      "Pour créer la table « Autres mesures », je clique sur l’onglet Modélisation, puis sur Nouvelle table.",
      "Pour modifier le pictogramme et la position de la table des ventes, j’ai masqué toutes les colonnes sauf les mesures.",
      "Pour créer le dossier « Géographie », j’ai utilisé le mode Modèle et le volet Propriétés.",
      "Pour créer la hiérarchie « Organisation », les colonnes « Agence », « Employé » et « Vendeur » doivent obligatoirement être masquées.",
      "Pour masquer la table Agences, j’ai désactivé son chargement depuis Power Query."
    ],
    "answer": [
      false,
      true,
      true,
      false,
      true
    ],
    "explanation": "",
    "type": "tf",
    "image": "images/serie02/Q21.png",
    "full": "images/serie02/Q21.png",
    "verified": true
  },
  // QUESTION 22
  {
    "num": 22,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les transformations de colonnes dans Power Query, si elle est vraie ou fausse.",
    "options": [
      "Il est possible de diviser les valeurs d’une colonne numérique par 1000.",
      "Il est possible de compter le nombre de caractères d’une colonne de texte.",
      "Il est impossible d’ajouter un suffixe à une colonne de texte.",
      "Il est impossible d’arrondir des numériques à la décimale entière supérieure.",
      "Il est possible d’obtenir le numéro de semaine à partir d’une date."
    ],
    "answer": [
      true,
      true,
      false,
      false,
      true
    ],
    "explanation": "Power Query dispose de transformations numériques, textuelles et de dates : division, longueur du texte, suffixes, arrondi et extraction du numéro de semaine.",
    "type": "tf",
    "image": "images/serie02/Q22.png",
    "full": "images/serie02/Q22.png",
    "verified": true
  },
  // QUESTION 23
  {
    "num": 23,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les boutons « Appliquer tous les segments » et « Effacer tous les segments », si elle est vraie ou fausse.",
    "options": [
      "Le bouton « Appliquer tous les segments » permet d’appliquer simultanément plusieurs filtres de segment à un rapport.",
      "En utilisant le bouton « Effacer tous les segments », tous les filtres de segment appliqués sur un rapport seront supprimés, rétablissant la vue par défaut.",
      "Les boutons « Appliquer tous les segments » et « Effacer tous les segments » sont visibles dans l’interface de Power BI Desktop, mais pas dans la version en ligne de Power BI Service.",
      "L’amélioration des performances est la principale raison d’utiliser ces boutons.",
      "Ces boutons peuvent être configurés pour n’impacter que certains segments de la page."
    ],
    "answer": [
      true,
      true,
      false,
      true,
      false
    ],
    "explanation": "Ces boutons contrôlent l’application et la réinitialisation des segments.",
    "type": "tf",
    "image": "images/serie02/Q23.png",
    "full": "images/serie02/Q23.png",
    "verified": true
  },
  
 
  // QUESTION 24
  {
    "num": 24,
    "title": "Dans le Service Power BI, je dois suivre une fois par semaine l’évolution des valeurs d’un rapport. Quelle solution permet de recevoir automatiquement un rappel hebdomadaire depuis Power BI ?",
    "options": [
      "Créer un flux avec Power Automate qui m'envoie un mail hebdomadaire avec un lien vers le rapport.",
      "Configurer un abonnement hebdomadaire directement sur le rapport.",
      "Ajouter une tâche dans Microsoft To Do avec un rappel hebdomadaire.",
      "Configurer une alerte hebdomadaire directement sur le rapport.",
      "Ajouter un événement hebdomadaire dans Outlook contenant un lien vers le rapport."
    ],
    "answer": 1,
    "explanation": "L'abonnement à un rapport dans le Service Power BI permet de recevoir automatiquement un e-mail selon une fréquence définie, notamment chaque semaine. Power Automate peut également automatiser des rappels, mais l'abonnement est la fonctionnalité native de Power BI prévue à cet effet. Les alertes de données reposent sur des seuils et non sur une fréquence de consultation.",
    "type": "single",
    "image": "images/serie02/Q24.png",
    "full": "images/serie02/Q24.png",
    "verified": true
  },


  // QUESTION 25
  {
    "num": 25,
    "title": "Comment se nomme ce type de rapport ?",
    "options": [
      "Un rapport paginé.",
      "Un rapport Quick insight.",
      "Un rapport des métriques d’utilisation.",
      "Un rapport de traçabilité.",
      "Un rapport de gestion des autorisations."
    ],
    "answer": 2,
    "explanation": "Un rapport des métriques d’utilisation présente des statistiques de consultation et d’utilisation d’un rapport Power BI.",
    "type": "single",
    "image": "images/serie02/Q25.png",
    "full": "images/serie02/Q25.png",
    "verified": true
  }
];
