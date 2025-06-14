const pointsOfInterest = [
    {
        id: 'sendero-principal',
        title: '1. Calle Techada',
        description: 'La Techada. Pocas ciudades en el mundo cuentan con una calle con techo, de hecho es la única en Latinoamérica. ABIERTO TODO EL AÑO (Coordenadas: -30.858938, -64.524438)',
        x: 54.3,
        y: 50.4
    },
    {
        id: 'parque-natural',
        title: '2. Cine Teatro Enrique Muiño',
        description: 'Presenta actividades (cine, teatro,musica y conferencias) durante todo el año. Conoce nuestra cartelera en nuestro Facebook y pagina web. (Coordenadas: -30.858812, -64.524938)',
        x: 50.8,
        y: 50.4
    },
    {
        id: 'mirador-lunar',
        title: '3. Feria de Artesanos',
        description: 'Con 30 años continuos de exposición, es la mas linda y rica feria de artesanias del Valle de Punilla. Del artesano a sus manos, artesanias con valor humano. ABRE EN TEMPORADA TODOS LOS DÍAS DE 19 A 24HS. Chequear horarios durante el resto del año. (Coordenadas: -30.856938, -64.525937)',
        x: 51.5,
        y: 45
    },
    {
        id: 'zona-camping',
        title: '4. Pueblo Encanto',
        description: 'Parque temático de 16 hectareas, que cuenta con un importante castillo hispano-morisco estilo mudéjar. Un acercamiento inedito al arte y la cultura, en un castillo de ensueño. (Coordenadas: -30.852438, -64.529313)',
        x: 44.9,
        y: 34.7
    },
    {
        id: 'emergencia',
        title: '5. Castillo del Comic',
        description: 'Casona antigua de 1905 (ex Hotel Argentino). Alberga hoy miles de piezas de colección. Es el museo de comics más grande del país. Ofrece talleres de dibujo y escultura, juegos de mesa. Restaurante con menú para superhéroes. ABIERTO TODO EL AÑO. (Coordenadas: -30.859063, -64.519937)',
        x: 63.3,
        y: 51.3
    },
    {
        id: 'cascada-1',
        title: '6. Balneario Calabalumba',
        description: 'Balneario con gran arboleda y piletas de agua de vertiente. Ideal para pasar el día en familia. ABIERTO TODO EL AÑO. (Coordenadas: -30.854563, -64.520437)',
        x: 62.3,
        y: 42.9
    },
    {
        id: 'balcon-montal',
        title: '7. Casablanca La Granja',
        description: 'Es un emprendimiento familiar integral para psar el día viviendo una agro experiencia. Podes encontrar animales de granja y huerta organica ¡Una salida ideal para los más pequeños! ABIERTO TODO EL AÑO. (Coordenadas: -30.857438, -64.519563)',
        x: 64.3,
        y: 48.3
    },
    {
        id: 'cueva-antigua',
        title: '8. Cio Centro de Informes Ovni',
        description: 'Organización sin fines de Lucro, dedicada al estudio cientifico e investigación de fenomenos no explicados. Centro de informes especializado, con reconocimiento de trayectoria. Brindan charlas. (Coordenadas: -30.857937, -64.515438)',
        x: 71.7,
        y: 49
    },
    {
        id: 'rio-cristalino',
        title: '9. La Higuerita',
        description: 'El camino de la Higuerita es un circuito por la ladera del Cerro Uritorco boreando el Río Calabalumba, un sendero lleno de vida, rodeado de flota autóctona evoca a la magía y misterio del lugar. ABIERTO TODO EL AÑO. (Coordenadas: -30.856938, -64.505688)',
        x: 94,
        y: 45.6
    },
    {
        id: 'puente-colgante',
        title: '10. Uritorco',
        description: 'Mitico Cerro Uritorco. Tierra de enigmas y misterios que convoca miles de personas al año que se aventuran en este gran desafio y superacion personal. CONSULTAR HORARIOS DE ASCENSO. Requisitos: Calzado acordonado y 1,5 litros de agua por persona (excluyente). Apto para pernoctar en la cima, SOLO CON GUIA HABILITADO. ABIERTO TODO EL AÑO. (Coordenadas: -30.862187, -64.495688)',
        x: 93.5,
        y: 63
    },
    {
        id: 'jardín-botánico',
        title: '11. Huertas Malas',
        description: 'Por la cuesta del Toro. Huertas Malas esta enclavada en una quebrada verde que se ve nitidamente desde un col del Cerro Overo, que permite el descenso. Alli el arroyo corre entre grendes bloques lo que genera la famosa CASCADAS DE LAS GOLONDRINAS, de unos 15. El Balneario La Toma es el punto de partida, desde el que se gana altura en forma constante metros de altura, y LA CUEVA DEL HERMITAÑO. SOLO CON GUIA HABILITADO. (Coordenadas: -30.855438, -64.474812)',
        x: 93.3,
        y: 64.9
    },
    {
        id: 'refugio-montana',
        title: '12. Puesto Pavón',
        description: 'Se encuentra en la ladera este del mitico Cerro Uritorco. Es el lugar ideal para travecias 4x4, trekking, cabalgatas, actividades de montañismo y astroturismo. ABIERTO TODO EL AÑO. (Coordenadas: -30.835437, -64.459937)',
        x: 92.7,
        y: 66.8
    },
    {
        id: 'cascada-gigante',
        title: '13. Casa de Plata',
        description: 'Cueva natural ubicada en el medio de la montaña, a dos horas del Balneario La Toma. Rodeada de paisajes de cuarzo, quebradas y el Río Huertas Malas; y proximo a la Cascada el Caracol. (Coordenadas: -30.861812, -64.478313)',
        x: 93.5,
        y: 68.7
    },
    {
        id: 'roca-fosil',
        title: '14. Dique Los Alazanes',
        description: 'Dique enclavado entre los Cerros. Apto para pesca deportiva de trucha CON DEVOLUCIÓN. ABIERTO TODO EL AÑO. (Coordenadas: -30.885063, -64.458687)',
        x: 95.1,
        y: 70.5
    },
    {
        id: 'observatorio-aves',
        title: '15. Balneario La Toma',
        description: 'Balneario en la base de Cerro Uritorco. Donde se encuentra el Río Calabalumba y la Desembocadura del Dique Los Alazanes. podés recorrerolo y encontrar más de 7 saltos de agua. Se permite acampar solo en zonas permitidas. ABIERTO TODO EL AÑO. (Coordenadas: -30.863188, -64.493688)',
        x: 94.6,
        y: 72.5
    },
    {
        id: 'sendero-noche',
        title: '16. Biblioteca Esoterica El Sendero',
        description: 'Colección de libros alternativos que dificilmente encontrarás en otra Biblioteca. Abierta a todo publico, podés consultar el material que quieras en un cálido espacio de lectura. Cuenta también con mirador. ABIERTO TODO EL AÑO. (Coordenadas: -30.872188, -64.518313)',
        x: 64.5,
        y: 79
    },
    {
        id: 'playa-arena',
        title: '17. Reserva Natural Villa Cielo',
        description: 'Paseo para descubrir el monte, señalización para identificar especies de árboles autóctonos, avistaje de Aves y diferentes vistas de la ciudad. ABIERTO TODO EL AÑO. (Coordenadas: -30.866687, -64.513937)',
        x: 74,
        y: 70
    },
    {
        id: 'fuente-termal',
        title: '18. Agua de Los Palos',
        description: 'Es un paseo de montaña que se encuentra en el Cerro Las Gemelas (a 1350 mts. sobre el nivel del Mar). Es un imperdible complejo para pasar una tarde o un día completo donde podés disfrutar de actividades y servicios. (Coordenadas: -30.886563, -64.497687)',
        x: 61.7,
        y: 94
    },
    {
        id: 'mirador-este',
        title: '19. Finca La Marta',
        description: 'Venta y degustación de vinos Cordobeses y productos naturales de la región. Variedad en picadas regionales. Meriendas de campo. (Coordenadas: -30.869563, -64.530187)',
        x: 36.1,
        y: 72.5
    },
    {
        id: 'bosque-bambú',
        title: '20. Balneario Aguila Blanca',
        description: 'Formado por las aguas del Río Dolores, tipico paisaje serrano enclavado donde comienza el embalse del Dique El Cajón. Cuenta con Parrillas, Sanitarios añosa arboleda y servicio de proveduria. ABIERTO TODO EL AÑO. (Coordenadas: -30.869188, -64.547188)',
        x: 4.1,
        y: 73.2
    },
    {
        id: 'palmeral',
        title: '21. Dique el CajÓn',
        description: 'Playa de lago, ideal vista del atardecer sobre el Uritorco. Pesca de Pejerrey y carpa (NO HACE FALTA DEVOLUCIÓN), windsurf, canotaje y vela. No está permitido el uso de transporte a motor. ABIERTO TODO EL AÑO. (Coordenadas: -30.853437, -64.550313)',
        x: 4.2,
        y: 61.3
    },
    {
        id: 'laguna-espejo',
        title: '22. Club de Pesca La Tapera de Muiño',
        description: 'Apto para pesca de costa - carpa y pejerrey - (NO HACE FALTA DEVOLUCIÓN). Alquiler de botes, venta de articulos de pesca y carnadas. ABIERTO TODO EL AÑO. (Coordenadas: -30.860312, -64.544562)',
        x: 13.9,
        y: 50.2
    },
    {
        id: 'centro-visitantes',
        title: '23. Complejo El Zapato',
        description: 'Escultura granitica natural. Esta piedra es protagonista de leyendas donde se congreganban los caciques, hechiceros y curanderos de todas las tribus para meditar y deliberar sobre asuntos comunes. ABIERTO TODO EL AÑO. (Coordenadas: -30.855812, -64.538313)',
        x: 21.4,
        y: 41
    },
    {
        id: 'campamento-base',
        title: '24. El Paraiso',
        description: 'Balneario donde se puede disfrutar placenteros momentos rodeados de naturaleza, en compañia de los animales del lugar del Río Dolores. Tiene toboganes pequeños en las rocas. Ideal para niños. ABIERTO TODO EL AÑO. (Coordenadas: -30.851687, -64.548812)',
        x: 7.2,
        y: 31.2
    },
    {
        id: 'cascada-velo',
        title: '25. Los Mogotes',
        description: 'Muros de piedra atravesados por el Río Dolores y más adelante el Río Calabalumba aumenta su caudal. Ideal para escaladores que quieren poner a prueba sus técnicas. Cuenta con 300 Vías de escalada. también es un punto especial SKYLINE y TREKKING de riesgo medio alto. PASO DEL INDIO: Un sendero con escaleras de piedra y una cueva de paso angosto, que tras atravesarlos vas a encontrarte con vistas maravillosas. ABIERTO TODO EL AÑO. (Coordenadas: -30.841563, -64.546563)',
        x: 11.5,
        y: 24.9
    },
    {
        id: 'cueva-azul',
        title: '26. Los Paredones',
        description: 'Ideal para la practica de escalada en roca. Se llega por un sendero siguiente al Río Seco, hasta alcanzar Los Paredones que lo caracterizan.Paisaje agreste flora y fauna autoctonas. ABIERTO TODO EL AÑO. (Coordenadas: -30.803438, -64.535562)',
        x: 3.8,
        y: 16
    },
    {
        id: 'mirador-norte',
        title: '27. Laguna Tramontana',
        description: 'Es un rancho de 1800 acondicionado para lograr un restaurante de lujo, en medio del predio de un criadero de truchas, con laguna incluida. Está ubicado al pie de la ladera norte del Cerro Uritorco. Cuenta con una laguna artificial para pasar el día disfrutando del entorno natural. ABIERTO TODO EL AÑO. RESTAURANTE CON RESERVA. (Coordenadas: -30.801687, -64.492063)',
        x: 32.6,
        y: 18.4
    },
    {
        id: 'arbol-milenario',
        title: '28. Los Terrones',
        description: 'Se trata de una formación geológica de arsénicas, conglomerados o masa de ignea que forman un sector de significativa curiosidad. ABIERTO TODO EL AÑO. (Coordenadas: -30.793312, -64.468187)',
        x: 36.4,
        y: 11.2
    },
    {
        id: 'fuente-agua-dulce',
        title: '29. Gruta de Nuestra Señora de Lourdes',
        description: 'Réplica inspirada en el santuario de Francia. (Coordenadas: -30.792938, -64.649062)',
        x: 31.4,
        y: 5.8
    },
    {
        id: 'anfiteatro-natural',
        title: '30. Parque Natural Ongamira',
        description: 'Es un tesoro arqueológico en medio del impactante Valle de Ongamira. Un circuito donde podra apreciar morteros, "La Cueva del Indio" centro ceremonial. Para  lo más aventureros es ideal para trekking. ABIERTO TODO EL AÑO. Con 130 millones de años, este paisaje rojizo de arenisca las Cuevas de Ongamira (o tambien llamadas grutas), contruyen la Qhinta Maravilla Natural de la provincia, y descubrir los diversos aleros arqueológicos. También se puede hacer avistaje de cóndores y cabalgatas. ABIERTO TODO EL AÑO.(Coordenadas: -30.773063, -64.410687)',
        x: 44.1,
        y: 3
    },
    {
        id: 'nidode-condor',
        title: '31. Cerro Colchiqui',
        description: 'El Cerro Colchaquí, antes llamado Charalqueta, Cerro sagrado para el pueblo comechingón. ABIERTO TODO EL AÑO. SI HAY NIEBLA NO SE PERMITE EL ACCESO AL CERRO. (Coordenadas: -30.774563, -64.405313)',
        x: 46.1,
        y: 7.3
    },
    {
        id: 'cueva-humedad',
        title: '32. Sitio Arqueólogico Alero Deodoro Roca',
        description: 'Museo de gran contenido histórico del lugar y mostrar de forma simple los sucesos que cambiaron a la vida de Punilla. El vicitante puede disfrutar de una importante pinacoteca y de su extensa colección. ABIERTO TODO EL AÑO. (Coordenadas: -30.777437, -64.387062)',
        x: 48.5,
        y: 6.4
    },
    {
        id: 'mirador-oculto',
        title: '33. Puertas del Cielo',
        description: 'En el Valle de Ongamira. Ideal para astroturismo, misterio y conexión ancestral. ABIERTO TODO EL AÑO. (Coordenadas: -30.778062, -64.358187)',
        x: 57.4,
        y: 7
    },
    {
        id: 'sendero-musgo',
        title: '34. Parroquia de San Antonio de Padua',
        description: 'La Parroquia San Antonio de Padua es la iglesia principal de Capilla del Monte. Construida entre los años 1695 y 1719 por mandato del Capitán Antonio de Ceballos, se edificó provisoriamente como capilla y estaba echa de adobe, pero en el año 1908 se contruye finalmente el actual edificio sobre el anterior hecho de paredes de piedra. Podrás contemplar esta obra arquitectónica que además de bella es protagonista de la historia del lugar. (Coordenadas: -30.858063, -64.520313)',
        x: 59.5,
        y: 49.3
    },
    {
        id: 'roca-ecos',
        title: '35. Punto Faro',
        description: 'Ubicado sobre las playas del Dique El Cajón, ofrece varios servicios y opciones combinando disfrute, relax y aventura, dentro de un entorno totalmente de naturaleza y con una de las vistas panorámicas mas lindas de nuestros cerros. (Coordenadas: -30.857813, -64.550687)',
        x: 5.6,
        y: 75.6
    },
    {
        id: 'puente-natural',
        title: '36. Espacio Muiño',
        description: 'En la mágica costa del Dique El Cajón, en Capilla del Monte, te espera Espacio Muiño, un lugar único en una casona histórica que combina naturaleza, sabor y relax. (Coordenadas: -30.860813, -64.545063)',
        x: 13.7,
        y: 53.3
    },
    /*{
        id: 'pozo-deseos',
        title: '37. Pozo de los Deseos',
        description: 'Pequeña laguna cristalina donde los visitantes lanzan monedas por tradición. (Coordenadas: -4.5745, -78.137)',
        x: 68,
        y: 38
    },
    {
        id: 'jardín-orquídeas',
        title: '38. Jardín de Orquídeas',
        description: 'Área con más de 50 especies de orquídeas nativas. (Coordenadas: -4.5746, -78.138)',
        x: 78,
        y: 48
    },
    {
        id: 'cascada-susurro',
        title: '39. Cascada del Susurro',
        description: 'Caída de agua donde el sonido parece susurrar palabras. (Coordenadas: -4.5747, -78.139)',
        x: 8,
        y: 58
    },
    {
        id: 'roca-pintada',
        title: '40. Roca Pintada',
        description: 'Pared con pictogramas antiguos de culturas precolombinas. (Coordenadas: -4.5748, -78.140)',
        x: 18,
        y: 68
    },
    {
        id: 'mirador-nubes',
        title: '41. Mirador de las Nubes',
        description: 'Punto alto donde frecuentemente las nubes se posan a nivel del suelo. (Coordenadas: -4.5749, -78.141)',
        x: 28,
        y: 78
    },
    {
        id: 'fuente-ferruginosa',
        title: '42. Fuente Ferruginosa',
        description: 'Manantial con agua rica en hierro que tiñe las rocas de colores. (Coordenadas: -4.5750, -78.142)',
        x: 38,
        y: 8
    },
    {
        id: 'cañon-ventanas',
        title: '43. Cañón de las Ventanas',
        description: 'Formación rocosa con agujeros naturales que crean "ventanas". (Coordenadas: -4.5751, -78.143)',
        x: 48,
        y: 18
    },
    {
        id: 'bosque-cristal',
        title: '44. Bosque de Cristal',
        description: 'Área con rocas de cuarzo que brillan al sol como cristales. (Coordenadas: -4.5752, -78.144)',
        x: 58,
        y: 28
    },
    {
        id: 'sendero-esculturas',
        title: '45. Sendero de las Esculturas',
        description: 'Exhibición al aire libre de esculturas en madera y piedra por artistas locales. (Coordenadas: -4.5753, -78.145)',
        x: 68,
        y: 38
    },
    {
        id: 'lago-mariposas',
        title: '46. Lago de las Mariposas',
        description: 'Espejo de agua rodeado de flores que atraen cientos de mariposas. (Coordenadas: -4.5754, -78.146)',
        x: 78,
        y: 48
    },
    {
        id: 'cueva-estalactitas',
        title: '47. Cueva de Estalactitas',
        description: 'Sistema cavernoso con impresionantes formaciones minerales. (Coordenadas: -4.5755, -78.147)',
        x: 8,
        y: 58
    },
    {
        id: 'mirador-lunar',
        title: '48. Mirador Lunar',
        description: 'Punto privilegiado para observar la luna llena sobre el valle. (Coordenadas: -4.5756, -78.148)',
        x: 18,
        y: 68
    },
    {
        id: 'jardín-pajaros',
        title: '49. Jardín de los Pájaros',
        description: 'Área donde acuden aves cantoras de múltiples especies. (Coordenadas: -4.5757, -78.149)',
        x: 28,
        y: 78
    },
    {
        id: 'roca-equilibrio',
        title: '50. Roca del Equilibrio',
        description: 'Enorme piedra que parece desafiar las leyes de la gravedad. (Coordenadas: -4.5758, -78.150)',
        x: 38,
        y: 10
    },
    {
        id: 'cascada-velo-novia',
        title: '51. Cascada Velo de Novia',
        description: 'Caída de agua delicada y vaporosa que parece un velo de novia. (Coordenadas: -4.5759, -78.151)',
        x: 1000,
        y: 18
    },
    {
        id: 'laberinto-piedra',
        title: '52. Laberinto de Piedra',
        description: 'Formaciones rocosas naturales que crean un pequeño laberinto. (Coordenadas: -4.5760, -78.152)',
        x: 22,
        y: 20
    },
    {
        id: 'charco-estrellas',
        title: '53. Charco de las Estrellas',
        description: 'Pequeño pozo de agua que refleja las estrellas perfectamente de noche. (Coordenadas: -4.5761, -78.153)',
        x: 32,
        y: 30
    },
    {
        id: 'mirador-silencioso',
        title: '54. Mirador Silencioso',
        description: 'Zona tranquila con bancos para meditación y contemplación. (Coordenadas: -4.5762, -78.154)',
        x: 42,
        y: 40
    },
    {
        id: 'sendero-hierbas',
        title: '55. Sendero de las Hierbas',
        description: 'Camino bordado de plantas aromáticas y medicinales. (Coordenadas: -4.5763, -78.155)',
        x: 52,
        y: 50
    },
    {
        id: 'roca-calendario',
        title: '56. Roca Calendario',
        description: 'Formación que marca los solsticios con sombras particulares. (Coordenadas: -4.5764, -78.156)',
        x: 62,
        y: 60
    },
    {
        id: 'pozo-profundo',
        title: '57. Pozo Profundo',
        description: 'Caverna vertical de más de 50 metros de profundidad. (Coordenadas: -4.5765, -78.157)',
        x: 72,
        y: 70
    },
    {
        id: 'bos-ilusiones',
        title: '58. Bosque de las Ilusiones',
        description: 'Área con árboles que juega con la percepción de profundidad. (Coordenadas: -4.5766, -78.158)',
        x: 60,
        y: 15
    },
    {
        id: 'azul',
        title: '59. Laguna Azul',
        description: 'Espejo aguas con tonos celestes por minerales raros. (Coordenadas: -4.5767, -78.159)',
        x: 25,
        y: 35
    },
    {
        id: 'cueva-sonidos',
        title: '60. Cueva de los Sonidos',
        description: 'Formación cústica natural que reproduce sonidos de instrumentos. (Coordenadas: -4.5768, -78.160)',
        x: 75,
        y: 25
    },
    {
        id: 'colibri',
        title: '61. Jardín de Colibríes',
        description: 'Punto permanente para observar múltiples especies de colibríes. (Coordenadas: -4.5769, -78.161)',
        x: 35,
        y: 50
    },
    {
        id: 'mirador-viento',
        title: '62. Mirador del Viento',
        description: 'Vista Volcánica del Valle. (Coordenadas: -4.5770, -78.162)',
        x: 15,
        y: 50
    },
    {
        id: 'cascador-del-viento',
        title: '63. Cascador del Viento',
        description: 'Pasadizo natural donde corren fuertes ráfagas. (Coordenadas: -4.5771, -78.163)',
        x: 5,
        y: 90
    },
    {
        id: 'rio-oculto',
        title: '64. Río Oculto',
        description: 'Tramo especial para snorkel con peces coloridos. (Coordenadas: -4.5772, -78.164)',
        x: 43,
        y: 58
    },
    {
        id: 'arbol-cueva',
        title: '65. Árbol Cueva',
        description: 'Árbol con tronco ahuevado para pájaros. (Coordenadas: -4.5773, -78.165)',
        x: 37,
        y: 55
    },
    {
        id: 'piscos-rupestres',
        title: '66. Galería de Arte Rupestre',
        description: 'Conservación de pinturas aborígenes. (Coordenadas: -4.5774, -78.166)',
        x: 33,
        y: 63
    },
    {
        id: 'piedra-silla',
        title: '67. Piedra Silla',
        description: 'Silla natural con formas de sillas. (Coordenadas: -4.5775, -78.167)',
        x: 43,
        y: 48
    },
    {
        id: 'casc-o-trail',
        title: '68. Casc Otrail',
        description: 'Rápidos de agua turquesa. (Coordenadas: -4.5776, -78.168)',
        x: 78.5,
        y: 50
    },
    {
        id: 'fuente-agua',
        title: '69. Fuente de Agua',
        description: 'Manantial de agua clara en piedra ancestral. (Coordenadas: -4.5777, -78.169)',
        x: 70,
        y: 83
    },
    {
        id: 'pu-erosion',
        title: '70. Puente de Erosión',
        description: 'Creado por la erosión fluvial y agua. (Coordenadas: -4.5778, -78.170)',
        x: 60,
        y: 50
    },
    {
        id: 'mirador-ocaso',
        title: '71. Mirador del Ocaso',
        description: 'Atardecer espectacular. (Coordenadas: -4.5779, -78.171)',
        x: 20,
        y: 50
    },
    {
        id: 'bano-oculto',
        title: '72. Baño Oculto',
        description: 'Con formaciones rocosas únicas. (Coordenadas: -4.5780, -78.172)',
        x: 55,
        y: 65
    }*/
];

function createP(point, index, imgWidth, imgHeight) {
    const poiElement = document.createElement('div');
    poiElement.className = 'point-of-interest';
    poiElement.dataset.id = point.id;
    poiElement.textContent = index + 1;
    
    // Position points based on percentage coordinates
    poiElement.style.left = `${(point.x / 100) * imgWidth}px`;
    poiElement.style.top = `${(point.y / 100) * imgHeight}px`;

    poiElement.style.textAlign = 'center';
    poiElement.style.lineHeight = '16px';
    poiElement.style.fontSize = '10px';
    poiElement.style.fontWeight = 'bold';
    poiElement.style.color = 'black';

    return poiElement;
}

export function getPointsOfInterest() {
    return pointsOfInterest;
}

export function setupPoints(mapContainer, infoPanel, mapImage) {
    const imgWidth = mapImage.offsetWidth;
    const imgHeight = mapImage.offsetHeight;

    pointsOfInterest.forEach((point, index) => {
        const poiElement = createP(point, index, imgWidth, imgHeight);
        poiElement.addEventListener('click', function() {
            const poiData = pointsOfInterest.find(p => p.id === this.dataset.id);
            document.getElementById('poi-title').textContent = poiData.title;
            
            // Extract coordinates from description
            const coordMatch = poiData.description.match(/\(Coordenadas:\s*(-?\d+\.\d+),\s*(-?\d+\.\d+)\)/);
            let descrHtml = poiData.description;
            
            if (coordMatch) {
                const lat = coordMatch[1];
                const lng = coordMatch[2];
                descrHtml = poiData.description.replace(
                    /\(Coordenadas:.*?\)/,
                    `(Coordenadas: ${lat}, ${lng}) <button class="navigate-btn" data-lat="${lat}" data-lng="${lng}">Ir</button>`
                );
            }
            
            document.getElementById('poi-description').innerHTML = descrHtml;
            
            // Add click handler for navigation button
            const navBtn = document.querySelector('#poi-description .navigate-btn');
            if (navBtn) {
                navBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const lat = this.dataset.lat;
                    const lng = this.dataset.lng;
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`);
                });
            }
            
            infoPanel.classList.add('active');
        });
        poiElement.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(2)';
            this.style.boxShadow = '0 0 20px yellow';
        });
        poiElement.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });

        mapContainer.appendChild(poiElement);
    });
}