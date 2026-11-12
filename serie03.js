// Série 03 - Examen blanc TOSA Power BI

const serie03 = [
  {
    "num": 1,
    "title": "Je veux modifier les paramètres de l'étape « Autres colonnes supprimées » ?. Où dois-je cliquer ?",
    "options": [
      "Sur l'icône d'engrenage à droite de l'étape dans Étapes appliquées.",
      "Sur le bouton Fermer et appliquer.",
      "Sur le nom de la requête.",
      "Sur le volet de navigation des tables."
    ],
    "answer": 0,
    "explanation": "L'engrenage d'une étape dans Étapes appliquées rouvre sa boîte de paramètres, lorsque cette étape dispose de paramètres modifiables.",
    "type": "single",
    "image": "images/serie03/Q01.png",
    "full": "images/serie03/Q01.png",
    "verified": true
  },
  {
    "num": 2,
    "title": "Quelle fonction DAX permet de créer une transition de contexte ?",
    "options": [
      "CALCUL",
      "CALCULATE",
      "TRANSITION",
      "CONTEXT",
      "RECONTEXT"
    ],
    "answer": 1,
    "explanation": "CALCULATE évalue une expression dans un contexte de filtre modifié et peut provoquer une transition du contexte de ligne vers un contexte de filtre.",
    "type": "single",
    "image": "images/serie03/Q02.png",
    "full": "images/serie03/Q02.png",
    "verified": true
  },
  {
    "num": 3,
    "title": "Quel visuel Power BI permet d'afficher des villes et des montants avec des niveaux hiérarchiques dépliables, comme sur l'image ?",
    "options": [
      "Table",
      "Matrice",
      "Carte",
      "Histogramme",
      "Segment"
    ],
    "answer": 1,
    "explanation": "Le visuel Matrice prend en charge les hiérarchies de lignes, le développement/réduction des niveaux et les totaux.",
    "type": "single",
    "image": "images/serie03/Q03.png",
    "full": "images/serie03/Q03.png",
    "verified": true
  },
  {
    "num": 4,
    "title": "Dans le Service Power BI, quel élément du menu latéral permet d'atteindre « Mon espace de travail » ?",
    "options": [
      "Accueil",
      "Créer",
      "Espaces de travail",
      "Applications",
      "Parcourir"
    ],
    "answer": 2,
    "explanation": "Le menu Espaces de travail donne accès à Mon espace de travail et aux autres espaces auxquels l'utilisateur a accès.",
    "type": "single",
    "image": "images/serie03/Q04.png",
    "full": "images/serie03/Q04.png",
    "verified": true
  },
  {
    "num": 5,
    "title": "Quel est le rôle d'une colonne clé dans un modèle de données ?",
    "options": [
      "Sécuriser l'accès aux données d'une table.",
      "Permettre la création de relations entre les tables.",
      "Autoriser la création de colonnes calculées.",
      "Attribuer un rôle aux valeurs d'une colonne.",
      "Supprimer les doublons d'une colonne."
    ],
    "answer": 1,
    "explanation": "Les colonnes clés permettent de faire correspondre les enregistrements de tables liées. Le côté « un » d'une relation doit contenir des valeurs uniques.",
    "type": "single",
    "image": "images/serie03/Q05.png",
    "full": "images/serie03/Q05.png",
    "verified": true
  },
  {
    "num": 6,
    "title": "Complétez la mesure DAX d'évolution du chiffre d'affaires en utilisant une fonction de décalage temporel d'un mois.Evolution CA = VAR _CA_MOIS_PRECEDENT = CALCULATE ( [CA], XXXXXXXXXXX( Calendrier[Date], -1, MONTH ) ) RETURN DIVIDE ( [CA] - _CA_MOIS_PRECEDENT, _CA_MOIS_PRECEDENT )",
    "options": [
      "DATEADD",
      "DATESYTD",
      "SAMEPERIODLASTYEAR",
      "TOTALMTD",
      "DATEDIFF"
    ],
    "answer": 0,
    "explanation": "DATEADD(Calendar[Date], -1, MONTH) décale le contexte des dates d'un mois vers le passé, pour comparer le chiffre d'affaires courant au mois précédent.",
    "type": "single",
    "image": "images/serie03/Q06.png",
    "full": "images/serie03/Q06.png",
    "verified": true
  },
  {
    "num": 7,
    "title": "Dans Power BI Desktop, quel bouton de l'onglet Insertion permet d'ajouter une zone de texte libre ?",
    "options": [
      "Zone de texte",
      "Nouvelle mesure",
      "Nouveau paramètre",
      "Segment",
      "Transformer les données"
    ],
    "answer": 0,
    "explanation": "Le bouton Zone de texte insère un bloc de texte libre dans la page du rapport.",
    "type": "single",
    "image": "images/serie03/Q07.png",
    "full": "images/serie03/Q07.png",
    "verified": true
  },
  {
    "num": 8,
    "title": "Dans le Service Power BI, dans Mon espace de travail, je souhaite créer un rapport rapidement à partir d'un fichier Excel stocké dans mon OneDrive. Quelle action dois-je réaliser en premier ?",
    "options": [
      "Rapport",
      "Rapport paginé",
      "Tableau de bord",
      "Jeu de données",
      "Jeu de données de streaming"
    ],
    "answer": 3,
    "explanation": "Dans Mon espace de travail, le bouton + Créer > Jeu de données permet d'importer un fichier Excel depuis OneDrive et de créer un jeu de données exploitable pour un rapport.",
    "type": "single",
    "image": "images/serie03/Q08.png",
    "full": "images/serie03/Q08.png",
    "verified": true
  },
  {
    "num": 9,
    "title": "Associez chaque volet de l'interface Power BI Desktop à son rôle.",
    "options": [
      "Le volet Filtres sert à appliquer des filtres aux visuels, pages ou rapports.",
      "Le volet Données présente les tables et champs du modèle.",
      "Le volet Segments permet de configurer les interactions de segment.",
      "Le volet Format règle l'apparence du visuel sélectionné.",
      "Le volet Sélection permet de gérer la visibilité et l'ordre des objets."
    ],
    "answer": [
      true,
      true,
      false,
      true,
      true
    ],
    "explanation": "Les volets Filtres, Données, Format et Sélection ont ces fonctions. « Segments » désigne ici un volet de configuration particulier de la capture, pas un volet générique à attribuer à la fonction proposée.",
    "type": "tf",
    "image": "images/serie03/Q09.png",
    "full": "images/serie03/Q09.png",
    "verified": true
  },
  {
    "num": 10,
    "title": "Complétez cette mesure DAX TOTAL QUANTITE SANS FILTRE pour que le ratio RATIO TOTAL QUANTITE puisse être calculé. La mesure TOTAL QUANTITE SANS FILTRE calcule le TOTAL et n'est pas impacté par le contexte de filtre. TOTAL QUANTITE SANS FILTRE = XXXXXXXXXX ([CA], XXXXXXXX (VENTES)) ",
    "options": [
      "CALCULATE - ALL",
      "FILTER - ALL",
      "VALUES - ALL",
      "RELATED - ALL",
      "DISTINCT - ALL"
    ],
    "answer": 0,
    "explanation": "CALCULATE([CAL], ALL(VENTES)) supprime les filtres de la table VENTES pour le calcul demandé.",
    "type": "single",
    "image": "images/serie03/Q10.png",
    "full": "images/serie03/Q10.png",
    "verified": true
  },
  {
    "num": 11,
    "title": "Veuillez indiquer, pour chaque affirmation concernant la construction de visuels à partir de la table VENTES (en l'état), si elle est vraie ou fausse.",
    "options": [
      "Je peux afficher la moyenne de la colonne Prix par la colonne Transports.",
      "Je peux afficher le pourcentage des quantités écoulées par la colonne Transports.",
      "Je peux afficher le nombre de ventes par date.",
      "Je peux afficher le nombre de transports différents par jour.",
      "Je peux afficher le calcul [Prix] × [Quantité] par la colonne Transports."
    ],
    "answer": [
      true,
      true,
      true,
      true,
      false
    ],
    "explanation": "Les agrégations et regroupements permettent de construire les quatre premiers indicateurs. Le dernier calcul nécessite une expression ou mesure appropriée, et ne découle pas directement des champs tels que présentés.",
    "type": "tf",
    "image": "images/serie03/Q11.png",
    "full": "images/serie03/Q11.png",
    "verified": true
  },
  {
    "num": 12,
    "title": "Veuillez indiquer, pour chaque affirmation concernant les rapports paginés, si elle est vraie ou fausse.",
    "options": [
      "Ils sont optimisés pour l'impression, mais disposent de fonctionnalités interactives limitées.",
      "Ils sont particulièrement adaptés à la distribution au format PDF.",
      "Les rapports paginés créés depuis un espace de travail ne sont pas modifiables par Power BI Report Builder.",
      "Seul Power BI Report Builder permet de créer des rapports avec des filtres.",
      "Les rapports paginés créés depuis un espace de travail peuvent se connecter à des sources de données locales."
    ],
    "answer": [
      true,
      true,
      false,
      false,
      false
    ],
    "explanation": "Les rapports paginés privilégient une mise en page précise et l'export. Les autres affirmations doivent être évaluées dans le contexte de la version du Service Power BI illustrée.",
    "type": "tf",
    "image": "images/serie03/Q12.png",
    "full": "images/serie03/Q12.png",
    "verified": true
  },
  {
     "num": 13,
    "title": "Comment puis-je, dans le Service Power BI, modifier un rapport que j'ai publié ?",
    "options": [
      "Je ne peux pas modifier le rapport publié dans le Service, je suis obligé de télécharger le rapport au format PBIX pour le modifier avec Power BI Desktop, puis de le republier sous le même nom.",
      "Je clique sur le menu Plus d'options, puis j'utilise la commande Editer.",
      "J'ouvre le rapport dans le Service puis j'utilise le bouton Editer dans la barre d'outils.",
      "Je clique sur le menu Plus d'options, puis j'utilise la commande Modifier.",
      "J'ouvre le rapport dans le Service puis j'utilise le bouton Modifier dans la barre d'outils."
    ],
    "answer": 4,
    "explanation": "Dans le Service Power BI, il est possible de modifier un rapport directement en l'ouvrant puis en cliquant sur le bouton « Modifier » dans la barre d'outils, à condition de disposer des autorisations nécessaires. Il n'est donc pas obligatoire de télécharger le fichier PBIX et de le republier.",
    "type": "single",
    "image": "images/serie03/Q13.png",
    "full": "images/serie03/Q13.png",
    "verified": true
  },
  {
    "num": 14,
    "title": "Quelles sont les bonnes pratiques pour optimiser l'usage de Power Query ? Indiquez Vrai ou Faux.",
    "options": [
      "Documenter les étapes appliquées en renseignant leurs propriétés.",
      "Créer des paramètres pour variabiliser les sources de données.",
      "Conserver toutes les colonnes d'une source pour prévoir un éventuel usage futur.",
      "Créer des groupes pour ranger les requêtes par rôle.",
      "Toujours conserver l'ensemble des données sources, même inutilisées, pour éviter toute transformation."
    ],
    "answer": [
      true,
      true,
      false,
      true,
      false
    ],
    "explanation": "Documenter les transformations, paramétrer les sources et organiser les requêtes facilite la maintenance. Conserver des colonnes ou lignes inutiles alourdit le modèle.",
    "type": "tf",
    "image": "images/serie03/Q14.png",
    "full": "images/serie03/Q14.png",
    "verified": true
  },
 
  // QUESTION 15
  {
    "num": 15,
    "title": "Le besoin analytique de cette table est de créer des durées (totales et moyennes) par jour. Il faut donc passer d'un niveau heure à un niveau jour. Quelle est la bonne configuration de la commande « Regrouper par » dans Power Query ?",
    "options": [
      "Avancé | Regrouper par : Heure | Total → Somme → Durée | Moyenne → Moyenne → Durée",
      "Avancé | Regrouper par : Date + Heure | Total → Somme → Durée | Moyenne → Moyenne → Durée",
      "Avancé | Regrouper par : Date | Total → Somme → Durée | Moyenne → Moyenne → Durée",
      "Avancé | Regrouper par : Date | Total → Somme → Heure | Moyenne → Moyenne → Heure"
    ],
    "answer": 2,
    "explanation": "La troisième configuration est correcte. Il faut regrouper les lignes par Date pour obtenir une seule ligne par jour. Le mode Avancé permet ensuite de créer deux agrégations sur la colonne Durée : Somme pour calculer la durée totale et Moyenne pour calculer la durée moyenne. Regrouper par Heure ou par Date et Heure conserve une granularité trop fine. Utiliser la colonne Heure pour les agrégations ne permet pas de calculer les durées attendues.",
    "type": "single",
    "image": "images/serie03/Q15.png",
    "full": "images/serie03/Q15.png",
    "verified": true
  },

  {
    "num": 16,
    "title": "Concernant la consommation des rapports dans le Service Power BI, indiquez si chaque affirmation est vraie ou fausse.",
    "options": [
      "Il est possible d'exporter au format Excel les données d'un visuel.",
      "Il est possible de mettre un visuel en plein écran.",
      "Il est possible d'appliquer un filtre sur tout le rapport.",
      "Il est possible de cliquer sur des visuels pour filtrer d'autres visuels.",
      "Il est possible de lire toutes les pages d'un rapport en mode diaporama."
    ],
    "answer": [
      true,
      true,
      true,
      true,
      false
    ],
    "explanation": "Les rapports permettent l'export de données selon les droits, l'affichage ciblé des visuels, les filtres et les interactions entre visuels. Le mode diaporama dépend des fonctionnalités disponibles.",
    "type": "tf",
    "image": "images/serie03/Q16.png",
    "full": "images/serie03/Q16.png",
    "verified": true
  },
  {
    "num": 17,
    "title": "Concernant l'utilisation de Power BI Desktop, indiquez si chaque affirmation est vraie ou fausse.",
    "options": [
      "Pour ouvrir un fichier PBIX, j'utilise Fichier > Ouvrir, puis Parcourir cet appareil.",
      "Pour dupliquer une page de rapport, j'utilise le clic droit sur l'onglet de la page concernée.",
      "Pour enregistrer un rapport au format PBIX, j'utilise le menu Fichier de Power BI Desktop et je clique sur la commande Publier",
      "Pour afficher les relations du rapport, j'utilise le mode Vue de données.",
      "Il est possible de créer un rapport dans le Service Power BI."
    ],
    "answer": [
      true,
      true,
      false,
      false,
      false
    ],
    "explanation": "Un PBIX s'ouvre depuis le menu Fichier, et une page peut être dupliquée depuis son onglet. L'enregistrement PBIX et la vue des relations ne correspondent pas aux commandes erronées indiquées.",
    "type": "tf",
    "image": "images/serie03/Q17.png",
    "full": "images/serie03/Q17.png",
    "verified": true
  },
  {
    "num": 18,
    "title": "La colonne des quantités est nommée QT et la table qui l'héberge s'intitule VENTES. Quelle formule DAX permet de calculer la quantité totale ?",
    "options": [
      "SUM(VENTES[QT])",
      "COUNT(VENTES[QT])",
      "AVERAGE(VENTES[QT])",
      "SUM(VENTES)",
      "TOTAL(VENTES[QT])"
    ],
    "answer": 0,
    "explanation": "SUM(VENTES[QT]) additionne les valeurs numériques de la colonne QT.",
    "type": "single",
    "image": "images/serie03/Q18.png",
    "full": "images/serie03/Q18.png",
    "verified": true
  },
  {
    "num": 19,
    "title": "Concernant le volet Filtres d'un rapport Power BI, indiquez si chaque affirmation est vraie ou fausse.",
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
    "explanation": "Le volet Filtres prend en charge les filtres de date, numériques, textuels et Top N selon les types de champs.",
    "type": "tf",
    "image": "images/serie03/Q19.png",
    "full": "images/serie03/Q19.png",
    "verified": true
  },
  {
    "num": 20,
    "title": "Dans le Service Power BI, quelle commande a ouvert le volet de droite illustré sur la capture ?",
    "options": [
      "Partager",
      "Commentaires",
      "Gérer les accès",
      "Applications",
      "Espaces de travail"
    ],
    "answer": 2,
    "explanation": "Le volet illustré présente la gestion des accès au rapport ou à l'espace de travail. Le libellé exact dépend de la version du Service.",
    "type": "single",
    "image": "images/serie03/Q20.png",
    "full": "images/serie03/Q20.png",
    "verified": true
  },
  {
    "num": 21,
    "title": "Avec les relations du modèle illustré et leur direction de filtrage croisé, indiquez si chaque propagation de filtre est possible.",
    "options": [
      "La propagation des filtres de la table « Clients » vers la table « Ventes » est possible.",
      "La propagation des filtres de la table « Produits » vers la table « Ventes » est possible.",
      "La propagation des filtres de la table « Clients » vers la table « Produits » est possible.",
      "La propagation des filtres de la table « Produits » vers la table « Clients » est possible.",
      "La propagation des filtres de la table « Ventes » vers les tables « Clients » et « Produits » est possible."
    ],
    "answer": [
      true,
      true,
      false,
      false,
      false
    ],
    "explanation": "Les relations à sens unique propagent les filtres des tables de dimension vers la table de faits Ventes, et non dans le sens inverse.",
    "type": "tf",
    "image": "images/serie03/Q21.png",
    "full": "images/serie03/Q21.png",
    "verified": true
  },
  {
    "num": 22,
    "title": "Complétez l'expression suivante pour que la mesure NB ABSENCES soit calculée pour le service PRODUCTION. NB ABSENCES PRODUCTION = XXXXXXXX ([NB ABENCES], COLLABORATEURS[SERVICE] = \"PRODUCTION\")",
    "options": [
      "COUNT",
      "CALCULATE",
      "COUNTROWS",
      "SUM",
      "DISTINCTCOUNT"
    ],
    "answer": 0,
    "explanation": "COUNT([NB ABSENCES], COLLABORATEURS[SERVICE] = \"PRODUCTION\") compte les valeurs de la colonne NB ABSENCES pour lesquelles le service est PRODUCTION.",
    "type": "single",
    "image": "images/serie03/Q22.png",
    "full": "images/serie03/Q22.png",
    "verified": true
  },
  {
    "num": 23,
    "title": "Dans un rapport publié dans le Service Power BI, comment exporter les données d'un visuel vers Excel ?",
    "options": [
   "Je clique sur le bouton Exporter et j'utilise la commande Analyser dans Excel.",
    "Je clique sur le bouton Plus d'options du visuel et j'utilise la commande Obtenir des insights.",
    "Je clique sur le bouton Plus d'options du visuel et j'utilise la commande Exporter des données.",
    "Je clique sur le bouton Plus d'options du visuel et j'utilise la commande Afficher sous forme de table.",
    "Je clique sur le bouton Plus d'options du visuel et j'utilise la commande Partager puis « Exporter dans Excel »."
],
    "answer": 2,
    "explanation": "Le menu Plus d'options (…) du visuel contient Exporter des données, si l'export est autorisé.",
    "type": "single",
    "image": "images/serie03/Q23.png",
    "full": "images/serie03/Q23.png",
    "verified": true
  },
  {
    "num": 24,
    "title": "Dans le Service Power BI, quel bouton permet de paramétrer l'envoi régulier d'un rapport par e-mail ?",
    "options": [
      "Partager",
      "Exporter",
      "Créer des insights",
      "S'abonner au rapport",
      "Modifier"
    ],
    "answer": 3,
    "explanation": "S'abonner au rapport permet de définir un envoi périodique par e-mail, selon les options et autorisations disponibles.",
    "type": "single",
    "image": "images/serie03/Q24.png",
    "full": "images/serie03/Q24.png",
    "verified": true
  },
  {
    "num": 25,
    "title": "Dans cette requête je n'ai besoin d'analyser que les montants par numéro de commande. Le détail par ligne de commande est inutile. Quelle méthode dois-je utiliser pour améliorer les performances de cette requête ?",
  "options": [
  "Dépivoter la colonne idCommande en agrégeant la colonne Montant.",
  "Supprimer les doublons de la colonne idCommande en agrégeant la colonne Montant.",
  "Utiliser la commande Regrouper par pour regrouper sur la colonne idCommande et agréger la colonne Montant.",
  "Supprimer les doublons sur la colonne idCommande et utiliser une expression DAX pour calculer la somme des montants.",
  "Charger la requête et créer une table en DAX avec la fonction SUMMARIZECOLUMNS pour agréger les montants par idCommande."
],
    "answer": 2,
    "explanation": "Regrouper par agrège les lignes sur la clé IdCommande, en calculant par exemple la somme de Montant directement dans Power Query.",
    "type": "single",
    "image": "images/serie03/Q25.png",
    "full": "images/serie03/Q25.png",
    "verified": true
  }
];
