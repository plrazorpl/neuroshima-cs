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
    {"attr": "skill_brawl", name: "Bijatyka", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_handheld_weapon", name: "Broń ręczna", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_throwing", name: "Rzucanie", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_car", name: "Samochód", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_motorcycle", name: "Motocykl", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_truck", name: "Ciężarówka", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_pickpocketing", name: "Kradzież kieszonkowa", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_lockpicking", name: "Otwieranie zamków", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_agile_hands", name: "Zwinne dłonie", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_pistols", name: "Pistolety", nameIsReference: false, forSpec: ["warrior", "ranger"]},
    {"attr": "skill_rifles", name: "Karabiny", nameIsReference: false, forSpec: ["warrior", "ranger"]},
    {"attr": "skill_machine_guns", name: "Broń maszynowa", nameIsReference: false, forSpec: ["warrior", "ranger"]},
    {"attr": "skill_bow", name: "Łuk", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_crossbow", name: "Kusza", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_sling", name: "Proca", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_direction_sense", name: "Wyczucie kierunku", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_trap_preparation", name: "Przygotowanie pułapki", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_tracking", name: "Tropienie", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_listening", name: "Nasłuchiwanie", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_spotting", name: "Wypatrywanie", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_alertness", name: "Czujność", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_sneaking", name: "Skradanie się", nameIsReference: false, forSpec: ["ranger", "smarty"]},
    {"attr": "skill_hiding", name: "Ukrywanie się", nameIsReference: false, forSpec: ["ranger", "smarty"]},
    {"attr": "skill_disguise", name: "Maskowanie", nameIsReference: false, forSpec: ["ranger", "smarty"]},
    {"attr": "skill_hunting", name: "Łowiectwo", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_terrain_knowledge", name: "Znajomość terenu", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_water_acquisition", name: "Zdobywanie wody", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_intimidation", name: "Zastraszanie", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_persuasion", name: "Perswazja", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_leadership", name: "Zdolności przywódcze", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_emotional_perception", name: "Postrzeganie emocji", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_bluff", name: "Blef", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_animalcare", name: "Opieka nad zwierzętami", nameIsReference: false, forSpec: ["smarty"]},
    {"attr": "skill_toughness", name: "Odporność na ból", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_resolve", name: "Niezłomność", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_morale", name: "Morale", nameIsReference: false, forSpec: ["warrior"]},
    {"attr": "skill_first_aid", name: "Pierwsza pomoc", nameIsReference: false, forSpec: ["technic", "ranger"]},
    {"attr": "skill_wound_treatment", name: "Leczenie ran", nameIsReference: false, forSpec: ["technic", "ranger"]},
    {
        "attr": "skill_disease_treatment",
        name: "Leczenie chorób",
        nameIsReference: false,
        forSpec: ["technic", "ranger"]
    },
    {"attr": "skill_mechanics", name: "Mechanika", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_electronics", name: "Elektronika", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_computers", name: "Komputery", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_heavy_machinery", name: "Maszyny ciężkie", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_military_vehicles", name: "Wozy bojowe", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_boats", name: "Kutry", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_gunsmithing", name: "Rusznikarstwo", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_launchers", name: "Wyrzutnie", nameIsReference: false, forSpec: ["technic"]},
    {"attr": "skill_explosives", name: "Materiały wybuchowe", nameIsReference: false, forSpec: ["technic"]},
    {
        "attr": "skill_general_knowledge1",
        name: "skill_general_knowledge1_text_input",
        nameIsReference: true,
        forSpec: ["warrior", "technic"]
    },
    {
        "attr": "skill_general_knowledge2",
        name: "skill_general_knowledge2_text_input",
        nameIsReference: true,
        forSpec: ["warrior", "technic"]
    },
    {
        "attr": "skill_general_knowledge3",
        name: "skill_general_knowledge3_text_input",
        nameIsReference: true,
        forSpec: ["warrior", "technic"]
    },
    {"attr": "skill_endurance", name: "Kondycja", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_swimming", name: "Pływanie", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_climbing", name: "Wspinaczka", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_horseback_riding", name: "Jazda konna", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_horse_driving", name: "Powożenie", nameIsReference: false, forSpec: ["ranger"]},
    {"attr": "skill_dressage", name: "Ujeżdżanie", nameIsReference: false, forSpec: ["ranger"]},
]

const SKILLS_PACKAGES_NAMES_CONTROLLERS = [
    {
        "attr": "skill_hand_to_hand_combat",
        name: "Walka wręcz",
        nameIsReference: false,
        forSpec: ["warrior"],
        skillAttrs: ["skill_brawl", "skill_handheld_weapon", "skill_throwing"]
    },
    {
        "attr": "skill_driving",
        name: "Prowadzenie pojazdów",
        nameIsReference: false,
        forSpec: ["technic"],
        skillAttrs: ["skill_car", "skill_motorcycle", "skill_truck"]
    },
    {
        "attr": "skill_manual_dexterity",
        name: "Zdolności manualne",
        nameIsReference: false,
        forSpec: ["smarty"],
        skillAttrs: ["skill_pickpocketing", "skill_lockpicking", "skill_agile_hands"]
    },
    {
        "attr": "skill_firearms",
        name: "Broń strzelecka",
        nameIsReference: false,
        forSpec: ["warrior", "ranger"],
        skillAttrs: ["skill_pistols", "skill_rifles", "skill_machine_guns"]
    },
    {
        "attr": "skill_long_range_weapons",
        name: "Broń dystansowa",
        nameIsReference: false,
        forSpec: ["warrior"],
        skillAttrs: ["skill_bow", "skill_crossbow", "skill_sling"]
    },
    {
        "attr": "skill_terrain_orientation",
        name: "Orientacja w terenie",
        nameIsReference: false,
        forSpec: ["ranger"],
        skillAttrs: ["skill_direction_sense", "skill_trap_preparation", "skill_tracking"]
    },
    {
        "attr": "skill_perception",
        name: "Spostrzegawczość",
        nameIsReference: false,
        forSpec: ["ranger"],
        skillAttrs: ["skill_listening", "skill_spotting", "skill_alertness"]
    },
    {
        "attr": "skill_camouflage",
        name: "Kamuflaż",
        nameIsReference: false,
        forSpec: ["ranger", "smarty"],
        skillAttrs: ["skill_sneaking", "skill_hiding", "skill_disguise"]
    },
    {
        "attr": "skill_survival",
        name: "Przetrwanie",
        nameIsReference: false,
        forSpec: ["ranger"],
        skillAttrs: ["skill_hunting", "skill_terrain_knowledge", "skill_water_acquisition"]
    },
    {
        "attr": "skill_negotiation",
        name: "Negocjacje",
        nameIsReference: false,
        forSpec: ["smarty"],
        skillAttrs: ["skill_intimidation", "skill_persuasion", "skill_leadership"]
    },
    {
        "attr": "skill_empathy",
        name: "Empatia",
        nameIsReference: false,
        forSpec: ["smarty"],
        skillAttrs: ["skill_emotional_perception", "skill_bluff", "skill_animalcare"]
    },
    {
        "attr": "skill_willpower",
        name: "Siła woli",
        nameIsReference: false,
        forSpec: ["warrior"],
        skillAttrs: ["skill_toughness", "skill_resolve", "skill_morale"]
    },
    {
        "attr": "skill_medicine",
        name: "Medycyna",
        nameIsReference: false,
        forSpec: ["technic", "ranger"],
        skillAttrs: ["skill_first_aid", "skill_wound_treatment", "skill_disease_treatment"]
    },
    {
        "attr": "skill_technology",
        name: "Technika",
        nameIsReference: false,
        forSpec: ["technic"],
        skillAttrs: ["skill_mechanics", "skill_electronics", "skill_computers"]
    },
    {
        "attr": "skill_equipment",
        name: "Sprzęt",
        nameIsReference: false,
        forSpec: ["technic"],
        skillAttrs: ["skill_heavy_machinery", "skill_military_vehicles", "skill_boats"]
    },
    {
        "attr": "skill_pyrotechnics",
        name: "Pirotechnika",
        nameIsReference: false,
        forSpec: ["technic"],
        skillAttrs: ["skill_gunsmithing", "skill_launchers", "skill_explosives"]
    },
    {
        "attr": "skill_general_knowledge",
        name: "Wiedza ogólna",
        nameIsReference: false,
        forSpec: ["warrior", "technic"],
        skillAttrs: ["skill_general_knowledge1", "skill_general_knowledge2", "skill_general_knowledge3"]
    },
    {
        "attr": "skill_fitness",
        name: "Sprawność",
        nameIsReference: false,
        forSpec: ["ranger"],
        skillAttrs: ["skill_endurance", "skill_swimming", "skill_climbing"]
    },
    {
        "attr": "skill_equestrianism",
        name: "Jeździectwo",
        nameIsReference: false,
        forSpec: ["ranger"],
        skillAttrs: ["skill_horseback_riding", "skill_horse_driving", "skill_dressage"]
    },
]

const TRICKS_CONF = {
    numberTricksPerPage: 9,
    numberHaveTricksPerPage: 4
}

const TRICKS_LIST = [
    {
        "from": "Podstawka",
        "list": [
            {
                "name": "3 2 1 Bum",
                "reguirements": "Mechanika 3+, Materiały wybuchowe 3+",
                "description": "Wszystkie urządzenia na świecie można podzielićna takie, które czasem wybuchają, i takie,które nigdy nie wybuchają. Szczególnie interesującię te pierwsze. Wystarczy tu przeciąć wężyk, tamskręcić kabel, tu znów poluzować śrubkę. I gotowe.Teraz wystarczy poczekać na fajerwerki.",
                "action": "Możesz uzbroić - jak bombę - dowolnypojazd, urządzenie czy maszynę napędzaną łatwopalnympaliwem. Kwadrans spokojnej pracy i możeszzacząć odliczanie. Czas wybuchu określasz z pięćdziesięcioprocentowądokładnością na sekundę, minutę,kwadrans lub godzinę (np. gdy wybierzeszminutę, spodziewaj się wybuchu między pół a półtorejminuty). Czasem, jeśli MG pozwoli, nawet na tydzień.Siła wybuchu zależy od rodzaju urządzenia.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_mechanics_input",
                            val: 3
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_explosives_input",
                            val: 3
                        }
                    },
                ]

            },
            {
                "name": "Aramis",
                "reguirements": "Zręczność 14+, Broń ręczna 5+",
                "description": "Gdy spotkasz kiedyś wędrującego samotniedziadka, który podpiera się kijkiem, za nic w świeciego nie zaczepiaj. To może być Dziadzio z Alabamy.Najpierw wytrąci ci kijkiem twój topór, potemzłoi na kwaśne jabłko, a na koniec pogrozi palcem ipójdzie sobie dalej.",
                "action": "Akcja za 2 sukcesy, PT testu o poziomwyższy, do ataku dowolną bronią dłuższą od noża.Szast, prast i broń przeciwnika (każda dłuższa odnoża) leci na bok.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_ag_main",
                            val: 14
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_handheld_weapon_input",
                            val: 5
                        }
                    },
                ]
            },
            {
                "name": "Asekuracja",
                "reguirements": "Wspinaczka 2+",
                "description": "No nieźle ci idzie, teraz spróbuj sam. No dalej,nie pękaj...",
                "action": "Bohater pomaga innej osobie (zapiętejw uprząż) wspinać się po linie. Dzięki temu osoba tatraktowana jest, jak gdyby miała Umiejętność Wspinaczkana poziomie 1. Pozwala jej to uniknąć kłopotówz Suwakiem.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_climbing_input",
                            val: 2
                        }
                    }
                ]
            },
            {
                "name": "Aspiryna i Tik-Taki",
                "reguirements": "Leczenie chorób 4+, Blef 3+",
                "description": "Raz byłem poważnie chory i leczył mniewtedy Pastor Ludwik. Przez dwa tygodnie łykałem99sztuczkilekarstwo na Gorączkę sobotniej nocy, aż wyzdrowiałem.Potem dowiedziałem się, że klecha karmiłmnie aspiryną i Tik-takami.",
                "action": "Za pomocą najprostszych lekarstw,Bohater potrafi utrzymywać chorego w stanie stabilnym,tak, jakby podopieczny łykał potrzebne mulekarstwo. „Aspirynę i Tik-Taki” można podawaćprzez liczbę dni równą wartości Umiejętności Blef.Potem trzeba przerzucić się na zalecane leki. Podwóch tygodniach znów można wrócić do kuracji„Aspiryną i Tik-Takami”.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_disease_treatment_input",
                            val: 4
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_bluff_input",
                            val: 3
                        }
                    }
                ]
            },
            {
                "name": "Barbarka",
                "reguirements": "Bijatyka 5+, Budowa 14+",
                "description": "Jak dla mnie, jednym z najbardziej deprymującychzagrań w walce, jest pieprznąć gościa wryj, własnym ryjem. To zawsze szokuje...",
                "action": "Jeśli segment wcześniej zadałeś celnycios (nawet obroniony przez przeciwnika), w kolejnymsegmencie możesz użyć dodatkowej akcji (zużywającjednak w normalny sposób 1 segment tury):Akcja za 1 sukces: uderzenie głową. Zadaje CiężkiegoSiniaka. Można użyć tylko raz przeciwko temusamemu przeciwnikowi.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_brawl_input",
                            val: 5
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_bd_main",
                            val: 14
                        }
                    }
                ]
            },
            {
                "name": "Berserker",
                "reguirements": "Odporność na ból 6+, Budowa 12+",
                "description": "Kumpel chwalił się kiedyś, że jest twardyjak Statua Wolności i nic go nie powali na ziemię. Noi doczekał się - napadła go grupa gangerów i zaczęłago lać rurkami i łańcuchami. Nie chciał się poddać,to go powalili na ziemię. Wstawał i dalej się na nichrzucał. No i w końcu brakło mu posoki, bo cała wyciekła,tak go pochlastali. Zbyt twardy był, możnapowiedzieć.",
                "action": "Jeśli Bohater walczy wręcz i odniósłprzynajmniej jedną ciężką ranę, do końca walki automatyczniezdaje testy Odporności na ból, takżeautomatycznie może wejść w tryb berserkera (walczącynie musi się bronić).",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_toughness_input",
                            val: 6
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_bd_main",
                            val: 12
                        }
                    }
                ]
            },
            {
                "name": "Bez oddechu",
                "reguirements": "Pływanie 4+",
                "description": "Więc ja mu głowę pod wodę i czekam. Zaczniesię dusić, to będzie bardziej rozmowny. No nieprzesadzę, jak powiem, że trzymałem go tam dwieminuty. A on uśmiechnięty. No to trzy. A on mordaw banan. No to ja go na cztery minuty. A on... Wkońcu złamałem mu kolano gazrurką i zaczął śpiewać...",
                "action": "Bohater potrafi wytrzymać bez oddechudwa razy dłużej niż zwykły człowiek (czyli każde4 punkty Budowy dają 1 minutę).",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_toughness_input",
                            val: 6
                        }
                    }
                ]
            },
            {
                "name": "Bez sprzętu, bez zabezpieczenia",
                "reguirements": "Wspinaczka 6+, Zręczność 10+",
                "description": "Kocie ruchy, tak? Jak dla mnie to facet poruszasię jak glonojad po ściance akwarium. Przylgnąłdo skały i prędzej ta skała walnie na ziemię,niż on. Tak to już jest, jak od dziecka mieszkasz wjaskiniach, nie?",
                "action": "Podczas wspinaczki Bohater podwajapoziom swojej Umiejętności Wspinaczka, nawet jeślinie używa sprzętu i liny. Jednak użycie specjalistycznegosprzętu bardziej już nie pomnoży poziomuUmiejętności.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_climbing_input",
                            val: 6
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_ag_main",
                            val: 10
                        }
                    }
                ]
            },
            {
                "name": "Bez sznurków",
                "reguirements": "Pistolety 3+, Zręczność 13+, Percepcja 12+",
                "description": "Nauczyłem się tego z filmu. Tak, z filmu.Tyle, że u tamtych facetów było widać sznurki, naktórych latali jak czarodzieje. A ja nie potrzebujężadnych sznurków. Chcesz zobaczyć?",
                "action": "Skaczesz i jednocześnie strzelasz w locie- trwa to dwa segmenty, więc możesz oddać dwastrzały. Otrzymujesz za to karę +20% do testu strzelania,za to ciebie trudniej trafić aż o +40%. W trzecimsegmencie padasz na ziemię. Możesz tak zostaći walić dalej leżąc, albo poświęcić segmenty na pozbieraniesię i spieprzać. Sztuczka dotyczy tylkopistoletów.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_climbing_input",
                            val: 3
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_ag_main",
                            val: 13
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_pr_main",
                            val: 12
                        }
                    }
                ]
            },
            {
                "name": "Bieg w ciszy",
                "reguirements": "Kondycja 3+, Budowa 12+",
                "description": "Powiedział do mnie „Ścigamy się” i uśmiechnąłsię głupio. Myślę sobie, niezły żart. A potem zacząłbiec. Spokojnie dopiłem piwo, zrobiłem zakupy,zatankowałem do pełna i ruszyłem. Po drodze mijałemgo czterokrotnie, dokładnie tyle razy, ile razystawała moja Christine, która tej nocy wyraźnie niebyła w formie. Skończyło się tym, że dotarł do Vegaspierwszy - przebiegł 80 kilosów szybciej, niż mójCadillac.",
                "action": "Bohater może biec bez przerwy przezkilkanaście godzin, pokonując nawet 50 km.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_endurance_input",
                            val: 3
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_bd_main",
                            val: 12
                        }
                    }
                ]
            },
            {
                "name": "Bierz go!",
                "reguirements": "Opieka nad zwierzętami 4+, Charakter 8+",
                "description": "Jeżeli lubisz zwierzęta, a one w dodatku towyczują, możesz skorzystać na wzajemnej sympatii.A to kogoś poszczujesz kretem, a to jaszczurkaaportuje ci bumerang...",
                "action": "Bohater może wydać prosty rozkazoswojonemu i wytresowanemu zwierzęciu.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_animalcare_input",
                            val: 4
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_cha_main",
                            val: 8
                        }
                    }
                ]
            },
            {
                "name": "Boa",
                "reguirements": "Broń ręczna 5+, Zręczność 12+",
                "description": "Łańcuch uchodzi za broń dla idiotów. Możenie jest specjalnie zabójczy, ale nieźle wyrównujeszanse, nawet jeśli nic nie potrafisz. A jednak widziałemkiedyś prawdziwego mistrza łańcucha. Potrafiłnim nawet obierać ziemniaki.",
                "action": "Jeśli walczący używa łańcucha, nieotrzymuje kary za walkę w zwarciu, tłoku i ciasnychpomieszczeniach. Ponadto otrzymuje dodatkoweakcje za 2 lub 3 sukcesy. Akcja za 2 sukcesy:pochwycenie. Używane przez walczących bronieotrzymują modyfikator jak w tłoku, a pochwyconydodatkowo otrzymuje karę -2 do Zręczności (dopókinie przejmie Inicjatywy lub nie otrzyma rany).Akcja za 3 sukcesy: wykończenie. Walczący dusiprzeciwnika łańcuchem i unieruchamia go. Możeprzydusić przeciwnika, aż ten straci przytomność:obaj walczący wykonują Przeciwstawny test Budowy,przeciwnik z dodatkowym PT +60%. Jeśli przeciwnikprzegra test, traci przytomność. Jeśli przeciwnikzostał pochwycony wcześniej, wtedy akcjakosztuje tylko 2 sukcesy.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_animalcare_input",
                            val: 4
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_cha_main",
                            val: 8
                        }
                    }
                ]
            },
            {
                "name": "Cassanova/Mata Hari",
                "reguirements": "Blef 2+, Perswazja 2+, Zwinne dłonie 2+, Spryt 10+",
                "description": "[ocenzurowano]",
                "action": "Możesz przerzucić każdy test Charakteru związany z uwodzeniem.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_bluff_input",
                            val: 2
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_persuasion_input",
                            val: 2
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_agile_hands_input",
                            val: 2
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_int_main",
                            val: 10
                        }
                    }
                ]
            },
            {
                "name": "Chłodnym okiem",
                "reguirements": "Spryt 14+",
                "description": "Wsadzał na głowę słuchawki, włączał walkmanaz melodią szumiących liści, robił sobie gorącejkawy i zamykał oczy. Po połowie godziny otwierałoczy i rzucał jakimś spostrzeżeniem. Cholera, zawszepotrafił mnie zaskoczyć.",
                "action": "Wykonujesz test Sprytu. Jeśli zdasz,MG musi spokojnie, powoli i jasno przedstawić ciwszystkie fakty i zdarzenia, które pojawiły się wprzygodzie. Jeszcze raz, po kolei i od początku.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_int_main",
                            val: 14
                        }
                    }
                ]
            },
            {
                "name": "Ciszej niż cień",
                "reguirements": "Skradanie się 6+",
                "description": "Słyszałeś kiedyś poruszający się cień? Z tąSztuczką możesz być jeszcze bardziej cichy. A widziałeśkiedyś skradający się cień w środku bezksiężycowejnocy? Możesz być jeszcze bardziej niewidzialny.Dwa w jednym. Nie ma się co zastanawiać -bierz!",
                "action": "Przeciwnik zdaje o poziom trudniejszy test Czujności / Wypatrywania / Nasłuchiwania.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_sneaking_input",
                            val: 6
                        }
                    }
                ]
            },
            {
                "name": "Człowiek, który kulom się nie kłaniał",
                "reguirements": "Morale 3+, Percepcja 8+",
                "description": "Opowiadali mi, że na północy, na froncie,pracował pewien sanitariusz. Chodził między okopamispokojnie, jakby zbierał stokrotki. Tu zawiązałbandaż, tam założył łupki na nogę, a w powietrzukule gwizdały i gwizdały.",
                "action": "Bohater jest uodporniony na efektypsychologiczne ostrzału (ale nie obrażeń!).",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "skill_morale_success_input",
                            val: 3
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_pr_main",
                            val: 8
                        }
                    },
                ]
            },
            {
                "name": "Czterej pancerni",
                "reguirements": "Wozy bojowe 3+ lub Maszyny ciężkie 3+, Opieka nad zwierzętami 2+",
                "description": "Słyszałeś kiedyś o gangu czołgistów? To niemit. Istnieją tacy narwańcy, którzy wędrują po kontynenciew czołgu. Po czterech w każdej maszynie.Magiczna liczba, czy co? Piąty zawsze jest pies.",
                "action": "Jeżeli Bohater kierujący maszyną maw kokpicie trzech pomocników, z których każdy posiadaUmiejętność Maszyny ciężkie lub Wozy bojoweprzynajmniej na 1, wszystkie jego testy związanez pojazdem są łatwiejsze o -20%. Jeżeli w załodzeznajdzie się pies, testy są łatwiejsze o -30%.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_military_vehicles_input",
                                    val: 3
                                },
                                {
                                    attr: "skill_heavy_machinery_input",
                                    val: 3
                                }
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_animalcare_input",
                            val: 2
                        }
                    },
                ]
            },
            {
                "name": "Czuły spust",
                "reguirements": "Percepcja 14+, Broń maszynowa 4+",
                "description": "Pewien sierżant z Posterunku zrobił kiedyśniezły pokaz. Zasiadł do CKMu, uśmiechnął się i powiedział:12. Po czym tratatatata. Potem powiedział:21. I tratatatata. Poszliśmy policzyć dziurki w ścianie.Dwanaście i dwadzieścia jeden.",
                "action": "Bohater może przerwać zadeklarowanądługą serię po 1 segmencie, oddając zamiast niejkrótką. Może też przerwać ogień ciągły po 1 segmencie,oddając zamiast niego krótką serię, lub po 2 segmentach- oddając długą serię. Dzięki temu oszczędzakule.",
                req: [
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_pr_main",
                            val: 14
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_machine_guns_input",
                            val: 4
                        }
                    },
                ]
            },
            {
                "name": "Dalszy zasięg",
                "reguirements": "Kusza 9+, Budowa 12+",
                "description": "Znasz Chucka? Chuck mówi do mnie, „Widzisztego ptaka?” A ja mu na to: „No nie widzę”. A on mówi: „To posłuchaj”. I sru, strzelił z tej swojejkuszy. I po chwili „Kraaa, kraa”. Zabił ptaszynę... Jawiem, ile to mogło być metrów, pięćset...?",
                "action": "Otrzymując te same utrudnienia, bohaterpotrafi strzelić na dwa razy większą odległość,pod warunkiem, że kusza ma wystarczający zasięg.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_crossbow_input",
                        val: 9
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }]
            },
            {
                "name": "Dawid",
                "reguirements": "Proca 4+",
                "description": "A gość kręci tym paskiem i kręci, w końcupytam go: „Koleś, zaciąłeś się?! Wypuścisz ten kamieńw końcu?” No i wypuścił. Aż żal mi było tegopalanta z Vegas, gdy dostał kamieniem prosto w czoło.Niby zwykła proca, a jednak wiele potrafi.",
                "action": "Bohater przeznacza trzy segmenty nastrzał, dzięki czemu jest mu łatwiej o -30% trafićprzeciwnika z procy.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_sling_input",
                        val: 4
                    }
                }]
            },
            {
                "name": "Dłuższy strzał",
                "reguirements": "Łuk 9+, Budowa 12+",
                "description": "Znasz Chucka? Chuck mówi do mnie, widzisztego ptaka? A ja mu na to: no nie widzę. A on... Co?Już to mówiłem? O kuszy? E, niemożliwe. Chuck strzelaz łuku...",
                "action": "Otrzymując te same utrudnienia, Bohaterpotrafi strzelić na dwa razy większą odległość,pod warunkiem, że łuk ma wystarczający zasięg.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_bow_input",
                        val: 9
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }]

            },
            {
                "name": "Dobry i zły glina",
                "reguirements": "Spryt 12+",
                "description": "Widzisz tamten cmentarz? Zauważyłeś, żewszystkie daty na nim są wczorajsze? Wczoraj chciałemsię po prostu dowiedzieć od miejscowych, któryz nich jest mechanikiem. I wiesz, w końcu poskutkowało.Jakiś facio w ciągu trzech godzin nauczył sięfachu i teraz reperuje mi samochód.",
                "action": "Podczas przesłuchiwania sam na samz więźniem, możesz w teście dodać do Zastraszanialub Perswazji swój Blef lub Postrzeganie emocji.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 12
                    }
                }]

            },
            {
                "name": "Dobywanie",
                "reguirements": "Pistolety 5+ lub Broń ręczna 5+, Zręczność 12+",
                "description": "Widziałem kiedyś taki film, w starym kiniew Vegas, „Bez przebaczenia”, czy „Tombstone”, niepamiętam dokładnie. Rzecz była o kowbojach. Ci gościestrzelali się bez osłony, bez pancerzy i innychtakich. Jedyne co się liczyło - to kto pierwszy dobędziebroni i wystrzeli. I wiesz, od kilku miesięcy teżćwiczę dobywanie. W końcu kogoś zaskoczę.",
                "action": "Dobycie pistoletu (lub noża itp.) zajmujejeden segment.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_pistols_input",
                                    val: 5
                                },
                                {
                                    attr: "skill_handheld_weapon_input",
                                    val: 5
                                }
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_ag_main",
                            val: 2
                        }
                    },
                ]
            },
            {
                "name": "Dom na plecach",
                "reguirements": "Kondycja 4+, Budowa 13+",
                "description": "Kiedy wyciągnął z plecaka namiot, materac,śpiwór, dwie butle gazowe, zestaw garnków, książkękucharską i maść na moskity, nie zdziwiłem się.Zaskoczył mnie, gdy wyciągnął słoik ogórków, miskęna deszczówkę i żółwia w słoiku. Potem jeszczejakiś wykrywacz ruchu i poduszkę. Przegiął, gdy zdna wyjął pidżamę i papucie...",
                "action": "Możesz udźwignąć dwa razy więcej niżnormalny człowiek.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_endurance_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 13
                    }
                }]

            },
            {
                "name": "Doświadczony",
                "reguirements": "Kondycja 5+, Budowa 12+",
                "description": "Dawniej była nawet taka fucha, bodaj brygadzistasię to nazywało. Facet stał i nic nie robił, ainni dzięki temu pracowali lepiej. Dasz wiarę?!",
                "action": "Bohater pomaga innym osobom pracującymwraz z nim, ich wydajność jest większa o50%, bo BG motywuje i pomaga innym w pracy.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_endurance_input",
                        val: 5
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }]

            },
            {
                "name": "Dystans",
                "reguirements": "Rzucanie 6+, Budowa 10+",
                "description": "Znasz Chucka? Chuck mówi do mnie: „Widzisztego ptaka?”. Co znowu? Jak to już było? Cobyło?! Opowiadałem już o tym? No to sorry...",
                "action": "Bohater otrzymuje tylko połowę karywynikającej z dystansu podczas rzucania nożem.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_throwing_input",
                        val: 6
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 10
                    }
                }]

            },
            {
                "name": "Dziś wszystko, jutro nic",
                "reguirements": "Kondycja 3+",
                "description": "No i gość zawziął się i rozładował ten tabor.Inna sprawa, że na drugi dzień, jak zszedł z wyra, topadł na pysk i tak został. Kawę to mu słomką podawałem.Nie potrafił się ruszyć i już. Popsuł się, innymisłowy.",
                "action": "Bohater może pracować o tyle procentwydajniej, ile wynosi jego Budowa pomnożona przez20. Musi też zdać Bardzo Trudny test Budowy. Następnegodnia Bohater nie jest zdolny do wykonywaniapracy fizycznej.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_endurance_input",
                        val: 3
                    }
                }]

            },
            {
                "name": "Flash",
                "reguirements": "Bijatyka 4+, Kondycja 3+",
                "description": "Uwziąłem się kiedyś na pewnego Chinola.Rozwaliłem pół knajpy, ale nie udało mi się go trafić.Padał, skakał, fikał koziołki. W końcu znalazłemgo pod jednym ze stolików. Facet w końcu padł zwyczerpania.",
                "action": "Decyzję należy podjąć na początkutury, przed rzutem 3k20. Walczący może dodać +3 doZręczności w obronie na czas 1 segmentu. Za to nakoniec tury otrzymuje karę +20% ze zmęczenia.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_endurance_input",
                        val: 3
                    }
                }]

            },
            {
                "name": "Garda",
                "reguirements": "Bijatyka 4+, Budowa 12+",
                "description": "Gość mnie w nerę, a ja blok. On mnie wbrzuch, a ja się zastawiam. On mnie w bok, a jagarda. I jeszcze raz uderzył w nerkę, a ja jeszczejeden blok. Niestety, potem się wściekł i złapał toporek...",
                "action": "Decyzję należy podjąć na początkutury, przed rzutem 3k20. Walczący otrzymuje bonus+6 do Zręczności w obronie, ale w razie obronionegociosu i tak otrzymuje obrażenia, tylko o poziom niższe.Sztuczka działa tylko przeciwko nieuzbrojonemuprzeciwnikowi (oczywiście, w miarę humanoidalnemu!).",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }]

            },
            {
                "name": "Głaz",
                "requirements": "Przygotowanie pułapki 3+, Charakter 12+",
                "description": "Nie wiesz jak straszliwie trudno jest zachowaćbezruch przez dłuższy czas. Musisz się podrapać.Przesunąć nogę. Wysikać. Dostajesz skurczu. Aoczy wariują - niedługo całe twoje ciało wrzeszczy ojakiś ruch. Dobry snajper potrafi się wyciszyć. Potrafiprzeleżeć półtorej dnia jak głaz, wtopiony wotoczenie, będąc w jakimś dziwnym transie. Nie poruszysię do chwili, gdy pojawi się cel. A wtedy poruszytylko palcem.",
                "action": "Bohater potrafi trwać nieruchomo przezilość minut równą Charakterowi pomnożonemu przez20.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_trap_preparation_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Goła ręka",
                "requirements": "Zwinne dłonie 4+",
                "description": "Karty kartami, ale zwinne rączki przydająsię nie tylko przy zielonym stoliku. Czasem na hasło„Pokaż ręce” trzeba pokazać, że nie ma się broni.A jednak, zawsze tę broń warto by mieć, prawda? Mój kumpel właśnie umiał tak - niby pokazywał, żenic nie ma, a zawsze coś miał, skubany...",
                "action": "Bohater potrafi podejść do kogoś z ukrytympistoletem lub nożem w rękawie, tak że brońjest niedostrzegalna. Jeśli przeciwnicy spodziewająsię ukrytej broni, muszą wykonać Bardzo Trudnytest Czujności.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_agile_hands_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Granie na nerwach",
                "requirements": "Perswazja 9+, Spryt 10+",
                "description": "Miałem takiego kumpla, Eliasa. Facet byłwkurzający, ale miał dobre źródło Tornado, więc włóczyłemsię za nim przez długi czas. Raz napotkaliśmytakiego wielkiego gangera. Elias zaczął się nabijaćz twardziela. Tak mu grał na nerwach, że wielkoludzrobił się czerwony. Już myślałem, że przypieprzyEliasowi... i dostałem w pysk.",
                "action": "Wykonując Bardzo Trudny test Perswazji,Bohater potrafi rozzłościć dowolną osobę tak, żewali ona w pysk najbliżej stojącą ofiarę losu, ale nieBohatera. Kobiety wykonują zaledwie Trudny testPerswazji.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_persuasion_input",
                        val: 9
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 10
                    }
                }]
            }, {
                "name": "Gunfight",
                "requirements": "Pistolety 4+, Zręczność 14+",
                "description": "Bobby Kid nie był żadnym tam karateką,ale sukinsyn dbał o to, żeby nikt mu spluwy niewziął. Potrafiłby odstrzelić ci kapelusz trzymającspluwę za swoimi plecami. Nawet byś nie wiedział,skąd padł strzał.",
                "action": "Decyzję należy podjąć na początkutury, przed rzutem 3k20. Jeśli walczący wykonujestrzał z przyłożenia, może używać UmiejętnościStrzelania zamiast Umiejętności Bijatyka w walcewręcz. Używając Gunfight, nie można za pomocąUmiejętności strzelania podwyższać przeciwnikowiwyników na kostkach (reguła Podwójne działanieUmiejętności).",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_pistols_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 14
                    }
                }]
            }, {
                "name": "Hej, przystojniaku!",
                "requirements": "Perswazja 4+, Charakter 14+, tylko dla kobiety",
                "description": "Czasem zupełnie przeciętna dziewczyna potrafiprzyciągać spojrzenia bardziej, niż niesamowitaszprycha. Dzięki tej sztuczce stada samców będąna usługi Bohaterki. Przynieś buty. Leż. Zmywaj.",
                "action": "Aby oprzeć się Perswazji Bohaterki,członkowie drużyny muszą wykonać Cholernie Trudnytest Niezłomności. W przypadku porażki, spełnią„każde” jej życzenie (chodzi o drobne przysługi).",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_persuasion_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 14
                    }
                }, {
                    type: "eq",
                    data: {
                        attr: "sex",
                        val: "Kobieta"
                    }
                }]
            }, {
                "name": "Hokus pokus",
                "requirements": "Zwinne dłonie 4+",
                "description": "Fajna Sztuczka, przynajmniej do czasu, jaknie bawisz się granatem. Bo wiesz, jak się zbytniozagalopujesz, i sobie wsadzisz w spodnie, a jeszczebez zawleczki...",
                "action": "Bohater potrafi schować do kieszenilub wyciągnąć z niej niewielki przedmiot w sposóbzupełnie niedostrzegalny.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_agile_hands_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Immunitet",
                "requirements": "Leczenie chorób 4+, Budowa 12+",
                "description": "Była kiedyś taka kobieta. Nazywała sięMatka Teresa z Kalkuty. Chociaż w Kalkucie podDenver nikt o niej nie słyszał, uczeni powiadają, żemimo, iż leczyła zakaźnie chorych, umarła ze starości.",
                "action": "Bohater nigdy nie zarazi się chorobąpodczas leczenia pacjentów.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_disease_treatment_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Inspiracja",
                "requirements": "Zdolności przywódcze 3+",
                "description": "Spoko chłopcy, może i jest ich więcej, ale itak przerobimy ich na pasztet! Damy radę?! Pewnie!!No to łapać za niezbędniki i naprzód!",
                "action": "Dowódca zdaje Trudny test ZdolnościPrzywódczych. Jeśli go zda, obniża o jeden PoziomTrudności najbliższego testu Morale wszystkich swoichpodkomendnych lub towarzyszy.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_leadership_input",
                        val: 3
                    }
                }]
            }, {
                "name": "Jest zajebiście",
                "requirements": "Blef 6+, Charakter 16+",
                "description": "Miałem takiego kumpla. Niepoprawny optymista- parł naprzód mimo wszelkich przeszkód. Niewidział nigdy złych stron żadnego planu. Wszystkobyło dla niego „zajebiste”. Najlepsze, że potrafi tymentuzjazmem zarażać innych. To zajebista Sztuczka.Weź ją.",
                "action": "Bohater wykonuje test Blefu o dowolniewybranym PT. Jeśli test się powiedzie na każdyPT powyżej Łatwego wszyscy w drużynce dostająułatwienie -5% do najbliższego testu. Jeśli test Blefunie powiedzie się, wszyscy dostają utrudnienie tejsamej wysokości.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_bluff_input",
                        val: 6
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 16
                    }
                }]
            }, {
                "name": "Kanały",
                "requirements": "Wyczucie kierunku 4+, Spryt 12+",
                "description": "Wędrowaliśmy po podziemiach dobre sześć,może nawet więcej godzin. Ciemno, mokro i piździ. Agość mówi, jesteśmy na miejscu. Myślę sobie - zaproneuro15103sztuczkiwadził nas do domu, witamy w szambie! A on nie,wychodzi na powierzchnię i nagle się okazuje, żejesteśmy w Vegas. A wiesz, rano byliśmy w Detroit.Poważnie!",
                "action": "Wędrując po podziemiach, Bohaterorientuje się w kierunkach niczym żywy kompas ipamięta drogę, jaką przebył tak, jakby miał przedoczami mapę.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_direction_sense_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Komandos",
                "requirements": "Zręczność 14+, Czujność 3+",
                "description": "Pewien facet nauczył mnie doceniać znaczenietych małych podskakujących kopczyków ziemi,które powstają, gdy jakiś wariat wygarnie serią zCKMu. Nie żeby od razu bawił się w arytmetykę igeometrię, ale skubany tak się toczył na prawo i nalewo, że prawie nie szło go trafić.",
                "action": "Nie można cię trafić korygowanym aniprzenoszonym ogniem z broni maszynowej.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 14
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_alertness_input",
                        val: 3
                    }
                }]
            }, {
                "name": "Kop z obrotu",
                "requirements": "Bijatyka 4+, Budowa 8+, Zręczność 14+",
                "description": "Steve miał taki styl, mówił do kolesia Martensi niby się od niego odwracał, by po chwili zakręcićsię i pieprznąć z półobrotu w twarz. Wiesz,Martensy to nazwa jego butów; zawsze potem przeztydzień miałeś ich znak firmowy na ryju. Całkiemniezłe logo, swoją drogą...",
                "action": "Akcja za 3 sukcesy. Budowa do 16 =Lekki Siniak, Budowa powyżej 16 = Ciężki Siniak.Można stosować nawet, gdy walczysz bronią.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 8
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 14
                    }
                }]
            }, {
                "name": "Kot",
                "requirements": "Wspinaczka 4+, Zręczność 12+",
                "description": "I mówi do mnie, spieprzamy. Ja patrzę, agość skacze przez okno. Obłęd.",
                "action": "Bohater może spadać z dwa razy wyższejwysokości, niż normalni ludzie, nie odnoszącobrażeń.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_climbing_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Kradzież w tłumie",
                "requirements": "Kradzież kieszonkowa 2+, Ukrywaniesię 2+",
                "description": "Johny się potknął i wpadł na Devila, Devilna mnie, ja na jakiegoś frajera, a do mojej ręki przylepiłasię jakaś spluwa i dwa zapasowe magazynki.Dziwne to wszystko, co nie?",
                "action": "Jeśli okradasz kogoś w tłumie czy ścisku,test Kradzieży kieszonkowej jest dla ciebie łatwiejszyo -30%.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_pickpocketing_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_disguise_success_input",
                        val: 2
                    }
                }]
            }, {
                "name": "Leśny diabeł",
                "requirements": "Ukrywanie się 5+, Łowiectwo 2+",
                "description": "Kiedy myślę o takich ludziach, przechodząmnie dreszcze. Nie dostrzeżesz żadnego z nich, chybaże zechce być zauważony. Leśny diabeł zaszyjesię gdzieś w gąszczu i tkwi w ukryciu, wyczekującna zdobycz. Ma świadomość bezpieczeństwa, więcmoże skupić się tylko na wyszukiwaniu celu. Pomyślczego ktoś taki mógłby dokonać ze snajperką.",
                "action": "Ukrywając się w lesie, wśród zarośli idrzew, Bohater może dodać do Umiejętności Ukrywaniasię Łowiectwo.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_disguise_success_input",
                        val: 5
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_hunting_input",
                        val: 2
                    }
                }]
            }, {
                "name": "Ładowanie kuszy",
                "requirements": "Kusza 6+",
                "description": "Kuszy nie ładuje się łatwo. Można nawetpowiedzieć, że w warunkach bojowych naciąganiecięciwy to prawdziwy horror. No cóż, są tacy, którzypotrafią w miarę szybko załadować kuszę. Ja tamwolę strzelać z peemki.",
                "action": "Załadowanie kuszy zajmuje Bohaterowijedną turę.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_crossbow_input",
                        val: 6
                    }
                }]
            }, {
                "name": "Ławnik",
                "requirements": "Budowa 14+",
                "description": "Ławnik to taki koleś, który jak nikt innypotrafi nawalać wszystkich wokół ławką. Albo beczką.Albo stolikiem. Cokolwiek, byle było duże i ciężkie.",
                "action": "Otrzymujesz bonus +2 do Broni ręcznej,jeśli w walce zamiast broni używasz ciężkichelementów otoczenia, jak stoły, ławki, beczki itp.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 14
                    }
                }]
            },
            {
                "name": "Magazynek",
                "reguirements": "Zręczność 12+, Pistolety lub Karabiny 3+",
                "description": "A widziałeś może „Desperado”? Ten gość potrafiłwymieniać magazynki, jak nikt inny.",
                "action": "Wymiana magazynka w pistolecie zajmujejeden segment. W przypadku rewolwerów ładujesz1 nabój na segment.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_pistols_input",
                                    val: 3
                                },
                                {
                                    attr: "skill_rifles_input",
                                    val: 3
                                }
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_ag_main",
                            val: 12
                        }
                    },
                ]
            },
            {
                "name": "Mech bojowy",
                "requirements": "Maszyny ciężkie 4+, Spryt 12+",
                "description": "Wstyd się przyznać, ale w miasteczku, którepojechaliśmy łupić, załatwił nas samotny facet.Serio. Był sam, a nas sześciu - każdy na Harleyu.Jak nas załatwił? Miał wóz strażacki. Nie doceniliśmypotęgi sikawaki. I nie ma się z czego śmiać!",
                "action": "Bohater potrafi wykorzystywać elementymaszyn jako broń (wysięgniki, dźwigi, widływózków). PT testów posługiwania się taką broniąustala MG.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_heavy_machinery_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Miotacz kul",
                "requirements": "Zręczność 12+, Percepcja 10+, Wyczuciekierunku 1+, Rzucanie 2+",
                "description": "Potrafisz cholernie celnie rzucać przedmiotami.Nie znaczy to, że od razu zostaniesz nożownikiem.Co prawda, trafisz w cel nawet nożem, ale nieznaczy, że od razu tą właściwą, ostrą stroną. Za todo granatów jest to wprost idealne!",
                "action": "Otrzymujesz bonus -30% do rzucania,jednak nie dotyczy to rzucania nożami itp.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 10
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_direction_sense_input",
                        val: 1
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_throwing_input",
                        val: 2
                    }
                }]
            }, {
                "name": "Mistrz opaski uciskowej",
                "requirements": "Pierwsza pomoc 3+, Blef 3+, Zręczność 12+",
                "description": "Postrzeliłem tamtego gangera, ale to był mójostatni nabój. Myślałem, że gówniarz nas rozstrzela,ale kumpel mówi - „Jestem mistrzem opaski uciskowej,opatrzę ci ranę, ale puścisz nas”. Ganger wśmiech i odpowiada - „Zobaczymy”. Kumpel dopadłdo zbira i dawaj go bandażować. Nawet się nie połapałem,kiedy związał Gangera „w baleron”.",
                "action": "Bohater potrafi tak „opatrzyć” swojegopacjenta, że podopieczny jest skrępowany i niemoże się ruszyć. Sztuczka działa, jeżeli powiedziesię Trudny test Pierwszej pomocy oraz Trudny test Blefu.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_first_aid_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_bluff_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Mistrz włóczni",
                "requirements": "Broń ręczna 6+, Zręczność 14+",
                "description": "Gdy biegł na mnie, wyglądało to tak, jakbychciał skoczyć o tyczce. Niestety, nie o to mu chodziło.",
                "action": "Gdy zaczyna się walka, a twój przeciwnikjest w takiej odległości, że musicie do siebiepodbiec lub podejść, masz przed testem Inicjatywyjedną dodatkową turę walki, w której automatycznieposiadasz Inicjatywę. Dopiero po tej turze w normalnysposób testujecie Inicjatywę. Działa tylko, gdywalczysz włócznią.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_handheld_weapon_input",
                        val: 6
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 14
                    }
                }]
            },
            {
                "name": "Myśleć jak maszyna",
                "reguirements": "Postrzeganie emocji 11+, Elektronika 11+ lub Mechanika 11+",
                "description": "Nestugow jest cholernym cyborgiem. To półbóg,mówię ci. Patrzy przez lornetkę na biegnącegoŁowcę i mówi: „zawróci”. Po kilku sekundach Łowcazawraca.",
                "action": "Po wykonaniu Bardzo Trudnego testuPostrzegania emocji i Bardzo Trudnego testu Mechanikilub Elektroniki, Bohater jest w stanie przewidziećnastępne posunięcie maszyny Molocha. Sztuczkimożna użyć tylko raz przeciwko tej samej maszynie.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_electronics_input",
                                    val: 11
                                },
                                {
                                    attr: "skill_mechanics_input",
                                    val: 11
                                }
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_emotional_perception_input",
                            val: 11
                        }
                    },
                ]
            },
            {
                "name": "Na pewno działa!",
                "requirements": "Rusznikarstwo 4+",
                "description": "Usłyszeliśmy „klik” i już wiedziałem, żemamy przesrane. Spluwa Cichego, którą celował prostow łeb szefa tej grupy mutantów, właśnie się zacięła.Nie było na to lepszego momentu... Cichy splunął,wycedził pod nosem: „No strzelaj zdziro” i jeszczeraz nacisnął spust. Łeb mutanta pęk jak dynia.",
                "action": "Przy wyniku rzutu na zablokowaniebroni w zakresie 11-18, broń zacina się aż do czasujej naprawienia już po walce. Dzięki tej sztuczceBohater potrafi zmusić broń do oddania jeszcze jednegostrzału.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_gunsmithing_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Naprawdę, to nie moja wina",
                "requirements": "Mechanika 3+, Spryt 13+",
                "description": "Ten sukinsyn oparł się o barierkę i wtedynagle spadł mu kapelusz. Mówię ci, to niewiarygodne.Pieprzony kapelusz dostał się między łopatki turbiny.Najpierw coś zgrzytnęło, potem zapiszczało, zadymiło.I w końcu wybuchło. Ledwie uszliśmy z życiem.A teraz Chicago nie ma elektrowni.",
                "action": "Potrafisz uszkodzić urządzenie w takisposób, że do jego naprawy wymagany będzie Bardzotrudny test Mechaniki. Musisz poświęcić na tookoło kwadransu. Urządzenie nie może mieć zabezpieczeńnp. w postaci zwartego pancerza - musiszmieć dostęp do wnętrza. Sztuczka nie dotyczy bardzoprostych urządzeń.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_mechanics_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 13
                    }
                }]
            },
            {
                "name": "Nauczyciel",
                "reguirements": "dowolna Wiedza ogólna 4+",
                "description": "Jeśli coś potrafisz, i jeszcze tego nauczasz -masz parasol ochronny. Żaden wieśniak, na przykładten, któremu powiedziałeś, jak nastawić żoniewywichnięty bark, albo ten, któremu pomogłeś podłączyćradio bezpośrednio do kabla z prądem, niepozwoli ci zrobić krzywdy.",
                "action": "Bohater potrafi przekazywać wiedzęszybko i efektywnie. Może uczyć inne postacie swoichUmiejętności (kosztują wówczas 10% mniej w Punktach Doświadczenia). Poza tym Bohater jestjednym z najmilej widzianych gości w każdej osadzie.",
                req: [{
                    type: "anyGeneralKnowledge",
                    data: {
                        attr: "skill_general_knowledge#{number}>_input",
                        val: 4
                    }
                }]
            },
            {
                "name": "Niewrażliwość na lekkie rany",
                "requirements": "Odporność na ból 4+, Charakter 12+",
                "description": "A ja tylko czekałem, aż Johnemu wbiją tenbagnet w nogę - to jego ulubiona sztuczka. I stałosię, wbili mu to żelazo, głęboko, tak na dziesięć centów.„I co, boli?” - zapytali. A on na to jak zwykle:„Bardziej zaboli was” i połamał im ręce i nogi, ażtrzeszczało. Cały Johny. Lubi, jak mu ktoś coś gdzieśwbije... Czeka na to i dopiero potem robi chłopakomkrzywdę.",
                "action": "Po otrzymaniu Lekkiej rany lub Draśnięcia,Bohater nie musi wykonywać testu Odpornościna ból, tak jakby automatycznie zdał test.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_toughness_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 12
                    }
                }]
            }, {
                "name": "No strzelaj, złomie!",
                "requirements": "Rusznikarstwo 4+",
                "description": "Dotychczas uważałem, że walenie spluwą oleżący na ziemi kawał betonu nie służy broni najlepiej.No cóż, kilka tygodni w towarzystwie BrudnegoHarrego potrafi wywrócić człowiekowi światopogląd.On właśnie tak naprawiał gnata, jak mu się zaciął...",
                "action": "Przy wyniku rzutu na zablokowaniebroni w zakresie 1-10 broń zacina się na jedną turę.Bohater potrafi „przywrócić ją do życia” w ciągujednego segmentu.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_gunsmithing_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Nożownik",
                "requirements": "Zręczność 12+, Broń ręczna 5+",
                "description": "Facet zamachnął się na mnie nabitą gwoździamipałką, zrzedła mi mina, ale jakoś uskoczyłem,a maczuga wbiła się w ścianę i tam została. Jużsię miałem uśmiechnąć, ale nagle widzę, że sukinsynma szczęście - w postaci ciężkiego topora opartegoobok. O mało nie zlałem się w gacie. Na szczęściego nie uniósł. W końcu zobaczył nóż. Już się miałemuśmiechnąć, gdy nagle zobaczyłem uśmiech na jegotwarzy. Znalazł to, czego szukał.",
                "action": "Otrzymujesz bonus +1 do Broni ręcznej,jeśli walczysz nożem. Ponadto otrzymujesz dodatkowąakcję za 3 sukcesy. Akcja za 3 sukcesy:wykończenie. PT testu wyższe o poziom. Walczącywbija nóż w serce przeciwnika albo jednym szybkimcięciem rozcina jego gardło, zadając ranę Krytyczną.Ponadto, nie musisz wykonywać losowegorzutu, by sprawdzić, czy nóz trafił w cel ostrzem.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_handheld_weapon_input",
                        val: 5
                    }
                }]
            }, {
                "name": "Obezwładnienie",
                "requirements": "Bijatyka 2+",
                "description": "Powalasz gościa na ziemię, wykręcasz rękę,żeby się nie rzucał i pytasz, czy boli. Jeśli jęczy,znaczy się, że boli.",
                "action": "Akcja za 2 sukcesy. Powalasz przeciwnikai próbujesz unieruchomić. Jeśli wygraszPrzeciwstawny test Budowy, przeciwnik nie możesię ruszyć (może próbować się uwolnić w każdej następnejturze - za każdym razem ma trudniej o +30%).Jeśli przegrasz - uwolnił się i walczycie dalej. Możeszspróbować zadać ranę unieruchomionemu przeciwnikowi- po zadeklarowaniu tego, musisz wygraćPrzeciwstawny test Budowy.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 2
                    }
                }]
            }, {
                "name": "Odnajdywanie właściwej osoby",
                "requirements": "Spryt 12+, Charakter 12+",
                "description": "Mój kumpel, Sonny - on to potrafił. Wchodziłdo miasta, kierował się do knajpy i siadał przystoliku. Po pół godzinie mieliśmy sprzedany całytowar, bak pełen benzyny i pół bagażnika amunicjido AK. Sonny wiedział z kim załatwiać takie rzeczy.",
                "action": "Bohater zdaje Trudny test Sprytu, kręcisię trochę po osadzie i wie, kto pełni tutaj ważnefunkcje.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 12
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Odporność na pogodę",
                "requirements": "Znajomość terenu 4+",
                "description": "Ci goście nie mają kataru, grypy, ani sraczki.Mogą przez tydzień wędrować w ulewie, żrećowady i popijać stęchłą wodą... Śnieg, wichura, pioruny.A ci wędrują i wędrują. I mają się dobrze. Inic, do jasnej cholery, nic im nie jest! To mutanci,mówię ci!",
                "action": "W swoich testach Bohater nie uwzględniautrudnień za niesprzyjające warunki pogodowe.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_terrain_knowledge_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Odtrucie żarcia",
                "requirements": "Zdobywanie wody 6+",
                "description": "Na moich oczach podniósł z ziemi zdechłąjaszczurkę i uśmiechnął się Potem opalił ją na ogniu,wyciął kilka części, wrzucił ją do garnka i dosypałjakiegoś proszku, tak że woda aż zabulgotała. A potemzjadł tę gadzinę. I wiesz, ja to mam w dupie, jasię padliny nie chwycę, kto wie, na co zdechła, możeświerzb miała, albo co innego...",
                "action": "Bohater wykonuje Przeciętny lub Trudny(decyzja MG) test Zdobywania wody. Jeśli go zda,może odkazić również zatrute pożywienie.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_water_acquisition_input",
                        val: 6
                    }
                }]
            }, {
                "name": "Odwrócenie uwagi",
                "requirements": "Kradzież kieszonkowa 4+, Spryt 10+",
                "description": "W zasadzie nie jest to trudna sprawa, wystarczytrochę wprawy i pomysłów. Ot, udasz, że zostałeśpopchnięty, czy zaczepisz kogoś i o coś spytasz,możesz zrobić wiele fajnych numerów - bylefacet patrzył ci w oczy, albo gdzieś w horyzont, a nietam, gdzie trzymasz łapy.",
                "action": "Dodaje +30% utrudnienia do testu Czujnościofiary kradzieży.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_pickpocketing_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 10
                    }
                }]
            }, {
                "name": "Origami",
                "requirements": "Bijatyka 5+, Zręczność 12+",
                "description": "Facet się wkurzył i odszedł. Na dwa lata.Znalazł podobno jakiegoś starego mistrza judo. Dziadekgo uczył, uczył i oto skutki. Teraz chodzi z opaskąna czole.",
                "action": "Można stosować w walce bezpośredniej.Akcja za 1 sukces: pochwycenie. Używane przezwalczących bronie otrzymują modyfikator jak wzwarciu, a pochwycony dodatkowo otrzymuje karę-2 do Zręczności (dopóki nie przejmie Inicjatywy lubnie otrzyma rany). Ponadto umożliwia przeprowadzeniespecjalnych akcji w kolejnych segmentach.Akcja za 2 sukcesy: rzut. Przeciwnik wylatuje wgórę i uderza o ziemię. Otrzymuje Lekką ranę i niemoże przejąć Inicjatywy w kolejnym segmencie. Jeśliprzeciwnik został pochwycony wcześniej, wtedyakcja kosztuje tylko 1 sukces. Akcja za 3 sukcesy:wykończenie. Walczący zakłada dźwignię i unieruchamiaprzeciwnika, jeśli zechce może zadać ranęCiężką. Może także przydusić przeciwnika, aż tenstraci przytomność. Jeśli przeciwnik został pochwyconywcześniej, wtedy akcja kosztuje tylko 2 sukcesy.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 5
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            },
            {
                "name": "Ośmiornica",
                "reguirements": "Bijatyka 4+ lub Broń ręczna 4+, Kondycja 2+, Spryt 12+",
                "description": "Nie było na niego bata, machał bronią jakbymiał osiem rąk, a nie dwie. I wtedy zdałem sobiesprawę, że ręka mi słabnie i długo tak nie wytrzymam.Musiałem go skosić serią. Cholera, było mi szkodatych kul...",
                "action": "Decyzję należy podjąć na początkutury, przed rzutem 3k20. Walczący otrzymuje wdanej turze karę -2 do Zręczności w obronie, ale zato nawet mimo braku Inicjatywy może zastosowaćw walce manewr Zwiększone tempo.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_brawl_input",
                                    val: 4
                                },
                                {
                                    attr: "skill_handheld_weapon_input",
                                    val: 4
                                }
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_endurance_input",
                            val: 2
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_int_main",
                            val: 12
                        }
                    },
                ]
            },
            {
                "name": "Otwieranie zamków elektronicznych",
                "requirements": "Elektronika 2+, Otwieranie zamków 2+",
                "description": "Jak myślisz, kto się lepiej zna na sztuce,artysta czy historyk sztuki? Dobra, a kto szybciejotworzy elektroniczny zamek: elektronik czy złodziej?Ty nie musisz się tym przejmować, na szczęściejesteś i jednym, i drugim.",
                "action": "Podczas otwierania zamków elektronicznychmożesz w teście dodać do swojej ElektronikiOtwieranie zamków.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_electronics_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_lockpicking_input",
                        val: 2
                    }
                }]
            }, {
                "name": "Padnij/powstań",
                "requirements": "Zręczność 12+, Budowa 12+",
                "description": "Jeśli jesteś z Hegemoni i nie potrafisz tegood urodzenia, to wstyd. Goście ćwiczą i ćwiczą, a jakdojdzie co do czego, to masz wrażenie, jakby skubaniecleżał na trampolinie. Więc jeżeli wybrałeś Pochodzenie„Hegemonia” - lepiej wykup tę Sztuczkę,inaczej ludzie będą się z ciebie śmiali.",
                "action": "Pad na ziemię nie zajmuje segmentu,a zerwanie się z ziemi na równe nogi zajmuje tylkojeden segment.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Pająk",
                "requirements": "Zręczność 14+, Wspinaczka 8+",
                "description": "Uczył się wspinać od dziecka. Był coraz lepszy,potem jeszcze lepszy. Uczył się tego i uczył, aż wkońcu się nauczył.",
                "action": "Bohater nie musi już wykonywać testówWspinaczki. Jeśli tylko MG uzna, że możliwejest wspięcie się na daną ścianę, Pająk wspina siętam bez problemu.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 14
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_climbing_input",
                        val: 8
                    }
                }]
            }, {
                "name": "Pakowanie",
                "requirements": "Spryt 10+, tylko kobieta",
                "description": "Co mówisz kochanie? Co? „Cukier jest włazience, w apteczce, w małym pudełku z napisem>kakao<”?! A gdzie jest bandaż? Co? Włożyłaś bandażedo bidonu?!”.",
                "action": "Bohaterka posiadająca tę Umiejętnośćpotrafi spakować plecak tak, że może z niego wyjąćdowolną rzecz w trzy tury. Dla samca ten rekordjest nie do pobicia.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 10
                    }
                }]
            }, {
                "name": "Pan plaster",
                "requirements": "Pierwsza pomoc 4+, Spryt 14+",
                "description": "Ten sanitariusz, co to kulom się nie kłaniał,miał jeszcze jedną ciekawą umiejętność. Za pomocąnajprostszych środków potrafił leczyć najpoważniejszeobrażenia. Tu plaster, tam plaster i po trepanacjiani śladu.",
                "action": "Bohater może używać połowy wartościUmiejętności Pierwsza pomoc, jakby właśnie tylepunktów miał w Umiejętności Leczenie ran.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_first_aid_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 14
                    }
                }]
            },
            {
                "name": "Pewna ręka",
                "reguirements": "Pistolety 3+ lub Karabiny 3+, Charakter 12+, Zręczność 12+",
                "description": "Amator bierze do ręki spluwę i wali gdziepopadnie. Gdyby się sobie przyjrzał, odkryłby, że rękamu lata jak szmata na wietrze. Zawodowiec ma pewnąrękę i strzały częściej sięgają celu. Ale prawdziwimistrzowie stają się jednością z pistoletem. Wiesz,pistolet jest przedłużeniem oczu. Znaczy się ręki.Jakoś tak.",
                "action": "Gdy poświęcasz segment na celowanie,oprócz dodatkowej kostki do testu strzału, zyskujeszułatwienie do testu. Test staje się łatwiejszy o-30%.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_pistols_input",
                                    val: 3
                                },
                                {
                                    attr: "skill_rifles_input",
                                    val: 3
                                }
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_cha_main",
                            val: 12
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_ag_main",
                            val: 12
                        }
                    },
                ]
            },
            {
                "name": "Pierwotny instynkt",
                "requirements": "Zręczność 12+, Czujność 2+, Bijatyka 3+",
                "description": "Pewnego razu zaczailiśmy się w ruinach naparu gangerów. Rozdzieliliśmy się i zachodzimy ichod różnych stron. Nagle widzę, a tu Johny z jednejstrony murku, a Devil z drugiej. Murek się kończy ita dwójka naszych wpada na siebie. W tej samejchwili Devil leży i trzyma się za krwawiący nos. BoJohny ma swoją świętą zasadę: najpierw bije, a potemsprawdza, kogo.",
                "action": "Bez względu na sytuację, w teście Inicjatywyzawsze testujesz Zręczność, nawet gdy innimuszą testować Percepcję.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_alertness_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 3
                    }
                }]
            }, {
                "name": "Pitbull",
                "requirements": "Czujność 3+, Percepcja 13+, Zręczność 13+",
                "description": "Wracaliśmy kiedyś w czwórkę z wielkiegofestynu przyjaźni z mutantami w Saint Louis. Nieźlesię ubawiliśmy. Pech chciał, że w krzakach przyczaiłasię banda Teksańczyków, którym festyn nieprzypadł do gustu. Wyskoczyli nagle z krzaków ijedynym z nas, który nie oberwał, był Jojo. Potemwyrzucaliśmy mu: Jojo, czemu nas nie ostrzegłeś,czemu nie ostrzegłeś?",
                "action": "Nie można cię zaskoczyć żadną zasadzką.Nie znaczy to, że wypatrujesz zagrożenie wcześniej,po prostu jesteś zawsze gotowy do walki i reagujesznatychmiast. Nie tracisz segmentów z powoduzasadzki i w normalny sposób testujesz Inicjatywę.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_alertness_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 13
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 13
                    }
                }]
            }, {
                "name": "Plug&Play",
                "requirements": "Komputery 2+, Wozy bojowe 2+ lub Maszyny ciężkie 2+",
                "description": "Tylko raz widziałem takie cudo. Spec podłączyłswój komputer do panelu fabryki, nacisnął czerwonyguzik i wszystkie syreny zaczęły wygrywaćHappy Birthday. To były moje urodziny. Wzruszyłemsię.",
                "action": "Bohater potrafi podłączyć komputerdo ciężkiej maszynerii. Umiejętność Komputery stajesię Umiejętnością wspomagającą dla Wozów bojowychi Maszyn ciężkich.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_military_vehicles_input",
                                    val: 2
                                },
                                {
                                    attr: "skill_heavy_machinery_input",
                                    val: 2
                                }
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "skill_computers_input",
                            val: 2
                        }
                    },
                ]
            },
            {
                "name": "Po schodach",
                "requirements": "Prowadzenie motocykla 3+, Zręczność 12+",
                "description": "Puszczasz sprzęgło i w drogę. Ja tak częstojeżdżę, a bo to mało razy winda się spieprzyła? Miałemna nogach wchodzić?! Na piąte piętro?!",
                "action": "Bohater nie otrzymuje utrudnień doprowadzenia motocykla podczas jazdy wewnątrz budynków(po korytarzach, czy schodach).",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_motorcycle_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            },
            {
                "name": "Podrasowanie",
                "reguirements": "Mechanika 6+ lub Elektronika 6+, Spryt 12+",
                "description": "I wziął go bracie, podkręcił tak, że wyciągaliśmysetkę w 6 sekund. Inna sprawa, że po tygodniuchłodnica spłonęła...",
                "action": "Bohater może zwiększyć wydajność dowolnegourządzenia od 50% do 200%, zależnie od sytuacji.Urządzenie ma dużą szansę na poważną awarięw trakcje pracy - decyduje MG.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_mechanics_input",
                                    val: 6
                                },
                                {
                                    attr: "skill_electronics_input",
                                    val: 6
                                }
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_int_main",
                            val: 12
                        }
                    },
                ]
            },
            {
                "name": "Położenie motocykla",
                "requirements": "Prowadzenie motocykla 6+, Zręczność 12+",
                "description": "Pierwszy raz w życiu widziałem coś takiego.Facet wjechał na motorze pod pędzącą ciężarówkę,wyjechał z drugiej strony i po trzech minutach ciężarówkawybuchła...",
                "action": "Bohater w pełnej szybkości kładzie motor,przejeżdża nisko pod przeszkodą, a po jej minięciustawia motor i jedzie dalej.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_motorcycle_input",
                        val: 6
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            },
            {
                "name": "Prowizorka",
                "reguirements": "Mechanika 3+ lub Elektronika 3+",
                "description": "Facet wziął śrubokręt, kawałek drutu i zapalniczkę.Chwilę potem odlecieliśmy w siną dal.Zrobił z tego helikopter. No poważnie!",
                "action": "Mając do dyspozycji kilka narzędzi ikawałek drutu, jesteś w stanie uruchomić urządzeniew czasie dziesięciokrotnie krótszym, niż to normalniewymagane, nawet jeśli nie masz „niezbędnych”do tego elementów i narzędzi. Urządzenie działaprzez kilka minut, czasem kilka godzin, zależnie odstopnia uszkodzeń (decyzja MG).",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_mechanics_input",
                                    val: 3
                                },
                                {
                                    attr: "skill_electronics_input",
                                    val: 3
                                }
                            ]
                        }
                    },
                ]
            },
            {
                "name": "Rappeling",
                "requirements": "Wspinaczka 3+",
                "description": "Kumpel wyrzucił linę za okno i krzyczy:„spierdalamy”, zjeżdża po niej. No i skoczyłem zanim. Jak byłem w połowie drogi, to już wiedziałem,że nie jest to takie proste, jak myślałem. Przytomnośćstraciłem przy lądowaniu. Od tej pory do linpodchodzę raczej ostrożnie.",
                "action": "Bohater potrafi zjeżdżać po linie - jestto prędkość niewiele wolniejsza, niż gdyby zeskoczył.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_climbing_input",
                        val: 3
                    }
                }]
            }, {
                "name": "Rodeo",
                "requirements": "Ujeżdżanie 5+, Jazda konna 3+",
                "description": "Ha ha! Wypakowałeś tę idiotyczną Umiejętnośćna 5+? No to odbierz prezent! Sztuczka do wykupienia,a mikser gratis. Niech ci MG kupi.",
                "action": "Jeśli MG stwierdzi, że dane stworzenieda się ujeździć za pomocą testu najwyżej Bardzotrudnego (po zastosowaniu Suwaka!), to znaczy, żety nie musisz testować w ogóle! Wsiadasz i jedziesz,stary, jak samochodem.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_dressage_input",
                        val: 5
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_horseback_riding_input",
                        val: 3
                    }
                }]
            }, {
                "name": "Rozróba",
                "requirements": "Bijatyka 6+, Budowa 12+, Zręczność 12+",
                "description": "Facet miał ksywę Niedźwiedź, i wiesz, dopiero,jak go chcieliśmy związać, to załapałem, wczym rzecz...",
                "action": "Walcząc z wieloma przeciwnikami, Bohatermoże wykonać darmowy atak przeciwko każdemuze swoich pozostałych przeciwników, względemktórych posiada Inicjatywę. Każdy dodatkowyatak wykonuje rzutem 1k20 i może zadać co najwyżejcios za 1 sukces. Przeciwnicy bronią się normalnieza pomocą swoich 3k20.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 6
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Rrrroooaaarrr",
                "requirements": "Bijatyka 3+, Charakter 16+",
                "description": "Kiedyś słyszałem o czymś takim jak okrzykbojowy, ale dopiero gdy spotkałem Jackiego, załapałemw czym rzecz. Gdy na mnie wrzasnął, po prostusię przewróciłem. Podobno sekretem jest czosnek.",
                "action": "Jeśli walczący przeprowadza manewryFuria lub Szarża, wykonuje okrzyk bojowy i przeciwnikjest zmuszony do testu Morale, tak jak wprzypadku zasady Najpierw spójrz mi w oczy. Sztuczkimożna użyć tylko raz przeciwko temu samemuprzeciwnikowi. W walce z wieloma przeciwnikamidziała na maksimum 5-ciu przeciwników.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 16
                    }
                }]
            }, {
                "name": "Ruchome gniazdo CKM",
                "requirements": "Budowa 16+, Broń maszynowa 6+",
                "description": "Mówili na niego Pan Bunkier, czasem PanImadło. Jak się zaparł nogami, to nic go nie mogłoruszyć, a jak chwycił CKM, wycelował i nacisnąłspust, to broń prawie nie podskakiwała. Wszystkiekulki leciały równiutko, jak po sznurku, prosto wcel. Potem dopiero okazało się, że facet był pieprzonymmutantem...",
                "action": "Jeśli Bohater trafia serią w cel, możewpakować w niego dwa razy więcej kul niż wynikaz normalnych reguł broni maszynowej. Inaczej mówiąc,wynik testu pogarsza się o 1 nie co 1 kulę,tylko co 2.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 16
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_machine_guns_input",
                        val: 6
                    }
                }]
            },
            {
                "name": "Ruchomy cel",
                "reguirements": "Pistolety 4+ lub Karabiny 4+ lub Broń maszynowa 4+, Spryt 12+, Percepcja 10+",
                "description": "Widziałem kiedyś w akcji Stalową Policję, jak wykańczali akurat jakichś łachmytów niedaleko Jackson. Goście spieprzali ile sił w nogach, klucząci skacząc na boki. Oficer SP mruknął: „Chłopcy,ruchomy cel”. Każdy z tych psycholi oddał tylko jeden strzał. I żaden bandzior już nie uciekał.",
                "action": "Nie otrzymujesz kary do testu strzelania wynikającej z poruszania się celu.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_pistols_input",
                                    val: 4
                                },
                                {
                                    attr: "skill_rifles_input",
                                    val: 4
                                },
                                {
                                    attr: "skill_machine_guns_input",
                                    val: 4
                                }
                            ]
                        }
                    }, {
                        type: "min",
                        data: {
                            attr: "parameters_insert_int_main",
                            val: 12
                        }
                    }, {
                        type: "min",
                        data: {
                            attr: "parameters_insert_pr_main",
                            val: 10
                        }
                    }
                ]
            },
            {
                "name": "Rzut oka",
                "reguirements": "Mechanika 4+ lub Elektronika 4+, Spryt 10+",
                "description": "A gość spogląda na mnie i śmiertelnie poważnymgłosem mówi „Zesrało się”. A ja, wiesz, jakgdyby nigdy nic, mówię do niego: „Widzisz, kolego.Widzę, że się zesrało. Ale proszę, powiedz mi, co dokładniesię zesrało.” A facet spogląda na mnie i tym samym, śmiertelnie poważnym głosem mówi: „Hydrostabilizator.”",
                "action": "W ciągu kilku sekund jesteś w stanie(w sposób przybliżony) określić przeznaczenie i sposóbdziałania dowolnego urządzenia technicznego.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_mechanics_input",
                                    val: 4
                                },
                                {
                                    attr: "skill_electronics_input",
                                    val: 4
                                },
                            ]
                        }
                    },
                    {
                        type: "min",
                        data: {
                            attr: "parameters_insert_int_main",
                            val: 10
                        }
                    },
                ]
            },
            {
                "name": "Sama se skocz po piwo",
                "requirements": "Niezłomność 8+, Charakter 12+",
                "description": "Znasz legendę o Jeźdźcu bez głowy? A słyszałeśbajkę o Teksańczyku, który miał alergię nakonie? Jestem w stanie uwierzyć we wszystko, alenie w to, że istnieje ktoś posiadający tę Sztuczkę.",
                "action": "Bohater jest odporny na Sztuczkę Hej,przystojniaku!",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_resolve_input",
                        val: 8
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Samuraj",
                "requirements": "Zręczność 10+, Broń ręczna 3+",
                "description": "Na pojedynek z tym sukinsynem wybrałemstarą elektrownię, czyli że tak powiem „mojemiejsce”. Zebrało się sporo gapiów. Wiedziałem, żenie mam szans. Gnojek przytaszczył tę swoją katanę,ja wziąłem drewniany młot. Rozbrzmiał gong.Wtedy Pablo, mój kumpel elektronik, włączył elektromagnes,pod którym staliśmy. Na szczęście zadziałał.",
                "action": "Otrzymujesz bonus +1 do Broni ręcznej,jeśli walczysz mieczem lub pałką. Ponadto, jeślinosisz katanę, rapier lub inną lekką broń chowanąw pochwie, dobycie jej zajmuje ci tylko 1 segment.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 10
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_handheld_weapon_input",
                        val: 3
                    }
                }]
            }, {
                "name": "Sherlock Holmes",
                "requirements": "Tropienie 6+",
                "description": "Ledwo widoczny ślad w piasku? „Elementarne,Wattsonie - to był biały mężczyzna, wzrostkoło 184cm, waga 80kg, lekko utykający na prawąnogę. Niósł coś w ręce - teczkę, albo torbę. „.",
                "action": "Z tą Sztuczką tropiciel analizującynawet bardzo niewyraźne ślady może uzyskać informacjeo tym, co stało się w danym miejscu - musizdać Trudny (po zastosowaniu Suwaka!) test Tropienia.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_tracking_input",
                        val: 6
                    }
                }]
            }, {
                "name": "Siekierezada",
                "requirements": "Budowa 13+, Rzucanie 4+",
                "description": "Każdy potrafi rzucać siekierą. Bierzesz, rzucasz- no i leci. A ja cię teraz nauczę, jak nią rzucić,żeby ta cholera się wbiła. I to nie byle jak. Ma rozpołowićpieniek. No popatrz...",
                "action": "Potrafisz rzucać siekierą tak, że trafieniezadaje Ciężką ranę.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 13
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_throwing_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Siup dup",
                "requirements": "Zręczność 14+, Bijatyka 4+",
                "description": "Siup, dup i nagle czujesz ból, a potem widzisz,że twoją spluwę trzyma ten, co właśnie zrobiłsiup, dup. Nie wiem co dokładnie oznacza „siup, dup”.Goście od sztuk walki robią to tak szybko, że nic niewidać. Tylko „siup, dup” i gotowe.",
                "action": "Akcja za 3 sukcesy, PT testu o poziomwyższy, tylko do walki gołymi rękami. Rozbrajaszprzeciwnika i przejmujesz jego broń.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 14
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Skład amunicji",
                "requirements": "Proca 2+, Percepcja 10+",
                "description": "Siedzieliśmy w okopie. Tamci też mieli jakąśosłonę. Można było sądzić, że będziemy tak siedzielimiesiąc i straszyli się nawzajem. Każdy oszczędzałamunicję, bo nie było sensu strzelać na oślep. TylkoŚlepy Bizon walił z tej swojej procy raz za razem.„Dużo masz tych pocisków?” - pytam, a on rozejrzałsię wzdłuż okopu i odpowiedział: „Ze 30 tysięcy, aco?”",
                "action": "Bohater potrafi natychmiast znaleźćpociski do procy - jeśli jest na otwartym terenie i oile MG uzna to za możliwe.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_sling_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 10
                    }
                }]
            }, {
                "name": "Skok",
                "requirements": "Motocykl 4+, Charakter 14+",
                "description": "Oczywiście, że trzeba mieć spore umiejętności,by skakać na motorze z dachu na dach, ale powiemci, jak dla mnie to przede wszystkim trzebamieć stalowe jaja. Rozpędzić motocykl i zamknąćoczy potrafi każdy. Niestety, to zdecydowanie zamało...",
                "action": "Jadąc na motorze, Bohater może beztestu przeskoczyć przez dziurę, rozpadlinę, przepaść,lub z jednego budynku na drugi, na odległość do 8metrów. Musi jednak mieć miejsce na rozbieg - dwukrotniewięcej niż ma wynieść długość skoku.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_motorcycle_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 14
                    }
                }]
            }, {
                "name": "Słuch absolutny",
                "requirements": "Nasłuchiwanie 4+",
                "description": "Granie ze słuchu, bezbłędne rozpoznawanieludzkich głosów, taki był nasz Ron. Myślałem, że wdupę sobie można wcisnąć takie Sztuczki, aż tu razsiedzieliśmy za rogiem i słyszeliśmy, jak gość otwierazamek kodowy i wchodzi do środka. Ron podszedłdo zamka i kurwa, zagwizdał ten sam kod. I weszliśmy.",
                "action": "Można zakupić tę sztuczkę tylko podczastworzenia postaci. Bohater musi zdać BardzoTrudny test Nasłuchiwania i jest w stanie powtórzyćdowolną melodię, rozmowę lub dźwięk usłyszany,nie dłuższy niż trzy minuty.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_listening_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Snajper",
                "requirements": "Karabiny 6+, Percepcja 14+",
                "description": "Dwadzieścia minut mierzenia, jedna sekundana strzał, i cała wieczność w trumnie dla tegogościa, którego miałeś na celowniku.",
                "action": "Celownik optyczny zmniejsza trudnośćtrafienia celu o -80% zamiast standardowego -40%,ale tylko w przypadku snajperki.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_rifles_input",
                        val: 6
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 14
                    }
                }]
            }, {
                "name": "Spać na wodzie",
                "requirements": "Pływanie 5+",
                "description": "Kiedyś miałem zakład z kumplem. Twierdził,że nie potrafi utonąć. No to ja mu mówię - masztę butlę i leż na wodzie. Położył się. Przywiązałemmu kamol do nogi, trochę go ściągnęło, ale wciąż byłna powierzchni. Związałem mu ręce, żeby nie machał,a on pływa jak cholerny pniak. W końcu sięwściekłem i polazłem po coś cięższego. Jak wróciłemto spał. Normalnie zasnął na wodzie, dasz wiarę?!109sztuczki",
                "action": "Na spokojnej wodzie Bohater utrzymujesię bez wysiłku przez wiele godzin.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_swimming_input",
                        val: 5
                    }
                }]
            }, {
                "name": "Strzelec kieszonkowy",
                "requirements": "Pistolety 2+, Spryt 10+, Percepcja 10+",
                "description": "Marcus jest pacyfistą, to znaczy, że nigdynie wyciąga na nikogo broni. Naprawdę nigdy. A jakjuż musi kogoś wykończyć, to ostateczność. Bardzonie lubi używać tej swojej Sztuczki, bo za każdymrazem musi potem cerować kieszeń w płaszczu. Aledzięki temu nadal jest pacyfistą.",
                "action": "Nie otrzymujesz dodatkowych utrudnieńza strzał z kieszeni (broń schowana w kieszeni)lub z biodra. Sztuczka odnosi się tylko do pistoletówi rewolwerów.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_pistols_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 10
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 10
                    }
                }]
            },
            {
                "name": "Szachista",
                "reguirements": "Bijatyka 4+ lub Broń ręczna 4+",
                "description": "Słyszałeś o Szachiście? No to ci powiem, żeto taki facet, którego się nie da trafić, chyba że zpistoletu. Będzie biegał i unikał tak długo, aż ci sięodechce walki. A wtedy on zaproponuje ci partyjkęszachów na rozstrzygnięcie sporu.",
                "action": "Decyzję należy podjąć na początkutury, przed rzutem 3k20 lub przed testem Inicjatywy.Walczący oddaje Inicjatywę, ale za to otrzymujebonus +3 do Zręczności w obronie, do czasu, aż samnie przejmie Inicjatywy. Sztuczka może niejednemuuratować tyłek, gdy stwierdzi, że w tej walce niema szans i lepiej poczekać na kolegów.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_brawl_input",
                                    val: 4
                                },
                                {
                                    attr: "skill_handheld_weapon_input",
                                    val: 4
                                },
                            ]
                        }
                    },
                ]
            },
            {
                "name": "Szósty zmysł",
                "requirements": "Czujność 7+, Percepcja 14+",
                "description": "Oto sztuka medytacji według starej indiańskiejszkoły Sun Tsu, czy jakoś tak. Ja to robię odlat. Na początku zauważysz, że jesteś czujniejszy.Ten etap Indianie nazywali etapem pumy. Potemzwiększy się twoja szybkość. To etap kobry. Na końcustaniesz się prawdziwym magikiem. To etap systemuwczesnego ostrzegania, czy jakoś tak.",
                "action": "Raz na dzień możesz uskoczyć przedzagrożeniem, zanim to się pojawi (cios z zaskoczenia,kula snajpera, spadający głaz, mina itd.). Działato tak, jakbyś na ten moment uzyskał kosmicznyrefleks z odrobiną jasnowidztwa. Przesuwasz się ometr - inaczej mówiąc, nie uciekniesz przed lawiną,jeśli musiałbyś w tym celu przebiec 100 metrów wsekundę. O użyciu Sztuczki musisz zdecydować przedewentualnym testem uniku. W walce Sztuczka zadziałajak automatyczny unik przeciwko jednej akcjiprzeciwnika (lecz musisz poświęcić na to tyle samosegmentów, co przeciwnik).",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_alertness_input",
                        val: 7
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 14
                    }
                }]
            }, {
                "name": "Sztuczki karciane",
                "requirements": "Zwinne dłonie 8+, Spryt 12+",
                "description": "W większość gier karcianych chodzi o to, bymieć dobre karty na ręce. Więc jak masz sprawnełapki i wiesz choć w przybliżeniu, które karty to„dobre karty”, to zwycięstwo masz w kieszeni. Mamrację, prawda? No więc... Sam zobacz - co napisanejest w opisie działania tej Sztuczki!",
                "action": "Bohater wygrywa każdą grę karcianą,pod warunkiem, że nie gra z osobą, która posiada tęSztuczkę.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_agile_hands_input",
                        val: 8
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Sztuka jest sztuka",
                "requirements": "Rusznikarstwo 2+",
                "description": "Jak mawia stare przysłowie, jeśli ma lufę icyngiel, to znaczy się, że strzela. Ot, cokolwiek znajdziesz,bez względu na to, czy to strzelba z czasównapoleońskich, czy z okresu wojny w Wietnamie,bez względu na to, czy jest zapiaszczona, czy zapaćkanajakimś szambem - doprowadzisz ją do użyteczności.",
                "action": "Bohater poświęca kilka godzin, by oczyścići doprowadzić do stanu używalności dowolnązabrudzoną, pordzewiałą czy zaciętą broń palną.Sztuczka pozwala na naprawienie broni uszkodzonejw skutek fatalnego zacięcia się.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_gunsmithing_input",
                        val: 2
                    }
                }]
            }, {
                "name": "Szybki Bill",
                "requirements": "Zręczność 14+",
                "description": "Mam kumpla w Detroit, mówimy na niegosuseł, wiesz czemu? Bo jak przychodzi do strzelaniny,to gość sadzi takie susy...",
                "action": "W jednym segmencie możesz pokonaćdwa razy większy dystans niż normalnie.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 14
                    }
                }]
            }, {
                "name": "Szybki rzut",
                "requirements": "Rzucanie 4+, Zręczność 12+",
                "description": "Jest taka scena w filmie Desperado, jak będzieszkiedyś w Vegas, wpadnij tam sobie do kina,często puszczają ten film. Tam gość nożami wykończyłcoś z ośmiu chłopa, mimo że mieli broń maszynową.Dasz wiarę? Był szybszy od nich...",
                "action": "Rzut zajmuje tylko jeden segment.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_throwing_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Szybkie strzelanie",
                "requirements": "Łuk 4+, Budowa 12+",
                "description": "„Łuk maszynowy” - taką karteczkę raz przywiązaliśmyjednemu czerwonoskóremu na południuTeksasu. Facet uśmiechnął się, i nawet jej nie zerwał,widać połechtaliśmy jego próżność. No ale trzebaprzyznać, nie wzięliśmy tej karteczki z księżyca.Gość strzelał z tego łuku, jakby miał podajnik strzałna taśmie... Wieczorem zrobił nam pokaz, niewiarygodnywidok.",
                "action": "Dobycie strzały zajmuje Bohaterowi 1segment, strzał kolejny 1 segment, dobycie 1 segmentitd.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_bow_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Śrutobranie",
                "requirements": "Karabiny 4+",
                "description": "Mutki siedziały ukryte w bunkrze. Chciałemwrzucić im granat, ale Franz ściągnął z ramieniaśrutówkę i wycedził: „No to mutasy, czas na śrutobranie.Bierzcie koszyki” I jak zaczął do nich walić,to aż się duszno zrobiło. No nie powiem, śrutobraniesię udało, każdy z mutków zebrał coś po pół kilo,choć nie do koszyczka, lecz w korpus. Ale to detal.",
                "action": "Przeładowanie śrutówki i strzał zajmująrazem tylko 1 segment, lecz Bohater otrzymuje+30% utrudnienia do testów trafienia.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_rifles_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Taran",
                "requirements": "Broń ręczna 4+, Budowa 14+",
                "description": "Każdy głupi wie, że jak ktoś się na ciebieporządnie zamachnie, to lepiej się zawczasu odsunąć.Gorzej, gdy cwaniak robi to tak, że nawet niezauważysz. Spokojnie się zasłaniasz, a tu nagle „dup!”- i ręka ci drętwieje od ciosu.",
                "action": "Decyzję należy podjąć na początkutury, przed rzutem 3k20. Dotyczy cięższych i dłuższychbroni, jak pałki, młoty, miecze, łańcuchy itp.Walczący otrzymuje karę -4 do Zręczności, lecz zadaneobrażenia są o poziom większe.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_handheld_weapon_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 14
                    }
                }]
            },
            {
                "name": "Taranowanie",
                "reguirements": "Ciężarówka 3+ lub Samochód 3+",
                "description": "Jak mi moja bryka odmówiła posłuszeństwa,to załapałem się na autostop - podwoził mnie gość wtakiej całkiem niemałej ciężarówce. Wóz mi się bardzopodobał, nawet mu mówiłem: „No kurcze, superbryka, radio, ogrzewanie, wszystko widać z góry, tulodóweczka, tam miejsce na nocleg. Szefie, masz pantu jak w raju! Lubisz ten komfort, co?!” Wiesz co miodpowiedział? „Ja to jednak najbardziej sobie ceniętaranowanie gangerów”",
                "action": "Kierowca nie otrzymuje utrudnień dotestów Prowadzenia pojazdu podczas taranowaniainnej maszyny.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_truck_input",
                                    val: 3
                                },
                                {
                                    attr: "skill_car_input",
                                    val: 3
                                },
                            ]
                        }
                    },
                ]
            },
            {
                "name": "Targowanie się",
                "requirements": "Niezłomność 7+, Perswazja 4+",
                "description": "Moja największa wtopa? Poszedłem na bazarw Salt Lake i nieopatrznie wdałem się w rozmowęz jakimś handlarzem. Po godzinie wymieniłemnowiutki kevlar na medalik ze świętym Antonim.",
                "action": "Podczas testów handlu przeciwnik zdajeo poziom wyższe testy Niezłomności.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_resolve_input",
                        val: 7
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_persuasion_input",
                        val: 4
                    }
                }]
            }, {
                "name": "To się robi tak",
                "requirements": "Zdolności przywódcze 3+",
                "description": "Gadał, gadał, nawet ciekawie, i jakoś tak przysłuchiwałemsię... Minutę potem zacząłem murowaćz chłopakami jakąś ścianę. A jak już ściana stanęła,facet mówi, że taki samotny ten mur. No to dorobiliśmyjeszcze trzy ściany. Bez dachu głupio wyglądało,więc gość powiedział nam jak dorobić dach.",
                "action": "Po udanym teście Zdolności przywódczych,Bohater może pokierować niewykwalifikowanymipracownikami. Na czas jednego zadania, uzyskująoni na poziomie 1 znaną Bohaterowi Umiejętność,opartą o Spryt, którą posiada na poziomie 3+.Niby niewiele, ale likwiduje negatywny efekt Suwaka.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_leadership_input",
                        val: 3
                    }
                }]
            }, {
                "name": "W mgnieniu oka",
                "requirements": "Percepcja 12+, Wypatrywanie 4+",
                "description": "Kiedy wychylasz się zza osłony to nie zgrywajturysty i nie rozglądaj się za przeciwnikiem,tylko rzuć okiem, a potem strzelaj. Taką radę usłyszałemwiele lat temu. I od tej pory tak właśnie załatwiam„turystów”, którzy wychylają łeb i rozglądająsię...",
                "action": "Nie tracisz segmentu, by po wychyleniusię zza zasłony dostrzec wroga.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 12
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_spotting_input",
                        val: 4
                    }
                }]
            }, {
                "name": "Walka dwiema broniami",
                "requirements": "Broń ręczna 5+, Zręczność 12+",
                "description": "W zasadzie tylko raz w życiu widziałem kolesia,który machał dwiema broniami i sobie tymwcale nie przeszkadzał.",
                "action": "Normalne zasady nie dają żadnych bonusówza walkę dwiema broniami (może poza wyborem,czym w danym segmencie przywalić). Z tobąjest inaczej. Gdy walczysz dwiema broniami, możeszużyć dodatkowo połowę punktów Umiejętności walkitą drugą bronią.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_handheld_weapon_input",
                        val: 5
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Wiatrak",
                "requirements": "Bijatyka 2+, Charakter 12+",
                "description": "Jeśli nie potrafisz walczyć, to zdradzę cidobrą metodę: schowaj głowę i zasyp frajera pięściamiod góry, coś z tego wyłapie, czegoś nie wyłapie,ale na mur się cofnie. Jeśli umiesz walczyć, tonadal jest to dobra metoda.111sztuczki",
                "action": "Decyzję należy podjąć na początkutury, przed rzutem 3k20. Jeśli walczący przeprowadzamanewr Furia, bez względu na wynik walki niemoże stracić w danej turze Inicjatywy (jeśli przeciwnikuzyska Inicjatywę, kara wynikająca z Furiidziała - czyli walczący otrzymuje celny cios, jednakjuż w następnym segmencie walczący automatycznieodzyskuje Inicjatywę). Na koniec tury walczącyotrzymuje karę +20% ze zmęczenia. Sztuczka odnosisię tylko do Bijatyki.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Wilk morski",
                "requirements": "brak",
                "description": "Wujek Domowa Robótka tak mnie związał,że posiniałem. Myślę sobie - „albo mnie rozwiąże, albowezwę pomoc”. A on mówi: „Patrz ćwoku!”. Pociągnąłza sznur i byłem wolny. Magik, psiakrew.",
                "action": "Bohater potrafi wiązać całą masę dziwnychwęzłów, które rozwiązać może tylko osoba z tąsamą Sztuczką.",
                req: []
            }, {
                "name": "Właściwa twarz",
                "requirements": "Blef 3+, Percepcja 10+, Charakter 10+",
                "description": "Czasem trzeba się uśmiechnąć, innym razempokazać zdecydowanie i determinację. Skądwiadomo, jak się zachować w danej sytuacji? Niewiem, czy można się tego nauczyć. To chyba dar.",
                "action": "Odejmujesz jedno oczko na dowolnej zkości podczas wszystkich testów Charakteru.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_bluff_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 10
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 10
                    }
                }]
            },
            {
                "name": "Wracający bumerang",
                "reguirements": "Bumerang 4+, Zręczność 12+",
                "description": "Kupiłem kiedyś bumerang. To było oszustwostulecia. Od trzech lat szukam tego gościa, który mito wcisnął i w końcu gdzieś go spotkam. Najpierwhandlarz rzucał bumerangiem, pokazywał, jakie tosprytne, jak wraca, gdy się rzuci... Kupiłem urządzenieza furę fajek, facet się szybko zwinął, a jazostałem z tym cholerstwem. Głupi kij. Nigdy do mnienie wrócił. Rzucałem nim ze sto razy - leciał w krzakii nic. W końcu wywaliłem ten bumerang w jakiśkanion. Mam nadzieję, że się chociaż połamał.",
                "action": "Bohater potrafi tak rzucać bumerangiem,że ten wraca po trafieniu w cel i można gozłapać.",
                req: [{
                    type: "minOther",
                    data: {
                        name: "Bumerang",
                        val: 4,
                        ability: ag
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                },
                ]
            },
            {
                "name": "Wyczekanie",
                "reguirements": "Bijatyka 6+ lub Broń ręczna 6+, Percepcja 12+",
                "description": "Pieprzony samuraj. Spokojnie czekał, aż doniego podbiegnę i przywalę mu łomem. W ostatniejchwili odsunął się, uniknął jeszcze dwa razy i naglezaładował mi na spamiętanie z kastetu prosto wnos. Dziś jesteśmy kumplami.",
                "action": "Decyzję należy podjąć na początku tury(gdy walczący nie posiada Inicjatywy), przed rzutem3k20. Walczący otrzymuje w danej turze karę -2 do Zręczności w obronie, ale jeśli uda mu się przejąćInicjatywę, to do końca tej tury otrzymuje bonus+4 do Zręczności w ataku.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_brawl_input",
                                    val: 6
                                },
                                {
                                    attr: "skill_handheld_weapon_input",
                                    val: 6
                                },
                            ]
                        }
                    }, {
                        type: "min",
                        data: {
                            attr: "parameters_insert_pr_main",
                            val: 12
                        }
                    },
                ]
            },
            {
                "name": "Wyczucie emocji zwierząt",
                "requirements": "Postrzeganie emocji 2+, Opieka nad zwierzętami 2+",
                "description": "Ci goście z pustyni, to są mutanty, bracie.Spojrzy taki na zwierzaka i mówi ci, na przykład,że wilczur jest głodny i wystarczy rzucić mu puszkę,a uspokoi się. W jaki sposób facet odróżnia wściekłośćod głodu? Pewnie sam jest w jakiejś częścizwierzęciem, nie sądzisz?",
                "action": "Bohater ma prawo do Przeciętnego testuOpieki nad zwierzętami. Jeśli go zda, może właściwieodczytać nastawienie napotkanego zwierzęciai przewidzieć jego następne działanie (nie wwalce!). Sztuczka nie dotyczy zmutowanych zwierząt.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_emotional_perception_input",
                        val: 2
                    }
                }]
            }, {
                "name": "Wyczucie promieniowania",
                "requirements": "Czujność 4+, Spryt 12+",
                "description": "To tak, jakby ci ktoś wsadził w dupsko Geigera.Jak tylko poziom promieniowania niebezpieczniesię podniesie - wyczujesz to.",
                "action": "Bohater zawsze wyczuwa niebezpiecznywzrost promieniowania.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_alertness_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Wyczucie zmian pogody",
                "requirements": "Znajomość terenu 2+, Percepcja 12+",
                "description": "Wędrówka z cholernym Tropicielem to mordęga...Ale kilka rzeczy mi się u nich podoba. Przepowiadaniepogody, na ten przykład. Są lepsi od radia.",
                "action": "Po zdaniu Przeciętnego testu Percepcji,Bohater praktycznie bezbłędnie określi pogodęna najbliższy dzień.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_terrain_knowledge_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 12
                    }
                }]
            },
            {
                "name": "Wyrabianie strzał lub bełtów",
                "reguirements": "Łuk 2+ lub Kusza 2+, Spryt 10+",
                "description": "Jak dla mnie, to jedyny i wcale niezbyt przekonywujący powód, dla którego warto strzelać z łuku,a nie ze spluwy. Do łuku łatwiej dorobić amunicję.",
                "action": "Bohater bez większych problemów potrafiwykonać strzały do łuku lub bełty do kuszy.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_bow_input",
                                    val: 2
                                },
                                {
                                    attr: "skill_crossbow_input",
                                    val: 2
                                },
                            ]
                        }
                    }, {
                        type: "min",
                        data: {
                            attr: "parameters_insert_int_main",
                            val: 10
                        }
                    },
                ]
            },
            {
                "name": "Wytrych",
                "requirements": "Otwieranie zamków 4+, Zręczność 12+",
                "description": "Zrobienie wytrycha to akurat nie jest żadnasztuka. Zrobisz go z wszystkiego, kawałka drutu,czy co tam masz pod ręką. Inna sprawa, że aby przekonaćo tym Mistrza Gry, lepiej jednak mieć tęSztuczkę. No cóż, kup, zaoszczędzisz sobie nieprzyjemności...",
                "action": "Bohater robi wytrych z „byle czego” -nie otrzymuje kary za brak profesjonalnego sprzętupodczas otwierania zamków mechanicznych.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_lockpicking_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Zagadanie",
                "requirements": "Spryt 12+, Blef 2+, Zwinne dłonie 2+",
                "description": "OK., poddaję się, rozumiem. Widzę, że maszwiększego. To Magnum? Niezły, ja mam tylko ...tegoGlocka.",
                "action": "Zagadujesz gościa i nawet jak nie miałeśdobytej broni, to już masz. Jeśli gość miał w ręcespluwę, a ty nie, to już obaj macie. Sztuczka niedziała w walce.",
                req: [{
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 12
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_bluff_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "skill_agile_hands_input",
                        val: 2
                    }
                }]
            }, {
                "name": "Zasłona",
                "requirements": "Bijatyka 2+, Budowa 12+",
                "description": "Ten Chinol, o którym już wspominałem, roztoczyłwokół rąk pole siłowe. Tak nimi machał, żegdzie nie chciałeś go huknąć, napotykałeś opór! Jaszybko, on jeszcze szybciej. Ja mocno, on niewzruszony.Ja toporem, a on mi dup, kopniak w jaja. Orzesz, głupi Chinolu...",
                "action": "Decyzję należy podjąć na początkutury, przed rzutem 3k20. Walczący otrzymuje bonus+2 do Zręczności w obronie, ale za to w kolejnej turzeotrzymuje karę -2 do Zręczności, zarówno w obronie,jak i w ataku.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_brawl_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_bd_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Zgranie",
                "requirements": "Rzucanie 2+, Zręczność 12+",
                "description": "Cholerni koszykarze, przyjechali prosto zNowego Jorku na Front. Jednemu brakło amunicji?Żaden problem, ciach-mach i już ma od kolegi. Tamtendrugi potrzebuje w zamian granat? Ciach-mach,gotowe.",
                "action": "Dwóch gości z tą Sztuczką może rzucaćdo siebie dowolne lekkie przedmioty tak, że zarównorzut jak i złapanie są automatycznie udane.Rzut na odległość do 5m trwa 1 segment, do 10m - 2segmenty, do 15m - 3 segmenty. Rzucane przedmiotymuszą być w miarę lekkie i bezpieczne w łapaniu -np. zabezpieczony granat, pistolet, magazynek itd.,a nie np. nóż czy karabin. Rzucać i łapać możnanawet lewą ręką.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_throwing_input",
                        val: 2
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 12
                    }
                }]
            }, {
                "name": "Zielony balonik",
                "requirements": "Pistolety 3+, Percepcja 14+, Spryt 10+,Zręczność 10+",
                "description": "Potrzebuję dosłownie chwili spokoju, by wmiejsce łba dowolnego fagasa wyobrazić sobie zielonybalonik. A powiem ci, trafiania w dyndające zielonebaloniki uczyłem się dwanaście lat.",
                "action": "Gdy podejdziesz do kogoś na odległość1-5 metrów i wycelujesz w głowę, to dopóki ta odległośćsię nie zmieni, masz zapewniony automatycznysukces trafienia jeńca w głowę. Możesz z nimwędrować, prowadzić go itd., a i tak nie stracisz go z„celownika”. Nie można jednak z jeńcem biegać, wspinaćsię itp. W dowolnej chwili, np. gdy tylko jenieczechce się wyrwać, wystarczy wygrać test Inicjatywy,a trafienie będzie automatyczne.Branie jeńca na cel nie może się odbyć w trakciewalki. W sytuacjach spornych należy przeprowadzićtest na trafienie w głowę (czasem też wcześniejszytest Inicjatywy) - w przypadku sukcesu Sztuczkazadziałała. Sztuczka dotyczy tylko pistoletów i rewolwerów.Słyszałeś może coś na temat „Polityków”? Szukam o nich informacji. Nic nie wiesz? O „Starcach”? Siewcach chaosu”? Tojeszcze historia sprzed wojny. Była grupa ludzi, szarych eminencji z rządów najpotężniejszych państw, która wiedziałao wszystkim. Wiedzieli o tym, że powstanie Moloch i Tornado. Doskonale wiedzieli dokąd zmierza świat, a ich działaniazakładały zagładę - z którą teraz przyszło nam żyć. Podobno wciąż żyją. Pojawiają się w róznych miejsach. Wciąż cośknują. Na pewno nie spotkałeś nikogo takiego? Na pewno?",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_pistols_input",
                        val: 3
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_pr_main",
                        val: 14
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_int_main",
                        val: 10
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_ag_main",
                        val: 10
                    }
                }]
            }, {
                "name": "Zły",
                "requirements": "Zastraszanie 4+, Charakter 12+",
                "description": "Eastwood mówi przyciszonym głosem, którysłychać nawet na końcu stadionu. Spojrzenie matakie, że człowiek myśli o obdzieraniu żywcem zeskóry i rozcinaniu piłą. Ten facet to chodzący Laxigen,spojrzysz i już masz srakę.",
                "action": "Przebywający w pobliżu mówiącegoBohatera ludzie muszą przejść Bardzo trudny testMorale lub otrzymują utrudnienie +10% do wszystkichakcji. Zwyczajnie trzęsą im się ręce.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_intimidation_input",
                        val: 4
                    }
                }, {
                    type: "min",
                    data: {
                        attr: "parameters_insert_cha_main",
                        val: 12
                    }
                }]
            },
            {
                "name": "Zmyłka",
                "reguirements": "Bijatyka 5+ lub Broń ręczna 5+, Spryt 12+",
                "description": "Zamachnąłem się w stronę gladiatora tak,że ledwo uskoczył i w dodatku stracił równowagę.Tak mi się przynajmniej wydawało do momentu,gdy chciałem wykorzystać przewagę. Nawet niewiem, co się wtedy stało. Grunt, że w ogóle to przeżyłem.",
                "action": "Podczas walki wręcz, na czas 1 turymożesz do Umiejętności walki dodać swój Blef. Sztuczkęmożna użyć tylko 1 raz przeciwko temu samemuprzeciwnikowi.",
                req: [
                    {
                        type: "or",
                        data: {
                            elements: [
                                {
                                    attr: "skill_brawl_input",
                                    val: 5
                                },
                                {
                                    attr: "skill_handheld_weapon_input",
                                    val: 5
                                },
                            ]
                        }
                    }, {
                        type: "min",
                        data: {
                            attr: "parameters_insert_int_main",
                            val: 12
                        }
                    },
                ]
            },
            {
                "name": "Żelazne racje",
                "requirements": "Łowiectwo 2+",
                "description": "Nie lubię suszonego mięsa - smakuje jak podeszwabuta. Z drugiej strony nie narzekam. Jadłemjuż koty i komary widliszki. Bywały miesiące, żejedynie indiański susz utrzymywał mnie przy życiu.Bez dwóch zdań, konserwacja żywności to przydatnaSztuczka.",
                "action": "Bohater potrafi zakonserwować żywność,którą zdobył (mięso, wypieki itp.). Jedzenie niezepsuje się przez kilka miesięcy.",
                req: [{
                    type: "min",
                    data: {
                        attr: "skill_hunting_input",
                        val: 2
                    }
                }]
            },
        ]
    }
]