import heroProcessionImg from '../assets/images/flores_hero_procession_1790426146195.jpg';
import flowerOfferingImg from '../assets/images/flores_flower_offering_1790426167705.jpg';
import santacruzanArchImg from '../assets/images/flores_santacruzan_arch_1790426183002.jpg';
import sagalasPortraitImg from '../assets/images/flores_sagalas_portrait_1790426198790.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'procession' | 'offering' | 'arch' | 'sagalas' | 'heritage';
  image: string;
  description: string;
  historicalContext: string;
  keyFact: string;
  aspectRatio: string;
}

export interface HistoricalMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  source: string;
}

export interface SagalaRole {
  order: number;
  title: string;
  translation: string;
  category: 'biblical' | 'virtue' | 'marian' | 'historical';
  attire: string;
  symbol: string;
  meaning: string;
  biblicalReference?: string;
  funFact: string;
}

export interface ProcessionEvent {
  id: string;
  name: string;
  location: string;
  region: 'Metro Manila' | 'Central Luzon' | 'Ilocos Region' | 'Southern Tagalog' | 'Visayas';
  date: string;
  time: string;
  route: string;
  gatheringPoint: string;
  expectedSagalas: number;
  highlight: string;
  status: 'Confirmed' | 'Annual Tradition' | 'Open to Public';
  contactOrParish: string;
}

export interface RegionalTradition {
  province: string;
  region: string;
  title: string;
  distinction: string;
  culturalPractice: string;
  signatureFood: string;
}

export interface BotanicalBloom {
  name: string;
  scientificName: string;
  symbolism: string;
  roleInFlores: string;
  bloomingSeason: string;
  fragranceProfile: string;
}

export interface FiestaCustom {
  title: string;
  tagalogName: string;
  category: 'game' | 'culinary' | 'ritual';
  description: string;
  culturalSignificance: string;
}

export const REGIONAL_TRADITIONS: RegionalTradition[] = [
  {
    province: 'Bulacan',
    region: 'Central Luzon',
    title: 'Cradle of Flores de Mayo & Ang Luwa',
    distinction: 'The birthplace of Padre Mariano Sevilla’s 1865 devotional booklet.',
    culturalPractice: 'Featured the "Luwa"—poetic Tagalog verses chanted by young children dressed as angels standing on raised platforms outside ancestral houses, reciting dramatic rhyming praises to Mary.',
    signatureFood: 'Pastillas de Leche wrapped in intricate papercut pabalat wrappers, and Inipit de Malolos.'
  },
  {
    province: 'Batangas & Southern Tagalog',
    region: 'CALABARZON',
    title: 'Ang Subli & Ang Lutrina sa Bukid',
    distinction: 'Ancient fusion of pre-colonial harvest chants with devotion to the Holy Cross.',
    culturalPractice: 'Features the dramatic "Subli" dance with bamboo castanets (kalatong) honoring the Holy Cross of Bauan and Alitagtag, followed by night processions praying for rain over newly ploughed rice fields.',
    signatureFood: 'Kapeng Barako served with fresh bibingka galapong and kalamay capit.'
  },
  {
    province: 'Pampanga',
    region: 'Central Luzon',
    title: 'Majigangas & Kapampangan Culinary Splendor',
    distinction: 'Monumental papier-mâché giants escorting the royal sagalas.',
    culturalPractice: 'Huge 10-foot-tall movable puppets called "Majigangas" lead the procession through town plazas, dancing alongside marching brass bands and elaborate bamboo arch displays.',
    signatureFood: 'Tibok-tibok (water buffalo milk pudding) and authentic Kapampangan Tamales.'
  },
  {
    province: 'Cavite',
    region: 'CALABARZON',
    title: 'Caracol del Mar y Tierra',
    distinction: 'Maritime fluvial and street dancing procession.',
    culturalPractice: 'The procession sways in a rhythmic waltz known as "Caracol". In coastal towns like Cavite City and Rosario, the Holy Cross is carried onto decorated fishing bancas on Manila Bay before landing for the evening street parade.',
    signatureFood: 'Pancit Choco En Su Tinta (squid-ink pancit) and Quesillo.'
  },
  {
    province: 'Ilocos Sur (Vigan)',
    region: 'Ilocos Region',
    title: 'Inabel Ternos along Calle Crisologo',
    distinction: 'Heritage cobblestone procession under Spanish lantern light.',
    culturalPractice: 'Sagalas wear handwoven Abel Iloco (inabel) fabrics crafted by master weavers. The elder sagalas ride antique horse-drawn kalesas flanked by young men carrying torch lanterns (sulo).',
    signatureFood: 'Vigan Royal Bibingka, Empanada, and Bagnet.'
  },
  {
    province: 'Cebu & Visayas',
    region: 'Central Visayas',
    title: 'Flores de Mayo sa Kabisayaan',
    distinction: 'Sinulog-inflected thanksgiving and Gozos chanting.',
    culturalPractice: 'Devotees weave floral petal carpets (alfombras) on church aisles. After the floral offering, youth perform the "Daygon kay Maria" accompanied by rondalla string ensembles and guitar serenades.',
    signatureFood: 'Puto Maya with ripe Cebu mangoes and hot Sikwate chocolate.'
  }
];

export const BOTANICAL_HERITAGE: BotanicalBloom[] = [
  {
    name: 'Sampaguita',
    scientificName: 'Jasminum sambac',
    symbolism: 'Maternal purity, humility, marital fidelity, and national dignity.',
    roleInFlores: 'The primary flower strung into tight rosary garlands and draped around Marian statues and the wooden cross.',
    bloomingSeason: 'Peak blooms during the warm tropical nights of April to June.',
    fragranceProfile: 'Sweet, intense, intoxicating night-flowering aroma that lingers for days.'
  },
  {
    name: 'Kalachuchi',
    scientificName: 'Plumeria acuminata',
    symbolism: 'Resilience, shelter, rebirth, and eternal springtime devotion.',
    roleInFlores: 'Gathered by neighborhood children from patio trees and scattered into the flower offering baskets (Alay).',
    bloomingSeason: 'Abundant dry-season bloom during April and May.',
    fragranceProfile: 'Velvety citrus-sweet perfume with subtle almond notes.'
  },
  {
    name: 'Rosal',
    scientificName: 'Gardenia jasminoides',
    symbolism: 'Unspoken secret devotion, angelic refinement, and celestial grace.',
    roleInFlores: 'Tucked into the hair of young sagalas and woven into the head wreaths of Reyna de las Flores.',
    bloomingSeason: 'Early monsoon and transition weeks of May.',
    fragranceProfile: 'Heady, rich, creamy floral fragrance cherished in Filipino garden courtyards.'
  },
  {
    name: 'Ilang-Ilang',
    scientificName: 'Cananga odorata',
    symbolism: 'Exotic elegance, tropical hospitality, and native celebration.',
    roleInFlores: 'Hung in cascading golden tassels beneath the bamboo arches (arko) to perfume the evening procession route.',
    bloomingSeason: 'Continuous flowering throughout the summer season.',
    fragranceProfile: 'Lush, spicy-sweet oriental floral scent that spreads widely on the breeze.'
  },
  {
    name: 'Champaca',
    scientificName: 'Magnolia champaca',
    symbolism: 'Sacred consecration, spiritual illumination, and blessing.',
    roleInFlores: 'Golden star-like petals laid directly upon the church chancel steps during the final benediction.',
    bloomingSeason: 'May to August across Philippine lowland provinces.',
    fragranceProfile: 'Warm, honeyed, apricot-tea aroma reminiscent of ancestral colonial gardens.'
  }
];

export const FIESTA_CUSTOMS: FiestaCustom[] = [
  {
    title: 'Ang Pabitin',
    tagalogName: 'Pabitin ng Pagpapala',
    category: 'game',
    description: 'A square bamboo trellis suspended from a high tree or pulley, laden with fresh fruits (mangoes, bananas), sweets, native candies, toys, and coin pouches. The trellis is lowered and hoisted while children leap to snatch treats.',
    culturalSignificance: 'Represents the bountiful harvest bestowed by divine favor and teaches community sharing and communal joy after solemn rites.'
  },
  {
    title: 'Palo Sebo',
    tagalogName: 'Pag-akyat sa Madulas na Kawayan',
    category: 'game',
    description: 'A towering greased bamboo pole is planted in the town plaza with a small prize bag fastened at the very pinnacle. Neighborhood youth attempt to scale the slippery pole through teamwork and endurance.',
    culturalSignificance: 'A traditional festival test of agility, resilience, and good-natured community camaraderie dating back to Spanish colonial town fiestas.'
  },
  {
    title: 'Salo-Salo pagkatapos ng Parada',
    tagalogName: 'Hapag ng Bayanihan',
    category: 'culinary',
    description: 'After the procession and church blessing, the Hermanos (festival sponsors) and parish host a grand community feast featuring Pancit Luglug, Arroz Caldo, freshly steamed Kakanin (Sapin-Sapin, Bibingka, Biko), and Tsokolate de Batirol.',
    culturalSignificance: 'Reinforces the Filipino value of "Pakikisama" and hospitality, where all neighbors—regardless of social standing—dine together at one communal table.'
  },
  {
    title: 'Pabaon ng Banal na Sampaguita',
    tagalogName: 'Pagbabahagi ng Biyaya sa Tahanan',
    category: 'ritual',
    description: 'At the conclusion of the Santacruzan, blessed floral garlands and palm fronds from the arches are carefully distributed to elder devotees and parish families.',
    culturalSignificance: 'Devotees place the dried blossoms on their family home altars (altar ng tahanan) as a year-round sacred reminder of peace, health, and family protection.'
  }
];

export const LUWA_POETRY_ARCHIVE = {
  title: 'Ang Luwa kay Birheng Maria',
  origin: 'Bulakan & Southern Tagalog oral declamation tradition performed during the evening procession.',
  excerpt: [
    'O Mariang sakdal tamis,',
    'Luklukan ng madlang bait,',
    'Sa mundo\'y ikaw ang langit',
    'Na aming pinipintakasi.',
    'Tanggapin yaring bulaklak',
    'Na alay ng aming puso,',
    'Bango nito ay lumaganap',
    'Sa tapat mong mga sinta.'
  ],
  translation: [
    'O Mary, full of utmost sweetness,',
    'Throne of every virtue and grace,',
    'In this world you are the heaven',
    'Whom our souls revere and praise.',
    'Accept these fragrant blossoms',
    'Which our youthful hearts bestow,',
    'May their sweet aroma spread',
    'To all who hold you dear.'
  ],
  context: 'Declaimed with high emotion by a child standing under an arched portico as the Reyna Elena pauses before entering the cathedral.'
};


export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-procession',
    title: 'Ang Maringal na Santacruzan',
    subtitle: 'The Majestic Twilight Procession of Reyna Elena',
    category: 'procession',
    image: heroProcessionImg,
    description: 'Reyna Elena glides under an illuminated floral arko dressed in an ivory-and-gold terno with iconic butterfly sleeves, accompanied by young Prince Constantine holding the Holy Cross.',
    historicalContext: 'Commemorates the 4th-century pilgrimage of Saint Helena to Jerusalem in search of the True Cross of Jesus Christ.',
    keyFact: 'Reyna Elena is traditionally the most coveted and final role in the Santacruzan procession.',
    aspectRatio: '4:3'
  },
  {
    id: 'flower-offering',
    title: 'Alay kay Maria (Flower Offering)',
    subtitle: 'Daily Children’s Devotion at the Colonial Altar',
    category: 'offering',
    image: flowerOfferingImg,
    description: 'Devout Filipino children dressed in white and pastel lace carry baskets of freshly plucked sampaguita, kalachuchi, and rosal blossoms to lay before the Virgin Mary.',
    historicalContext: 'Stemming from Father Mariano Sevilla’s 1865 devotional booklet published in Bulacan, adapting European May devotions into a warm community rite.',
    keyFact: 'Offerings are accompanied by daily catechism lessons and traditional hymn chanting like "Dios Te Salve".',
    aspectRatio: '4:3'
  },
  {
    id: 'bamboo-arch',
    title: 'Sining ng Katutubong Arko',
    subtitle: 'The Ephemeral Architecture of Bamboo & Sampaguita',
    category: 'arch',
    image: santacruzanArchImg,
    description: 'Local artisans spend days bending, carving, and weaving native bamboo poles, draping them with fragrant sampaguita garlands, palm fronds, and battery-lit fairy lamps.',
    historicalContext: 'A uniquely Filipino folk-art tradition blending pre-colonial bamboo craftsmanship with Hispanic festival pageantry.',
    keyFact: 'Each Sagala is escorted beneath her own individual mobile floral arch carried by two escorts.',
    aspectRatio: '4:3'
  },
  {
    id: 'sagalas-court',
    title: 'Korte ng mga Sagala',
    subtitle: 'Marian Titles & Theological Virtues in Filipiniana',
    category: 'sagalas',
    image: sagalasPortraitImg,
    description: 'Filipinas adorned in bespoke ternos and Maria Clara dresses carry biblical and theological emblems: the anchor for hope, the chalice for faith, and the open heart for charity.',
    historicalContext: 'The procession is a living theological catechism designed to visually teach parish communities the Litany of Loreto and Christian virtues.',
    keyFact: 'Over 30 distinct historical and allegorical roles can be featured in a full grand Santacruzan.',
    aspectRatio: '4:3'
  }
];

export const HISTORICAL_FACTS: HistoricalMilestone[] = [
  {
    year: '326 AD',
    title: 'The Finding of the Holy Cross',
    subtitle: 'Pilgrimage of Saint Helena to Calvary',
    description: 'Empress Helena (Flavia Julia Helena Augusta), mother of Emperor Constantine the Great, traveled to Jerusalem. Tradition recounts that excavations at Golgotha uncovered three wooden crosses. When a terminally ill woman touched the third cross and was instantly healed, it was recognized as the True Cross (Santa Cruz).',
    impact: 'Established the feast of the Invention (Finding) of the Holy Cross, celebrated in the Catholic Church on May 3.',
    source: 'Eusebius of Caesarea & Socrates Scholasticus, Ecclesiastical Histories'
  },
  {
    year: '1854',
    title: 'Dogma of the Immaculate Conception',
    subtitle: 'Papal Bull Ineffabilis Deus',
    description: 'Pope Pius IX solemnly defined the Dogma of the Immaculate Conception on December 8, 1854. This sparked a global wave of renewed Marian fervor across the Catholic world, prompting dioceses to dedicate the blooming month of May ("Month of Flowers") to the Virgin Mary.',
    impact: 'Catholic parishes across Latin America and the Spanish East Indies began formal month-long floral devotions.',
    source: 'Apostolic Constitution Ineffabilis Deus, Vatican Archives'
  },
  {
    year: '1865',
    title: 'Padre Mariano Sevilla’s Devotional Manual',
    subtitle: 'Mariquina & Bulakan, Bulacan',
    description: 'Father Mariano Sevilla, a Filipino secular priest and patriot from Bulakan, Bulacan, authored "Flores de Mayo o Mariquít na Bulaclac na sa Pagninilaynilay sa Buong Buán nang Mayo ay Inihahandog nang mga Devoto cay Maria Santisima." He adapted the Italian Jesuit Father Muzzarelli’s devotions into lyrical Tagalog prose.',
    impact: 'Codified the daily schedule of prayers, flower-tossing hymns, and catechism classes still practiced in barangays today.',
    source: 'National Library of the Philippines Rare Books Collection'
  },
  {
    year: 'Late 1800s',
    title: 'Synthesis: Flores de Mayo Meets Santacruzan',
    subtitle: 'From Quiet Chancel to Grand Town Pageantry',
    description: 'While Flores de Mayo refers strictly to the month-long daily flower offerings to Mary, Filipino communities fused it with the theatrical Santacruzan pageant commemorating Queen Helena. The final days of May transformed into a vibrant cultural parade featuring town muses, brass bands, and bamboo arches.',
    impact: 'Created the premier Philippine religious folk festival celebrated throughout towns and barangays nationwide.',
    source: 'Historical Commission of the Philippines & Parish Records'
  },
  {
    year: 'Modern Era',
    title: 'Cultural Heritage & Global Diaspora',
    subtitle: 'From Manila to Worldwide Filipino Communities',
    description: 'Today, Santacruzan is recognized by the National Commission for Culture and the Arts (NCCA) as an intangible cultural heritage pillar. Overseas Filipino communities in New York, London, Toronto, and Rome host annual processions, showcasing Filipino couture, unity, and deep-seated devotion.',
    impact: 'Preserves indigenous hand-woven fabrics, Filipiniana fashion evolution, and generational community bonding.',
    source: 'NCCA Intangible Cultural Heritage Registry'
  }
];

export const SAGALAS_ROSTER: SagalaRole[] = [
  {
    order: 1,
    title: 'Methuselah (Metusela)',
    translation: 'The Oldest Man in Scripture',
    category: 'biblical',
    attire: 'Long flowing biblical robes with a prominent gray beard and rustic staff.',
    symbol: 'Clay pot with burning coals or incense, toasting grains.',
    meaning: 'Symbolizes the fleeting nature of earthly life and reminds onlookers that worldly glory fades while spiritual virtue endures.',
    biblicalReference: 'Genesis 5:27 (Lived 969 years)',
    funFact: 'Traditionally played by an elder who walks at the very head of the procession.'
  },
  {
    order: 2,
    title: 'Reyna Banderada',
    translation: 'The Flag Bearer Queen',
    category: 'historical',
    attire: 'A bright yellow, blue, or red Filipiniana gown reflecting national pride.',
    symbol: 'The National Flag of the Philippines.',
    meaning: 'Represents the country’s devotion to the Mother of God, honoring Mary as the patroness of the Philippine archipelago.',
    funFact: 'Introduced during the American colonial period when the Philippine flag was permitted in public parades.'
  },
  {
    order: 3,
    title: 'Aetas / Katutubong Pilipino',
    translation: 'Indigenous Peoples of the Islands',
    category: 'historical',
    attire: 'Traditional native indigenous woven garments or tribal regalia.',
    symbol: 'Woven bamboo basket containing native seeds and harvested grains.',
    meaning: 'Honors the pre-Hispanic indigenous ancestors of the Philippines who inhabited the archipelago before colonization.',
    funFact: 'A tribute to the roots and cultural foundation of the Filipino nation.'
  },
  {
    order: 4,
    title: 'Reyna Mora',
    translation: 'The Muslim Queen',
    category: 'historical',
    attire: 'Exquisite regal Muslim Mindanao silk attire (Inaul or Yakan weaves) with golden headdress.',
    symbol: 'Intricate brassware or decorative fan.',
    meaning: 'Represents the Islamic heritage of the Philippines, signifying inter-cultural coexistence and peace in Mindanao.',
    funFact: 'Highlights the pluralistic fabric of Philippine history and heritage.'
  },
  {
    order: 5,
    title: 'Reyna Fe',
    translation: 'Queen Faith',
    category: 'virtue',
    attire: 'Pristine white or ivory Maria Clara dress with veil.',
    symbol: 'A wooden cross or the Holy Bible.',
    meaning: 'The first of the Theological Virtues (1 Corinthians 13:13), representing unwavering trust in God.',
    biblicalReference: 'Hebrews 11:1',
    funFact: 'White is chosen to depict purity of conviction and belief.'
  },
  {
    order: 6,
    title: 'Reyna Esperanza',
    translation: 'Queen Hope',
    category: 'virtue',
    attire: 'Emerald green or pale seafoam terno representing new life.',
    symbol: 'An anchor (traditionally made of gilded wood or brass).',
    meaning: 'The second Theological Virtue, symbolizing steadfast anchor for the soul amidst life’s tempests.',
    biblicalReference: 'Hebrews 6:19 ("We have this hope as an anchor for the soul")',
    funFact: 'The anchor symbol is one of the oldest Christian catacomb motifs.'
  },
  {
    order: 7,
    title: 'Reyna Caridad',
    translation: 'Queen Charity / Love',
    category: 'virtue',
    attire: 'Crimson, rose-pink, or coral terno symbolizing heartfelt compassion.',
    symbol: 'A flaming red heart or pelican emblem.',
    meaning: 'The greatest of the Theological Virtues; represents self-sacrificing maternal and communal love.',
    biblicalReference: '1 Corinthians 13:13 ("The greatest of these is love")',
    funFact: 'Often walks between Faith and Hope as the crowning virtue.'
  },
  {
    order: 8,
    title: 'Reyna Abogada',
    translation: 'Queen Advocate',
    category: 'marian',
    attire: 'Sophisticated midnight blue or black terno with gold embroidery, graduation mortarboard or toga mantle.',
    symbol: 'A large book of law and scales of justice.',
    meaning: 'Portrays Mary as Advocata Nostra (Our Advocate in Heaven) who intercedes for the marginalized and sinners.',
    funFact: 'Traditionally assigned to female law students or newly passed attorneys from the parish.'
  },
  {
    order: 9,
    title: 'Reyna Sentenciada',
    translation: 'The Condemned Queen',
    category: 'marian',
    attire: 'Subdued gown, often with hands loosely bound by a delicate silk cord or ribbon.',
    symbol: 'Bound wrists guided by two Roman soldiers or guardians.',
    meaning: 'Represents innocents convicted unjustly, evoking Mary’s solidarity with human suffering and persecution.',
    funFact: 'One of the most theatrical and emotionally resonant figures in traditional tagalog Santacruzans.'
  },
  {
    order: 10,
    title: 'Infanta Judith & Reyna Esther',
    translation: 'Biblical Heroines of Deliverance',
    category: 'biblical',
    attire: 'Royal biblical regalia with crown, velvet cape, and golden embroidery.',
    symbol: 'Judith carries a simulated sword; Esther holds a golden royal scepter.',
    meaning: 'Old Testament heroines who saved their people through prayer, courage, and divine favor, prefiguring Mary’s role.',
    biblicalReference: 'Book of Judith & Book of Esther',
    funFact: 'Judith is often escorted by a young page representing the handmaid of Bethulia.'
  },
  {
    order: 11,
    title: 'Reyna de las Flores',
    translation: 'Queen of Flowers',
    category: 'marian',
    attire: 'A breathtaking pastel gown completely embellished with fabric floral rosettes and pearl beading.',
    symbol: 'A lush bouquet of sampaguita, orchids, and Philippine wild roses.',
    meaning: 'The personification of the month of May and the floral tributes presented daily by parish youth.',
    funFact: 'Often accompanied by small angels (angelitos) scattering fragrant petals along the stone streets.'
  },
  {
    order: 12,
    title: 'Reyna Emperatriz',
    translation: 'Queen Empress',
    category: 'historical',
    attire: 'Regal Roman-Byzantine inspired terno with jeweled imperial crown and long velvet train.',
    symbol: 'A royal orb surmounted by a cross and scepter.',
    meaning: 'Depicts Empress Helena’s title granted by her son, Emperor Constantine the Great, after declaring Christianity legal.',
    funFact: 'Walks directly ahead of Reyna Elena as her imperial predecessor.'
  },
  {
    order: 13,
    title: 'Reyna Elena & Prinsipe Constantino',
    translation: 'Queen Helena & Prince Constantine',
    category: 'historical',
    attire: 'The grandest ivory, champagne, and gold Philippine terno with long hand-beaded cathedral veil; Prince wears an imperial sash or formal Barong Tagalog.',
    symbol: 'A dark polished wooden cross held reverently between both hands.',
    meaning: 'The supreme climax of the Santacruzan; commemorates the triumph of finding the True Cross in Jerusalem.',
    funFact: 'Constantino is traditionally portrayed by a young boy relative, symbolizing the young future Roman Emperor.'
  }
];

export const PROCESSION_SCHEDULE: ProcessionEvent[] = [
  {
    id: 'bulacan-historic',
    name: 'Maringal na Santacruzan de Malolos',
    location: 'Malolos Cathedral & Historic Kamistisuhan District',
    region: 'Central Luzon',
    date: 'May 31, 2026',
    time: '5:30 PM - 9:30 PM',
    route: 'Starts at Basilica Minore de Malolos -> Paseo del Congreso -> Calle Pariancillo -> Ancestral Houses Plaza',
    gatheringPoint: 'Cathedral Patio (Plaza Rizal)',
    expectedSagalas: 36,
    highlight: 'Heritage procession passing preserved Spanish-era ancestral mansions lit by authentic tin lanterns.',
    status: 'Confirmed',
    contactOrParish: 'Diocese of Malolos Heritage Commission'
  },
  {
    id: 'pasig-grand',
    name: 'Pasig City Grand Archdiocesan Santacruzan',
    location: 'Immaculate Conception Cathedral, Pasig City',
    region: 'Metro Manila',
    date: 'May 30, 2026',
    time: '6:00 PM - 9:00 PM',
    route: 'Plaza Rizal -> Caruncho Avenue -> Mabini Street -> Cathedral Courtyard',
    gatheringPoint: 'Pasig City Museum Grounds',
    expectedSagalas: 32,
    highlight: 'Spectacular brass marching bands (Banda Matanda & Banda Zabat) and 20-foot bamboo arches.',
    status: 'Annual Tradition',
    contactOrParish: 'Pasig Cathedral Pastoral Council'
  },
  {
    id: 'intramuros-manila',
    name: 'Grand Marian Flores de Mayo ng Maynila',
    location: 'San Agustin Church & Plaza San Luis, Intramuros',
    region: 'Metro Manila',
    date: 'May 24, 2026',
    time: '4:30 PM - 8:30 PM',
    route: 'San Agustin Church -> General Luna Street -> Baluarte de San Diego -> Plaza Roma / Manila Cathedral',
    gatheringPoint: 'San Agustin Parish Quadrangle',
    expectedSagalas: 40,
    highlight: 'Traditional Philippine couture showcase by renowned artisans alongside solemn candlelit litanies.',
    status: 'Confirmed',
    contactOrParish: 'Intramuros Administration & San Agustin Parish'
  },
  {
    id: 'vigan-heritage',
    name: 'Vigan Heritage Santacruzan & Alay sa Birhen',
    location: 'Calle Crisologo, Vigan City, Ilocos Sur',
    region: 'Ilocos Region',
    date: 'May 28, 2026',
    time: '6:30 PM - 9:30 PM',
    route: 'Plaza Salcedo -> Calle Crisologo Cobblestone Corridor -> St. Paul Metropolitan Cathedral',
    gatheringPoint: 'Plaza Burgos Pavilion',
    expectedSagalas: 25,
    highlight: 'Atmospheric horse-drawn kalesas carrying the elder sagalas under warm vintage streetlamps.',
    status: 'Annual Tradition',
    contactOrParish: 'Vigan Tourism & Heritage Society'
  },
  {
    id: 'quezon-city-barangay',
    name: 'Pista ng Santacruzan sa San Francisco del Monte',
    location: 'Santuario de San Pedro Bautista, Quezon City',
    region: 'Metro Manila',
    date: 'May 17, 2026',
    time: '5:00 PM - 8:00 PM',
    route: 'San Pedro Bautista Street -> Roosevelt Avenue -> Del Monte Market Loop -> Church Patio',
    gatheringPoint: 'Parish Parish Center Garden',
    expectedSagalas: 28,
    highlight: 'Youth and children’s flower offering ceremony (Alay) before the community-wide evening procession.',
    status: 'Open to Public',
    contactOrParish: 'Franciscan Friars of SFDM'
  },
  {
    id: 'cebu-florecida',
    name: 'Flores de Mayo sa Sugbo',
    location: 'Basilica Minore del Santo Niño, Cebu City',
    region: 'Visayas',
    date: 'May 23, 2026',
    time: '4:00 PM - 7:30 PM',
    route: 'Basilica Pilgrim Center -> Osmeña Boulevard -> Magellan’s Cross Pavilion -> Cathedral Plaza',
    gatheringPoint: 'Basilica Pilgrim Center Steps',
    expectedSagalas: 30,
    highlight: 'Visayan Marian songs and traditional sinulog-beat thanksgiving dance following the benediction.',
    status: 'Annual Tradition',
    contactOrParish: 'Augustinian Fathers of Cebu'
  }
];

export const TRADITIONS_LIST = [
  {
    id: 'alay',
    name: 'Alay kay Maria (Daily Offering)',
    timing: 'Every afternoon of May at 4:30 PM',
    overview: 'Young children gather in white attire holding handwoven baskets. As the choir sings, they walk toward the altar one by one, scattering or offering fresh flowers at the feet of the Virgin Mary.',
    significance: 'Teaches children reverence, gratitude, and community participation through natural beauty and prayer.'
  },
  {
    id: 'santacruzan',
    name: 'Ang Santacruzan (The Holy Cross Pageant)',
    timing: 'Culminating weekend of May (often May 31)',
    overview: 'A magnificent theatrical procession featuring town maidens as biblical figures, virtues, and queens, accompanied by candle-bearing devotees and lively brass bands playing "Dios Te Salve".',
    significance: 'Honors Saint Helena’s discovery of the True Cross while uniting neighborhoods in artistic fellowship.'
  },
  {
    id: 'arko-making',
    name: 'Paggawa ng Katutubong Arko (Bamboo Arch Crafting)',
    timing: '3 to 5 days before the procession',
    overview: 'Neighborhood youth and master carpenters construct lightweight wooden or bamboo arches, dressing them with fragrant sampaguita strings, yellow marigolds, and crepe paper rosettes.',
    significance: 'Preserves traditional Filipino ephemeral architectural crafts and promotes bayanihan spirit.'
  },
  {
    id: 'pabitin',
    name: 'Pabitin & Harana pagkatapos ng Parada',
    timing: 'Post-procession community gathering',
    overview: 'After the religious benediction, a wooden lattice laden with native treats, fruits, and toys is suspended from a bamboo pole and lowered for children to leap and grab.',
    significance: 'Brings joyous communal festivity, sharing the blessings of harvest and sweet fellowship.'
  }
];

export const DIOS_TE_SALVE_LYRICS = {
  title: 'Dios Te Salve Maria (Hail Mary)',
  origin: 'Traditional Hispanic-Filipino processional hymn sung in a rhythmic, repeating 3/4 cadence.',
  spanish: [
    'Dios te salve, María,',
    'llena eres de gracia;',
    'el Señor es contigo;',
    'bendita tú eres',
    'entre todas las mujeres,',
    'y bendito es el fruto',
    'de tu vientre, Jesús.',
    'Santa María, Madre de Dios,',
    'ruega por nosotros pecadores,',
    'ahora y en la hora',
    'de nuestra muerte. Amén.'
  ],
  tagalog: [
    'Aba Ginoong Maria,',
    'napupuno ka ng grasya;',
    'ang Panginoon ay sumasa-iyo;',
    'bukod kang pinagpala',
    'sa babaeng lahat,',
    'at pinagpala naman',
    'ang iyong Anak na si Hesus.',
    'Santa Maria, Ina ng Diyos,',
    'ipanalangin mo kaming makasalanan,',
    'ngayon at kung kami\'y mamamatay. Amen.'
  ]
};

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'Who was the Filipino secular priest who authored the 1865 devotional manual that popularized Flores de Mayo?',
    options: ['Padre Mariano Sevilla', 'Padre Jose Burgos', 'Padre Pedro Pelaez', 'Padre Jacinto Zamora'],
    correctAnswer: 0,
    explanation: 'Padre Mariano Sevilla from Bulakan, Bulacan translated and adapted Father Muzzarelli\'s devotional work into lyrical Tagalog in 1865.'
  },
  {
    question: 'Which queen carries the Holy Cross and serves as the crowning climax of the Santacruzan procession?',
    options: ['Reyna de las Flores', 'Reyna Elena', 'Reyna Emperatriz', 'Reyna Banderada'],
    correctAnswer: 1,
    explanation: 'Reyna Elena, accompanied by Prince Constantine, is the supreme queen of the Santacruzan carrying the True Cross.'
  },
  {
    question: 'What is the national flower of the Philippines that is famously strung into fragrant garlands for Flores de Mayo?',
    options: ['Waling-waling', 'Sampaguita', 'Ilang-ilang', 'Gumamela'],
    correctAnswer: 1,
    explanation: 'Sampaguita (Jasminum sambac) is the national flower and the quintessential bloom offered to Mary during Flores de Mayo.'
  },
  {
    question: 'What do the three queens Reyna Fe, Reyna Esperanza, and Reyna Caridad symbolize?',
    options: ['The Three Graces of Greek mythology', 'The Theological Virtues (Faith, Hope, Charity)', 'The three major island groups of the Philippines', 'The seasons of the harvest'],
    correctAnswer: 1,
    explanation: 'They represent the three Theological Virtues from 1 Corinthians 13:13: Faith (Fe), Hope (Esperanza), and Charity (Caridad).'
  },
  {
    question: 'What historic 4th-century event does the Santacruzan celebrate?',
    options: ['The building of Saint Peter’s Basilica', 'The Finding of the True Cross by Saint Helena in Jerusalem', 'The baptism of Emperor Constantine', 'The Council of Nicaea'],
    correctAnswer: 1,
    explanation: 'Santacruzan commemorates Queen Helena’s successful search in 326 AD for the True Cross of Christ in Jerusalem.'
  }
];
