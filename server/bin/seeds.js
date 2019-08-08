const mongoose = require('mongoose');
const Movie = require('../models/movies.model')
require("dotenv").config()


mongoose.connect(`${process.env.DBLOCAL}`, { useNewUrlParser: true })


const movies=[
  {
    original_title: 'La vida de Brian',
    overview: 'Brian nace en un pesebre de Belén el mismo día que Jesucristo. Un cúmulo de desgraciados y tronchantes equívocos le harán llevar una vida paralela a la del verdadero Hijo de Dios. Sus pocas luces y el ambiente de decadencia y caos absoluto en que se haya sumergida la Galilea de aquellos días, le harán vivir en manos de su madre, de una feminista revolucionaria y del mismísimo Poncio Pilatos, su propia versión del calvario.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565084190/Movies_posters/vidadebrianjpeg_f07m4z.jpg',
    video: 'https://www.youtube.com/watch?v=0-E6bKzb1lw'
  },
  {
    original_title: 'La vida es Bella',
    overview: 'La Segunda Guerra Mundial está a punto de estallar en Europa. Mientras tanto, Guido llega a un pueblo italiano con la intención de abrir una librería. Allí se enamora de la novia de un fascista italiano, Dora. Ésta sucumbirá a sus encantos y Guido consigue que se case con él. De la bonita unión nace un pequeño que tendrá que vivir en primera persona los horrores de la guerra. La familia será recluida en un campo de concentración. Guido hará todo lo que esté en sus manos para hacer creer a su hijo que la vida es bella y que todo lo que están viviendo no es más que un juego…',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565281754/Movies_posters/51tWTZJrHYL._SY445__im0k72.jpg',
    video: 'http://www.sensacine.com/peliculas/pelicula-64439/trailer-19426849/'
  },
  {
    original_title: 'Cadena perpetua',
    overview: 'Acusado del asesinato de su mujer, Andrew Dufresne (Tim Robbins), tras ser condenado a cadena perpetua, es enviado a la cárcel de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros de prisión, especialmente de Red (Morgan Freeman), el jefe de la mafia de los sobornos. ',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565282001/Movies_posters/003_m_mkdwel.jpg',
    video: 'https://www.youtube.com/watch?v=UiFalZEXDr4'
  },
  {
    original_title: 'El Padrino',
    overview: 'América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de "Il consigliere" Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas. ',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565282313/Movies_posters/158548_vdgjmf.jpg',
    video: 'https://www.dailymotion.com/video/x6mf0gv'
  },
  {
    original_title: 'Batman: el Caballero Oscuro',
    overview: 'Batman/Bruce Wayne (Christian Bale) regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon (Gary Oldman) y del Fiscal del Distrito Harvey Dent (Aaron Eckhart), Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker (Heath Ledger), un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos. ',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565283595/Movies_posters/the_dark_knight-102763119-large_i419ij.jpg',
    video: 'https://www.youtube.com/watch?v=Qs-NylETt1E'
  },
  ,
  {
    original_title: 'Capitana Marvel',
    overview: 'La historia sigue a Carol Danvers mientras se convierte en uno de los héroes más poderosos del universo, cuando la Tierra se encuentra atrapada en medio de una guerra galáctica entre dos razas alienígenas. Situada en los años 90, "Capitana Marvel" es una historia nueva de un período de tiempo nunca antes visto en la historia del Universo Cinematográfico de Marvel. ',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286126/Movies_posters/captain_marvel_phubcd.jpg',
    video: 'https://www.youtube.com/watch?v=DtrrRe6EACM'
  },
  {
    original_title: 'Los Vengadores',
    overview: 'Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro. Adaptación del cómic de Marvel "Los Vengadores", el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/the_avengers_wrvmzu.jpg',
    video: 'https://www.youtube.com/watch?v=AI3nbabKPQE'
  },
  {
    original_title: 'Vengadores: La era de Ultrón',
    overview: 'Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz, las cosas empiezan a torcerse y los héroes más poderosos de la Tierra, incluyendo a Iron Man, Capitán América, Thor, El Increíble Hulk, Viuda Negra y Ojo de Halcón, tendrán que afrontar la prueba definitiva cuando el destino del planeta se ponga en juego. Cuando el villano Ultrón emerge, le corresponderá a Los Vengadores detener sus terribles planes, que junto a incómodas alianzas llevarán a una inesperada acción que allanará el camino para una épica y única aventura. ',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/avengers_age_of_ultron_the_avengers_2_mfdgqp.jpg',
    video: 'https://www.youtube.com/watch?v=JQWGle-bKmE'
  },
  {
    original_title: 'Vengadores: Infinity War',
    overview: 'El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286128/Movies_posters/avengers_infinity_war_zlogrx.jpg',
    video: 'https://www.youtube.com/watch?v=-f5PwE_Q8Fs'
  },
  {
    original_title: 'Vengadores: Endgame',
    overview: 'Después de los eventos devastadores de "Avengers: Infinity War", el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles son las consecuencias... Cuarta y última entrega de la saga "Vengadores". ',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286848/Movies_posters/avengers_endgame_abrxxc.jpg',
    video: 'https://www.youtube.com/watch?v=UQ3bqYKnyhM'
  },
  {
    original_title: 'Iron Man',
    overview: 'El multimillonario fabricante de armas Tony Stark (Robert Downey Jr.) debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en "El hombre de hierro", un héroe que se dedica a combatir el mal en todo el mundo.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286126/Movies_posters/iron_man_zmmzlw.jpg',
    video: 'https://www.youtube.com/watch?v=GwgePyzkC34'
  },
  {
    original_title: 'Iron Man 2',
    overview: 'El mundo ya sabe que el multimillonario Tony Stark (Robert Downey Jr.) es Iron Man, el superhéroe enmascarado. A pesar de las presiones del gobierno, la prensa y la opinión pública para que comparta su tecnología con el ejército, Tony es reacio a desvelar los secretos de la armadura de Iron Man, porque teme que esa información caiga en en manos de irresponsables. Con Pepper Potts (Gwyneth Paltrow) y James “Rhodey” Rhodes (Don Cheadle) a su lado, Tony forja alianzas nuevas y se enfrenta a nuevas y poderosas fuerzas.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286126/Movies_posters/iron_man_2_rentud.jpg',
    video: 'https://www.youtube.com/watch?v=Ab_mvS68xng'
  },
  {
    original_title: 'Iron Man 3',
    overview: 'El descarado y brillante empresario Tony Stark/Iron Man se enfrentará a un enemigo cuyo poder no conoce límites. Cuando Stark comprende que su enemigo ha destruido su universo personal, se embarca en una angustiosa búsqueda para encontrar a los responsables. Este viaje pondrá a prueba su entereza una y otra vez. Acorralado, Stark tendrá que sobrevivir por sus propios medios, confiando en su ingenio y su instinto para proteger a las personas que quiere.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286126/Movies_posters/iron_man_3_p2254c.jpg',
    video: 'https://www.youtube.com/watch?v=K_vGt0bR-YM'
  },
  {
    original_title: 'Capitán América: El primer vengador',
    overview: 'Nacido durante la Gran Depresión (años 30), Steve Rogers creció como un chico enclenque en una familia pobre. Horrorizado por las noticias que llegaban de Europa sobre los nazis, decidió enrolarse en el ejército; sin embargo, debido a su precaria salud, fue rechazado una y otra vez. Enternecido por sus súplicas, el General Chester Phillips le ofreció la oportunidad de participar en un experimento especial: la "Operación Renacimiento". Tras administrarle el “Suero Super-Soldado” y bombardearlo con “vitarrayos”, el cuerpo de Steve se hace perfecto. A continuación, se sometió a un intensivo programa de entrenamiento físico y táctico. Tres meses después, le encomendaron su primera misión como Capitán América. Armado con un escudo indestructible, emprenderá la guerra contra el Mal como centinela de la libertad y líder de los Vengadores.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286128/Movies_posters/captain_america_the_first_avenger_iltr3f.jpg',
    video: 'https://www.youtube.com/watch?v=8-gP9CkRpCA'
  },
  {
    original_title: 'Capitán América: El soldado de invierno',
    overview: 'Tras los devastadores acontecimientos acaecidos en Nueva York con Los Vengadores, Steve Rogers, alias el Capitán América, vive tranquilamente en Washington D.C. intentando adaptarse al mundo moderno. Pero cuando atacan a un colega de S.H.I.E.L.D., Steve se ve envuelto en una trama de intrigas que representa una amenaza para el mundo. Se unirá entonces a la Viuda Negra para desenmascarar a los conspiradores. Cuando por fin descubren la magnitud de la trama, se unirá a ellos el Halcón. Los tres tendrán que enfrentarse a un enemigo inesperado y extraordinario: el Soldado de Invierno.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286126/Movies_posters/captain_america_the_winter_soldier_yogcup.jpg',
    video: 'https://www.youtube.com/watch?v=HU7OAXdKdGw'
  },
  {
    original_title: 'Capitán América: Civil War',
    overview: 'Después de que otro incidente internacional involucre a Los Vengadores, causando varios daños colaterales, aumentan las presiones políticas para instaurar un sistema que exija más responsabilidades y que determine cuándo deben contratar los servicios del grupo de superhéroes. Esta nueva situación dividirá a Los Vengadores, mientras intentan proteger al mundo de un nuevo y terrible villano. Tercera entrega de la saga Capitán América.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/captain_america_civil_war_eusbld.jpg',
    video: 'https://www.youtube.com/watch?v=6aWYmFCRsEI'
  },
  {
    original_title: 'Mascotas',
    overview: 'En un edificio de apartamentos de Manhattan, la vida de Max como mascota favorita corre peligro cuando su dueña trae a casa a un otro perro llamado Duke, con quien Max pronto tiene sus diferencias. Pero ambas mascotas tienen que dejar atrás su rivalidad cuando se enteran de que un adorable conejito blanco llamado Snowball está reclutando a un ejército de animales domésticos que han sido abandonados, decididos a vengarse de todos los animales domésticos felices y de sus dueños. ',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/the_secret_life_of_pets_din0ik.jpg',
    video: 'https://www.dailymotion.com/video/x3q85fz'
  },
  {
    original_title: 'Mascotas 2',
    overview: 'Max se enfrenta a nuevos e importantes cambios en su vida: su dueña Katie no sólo se ha casado, sino que también ha sido madre por primera vez. En un viaje familiar al campo conoce a un perro granjero llamado Rooster, con el que aprende a dominar sus miedos. Mientras tanto, Gidget trata de recuperar el juguete favorito de Max de un apartamento repleto de gatos. Snowball, por otro lado, se embarca en una peligrosa misión para liberar a un tigre blanco, Hu, de sus captures en un circo de animales. Secuela de "Mascotas"',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/the_secret_life_of_pets_2_obeqpm.jpg',
    video: 'https://www.dailymotion.com/video/x79otop'
  },
  {
    original_title: 'El padrino. Parte II',
    overview: 'Continuación de la historia de los Corleone por medio de dos historias paralelas: la elección de Michael como jefe de los negocios familiares y los orígenes del patriarca, Don Vito Corleone, primero en su Sicilia natal y posteriormente en Estados Unidos, donde, empezando desde abajo, llegó a ser un poderosísimo jefe de la mafia de Nueva York.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/the_godfather_part_ii_x6gcx2.jpg',
    video: 'https://www.youtube.com/watch?v=qJr92K_hKl0'
  },
  {
    original_title: 'Doce hombres sin piedad',
    overview: 'Los doce miembros de un jurado deben juzgar a un adolescente acusado de haber matado a su padre. Todos menos uno están convencidos de la culpabilidad del acusado. El que disiente intenta con sus razonamientos introducir en el debate una duda razonable que haga recapacitar a sus compañeros para que cambien el sentido de su voto.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/12_angry_men_gfppof.jpg',
    video: 'https://www.youtube.com/watch?v=A7CBKT0PWFA'
  },
  {
    original_title: 'La lista de Schindler',
    overview: 'Oskar Schindler (Liam Neeson), un empresario alemán de gran talento para las relaciones públicas, busca ganarse la simpatía de los nazis de cara a su beneficio personal. Después de la invasión de Polonia por los alemanes en 1939, Schindler consigue, gracias a sus relaciones con los altos jerarcas nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente, gracias sobre todo a su gerente Itzhak Stern (Ben Kingsley), también judío. Pero conforme la guerra avanza, Schindler y Stern comienzan ser conscientes de que a los judíos que contratan, los salvan de una muerte casi segura en el temible campo de concentración de Plaszow, que lidera el Comandante nazi Amon Goeth (Ralph Fiennes), un hombre cruel que disfruta ejecutando judíos.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/schindler_s_list_qvu7ty.jpg',
    video: 'https://www.dailymotion.com/video/x70e46g'
  },
  {
    original_title: 'Testigo de cargo',
    overview: 'Leonard Vole (Tyrone Power), un hombre joven y atractivo, es acusado del asesinato de la señora French, una rica anciana con quien mantenía una relacion de carácter amistoso. El presunto móvil del crimen era la posibilidad de heredar los bienes de la difunta. A pesar de que las pruebas en su contra son demoledoras, Sir Wilfrid Roberts (Charles Laughton), un prestigioso abogado criminalista londinense, se hace cargo de su defensa.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/witness_for_the_prosecution_xylakc.jpg',
    video: 'https://www.youtube.com/watch?v=KsVN1hv9D5c'
  },
  {
    original_title: 'Luces de la ciudad',
    overview: 'Un pobre vagabundo (Charles Chaplin) pasa mil y un avatares para conseguir dinero y ayudar a una pobre chica ciega (Virginia Cherrill) de la que se ha enamorado. ',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286315/Movies_posters/city_lights_whkrzv.jpg',
    video: 'https://www.youtube.com/watch?v=b2NTUnujk1I'
  },
  {
    original_title: 'El gran dictador',
    overview: 'Un humilde barbero judío que combatió con el ejército de Tomania en la Primera Guerra Mundial vuelve a su casa años después del fin del conflicto. Amnésico a causa de un accidente de avión, no recuerda prácticamente nada de su vida pasada, y no conoce la situación política actual del país: Adenoid Hynkel, un dictador fascista y racista, ha llegado al poder y ha iniciado la persecución del pueblo judío, a quien considera responsable de la situación de crisis que vive el país. Paralelamente, Hynkel y sus colaboradores han empezado a preparar una ofensiva militar destinada a la conquista de todo el mundo.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/the_great_dictator_d5u7gj.jpg',
    video: 'https://www.youtube.com/watch?v=zroWIN-lS8E'
  },
  {
    original_title: 'Pulp Fiction',
    overview: 'Jules y Vincent, dos asesinos a sueldo con no demasiadas luces, trabajan para el gángster Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su atractiva mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse "manos a la obra". Su misión: recuperar un misterioso maletín.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565286127/Movies_posters/pulp_fiction_oywnjw.jpg',
    video: 'https://www.youtube.com/watch?v=LI1yt38A9-E'
  },
  {
    original_title: 'La vida de Pi',
    overview: 'Tras un naufragio en medio del océano Pacífico, el joven hindú Pi, hijo de un guarda de zoo que viajaba de la India a Canadá, se encuentra en un bote salvavidas con un único superviviente, un tigre de bengala con quien labrará una emocionante, increíble e inesperada relación.',
    poster_path: 'https://res.cloudinary.com/dgesryvti/image/upload/v1565084185/Movies_posters/vidadepi_wcl52z.jpg',
    video: 'https://www.youtube.com/watch?v=HKuWAXffnk4'
  }
]


Movie.create(movies)
  .then(moviesCreated=>{
    console.log(`${moviesCreated.length} movies added to DB`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`There was an error ${err}`))
