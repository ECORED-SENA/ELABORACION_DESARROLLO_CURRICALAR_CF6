export default {
  global: {
    componenteFormativo: 'Estrategia de evaluación',
    descripcionCurso:
      'A través del desarrollo de este componente adquirirá elementos conceptuales y prácticos que le permita implementar estrategias de evaluación en el procedimiento de desarrollo curricular.  ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evaluación del aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios de la Evaluación',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Función de la evaluación',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de evaluación',
            hash: 'botones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Dimensiones de la evaluación',
            hash: 'listas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Métodos de evaluación ',
            hash: 'tablas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Estrategias de evaluación',
            hash: 'imagen',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ibarra, S & Rodríguez, G.  (1999). e-evaluación orientada al e-aprendizaje estratégico en Educación Superior. ',
      link: '',
    },
    {
      referencia: 'Narcea.',
      link: '',
    },
    {
      referencia:
        'Lucio, R. (1978). Fundación para la Educación Superior y El Desarrollo. 20 años del SENA en Colombia 1957 1977. Bogotá. Presencia.',
      link: '',
    },
    {
      referencia: 'MEN (2019). Decreto 1330 de 2019. ',
      link:
        'https://www.mineducacion.gov.co/1759/articles-387348_archivo_pdf.pdf',
    },
    {
      referencia:
        'República de Colombia, M. E. N. Decreto 1330. Diario Oficial, 51.SENA. (2006). Procedimiento para la ejecución de acciones de formación profesional. SENA.',
      link: '',
    },
    {
      referencia:
        'SENA. (2020). 1596495570_GFPI-G-012_Guia_Desarrollo_Curricularv_3.docx.pdf. ',
      link: '',
    },
    {
      referencia:
        'UNESCO.  (2005).  Hacia las Sociedades del Conocimiento. París.',
      link: '',
    },
    {
      referencia:
        'UNESCO.  (2016).  Orientaciones para la Elaboración de Políticas Docentes en América Latina y el Caribe. París.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Competencia',
      significado:
        'Conjunto de capacidades reales de la persona, relacionadas con aspectos socio-afectivos y con habilidades cognoscitivas y motrices, que le permiten llevar a cabo una actividad o función con calidad, y que se modifican en forma permanente cuando son sometidas a prueba en la resolución de situaciones concretas, críticas y públicas.',
    },
    {
      termino: 'Criterio de evaluación',
      significado:
        'Enunciado que expresa el grado y tipo de aprendizaje que se espera que sea alcanzado por el alumno respecto a algún concepto, procedimiento o actitud concreta. El criterio puede representarse a través de indicadores o descriptores específicos. Proveen señales significativas para la evaluación, las cuales dan cuenta del estado de las competencias desarrolladas por el alumno.',
    },
    {
      termino: 'Estilos de aprendizaje',
      significado:
        'Preferencias o tendencias a utilizar más unas determinadas maneras de aprender que otras. La utilización de métodos propios o conjunto de estrategias varían según lo que se quiere aprender, y evolucionan y cambian de modo constante; sin embargo, cada persona tiende a desarrollar unas preferencias globales para conseguir un aprendizaje más efectivo. El estilo de aprendizaje está relacionado con la concepción del aprendizaje como proceso activo.',
    },
    {
      termino: 'Evaluación del aprendizaje',
      significado:
        'Conjunto de juicios emitidos con base en los resultados de aprendizaje y criterios de evaluación establecidos en el diseño curricular, sobre los logros del alumno en la apropiación de conocimientos, habilidades motoras y de pensamiento, así como en el fortalecimiento y desarrollo de actitudes en las etapas lectiva y productiva.',
    },
    {
      termino: 'Evaluación cualitativa',
      significado:
        'Juicio de valor sobre la calidad de las evidencias de aprendizaje recaudadas en el proceso de formación. El juicio se expresa de manera conceptual, y se basa en el cumplimiento de criterios de calidad establecidos, los cuales permiten valorar los logros alcanzados por el alumno.',
    },
    {
      termino: 'Evidencias de aprendizaje',
      significado:
        'Pruebas manifiestas de aprendizaje, recobradas directamente en el proceso de formación. Son recolectadas con la orientación del Instructor utilizando métodos, técnicas e instrumentos de evaluación seleccionados, según sean evidencias de conocimiento o de desempeño (de proceso y de producto), permitiendo reconocer los logros obtenidos por el alumno, en términos del saber, saber hacer y ser.',
    },
    {
      termino: 'Guía de aprendizaje',
      significado:
        'Recurso didáctico que facilita el aprendizaje del Alumno. Está centrada en la Pedagogía Activa y Participativa en la que se reconoce la autonomía del alumno. Incluye actividades planeadas por procesos, y se constituye en un elemento mediador diseñado por el Instructor para promover aprendizajes significativos y la comprensión y construcción de conocimiento. A través de esta se desarrollan los valores, procedimientos cognitivos y motores, planteados en las estructuras curriculares.',
    },
    {
      termino: 'Juicio de evaluación',
      significado:
        'Atribución de valor a la acción cognitiva y productiva del alumno. Este análisis es concluyente sobre los logros obtenidos en relación con los resultados u objetivos planteados en el proceso de formación y está soportado en las evidencias de aprendizaje y demás registros documentados en el portafolio.',
    },
    {
      termino: 'Logro de aprendizaje',
      significado:
        'Conjunto de conocimientos, habilidades, destrezas y valores que debe alcanzar el alumno en relación con los objetivos o resultados de aprendizaje previstos en los diseños curriculares. De los logros de aprendizaje obtenidos se infiere su competencia.',
    },
    {
      termino: 'Método',
      significado:
        'Por su origen, método significa "el camino para llegar a un fin" (del griego Metá = a través, más allá, y Hodos = camino, "camino que se recorre). En lógica, se entiende como el camino más breve para llegar a la verdad. Es la manera ordenada y calculada para alcanzar el fin previsto: cada paso y cada movimiento está relacionado con el fin y tiene su razón de ser; es la manera de realizar los fines de la educación con la mayor eficacia y economía posibles.',
    },
    {
      termino: 'Proceso de enseñanza-aprendizaje-evaluación',
      significado:
        'Comprende un sistema de acciones que se enlazan bajo un patrón específico para lograr los fines de la formación. Implica, a la vez, un modelo de comunicación cuyas características se definen a partir de los mensajes seleccionados, los medios empleados y las expectativas de los alumnos.',
    },
    {
      termino: 'Valoración de evidencias de aprendizaje',
      significado:
        'Asignación de atributos o cualidades por parte del instructor a las evidencias de aprendizaje del alumno, de acuerdo con los criterios de evaluación establecidos en cada caso. La valoración se realiza sobre la calidad de las evidencias recogidas durante el proceso de formación y al finalizar éste. El juicio de valor puede llevar a la aceptación o rechazo de la evidencia, según se ajuste o no a dichos criterios de calidad.',
    },
  ],
  complementario: [
    {
      texto: 'SENA.(2020)  Guía de desarrollo curricular. Bogotá. ',
      tipo: 'Guía',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/1758/Manual_Dise%c3%b1o_Curricular_2005.pdf?sequence=11&isAllowed=y ',
    },
    {
      texto: 'SENA. (1985). Unidad Técnica. Bogotá.',
      tipo: 'Unidad Técnica',
      link:
        'https://normograma.sena.edu.co/normograma/docs/acuerdo_sena_0012_1985.htm',
    },
    {
      texto:
        'SENA. (2003). Guía para elaborar instrumentos de evaluación en módulos de formación por competencia laboral. Bogotá.',
      tipo: 'Guía',
      link: [
        'https://repositorio.sena.edu.co/bitstream/handle/11404/3683/metodologia_evaluar_cert_comp_la?sequence=1 ',
      ],
    },
    {
      texto:
        'SENA. (2006). Procedimiento para la ejecución de acciones de formación profesional. Bogotá.',
      tipo: 'Procedimiento',
      link: ['https://repositorio.sena.edu.co/handle/11404/2535'],
    },
    {
      texto:
        'Pimienta Prieto, J. H. (2008). Evaluación de los aprendizajes: Un enfoque basado en competencias. México: Pearson Educación.',
      tipo: 'Artículo',
      descarga: ['/downloads/evaluacion.pdf'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Instructora Experta Temática',
        centro: 'Centro de Desarrollo Tecnológico Industrial – Valle',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia  Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
