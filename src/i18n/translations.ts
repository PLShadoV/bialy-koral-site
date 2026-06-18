export type Language = "PL" | "DE" | "EN" | "UA" | "CS";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    gallery: string;
    pricing: string;
    contact: string;
    reservation: string;
    ourResorts: string;
    language: string;
  };
  // Footer
  footer: {
    contactUs: string;
    location: string;
    languages: string;
    allRightsReserved: string;
  };
  // Hero
  hero: {
    subtitle: string;
    description: string;
    bookNow: string;
  };
  // Home
  home: {
    introTitle: string;
    introText: string;
    petsTitle: string;
    petsText: string;
    petsText2: string;
    cyclingTitle: string;
    cyclingText: string;
    cyclingText2: string;
    areaTitle: string;
    areaText: string;
    areaText2: string;
    learnMore: string;
    equipmentTitle: string;
    equipmentSubtitle: string;
    equipmentDescription: string;
    viewGallery: string;
    howToFindUs: string;
    howToFindUsSubtitle: string;
    amenities: string[];
  };
  // Features
  features: {
    title: string;
    subtitle: string;
    wifiTitle: string;
    wifiDesc: string;
    capacityTitle: string;
    capacityDesc: string;
    kitchenTitle: string;
    kitchenDesc: string;
  };
  // Pricing
  pricing: {
    pageTitle: string;
    pageSubtitle: string;
    perNight: string;
    depositTitle: string;
    depositText: string;
    depositAmount: string;
    infoTitle: string;
    infoItems: string[];
    bookNow: string;
    contactForReservation: string;
    pricingTableTitle: string;
  };
  // Contact
  contact: {
    pageTitle: string;
    pageSubtitle: string;
    sectionTitle: string;
    sectionSubtitle: string;
    callUs: string;
    emailUs: string;
    visitUs: string;
    phoneHours: string;
    responseTime: string;
  };
  // Reservation
  reservation: {
    pageTitle: string;
    pageSubtitle: string;
    formTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    pets: string;
    yes: string;
    no: string;
    message: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    sending: string;
  };
  // 404
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };
}

export const translations: Record<Language, Translations> = {
  PL: {
    nav: {
      home: "Strona główna",
      gallery: "Galeria",
      pricing: "Cennik",
      contact: "Kontakt",
      reservation: "Rezerwacja",
      ourResorts: "Nasze ośrodki",
      language: "Język",
    },
    footer: {
      contactUs: "Skontaktuj się z nami",
      location: "Lokalizacja",
      languages: "Języki",
      allRightsReserved: "Wszystkie prawa zastrzeżone.",
    },
    hero: {
      subtitle: "Domki wczasowe nad morzem",
      description:
        "Odkryj idealne miejsce na wakacje w Rusinowie. Komfortowe domki w otoczeniu lasu, zaledwie 600 metrów od plaży Bałtyku. Ciesz się spokojem natury i bliskością morza.",
      bookNow: "Zarezerwuj teraz",
    },
    home: {
      introTitle: "Biały Koral — Domki letniskowe nad morzem",
      introText:
        "Zapraszamy do naszych komfortowych domków letniskowych w Rusinowie. Idealne miejsce na rodzinny wypoczynek w otoczeniu pięknej przyrody, z łatwym dostępem do plaży i licznych atrakcji turystycznych.",
      petsTitle: "Pobyt z czworonogiem",
      petsText:
        "Akceptujemy zwierzęta po wcześniejszym zgłoszeniu. Wasze pupile muszą znajdować się pod stałym nadzorem podczas całego pobytu. Zapewniamy przyjazne środowisko dla całej rodziny, w tym dla waszych czworonożnych przyjaciół.",
      petsText2:
        "Plaża w Rusinowie jest idealna dla spacerów z psami. Szeroki pas piasku pozwala na swobodną zabawę, a czyste powietrze i morska bryza sprawią, że Twój pies będzie zachwycony wakacjami nad Bałtykiem.",
      cyclingTitle: "Rowerem nad morzem",
      cyclingText:
        "Odkryj malownicze trasy rowerowe w okolicy Rusinowa. Przejażdżki wśród sosnowych lasów, ścieżki nadmorskie i malownicze trasy łączące nasze miasteczko z sąsiednimi kurortami zapewnią niezapomniane wrażenia.",
      cyclingText2:
        "Region Słowińskiego Parku Narodowego oferuje kilometry bezpiecznych ścieżek rowerowych. Możesz dotrzeć do Jarosławca, Wici czy Darłowa, podziwiając po drodze unikalne krajobrazy wydm i nadmorskich łąk.",
      areaTitle: "Najbliższa okolica Rusinowa",
      areaText:
        "Nasze domki położone są w cichym miejscu przy lesie, który zaprasza na spokojne spacery i kontakt z naturą. Znajdujemy się w pobliżu Jarosławca i Wici, co zapewnia dostęp do dodatkowych atrakcji turystycznych i gastronomicznych.",
      areaText2:
        "Rusinowo to małe, spokojne miasteczko na polskim wybrzeżu Bałtyku, położone między Darłowem a Jarosławcem. Dzięki położeniu w sercu Słowińskiego Parku Narodowego, oferuje niepowtarzalny kontakt z przyrodą. W okolicy znajdziecie ruchome wydmy, jeziora nadmorskie, latarnię morską w Darłowie oraz liczne szlaki piesze i rowerowe.",
      learnMore: "Dowiedz się więcej",
      equipmentTitle: "Wyposażenie domków letniskowych",
      equipmentSubtitle: "Wszystko czego potrzebujesz na komfortowy wypoczynek nad morzem",
      equipmentDescription:
        "Każdy domek jest w pełni wyposażony i przygotowany na pobyt do 5 osób. Nowoczesne udogodnienia zapewniają komfort porównywalny z domowym.",
      viewGallery: "Zobacz galerię",
      howToFindUs: "Jak nas znaleźć",
      howToFindUsSubtitle: "Biały Koral - Domki letniskowe w Rusinowie",
      amenities: [
        "TV + satelita",
        "Światłowód",
        "Kuchnia (płyta indukcja, ekspres, czajnik, lodówka z zamrażalnikiem)",
        "Klimatyzacja",
        "Pralka",
        "Zmywarka",
        "Grill",
        "Bezpłatne Wi-Fi na terenie ośrodka",
      ],
    },
    features: {
      title: "Nasze domki",
      subtitle:
        "Komfortowe domki w cichym miejscu przy lesie, około 600 metrów od morza. Idealny standard dla waszego wypoczynku.",
      wifiTitle: "Szybki internet WiFi",
      wifiDesc: "Bezpłatne Wi-Fi na terenie całego ośrodka z szybkim światłowodem",
      capacityTitle: "Pięcioosobowe domki",
      capacityDesc: "Komfortowe domki dla maksymalnie 5 osób z pełnym wyposażeniem",
      kitchenTitle: "Wyposażony aneks kuchenny",
      kitchenDesc: "Pełna kuchnia z lodówką, zmywarką, płytą indukcyjną i ekspresem",
    },
    pricing: {
      pageTitle: "Cennik",
      pageSubtitle: "Cennik sezonowy za domek za dobę. Rezerwuj już dziś!",
      perNight: "za dobę",
      depositTitle: "Zaliczka",
      depositText: "Przy rezerwacji pobieramy zaliczkę w wysokości",
      depositAmount: "30% wartości pobytu",
      infoTitle: "Informacje dodatkowe",
      infoItems: [
        "Ceny dotyczą całego domku (do 5 osób)",
        "Możliwość zabrania zwierząt (po wcześniejszym uzgodnieniu)",
        "Bezpłatne miejsca parkingowe",
        "Wi-Fi w cenie",
        "Minimalna długość pobytu: 3 noce w sezonie",
      ],
      bookNow: "Zarezerwuj teraz",
      contactForReservation: "Skontaktuj się w sprawie rezerwacji",
      pricingTableTitle: "Cennik 2025",
    },
    contact: {
      pageTitle: "Kontakt",
      pageSubtitle: "Skontaktuj się z nami — chętnie odpowiemy na wszystkie pytania",
      sectionTitle: "Skontaktuj się z nami",
      sectionSubtitle: "Jesteśmy do dyspozycji i chętnie odpowiemy na wszelkie pytania dotyczące rezerwacji i pobytu.",
      callUs: "Zadzwoń do nas",
      emailUs: "Napisz do nas",
      visitUs: "Odwiedź nas",
      phoneHours: "Dostępni codziennie 8:00–20:00",
      responseTime: "Odpowiadamy w ciągu 24 godzin",
    },
    reservation: {
      pageTitle: "Rezerwacja",
      pageSubtitle: "Zarezerwuj swój pobyt w Białym Koralu",
      formTitle: "Formularz rezerwacji",
      firstName: "Imię",
      lastName: "Nazwisko",
      email: "E-mail",
      phone: "Telefon",
      checkIn: "Data przyjazdu",
      checkOut: "Data wyjazdu",
      guests: "Liczba gości",
      pets: "Czy przyjeżdżacie ze zwierzęciem?",
      yes: "Tak",
      no: "Nie",
      message: "Dodatkowe informacje",
      submit: "Wyślij zapytanie",
      successTitle: "Dziękujemy za rezerwację!",
      successMessage: "Skontaktujemy się z Tobą wkrótce, aby potwierdzić szczegóły pobytu.",
      sending: "Wysyłanie...",
    },
    notFound: {
      title: "Strona nie istnieje",
      message: "Przepraszamy, nie możemy znaleźć strony, której szukasz.",
      backHome: "Wróć do strony głównej",
    },
  },

  EN: {
    nav: {
      home: "Home",
      gallery: "Gallery",
      pricing: "Pricing",
      contact: "Contact",
      reservation: "Reservation",
      ourResorts: "Our Resorts",
      language: "Language",
    },
    footer: {
      contactUs: "Contact Us",
      location: "Location",
      languages: "Languages",
      allRightsReserved: "All rights reserved.",
    },
    hero: {
      subtitle: "Holiday Cottages by the Sea",
      description:
        "Discover the perfect holiday destination in Rusinowo. Comfortable cottages surrounded by forest, just 600 metres from the Baltic Sea beach. Enjoy the peace of nature and the closeness of the sea.",
      bookNow: "Book Now",
    },
    home: {
      introTitle: "Biały Koral — Holiday Cottages by the Sea",
      introText:
        "Welcome to our comfortable holiday cottages in Rusinowo. The perfect place for a family holiday surrounded by beautiful nature, with easy access to the beach and numerous tourist attractions.",
      petsTitle: "Pet-Friendly Stay",
      petsText:
        "We accept pets upon prior notification. Your pets must be under constant supervision throughout the stay. We provide a friendly environment for the whole family, including your four-legged friends.",
      petsText2:
        "The beach in Rusinowo is ideal for walks with dogs. The wide sandy strip allows for free play, and the clean air and sea breeze will make your dog love their Baltic holiday.",
      cyclingTitle: "Cycling by the Sea",
      cyclingText:
        "Discover scenic cycling routes around Rusinowo. Rides through pine forests, coastal paths and picturesque routes connecting our village with neighbouring resorts will provide unforgettable experiences.",
      cyclingText2:
        "The Słowiński National Park region offers kilometres of safe cycling paths. You can reach Jarosławiec, Wici or Darłowo, admiring the unique dune landscapes and coastal meadows along the way.",
      areaTitle: "The Surroundings of Rusinowo",
      areaText:
        "Our cottages are situated in a quiet spot by the forest, which invites you for peaceful walks and contact with nature. We are close to Jarosławiec and Wici, providing access to additional tourist and gastronomic attractions.",
      areaText2:
        "Rusinowo is a small, peaceful town on the Polish Baltic coast, located between Darłowo and Jarosławiec. Thanks to its location in the heart of Słowiński National Park, it offers a unique connection with nature. In the area you will find moving dunes, coastal lakes, a lighthouse in Darłowo and numerous hiking and cycling trails.",
      learnMore: "Learn More",
      equipmentTitle: "Cottage Equipment",
      equipmentSubtitle: "Everything you need for a comfortable seaside holiday",
      equipmentDescription:
        "Each cottage is fully equipped and prepared for a stay of up to 5 people. Modern amenities provide home-like comfort.",
      viewGallery: "View Gallery",
      howToFindUs: "How to Find Us",
      howToFindUsSubtitle: "Biały Koral - Holiday Cottages in Rusinowo",
      amenities: [
        "TV + satellite",
        "Fibre broadband",
        "Kitchen (induction hob, coffee machine, kettle, fridge-freezer)",
        "Air conditioning",
        "Washing machine",
        "Dishwasher",
        "Barbecue grill",
        "Free Wi-Fi on site",
      ],
    },
    features: {
      title: "Our Cottages",
      subtitle:
        "Comfortable cottages in a quiet spot by the forest, about 600 metres from the sea. The ideal standard for your holiday.",
      wifiTitle: "Fast Wi-Fi",
      wifiDesc: "Free Wi-Fi throughout the resort with fast fibre broadband",
      capacityTitle: "Five-Person Cottages",
      capacityDesc: "Comfortable cottages for up to 5 people with full equipment",
      kitchenTitle: "Fully Equipped Kitchen",
      kitchenDesc: "Full kitchen with fridge, dishwasher, induction hob and coffee machine",
    },
    pricing: {
      pageTitle: "Pricing",
      pageSubtitle: "Seasonal pricing per cottage per night. Book today!",
      perNight: "per night",
      depositTitle: "Deposit",
      depositText: "A deposit of",
      depositAmount: "30% of the stay value",
      infoTitle: "Additional Information",
      infoItems: [
        "Prices apply to the entire cottage (up to 5 people)",
        "Pets welcome (prior arrangement required)",
        "Free parking spaces",
        "Wi-Fi included",
        "Minimum stay: 3 nights in season",
      ],
      bookNow: "Book Now",
      contactForReservation: "Contact Us for Reservation",
      pricingTableTitle: "Pricing 2025",
    },
    contact: {
      pageTitle: "Contact",
      pageSubtitle: "Get in touch — we are happy to answer all your questions",
      sectionTitle: "Contact Us",
      sectionSubtitle:
        "We are available and happy to answer any questions about reservations and your stay.",
      callUs: "Call Us",
      emailUs: "Email Us",
      visitUs: "Visit Us",
      phoneHours: "Available daily 8:00–20:00",
      responseTime: "We respond within 24 hours",
    },
    reservation: {
      pageTitle: "Reservation",
      pageSubtitle: "Book your stay at Biały Koral",
      formTitle: "Reservation Form",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      guests: "Number of Guests",
      pets: "Are you bringing a pet?",
      yes: "Yes",
      no: "No",
      message: "Additional Information",
      submit: "Send Enquiry",
      successTitle: "Thank you for your reservation!",
      successMessage: "We will contact you shortly to confirm the details of your stay.",
      sending: "Sending...",
    },
    notFound: {
      title: "Page Not Found",
      message: "Sorry, we cannot find the page you are looking for.",
      backHome: "Back to Home",
    },
  },

  DE: {
    nav: {
      home: "Startseite",
      gallery: "Galerie",
      pricing: "Preisliste",
      contact: "Kontakt",
      reservation: "Reservierung",
      ourResorts: "Unsere Feriendörfer",
      language: "Sprache",
    },
    footer: {
      contactUs: "Kontaktieren Sie uns",
      location: "Standort",
      languages: "Sprachen",
      allRightsReserved: "Alle Rechte vorbehalten.",
    },
    hero: {
      subtitle: "Ferienhäuser am Meer",
      description:
        "Entdecken Sie das ideale Urlaubsziel in Rusinowo. Komfortable Ferienhäuser inmitten von Wäldern, nur 600 Meter vom Ostseestrand entfernt. Genießen Sie die Ruhe der Natur und die Nähe des Meeres.",
      bookNow: "Jetzt buchen",
    },
    home: {
      introTitle: "Biały Koral — Ferienhäuser am Meer",
      introText:
        "Willkommen in unseren komfortablen Ferienhäusern in Rusinowo. Der perfekte Ort für einen Familienurlaub umgeben von wunderschöner Natur, mit einfachem Zugang zum Strand und zahlreichen Touristenattraktionen.",
      petsTitle: "Urlaub mit Haustieren",
      petsText:
        "Wir akzeptieren Haustiere nach vorheriger Anmeldung. Ihre Haustiere müssen während des gesamten Aufenthalts ständig beaufsichtigt werden. Wir bieten eine tierfreundliche Umgebung für die ganze Familie.",
      petsText2:
        "Der Strand in Rusinowo ist ideal für Spaziergänge mit Hunden. Der breite Sandstreifen ermöglicht freies Spielen, und die saubere Luft und die Meeresbrise werden Ihren Hund für den Ostsee-Urlaub begeistern.",
      cyclingTitle: "Radfahren am Meer",
      cyclingText:
        "Entdecken Sie malerische Radwege rund um Rusinowo. Fahrten durch Kiefernwälder, Küstenwege und malerische Routen verbinden unser Dorf mit den benachbarten Ferienorten.",
      cyclingText2:
        "Die Region des Slowinzischen Nationalparks bietet kilometerlange sichere Radwege. Sie können Jarosławiec, Wici oder Darłowo erreichen und dabei einzigartige Dünenlandschaften bewundern.",
      areaTitle: "Die Umgebung von Rusinowo",
      areaText:
        "Unsere Häuser liegen an einem ruhigen Waldrand, der zu Spaziergängen und Naturerlebnissen einlädt. Wir befinden uns in der Nähe von Jarosławiec und Wici.",
      areaText2:
        "Rusinowo ist ein kleines, ruhiges Städtchen an der polnischen Ostseeküste zwischen Darłowo und Jarosławiec. Dank seiner Lage im Herzen des Slowinzischen Nationalparks bietet es einzigartigen Kontakt mit der Natur.",
      learnMore: "Mehr erfahren",
      equipmentTitle: "Hausausstattung",
      equipmentSubtitle: "Alles, was Sie für einen komfortablen Strandurlaub benötigen",
      equipmentDescription:
        "Jedes Ferienhaus ist vollständig ausgestattet und für bis zu 5 Personen vorbereitet.",
      viewGallery: "Galerie ansehen",
      howToFindUs: "So finden Sie uns",
      howToFindUsSubtitle: "Biały Koral - Ferienhäuser in Rusinowo",
      amenities: [
        "TV + Satellit",
        "Glasfaser-Internet",
        "Küche (Induktionskochfeld, Kaffeemaschine, Wasserkocher, Kühl-Gefrierkombination)",
        "Klimaanlage",
        "Waschmaschine",
        "Geschirrspüler",
        "Grill",
        "Kostenloses WLAN im gesamten Feriendorf",
      ],
    },
    features: {
      title: "Unsere Ferienhäuser",
      subtitle:
        "Komfortable Häuser an einem ruhigen Waldrand, etwa 600 Meter vom Meer entfernt. Idealer Standard für Ihren Urlaub.",
      wifiTitle: "Schnelles WLAN",
      wifiDesc: "Kostenloses WLAN im gesamten Feriendorf mit schnellem Glasfaser-Internet",
      capacityTitle: "Häuser für fünf Personen",
      capacityDesc: "Komfortable Häuser für bis zu 5 Personen mit vollständiger Ausstattung",
      kitchenTitle: "Voll ausgestattete Küche",
      kitchenDesc: "Vollküche mit Kühlschrank, Geschirrspüler, Induktionskochfeld und Kaffeemaschine",
    },
    pricing: {
      pageTitle: "Preisliste",
      pageSubtitle: "Saisonale Preise pro Ferienhaus pro Nacht. Buchen Sie noch heute!",
      perNight: "pro Nacht",
      depositTitle: "Anzahlung",
      depositText: "Bei der Buchung erheben wir eine Anzahlung von",
      depositAmount: "30% des Aufenthaltswerts",
      infoTitle: "Zusätzliche Informationen",
      infoItems: [
        "Preise gelten für das gesamte Haus (bis zu 5 Personen)",
        "Haustiere willkommen (nach vorheriger Absprache)",
        "Kostenlose Parkplätze",
        "WLAN inklusive",
        "Mindestaufenthalt: 3 Nächte in der Saison",
      ],
      bookNow: "Jetzt buchen",
      contactForReservation: "Kontakt für Reservierung",
      pricingTableTitle: "Preisliste 2025",
    },
    contact: {
      pageTitle: "Kontakt",
      pageSubtitle: "Nehmen Sie Kontakt auf — wir beantworten gerne alle Ihre Fragen",
      sectionTitle: "Kontaktieren Sie uns",
      sectionSubtitle:
        "Wir stehen Ihnen zur Verfügung und beantworten gerne alle Fragen zu Buchungen und Ihrem Aufenthalt.",
      callUs: "Rufen Sie uns an",
      emailUs: "Schreiben Sie uns",
      visitUs: "Besuchen Sie uns",
      phoneHours: "Täglich von 8:00–20:00 Uhr erreichbar",
      responseTime: "Wir antworten innerhalb von 24 Stunden",
    },
    reservation: {
      pageTitle: "Reservierung",
      pageSubtitle: "Buchen Sie Ihren Aufenthalt in Biały Koral",
      formTitle: "Reservierungsformular",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      phone: "Telefon",
      checkIn: "Anreisedatum",
      checkOut: "Abreisedatum",
      guests: "Anzahl der Gäste",
      pets: "Reisen Sie mit einem Haustier?",
      yes: "Ja",
      no: "Nein",
      message: "Zusätzliche Informationen",
      submit: "Anfrage senden",
      successTitle: "Vielen Dank für Ihre Reservierung!",
      successMessage:
        "Wir werden uns in Kürze mit Ihnen in Verbindung setzen, um die Details Ihres Aufenthalts zu bestätigen.",
      sending: "Wird gesendet...",
    },
    notFound: {
      title: "Seite nicht gefunden",
      message: "Entschuldigung, wir können die gesuchte Seite nicht finden.",
      backHome: "Zurück zur Startseite",
    },
  },

  UA: {
    nav: {
      home: "Головна",
      gallery: "Галерея",
      pricing: "Ціни",
      contact: "Контакт",
      reservation: "Бронювання",
      ourResorts: "Наші курорти",
      language: "Мова",
    },
    footer: {
      contactUs: "Зв'яжіться з нами",
      location: "Місцезнаходження",
      languages: "Мови",
      allRightsReserved: "Всі права захищені.",
    },
    hero: {
      subtitle: "Відпочинкові будиночки біля моря",
      description:
        "Відкрийте для себе ідеальне місце для відпочинку в Русінові. Комфортабельні будиночки в оточенні лісу, всього за 600 метрів від пляжу Балтійського моря. Насолоджуйтесь спокоєм природи та близькістю моря.",
      bookNow: "Забронювати зараз",
    },
    home: {
      introTitle: "Biały Koral — Відпочинкові будиночки біля моря",
      introText:
        "Запрошуємо до наших комфортабельних відпочинкових будиночків у Русінові. Ідеальне місце для сімейного відпочинку в оточенні прекрасної природи, з легким доступом до пляжу та численних туристичних атракцій.",
      petsTitle: "Відпочинок з тваринами",
      petsText:
        "Ми приймаємо домашніх тварин за попереднім повідомленням. Ваші улюбленці повинні перебувати під постійним наглядом протягом усього перебування.",
      petsText2:
        "Пляж у Русінові ідеально підходить для прогулянок з собаками. Широка смуга піску дозволяє вільно гратися, а чисте повітря та морський бриз порадують вашого собаку.",
      cyclingTitle: "Велопрогулянки біля моря",
      cyclingText:
        "Відкрийте для себе мальовничі велосипедні маршрути навколо Русінова. Прогулянки через соснові ліси, прибережні стежки та мальовничі маршрути до сусідніх курортів подарують незабутні враження.",
      cyclingText2:
        "Регіон Словінського національного парку пропонує кілометри безпечних велосипедних доріжок. Ви можете дістатися до Ярославця, Виці чи Дарлова, милуючись унікальними пейзажами дюн та прибережних луків.",
      areaTitle: "Околиці Русінова",
      areaText:
        "Наші будиночки розташовані в тихому місці біля лісу, який запрошує на спокійні прогулянки та контакт із природою. Ми знаходимося поблизу Ярославця та Виці.",
      areaText2:
        "Русінів — це маленьке, спокійне містечко на польському узбережжі Балтійського моря, розташоване між Дарловом та Ярославцем. Завдяки розташуванню в серці Словінського національного парку, він пропонує унікальний контакт із природою.",
      learnMore: "Дізнатися більше",
      equipmentTitle: "Обладнання будиночків",
      equipmentSubtitle: "Все необхідне для комфортного відпочинку біля моря",
      equipmentDescription:
        "Кожен будиночок повністю обладнаний і підготовлений для перебування до 5 осіб.",
      viewGallery: "Переглянути галерею",
      howToFindUs: "Як нас знайти",
      howToFindUsSubtitle: "Biały Koral - Відпочинкові будиночки в Русінові",
      amenities: [
        "Телевізор + супутник",
        "Оптоволоконний інтернет",
        "Кухня (індукційна плита, кавоварка, чайник, холодильник з морозилкою)",
        "Кондиціонер",
        "Пральна машина",
        "Посудомийна машина",
        "Барбекю",
        "Безкоштовний Wi-Fi на території",
      ],
    },
    features: {
      title: "Наші будиночки",
      subtitle:
        "Комфортабельні будиночки в тихому місці біля лісу, приблизно за 600 метрів від моря.",
      wifiTitle: "Швидкий Wi-Fi",
      wifiDesc: "Безкоштовний Wi-Fi на всій території з швидким оптоволоконним інтернетом",
      capacityTitle: "Будиночки для п'яти осіб",
      capacityDesc: "Комфортабельні будиночки для максимум 5 осіб з повним обладнанням",
      kitchenTitle: "Повністю обладнана кухня",
      kitchenDesc: "Повна кухня з холодильником, посудомийною машиною, індукційною плитою та кавоваркою",
    },
    pricing: {
      pageTitle: "Ціни",
      pageSubtitle: "Сезонні ціни за будиночок за добу. Бронюйте вже сьогодні!",
      perNight: "за добу",
      depositTitle: "Завдаток",
      depositText: "При бронюванні ми стягуємо завдаток у розмірі",
      depositAmount: "30% вартості перебування",
      infoTitle: "Додаткова інформація",
      infoItems: [
        "Ціни стосуються всього будиночка (до 5 осіб)",
        "Домашні тварини вітаються (за попередньою домовленістю)",
        "Безкоштовні місця для паркування",
        "Wi-Fi включено",
        "Мінімальний термін перебування: 3 ночі в сезоні",
      ],
      bookNow: "Забронювати зараз",
      contactForReservation: "Зв'яжіться для бронювання",
      pricingTableTitle: "Ціни 2025",
    },
    contact: {
      pageTitle: "Контакт",
      pageSubtitle: "Зв'яжіться з нами — ми з радістю відповімо на всі ваші запитання",
      sectionTitle: "Зв'яжіться з нами",
      sectionSubtitle: "Ми до вашіх послуг і з радістю відповімо на будь-які запитання щодо бронювання та перебування.",
      callUs: "Зателефонуйте нам",
      emailUs: "Напишіть нам",
      visitUs: "Відвідайте нас",
      phoneHours: "Доступні щодня 8:00–20:00",
      responseTime: "Ми відповідаємо протягом 24 годин",
    },
    reservation: {
      pageTitle: "Бронювання",
      pageSubtitle: "Забронюйте своє перебування в Biały Koral",
      formTitle: "Форма бронювання",
      firstName: "Ім'я",
      lastName: "Прізвище",
      email: "Електронна пошта",
      phone: "Телефон",
      checkIn: "Дата заїзду",
      checkOut: "Дата виїзду",
      guests: "Кількість гостей",
      pets: "Чи їдете з домашньою твариною?",
      yes: "Так",
      no: "Ні",
      message: "Додаткова інформація",
      submit: "Надіслати запит",
      successTitle: "Дякуємо за бронювання!",
      successMessage: "Ми зв'яжемося з вами найближчим часом, щоб підтвердити деталі перебування.",
      sending: "Надсилання...",
    },
    notFound: {
      title: "Сторінку не знайдено",
      message: "Вибачте, ми не можемо знайти сторінку, яку ви шукаєте.",
      backHome: "Повернутися на головну",
    },
  },

  CS: {
    nav: {
      home: "Domů",
      gallery: "Galerie",
      pricing: "Ceník",
      contact: "Kontakt",
      reservation: "Rezervace",
      ourResorts: "Naše střediska",
      language: "Jazyk",
    },
    footer: {
      contactUs: "Kontaktujte nás",
      location: "Poloha",
      languages: "Jazyky",
      allRightsReserved: "Všechna práva vyhrazena.",
    },
    hero: {
      subtitle: "Rekreační chaty u moře",
      description:
        "Objevte ideální místo pro dovolenou v Rusinowě. Pohodlné chaty obklopené lesem, pouhých 600 metrů od baltské pláže. Užívejte si klid přírody a blízkost moře.",
      bookNow: "Rezervovat nyní",
    },
    home: {
      introTitle: "Biały Koral — Rekreační chaty u moře",
      introText:
        "Zveme vás do našich pohodlných rekreačních chat v Rusinowě. Ideální místo pro rodinnou dovolenou v krásné přírodě s snadným přístupem na pláž a k četným turistickým atrakcím.",
      petsTitle: "Pobyt se zvířetem",
      petsText:
        "Přijímáme zvířata po předchozím nahlášení. Vaši mazlíčci musí být po celou dobu pobytu pod stálým dohledem. Poskytujeme přátelské prostředí pro celou rodinu.",
      petsText2:
        "Pláž v Rusinowě je ideální pro procházky se psy. Široký pás písku umožňuje volnou hru a čistý vzduch a mořský vánek potěší vašeho psa na baltské dovolené.",
      cyclingTitle: "Cykloturistika u moře",
      cyclingText:
        "Objevte malebné cyklistické trasy v okolí Rusinowy. Výlety přes borové lesy, pobřežní stezky a malebné trasy spojující naši vesnici se sousedními letovišti přinesou nezapomenutelné zážitky.",
      cyclingText2:
        "Oblast Słowiński národního parku nabízí kilometry bezpečných cyklistických stezek. Můžete se dostat do Jarosławce, Wici nebo Darłowa a obdivovat cestou jedinečné krajiny dun.",
      areaTitle: "Okolí Rusinowy",
      areaText:
        "Naše chaty jsou situovány na tichém místě u lesa, který vybízí k poklidným procházkám a kontaktu s přírodou. Nacházíme se poblíž Jarosławce a Wici.",
      areaText2:
        "Rusinowo je malé, klidné město na polském baltském pobřeží, ležící mezi Darłowem a Jarosławcem. Díky poloze v srdci Słowiński národního parku nabízí jedinečný kontakt s přírodou.",
      learnMore: "Zjistit více",
      equipmentTitle: "Vybavení chat",
      equipmentSubtitle: "Vše, co potřebujete k pohodlné dovolené u moře",
      equipmentDescription:
        "Každá chata je plně vybavena a připravena pro pobyt až 5 osob.",
      viewGallery: "Zobrazit galerii",
      howToFindUs: "Jak nás najít",
      howToFindUsSubtitle: "Biały Koral - Rekreační chaty v Rusinowě",
      amenities: [
        "TV + satelit",
        "Optická internet",
        "Kuchyň (indukční vařič, kávovar, rychlovarná konvice, lednička s mrazákem)",
        "Klimatizace",
        "Pračka",
        "Myčka nádobí",
        "Gril",
        "Bezplatné Wi-Fi v areálu",
      ],
    },
    features: {
      title: "Naše chaty",
      subtitle:
        "Pohodlné chaty na tichém místě u lesa, asi 600 metrů od moře. Ideální standard pro váš odpočinek.",
      wifiTitle: "Rychlé Wi-Fi",
      wifiDesc: "Bezplatné Wi-Fi v celém areálu s rychlou optickou sítí",
      capacityTitle: "Chaty pro pět osob",
      capacityDesc: "Pohodlné chaty pro maximálně 5 osob s plným vybavením",
      kitchenTitle: "Plně vybavená kuchyň",
      kitchenDesc: "Plná kuchyň s ledničkou, myčkou, indukčním vařičem a kávovarem",
    },
    pricing: {
      pageTitle: "Ceník",
      pageSubtitle: "Sezónní ceny za chatu za noc. Rezervujte ještě dnes!",
      perNight: "za noc",
      depositTitle: "Záloha",
      depositText: "Při rezervaci vybíráme zálohu ve výši",
      depositAmount: "30 % hodnoty pobytu",
      infoTitle: "Další informace",
      infoItems: [
        "Ceny se týkají celé chaty (až 5 osob)",
        "Zvířata vítána (po předchozí dohodě)",
        "Bezplatná parkovací místa",
        "Wi-Fi v ceně",
        "Minimální délka pobytu: 3 noci v sezóně",
      ],
      bookNow: "Rezervovat nyní",
      contactForReservation: "Kontaktujte nás pro rezervaci",
      pricingTableTitle: "Ceník 2025",
    },
    contact: {
      pageTitle: "Kontakt",
      pageSubtitle: "Kontaktujte nás — rádi odpovíme na všechny vaše dotazy",
      sectionTitle: "Kontaktujte nás",
      sectionSubtitle:
        "Jsme k dispozici a rádi odpovíme na jakékoli dotazy ohledně rezervací a pobytu.",
      callUs: "Zavolejte nám",
      emailUs: "Napište nám",
      visitUs: "Navštivte nás",
      phoneHours: "K dispozici denně 8:00–20:00",
      responseTime: "Odpovídáme do 24 hodin",
    },
    reservation: {
      pageTitle: "Rezervace",
      pageSubtitle: "Zarezervujte si pobyt v Biały Koral",
      formTitle: "Rezervační formulář",
      firstName: "Jméno",
      lastName: "Příjmení",
      email: "E-mail",
      phone: "Telefon",
      checkIn: "Datum příjezdu",
      checkOut: "Datum odjezdu",
      guests: "Počet hostů",
      pets: "Jedete se zvířetem?",
      yes: "Ano",
      no: "Ne",
      message: "Další informace",
      submit: "Odeslat poptávku",
      successTitle: "Děkujeme za rezervaci!",
      successMessage:
        "Brzy vás kontaktujeme, abychom potvrdili podrobnosti vašeho pobytu.",
      sending: "Odesílání...",
    },
    notFound: {
      title: "Stránka nenalezena",
      message: "Omlouváme se, nemůžeme najít stránku, kterou hledáte.",
      backHome: "Zpět na domovskou stránku",
    },
  },
};
