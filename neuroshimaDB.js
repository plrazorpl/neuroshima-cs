const ORIGIN_ABILITIES = {
    "0": "bd",
    "1": "ag",
    "2": "pr",
    "3": "cha",
    "4": "bd",
    "5": "cha",
    "6": "pr",
    "7": "s",
    "8": "int",
    "9": "pr",
    "10": "int",
    "11": "ag",
}

const ORIGIN_SKILLS = {
    "0": {
        title: "Urodzony morderca",
        description: "Wyrzuciliby cię z Areny za szczególne bestialstwo. Wybierz sobie dowolny pakiet Umiejętności Wojownika. Wszystkie Umiejętności z paczki posiadasz na poziomie +2"
    },
    "1": {
        title: "Wiesz, zjadłem własnego psa",
        description: "Budzisz grozę. Twój widok paraliżuje. Jeżeli udało ci się kogoś zastraszyć (test Morale przed walką), w walce z nim automatycznie wygrywasz Inicjatywę"
    },
    "2": {
        title: "Zawzięty sukinkot",
        description: "Mówią o tobie, że pociągniesz do grobu swojego zabójcę. To prawda. Jesteś uparty, twardy i nie popuszczasz. Raz w ciągu sesji, podczas wykonywania testu Umiejętności, zamiast wymaganego Współczynnika możesz użyć Charakteru."
    },
    "3": {
        title: "Fart",
        description: "No i z czego się cieszysz? Myślisz, że masz farta i właśnie dlatego jesteś bezpieczny, jak jajeczko pod dupcią mamusi kurki? A chcesz przetestować swoje szczęście? Popatrz, załaduję jedną kulę i zagramy w rosyjską ruletkę, chcesz? Co, tak... Poważnie chcesz? Jesteś chory. Wiesz, zróbmy tak, że trzykrotnie podczas sesji możesz powtórzyć jeden nieudany rzut na dowolnej z trzech kości."
    },
    "4": {
        title: "Hazardzista",
        description: "Zwinne paluszki to bogactwo naturalne. Znasz tysiąc oszustw. Miałeś okazję wyćwiczyć swoje dłonie i manipulujesz nimi lepiej niż japoński robot. Zaczynasz grę posiadając (gratisowo!) wszystkie Umiejętności z pakietu Zdolności manualne na poziomie +2"
    },
    "5": {
        title: "Telepata",
        description: "A ty telepata jesteś? Skąd wiesz, że on blefuje? Co znaczy, że on nas nie zabije? Masz to gdzieś na piśmie? Chyba nie myślisz, że ci uwierzę! Poziom trudności wszystkich testów Blefu, Perswazji i Zastraszania w stosunku do ciebie jest zwiększany o jeden w górę."
    },
    "6": {
        title: "Towarzysz",
        description: "Ten skorpion to też twój przyjaciel? Wiesz, psa bym zrozumiał, może jakiegoś ptaka, czy coś. Ale skorpion? Wybierz sobie inne! Możesz wybrać jedno zwierzę, które będzie twoim kompanem, będzie ci służyło, ale musisz je kochać. Zwierzęciem może być dowol-ny ssak, ptak, gad lub inne stworzenie, za pozwoleniem MG. Od tej pory jest was dwóch. Gdybyś na przykład miał tandem, moglibyście sobie pojeździć po pustyni, he, he... Takiemu towarzyszowi możesz wydawać kilka rodzajów poleceń, jak np. „bierz go”, „do nogi”, „cicho”, „leżeć” itp."
    },
    "7": {
        title: "Jestem duchem pustyni",
        description: "Nauczyłeś się przydatnej sztuczki. W trudnych warunkach (wysoka temperatura lub brak pożywienia i wody), potrafisz pogrążyć się w katalepsji i przeżyć. W stanie uśpienia leżysz nieruchomo i nie odbierasz żadnych bodźców zewnętrznych do czasu, aż warunki staną się bardziej sprzyjające. W ten sposób możesz przetrwać trzy miesiące."
    },
    "8": {
        title: "Polegam tylko na sobie",
        description: "Jeżeli posługujesz się bronią własnej roboty (nie dotyczy broni palnej), lub jakimkolwiek innym wykonanym przez siebie narzędziem, w każdym teście z jego wykorzystaniem możesz odjąć dwa oczka od rzutu na jednej z kostek."
    },
    "9": {
        title: "Zalety klasycznego wykształcenia",
        description: "Miałeś bardzo dobrych nauczycieli. Jeżeli na dalszym etapie tworzenia postaci wybierzesz jako specjalizację Technika, otrzymujesz dodatkowe 10 punktów do wydania na Umiejętności oparte o Spryt."
    },
    "10": {
        title: "Wizja",
        description: "Wiele lat odbudowywania NJ nauczyło cię, jak pracować w ruinach. Teraz możesz wjechać nawet do największej dziury, ale nie dostrzeżesz ruin i syfu, lecz plac budowy. Taki optymizm przydaje się w wielu sytuacjach. Jesteś w jakiejś zapadłej wiosce, którą w ciągu ośmiu godzin trzeba zamienić na twierdzę? Inni by płakali. Ty zabierasz się do roboty. MG jest zobowiązany podpowiedzieć ci, jak najlepiej odbudować lub przebudować daną lokację - według potrzeb (nocleg, dom, twierdza itp.)."
    },
    "11": {
        title: "Czas patriotów",
        description: "Heroizm to twoje drugie imię. Raz na sesję, wykonując test Cholernie trudny możesz dodać wartość swojego Charakteru do testowanej Umiejętności. Krótko mówiąc, raz na sesję zdajesz automatycznie test, mam rację?"
    },
    "12": {
        title: "Człowiek zwany koniem",
        description: "Jesteś silny jak wół, zwinny jak puma i twardy jak głaz. Kiedy idziesz po górach, powodujesz lawinę. Kiedy dosiadasz konia, to koń... Co ja ci zresztą będę opowiadał? Wybierz pakiet Umiejętności - Sprawność albo Jeździectwo. Poziom trudności każdego testu Umiejętności z wybranej grupy jest obniżany o jeden poziom."
    },
    "13": {
        title: "Doktor Quinn",
        description: "Nigdy nie słyszałeś o doktor Quinn? Żona „człowieka obrusa”, najsłynniejsza felczerka z Teksau. Jeździ i leczy. Zresztą nie tylko ona! Każda kobieta pochodząca z Teksasu posiada wszystkie Umiejętności z pakietu Medycyna na poziomie +4. Każda, dasz wiarę?"
    },
    "14": {
        title: "Zdrowa okolica",
        description: "Wychowałeś się w zdrowej, nieskażonej okolicy. Jesteś dobrze odżywiony i nie zostałeś napromieniowany. Na etapie tworzenia postaci nie musisz wykonywać rzutu określającego choroby, jakich się nabawiłeś. I jak? Teraz zastanów się, po co ci żona felczerka, panie Quinn..."
    },
    "15": {
        title: "Szlachetnie urodzony",
        description: "Urodziłeś się, by panować nad innymi. Wiesz jak traktować ludzi. Wybierz sobie jeden pakiet Umiejętności opartych o Charakter. Każdą z Umiejętności w pakiecie posiadasz na poziomie +2."
    },
    "16": {
        title: "Pojedynkowicz",
        description: "Nigdy nie przepuściłeś okazji, by zmierzyć się z przeciwnikiem. Dawałeś wrogom nauczkę i sam się czegoś nauczyłeś. Najważniejsza nauka, jaką wyciągnąłeś, to ta, iż każdego można pokonać. Podczas walki sam na sam ignorujesz pierwszą Lekką ranę lub Draśnięcie. Żaden przeciwnik nie zdoła cię przerazić. I dlatego właśnie jesteś twardzielem."
    },
    "17": {
        title: "Wychuchana spluwa",
        description: "Wybierz jedną z broni palnych, które nosisz przy sobie. Każdego wieczoru czyścisz ją, chuchasz, dmuchasz i w efekcie możesz dla niej zawsze powtórzyć rzut na efekt zacięcia się broni"
    },
    "18": {
        title: "Człowiek-aligator",
        description: "Połowę życia spędziłeś w wodzie, na trzęsawiskach lub w tropiku. W czasie każdej walki, w której wykorzystujesz do ukrycia się zbiornik wodny lub bagno (gdy jesteś zanurzony), osłona maskuje cię o dwa poziomy lepiej. Dodatkowo, w przypadku błyskawicznego ataku z zaskoczenia na terenie wodnym lub bagiennym, twoi przeciwnicy są automatycznie zaskoczeni"
    },
    "19": {
        title: "Ja już swoje odchorowałem",
        description: "Żyłeś w niezdrowej okolicy Miami i uodporniłeś się na wiele chorób i jadów. Możesz powtórzyć każdy rzut odpornościowy przeciw chorobom i truciznom pochodzenia organicznego."
    },
    "20": {
        title: "Walkabout",
        description: "Siedzisz sobie w knajpie i nagle postanawiasz iść na mały walkabout. Wychodzisz i przez miesiąc włóczysz się po okolicy. Wracasz do knajpy, patrzysz, a twoje ziółka na stole wystygły. Myślisz sobie - nie będę pił zimnych. I idzisz odwiedzić kumpla w Vegas. Możesz powtórzyć każdy test Kondycji. Zaczynasz ze Sztuczką „Dom na plecach”."
    },
    "21": {
        title: "Wszechstronność",
        description: "Złaziłeś już spory kawał świata. Aby przetrwać, uczyłeś się wszystkiego po trochu. Wszystkie Umiejętności oparte na najwyższej z twoich cech, a których nie wykupiłeś, mają wartość 1. Znasz się na  wszystkim. I tak naprawdę gówno umiesz, ot, moja opinia."
    },
    "22": {
        title: "Wszechstronność do kwadratu",
        description: "Możesz wybrać dowolną z cech innych nacji. Dowolną. No, jeśli jesteś facetem, to umówmy się, że zapomnisz o „doktor Quinn”, OK?"
    },
    "23": {
        title: "",
        description: ""
    },
    "24": {
        title: "Cholerny kaznodzieja",
        description: "Potrafisz walnąć taki monolog, że słuchacze nie wiedzą, co ze sobą zrobić. Jeżeli próbujesz przekonać kogoś do racji, w które sam wierzysz (sprawy wiary), w testach Perswazji odrzucasz kostkę, która najmniej ci odpowiada, i mówisz, że wypadło na niej tyle, co na innej. Trochę to skomplikowane, nie? Ale wiesz, sprawy wiary to trudny temat"
    },
    "25": {
        title: "Wierzę",
        description: "Chłopie, nie będę lazł pięćset metrów do tej głupiej stacji tylko dlatego, że przez lornetkę widzisz tam automat z Colą. On nie działa, to nie ma sensu... Co? Co znaczy, że wierzysz, że działa? I co, chcesz, bym teraz tam poszedł? Bo ty wierzysz?! No bez jaj. To, że raz w ciągu sesji, w sytuacji zagrożenia, możesz powiedzieć MG „wierzę” i wtedy MG powinien dać ci szansę wykaraskania się z sytuacji, nie oznacza, że da nam teraz tę Colę! Zrozum! Tylko w sytuacji zagrożenia! I w dodatku ostateczna decyzja należy do MG! A przecież wiesz, że on jest złośliwy! Nie da nam tej Coli, mówię ci..."
    },
    "26": {
        title: "Przed wojną wszystko było lepsze",
        description: "Przysłuchiwałeś się opowieściom doświadczonych wojowników i mądrych starców. Chłonąłeś historie o czasach sprzed wojny. Wszystkie testy Sprytu związane z wiedzą o czasach przed Apokalipsą mogą być dla ciebie co najwyżej Trudne. Co najwyżej, łapiesz? Mistrz Gry może sobie bełkotać o Bardzo Trudnym, o Cholernie trudnym... Wiesz co? Pokaż mu ten podręcznik, otwórz na tej stronie i daj mu to przeczytać: „Mistrzu Gry, do ciebie mówię. Ten facet, co dał ci teraz podręcznik, wie o czasach sprzed wojny wszystko. Łapiesz to? Więc nie smuć o Bardzo trudnym teście!”"
    },
    "27": {
        title: "Coś mi tu śmierdzi",
        description: "Dorastałeś na terenach opanowanych przez mutków. Wyczuwasz ich inność, choćby nie wiem jak się maskowali. Za każdym razem, gdy stajesz wobec osoby dotkniętej niewidocznymi mutacjami, MG powinien wykonać sekretny rzut na Percepcję (Trudny) i w razie powodzenia testu, poinformować cię, że czujesz się nieswojo. Rączki świerzbią, nie? Spluwa się gotuje.."
    },
    "28": {
        title: "Chodźmy, na pewno już utonął",
        description: "Masz płuca jak miechy. Jesteś w stanie wytrzymać pod wodą dwa razy dłużej, niż przeciętny człowiek. To znaczy ile? Pół minuty za każde 4 punkty Budowy. Właśnie tyle"
    },
    "29": {
        title: "Kwas w żyłach, płucach",
        description: "Urodziłeś się i mieszkałeś przy Wielkiej Rzece. Jesteś tak przesiąknięty płynącą w niej trucizną, że żadna nowa franca już w ciebie nie wejdzie. Możesz powtórzyć każdy rzut odpornościowy przeciw trującym chemikaliom i substancjom żrącym"
    },
    "30": {
        title: "Na symulatorze to działało...",
        description: "Jak to spokojnie! Jak grałeś w to?! W co grałeś? Symulator?! O czym ty człowieku pieprzysz, strzelają do nas, nie rozumiesz?! Ja też przeszedłem służbę wojskową, w dodatku na froncie i jakoś nie jestem taki spokojny! Miałeś dostęp do komputerowych symulatorów pojazdów i pola walki? No popatrz, to po prostu wspaniale. Grałeś sobie w Quake, kiedy do mnie strzelali na froncie, tak? I każesz mi być spokojny?! I co, trochę się z nich nauczyłeś?! Możesz przerzucić jedną kostkę w testach Wozów bojowych, Maszyn Ciężkich i Komputerów? Super. To lepiej przerzucaj, bo mamy kłopoty!!!"
    },
    "31": {
        title: "Hi-Tech",
        description: "Od maleńkości rosłeś w otoczeniu wytworów zaawansowanej technologii. Mikser do pomarańczy, czasem suszarka do włosów. Co więcej, było i radio, a nawet jakiś wykrywacz ruchu... No dobra, koniec jaj. Posterunek to najlepiej wyposażony w sprzęt elektroniczny przyczółek ludzkości. W każdym teście związanym z obsługą urządzenia elektronicznego możesz przerzucić jedną z kostek, właśnie dlatego, że dawno temu za grzechotkę robił ci słoik z procesorami, a za łopatkę płyta główna"
    },
    "32": {
        title: "Moloch? Coś o nim słyszałem",
        description: "Miałeś kontakt z Molochem i jego tworami. Znasz slangowe nazwy określające maszyny, potrafisz rozpoznawać je i wiesz, czego możesz się spodziewać po każdym z tworów Bestii. Każdy test związany z maszynami Molocha może być dla ciebie co najwyżej Bardzo Trudny."
    },
    "33": {
        title: "Jeśli ma silnik to ruszy",
        description: "W czasie nie dłuższym niż 30 sekund jesteś w stanie uruchomić dowolny pojazd z silnikiem spalinowym, pod warunkiem, że jest on zdatny do jazdy. I o ile ma paliwo. Jeśli MG uważa, że wóz może jeździć, ty go uruchomisz. Tak to działa."
    },
    "34": {
        title: "Siódme poty",
        description: "Jeżeli prowadzisz dowolny pojazd z silnikiem spalinowym, jesteś w stanie wycisnąć z niego 25% ponad maksymalną prędkość, balansując na granicy zatarcia silnika, a nawet rozpadnięcia się całej konstrukcji maszyny. Kiedy pojazd zatrzyma się, nie ruszy ponownie, aż do momentu naprawienia uszkodzeń (Bardzo Trudny test Mechaniki)."
    },
    "35": {
        title: "Ale jazda!",
        description: "Lata spędzone na ulicach Detroit zrobiły swoje. Jeżeli strzelasz w ruchu - z pędzącego pojazdu, wierzchowca, spadając itp. - nie doliczasz sobie żadnych utrudnień za strzał w ruchu."
    },
}

const ROLL_ALL_DICES_PARAMETERS = {
    rolls: [
        "result:parameters_roll_1_r|-|dice1:parameters_roll_1_1|-|dice2:parameters_roll_1_2|-|dice3:parameters_roll_1_3",
        "result:parameters_roll_2_r|-|dice1:parameters_roll_2_1|-|dice2:parameters_roll_2_2|-|dice3:parameters_roll_2_3",
        "result:parameters_roll_3_r|-|dice1:parameters_roll_3_1|-|dice2:parameters_roll_3_2|-|dice3:parameters_roll_3_3",
        "result:parameters_roll_4_r|-|dice1:parameters_roll_4_1|-|dice2:parameters_roll_4_2|-|dice3:parameters_roll_4_3",
        "result:parameters_roll_5_r|-|dice1:parameters_roll_5_1|-|dice2:parameters_roll_5_2|-|dice3:parameters_roll_5_3",
        "result:parameters_roll_6_r|-|dice1:parameters_roll_6_1|-|dice2:parameters_roll_6_2|-|dice3:parameters_roll_6_3",
    ],
    clearData: [
        "parameters_roll_1_r",
        "parameters_roll_2_r",
        "parameters_roll_3_r",
        "parameters_roll_4_r",
        "parameters_roll_5_r",
        "parameters_roll_6_r",
        "parameters_roll_1_1",
        "parameters_roll_2_1",
        "parameters_roll_3_1",
        "parameters_roll_4_1",
        "parameters_roll_5_1",
        "parameters_roll_6_1",
        "parameters_roll_1_2",
        "parameters_roll_2_2",
        "parameters_roll_3_2",
        "parameters_roll_4_2",
        "parameters_roll_5_2",
        "parameters_roll_6_2",
        "parameters_roll_1_3",
        "parameters_roll_2_3",
        "parameters_roll_3_3",
        "parameters_roll_4_3",
        "parameters_roll_5_3",
        "parameters_roll_6_3",
    ],
    latency: 300
}

const SKILLS_NAMES_CONTROLLERS = [
    {"attr": "skill_brawl", name: "Bijatyka", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_handheld_weapon", name: "Broń ręczna", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_throwing", name: "Rzucanie", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_car", name: "Samochód", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_motorcycle", name: "Motocykl", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_truck", name: "Ciężarówka", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_pickpocketing", name: "Kradzież kieszonkowa", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_lockpicking", name: "Otwieranie zamków", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_agile_hands", name: "Zwinne dłonie", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_pistols", name: "Pistolety", nameIsReference: false, forSpec:["warrior", "ranger"]},
    {"attr": "skill_rifles", name: "Karabiny", nameIsReference: false, forSpec:["warrior", "ranger"]},
    {"attr": "skill_machine_guns", name: "Broń maszynowa", nameIsReference: false, forSpec:["warrior", "ranger"]},
    {"attr": "skill_bow", name: "Łuk", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_crossbow", name: "Kusza", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_sling", name: "Proca", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_direction_sense", name: "Wyczucie kierunku", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_trap_preparation", name: "Przygotowanie pułapki", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_tracking", name: "Tropienie", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_listening", name: "Nasłuchiwanie", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_spotting", name: "Wypatrywanie", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_alertness", name: "Czujność", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_sneaking", name: "Skradanie się", nameIsReference: false, forSpec:["ranger", "smarty"]},
    {"attr": "skill_hiding", name: "Ukrywanie się", nameIsReference: false, forSpec:["ranger", "smarty"]},
    {"attr": "skill_disguise", name: "Maskowanie", nameIsReference: false, forSpec:["ranger", "smarty"]},
    {"attr": "skill_hunting", name: "Łowiectwo", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_terrain_knowledge", name: "Znajomość terenu", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_water_acquisition", name: "Zdobywanie wody", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_intimidation", name: "Zastraszanie", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_persuasion", name: "Perswazja", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_leadership", name: "Zdolności przywódcze", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_emotional_perception", name: "Postrzeganie emocji", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_bluff", name: "Blef", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_animalcare", name: "Opieka nad zwierzętami", nameIsReference: false, forSpec:["smarty"]},
    {"attr": "skill_toughness", name: "Odporność na ból", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_resolve", name: "Niezłomność", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_morale", name: "Morale", nameIsReference: false, forSpec:["warrior"]},
    {"attr": "skill_first_aid", name: "Pierwsza pomoc", nameIsReference: false, forSpec:["technic", "ranger"]},
    {"attr": "skill_wound_treatment", name: "Leczenie ran", nameIsReference: false, forSpec:["technic", "ranger"]},
    {"attr": "skill_disease_treatment", name: "Leczenie chorób", nameIsReference: false, forSpec:["technic", "ranger"]},
    {"attr": "skill_mechanics", name: "Mechanika", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_electronics", name: "Elektronika", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_computers", name: "Komputery", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_heavy_machinery", name: "Maszyny ciężkie", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_military_vehicles", name: "Wozy bojowe", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_boats", name: "Kutry", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_gunsmithing", name: "Rusznikarstwo", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_launchers", name: "Wyrzutnie", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_explosives", name: "Materiały wybuchowe", nameIsReference: false, forSpec:["technic"]},
    {"attr": "skill_general_knowledge1", name: "skill_general_knowledge1_text_input", nameIsReference: true, forSpec:["warrior", "technic"]},
    {"attr": "skill_general_knowledge2", name: "skill_general_knowledge2_text_input", nameIsReference: true, forSpec:["warrior", "technic"]},
    {"attr": "skill_general_knowledge3", name: "skill_general_knowledge3_text_input", nameIsReference: true, forSpec:["warrior", "technic"]},
    {"attr": "skill_endurance", name: "Kondycja", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_swimming", name: "Pływanie", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_climbing", name: "Wspinaczka", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_horseback_riding", name: "Jazda konna", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_horse_driving", name: "Powożenie", nameIsReference: false, forSpec:["ranger"]},
    {"attr": "skill_dressage", name: "Ujeżdżanie", nameIsReference: false, forSpec:["ranger"]},
]

const SKILLS_PACKAGES_NAMES_CONTROLLERS = [
    {"attr": "skill_hand_to_hand_combat", name: "Walka wręcz", nameIsReference: false, forSpec:["warrior"], skillAttrs:["skill_brawl","skill_handheld_weapon","skill_throwing"]},
    {"attr": "skill_driving", name: "Prowadzenie pojazdów", nameIsReference: false, forSpec:["technic"], skillAttrs:["skill_car","skill_motorcycle","skill_truck"]},
    {"attr": "skill_manual_dexterity", name: "Zdolności manualne", nameIsReference: false, forSpec:["smarty"], skillAttrs:["skill_pickpocketing","skill_lockpicking","skill_agile_hands"]},
    {"attr": "skill_firearms", name: "Broń strzelecka", nameIsReference: false, forSpec:["warrior", "ranger"], skillAttrs:["skill_pistols","skill_rifles","skill_machine_guns"]},
    {"attr": "skill_long_range_weapons", name: "Broń dystansowa", nameIsReference: false, forSpec:["warrior"], skillAttrs:["skill_bow","skill_crossbow","skill_sling"]},
    {"attr": "skill_terrain_orientation", name: "Orientacja w terenie", nameIsReference: false, forSpec:["ranger"], skillAttrs:["skill_direction_sense","skill_trap_preparation","skill_tracking"]},
    {"attr": "skill_perception", name: "Spostrzegawczość", nameIsReference: false, forSpec:["ranger"], skillAttrs:["skill_listening","skill_spotting","skill_alertness"]},
    {"attr": "skill_camouflage", name: "Kamuflaż", nameIsReference: false, forSpec:["ranger", "smarty"], skillAttrs:["skill_sneaking","skill_hiding","skill_disguise"]},
    {"attr": "skill_survival", name: "Przetrwanie", nameIsReference: false, forSpec:["ranger"], skillAttrs:["skill_hunting","skill_terrain_knowledge","skill_water_acquisition"]},
    {"attr": "skill_negotiation", name: "Negocjacje", nameIsReference: false, forSpec:["smarty"], skillAttrs:["skill_intimidation","skill_persuasion","skill_leadership"]},
    {"attr": "skill_empathy", name: "Empatia", nameIsReference: false, forSpec:["smarty"], skillAttrs:["skill_emotional_perception","skill_bluff","skill_animalcare"]},
    {"attr": "skill_willpower", name: "Siła woli", nameIsReference: false, forSpec:["warrior"], skillAttrs:["skill_toughness","skill_resolve","skill_morale"]},
    {"attr": "skill_medicine", name: "Medycyna", nameIsReference: false, forSpec:["technic", "ranger"], skillAttrs:["skill_first_aid","skill_wound_treatment","skill_disease_treatment"]},
    {"attr": "skill_technology", name: "Technika", nameIsReference: false, forSpec:["technic"], skillAttrs:["skill_mechanics","skill_electronics","skill_computers"]},
    {"attr": "skill_equipment", name: "Sprzęt", nameIsReference: false, forSpec:["technic"], skillAttrs:["skill_heavy_machinery","skill_military_vehicles","skill_boats"]},
    {"attr": "skill_pyrotechnics", name: "Pirotechnika", nameIsReference: false, forSpec:["technic"], skillAttrs:["skill_gunsmithing","skill_launchers","skill_explosives"]},
    {"attr": "skill_general_knowledge", name: "Wiedza ogólna", nameIsReference: false, forSpec:["warrior", "technic"], skillAttrs:["skill_general_knowledge1","skill_general_knowledge2","skill_general_knowledge3"]},
    {"attr": "skill_fitness", name: "Sprawność", nameIsReference: false, forSpec:["ranger"], skillAttrs:["skill_endurance","skill_swimming","skill_climbing"]},
    {"attr": "skill_equestrianism", name: "Jeździectwo", nameIsReference: false, forSpec:["ranger"], skillAttrs:["skill_horseback_riding","skill_horse_driving","skill_dressage"]},
]