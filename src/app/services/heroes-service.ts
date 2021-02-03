import { Injectable } from '@angular/core';
import { Heroe } from '../Interfaces/heroe';

@Injectable({ providedIn: 'root' })
export class HeroesService {

  private heroes: Heroe[] = [
    {
      name: "Rey Exánime",
      description: `“ Nada me impedirá vengarme, viejo amigo . Ni siquiera tú. Ahora, llamo a los espíritus de este lugar . Daré cualquier cosa, o pagaré cualquier precio, si tú me ayudas a salvar a mi pueblo. ' 
      - Arthas, justo antes de reclamar Frostmourne
      Arthas Menethil , Príncipe Heredero de Lordaeron y Caballero de la Mano de Plata , era el hijo del rey Terenas Menethil II y heredero al trono. Fue entrenado como paladín por Uther the Lightbringer y fue incluido en la Orden de la Mano de Plata . Arthas también tuvo una relación romántica con la amable hechicera Jaina Valiente . Comprometido con la protección de su pueblo, Arthas estaba decidido a detener la propagación de la plaga por Lordaeron.
      A pesar de sus prometedores comienzos, Arthas se convirtió en uno de los seres más poderosos y malvados que Azeroth jamás conocería. Aunque mató al nigromante Kel'Thuzad , Arthas no pudo detener la propagación de la plaga y recurrió a métodos cada vez más desesperados, como purgar la ciudad de Stratholme . Retomando la maldita espada rúnica Frostmourne , Arthas fue capaz de derrotar al demonio Mal'Ganis , pero perdió su alma en el proceso. Al convertirse en un caballero de la muerte de la Plaga , lideró a los no muertos en la destrucción de Lordaeron , Quel'Thalas.y Dalaran . Arthas luego se dirigió al Trono Helado de Corona de Hielo y se fusionó con el Rey Exánime . [6]
      Gobernando como Rey Exánime durante años después, Arthas destruyó los últimos restos de su humanidad y finalmente fue derrotado en combate por el Alto Señor Tirion Vadín y sus campeones de la Luz . Acunado por el espíritu de su padre, Arthas Menethil murió, dejando que el manto del Rey Exánime fuera tomado por un alma noble que contendría el poder de la Plaga.`,
      img: "https://statics.viralizalo.com/virs/2016/01/VIR_43719_4093_world_of_warcraft_wrath_of_the_lich_king_cuanto_sabes.gif?cb=78756",
      race: "Muerto",
      skills: [{
        name: "Espiral de la muerte",
        description: "Una espiral de muerte que puede dañar a una unidad viviente enemiga o curar a una unidad amiga no muerta.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/arthas/abilities/icons/death-coil_hexagon.png"

      },
      {
        name: "Pacto de la muerte",
        description: "Mata a una unidad amiga objetivo, dando un porcentaje de sus puntos de golpe al Caballero de la Muerte",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/arthas/abilities/icons/howling-blast_hexagon.png"

      },
      {
        name: "Animar a los muertos",
        description: "Levanta 6 unidades muertas en un área para luchar por el Caballero de la Muerte. Las unidades animadas son invulnerables.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/arthas/abilities/icons/frozen-tempest_hexagon.png"

      },
      ],
    },
    {
      name: "Illidan",
      description:`
      comúnmente conocido como el Traidor , es el primero de los cazadores de demonios , el ex autoproclamado Señor de Terrallende , el ex gobernante del Templo Oscuro y el líder original de los Illidari . Es el hermano gemelo de Malfurion Stormrage y estaba, como su hermano, enamorado de Tyrande Whisperwind . Originalmente un poderoso hechicero elfo de la noche , Illidan traicionó oficialmente a su pueblo al desertar a la demoníaca Legión Ardiente durante la Guerra de los Ancestros. , aunque sus razones para hacerlo eran nobles, ya que secretamente apuntaba a repeler la invasión de la Legión. [13] Eventualmente regresó al lado de sus compañeros elfos de la noche, pero su creación de un segundo Pozo de la Eternidad al final de la guerra hizo que su gente lo llamara "Traidor" y lo encarcelaran en las Profundidades de Barrow debajo del Monte Hyjal . Allí permaneció durante más de 10.000 años, vigilado por la directora Maiev Cantosombrío y sus Vigilantes .

Cuando la Legión invadió Azeroth una vez más durante la Tercera Guerra , Tyrande liberó a Illidan de su prisión para que luchara contra los demonios una vez más. Posteriormente consumió las energías viles de la Calavera de Gul'dan y se transformó en un demonio para derrotar al señor del terror Tichondrius , un acto por el que Malfurion lo desterró. Después de la derrota de la Legión al final de la guerra, Illidan decidió fingir lealtad al señor demonio Kil'jaeden al aceptar destruir la creación traidora de Kil'jaeden, el Rey Exánime , como una forma de aprender más sobre su verdadero enemigo: el Ardiente. Legión. [14]Aunque reunió un ejército de sirvientes en forma de naga liderados por Lady Vashj , los elfos de la noche detuvieron los esfuerzos de Illidan y se vio obligado a huir al reino destrozado de Terrallende . Allí, él y sus naga reunieron nuevos aliados en forma de elfos de sangre liderados por Kael'thas Sunstrider y los draenei Rotos liderados por Akama , y con su ayuda derrocó al tiránico gobernante de Terrallende, Magtheridon, para reclamar el reino roto para sí mismo. Illidan más tarde viajó con sus aliados a la fortaleza de Corona de Hielo del Rey Exánime.para un último intento de completar la misión de Kil'jaeden, pero finalmente fue frustrado y casi asesinado por el campeón del Rey Exánime, el caballero de la muerte Arthas Menethil .

Al regresar a Terrallende, Illidan abandonó toda pretensión de servir a Kil'jaeden y reunió a su ejército, los Illidari, para comenzar su verdadera guerra contra la Legión Ardiente. [15] Entrenó a un ejército de cazadores de demonios elfos a su propia imagen y comenzó a prepararse para destruir el mundo de la Legión de Argus , pero sus métodos extremos y su enfoque decidido en su objetivo llevaron a la alienación de sus aliados Kael'thas y Akama. . A través de las manipulaciones de Kil'jaeden, la Alianza y la Horda invadieron Terrallende y comenzaron a desmantelar las fuerzas de Illidan en la creencia de que no era mejor que los demonios contra los que decía luchar. A pesar de tener éxito en destruir la fortaleza demoníaca de Nathreza, el Traidor fue finalmente acorralado y abatido dentro de su propio santuario por Akama, un grupo de aventureros de Azeroth y su vengativo ex carcelero, Maiev. Posteriormente, Maiev llevó el cadáver de Illidan a la Bóveda de los Guardianes para que su espíritu pudiera sufrir el resto de su sentencia eterna. Allí permaneció durante años hasta que la Legión invadió una vez más .

Se produjo una lucha por el alma de Illidan entre la Legión y las fuerzas de Azeroth, incluidos los Illidari restantes, que culminó con la resurrección de Illidan en la cima del Bastión Nocturno . Posteriormente, el Traidor unió fuerzas con los defensores de Azeroth mientras luchaban contra la Legión a través de la Costa Abrupta y dentro de la Tumba de Sargeras . Durante una batalla con Kil'jaeden en Twisting Nether , Illidan usó un artefacto conocido como la Piedra Clave Sargerita para abrir una grieta que unió los mundos de Azeroth y Argus. Illidan acompañado campeones de Azeroth, ya que viajó a Argus a la batalla de la Legión junto con el Ejército de la Luz , cuyo líder, el primer naruu Xe'ra—Creía que Illidan era el Elegido , un héroe de la Luz profetizó que acabaría con la era de los demonios. Illidan rechazó la idea de que le forjaran su destino y mató a Xe'ra cuando los naaru trataron de infundirle la Luz por la fuerza. El Ejército de la Luz y sus aliados eventualmente asaltaron la sede de poder de Sargeras , Antorus , y liberaron a los espíritus cautivos del titán Pantheon , quien encarceló a Sargeras en la Sede del Panteón por sus transgresiones. Mientras el resto de los héroes de Azeroth regresaban a su mundo, Illidan decidió quedarse y se convirtió en el carcelero de Sargeras.
      `,
      img: "https://media1.tenor.com/images/9675307833449109b5e9286f14f74de9/tenor.gif?itemid=10891728",
      race: "Demonio",
      skills: [{
        name: "Zambullida",
        description: "Te zambulles sobre el objetivo, infliges 66 de daño y haces un salto mortal hacia el otro lado del objetivo.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/illidan/abilities/icons/dive_hexagon.png"

      },
      {
        name: "Golpe ineludible",
        description: "Illidan se lanza hacia el punto objetivo e inflige 119 de daño a los enemigos que encuentra a su paso. Cuando golpea a un enemigo, el daño de ataque básico de Illidan aumenta un 35% durante 3 segundos.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/illidan/abilities/icons/sweeping-strike_hexagon.png"

      },
      {
        name: "Evasión",
        description: "Esquiva los ataques básicos de enemigos durante 2.5 segundos.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/illidan/abilities/icons/evasion_hexagon.png"

      },
      ],
    }, {
      name: "Gul'dan",
      description: "Gul'dan fue el primer brujo orco y el fundador de facto de la Horda . Traicionó tanto a su pueblo como a su mentor Ner'zhul ante el señor de los demonios Kil'jaeden para obtener poder y beneficio personal, y fue directamente responsable de la caída de los orcos a la esclavitud demoníaca y su posterior invasión de Azeroth . Bajo la tutela de los líderes de la Legión Ardiente , se le considera uno de los brujos más poderosos que jamás haya existido. [7] Fundó el Consejo de la Sombra y creó los primeros caballeros de la muerte . Gul'dan a menudo se refería a sí mismo como 'La oscuridad encarnada' y 'El destructor de los sueños'.",
      img: "https://media4.giphy.com/media/pVC0mCbXBtlVZJtFl1/giphy.gif",

      race: "Demonio",
      skills: [{
        name: "Drenar vida",
        description: "Una espiral de muerte que puede dañar a una unidad viviente enemiga o curar a una unidad amiga no muerta.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/guldan/abilities/icons/fel-flame_hexagon.png"

      },
      {
        name: "Llama vil",
        description: "Mata a una unidad amiga objetivo, dando un porcentaje de sus puntos de golpe al Caballero de la Muerte",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/guldan/abilities/icons/drain-life_hexagon.png"

      },
      {
        name: "Corrupción",
        description: "Aumenta la velocidad de movimiento y la tasa de regeneración de vida de las unidades amigas cercanas.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/guldan/abilities/icons/corruption_hexagon.png"

      },
      ],
    }, {
      name: "Uther",
      description: `
      “La venganza no puede ser parte de lo que debemos hacer. Si permitimos que nuestras pasiones se conviertan en sed de sangre, seremos tan viles como los orcos. "
- Uther a Arthas Menethil .
Lord Uther the Lightbringer , o Sire Uther Lightbringer , fue el primero de los cinco paladines de los Caballeros de la Mano de Plata junto con Turalyon , Saidan Dathrohan , Tirion Fordring y Gavinrad the Dire . Lideró su orden en la batalla contra la Horda durante la Segunda Guerra . Durante la Tercera Guerra , Uther fue traicionado y asesinado por su amado alumno, el Príncipe Arthas , mientras defendía la urna que llevaba las cenizas del padre de Arthas, el Rey Terenas.. Tras la muerte del Iluminado, una parte de su alma parece haber sido consumida por Agonía de Escarcha, mientras que otra se consideró digna de ingresar al plano de Bastión dentro de las Tierras Sombrías y convertirse en kyrian .`,
      img: "https://media0.giphy.com/media/MXL1W2r3M6szKvOpXp/giphy-downsized-medium.gif",

      race: "Humano",
      skills: [{
        name: "Luz sagrada",
        description: "Cura 362 de salud al héroe aliado objetivo. Cuando se usa en un objetivo que no sea Uther, también cura a Uther 181 de salud.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/uther/abilities/icons/holy-light_hexagon.png"

      },
      {
        name: "Martillo de la justicia",
        description: "Mata a una unidad amiga objetivo, dando un porcentaje de sus puntos de golpe al Caballero de la Muerte",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/uther/abilities/icons/hammer-of-justice_hexagon.png"

      },
      {
        name: "Santo resplandor",
        description: "Aumenta la velocidad de movimiento y la tasa de regeneración de vida de las unidades amigas cercanas.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/uther/abilities/icons/holy-radiance_hexagon.png"

      },
      ],
    }, {
      name: "Jaina",
      description: "Jaina Valiente, otrora aprendiz del Archimago Antonidas, guió a los sobrevivientes de Lordaeron a Kalimdor y fundó la ciudad de Theramore. Ahora sirve en la Alianza como una poderosa voz en favor de la razón y la diplomacia.",
      img: "https://i.pinimg.com/originals/82/cf/ff/82cfff3960c53c6a3de1c3c5f93b2c01.gif",

      race: "Humano",
      skills: [{
        name: "Descarga de escarcha",
        description: "Una espiral de muerte que puede dañar a una unidad viviente enemiga o curar a una unidad amiga no muerta.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/jaina/abilities/icons/frostbolt_hexagon.png"

      },
      {
        name: "Ventisca",
        description: "Mata a una unidad amiga objetivo, dando un porcentaje de sus puntos de golpe al Caballero de la Muerte",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/jaina/abilities/icons/blizzard_hexagon.png"

      },
      {
        name: "Cono de frío",
        description: "Aumenta la velocidad de movimiento y la tasa de regeneración de vida de las unidades amigas cercanas.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/jaina/abilities/icons/cone-of-cold_hexagon.png"

      },
      ],
    },
    {
      name: "Sylvanas",
      description: "Sylvanas Brisaveloz no siempre fue la Dama Oscura de los Renegados. En otra vida, fue la Ranger-General de Silvermoon. Pero eso fue antes de que el Caballero de la Muerte Arthas la matara a ella y a su gente y la criara como la primera Banshee.",
      img: "https://images6.fanpop.com/image/photos/41700000/Sylvanas-Windrunner-world-of-warcraft-41712897-500-193.gif",

      race: "Muerto",
      skills: [{
        name: "Daga de las sombras",
        description: "Una espiral de muerte que puede dañar a una unidad viviente enemiga o curar a una unidad amiga no muerta.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/sylvanas/abilities/icons/shadow-dagger_hexagon.png"

      },
      {
        name: "Fuego fulminante",
        description: "Mata a una unidad amiga objetivo, dando un porcentaje de sus puntos de golpe al Caballero de la Muerte",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/sylvanas/abilities/icons/withering-fire_hexagon.png"

      },
      {
        name: "Ola inquietante",
        description: "Aumenta la velocidad de movimiento y la tasa de regeneración de vida de las unidades amigas cercanas.",
        img: "https://static.heroesofthestorm.com/gd/6f704aac5aa2f1cfad17ee130347fb3b/heroes/sylvanas/abilities/icons/haunting-wave_hexagon.png"

      },
      ],
    },
  ]

  GetHeroes() {
    return this.heroes
  }

  GetHeroe(index: number) {
    return this.heroes[index]
  }
  GetHeroeSearch(termino: string) {
    let _termino = termino.toLowerCase()
    let rta 
    this.heroes.forEach((heroe,i) => {
      let _name = heroe.name.toLowerCase()
      if (_name.indexOf(_termino) >= 0)
        rta = i
    });
    return rta
  }

  constructor() { }

}