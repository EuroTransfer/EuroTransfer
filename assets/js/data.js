/* =============================================================================
   EUROTRANSFER — Base de données des articles
   -----------------------------------------------------------------------------
   Pour AJOUTER un nouvel article, copiez un bloc { ... } ci-dessous, collez-le
   en haut du tableau ARTICLES et modifiez les champs. Aucune autre manipulation
   n'est nécessaire : le site se met à jour automatiquement.

   Champs disponibles :
     id        : identifiant unique (texte, sans espaces) -> sert d'URL
     title     : titre de l'article
     category  : "Transferts" | "Mercato" | "Matchs" | "Faits divers"
                 | "Compétitions" | "Locale"
     source    : nom du média original (ou "Rédaction EUROTRANSFER" pour le local)
     sourceUrl : lien externe vers l'article d'origine (facultatif pour le local)
     date      : date au format ISO "AAAA-MM-JJ"
     time      : heure de publication "HH:MM"
     dateLabel : date lisible affichée sur le site
     views     : nombre de lectures (sert au tri "Plus consultés")
     featured  : true pour l'article principal de la page d'accueil
     image     : (facultatif) lien d'une image OU photo intégrée. Laisser "" ou
                 omettre pour afficher un visuel de remplacement automatique.
     lead      : chapô / résumé d'accroche (1 à 2 phrases)
     body      : tableau de paragraphes (le corps réécrit de l'article)
   ============================================================================= */

const ARTICLES = [
  {
    id: "david-lleshi-anderlecht-2026",
    title: "Anderlecht frappe un grand coup en attirant le jeune prodige albanais David Lleshi",
    category: "Transferts",
    source: "Rédaction EUROTRANSFER",
    sourceUrl: "",
    date: "2026-07-15",
    time: "19:15",
    dateLabel: "15 juillet 2026 à 19h15",
    views: 4270,
    featured: true,
    lead: "Le RSC Anderlecht a officialisé l'arrivée de David Lleshi, milieu offensif de 18 ans considéré comme l'un des talents les plus prometteurs de sa génération en Belgique.",
    body: [
      "C'est l'une des belles opérations de l'été du côté du Parc Astrid. Le RSC Anderlecht a officialisé la signature de David Lleshi, milieu offensif de 18 ans présenté comme l'un des espoirs les plus en vue du football belge. Le club bruxellois a devancé une concurrence relevée pour s'attacher les services d'un joueur dont le nom circulait avec insistance depuis plusieurs mois dans les milieux de la formation.",
      "Né dans la région bruxelloise de parents d'origine albanaise, Lleshi a fait ses premières gammes dans un club formateur de la capitale, où il s'est rapidement distingué par une maturité technique supérieure à son âge. Régulièrement surclassé, il a écumé les catégories de jeunes en accumulant les performances remarquées, au point d'attirer l'œil de recruteurs bien au-delà des frontières belges.",
      "Sur le terrain, le gaucher évolue dans l'entrejeu, dans un rôle de meneur capable de relier les lignes et d'éclairer le jeu. Ceux qui l'ont vu jouer vantent une vision du jeu peu commune, une qualité de passe entre les lignes, un dribble court redoutable dans les espaces réduits et une créativité qui fait la différence dans le dernier tiers. Au-delà du talent brut, c'est son intelligence tactique et sa capacité à prendre les bonnes décisions sous pression qui séduisent les observateurs.",
      "Ces qualités n'étaient pas passées inaperçues. Selon plusieurs sources concordantes, des clubs néerlandais réputés pour leur travail de formation, ainsi que des formations françaises, avaient dépêché leurs recruteurs pour suivre son évolution ces derniers mois. Plusieurs approches auraient été formulées, mais aucune n'a résisté à l'argumentaire bruxellois.",
      "Car c'est bien la réputation du centre de formation d'Anderlecht qui a fait pencher la balance. Neerpede, laboratoire à talents dont sont issus de nombreux internationaux, offre au jeune milieu un cadre idéal pour franchir les étapes sans brûler les paliers. Le projet sportif présenté à la famille, axé sur la progression et le temps de jeu, a achevé de convaincre le clan Lleshi.",
      "Cette signature s'inscrit dans la stratégie assumée d'Anderlecht, qui n'a jamais cessé de miser sur sa jeunesse pour alimenter son effectif et, à terme, valoriser ses meilleurs éléments. En attirant l'un des espoirs les plus convoités du pays, le club envoie un signal fort à la concurrence et rappelle que Neerpede demeure une destination privilégiée pour les jeunes joueurs ambitieux.",
      "« Anderlecht, c'est un club qui fait confiance aux jeunes et qui les fait jouer. Dès que j'ai visité Neerpede et discuté du projet, j'ai su que c'était le bon endroit pour progresser », a confié le joueur au moment de parapher son contrat. « Je veux travailler, apprendre chaque jour et tout donner pour mériter ma place. Porter ce maillot, c'est un rêve. »",
      "Du côté de l'académie, on ne cache pas sa satisfaction. « David possède un profil rare, avec une compréhension du jeu et une technique déjà très abouties pour son âge », explique un responsable de la formation mauve. « Mais ce qui nous a séduits, c'est aussi son état d'esprit et son envie d'apprendre. Nous allons l'accompagner avec patience : il a tout pour réussir s'il continue à travailler. »",
      "Dans un premier temps, David Lleshi intégrera les équipes de jeunes de Neerpede, où il poursuivra sa formation et son adaptation aux exigences du club. À moyen terme, l'objectif est clair : rejoindre les RSCA Futures, l'antichambre de l'équipe première, pour se frotter au football professionnel. À Anderlecht, on se garde de tout emballement, mais l'espoir est réel de voir éclore, dans les prochaines saisons, l'un des joyaux de la nouvelle génération mauve."
    ]
  },

  {
    id: "mbappe-brassard-capitaine-2026",
    title: "Kylian Mbappé confirmé dans son rôle de capitaine pour la nouvelle saison",
    category: "Mercato",
    source: "L'Équipe",
    sourceUrl: "https://www.lequipe.fr/",
    date: "2026-07-15",
    time: "18:30",
    dateLabel: "15 juillet 2026 à 18h30",
    views: 18420,
    featured: false,
    lead: "L'attaquant français conserve le brassard et devient l'axe central du projet sportif pour l'exercice 2026-2027.",
    body: [
      "La direction sportive a tranché : Kylian Mbappé débutera la saison 2026-2027 avec le brassard de capitaine solidement accroché au bras. Cette décision, présentée en interne comme une évidence, vient récompenser une saison passée marquée par une régularité impressionnante et par une implication grandissante en dehors du terrain.",
      "Selon les informations relayées par plusieurs suiveurs du club, le choix ne s'est pas fait dans la précipitation. Le staff technique souhaitait s'assurer que le joueur acceptait pleinement les responsabilités qui accompagnent ce statut, notamment la relation avec les plus jeunes de l'effectif et le rôle de relais auprès de l'entraîneur. Les échanges de ces dernières semaines ont visiblement levé les derniers doutes.",
      "Sur le plan sportif, l'international français aborde cette échéance avec l'ambition affichée de franchir un nouveau palier. Ses statistiques de la saison écoulée le placent déjà parmi les attaquants les plus décisifs du continent, mais son entourage insiste sur sa volonté de peser davantage dans les grands rendez-vous européens, là où les critiques se sont parfois faites plus insistantes.",
      "Le nouveau capitaine hérite également d'un vestiaire en pleine reconstruction. Plusieurs cadres ont quitté le navire lors du dernier mercato, laissant un espace de leadership que la direction espère voir occupé par sa vedette. Les premiers retours des séances de préparation décrivent un joueur davantage tourné vers le collectif, prompt à encourager ses coéquipiers et à donner de la voix lors des exercices tactiques.",
      "L'entraîneur, de son côté, voit dans cette nomination un levier pour installer durablement sa méthode. En confiant les clés du vestiaire à un joueur d'expérience malgré son jeune âge, il espère créer une continuité entre le terrain et les choix du staff. Le technicien a d'ailleurs multiplié les entretiens individuels pour clarifier les attentes de chacun.",
      "Reste désormais à transformer l'essai sur la pelouse. Les premiers matchs de préparation offriront un aperçu de la dynamique instaurée, avant un début de championnat qui s'annonce exigeant. Le club, lui, mise sur cette stabilité pour aborder sereinement une saison où les attentes du public seront, une fois de plus, à la hauteur des ambitions affichées.",
      "En attendant, la nomination fait déjà réagir les supporters, nombreux à saluer un choix qui symbolise une nouvelle ère. Pour beaucoup d'observateurs, ce brassard dépasse le simple symbole : il incarne un pari sur la maturité d'un joueur appelé à porter le projet sur le long terme."
    ]
  },

  {
    id: "arsenal-milieu-defensif-record",
    title: "Arsenal boucle l'arrivée d'un milieu défensif pour un montant record",
    category: "Transferts",
    source: "Fabrizio Romano",
    sourceUrl: "https://x.com/FabrizioRomano",
    date: "2026-07-15",
    time: "16:05",
    dateLabel: "15 juillet 2026 à 16h05",
    views: 15230,
    featured: false,
    lead: "Le club londonien a finalisé le recrutement d'un milieu de terrain très convoité, au terme de longues négociations.",
    body: [
      "C'est désormais officiel dans les têtes des dirigeants : Arsenal tient son nouveau milieu défensif. D'après les éléments rapportés par le journaliste Fabrizio Romano, l'accord total a été trouvé entre les deux clubs, et le joueur a donné son feu vert définitif après plusieurs jours de réflexion.",
      "Le transfert, dont le montant atteindrait un niveau record pour ce poste au sein du club, comprend une part fixe conséquente ainsi que des bonus liés aux performances collectives et individuelles. Les deux formations ont mis du temps à s'entendre sur la structure de l'opération, chaque partie souhaitant sécuriser ses intérêts avant de valider le paiement échelonné.",
      "Du côté du staff technique, l'arrivée de ce profil répond à un besoin identifié de longue date. L'entraîneur réclamait un joueur capable de casser les lignes adverses, de sécuriser l'entrejeu et d'apporter une première relance propre. Les qualités défensives du nouveau venu, associées à une bonne lecture du jeu, correspondent au cahier des charges défini en début d'intersaison.",
      "Le joueur, lui, aurait été séduit par le projet sportif présenté par la direction. Les discussions ont notamment porté sur son rôle exact dans le dispositif, sur le temps de jeu envisagé et sur les ambitions européennes du club. Autant d'éléments qui ont pesé dans sa décision de rejoindre la Premier League.",
      "La visite médicale, programmée dans les prochaines heures, constitue la dernière étape avant l'annonce officielle. Sauf énorme surprise, le milieu de terrain devrait rapidement poser pour ses premières photos sous ses nouvelles couleurs et intégrer le groupe à l'entraînement.",
      "Cette recrue s'inscrit dans une stratégie plus large de renforcement de l'effectif. Les dirigeants n'ont pas caché leur volonté d'étoffer chaque ligne afin de disposer d'un groupe compétitif sur tous les tableaux. D'autres mouvements, aussi bien dans le sens des arrivées que des départs, sont encore attendus d'ici la fin du mercato.",
      "Pour les supporters, cette signature envoie un signal fort quant aux intentions du club. Après plusieurs saisons de progression, l'objectif affiché est désormais de jouer les tout premiers rôles. L'intégration rapide de la recrue sera scrutée de près, tant les attentes autour de ce recrutement sont élevées."
    ]
  },

  {
    id: "juventus-jeune-ailier-officiel",
    title: "La Juventus officialise la signature d'un jeune ailier prometteur",
    category: "Transferts",
    source: "Sky Sports",
    sourceUrl: "https://www.skysports.com/football",
    date: "2026-07-14",
    time: "21:15",
    dateLabel: "14 juillet 2026 à 21h15",
    views: 9840,
    featured: false,
    lead: "Le club turinois mise sur la jeunesse en s'attachant les services d'un ailier au potentiel très remarqué.",
    body: [
      "La Juventus a annoncé la conclusion d'un accord pour le transfert d'un jeune ailier considéré comme l'un des talents les plus prometteurs de sa génération. L'information, initialement rapportée par Sky Sports, a été confirmée par le club à travers un communiqué sobre mais sans ambiguïté.",
      "Le joueur, qui s'est engagé pour plusieurs saisons, arrive avec la réputation d'un dribbleur capable de faire la différence dans les petits espaces. Ses performances de la saison écoulée, marquées par plusieurs buts et passes décisives, ont attiré l'attention de nombreux clubs européens avant que la formation italienne ne prenne les devants.",
      "Pour la direction sportive, cette signature illustre une orientation assumée : miser sur des profils jeunes, à forte marge de progression, plutôt que sur des joueurs confirmés au coût prohibitif. Cette stratégie vise à la fois à rajeunir l'effectif et à valoriser d'éventuelles reventes futures.",
      "L'entraîneur devrait toutefois accompagner sa nouvelle recrue avec patience. Le passage d'un championnat à un autre implique une période d'adaptation, tant sur le plan tactique que physique. Le staff prévoit une intégration progressive, avec des responsabilités qui iront croissant au fil des matchs.",
      "Le joueur, de son côté, a exprimé son enthousiasme à l'idée de découvrir un nouveau championnat réputé pour son exigence défensive. Il devra rapidement se familiariser avec un style de jeu où l'organisation et la rigueur priment souvent sur la seule qualité individuelle.",
      "Ce recrutement s'ajoute aux mouvements déjà réalisés par le club depuis l'ouverture du mercato. La direction cherche à composer un groupe équilibré, capable de rivaliser sur la scène nationale comme sur la scène continentale. Les prochains jours pourraient encore réserver leur lot d'annonces.",
      "Reste à voir comment le jeune ailier saura répondre aux attentes. Les supporters, souvent exigeants, attendront de lui des étincelles rapides. Mais son entourage appelle à la mesure, rappelant que les plus belles carrières se construisent souvent dans la durée."
    ]
  },

  {
    id: "finale-supercoupe-europe-resultat",
    title: "Supercoupe d'Europe : un scénario renversant décide du vainqueur",
    category: "Compétitions",
    source: "RMC Sport",
    sourceUrl: "https://rmcsport.bfmtv.com/football/",
    date: "2026-07-14",
    time: "23:40",
    dateLabel: "14 juillet 2026 à 23h40",
    views: 21150,
    featured: false,
    lead: "Menés puis revenus dans le match, les deux prétendants se sont livrés une bataille indécise jusqu'aux dernières minutes.",
    body: [
      "La finale de la Supercoupe d'Europe a tenu toutes ses promesses. Dans un stade comble et une ambiance électrique, les deux équipes ont offert un spectacle de haute intensité, ponctué de rebondissements jusque dans le temps additionnel. Le récit qui suit s'appuie sur le compte rendu proposé par RMC Sport.",
      "Le match démarre sur un rythme soutenu. La première équipe prend rapidement l'ascendant et ouvre le score à la suite d'une action collective bien construite. Portée par son avantage, elle contrôle une bonne partie de la première période, multipliant les occasions sans parvenir à faire le break.",
      "Au retour des vestiaires, le scénario bascule. L'équipe menée au tableau d'affichage revient sur la pelouse avec de meilleures intentions et parvient à égaliser sur une action née d'un pressing haut. Le match s'équilibre, chaque camp cherchant à prendre l'avantage sans se découvrir totalement.",
      "L'entrée de plusieurs remplaçants dynamise la rencontre dans le dernier quart d'heure. Les changements opérés par les deux entraîneurs apportent de la fraîcheur et modifient les rapports de force. Les occasions se multiplient, les gardiens se mettent en évidence, et le suspense reste entier.",
      "C'est finalement dans les ultimes instants que le dénouement intervient. Une action décisive, conclue avec sang-froid, permet à l'un des deux camps de reprendre l'avantage et de tenir le score jusqu'au coup de sifflet final. La joie des uns répond à la déception des autres, au terme d'une soirée riche en émotions.",
      "Au-delà du résultat, cette rencontre a offert de précieux enseignements aux deux staffs à l'approche de la reprise des championnats. Les automatismes ne sont pas encore parfaitement en place, mais l'engagement affiché laisse entrevoir une saison prometteuse pour les deux formations.",
      "Pour le vainqueur, ce premier trophée de la saison représente un signal fort envoyé à la concurrence. Pour le vaincu, il s'agira de tirer les leçons de cette finale afin de rebondir dès les premières échéances officielles. Le ton, lui, est déjà donné."
    ]
  },

  {
    id: "blessure-defenseur-central-preparation",
    title: "Coup dur en préparation : un défenseur central touché à la cuisse",
    category: "Faits divers",
    source: "Foot Mercato",
    sourceUrl: "https://www.footmercato.net/",
    date: "2026-07-13",
    time: "14:20",
    dateLabel: "13 juillet 2026 à 14h20",
    views: 7320,
    featured: false,
    lead: "Sorti prématurément lors d'un match amical, le défenseur passera des examens complémentaires dans les prochains jours.",
    body: [
      "Mauvaise nouvelle pour le staff médical : un défenseur central a été contraint de quitter le terrain lors du dernier match de préparation, visiblement gêné par une douleur à la cuisse. L'information, rapportée par Foot Mercato, suscite l'inquiétude à quelques semaines de la reprise officielle.",
      "L'incident s'est produit en première période, sur une action apparemment anodine. Le joueur a ressenti une gêne après un appui et a immédiatement fait signe au banc. Par précaution, le staff a préféré le remplacer sans prendre le moindre risque, à un moment de la saison où la prudence prime sur la compétition.",
      "Les premiers examens doivent permettre de déterminer la nature exacte de la blessure. Selon la gravité, la durée d'indisponibilité pourrait varier de quelques jours à plusieurs semaines. Le club se montre volontairement discret, préférant attendre les résultats avant de communiquer un diagnostic précis.",
      "Cette alerte intervient à un moment délicat de la préparation. L'entraîneur comptait sur cette période pour roder sa défense et installer ses automatismes. L'absence, même temporaire, d'un cadre du secteur défensif pourrait le contraindre à revoir ses plans et à tester d'autres associations.",
      "Le joueur concerné, habitué des pelouses, connaît l'importance de ne pas précipiter son retour. Les rechutes, fréquentes lorsqu'un footballeur reprend trop tôt, représentent le principal risque à surveiller. Le staff privilégiera donc une reprise progressive, encadrée par les kinésithérapeutes du club.",
      "En cas d'indisponibilité prolongée, la question du recrutement pourrait se poser. La direction sportive, déjà active sur le marché, surveille plusieurs pistes défensives. Une blessure sérieuse pourrait accélérer certaines démarches afin de ne pas fragiliser l'effectif dès l'entame de la saison.",
      "Pour l'heure, l'heure est à la prudence et à la patience. Les supporters, eux, espèrent une frayeur sans conséquence. Le verdict des examens médicaux, attendu prochainement, permettra d'y voir plus clair sur la suite du parcours du défenseur."
    ]
  },

  {
    id: "barcelone-gardien-negociations",
    title: "Le Barça accélère les discussions pour un nouveau gardien de but",
    category: "Mercato",
    source: "The Athletic",
    sourceUrl: "https://www.nytimes.com/athletic/football/",
    date: "2026-07-13",
    time: "11:00",
    dateLabel: "13 juillet 2026 à 11h00",
    views: 11260,
    featured: false,
    lead: "Le club catalan cherche à renforcer son poste de gardien et aurait intensifié ses contacts ces derniers jours.",
    body: [
      "Le FC Barcelone a fait du renforcement de son poste de gardien une priorité de son intersaison. D'après les informations publiées par The Athletic, la direction sportive a multiplié les contacts afin d'identifier le profil idéal pour concurrencer, voire suppléer, ses portiers actuels.",
      "Plusieurs pistes seraient à l'étude, allant du gardien confirmé au portier plus jeune disposant d'une belle marge de progression. Le club catalan doit toutefois composer avec une situation financière qui l'oblige à une certaine créativité dans le montage de ses opérations, entre prêts, échanges et paiements différés.",
      "Sur le plan sportif, le besoin apparaît clairement. Le staff souhaite disposer d'un gardien fiable sur sa ligne, à l'aise dans le jeu au pied et capable de rassurer une défense parfois fébrile la saison passée. La relance propre, devenue essentielle dans le football moderne, figure parmi les critères déterminants.",
      "Les négociations s'annoncent toutefois délicates. Les clubs vendeurs, conscients de l'intérêt catalan, ont tendance à hausser leurs exigences financières. Barcelone devra donc faire preuve de patience et, sans doute, accepter quelques compromis pour parvenir à ses fins avant la clôture du marché.",
      "En interne, la question de la hiérarchie des gardiens fait aussi débat. L'arrivée d'un nouveau portier pourrait rebattre les cartes et pousser certains éléments vers la sortie. Le staff devra gérer avec soin les egos et clarifier les rôles pour éviter toute tension dans le vestiaire.",
      "Ce dossier s'inscrit dans une intersaison globalement mouvementée pour le club. Entre départs à négocier, prolongations à sécuriser et recrues à intégrer, la direction avance sur plusieurs fronts en parallèle. Le poste de gardien n'est que l'une des priorités d'un chantier plus vaste.",
      "Les prochains jours seront déterminants pour mesurer la solidité des pistes évoquées. Les supporters, attentifs, espèrent une issue rapide afin d'aborder la reprise avec un effectif au complet. Le feuilleton, lui, promet encore quelques rebondissements."
    ]
  },

  {
    id: "match-amical-derby-regional",
    title: "Match amical animé lors d'un derby régional disputé",
    category: "Matchs",
    source: "L'Équipe",
    sourceUrl: "https://www.lequipe.fr/",
    date: "2026-07-12",
    time: "20:00",
    dateLabel: "12 juillet 2026 à 20h00",
    views: 6540,
    featured: false,
    lead: "Deux clubs voisins se sont retrouvés pour un match de préparation intense, riche en occasions et en engagement.",
    body: [
      "Le derby régional, même en amical, conserve toujours une saveur particulière. Les deux formations voisines se sont retrouvées pour un match de préparation disputé devant un public nombreux, venu prendre le pouls de son équipe avant la reprise. Le compte rendu ci-dessous reprend les faits marquants relatés par L'Équipe.",
      "Dès l'entame, les deux équipes ont affiché des intentions offensives. Consciente de l'importance symbolique du rendez-vous, chacune a cherché à prendre l'ascendant sur son rival, quitte à laisser quelques espaces défensifs. Le rythme, élevé pour une rencontre de préparation, a offert un spectacle plaisant.",
      "La première mi-temps a été marquée par plusieurs occasions franches de part et d'autre. Les gardiens se sont illustrés à tour de rôle, retardant l'ouverture du score. Les entraîneurs, eux, ont profité de cette période pour tester différentes associations et évaluer la condition physique de leurs joueurs.",
      "En seconde période, les nombreux changements ont quelque peu haché le jeu, comme souvent lors des matchs de préparation. Les jeunes issus des centres de formation ont eu droit à leur temps de jeu, offrant un aperçu du vivier disponible pour la saison à venir. Certains ont su saisir leur chance pour se mettre en évidence.",
      "Au-delà du résultat, secondaire à ce stade de la préparation, les deux staffs retiendront surtout l'intensité et l'état d'esprit affichés. Ces rencontres servent avant tout à emmagasiner des minutes, à retrouver des repères collectifs et à préparer les organismes aux échéances officielles.",
      "Les supporters, eux, ont apprécié de retrouver l'ambiance des derbys, même dans un cadre amical. Les rivalités locales, ancrées dans l'histoire des deux clubs, ne demandent qu'à se raviver dès que le championnat reprendra ses droits.",
      "Rendez-vous est désormais pris pour les prochaines confrontations, qui compteront cette fois pour de bon. En attendant, ce derby de préparation aura offert un avant-goût des affrontements à venir, pour le plus grand plaisir des amateurs de football régional."
    ]
  },

  {
    id: "milan-prolongation-cadre-vestiaire",
    title: "L'AC Milan sécurise la prolongation de l'un de ses cadres",
    category: "Mercato",
    source: "Sky Sports",
    sourceUrl: "https://www.skysports.com/football",
    date: "2026-07-12",
    time: "09:45",
    dateLabel: "12 juillet 2026 à 09h45",
    views: 8130,
    featured: false,
    lead: "Un pilier de l'effectif milanais a paraphé un nouveau contrat, mettant fin aux spéculations sur son avenir.",
    body: [
      "L'AC Milan peut souffler. L'un de ses cadres, dont l'avenir alimentait les rumeurs depuis plusieurs semaines, a finalement prolongé son contrat avec le club lombard. L'annonce, relayée par Sky Sports, met un terme à un dossier scruté de près par les supporters.",
      "Le joueur, courtisé par plusieurs formations étrangères, a choisi de poursuivre l'aventure. Les discussions, entamées discrètement en fin de saison dernière, ont abouti après plusieurs rounds de négociations portant sur la durée du contrat, le salaire et le rôle sportif du joueur au sein du projet.",
      "Pour la direction, cette prolongation revêt une importance stratégique. Conserver ses éléments d'expérience permet d'assurer une continuité et d'éviter un chantier de reconstruction coûteux. Le club envoie également un signal fort quant à sa capacité à retenir ses meilleurs éléments face à la concurrence.",
      "Du point de vue sportif, le maintien de ce cadre apporte des garanties à l'entraîneur. Habitué au championnat et respecté dans le vestiaire, le joueur incarne une forme de stabilité précieuse dans un effectif appelé à évoluer. Son leadership sera une nouvelle fois mis à contribution.",
      "Le joueur, de son côté, a exprimé son attachement au club et sa volonté de participer aux ambitions affichées pour les prochaines saisons. Il a insisté sur l'importance du projet sportif présenté par la direction, jugé suffisamment convaincant pour repousser les sollicitations extérieures.",
      "Cette signature s'inscrit dans une politique plus large de fidélisation. Le club travaille en parallèle sur d'autres prolongations, soucieux de bâtir sur des bases solides. La stabilité du noyau dur est souvent présentée comme un préalable indispensable à toute réussite sur la durée.",
      "Les supporters, soulagés, saluent une décision qui renforce la colonne vertébrale de l'équipe. Reste désormais à traduire cette stabilité en résultats sur le terrain, dès la reprise d'un championnat qui s'annonce, une fois encore, particulièrement disputé."
    ]
  },

  {
    id: "incident-tribunes-match-preparation",
    title: "Match interrompu quelques minutes après un incident en tribunes",
    category: "Faits divers",
    source: "RMC Sport",
    sourceUrl: "https://rmcsport.bfmtv.com/football/",
    date: "2026-07-11",
    time: "22:10",
    dateLabel: "11 juillet 2026 à 22h10",
    views: 5980,
    featured: false,
    lead: "La rencontre a été brièvement suspendue avant de reprendre son cours, sans conséquence sportive majeure.",
    body: [
      "Un match de préparation a connu une interruption momentanée à la suite d'un incident survenu dans les tribunes. L'arbitre a préféré suspendre brièvement le jeu par mesure de précaution, avant que la rencontre ne reprenne dans un climat apaisé. Les faits sont rapportés par RMC Sport.",
      "L'incident, sans gravité pour l'intégrité des joueurs, a néanmoins nécessité l'intervention des services de sécurité présents autour de la pelouse. Le temps que la situation revienne à la normale, les acteurs du match sont restés sur le terrain, dans l'attente du feu vert de l'arbitre pour reprendre le jeu.",
      "Ce type d'événement, bien que rare lors des rencontres de préparation, rappelle l'importance des dispositifs de sécurité mis en place autour des stades. Les clubs, en lien avec les autorités, travaillent en permanence à l'amélioration de l'encadrement des spectateurs afin de garantir des rencontres sereines.",
      "Sur le plan sportif, l'interruption n'a pas eu d'incidence notable sur le déroulement du match. Les deux équipes ont repris leurs esprits rapidement et poursuivi leur préparation comme prévu. Les entraîneurs ont maintenu leurs plans de rotation, soucieux de donner du temps de jeu à l'ensemble de leur groupe.",
      "Le club organisateur a tenu à rappeler son attachement au respect et à la convivialité qui doivent entourer les rencontres, y compris amicales. Un communiqué mesuré a été diffusé afin de rassurer les supporters et de saluer le professionnalisme des équipes de sécurité.",
      "Les incidents de ce type, largement minoritaires au regard du nombre de rencontres disputées chaque saison, font l'objet d'une vigilance constante. Les instances encouragent le dialogue entre clubs et groupes de supporters pour prévenir toute dérive et préserver la fête du football.",
      "La rencontre s'est finalement achevée dans le calme, à la satisfaction générale. Chacun retiendra surtout la réactivité des organisateurs, qui ont su gérer la situation avec sérieux et sans dramatisation excessive."
    ]
  },

  {
    id: "napoli-latéral-piste-prioritaire",
    title: "Naples fait d'un latéral polyvalent sa piste prioritaire",
    category: "Transferts",
    source: "Foot Mercato",
    sourceUrl: "https://www.footmercato.net/",
    date: "2026-07-11",
    time: "12:30",
    dateLabel: "11 juillet 2026 à 12h30",
    views: 7710,
    featured: false,
    lead: "Le club napolitain souhaite renforcer ses couloirs et aurait ciblé un défenseur capable d'évoluer des deux côtés.",
    body: [
      "Naples cherche à renforcer ses couloirs et aurait identifié une cible prioritaire pour y parvenir. Selon les informations de Foot Mercato, le club italien lorgne un latéral réputé pour sa polyvalence, capable d'évoluer aussi bien à droite qu'à gauche de la défense.",
      "Ce profil, de plus en plus recherché dans le football moderne, présente l'avantage d'offrir plusieurs solutions à l'entraîneur. Disposer d'un joueur adaptable aux deux flancs permet de gérer plus sereinement les blessures, les suspensions et les périodes de rotation liées à un calendrier chargé.",
      "Les premières approches auraient déjà été effectuées, même si un accord définitif reste à trouver. Le club vendeur, conscient de la valeur de son joueur, ne semble pas pressé de le laisser partir sans une compensation financière conséquente. Les négociations pourraient donc s'étirer dans le temps.",
      "Sur le plan tactique, l'arrivée d'un tel élément répondrait à un besoin identifié par le staff. Les couloirs constituent des zones stratégiques, à la fois pour la solidité défensive et pour l'animation offensive. Un latéral fiable et endurant est souvent considéré comme un atout précieux sur l'ensemble d'une saison.",
      "Le joueur ciblé, de son côté, serait sensible au projet napolitain et à la perspective de disputer une compétition européenne. La dimension sportive, autant que financière, pèsera dans sa décision finale. Son entourage se montre pour l'instant discret sur l'état d'avancement du dossier.",
      "Cette piste s'inscrit dans une intersaison ambitieuse pour le club, qui entend se renforcer à plusieurs postes. La direction sportive avance méthodiquement, en veillant à respecter son cadre budgétaire tout en répondant aux demandes du staff technique.",
      "Les supporters suivent ce dossier avec attention, espérant une issue favorable. Le renforcement des couloirs est perçu comme une nécessité pour franchir un cap. Reste à savoir si les deux clubs parviendront à s'entendre dans les délais impartis."
    ]
  },

  {
    id: "tirage-phase-ligue-europeenne",
    title: "Compétitions européennes : le calendrier de la phase de ligue dévoilé",
    category: "Compétitions",
    source: "The Athletic",
    sourceUrl: "https://www.nytimes.com/athletic/football/",
    date: "2026-07-10",
    time: "19:00",
    dateLabel: "10 juillet 2026 à 19h00",
    views: 13480,
    featured: false,
    lead: "Les affiches de la nouvelle phase de ligue sont connues, promettant plusieurs chocs dès les premières journées.",
    body: [
      "Les regards des amateurs de football européen se sont tournés vers la cérémonie de programmation, qui a livré le détail de la nouvelle phase de ligue. Les affiches, désormais connues, dessinent déjà les contours d'une compétition relevée. Le récapitulatif ci-dessous s'appuie sur l'analyse proposée par The Athletic.",
      "Le format, qui réunit l'ensemble des clubs qualifiés dans un classement unique, continue de susciter l'intérêt. Chaque équipe affronte un panel d'adversaires variés, avec l'objectif de terminer le mieux possible pour éviter les tours préliminaires supplémentaires et se rapprocher directement des phases à élimination directe.",
      "Plusieurs chocs se profilent dès les premières journées. Les confrontations entre cadors du continent promettent des soirées de gala, tandis que les formations plus modestes tenteront de créer la surprise face à des adversaires théoriquement supérieurs. L'incertitude, marque de fabrique de la compétition, reste entière.",
      "Pour les entraîneurs, la gestion du calendrier constituera un enjeu majeur. Entre les obligations nationales et les échéances continentales, la profondeur de banc et la capacité à faire tourner l'effectif seront déterminantes. Les blessures et la fatigue accumulée pourraient peser lourd dans la balance au fil des mois.",
      "Les clubs les plus ambitieux abordent cette édition avec l'objectif clairement affiché d'aller le plus loin possible. Les investissements consentis sur le marché des transferts traduisent cette volonté de briller sur la scène européenne, souvent considérée comme le juge de paix d'une saison réussie.",
      "Du côté des supporters, l'enthousiasme est déjà palpable. Les déplacements à l'étranger, les ambiances de soirées européennes et les affiches prestigieuses font partie intégrante du charme de la compétition. Les premières journées sont attendues avec impatience.",
      "Il faudra toutefois patienter encore quelques semaines avant le coup d'envoi. D'ici là, les équipes peaufineront leur préparation et finaliseront leur effectif. La phase de ligue, elle, promet déjà son lot de surprises et de rebondissements."
    ]
  },

  {
    id: "gardien-arret-decisif-penalty",
    title: "Un gardien s'illustre en repoussant un penalty décisif en fin de match",
    category: "Matchs",
    source: "RMC Sport",
    sourceUrl: "https://rmcsport.bfmtv.com/football/",
    date: "2026-07-10",
    time: "17:25",
    dateLabel: "10 juillet 2026 à 17h25",
    views: 9020,
    featured: false,
    lead: "Auteur d'un arrêt déterminant dans les dernières minutes, le portier a préservé le résultat de son équipe.",
    body: [
      "Il y a des matchs qui se décident sur un geste. Lors d'une rencontre de préparation disputée, un gardien de but s'est illustré en repoussant un penalty dans les ultimes minutes, préservant ainsi le résultat de son équipe. La scène est relatée par RMC Sport.",
      "L'action débute par une faute sifflée dans la surface, offrant l'occasion aux visiteurs d'égaliser. La tension monte alors d'un cran. Le tireur s'avance avec assurance, mais le portier, resté concentré, choisit le bon côté et détourne la tentative d'une parade réflexe saluée par le public.",
      "Cet arrêt, au-delà de son importance dans le résultat, illustre la forme retrouvée du gardien à l'approche de la reprise. Après une préparation studieuse, le portier semble avoir retrouvé ses sensations et sa sérénité sur sa ligne, deux qualités essentielles pour aborder sereinement la saison.",
      "Pour l'entraîneur, ce type de performance constitue une garantie précieuse. Disposer d'un gardien fiable, capable de sortir les grands arrêts dans les moments chauds, apporte une forme de sérénité à l'ensemble de la défense. La hiérarchie des gardiens, souvent débattue, pourrait s'en trouver clarifiée.",
      "Le portier, interrogé après la rencontre, a tenu à relativiser sa performance individuelle, insistant sur le collectif et sur le travail accompli à l'entraînement. Une humilité appréciée dans le vestiaire, où son leadership discret mais réel est reconnu par ses coéquipiers.",
      "Ce match de préparation, au-delà de l'anecdote, aura permis au staff de tester différents systèmes et d'évaluer la condition physique de son groupe. Les enseignements tirés de ces rencontres seront précieux pour affiner les choix avant les premières échéances officielles.",
      "Les supporters, eux, retiendront surtout ce moment de bravoure. Un arrêt décisif en préparation ne vaut certes pas les points d'un championnat, mais il envoie un signal encourageant. La saison, elle, dira si cette forme se confirme sur la durée."
    ]
  },

  {
    id: "dortmund-depart-cadre-offensif",
    title: "Dortmund se prépare au départ de l'un de ses éléments offensifs",
    category: "Mercato",
    source: "Sky Sports",
    sourceUrl: "https://www.skysports.com/football",
    date: "2026-07-09",
    time: "15:50",
    dateLabel: "9 juillet 2026 à 15h50",
    views: 8460,
    featured: false,
    lead: "Le club allemand pourrait laisser filer un de ses attaquants, courtisé par plusieurs formations européennes.",
    body: [
      "Le Borussia Dortmund, réputé pour sa capacité à valoriser ses talents, pourrait bientôt enregistrer le départ de l'un de ses éléments offensifs. D'après Sky Sports, plusieurs clubs européens se seraient positionnés sur le joueur, dont le profil suscite un intérêt grandissant.",
      "Fidèle à sa politique sportive, le club allemand n'est pas fermé à l'idée de céder l'un de ses joueurs à condition d'obtenir une compensation financière à la hauteur. Cette stratégie, éprouvée depuis plusieurs années, permet au club de dégager des ressources tout en misant régulièrement sur de nouveaux talents.",
      "Le joueur concerné, séduit par la perspective d'un nouveau challenge, ne serait pas insensible aux sollicitations. Un départ lui permettrait de découvrir un autre championnat et, potentiellement, de franchir un cap dans sa carrière. Les discussions entre les différentes parties se poursuivent.",
      "Pour le staff, un tel départ impliquerait de trouver rapidement une solution de remplacement. La direction sportive, habituée à anticiper ce type de mouvement, suivrait déjà plusieurs pistes afin de ne pas se retrouver démunie en cas de transfert confirmé. La réactivité sera de mise.",
      "Ce dossier illustre le modèle économique du club, fondé sur la formation, la détection et la revente à forte plus-value. Si cette approche peut frustrer les supporters, attachés à leurs joueurs, elle a permis à la formation de rester compétitive tout en préservant son équilibre financier.",
      "Le montant de l'éventuelle transaction reste à préciser. Les clubs intéressés devront s'aligner sur les exigences allemandes pour espérer conclure. Les prochaines semaines seront décisives pour connaître l'issue de ce feuilleton estival.",
      "Les supporters, partagés, oscillent entre la crainte de perdre un joueur apprécié et la confiance placée dans la capacité de leur club à rebondir. L'histoire récente leur a souvent donné raison. Reste à voir si le scénario se répétera une nouvelle fois."
    ]
  },

  {
    id: "reprise-entrainement-tests-physiques",
    title: "Reprise de l'entraînement : les joueurs soumis à une batterie de tests",
    category: "Matchs",
    source: "L'Équipe",
    sourceUrl: "https://www.lequipe.fr/",
    date: "2026-07-09",
    time: "10:15",
    dateLabel: "9 juillet 2026 à 10h15",
    views: 5410,
    featured: false,
    lead: "Le groupe a repris le chemin de l'entraînement avec, au programme, des évaluations physiques et médicales approfondies.",
    body: [
      "La trêve estivale touche à sa fin pour de nombreux clubs, qui ont convoqué leurs joueurs pour la reprise de l'entraînement. Au programme de ces premières journées : une batterie de tests physiques et médicaux destinés à évaluer l'état de forme de chacun. Le déroulé s'appuie sur les observations de L'Équipe.",
      "Ces évaluations constituent une étape incontournable de la préparation. Elles permettent au staff médical et aux préparateurs physiques d'établir un état des lieux précis après plusieurs semaines de coupure. Les données recueillies serviront de base pour individualiser les programmes de travail dans les semaines à venir.",
      "Les joueurs sont ainsi soumis à des tests d'endurance, de vitesse et de force, mais aussi à des examens médicaux complets. L'objectif est double : prévenir les blessures et amener progressivement les organismes vers le pic de forme recherché au moment de la reprise du championnat.",
      "Cette phase de reprise est souvent perçue comme la plus exigeante de la saison sur le plan physique. Les charges de travail, importantes, visent à construire les fondations athlétiques nécessaires pour tenir sur la durée. Les joueurs le savent : c'est en juillet que se prépare le mois de mai suivant.",
      "Le staff technique profite également de cette période pour observer les joueurs de retour de vacances. La condition physique affichée à la reprise en dit souvent long sur le sérieux avec lequel chacun a géré sa coupure. Les écarts, s'ils existent, sont rapidement identifiés et corrigés.",
      "Les jeunes du centre de formation, associés au groupe professionnel, profitent de cette période pour se montrer. La préparation offre régulièrement des opportunités aux talents émergents de taper à la porte de l'équipe première et de convaincre l'entraîneur de leur faire confiance.",
      "Les prochaines semaines seront rythmées par les matchs de préparation, qui compléteront le travail réalisé à l'entraînement. En attendant, cette reprise studieuse pose les bases d'une saison que chacun espère réussie, à commencer par les supporters."
    ]
  },

  {
    id: "liverpool-officialise-milieu-creatif",
    title: "Liverpool officialise l'arrivée d'un milieu créatif très attendu",
    category: "Transferts",
    source: "Fabrizio Romano",
    sourceUrl: "https://x.com/FabrizioRomano",
    date: "2026-07-08",
    time: "18:00",
    dateLabel: "8 juillet 2026 à 18h00",
    views: 16750,
    featured: false,
    lead: "Le club de la Mersey renforce son entrejeu avec un meneur de jeu réputé pour sa vision et sa qualité de passe.",
    body: [
      "Liverpool a franchi une étape importante de son intersaison en officialisant l'arrivée d'un milieu créatif longtemps convoité. L'information, confirmée par Fabrizio Romano, met un terme à un dossier qui aura tenu en haleine les supporters durant plusieurs semaines.",
      "Le joueur, réputé pour sa vision du jeu et sa qualité de passe, s'inscrit parfaitement dans l'identité offensive prônée par le club. Sa capacité à orienter le jeu, à casser les lignes et à se projeter vers l'avant devrait apporter une dimension supplémentaire à un entrejeu déjà réputé pour son intensité.",
      "Les négociations, entamées de longue date, ont nécessité de la patience de part et d'autre. Le montant du transfert, conséquent, traduit l'ambition du club de se doter des meilleurs profils pour rivaliser sur tous les tableaux. Les bonus prévus dans l'accord pourraient encore faire grimper la facture.",
      "Pour l'entraîneur, cette recrue répond à un besoin clairement identifié. Le staff souhaitait ajouter de la créativité dans un secteur parfois trop porté sur le volume de courses au détriment de l'invention. Le nouveau venu apporte cette touche de génie susceptible de débloquer les matchs verrouillés.",
      "Le joueur, de son côté, a exprimé sa joie de rejoindre un club de cette envergure. Il a souligné l'attrait du projet sportif et la perspective de jouer les premiers rôles sur la scène nationale comme européenne. Son adaptation au rythme intense de la Premier League sera scrutée de près.",
      "Cette signature s'inscrit dans une intersaison ambitieuse. La direction sportive entend construire un effectif capable de répondre aux attentes élevées du public et de la propriété. D'autres mouvements pourraient encore intervenir d'ici la clôture du marché des transferts.",
      "Les supporters, enthousiastes, voient dans ce recrutement un signal fort. Reste désormais à traduire cet investissement en performances sur le terrain. Le premier test grandeur nature interviendra dès les matchs de préparation, avant l'entame d'un championnat toujours aussi relevé."
    ]
  },

  {
    id: "sanction-disciplinaire-joueur-comportement",
    title: "Un joueur sanctionné en interne après un manquement disciplinaire",
    category: "Faits divers",
    source: "Foot Mercato",
    sourceUrl: "https://www.footmercato.net/",
    date: "2026-07-08",
    time: "13:40",
    dateLabel: "8 juillet 2026 à 13h40",
    views: 6890,
    featured: false,
    lead: "La direction a pris une mesure disciplinaire à l'encontre d'un joueur, sans en préciser publiquement les détails.",
    body: [
      "Un club a décidé de sanctionner en interne l'un de ses joueurs à la suite d'un manquement disciplinaire. L'information, rapportée par Foot Mercato, reste volontairement discrète sur les détails, la direction préférant gérer l'affaire en interne pour préserver la sérénité du groupe.",
      "Ce type de décision, courant dans le monde professionnel, vise à rappeler l'importance du respect des règles collectives. Retards répétés, écarts de comportement ou non-respect des consignes : les motifs peuvent varier, mais l'objectif reste le même, préserver la cohésion et l'exemplarité au sein du vestiaire.",
      "La sanction prononcée resterait mesurée et proportionnée. Les clubs disposent généralement d'un règlement intérieur précisant les mesures applicables en fonction de la gravité des faits. Amende, mise à l'écart temporaire ou travail supplémentaire : les leviers ne manquent pas pour recadrer un joueur.",
      "Pour l'entraîneur, la gestion de ce type de situation constitue un exercice délicat. Il s'agit de faire respecter l'autorité et les règles sans pour autant fragiliser durablement la relation avec le joueur concerné. Le dialogue, souvent privilégié, permet généralement de désamorcer les tensions.",
      "Le joueur, de son côté, aurait pris acte de la décision. Dans la grande majorité des cas, ce type d'épisode se règle rapidement et sans conséquence durable, dès lors que l'intéressé fait preuve de la volonté de corriger le tir. La page se tourne alors sans bruit.",
      "Ces affaires internes, bien que régulières, filtrent parfois dans les médias, alimentant les spéculations. Les clubs s'efforcent généralement de limiter les fuites afin de ne pas exposer publiquement leurs joueurs et de préserver le climat de travail au sein du groupe.",
      "L'incident devrait rester sans suite notable sur le plan sportif. Le joueur concerné est attendu à l'entraînement dans les jours qui viennent, avec l'occasion de démontrer, sur le terrain, que cet épisode appartient déjà au passé."
    ]
  },

  {
    id: "atletico-renfort-attaque-priorite",
    title: "L'Atlético cible un renfort offensif pour densifier son attaque",
    category: "Mercato",
    source: "The Athletic",
    sourceUrl: "https://www.nytimes.com/athletic/football/",
    date: "2026-07-07",
    time: "16:35",
    dateLabel: "7 juillet 2026 à 16h35",
    views: 7250,
    featured: false,
    lead: "Le club madrilène souhaite ajouter de la profondeur à son secteur offensif et étudie plusieurs options.",
    body: [
      "L'Atlético de Madrid a inscrit le renforcement de son attaque en tête de ses priorités estivales. Selon The Athletic, le club madrilène explore plusieurs pistes afin d'apporter davantage de profondeur et d'options à son secteur offensif pour la saison à venir.",
      "L'objectif affiché est de disposer d'un éventail de solutions permettant de varier les schémas de jeu. Entre attaquant de pointe, ailier percutant ou second attaquant capable de décrocher, le club garde plusieurs profils à l'étude, en fonction des opportunités qui se présenteront sur le marché.",
      "La philosophie de jeu, historiquement fondée sur la solidité défensive, n'exclut pas la recherche d'efficacité offensive. Le staff souhaite se doter d'armes supplémentaires pour faire la différence dans les matchs fermés, souvent nombreux dans un championnat réputé pour son exigence tactique.",
      "Les négociations, comme souvent, dépendront de la capacité du club à équilibrer ses comptes. Des départs pourraient précéder d'éventuelles arrivées, la direction devant composer avec un cadre financier strict. La vente de certains éléments contribuerait à financer les recrutements souhaités.",
      "Le staff technique, consulté sur ce dossier, a précisé ses attentes en matière de profil. La complémentarité avec les joueurs déjà présents constitue un critère déterminant. L'idée n'est pas seulement d'ajouter un nom, mais bien de combler un manque identifié dans l'animation offensive.",
      "Ce chantier s'inscrit dans une intersaison globalement active pour le club. Entre prolongations, départs et arrivées, la direction avance sur plusieurs fronts avec l'ambition de repartir de l'avant. Les supporters attendent des signaux forts après une saison en demi-teinte.",
      "Les prochaines semaines diront si le club parvient à concrétiser ses ambitions offensives. En attendant, les pistes se multiplient et les rumeurs vont bon train. Une chose est sûre : l'attaque figure en haut de la liste des priorités madrilènes."
    ]
  },

  {
    id: "jeune-talent-centre-formation-surclasse",
    title: "Un jeune talent du centre de formation surclassé avec les professionnels",
    category: "Matchs",
    source: "L'Équipe",
    sourceUrl: "https://www.lequipe.fr/",
    date: "2026-07-07",
    time: "09:20",
    dateLabel: "7 juillet 2026 à 09h20",
    views: 6120,
    featured: false,
    lead: "Un espoir du club a été intégré au groupe professionnel pour la préparation, récompense d'une saison remarquée.",
    body: [
      "L'histoire séduit toujours autant les supporters : celle d'un jeune joueur issu du centre de formation propulsé au sein du groupe professionnel. Récompensé pour une saison remarquée chez les jeunes, un espoir du club participe à la préparation avec l'équipe première, comme le rapporte L'Équipe.",
      "Cette intégration, loin d'être anodine, traduit la confiance placée par le staff dans les qualités du joueur. Les entraîneurs de la formation ont unanimement salué sa progression, son état d'esprit et sa capacité à répondre présent dans les moments importants. Autant d'éléments qui ont plaidé en sa faveur.",
      "Pour le jeune joueur, il s'agit d'une étape déterminante dans sa jeune carrière. Côtoyer les professionnels au quotidien, s'entraîner à leurs côtés et bénéficier de leurs conseils constitue une expérience formatrice. L'écart d'intensité et d'exigence est souvent important, mais c'est aussi ce qui fait grandir.",
      "Le staff technique entend accompagner cette montée en puissance avec mesure. La règle est claire : privilégier le développement à long terme plutôt que la précipitation. Les responsabilités seront confiées progressivement, en fonction de la capacité du joueur à s'adapter au niveau supérieur.",
      "Ce type de parcours illustre l'importance de la formation dans le projet du club. Miser sur les jeunes talents permet non seulement de renouveler l'effectif à moindre coût, mais aussi de créer un lien fort avec le public, toujours sensible à l'éclosion de joueurs issus du cru.",
      "Le joueur, conscient de la chance qui lui est offerte, aborde cette période avec humilité et détermination. Son objectif : convaincre l'entraîneur de continuer à lui faire confiance et, pourquoi pas, grappiller du temps de jeu au fil de la saison. Le chemin reste long, mais l'opportunité est belle.",
      "Les supporters, eux, suivent avec bienveillance les premiers pas de leur pépite. L'émergence d'un talent formé au club constitue toujours une source de fierté et d'espoir. Reste à confirmer, sur la durée, les promesses entrevues à la reprise."
    ]
  },

  {
    id: "signature-locale-jeune-attaquant-club",
    title: "Officiel : signature de Lucas Bernard au FC Riviera",
    category: "Locale",
    source: "Rédaction EUROTRANSFER",
    sourceUrl: "",
    date: "2026-07-15",
    time: "19:00",
    dateLabel: "15 juillet 2026 à 19h00",
    views: 3240,
    featured: false,
    lead: "Le jeune attaquant Lucas Bernard rejoint officiellement le FC Riviera pour la saison 2026-2027.",
    body: [
      "Le jeune joueur Lucas Bernard rejoint officiellement le FC Riviera pour la saison 2026-2027. Après plusieurs semaines d'échanges, l'accord a été conclu et le joueur évoluera désormais sous ses nouvelles couleurs.",
      "Formé dans les catégories de jeunes de la région, l'attaquant s'est distingué la saison passée par son sens du but et sa capacité à se montrer décisif dans les moments importants. Son profil polyvalent, capable d'évoluer sur le front de l'attaque comme sur les côtés, a séduit le staff technique du club.",
      "Le club a accueilli cette arrivée avec enthousiasme et espère voir le joueur poursuivre sa progression au sein de son effectif. La direction sportive mise sur la jeunesse et la formation locale pour bâtir un projet durable, ancré dans son territoire et proche de ses supporters.",
      "Du côté du joueur, l'émotion était palpable au moment de parapher son contrat. Rejoindre un club de sa région représente une source de fierté et de motivation supplémentaire. Il aura à cœur de rendre la confiance placée en lui par ses nouveaux dirigeants.",
      "EUROTRANSFER souhaite une excellente saison au joueur dans cette nouvelle aventure sportive.",
      "Rédaction EUROTRANSFER"
    ]
  },

  {
    id: "tournoi-jeunes-club-local-victoire",
    title: "Le club local remporte un tournoi de jeunes disputé ce week-end",
    category: "Locale",
    source: "Rédaction EUROTRANSFER",
    sourceUrl: "",
    date: "2026-07-13",
    time: "18:15",
    dateLabel: "13 juillet 2026 à 18h15",
    views: 2180,
    featured: false,
    lead: "Les jeunes du club se sont illustrés en s'imposant lors d'un tournoi réunissant plusieurs équipes de la région.",
    body: [
      "Belle performance pour les jeunes du club, qui ont remporté un tournoi disputé ce week-end. Réunissant plusieurs équipes de la région, la compétition a permis aux espoirs de se mesurer à une opposition de qualité et de démontrer tout leur potentiel.",
      "Tout au long de la journée, les jeunes joueurs ont affiché un état d'esprit exemplaire et une solidarité de tous les instants. Portés par un public familial et chaleureux, ils ont su élever leur niveau de jeu au fil des rencontres pour atteindre la finale.",
      "Le match décisif, disputé face à une équipe accrocheuse, s'est joué sur des détails. Grâce à leur détermination et à une organisation collective remarquable, les jeunes du club ont fini par faire la différence, déclenchant la joie des familles et des encadrants présents.",
      "Ce succès récompense le travail accompli au quotidien par les éducateurs et les bénévoles du club. La formation des jeunes, au cœur du projet, porte ses fruits et laisse entrevoir de belles perspectives pour l'avenir. La relève semble bel et bien assurée.",
      "Au-delà du résultat, c'est l'ambiance et les valeurs véhiculées lors de ce tournoi qui resteront dans les mémoires. Respect de l'adversaire, plaisir de jouer et esprit d'équipe : autant de principes chers au club et transmis dès le plus jeune âge.",
      "EUROTRANSFER félicite chaleureusement les jeunes joueurs, ainsi que l'ensemble du staff et des bénévoles, pour ce beau succès. Une belle récompense qui vient couronner une saison riche en enseignements.",
      "Rédaction EUROTRANSFER"
    ]
  }
];

/* Rend la base de données accessible aux scripts du site */
if (typeof window !== "undefined") {
  window.ARTICLES = ARTICLES;
}
