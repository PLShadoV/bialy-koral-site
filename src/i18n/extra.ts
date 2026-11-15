import type { Language } from "./translations";

// Round 2 (2026-11-15): search descriptions, photo descriptions, interiors, the area around Rusinowo, mobile bar.
// Distances: OpenStreetMap routing from Sosnowa 9 by car (Jarosławiec 3.9 km, Darłowo 15.9 km, Ustka 29.2 km).

type Place = { key: "jaroslawiec" | "darlowo" | "ustka"; name: string; distance: string; text: string };

export interface Extra {
  seo: { home: string; gallery: string; pricing: string; contact: string; reservation: string };
  alt: { hero: string; cottages: string; beach: string; forest: string };
  interiors: { title: string; text: string; items: [string, string, string, string]; cta: string };
  area: { title: string; text: string; directions: string; places: Place[] };
  photo: string;
  bar: { call: string; book: string };
  video: string;
}

export const credits = {
  beach: { author: "Pabloazory", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pla%C5%BCa_Rusinowo.jpg" },
  jaroslawiec: { author: "Henryk Bielamowicz", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Jaros%C5%82awiec,_latarnia_morska_(HB3).jpg" },
  darlowo: { author: "Karol Szejner", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Dar%C5%82owo_-_Zamek_Ksi%C4%85%C5%BC%C4%85t_Pomorskich.jpg" },
  ustka: { author: "Kritzolina", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Strand_von_Ustka_6%272013_02.JPG" },
};

export const extra: Record<Language, Extra> = {
  PL: {
    seo: {
      home: "Domki letniskowe w Rusinowie dla 5 osób, ok. 600 m od plaży, przy lesie. Klimatyzacja, kuchnia, Wi-Fi, grill i pobyt z psem. Sprawdź wolne terminy.",
      gallery: "Zdjęcia i filmy domków Biały Koral w Rusinowie: kuchnia z jadalnią, sypialnie, łazienka, taras, plac zabaw i teren przy lesie, ok. 600 m od morza.",
      pricing: "Cennik domków Biały Koral w Rusinowie: cena za cały domek do 5 osób za dobę na 2027 rok, latem minimum 7 nocy, pobyt z psem po uzgodnieniu.",
      contact: "Kontakt i dojazd do domków Biały Koral: ul. Sosnowa 9, 76-107 Rusinowo, tel. +48 797 392 903, info@koralrusinowo.pl. Do Jarosławca ok. 4 km.",
      reservation: "Zarezerwuj domek w Białym Koralu w Rusinowie. Do 5 osób w domku, zameldowanie od 15:00, wymeldowanie do 10:00, pies 15 zł za dobę.",
    },
    alt: {
      hero: "Domki Biały Koral w Rusinowie z lotu ptaka: trawnik, plac zabaw i altany",
      cottages: "Biały domek letniskowy z tarasem w ośrodku Biały Koral",
      beach: "Plaża w Rusinowie z wydmami i morzem",
      forest: "Las sosnowy ciągnący się od Rusinowa aż do morza, widok z drona",
    },
    interiors: {
      title: "Wnętrza domków",
      text: "Jasne wnętrza z kuchnią, sypialniami i łazienką z prysznicem. Wszystko na miejscu, żeby nie wozić pół domu nad morze.",
      items: ["Kuchnia z jadalnią", "Sypialnia", "Pokój dzienny z sofą i TV", "Łazienka z prysznicem"],
      cta: "Więcej zdjęć w galerii",
    },
    area: {
      title: "Okolica Rusinowa",
      text: "Do plaży dojdziesz ok. 600 m przez las. Na wycieczkę samochodem albo rowerem warto wybrać się tutaj:",
      directions: "Prowadź do nas",
      places: [
        { key: "jaroslawiec", name: "Jarosławiec", distance: "ok. 4 km", text: "Latarnia morska z tarasem widokowym, nadmorski deptak i aquapark." },
        { key: "darlowo", name: "Darłowo", distance: "ok. 16 km", text: "Zamek Książąt Pomorskich nad Wieprzą, stare miasto i port w Darłówku." },
        { key: "ustka", name: "Ustka", distance: "ok. 29 km", text: "Promenada, port i szeroka plaża. Dobry pomysł na jednodniowy wypad." },
      ],
    },
    photo: "Fot.",
    bar: { call: "Zadzwoń", book: "Rezerwuj" },
    video: "Odtwórz film",
  },
  EN: {
    seo: {
      home: "Holiday cottages in Rusinowo for 5 guests, about 600 m from the beach by the forest. Air conditioning, kitchen, Wi-Fi, barbecue, dogs welcome.",
      gallery: "Photos and videos of Biały Koral cottages in Rusinowo: kitchen and dining area, bedrooms, bathroom, terrace, playground and grounds by the forest.",
      pricing: "Biały Koral prices in Rusinowo: 2027 rate per night for a whole cottage for up to 5 guests, minimum 7 nights in summer, dogs by arrangement.",
      contact: "Contact and directions to Biały Koral cottages: Sosnowa 9, 76-107 Rusinowo, Poland, phone +48 797 392 903, info@koralrusinowo.pl.",
      reservation: "Book a cottage at Biały Koral in Rusinowo. Up to 5 guests per cottage, check-in from 3 pm, check-out by 10 am, dogs 15 PLN per night.",
    },
    alt: {
      hero: "Aerial view of Biały Koral cottages in Rusinowo with lawn, playground and gazebos",
      cottages: "White holiday cottage with a terrace at Biały Koral",
      beach: "Beach in Rusinowo with dunes and the Baltic Sea",
      forest: "Pine forest stretching from Rusinowo to the sea, drone view",
    },
    interiors: {
      title: "Inside the cottages",
      text: "Bright rooms with a kitchen, bedrooms and a bathroom with a shower. Everything is here, so you don't have to pack half your home.",
      items: ["Kitchen and dining area", "Bedroom", "Living room with sofa and TV", "Bathroom with shower"],
      cta: "More photos in the gallery",
    },
    area: {
      title: "Around Rusinowo",
      text: "The beach is about 600 m away through the forest. Good trips by car or bike:",
      directions: "Get directions",
      places: [
        { key: "jaroslawiec", name: "Jarosławiec", distance: "approx. 4 km", text: "Lighthouse with a viewing deck, seaside promenade and aquapark." },
        { key: "darlowo", name: "Darłowo", distance: "approx. 16 km", text: "Castle of the Pomeranian Dukes on the Wieprza river, old town and the harbour in Darłówko." },
        { key: "ustka", name: "Ustka", distance: "approx. 29 km", text: "Promenade, harbour and a wide beach. A good day trip." },
      ],
    },
    photo: "Photo",
    bar: { call: "Call", book: "Book" },
    video: "Play video",
  },
  DE: {
    seo: {
      home: "Ferienhäuser in Rusinowo für 5 Personen, ca. 600 m vom Strand am Wald. Klimaanlage, Küche, WLAN, Grill und Hunde willkommen. Freie Termine prüfen.",
      gallery: "Fotos und Videos der Ferienhäuser Biały Koral in Rusinowo: Küche mit Essplatz, Schlafzimmer, Bad, Terrasse, Spielplatz und Gelände am Wald.",
      pricing: "Preise Biały Koral in Rusinowo: Preise 2027 pro Nacht für das ganze Haus bis 5 Personen, im Sommer mindestens 7 Nächte, Hunde nach Absprache.",
      contact: "Kontakt und Anfahrt zu den Ferienhäusern Biały Koral: Sosnowa 9, 76-107 Rusinowo, Polen, Tel. +48 797 392 903, info@koralrusinowo.pl.",
      reservation: "Ferienhaus im Biały Koral in Rusinowo buchen. Bis 5 Personen pro Haus, Check-in ab 15 Uhr, Check-out bis 10 Uhr, Hund 15 PLN pro Nacht.",
    },
    alt: {
      hero: "Ferienhäuser Biały Koral in Rusinowo von oben: Rasen, Spielplatz und Pavillons",
      cottages: "Weißes Ferienhaus mit Terrasse im Biały Koral",
      beach: "Strand in Rusinowo mit Dünen und Ostsee",
      forest: "Kiefernwald von Rusinowo bis zum Meer, Drohnenaufnahme",
    },
    interiors: {
      title: "Die Häuser von innen",
      text: "Helle Räume mit Küche, Schlafzimmern und Bad mit Dusche. Alles ist da, Sie müssen nicht den halben Haushalt mitnehmen.",
      items: ["Küche mit Essplatz", "Schlafzimmer", "Wohnraum mit Sofa und TV", "Bad mit Dusche"],
      cta: "Mehr Fotos in der Galerie",
    },
    area: {
      title: "Rund um Rusinowo",
      text: "Zum Strand sind es ca. 600 m durch den Wald. Lohnende Ausflüge mit Auto oder Fahrrad:",
      directions: "Route planen",
      places: [
        { key: "jaroslawiec", name: "Jarosławiec", distance: "ca. 4 km", text: "Leuchtturm mit Aussichtsplattform, Strandpromenade und Aquapark." },
        { key: "darlowo", name: "Darłowo", distance: "ca. 16 km", text: "Schloss der Pommerschen Herzöge an der Wieprza, Altstadt und Hafen in Darłówko." },
        { key: "ustka", name: "Ustka", distance: "ca. 29 km", text: "Promenade, Hafen und breiter Strand. Ideal für einen Tagesausflug." },
      ],
    },
    photo: "Foto",
    bar: { call: "Anrufen", book: "Buchen" },
    video: "Video abspielen",
  },
  UA: {
    seo: {
      home: "Будиночки для відпочинку в Русинові на 5 осіб, бл. 600 м до пляжу, біля лісу. Кондиціонер, кухня, Wi-Fi, гриль, можна з собакою.",
      gallery: "Фото й відео будиночків Biały Koral у Русинові: кухня з їдальнею, спальні, ванна, тераса, дитячий майданчик і територія біля лісу.",
      pricing: "Ціни Biały Koral у Русинові: ціни 2027 за весь будиночок до 5 осіб за ніч, влітку мінімум 7 ночей, собаки за домовленістю.",
      contact: "Контакти й дорога до будиночків Biały Koral: Sosnowa 9, 76-107 Rusinowo, Польща, тел. +48 797 392 903, info@koralrusinowo.pl.",
      reservation: "Забронюйте будиночок у Biały Koral у Русинові. До 5 осіб, заселення з 15:00, виїзд до 10:00, собака 15 зл за ніч.",
    },
    alt: {
      hero: "Будиночки Biały Koral у Русинові з висоти: газон, дитячий майданчик і альтанки",
      cottages: "Білий будиночок з терасою в Biały Koral",
      beach: "Пляж у Русинові з дюнами та морем",
      forest: "Сосновий ліс від Русинова до моря, вигляд з дрона",
    },
    interiors: {
      title: "Будиночки всередині",
      text: "Світлі кімнати з кухнею, спальнями та ванною з душем. Усе необхідне вже на місці.",
      items: ["Кухня з їдальнею", "Спальня", "Вітальня з диваном і телевізором", "Ванна з душем"],
      cta: "Більше фото в галереї",
    },
    area: {
      title: "Околиці Русинова",
      text: "До пляжу бл. 600 м через ліс. Куди варто поїхати автомобілем або велосипедом:",
      directions: "Прокласти маршрут",
      places: [
        { key: "jaroslawiec", name: "Ярославець", distance: "бл. 4 км", text: "Маяк з оглядовим майданчиком, набережна та аквапарк." },
        { key: "darlowo", name: "Дарлово", distance: "бл. 16 км", text: "Замок Поморських князів над річкою Вєпша, старе місто й порт у Дарлувку." },
        { key: "ustka", name: "Устка", distance: "бл. 29 км", text: "Променад, порт і широкий пляж. Гарна ідея для поїздки на день." },
      ],
    },
    photo: "Фото",
    bar: { call: "Подзвонити", book: "Забронювати" },
    video: "Відтворити відео",
  },
  CS: {
    seo: {
      home: "Rekreační domky v Rusinowě pro 5 osob, asi 600 m od pláže u lesa. Klimatizace, kuchyň, Wi-Fi, gril a pobyt se psem. Ověřte volné termíny.",
      gallery: "Fotky a videa domků Biały Koral v Rusinowě: kuchyň s jídelnou, ložnice, koupelna, terasa, dětské hřiště a pozemek u lesa.",
      pricing: "Ceník domků Biały Koral v Rusinowě: ceny 2027 za celý domek pro max. 5 osob za noc, v létě minimálně 7 nocí, psi po domluvě.",
      contact: "Kontakt a cesta k domkům Biały Koral: Sosnowa 9, 76-107 Rusinowo, Polsko, tel. +48 797 392 903, info@koralrusinowo.pl.",
      reservation: "Rezervujte si domek v Biały Koral v Rusinowě. Až 5 osob v domku, příjezd od 15:00, odjezd do 10:00, pes 15 PLN za noc.",
    },
    alt: {
      hero: "Domky Biały Koral v Rusinowě z ptačí perspektivy: trávník, hřiště a altány",
      cottages: "Bílý rekreační domek s terasou v Biały Koral",
      beach: "Pláž v Rusinowě s dunami a mořem",
      forest: "Borový les od Rusinowa až k moři, pohled z dronu",
    },
    interiors: {
      title: "Domky zevnitř",
      text: "Světlé místnosti s kuchyní, ložnicemi a koupelnou se sprchou. Vše potřebné najdete na místě.",
      items: ["Kuchyň s jídelnou", "Ložnice", "Obývací pokoj s pohovkou a TV", "Koupelna se sprchou"],
      cta: "Další fotky v galerii",
    },
    area: {
      title: "Okolí Rusinowa",
      text: "K pláži je to asi 600 m lesem. Kam se vydat autem nebo na kole:",
      directions: "Navigovat k nám",
      places: [
        { key: "jaroslawiec", name: "Jarosławiec", distance: "asi 4 km", text: "Maják s vyhlídkovou plošinou, promenáda a aquapark." },
        { key: "darlowo", name: "Darłowo", distance: "asi 16 km", text: "Hrad pomořanských knížat na řece Wieprza, staré město a přístav v Darłówku." },
        { key: "ustka", name: "Ustka", distance: "asi 29 km", text: "Promenáda, přístav a široká pláž. Dobrý tip na celodenní výlet." },
      ],
    },
    photo: "Foto",
    bar: { call: "Zavolat", book: "Rezervovat" },
    video: "Přehrát video",
  },
};

// Gallery photo descriptions per file (round 2: every photo used to have the same alt text)
const galleryFiles = ["1.png", "2.png", "3.png", "4.png", "gorapan.jpg", "herodron.jpg", "placzabaw.jpg", "a.png", "b.png", "c.png", "d.png", "e.png", "e.webp"];
const galleryAlts: Record<Language, string[]> = {
  PL: ["Domki letniskowe i trawnik przy lesie", "Biały domek z tarasem", "Piaskownica przed domkami", "Alejka wzdłuż domków", "Ośrodek z drona, widok z góry", "Domki i plac zabaw z drona", "Plac zabaw ze zjeżdżalniami", "Kuchnia z jadalnią", "Sypialnia z łóżkiem małżeńskim", "Sypialnia z dwoma łóżkami", "Pokój dzienny z sofą i TV", "Łazienka z prysznicem", "Ręczniki na łóżku"],
  EN: ["Holiday cottages and lawn by the forest", "White cottage with a terrace", "Sandpit in front of the cottages", "Path along the cottages", "Drone view of the grounds from above", "Cottages and playground from a drone", "Playground with slides", "Kitchen and dining area", "Bedroom with a double bed", "Bedroom with two single beds", "Living room with sofa and TV", "Bathroom with shower", "Towels on the bed"],
  DE: ["Ferienhäuser und Rasen am Wald", "Weißes Ferienhaus mit Terrasse", "Sandkasten vor den Häusern", "Weg entlang der Häuser", "Anlage von oben, Drohnenaufnahme", "Häuser und Spielplatz von oben", "Spielplatz mit Rutschen", "Küche mit Essplatz", "Schlafzimmer mit Doppelbett", "Schlafzimmer mit zwei Einzelbetten", "Wohnraum mit Sofa und TV", "Bad mit Dusche", "Handtücher auf dem Bett"],
  UA: ["Будиночки й газон біля лісу", "Білий будиночок з терасою", "Пісочниця перед будиночками", "Доріжка вздовж будиночків", "Територія з дрона, вигляд згори", "Будиночки й дитячий майданчик з дрона", "Дитячий майданчик з гірками", "Кухня з їдальнею", "Спальня з двоспальним ліжком", "Спальня з двома ліжками", "Вітальня з диваном і телевізором", "Ванна з душем", "Рушники на ліжку"],
  CS: ["Rekreační domky a trávník u lesa", "Bílý domek s terasou", "Pískoviště před domky", "Cesta podél domků", "Areál z dronu shora", "Domky a hřiště z dronu", "Dětské hřiště se skluzavkami", "Kuchyň s jídelnou", "Ložnice s manželskou postelí", "Ložnice se dvěma lůžky", "Obývací pokoj s pohovkou a TV", "Koupelna se sprchou", "Ručníky na posteli"],
};
export const galleryAlt = (language: Language, file: string) => galleryAlts[language][galleryFiles.indexOf(file)] ?? "";

// Guest reviews (owner 2026-11-15: "take only the good 5-star ones" from the Google profile).
// Verbatim Polish originals, 5/5 each, read from Google Maps on 2026-11-15; names shortened to first name + initial.
export const googleProfile = "https://www.google.com/maps?cid=6782506020556822561";
export const googleRating = { value: "5,0", count: 39 };
export const reviews = [
  { name: "Agata K.", text: "Świetnie urządzone domki przy samym lesie - cisza, spokój, piękna natura. Do plaży 10-15 minut spacerkiem przez las. Możliwość z przyjazdu z pieskiem - wspaniale! Domki bardzo dobrze wyposażone - są wszystkie potrzebne rzeczy i sprzęty. Miłym zaskoczeniem była zmywarka, pralka i klimatyzacja w domku. Dodatkowo dostępne rowery i akcesoria plażowe. Jesteśmy bardzo zadowoleni z pobytu, polecamy!" },
  { name: "Milena L.", text: "Bardzo jesteśmy zadowoleni z pobytu! Domek znajduje się w świetnej lokalizacji – blisko morza, co jest ogromnym plusem. Właściciele są bardzo sympatyczni, pomocni i życzliwi. Panuje tutaj miła, spokojna atmosfera, idealna na odpoczynek od codziennego pośpiechu. Cisza, spokój i cudowny szum morza sprawiają, że można naprawdę się zrelaksować. Z przyjemnością wrócimy tutaj ponownie. Serdecznie polecamy! ❤️" },
  { name: "Ka E.", text: "Bardzo dobrze wyposażony domek, czysty i przyjemnie urządzony. Gospodarze serdeczni i pomocni. Jeśli ktoś potrzebuje wypoczynku na nie zatłoczonej plaży, wystarczy krótki spacer przez las. Do dyspozycji gości rowery - to dodatkowy atut. Serdecznie polecam." },
  { name: "Zofia T.", text: "Biały Koral – jak zawsze wracamy od Was zachwyceni! Choć pogoda w tym roku bywała kapryśna, u Was wypoczęliśmy po prostu genialnie. To urokliwe miejsce w pięknej lokalizacji, z dala od zgiełku, ma w sobie coś magicznego. Same domki są super – czyste, świetnie wyposażone i niezwykle przytulne. Mimo że byliśmy u Was już kolejny raz, to miejsce nigdy nam się nie nudzi! Szkoda tylko, że czas u Was ucieka tak niemiłosiernie szybko. Jeśli tylko zdrowie dopisze, na pewno wrócimy tu znowu. Dziękujemy za wszystko i do zobaczenia! 👋❤️" },
  { name: "Kasia K.", text: "Bardzo ładnie urządzony ośrodek. W pobliżu las, natura, cisza, jednocześnie blisko do dobrze zaopatrzonego sklepu. Domki zadbane, w pelni wyposażone, bardzo czysto. Właściciel uprzemy i bardzo pomocny. Dojście nad morze uroczą leśną scieżką, spacerem ok 10min. Polecam serdecznie." },
];
export const reviewsText: Record<Language, { title: string; rating: string; all: string; original: string }> = {
  PL: { title: "Co mówią goście", rating: "opinii w Google", all: "Wszystkie opinie w Google", original: "" },
  EN: { title: "What our guests say", rating: "Google reviews", all: "All reviews on Google", original: "Original reviews in Polish" },
  DE: { title: "Das sagen unsere Gäste", rating: "Google-Bewertungen", all: "Alle Bewertungen auf Google", original: "Originalbewertungen auf Polnisch" },
  UA: { title: "Що кажуть гості", rating: "відгуків у Google", all: "Усі відгуки в Google", original: "Оригінальні відгуки польською" },
  CS: { title: "Co říkají hosté", rating: "recenzí na Google", all: "Všechny recenze na Google", original: "Původní recenze v polštině" },
};
