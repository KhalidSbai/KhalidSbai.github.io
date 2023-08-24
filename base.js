import { mettreAJourPrix } from "./function.js";
export { base, dateValable, articleActifNonTrouver, articleNonActifNonChanger };

// les colonnes sont (code, designation, prix, rayon, unité)
// le separateur des champs est @
const fleg = `6222;TOMATE;8,95;legume;Kg;6222;1
6039;PDT ROUGE LAVEE;13,95;legume;Kg;6039;2
5561;CAROTTE;10,95;legume;Kg;5561;3
5769;SALADE LAITUE VERTE;8,95;legume;Pce;5769;4
5623;CONCOMBRE COURT;7,95;legume;Kg;5623;5
5640;COURGETTE LONGUE;10,95;legume;Kg;5640;6
5913;OIGNON ROUGE SEC;8,95;legume;Kg;5913;7
5515;AUBERGINE;8,95;legume;Kg;5515;8
5912;OIGNON BLANC SEC;8,95;legume;Kg;5912;9
6035;PDT FRITE;12,95;legume;Kg;6035;10
6033;PDT BLANCHE LAVEE;13,95;legume;Kg;6033;11
6026;POIVRON VERT;8,95;legume;Kg;6026;12
5635;COURGE ROUGE;10,95;legume;Kg;5635;13
5587;CHOUFLEUR;13,95;legume;Kg;5587;14
5503;ANETH BOTTE;11,95;legume;Pce;5503;70
12873;ANETH BRQT 125G;24,31;legume;Pce;5503;96
5510;ARTICHAUX;9,95;legume;Kg;5510;33
16653;ASPERGE BLANCHE IMPORT BOTTE;96;legume;Pce;16653;89
16654;ASPERGE VERTE IMPORT BOTTE;79,9;legume;Pce;16654;46
5532;BASILIC BOTTE;14,95;legume;Pce;5532;32
5533;BASILIC POT;15,49;legume;Pce;5532;97
5546;BETTERAVE;8,95;legume;Kg;5546;19
5549;BROCOLI;29,95;legume;Kg;5549;24
5573;CELERI BRANCHE;16,95;legume;Kg;5573;52
10350;CELERIE BRANCHE IMPORT KG;42,9;legume;Kg;10350;77
10430;CELERIE RAVE;42,9;legume;Kg;10430;60
10536;CHAMPIGNON DE PARIS;64,9;legume;Kg;10536;39
129900;CHAMPIGNON LAMINE 250G;32,9;legume;Pce;129900;51
10479;CHAMPIGNON PORTOBELLO;99,9;legume;Kg;10479;81
5590;CHOUX CHINOIS;42,9;legume;Kg;5590;79
5848;CHOUX ROMANESCO PC;54;legume;Pce;5848;101
5593;CHOUX ROUGE;13,9;legume;Kg;5593;45
5597;CHOUX VERT;8,95;legume;Kg;5597;17
5599;CIBOULETTE BOTTE;14,95;legume;Pce;5599;53
5602;CIBOULETTE BRQT 125GR;24,31;legume;Pce;5599;59
5622;COING LOCAL;19,95;legume;Kg;5622;63
5624;CONCOMBRE LONG;13,95;legume;Kg;5624;74
5632;CORIANDRE BOTTE 150G;6,46;legume;Pce;5632;73
5600;COURGETTE BLANCHE;19,95;legume;Kg;5600;38
5636;COURGETTE RONDE (BELDI);14,95;legume;Kg;5636;54
5647;COURGETTE SLAOUI;14,95;legume;Kg;5647;66
10419;CURCUMA BRANCHE FRAIS;156;legume;Kg;10419;102
5655;ECHALOTTE IMPORT FILET 250G;22,9;legume;Pce;5655;42
10380;ENDIVES IMPORT;69,95;legume;Kg;10380;56
5661;EPINARD;18,95;legume;Kg;5661;40
5664;ESTRAGON BRQT 125G;24,31;legume;Pce;5664;76
5670;FENOUILLE;18,95;legume;Kg;5670;28
5677;FEVE;16,95;legume;Kg;5677;58
5700;GINGEMBRE BRANCHE FRAIS.;89,95;legume;Kg;5700;44
5719;HARICOT VERT;22,95;legume;Kg;5719;21
127648;JEUNE POUSSE BETTRAVE 100G;14,95;legume;Pce;127648;62
127645;JEUNE POUSSE EPINARD 100G;14,95;legume;Pce;127645;55
127651;JEUNE POUSSE MACHE 100G;14,95;legume;Pce;127651;65
127650;JEUNE POUSSE MUSCLIN 100G;14,95;legume;Pce;127650;57
127649;JEUNE POUSSE ROQUETTE 100G;14,95;legume;Pce;127649;43
5773;LAURIER SACHET 50G;0;legume;Pce;5773;85
5797;MARJOLAINE BRQT 125G;24,31;legume;Pce;5797;92
5809;MELISSE BRQT 125G;24,31;legume;Pce;5809;94
5829;MENTHE;11,95;legume;Kg;5829;23
5831;MENTHE BOTTE 150G;4,9;legume;Pce;5829;72
6136;MENTHE POT;15,49;legume;Pce;5829;103
5881;NAVET  VIOLET;10,95;legume;Kg;5881;50
5877;NAVET BLANC;10,95;legume;Kg;5877;22
5878;NAVET JAUNE;10,95;legume;Kg;5878;49
5931;ORIGAN BRQT 125G;24,31;legume;Pce;5931;88
5952;PATATE DOUCE;12,95;legume;Kg;5952;37
10403;PDT SAUTEE GROS CALIBRE;12,95;legume;Kg;10403;30
5964;PERSIL;10,9;legume;Kg;5964;18
5937;PERSIL PLAT BOTTE 150G;4,9;legume;Pce;5937;75
5976;PETIT POIS;23,9;legume;Kg;5976;36
130448;PIMENT ANTILLAIS BRQT 250G;20,27;legume;Pce;130448;90
5982;PIMENT FORT VERT;14,9;legume;Kg;5982;61
130422;PIMENT HABANERO BRQT 150G;9,95;legume;Pce;130422;99
130423;PIMENT HABANERO BRQT 250G;20,27;legume;Pce;130422;91
130445;PIMENT OISEAU BRQT 150G;12,19;legume;Pce;130445;98
130446;PIMENT OISEAU BRQT 250G;20,27;legume;Pce;130445;87
130449;PIMENT PADRON BRQT 150G;9,95;legume;Pce;130449;100
5987;PIMENT PADRON BRQT 250G;20,27;legume;Pce;130449;84
6012;POIREAUX;13,95;legume;Kg;6012;34
6018;POIVRON JAUNE;12,95;legume;Kg;6018;25
6021;POIVRON ROUGE;12,95;legume;Kg;6021;20
6162;RADIS ROND BOTTE;7,95;legume;Pce;6162;48
6175;ROMARIN  X3;14,95;legume;Pce;14066;95
14066;ROMARIN BOTTE;13,95;legume;Pce;14066;95
6177;ROMARIN BRQT 125G;18,9;legume;Pce;14066;80
5542;SALADE BATAVIA ROUGE;8,95;legume;Pce;5542;29
5544;SALADE BATAVIA VERTE;8,95;legume;Pce;5544;31
5673;SALADE FEUILLE DE CHENE ROUGE;8,95;legume;Pce;5673;16
5675;SALADE FEUILLE DE CHENE VERTE;8,95;legume;Pce;5675;26
5763;SALADE LAITUE FRISEE;8,95;legume;Pce;5763;47
5761;SALADE LAITUE ICEBERG;8,95;legume;Pce;5761;41
6171;SALADE LAITUE ROMAINE;8,95;legume;Pce;6171;15
5765;SALADE LAITUE ROUGE;8,95;legume;Pce;5765;35
12879;SAUGE BRQT 125G;24,31;legume;Pce;12879;93
6216;THYM BOTTE;11,95;legume;Pce;6215;83
6215;THYM BRQT 125G;24,31;legume;Pce;6215;71
6212;THYM CITRON BRQT 125G;24,31;legume;Pce;6212;78
10524;TOMATE CERISE;14,5;legume;Kg;10524;27
6231;TOMATE CERISE 500G;11,9;legume;Pce;10524;64
141063;TOMATE CERISE BRQT250GR;7,97;legume;Pce;10524;68
141064;TOMATE CERISE CUP250GR;6,9;legume;Pce;10524;82
130425;TOMATE POIRE  BRQT 500G;15,49;legume;Pce;130425;67
130424;TOMATE POIRE BRQT 250G;7,97;legume;Pce;130425;69
130426;TOMATE POIRE CUP 250G;6,9;legume;Pce;130425;86
10351;ORANGE A JUS;13,95;fruit;Kg;10351;104
10490;ABRICOT IMPORT;54,9;fruit;Kg;10490;162
10372;ANANAS;36,9;fruit;Kg;10372;112
17341;ANANAS VICTORIA;74,95;fruit;Kg;17341;136
10312;ANONE IMPORT;69,95;fruit;Kg;10312;161
10325;AVOCAT FUERTE;49,95;fruit;Kg;10325;124
10527;AVOCAT HASS IMPORT;49,95;fruit;Kg;10307;200
10307;AVOCAT HASS LOCAL;49,95;fruit;Kg;10307;115
10328;BANANE IMPORT PREMIUM;5;fruit;Kg;10437;200
10437;BANANE IMPORT.;19,95;fruit;Kg;10437;107
10528;BANANE LOCALE;13,5;fruit;Kg;10528;106
129908;CHAMPIGNON PIED COUPE 250G;29;legume;Pce;129908;200
10397;CITRON JAUNE;21,95;fruit;Kg;10397;108
10401;CITRON VERT;21,95;fruit;Kg;10401;114
10345;CLEMENTINE;10,95;fruit;Kg;10345;118
10390;DRAGON;69,9;fruit;Kg;10390;156
5668;FEGOUSS;15,95;legume;Kg;5668;200
10522;FIGUE FRAICHE BLANCHE;26,9;fruit;Kg;10522;200
12886;FIGUE FRAICHE NOIRE;26,9;fruit;Kg;12886;200
6134;FLEURS COMESTIBLES BRQT;69,9;plante;Pce;6134;164
10476;FRAISE BRQT;39,95;fruit;Kg;10476;138
5691;FRAISE BRQT 250G;8,95;fruit;Pce;10476;149
5690;FRAISE BRQT 500G;17,95;fruit;Pce;10476;128
10472;FRAMBOISE BARQUETTE;99,95;fruit;Kg;10472;200
11227;FRAMBOISE BRQT 125G;11,95;fruit;Pce;11227;125
5764;FRAMBOISE BRQT 250;22,95;fruit;Pce;11227;142
17345;FRUITS DE LA PASSION;156,9;fruit;Kg;17345;163
10369;GRENADINE;19,95;fruit;Kg;10369;133
10535;GRENADINE EXTRA;99,95;fruit;Kg;10369;155
16657;GROSEILLE BARQUETTE 125 G;78,95;fruit;Pce;16657;160
10324;JUJUBE;59,95;fruit;Kg;10324;200
10460;KIWI;69,95;fruit;Kg;10460;120
10329;KIWI JAUNE;149,9;fruit;Kg;10329;145
10365;LIME IMPORT;129,9;fruit;Kg;10365;157
12861;LQIM;29,95;legume;Kg;5622;200
10466;LYCHEE(LITCHI);139,9;fruit;Kg;10466;200
10317;MANGUE;29,9;fruit;Kg;10317;116
5725;MANGUE IMPORT AVION;139,9;fruit;Kg;10317;143
13946;MELON ANANAS;8,95;fruit;Kg;13946;135
10497;MELON CANTALOU MARHOUM;9,95;fruit;Kg;10497;129
10382;MELON JAUNE LOCAL;7,95;fruit;Kg;10382;113
10554;MELON SANCHOU MZAWKA;9,9;fruit;Kg;10554;200
10475;MELON SOUIHLA;9,95;fruit;Kg;10475;109
10339;MYRTILLE;216,9;fruit;Kg;5861;200
5861;MYRTILLE BRQT 125G;21,9;fruit;Pce;5861;147
130420;MYRTILLE BRQT 250G;25,9;fruit;Pce;5861;153
10491;NECTARINE LOCALE;17,95;fruit;Kg;10491;123
12479;OIGNON BLANC FRAIS;7,95;legume;Kg;5912;200
10455;ORANGE NAVEL;13,95;fruit;Kg;10455;110
10515;PAK CHOI;55,9;legume;Kg;10515;200
10364;PAMPLEMOUSSE;21,95;fruit;Kg;10364;127
10378;PAPAYE LOCAL;22,9;fruit;Kg;10378;154
13076;PASTEQUE LOCALE;5,95;fruit;Kg;13076;105
6040;PDT ROUGE  NON LAVEE;12,95;legume;Kg;6039;200
10521;PECHE LOCALE;17,95;fruit;Kg;10521;122
10309;PECHE PLATE;29,95;fruit;Kg;10309;146
5980;PHYSALIS BRQT 100 / 125G;29,95;fruit;Pce;5980;159
10563;POIRE IMPORT ROCHA;39,95;fruit;Kg;10563;111
10308;POIRE LOCALE;32,95;fruit;Kg;10308;200
11204;POMME DELICIEUSE IMPORT;42,9;fruit;Kg;11204;137
10568;POMME GOLDEN IMPORT KG;42,9;fruit;Kg;10568;126
6070;POMME GOLDEN IMPORT VRAC.;22,95;fruit;Kg;10568;200
10299;POMME GOLDEN LOCAL;19,95;fruit;Kg;10568;119
10354;POMME GOLDEN LOCALE;21,9;fruit;Kg;10568;140
10406;POMME GRANNY SMITH IMPORT;42,9;fruit;Kg;10406;148
10405;POMME ROUGE IMPORT;42,9;fruit;Kg;10405;144
10322;POMME ROUGE LOCALE;19,95;fruit;Kg;10405;121
10393;POMME ROYAL GALA LOCAL;23,95;fruit;Kg;10393;117
10422;POMME ROYALE GALA IMPORT;42,9;fruit;Kg;10393;150
10480;PRUNE JAUNE IMPORT;79,95;fruit;Kg;10480;158
10360;PRUNE JAUNE LOCAL;23,95;fruit;Kg;10480;200
10304;PRUNE LOCAL;20,2;fruit;Kg;10298;132
10492;PRUNE ROUGE IMPORT;0;fruit;Kg;10298;152
10298;PRUNE ROUGE LOCAL;19,95;fruit;Kg;10298;131
10314;RAISIN BLANC IMPORT;74,95;fruit;Kg;10470;139
10470;RAISIN BLANC LOCAL;15,95;fruit;Kg;10470;130
12915;RAISIN NOIR LOCAL;15,95;fruit;Kg;12915;141
10413;RAISIN ROUGE IMPORT;69,95;fruit;Kg;10473;134
10473;RAISIN ROUGE LOCAL;15,95;fruit;Kg;10473;151
`;
const volaille = `7390;POULET ENTIER;35,9;volaille;Kg;7390
10963;FILET DE DINDE;62,9;volaille;Kg;10963
7571;ABATS DE POULET;38,9;volaille;Kg;7571
7499;AILES DE POULET;28,9;volaille;Kg;7499
7572;AILES DE DINDE;27,9;volaille;Kg;7572
7399;COQUELETS  X 2;47,9;volaille;Barq;7399
7453;COU DE POULET;17,9;volaille;Kg;7453
7514;COU DE DINDE;32,9;volaille;Kg;7514
7446;CUISSE DE POULET;47,9;volaille;Kg;7446
7556;ESCALOPE DE DINDE;68,9;volaille;Kg;7556
7472;FILET DE POULET;77,9;volaille;Kg;7472
7565;FOIE DE POULET;47,9;volaille;Kg;7565
7522;FOIE DE DINDE;63,9;volaille;Kg;7522
7500;HAUT CUISSE DE POULET ;47,9;volaille;Kg;7500
7537;OSSO BUCCO DINDE;36,9;volaille;Kg;7537
7554;PILON DE DINDE;34,9;volaille;Kg;7554
7443;PILON DE POULET;47,9;volaille;Kg;7443
7616;SAUCISSE DE DINDE AFH / MAROCAINE / FROMAGE / NATURE;49,9;volaille;Kg;7616
7497;SAUCISSE DE POULET AFH / MAROCAINE / FROMAGE / NATURE;49,9;volaille;Kg;7616
7623;VIANDE HACHEE DE DINDE EPICEE;47,9;volaille;Kg;7623
7617;VIANDE HACHEE DE DINDE NATURE;47,9;volaille;Kg;7617
`;
const boucherie = `11004;AGNEAU ENTIER;97;boucherie;Kg;12846;agneau
12846;AGNELLE ENTIERE;95;boucherie;Kg;12846;agneau
12613;CARRE D AGNEAU;118,9;boucherie;Kg;12613;agneau
7644;COTELETTES D AGNEAU;119,9;boucherie;Kg;7644;agneau
15108;EPAULE ENTIER D AGNEAU;102,9;boucherie;Kg;15108;agneau
12650;EPAULE RONDE D AGNEAU;117,9;boucherie;Kg;12650;agneau
7703;GIGOT D AGNEAU;110,9;boucherie;Kg;7703;agneau
7720;SOURIS  D AGNEAU;129,9;boucherie;Kg;7720;agneau
7722;FOIE ET CŒUR D AGNEAU;155,9;boucherie;Kg;7722;agneau
14065;CERVELLE D AGNEAU ;29,9;boucherie;Pce;14065;agneau
15146;1/4 AVANT DE BŒUF;79;boucherie;Kg;15146;boeuf
15147;1/4 ARRIERE BŒUF (CUISSE + ALOYAU);83;boucherie;Kg;15147;boeuf
11002;ALOYAU DE BOEUF;84;boucherie;Kg;11002;boeuf
15093;CUISSE DE BŒUF (GLOBE);81;boucherie;Kg;15093;boeuf
7673;BROCHETTE DE BOEUF ;114,9;boucherie;Kg;7673;boeuf
7668;COTE A OS DE BOEUF;112,9;boucherie;Kg;7668;boeuf
7689;ENTRECOTE DE BOEUF;121,9;boucherie;Kg;7689;boeuf
7676;FAUX FILET;121,9;boucherie;Kg;7676;boeuf
15394;FILET BOEUF SANS BAVETTE;199,9;boucherie;Kg;15394;boeuf
7658;GRAISSE;29,9;boucherie;Kg;7658;boeuf
7652;JARRET DE BOEUF A/OS;102,9;boucherie;Kg;7652;boeuf
7654;MERGUEZ BOEUF;88,9;boucherie;Kg;7654;boeuf
12610;NOIX DE GITE DE BOEUF;109,9;boucherie;Kg;12610;boeuf
7638;RUMSTEAK DE BOEUF;118,9;boucherie;Kg;7638;boeuf
7651;TAGINE DE BOEUF A/OS;84,9;boucherie;Kg;7651;boeuf
12649;TRANCHE DE BOEUF;112,9;boucherie;Kg;12649;boeuf
7653;VIANDE HACHEE A/GRAISSE;89,9;boucherie;Kg;7653;boeuf
15419;FOIE DE BOEUF;166,9;boucherie;Kg;15419;boeuf
11007;FOIE ET COEUR DE BŒUF;139,9;boucherie;Kg;11007;boeuf
15109;CŒUR DE BŒUF;76,9;boucherie;Kg;15109;boeuf
7710;LANGUE DE BŒUF;87,9;boucherie;Kg;7710;boeuf
11009;CERVELLE DE BŒUF;58,9;boucherie;Pce;11009;boeuf
12364;PIED DE BŒUF;98,9;boucherie;Pce;12364;boeuf
18613;ROGNON ROUGE DE BŒUF;86,9;boucherie;Kg;18613;boeuf
`;
const poisssonnerie = `16745;OMBRINETTE;99,9;poissonnerie;Kg;16745;1
18487;LA LOTTE;129,9;poissonnerie;Kg;18487;2
18567;SAINT PIERRE GROS;159,9;poissonnerie;Kg;16788;3
18499;MERLAN COLIN;89,9;poissonnerie;Kg;18499;4
17083;SAUMON FRAIS 4-5 SUP;195,9;poissonnerie;Kg;17083;5
18466;CALAMAR;159,9;poissonnerie;Kg;18466;6
38002;CREVETTE GRISE 60/70;119,9;poissonnerie;Kg;38002;7
18346;SOLE BOUCLE;159,9;poissonnerie;Kg;18346;8
18479;ESPADON;169,9;poissonnerie;Kg;18479;9
16811;THON ENTIER;169,9;poissonnerie;Kg;16811;10
16793;SARDINE;10;poissonnerie;Kg;16793;11
16672;ABADECHE;59,9;poissonnerie;Kg;16672;57
18259;BONITE;69,9;poissonnerie;Kg;18259;49
18469;CONGRE;129,9;poissonnerie;Kg;18469;33
17110;CREVETTE CUITE 60/70;139,9;poissonnerie;Kg;17110;45
18472;CREVETTE ROSE GROS (C);149,9;poissonnerie;Kg;18472;29
18473;CREVETTE ROSE MOYEN (C);99,9;poissonnerie;Kg;18472;37
16705;DORADE ELEVAGE 1-1.5KG;159,9;poissonnerie;Kg;16705;42
17115;DORADE ELEVAGE 400-600;159,9;poissonnerie;Kg;16705;20
18476;DORADE ROYALE GROS (C);149,9;poissonnerie;Kg;18476;16
18477;DORADE ROYALE MOYEN (C);189,9;poissonnerie;Kg;18476;13
18482;HOMARD VIVANT;549,9;poissonnerie;Kg;18482;30
17229;LA RAIE;49,9;poissonnerie;Kg;17229;24
37942;LAMELLES CALAMAR;59,9;poissonnerie;Kg;37942;32
17185;LOUP BAR ELEVAGE 1-1.5KG;189,9;poissonnerie;Kg;17147;15
17147;LOUP BAR ELEVAGE 400-600;129,9;poissonnerie;Kg;17147;12
18489;LOUP BAR GRAND;289,9;poissonnerie;Kg;17147;38
18495;LOUP BAR MOYEN;239,9;poissonnerie;Kg;17147;47
18496;LOUP MOUCHETE;129,9;poissonnerie;Kg;17152;19
17152;LOUP MOUCHETE GROS (C);129,9;poissonnerie;Kg;17152;44
18500;MERLAN FRITURE;999,9;poissonnerie;Kg;18500;39
18501;MERLAN RATION;95,9;poissonnerie;Kg;18501;14
16737;MEROU;159,9;poissonnerie;Kg;16737;40
18503;MOSTELLE;99,9;poissonnerie;Kg;18503;34
17166;MOULE IMPORT 1KG;59,9;poissonnerie;Kg;17166;41
123428;MOULES CUITES IMPORT 1KG;59,9;poissonnerie;Kg;17166;48
17090;MOULES FRAICHES 2KG;50,9;poissonnerie;Kg;17166;55
16634;OMBRINE ENTIER;149,9;poissonnerie;Kg;16634;17
18510;PAGEOT CHAMA GRAND;149,9;poissonnerie;Kg;18510;18
18511;PAGEOT CHAMA MOYEN;139,9;poissonnerie;Kg;18510;25
16635;PAGEOT ROYAL GRAND;239,9;poissonnerie;Kg;16635;46
17106;PAGEOT ROYAL MOYEN;159,9;poissonnerie;Kg;16635;54
34202;PAVE SAUMON 500G ASO;210,9;poissonnerie;Kg;34202;27
16778;RASCASSE;159,9;poissonnerie;Kg;16778;58
18563;REQUIN;139,9;poissonnerie;Kg;18563;52
18564;ROUGET ;99,9;poissonnerie;Kg;18564;43
16788;SAINT PIERRE MOYEN;79,9;poissonnerie;Kg;16788;36
18568;SARS GROS;129,9;poissonnerie;Kg;18568;22
17075;SAUMON FRAIS 1-2 SUP;169,9;poissonnerie;Kg;17083;26
17078;SAUMON FRAIS 2-3 SUP;210,9;poissonnerie;Kg;17083;23
17086;SAUMON FRAIS 5-6 SUP;179,9;poissonnerie;Kg;17083;56
16645;SEPIA NETTOYEE;129,9;poissonnerie;Kg;16645;51
18577;SOLE PLAGE;149,9;poissonnerie;Kg;18577;35
16797;SOLE RATION;159,9;poissonnerie;Kg;16797;31
18575;SOLE TIGRE;169,9;poissonnerie;Kg;18575;21
16789;S-PIERRE METALISE;69,9;poissonnerie;Kg;16789;50
17132;TRUITE ROYALE DE L ATLAS 1.2KG;60,9;poissonnerie;Kg;17132;53
18641;TURBOT VRAI;229,9;poissonnerie;Kg;18641;28
`;

const RestePoissonnerie = `
31284;FILET SARDINE MARINE 250G;16,9;poissonnerie;Kg
16826;BOURICHE D HUITRE 50 C(1);379,9;poissonnerie;Kg
16823;BOURICHE D HUITRE 50 C(2);379,9;poissonnerie;Kg
18471;CREVETTE GRISE;279,9;poissonnerie;Kg
17081;SAUMON FRAIS 3-4 SUP;179,9;poissonnerie;Kg
136266;FILET SARDINE 250G;9,9;poissonnerie;Kg
18486;LANGOUSTINE;360,9;poissonnerie;Kg
17093;BOUKA;6,9;poissonnerie;Kg
16781;REQUIN BLEU ENTIER;22;poissonnerie;Kg
30158;CHAIR DE CRABE ASO 454GR;450,9;poissonnerie;Kg
17094;SAUREL;10,9;poissonnerie;Kg
17149;LOUP BAR ELEVAGE 600-800;999,9;poissonnerie;Kg
17150;LOUP BAR ELEVAGE 1,5 - 2 KG;210,9;poissonnerie;Kg
18474;CREVETTE ROYALE GROS (C);690;poissonnerie;Kg
17263;CREVETTE CUITE 250 G;59,9;poissonnerie;Kg
18498;MARBRE;69,9;poissonnerie;Kg
17224;POULPE CUIT BQ 250G;39,9;poissonnerie;Kg
34201;PAVE SAUMON 150G ASO;33,9;poissonnerie;Kg
18483;LANGOUSTE VIVANTE;650,9;poissonnerie;Kg
17119;DORADE ELEVAGE 600-800;999,9;poissonnerie;Kg
123424;PALOURDES FRAICHES PST 300GR;119,9;poissonnerie;Kg
16649;BOURICHE D HUITRE 50 C (0);439,9;poissonnerie;Kg
18519;POULPE;89,9;poissonnerie;Kg
136257;DARNE SAUMON N BRQT250GGR;39,9;poissonnerie;Kg
17336;CREVETTE DECORTIQUE 150G;35,9;poissonnerie;Kg
17116;LOUP BAR ELEVAGE 800 -1KG;159,9;poissonnerie;Kg
18244;ANCHOIS;10,9;poissonnerie;Kg
136256;DARNE SAUMON SV BRQT 250GR;44,9;poissonnerie;Kg
140668;BATONNET DE POISSON 250G;26,9;poissonnerie;Kg
140660;PALOURDES FRAICHES 400GR;109,9;poissonnerie;Kg
37982;ANNEAUX CALAMAR FRAIS;79,9;poissonnerie;Kg
16772;PUNTILLA;139,9;poissonnerie;Kg
136273;PAVE SAUMON BRQT 250GR;48,9;poissonnerie;Kg
140669;CREVETTE PANEE 200 G;39,9;poissonnerie;Kg
136263;FILET MEROU  BRQT250G;24,9;poissonnerie;Kg
140659;NOIX ST JACQUES 250G;105,9;poissonnerie;Kg
140672;CREVETTE PIL PIL 200G;42,9;poissonnerie;Kg
140661;BROCHETTE CREVETTE BRQT 150G;36,9;poissonnerie;Kg
140665;BROCHETTE MEROU 250G;26,9;poissonnerie;Kg
136264;FILET MEROU MARINE 250G;21,9;poissonnerie;Kg
17145;LOUP BAR ELEVAGE 300-400;129,9;poissonnerie;Kg
140671;POULPE A LA PROVENCALE 200G;48,9;poissonnerie;Kg
16706;DORADE ELEVAGE 800-1KG;130;poissonnerie;Kg
17113;DORADE ELEVAGE 300-400;99,9;poissonnerie;Kg
18339;PAGEOT EXTRA GRAND;129,9;poissonnerie;Kg
16651;MOULES DECORTIQUEE REFRGR VRAC;95,9;poissonnerie;Kg
16798;TRUITE ROYAL DE L ATLAS1.5KG;65,9;poissonnerie;Kg
140670;MOULES A L ORIENTALE 250G;37,9;poissonnerie;Kg
140666;MOULES DECORTIQUEE CUITE 250G;35,9;poissonnerie;Kg
140667;PAVE SAUMON PANE 250G;44,9;poissonnerie;Kg
31231;SEPIA NETTOYEE BQ;82,9;poissonnerie;Kg
17171;NOIX ST JACQUES;359,9;poissonnerie;Kg
140662;CARPACCIO ESPADON BRQT 150GR;42,9;poissonnerie;Kg
140663;CARPACCIO SAUMON BARQ 150G;37,9;poissonnerie;Kg
16643;BOURICHE D HUITRE 50 C (00);402,9;poissonnerie;Kg
136251;BROCHETTE SAUMON MARINE BRQT250GR;54,9;poissonnerie;Kg
16832;MOULES FRAICHES 1KG;19,9;poissonnerie;Kg
`;

const frais = fleg + volaille + boucherie + poisssonnerie;

// les nouveaux prix volaille
const nouveauPrixVolaille = `7571;38,9
7499;22,9
7572;22,9
7509;31,9
7387;25,9
7399;49,9
7453;19,9
7514;11,9
7446;47,9
7556;55,9
15388;49,9
10963;49,9
7472;79,9
7441;79,9
7565;36,9
7522;57,9
7500;47,9
7537;21,9
7554;18,9
7443;42,9
7390;35,9
7616;49,9
7513;49,9
7622;49,9
7612;49,9
7497;49,9
7602;49,9
7479;49,9
7459;49,9
7623;47,9
7617;47,9
`;

//les nouveaux prix (code,prix)
const nouveauPrixFruitLegume = `6040;7,95
10393;19,95
10382;4,95
6222;6,95
13076;5,95
13946;8,95
5769;8,95
5913;8,95
5546;8,95
5597;8,95
5763;8,95
5515;8,95
5761;8,95
6171;8,95
5673;8,95
5544;8,95
5675;8,95
5542;8,95
5912;8,95
10554;9,9
10475;9,95
5964;10,9
5877;10,95
5881;10,95
5635;10,95
5561;10,95
11227;11,95
6216;11,95
5503;11,95
5829;11,95
6035;12,95
10403;12,95
5952;12,95
10528;13,5
6012;13,95
6039;13,95
6033;13,95
5982;14,9
127648;14,95
127650;14,95
127651;14,95
6175;14,95
5599;14,95
5532;14,95
5636;14,95
10470;15,95
12915;15,95
5668;15,95
5573;16,95
10491;17,95
10521;17,95
5661;18,95
10369;19,95
10298;19,95
10437;19,95
5622;19,95
10401;21,95
10364;21,95
10397;21,95
5655;22,9
5719;22,95
10360;23,95
10317;29,9
5980;29,95
10309;29,95
10497;29,95
12861;29,95
5549;29,95
10372;36,9
10563;39,95
10422;42,9
10406;42,9
11204;42,9
10405;42,9
10568;42,9
5590;42,9
10350;42,9
10430;42,9
10527;49,95
10515;55,9
10390;69,9
10460;69,95
10380;69,95
17341;74,95
16654;79,9
5700;89,95
16653;96
10472;99,95
5725;139,9
10329;149,9
6026;9,95
5670;19,95
5593;14,95
10524;15,95
5623;10,95
10351;17,95
10307;52,95
5640;14,95
10536;69,95
6021;19,95
6018;19,95
10479;99,9
127645;14,95
127649;14,95
14066;13,95
5587;13,95
5765;8,95
`;

const nouveauPrixPoissonnerie = `17083;122,9
17110;149,9
16778;110,9
17075;119,9
38002;139,9
18503;99,9
18482;559,9
17147;139,9
18469;129,9
17229;49,9
18510;129,9
18346;179,9
18472;119,9
18259;69,9
18575;169,9
17115;139,9
18479;159,9
18577;99,9
16672;79,9
18466;169,9
17185;189,9
16797;119,9
18568;89,9
18563;139,9
18477;189,9
18496;119,9
18501;85,9
16635;169,9
18487;89,9
18499;59,9
18567;129,9
16793;10,9
16745;89,9
`;
let nouveauPrix =
  nouveauPrixFruitLegume + nouveauPrixVolaille + nouveauPrixPoissonnerie;

//date validation des prix
const dateValable = {
  legume: "28/08/2023",
  fruit: "28/08/2023",
  boucherie: "30/08/2023",
  volaille: "29/08/2023",
  poissonnerie: "28/08/2023",
};

const { base, articleNonActifNonChanger, articleActifNonTrouver } =
  mettreAJourPrix(frais, nouveauPrix);
console.log(`Article non actif non Changer : \n${articleNonActifNonChanger}`);
console.log(`Article actif non trouver : \n${articleActifNonTrouver}`);
