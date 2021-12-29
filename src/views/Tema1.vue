<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Evaluación del aprendizaje
    p.mb-5 <b>La evaluación del aprendizaje en el SENA</b> (2013, p.56), se entiende como:
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg--1-claro.p-4.position-relative.hover.hover-flip
          p.mb-0.mt-4 Un <b>proceso integrado al de enseñanza-aprendizaje</b>, no es un concepto independiente, ni aislado del aprendizaje, es parte constitutiva de este, en la medida que detecta sus fortalezas y sus debilidades, potencializa las oportunidades para retroalimentar permanentemente, desde el inicio hasta más allá de su finalización (etapa productiva), lo cual lo caracteriza como un proceso sistemático, intencional y riguroso, efecto natural de una cuidadosa planeación metodológica del proceso de enseñanza-aprendizaje-evaluación.
          .img(style=" position: absolute; top: -20%;  left: 0; width: 100%;  ")
            img(src="@/assets/curso/1.svg" alt="Adornos flotantes" style=" width: 70px").m-auto
    p.mb-5 Para lograr la certificación, la evaluación, no se determina solo por juicios cuantitativos, como se muestra a continuación.
    .titulo-sexto.color-acento-botones
      h5 Figura 1
      span La evaluación
    .row.mb-5.justify-content-center(data-aos='zoom-in-up')
      .col-lg-6
        figure
          img(src='@/assets/curso/2.svg', alt='Texto que describa la imagen').mb-3
          figcaption Nota. Tomado de Unidad Técnica (SENA,1985 p.71)
    p.mb-5 De acuerdo con lo anterior, la evaluación es un conjunto de acciones permanentes, pertinentes y necesarias que permiten valorar el proceso de enseñanza-aprendizaje y asegurar el adecuado desarrollo de la formación, así como el cumplimiento de sus objetivos, de manera dinámica y mancomunada entre el aprendiz y el instructor. 
    .row.justify-content-center.mb-5
      .col-lg-10.bloque-1
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 <b>La evaluación, debe estar fundamentada en las competencias de aprendizaje y en el desarrollo curricular del programa de formación</b>, así como responder a criterios claros y precisos de actualidad, validez, confiabilidad y autenticidad (Guía para elaborar instrumentos de evaluación en módulos de formación por competencias. SENA 
    p.mb-5 En el siguiente mapa se presenta cómo se concibe el proceso de evaluación en el SENA.
    .titulo-sexto.color-acento-botones
      h5 Figura 2
      span La evaluación en el SENA
    .row.mb-5.justify-content-center(data-aos='zoom-in-up')
      .col-lg-12
        figure
          img(src='@/assets/curso/4.svg', alt='Texto que describa la imagen').mb-3
    #t_1_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.1 Principios de la evaluación
    .row.mb-5
      .col-lg-7(data-aos='fade-right')
        p De acuerdo con Lucio (1978) y la UNESCO (2016), hoy en día, los Instructores del siglo XXI, no deben mirar a los aprendices como una masa, sino que cada uno tiene sus necesidades particulares, aunque el Instructor los puede agrupar, siempre va a encontrar individualidades. Se debe recordar que el instructor actualmente asume el papel de mediador del conocimiento y que carece de técnicas y procedimientos infalibles, que en cualquier actividad de evaluación que se plantee, no necesariamente esta es infalible; el hecho de que los aprendices no logren el porcentaje establecido adecuado, quiere decir que hay una falla en el diseño de la técnica o del procedimiento;  en algunos casos requiere de la participación de diferentes personas, así como de  una gran variedad de técnicas para recoger información, para lograr no la recompensa o el castigo sino  investigar cómo mejorar el producto y el proceso de aprendizaje. 
      .col-lg-5(data-aos='fade-left'): img(src='@/assets/curso/5.svg', alt='Texto que describa la imagen').mb-3
    p.mb-5 En ese sentido, la evaluación debe contar con dos principios:
    .row.mb-5.justify-content-center
      .col-lg-5.mb-3
        .tarjeta-titulo.tarjeta.color-primario--borde.p-5(style= 'height: 444px')(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/6.jpg', alt='Texto que describa la imagen')
          .tarjeta-titulo__titulo.bg--1.p-4
            h2.text-center.text-white Integridad
          .tarjeta-titulo__contenido.d-flex.justify-content-center.align-items-center.p-5
            .textos.text-center
              h4 Integridad
              p Es un principio clave, la evaluación es parte integrante e integradora de todo el proceso global de la educación en todos niveles; es decir la evaluación forma parte de todo y no es la calificación puntual, sino que el Instructor en todo momento está evaluando, el proceso de enseñanza-aprendizaje.
      .col-lg-5.mb-3
        .tarjeta-titulo.tarjeta.color-acento-botones--borde.p-5(style= 'height: 444px')
          img(src='@/assets/curso/7.jpg', alt='Texto que describa la imagen')
          .tarjeta-titulo__titulo.bg--4.p-4
            h2.text-center.text-white Contexto
          .tarjeta-titulo__contenido.d-flex.justify-content-center.align-items-center.p-5
            .textos.text-center
              h4 Contexto
              p El segundo principio es tener en cuenta las condiciones bajo las cuales se da la evaluación; la evaluación es un medio y no es un fin en sí misma, la evaluación también debe evaluarse.  La evaluación, no es el centro, es parte del proceso (enseñanza-aprendizaje-evaluación). 
    #t_1_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.2 Función de la evaluación
    p.mb-5 Según el SENA (1985):
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg--1-claro.p-4.position-relative.hover.hover-flip
          p.mb-0.mt-4 La función de la evaluación, es el para qué, supone la delimitación previa del qué. Por ello, conviene tener presente lo que la Unidad Técnica, plantea expresamente sobre el objeto de esta, a saber, <b>“el desarrollo de conocimientos científicos y tecnológicos y de habilidades técnicas, la asimilación de valores humanos y sociales y la generación de las correspondientes actitudes, así como el desarrollo de la capacidad de aprender de manera permanente. (p. 27)</b>
          .img(style=" position: absolute; top: -20%;  left: 0; width: 100%;  ")
            img(src="@/assets/curso/1.svg" alt="Adornos flotantes" style=" width: 70px").m-auto
    p.mb-5 Se desprende de esto que el propósito de la evaluación no es calificar o medir sin más; es decir, no es la simple asignación de un juicio cuantitativo para satisfacer las demandas institucionales o cumplir un requisito al cabo del proceso formativo.  Por el contrario, el fin de la evaluación es contribuir de manera decisiva con el mejoramiento permanente del aprendiz en lo que se refiere al desarrollo de los conocimientos, habilidades y demás factores que intervienen en su aprendizaje en aras de alcanzar los logros propuestos. Observe el siguiente material, el cual ofrece una diferenciación entre lo que es calificar y evaluar.
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Introducción")
        .row.justify-content-center
          .col-md-2
            figure
              img(src='@/assets/curso/8.jpg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 Introducción
            p El propósito de la evaluación no es calificar o medir sin más; es decir, no es la simple asignación de un juicio cuantitativo para satisfacer las demandas institucionales o cumplir un requisito al cabo del proceso formativo.  
              br
              br
              |Por el contrario, el fin de la evaluación es contribuir de manera decisiva con el mejoramiento permanente del aprendiz en lo que se refiere al desarrollo de los conocimientos, habilidades y demás factores que intervienen en su aprendizaje en aras de alcanzar los logros propuestos.
      .py-3.py-md-4(titulo="Medir o evaluar")
        #carouselExampleIndicators.carousel.slide.carousel1(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
          .carousel-inner.pb-5
            .carousel-item.active
              figure
                img(src='@/assets/curso/9.svg', alt='Texto que describa la imagen')
            .carousel-item
              figure
                img(src='@/assets/curso/10.svg', alt='Texto que describa la imagen')
            .carousel-item
              figure
                img(src='@/assets/curso/11.svg', alt='Texto que describa la imagen')
            .carousel-item
              figure
                img(src='@/assets/curso/12.svg', alt='Texto que describa la imagen')
            .carousel-item
              figure
                img(src='@/assets/curso/13.svg', alt='Texto que describa la imagen')
            .carousel-item
              figure
                img(src='@/assets/curso/14.svg', alt='Texto que describa la imagen')
            .carousel-item
              figure
                img(src='@/assets/curso/15.svg', alt='Texto que describa la imagen')
          //- button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          //-   span.carousel-control-prev-icon(aria-hidden='true')
          //-   span.visually-hidden Previous
          //- button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          //-   span.carousel-control-next-icon(aria-hidden='true')
          //-   span.visually-hidden Next
      .py-3.py-md-4(titulo="En conclusión")
        .row.justify-content-center
          .col-md-2
            figure
              img(src='@/assets/curso/15.jpg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 Conclusiones
            p Conocer los referentes de la Medición y Evaluación de Aprendizajes es una respuesta a la necesidad concreta detectada en nuestro país, principalmente en el ámbito educativo, de formar equipos de profesionales preparados para desarrollar instrumentos de medición válidos, confiables, relevantes y pertinentes, y para utilizar adecuadamente los resultados de las mediciones para promover el aprendizaje de los estudiantes y evaluar la eficiencia y eficacia de las acciones pedagógicas implementadas (Manzi, 2009).
              br
              br
              |Hay una gran diferencia entre medir y evaluar. Evaluar es enjuiciar y valorar a partir de cierta información desprendida de la realidad, de modo que en el proceso de enseñanza-aprendizaje la información puede ser la medición o cuantificación de los datos aportados por los exámenes, siempre y cuando dé lugar a ulteriores interpretaciones o establecimiento de juicios. Por su parte, Medir es cuantificar aciertos y errores y adjudicar calificaciones, son entonces pasos previos a la verdadera evaluación, suele ser deseable como antecedente de esta, por el mayor rango de objetividad que ofrece. (Universidad El Rosario, 2018) 
      .py-3.py-md-4(titulo="Glosario")
        .row.justify-content-center
          .col-md-2
            figure
              img(src='@/assets/curso/16.jpg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 Glosario
            p <b>Aprendizaje.</b> Resultado observado en forma de cambio más o menos permanente del comportamiento de una persona, que se produce como consecuencia de una acción sistemática (por ejemplo de la enseñanza) o simplemente de una práctica realizada por el aprendiz.
              br
              br
              |<b>Autoevaluación.</b> Procedimiento de evaluación según el cual un estudiante se evalúa a si mismo, emitiendo juicios sobre el aprendizaje logrado.
              br
              br
              |<b>Calificación.</b> Expresión numérica o nominal que genera normalmente un profesor, tutor o supervisor, para resumir la valoración de los logros de aprendizaje conseguidos por el estudiante.
              br
              br
              |<b>Criterios de evaluación.</b> Referentes que se adoptan para establecer una comparación con el objeto evaluado. En el caso del aprendizaje, suelen fijarse como criterios una serie de objetivos o competencias que el estudiante debe alcanzar.
              br
              br
              |<b>Evaluación continua.</b> Actividad valorativa que se realiza a lo largo de un proceso, de forma simultánea al desarrollo de los fenómenos evaluados. Permite apreciar la evolución del objeto evaluado a lo largo del tiempo y valorar el modo en que se va avanzando en el logro de los objetivos propuestos.
              br
              br
              |<b>Evaluación final.</b> Comprobación de los resultados logrados al final de un proceso y valoración de los mismos en función de los criterios adoptados.
              br
              br
              |<b>Evaluación formativa.</b> Evaluación orientada a facilitar la adopción de decisiones internas que posibiliten la mejora de los objetos o procesos evaluados.
              br
              br
              |<b>Evaluación inicial (o evaluación diagnóstica).</b> Descripción y valoración del punto de partida en el que se inicia un proceso, permitiendo enfocar y adaptar dicho proceso a la situación real.
              br
              br
              |<b>Evaluación para la mejora.</b> Actividad de evaluación entendida como proceso orientado, ante todo, a la mejora del objeto evaluado. Corresponde a una evaluación con sentido formativo. 
    p.mb-5 En uno de los documentos institucionales que sirve de orientación al instructor para su desempeño profesional denominado Base teórica conceptual para la elaboración de la planeación pedagógica, se exponen de manera específica y explícita cuáles son los fines de la evaluación:
    #carouselExampleIndicators2.carousel.slide.carousel2(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='3' aria-label='Slide 1')
          .carousel-inner.px-3
            .carousel-item.active
              .row.mb-5.justify-content-center
                .col-lg-10
                  .row
                    .col-lg-4
                      .tarjeta.bg--2-claro.p-4.h-100
                        p.mb-3 El instructor ajuste su acción y, en consecuencia, regule el proceso de enseñanza-aprendizaje a partir de la información obtenida en la evaluación, esta le posibilita la toma acertada de decisiones:
                        ul.lista-ul.c--1
                          li 
                            i.fas.fa-check
                            | Puede continuar de acuerdo con lo planeado. 
                          li 
                            i.fas.fa-check
                            | Es necesario reforzar algunas actividades de aprendizaje o cambiarlas por otras. 
                          li 
                            i.fas.fa-check
                            | Se requiere dedicar más tiempo a determinada fase del proceso.
                    .col-lg-4
                      .tarjeta.bg--4-claro3.p-4.h-100.d-flex.justify-content-center.align-items-center
                        .contenido
                          img(src='@/assets/curso/17.svg', alt='Texto que describa la imagen' style='width: 70px').mb-3
                          p El aprendiz hace evidentes las actitudes, los valores, los saberes y los haceres que ha construido con aciertos y debilidades.
                    .col-lg-4
                      .tarjeta.bg--2-claro.p-4.h-100.d-flex.justify-content-center.align-items-center
                        .contenido
                          img(src='@/assets/curso/17.svg', alt='Texto que describa la imagen' style='width: 70px').mb-3
                          p El aprendiz interprete, analice y proyecte el qué y el cómo de su aprendizaje; es decir, la evaluación le permite llevar a cabo un proceso de metacognición.
            .carousel-item.h-100
              .row.mb-5.justify-content-center
                .col-lg-10
                  .row.justify-content-center
                    .col-lg-4
                      .tarjeta.bg--4-claro3.p-4.d-flex.justify-content-center.align-items-center(style='height: 411px')
                        .contenido
                          img(src='@/assets/curso/17.svg', alt='Texto que describa la imagen' style='width: 70px').mb-3
                          p Se convierte en factor de motivación de los aprendices, puesto que genera reflexión y precisa puntos clave de mejora.
                    .col-lg-4
                      .tarjeta.bg--2-claro.p-4.h-100.d-flex.justify-content-center.align-items-center(st)
                        .contenido
                          img(src='@/assets/curso/17.svg', alt='Texto que describa la imagen' style='width: 70px').mb-3
                          p Se verifique el desarrollo de las competencias previstas en el programa de formación SENA (2013, p. 85).
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg--1-claro.p-4.position-relative.hover.hover-flip
          p.mb-0.mt-4 Asimismo, en Procedimiento para la ejecución de acciones de formación profesional integral SENA (2006, p.14), se exponen algunos objetivos de la evaluación que conviene considerar y que complementan los ya citados, como: “Estimular y afianzar los valores y las actitudes propios de la convivencia social, ofrecer al alumno oportunidades para ser creativo, crítico y analítico”, entre otros.
          .img(style=" position: absolute; top: -20%;  left: 0; width: 100%;  ")
            img(src="@/assets/curso/1.svg" alt="Adornos flotantes" style=" width: 70px").m-auto
    p.mb-5 Cabe resaltar que la evaluación no apunta a determinar el nivel de dominio del conocimiento declarativo y teórico del aprendiz, sino su puesta en escena en contextos y situaciones concretas de la realidad en los ámbitos personal, social y profesional. Por ello, es necesario señalar las principales características de la evaluación SENA, (2013, p. 59-64):
    .titulo-sexto.color-acento-botones
      h5 Figura 2
      span Características de la evaluación SENA
    .contenedor.d-flex.justify-content-center.align-items-center.flex-wrap.mb-5
      .tarjeta-titulo.tarjeta.color-primario--borde.p-5(style= 'height: 464px; width: 229px;').me-2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/18.jpg', alt='Texto que describa la imagen')
          .tarjeta-titulo__titulo.bg--1.p-4
            h2.text-center.text-white Cualitativa
          .tarjeta-titulo__contenido.d-flex.justify-content-center.p-5
            .textos.text-small
              p Enfatiza la reflexión y el análisis con respecto a las situaciones concretas que enfrenta el aprendiz en su proceso de formación.
      .tarjeta-titulo.tarjeta.color-acento-botones--borde.p-5(style= 'height: 464px; width: 229px;').me-2
          img(src='@/assets/curso/19.jpg', alt='Texto que describa la imagen')
          .tarjeta-titulo__titulo.bg--4.p-4
            h2.text-center.text-white Integral
          .tarjeta-titulo__contenido.d-flex.justify-content-center.p-5
            .textos.text-small
              p Se centra en el saber hacer en contexto del aprendiz y tiene como uno de sus pilares fundamentales la dimensión valorativa-actitudinal: aprender a ser.
      .tarjeta-titulo.tarjeta.color-primario--borde.p-5(style= 'height: 464px; width: 229px;').me-2
          img(src='@/assets/curso/20.jpg', alt='Texto que describa la imagen')
          .tarjeta-titulo__titulo.bg--1.p-4
            h2.text-center.text-white Continua y permanente
          .tarjeta-titulo__contenido.d-flex.justify-content-center.p-5
            .textos.text-small
              p Responde a la necesidad de reconocer el avance en el logro de los objetivos del proceso de formación en un momento específico de este, así como las dificultades que lo están impidiendo.
      .tarjeta-titulo.tarjeta.color-acento-botones--borde.p-5(style= 'height: 464px; width: 229px;').me-2
          img(src='@/assets/curso/21.jpg', alt='Texto que describa la imagen')
          .tarjeta-titulo__titulo.bg--4.p-4
            h2.text-center.text-white Participativa
          .tarjeta-titulo__contenido.d-flex.justify-content-center.p-5
            .textos.text-small
              p Incluye a los actores del proceso formativo (instructor-aprendiz) y está constituida por la autoevaluación (la que realiza el aprendiz sobre su proceso formativo), la coevaluación (la realizan los aprendices recíprocamente sobre su desempeño) y la heteroevaluación (realizada por el instructor sobre el desempeño del aprendiz).
      .tarjeta-titulo.tarjeta.color-primario--borde.p-5(style= 'height: 464px; width: 229px;').me-2
          img(src='@/assets/curso/22.jpg', alt='Texto que describa la imagen')
          .tarjeta-titulo__titulo.bg--1.p-4
            h2.text-center.text-white Flexible
          .tarjeta-titulo__contenido.d-flex.justify-content-center.p-5
            .textos.text-small
              p Responde a diferentes factores que inciden en el desempeño del aprendiz considerando particularidades personales como los ritmos, estilos, fortalezas, debilidades e intereses en aras de valorar adecuadamente el proceso de aprendizaje.
    p.mb-5 Finalmente es <b>importante recordar que a la luz del Decreto 1330 de 2019 (MEN, 2019)</b>, se hace necesario diferenciar claramente las siguientes funciones de la evaluación para los ciudadanos del siglo XXI:
    #carouselExampleIndicators3.carousel.slide.carousel3(data-interval="false").mb-5
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='4' aria-label='Slide 1')
          .carousel-inner.px-5
            .row.justify-content-center
              .col-lg-12
                .tarjeta.p-5
                  .carousel-item.active.bg-1.p-5.tarjeta
                    .row.align-items-center
                      .col-lg-8
                        p Analizar y valorar el papel de todos los elementos que intervienen en el proceso educativo de manera que se pueda ajustar la ayuda pedagógica a las características de mis aprendices a la naturaleza de la asignatura mediante aproximaciones sucesivas.

                      .col-lg-4: img(src='@/assets/curso/23.png', alt='Texto que describa la imagen')
                  .carousel-item.bg-1.p-5.tarjeta
                    .row.align-items-center
                      .col-lg-8
                        p Determinar el grado en que se consiguieron las intenciones iniciales del objetivo o del proyecto educativo o de la planificación y comprobar la aparición de resultados de aprendizaje no previstos inicialmente, porque en el proceso también pueden aparecer resultados no previstos que no estaban contemplados y que son muy valiosos en el proceso de enseñanza-aprendizaje.

                      .col-lg-4: img(src='@/assets/curso/24.png', alt='Texto que describa la imagen')
                  .carousel-item.bg-1.p-5.tarjeta
                    .row.align-items-center
                      .col-lg-8
                        p Reforzar el <i>carácter democrático</i> del proceso de aprendizaje poniendo toda la información al servicio de los Aprendices que intervienen directa o indirectamente en el mismo y este aspecto es muy importante en la comunicación de la evaluación porque encontramos que hay muchos Instructores que pareciera que se adueñan de este proceso, es decir, mantienen oculta las calificaciones mantienen, ocultos los resultados y esto es totalmente negativo por lo tanto es importante que la evaluación sea del Aprendiz y que él continuamente sepa cuáles son los resultados o cómo ha ido el proceso. 

                      .col-lg-4: img(src='@/assets/curso/25.png', alt='Texto que describa la imagen')
                  .carousel-item.bg-1.p-5.tarjeta
                    .row.align-items-center
                      .col-lg-8
                        p Diferenciar la calificación de solo una <i>evaluación sumativa</i> donde se colocan notas o colocan letras, la evaluación es mucho más que la calificación y debe estar centrada en las dimensiones: describir, interpretar y valorar, el proceso de formación que ha realizado el Aprendiz, con la mirada puesta siempre en permitir sucesivas correcciones y mejoras.  Por ejemplo: muchas veces tenemos Aprendices que son muy participativos que conocemos que estudian que asisten puntualmente a clases y luego en el examen, ante cualquier situación nos logran aprobar, en estos casos es donde el Instructor debe colocar en juego los principios de evaluación que no es lo mismo que la calificación.

                      .col-lg-4: img(src='@/assets/curso/26.png', alt='Texto que describa la imagen')
              
                
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    #t_1_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.3. Tipos de evaluación
    p.mb-5 Con respecto al cuándo evaluar, se señalan tres momentos de evaluación: inicial, de proceso y final. Estos momentos coinciden con los tipos de evaluación: diagnóstica, formativa y sumativa o sumaria (Scriven, 1967; Díaz Barriga y Hernández, 2002; Nirenberg, Brawerman y Ruiz, 2003).
    figure.mb-5(data-aos='zoom-in-up')
      img(src='@/assets/curso/27.svg', alt='Texto que describa la imagen')
    h3(data-aos='fade-right') Evaluación Diagnóstica:  
    p.mb-5 Tiene por finalidad identificar las aptitudes, conocimientos, habilidades, destrezas, los intereses y las motivaciones que tienen los aprendices para el logro de los objetivos del proceso formativo que están por iniciar.  
      br
      br
      |Es importante aclarar que cuando se habla de evaluación diagnóstica no solo se realiza al comienzo del curso, sino que es un proceso que se debe realizar antes de iniciar cada nuevo tema o contenido, es decir, es una evaluación continua, que permite conocer el grado de motivación o interés que tienen los aprendices hacia el tema propuesto; descubriendo respuestas como, por ejemplo: 
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3
        .bloque-texto-b.color-acento-botones.p-4
          .bloque-texto-b__texto
            h2.mb-0 ¿Qué contenidos tienen mayor dificultad?
      .col-lg-7
        p Y esto se puede determinar a partir de la conversación con los aprendices si ya han visto el tema en tiempos anteriores o si todos los aprendices poseen las mismas habilidades y los conocimientos necesarios para iniciar el proceso de aprendizaje, o si hay estudiantes que tienen más habilidades o más conocimientos que otros y eso puede dar la pauta para un futuro trabajo en equipo.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/28.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0.h5 El Instructor SENA a partir de los resultados de la evaluación diagnóstica adaptará las estrategias que ha planificado para la enseñanza o la que va a proponer a los Aprendices para sus intereses y características de un grupo en concreto.
    h3(data-aos='fade-right') Evaluación formativa: 
    p.mb-5 Esta evaluación no tiene la finalidad calificar, sino que tiene la finalidad de determinar en qué medida se están logrando los resultados de aprendizaje, se aplica durante el desarrollo de la estrategia de aprendizaje y sus resultados permitirán de manera inmediata si fuera el caso reorientar al aprendiz en el proceso; es decir, la evaluación formativa permite al Instructor el monitoreo continuo para redirigir y verificar el alcance del aprendizaje.  A continuación, se presentan las formas básicas de evaluación formativa:  
    .row.mb-5.justify-content-center
      .col-lg-6
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/29.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Autoevaluación
            p Como su nombre lo indica es la evaluación que cada Aprendiz hace de su propio trabajo, es la evaluación de sí mismo, a través de ella el estudiante puede reconocer sus logros sus deficiencias, analizar y considerar su actuación individual y cómo se ha integrado al grupo y lo que promueve es el desarrollo de una actitud autocrítica.
      .col-lg-6
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          img(src="@/assets/curso/30.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Coevaluación
            p Esta evaluación es la que tiene que ver con el otro, es decir la evaluación entre pares o en grupo que es lo que conocemos como evaluación recíproca que realizan los Aprendices que están siendo evaluados.  El Instructor tradicionalmente no participa del proceso de coevaluación porque él no está siendo evaluado en ese momento; este proceso se hace sobre la actuación de cada uno y del grupo como un todo. Puede incluir al Instructor siempre y cuando el Instructor no esté calificando.
      p.mb-5.mt-5 Este tipo de evaluación permite:
      .row.mb-5
        .col-lg-6.mb-2.mb-lg-0
          .d-flex.justify-content-center.align-items-center.h-100.hover
            img(src="@/assets/curso/31.svg" alt="Adornos flotantes" style="width: 85px ").me-3
            p.mb-0 <b>Desarrollar en los Aprendices actitudes y expresar opiniones</b> como resultado de la reflexión y la crítica ante las diferentes situaciones que se están presentando.  
          hr 
        .col-lg-6.mb-2.mb-lg-0
          .d-flex.justify-content-center.align-items-center.h-100.hover
            img(src="@/assets/curso/32.svg" alt="Adornos flotantes" style="width: 85px ").me-3
            p.mb-0 <b>Aportar soluciones para el mejoramiento individual y colectivo</b>. Poner en práctica la convivencia del grupo, que entre ellos puedan determinar cuáles son los logros, cuáles son los avances y determinar por supuesto logros tanto personales como grupales.  
          hr 
      .row.mb-5.align-items-center
        .col-lg-6.mb-2.mb-lg-0
          .d-flex.justify-content-center.align-items-center.h-100.hover
            img(src="@/assets/curso/33.svg" alt="Adornos flotantes" style="width: 85px ").me-3
            p.mb-0 Al <b>Instructor modificar la estrategia de aprendizaje</b>, mejorando los recursos que está utilizando sobre todo cuando se observa que existe un número suficiente de Aprendices que no están logrando el aprendizaje. 
          hr.d-lg-none 
        .col-lg-6.mb-2.mb-lg-0
          .d-flex.justify-content-center.align-items-center.h-100.hover
            img(src="@/assets/curso/34.svg" alt="Adornos flotantes" style="width: 85px ").me-3
            p.mb-0 <b>A los aprendices planificar y desarrollar actividades previas a la evaluación sumativa tanto individual como grupal</b>, de manera que se puedan resolver esas diferencias antes de verse sometidos a la evaluación sumativa y además permite precisar cuáles son las dificultades de cada Aprendiz.
    .bg--2-claro4.p-3.br-1.mb-5
      .row.justify-content-center
        .col-lg-4.imagen-ab
          img(src="@/assets/curso/35.svg" alt="Adornos flotantes" style="width: 100% ").mb-2
        .col-lg-7
          p En la coevaluación hacemos un énfasis porque generalmente se presenta un  problema, muchas veces el Instructor califica la estrategia de enseñanza o de aprendizaje que está usando y lo hace en nombre de la evaluación formativa, es  decir, hay una irregularidad si el Instructor diseña una estrategia de aprendizaje y la toma como evaluación, esta no se debería calificar, sino que hace parte del proceso de aprendizaje.
            br
            br
            |Es muy común ver en nuestros espacios académicos que el Instructor propone la elaboración de un trabajo de investigación y esa es su estrategia de aprendizaje y la califica o plantea la elaboración de un mapa conceptual y lo califica, pero esa actividad de evaluación fue diseñada para que el Aprendiz aprenda el contenido.  Por lo tanto, no debe considerarse como evaluación sumativa.
            br
            br
            |Lo correcto sería que los Aprendices, elaboran un mapa mental para aprender y luego el Instructor si ve la oportunidad de realizar una evaluación sumativa puede hacerlo con una exposición de ese mapa, garantizando que el Aprendiz tiene el derecho a equivocarse porque está aprendiendo y no aplicarle evaluación sumativa en el proceso de aprender.
    p.mb-5 Y haciendo énfasis en esta aclaración pasamos a la siguiente evaluación:
    h3(data-aos='fade-right') Evaluación sumativa
    .row.mb-5
      .col-lg-7(data-aos='fade-right')
        p Tiene por finalidad determinar ahora si el logro de los resultados de aprendizaje, con el fin de calificar al Aprendiz y orientar las decisiones procedentes por parte del Instructor, cuando hablamos de evaluación sumativa es una actividad específica para calificar y se cumple a través de las siguientes formas: parciales, finales, extraordinarias; revisiones, equivalencias o revalidación es decir es un instrumento específico que determina una nota, el resultado del proceso de enseñanza-aprendizaje.
      .col-lg-5(data-aos='fade-left'): img(src='@/assets/curso/36.jpg')
    #t_1_4.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.4. Dimensiones de la evaluación
    .row.mb-5
      .col-lg-7(data-aos='fade-right')
        p Las dimensiones de la evaluación se expresan como dimensiones del aprendizaje y corresponden a las áreas de desarrollo humano que constituyen la integralidad de la formación profesional, a saber, cognitiva, psicomotriz o procedimental y afectiva o valorativa-actitudinal.
          br
          br
          |Cada competencia debe incluir las tres áreas como objetivo general de la formación; de lo contrario, no podría hablarse de integralidad del proceso formativo. Por otra parte, los resultados de aprendizaje pueden enfocarse en el desempeño de una de las tres áreas con el fin de promover logros de objetivos específicos SENA (2013, p. 25-26). En este sentido, conviene recordar que cada tipo de evidencia busca promover el desarrollo de una de las áreas mencionadas, así: 
      .col-lg-5(data-aos='fade-left'): img(src='@/assets/curso/37.jpg')
    figure(data-aos='zoom-in-up').mb-5
      img(src='@/assets/curso/38.svg')
    p.mb-5 En consecuencia, con miras a determinar el tipo de evidencia que se solicitará en cada caso y lograr el propósito de la evaluación, conviene considerar dichas dimensiones:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Aprender a aprender (área cognitiva)").align-items-center.justify-content-center
        .col-md-2
          figure
            img(src='@/assets/curso/39.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p.mb-0 Corresponde al <b>“desarrollo de habilidades de pensamiento de orden superior que facultan al aprendiz para interpretar, para argumentar, para proponer, para discernir, para tomar decisiones, entre otras. El aprendiz sabe el qué, el por qué y el para qué del conocimiento; le encuentra significado a lo aprendido, lo resignifica, lo contextualiza y lo aplica, trascendiendo procesos de memorización que, si bien son importantes, son insuficientes”</b> (2013:36). Responde a la pregunta ¿qué debe saber el aprendiz para lograr determinado resultado de aprendizaje?
      .row(titulo="Aprender a hacer (área psicomotriz, procedimental o biofísica)").align-items-center.justify-content-center
        .col-md-2
          figure
            img(src='@/assets/curso/40.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p.mb-0 <b>“En esta área converge la aplicación de los principios científicos y el uso de tecnologías y técnicas a la producción y distribución de bienes y servicios, es decir, para el contexto productivo; igualmente para el contexto social”</b> (2013:30). Responde a la pregunta ¿qué debe saber hacer el aprendiz para lograr determinado resultado de aprendizaje?
      .row(titulo="Aprender a ser (afectiva o valorativa-actitudinal)").align-items-center.justify-content-center
        .col-md-2
          figure
            img(src='@/assets/curso/41.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p.mb-0 «Todo ser humano <b>“es”</b> y se <b>“construye humanamente”</b> en relación con los otros seres con quienes interactúa en medio de un entorno, esta interacción se expresa mediante acciones, actitudes, lenguajes…, resultado de un proceso de aprendizaje que le permite al aprendiz reconfigurar desde sí mismo a partir del fortalecimiento de un sistema de valores y actitudes que le posibilita crecer como persona, como ciudadano y como trabajador mediante el establecimiento de interrelaciones asertivas que redundan en la construcción de comunidad, de ciudadanía y de productividad» (2013:36-37). Responde a la pregunta ¿cómo debe ser el aprendiz para lograr determinado resultado(s) de aprendizaje?
    #t_1_5.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.5 Métodos de evaluación 
    p.mb-5 La visión actual de la evaluación no solo está orientada a su carácter medición lista, es decir a realizar exámenes escritos y calificados mediante puntuaciones cuantitativas, además las pruebas estandarizadas ignoran la importancia del conocimiento holístico y la integración de todo el conocimiento; en este sentido el Instructor del siglo XXI se encuentra frente a un reto importante que es:
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/42.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0.h5 Desarrollar Métodos de evaluación que respondan a una interpretación del conocimiento y a una transferencia de dicho conocimiento a otros contextos.
    p.mb-5 Los métodos de evaluación alternativos a las necesidades de los ciudadanos de la era del conocimiento están enfocados más hacia el proceso que el resultado, concentrándose en el crecimiento del Aprendiz, donde se destacan las fortalezas de los Aprendices en lugar de las debilidades las variedades de sus opciones permiten tomar en consideración los estilos de aprendizaje las capacidades lingüísticas y las experiencias culturales y educativas.
      br
      br
      |A continuación, se abordan algunos métodos donde las técnicas asociadas son la observación, la entrevista y el análisis o producción de documentos (Ibarra & Rodríguez,, 1999).
    TabsA.color-primario.mb-5
      .tarjeta.bg--2-claro5.p-4(titulo="Observación")
        h4 Observación
        p A través de la observación se puede obtener información sobre un hecho (producto) y sobre cómo se produce (proceso).
        h4 Se debe contemplar:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.bg--2
              span 1
            | El objeto de la observación (¿qué vamos a observar?).
          li 
            .lista-ol--cuadro__vineta.bg--2
              span 2
            | El contexto y la naturaleza en el que se desarrolla la situación que observamos.
          li 
            .lista-ol--cuadro__vineta.bg--2
              span 3
            | A cuántos sujetos vamos a observar.
          li 
            .lista-ol--cuadro__vineta.bg--2
              span 4
            | La duración total y la distribución del tiempo de observación.
          li 
            .lista-ol--cuadro__vineta.bg--2
              span 5
            | Cómo vamos a registrar la información.
          li 
            .lista-ol--cuadro__vineta.bg--2
              span 6
            | La representatividad de las observaciones.
          li 
            .lista-ol--cuadro__vineta.bg--2
              span 7
            | El valor de los comportamientos observados.
      .tarjeta.bg--2-claro5.p-4(titulo="Entrevista")
        h4 Entrevista
        p La entrevista es una técnica de recogida de información mediante la cual la persona que entrevista solicita y obtiene información de otra persona o grupo de personas. Se basa en una relación personal y una interacción verbal.
          br
          br
          |En evaluación, la entrevista en profundidad ofrece amplias posibilidades, ya que nos permite conocer aspectos sobre el proceso de aprendizaje (estrategias desarrolladas, planificación de tareas, dificultades, medios utilizados…), y no solo sobre el producto.
      .tarjeta.bg--2-claro5.p-4(titulo="Análisis de producción o documentos")
        h4 Análisis de producción o documentos
        p Los documentos de aprendizaje hacen referencia a todo tipo de material escrito producido por los estudiantes (portafolios, ensayos, recensiones, proyectos de investigación, memorias, exámenes, etc.), cuyo análisis nos puede proporcionar información sobre estos, sobre el proceso de enseñanza-aprendizaje y/o sobre su resultado. 
    #t_1_6.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.6 Estrategias de evaluación
    p.mb-5 Es un plan de acción para valorar el aprendizaje de los aprendices, reconocer sus avances e identificar las interferencias, a fin de realizar una intervención efectiva en los procesos de enseñanza-aprendizaje.  Entonces las técnicas de evaluación son procedimientos utilizados por el Instructor para obtener información relacionada a los procesos de enseñanza-aprendizaje y los instrumentos de evaluación son recursos que se utilizan para recolectar y registrar información de los aprendices y su práctica docente.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/43.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0.h5 La RAE, define <b>"Medio"</b> como <b>"cosa que puede servir para un determinado fin"</b>. En este caso, el fin es evaluar, por tanto, <b>¿Qué se entiende por medio de evaluación?</b> Pruebas o evidencias que sirven para recabar información sobre el objeto a evaluar.
              br
              br
              |<b>Por ejemplo:</b> El ensayo, la prueba objetiva, el examen, el portafolio, o el mapa conceptual, la infografía, entre otros.
    h3(data-aos='fade-right') Técnicas de evaluación
    p.mb-5 Son respuestas al "cómo hacer'' para verificar el alcance de un fin o resultado propuesto. Se sitúan a nivel de los hechos o de las etapas prácticas que, a modo de dispositivos auxiliares, permiten la aplicación del método. Tienen un carácter práctico y operativo (Procedimiento para la ejecución de acciones de formación profesional. SENA. 2006. P.25). Veamos algunos de ellos, expuestos en el documento recién referenciado (p. 49-50). Una técnica sirve para recoger sistemáticamente información.
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5 Otras técnicas comúnmente empleadas son:
    .row.justify-content-center
      .col-lg-4.mb-3
        .tarjeta.bg--1-claro.p-5.position-relative.d-flex.align-items-center.hover
          .cont-img(style="position: absolute; top:0 ; left: -2%; height: 100%;").d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/51.svg' style="width: 106px;").m-auto
          p.ms-5.ps-3.mb-0.h5 La mesa redonda
      .col-lg-4.mb-3
        .tarjeta.bg--1-claro.p-5.position-relative.d-flex.align-items-center.hover
          .cont-img(style="position: absolute; top:0 ; left: -2%; height: 100%;").d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/52.svg' style="width: 106px;").m-auto
          p.ms-5.ps-3.mb-0.h5 El conversatorio
      .col-lg-4.mb-3
        .tarjeta.bg--1-claro.p-5.position-relative.d-flex.align-items-center.hover
          .cont-img(style="position: absolute; top:0 ; left: -2%; height: 100%;").d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/53.svg' style="width: 106px;").m-auto
          p.ms-5.ps-3.mb-0.h5 La entrevista
    .row.justify-content-center
      .col-lg-4.mb-3
        .tarjeta.bg--1-claro.p-5.position-relative.h-100.d-flex.align-items-center.hover
          .cont-img(style="position: absolute; top:0 ; left: -2%; height: 100%;").d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/54.svg' style="width: 106px;").m-auto
          p.ms-5.ps-3.mb-0.h5 Pruebas de comprensión, análisis, discusión crítica y, en general, de apropiación de conceptos
      .col-lg-4.mb-3
        .tarjeta.bg--1-claro.p-5.position-relative.h-100.d-flex.align-items-center.hover
          .cont-img(style="position: absolute; top:0 ; left: -2%; height: 100%;").d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/55.svg' style="width: 106px;").m-auto
          p.ms-5.ps-3.mb-0.h5 Foro, panel y seminario
      .col-lg-4.mb-3
        .tarjeta.bg--1-claro.p-5.position-relative.h-100.d-flex.align-items-center.hover
          .cont-img(style="position: absolute; top:0 ; left: -2%; height: 100%;").d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/56.svg' style="width: 106px;").m-auto
          p.ms-5.ps-3.mb-0.h5 Taller
    h3.mt-5(data-aos='fade-right') Instrumentos de evaluación
    p.mb-5 Son herramientas empleadas por el instructor con el fin de recolectar evidencias de aprendizaje, ya sea de conocimientos, desempeño y producto, en las distintas etapas del proceso formativo en concordancia con las actividades de aprendizaje expuestas en las guías de aprendizaje. A continuación, se citan algunos instrumentos de evaluación expuestos en el documento institucional Guía para elaborar instrumentos de evaluación en módulos de formación por competencia laboral (SENA. 2003:16-19).
    .row.mb-5.justify-content-center
      .col-lg-7(data-aos='fade-right')
        h4 Lista de chequeo o verificación: 
        p Está conformada por el enunciado afirmativo o interrogativo alrededor de una evidencia de aprendizaje en la cual se describen los aspectos más relevantes a tener en cuenta o verificar en el proceso de formación. Permite de esta manera evaluar si el estudiante cumple o no con la competencia en la actividad de enseñanza aprendizaje realizada. Debe indicar el número de veces que se considere necesario realizar dicho análisis de acuerdo con lo previsto en las evidencias aprendizaje requeridas por el módulo.
          br
          br
          |Con una lista de chequeo se puede estar cubriendo la observación de una o más evidencias de aprendizaje correspondientes a la actividad de EAE [enseñanza-aprendizaje-evaluación] en ejecución, caso en el que es necesario dejar claro a qué evidencias aplica.
        .cajon.color-acento-botones.bg--4-claro3.p-4.mb-4
          p <b>Las listas de chequeo se utilizan para documentar las evidencias de aprendizaje recogidas al aplicar la técnica de observación directa en ambiente natural de trabajo</b>, simulación de situaciones y valoración de productos. Se recomienda elaborar una lista de chequeo independiente para cada una de las técnicas que se utilicen, con el fin de presentar con mayor precisión la forma en que se recogieron dichas evidencias.
      .col-lg-5(data-aos='fade-left'): img(src='@/assets/curso/57.jpg')
    .row.mb-5.justify-content-center
      .col-lg-7(data-aos='fade-right')
        h4 La guía de preguntas o cuestionario
        p Se utiliza fundamentalmente para verificar las evidencias de conocimiento que debe tener un estudiante o trabajador para el logro de los resultados previstos en los criterios de evaluación y de desempeño, dentro del rango establecido. Igualmente permite complementar aspectos relacionados con la técnica de observación directa en ambiente natural de trabajo, simulación de situaciones y valoración del producto, especialmente sobre aquellas situaciones que normalmente no se presentan ni pueden ser evaluadas a través de estas técnicas, pero en las cuales es necesario confirmar la competencia del estudiante a través de casos hipotéticos o de otras alternativas.
      .col-lg-5(data-aos='fade-left'): img(src='@/assets/curso/58.jpg')
    p.mb-5 A continuación, se dan algunas recomendaciones generales para la elaboración de este instrumento de evaluación:
    .bg--4-claro3.p-5
      .row.px-5
        .col-lg-3: img(src='@/assets/curso/59.svg')
        .col-lg-9
          ul.lista-ul--color
            li.c--1
              i.fas.fa-check-circle
              | La formulación del enunciado de la pregunta debe ser breve, precisa y concisa, se deben usar palabras y términos sencillos, familiares y acordes al contexto cultural de los evaluados.
            li.c--1
              i.fas.fa-check-circle
              | El significado del enunciado debe ser igual para quien la lea, para evitar ambigüedades que generen confusión o imprecisión.
            li.c--1
              i.fas.fa-check-circle
              | La pregunta debe relacionarse con un objetivo particular.
            li.c--1
              i.fas.fa-check-circle
              | En caso de formar parte de un cuestionario, debe ser independiente de las demás preguntas; es decir, la respuesta de una pregunta no debe depender de otra.
            li.c--1
              i.fas.fa-check-circle
              | Es necesario evitar enunciados que sugieran la respuesta.
    #carouselExampleIndicators4.carousel.slide.carousel3(data-interval="false").mb-5
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide-to='6' aria-label='Slide 1')
          .carousel-inner.px-5.py-4
            .row.justify-content-center
              .col-lg-12
                .tarjeta.p-5
                  .carousel-item.active.bg-2.p-5.tarjeta
                    .row.align-items-center.py-5
                      .col-lg-8
                        h4 Preguntas que requieran la elaboración de algún tipo de respuesta: 
                        p Preguntas abiertas, que consisten en aplicar un cuestionario en forma interrogativa o no, que dan libertad al estudiante o trabajador para redactar la respuesta con la amplitud que considere necesario. Permite evidenciar la profundidad de sus conocimientos, y cierto tipo de desempeños, como redacción, lógica, análisis, síntesis, etc. A continuación puede revisar algunos ejemplos.
                        .c--4
                          h5 Describa el proceso de 
                            br
                            | _______________________________________________
                      .col-lg-4: img(src='@/assets/curso/60.svg', alt='Texto que describa la imagen')
                  .carousel-item.bg-2.p-5.tarjeta
                    .row.align-items-center.py-5
                      .col-lg-8
                        h4 Preguntas de respuesta breve: 
                        p Son preguntas que se responden escribiendo una palabra, frase, número o símbolo.
                        .c--4
                          h5 Los tipos de bombas de inyección son dos: ____________________ y __________________________
                      .col-lg-4: img(src='@/assets/curso/60.svg', alt='Texto que describa la imagen')
                  .carousel-item.bg-2.p-5.tarjeta
                    .row.align-items-center.py-5
                      .col-lg-8
                        h4 Preguntas que requieran la selección de algún tipo de respuesta: 
                        p Hacen referencia a las preguntas que exigen del estudiante o trabajador que, respecto de una serie de proposiciones, exprese su juicio marcando o subrayando expresiones tales como: <b>Si ___ No ___; Falso ___ Verdadero ___; Correcto ___ Incorrecto ___.</b> Este tipo de preguntas casi no se utiliza, pero en caso de ser utilizado, es importante tener en cuenta que la veracidad o falsedad está referida a todo el enunciado y no a parte de él, y evite colocar trampas o cáscaras.
                        .c--4
                          h5 Si a 7 veces un número se le agrega siete, el resultado es 98. ¿El número es 13? F ____ V _____
                      .col-lg-4: img(src='@/assets/curso/60.svg', alt='Texto que describa la imagen')
                  .carousel-item.bg-2.p-5.tarjeta
                    .row.align-items-center.py-5
                      .col-lg-8
                        h4 Preguntas de opción múltiple: 
                        p Están conformadas por un enunciado o base de la pregunta y una serie de opciones, dentro de los cuales hay una respuesta correcta. El enunciado debe ser redactado en lenguaje sencillo y de uso común, de tal forma que sea entendido sin necesidad de leer las opciones, usar términos precisos y evitar todo aquello que distraiga, confunda o sugiera la respuesta.
                        .c--4
                          h5 La madera se seca con el fin de:
                            br
                            |a) Balancear su volumen
                            br
                            |b) Hacerla más frágil
                            br
                            |c) Hacerla inmune a las plagas
                            br
                            |d) Aumentar su rigidez
                      .col-lg-4: img(src='@/assets/curso/60.svg', alt='Texto que describa la imagen')
                  .carousel-item.bg-2.p-5.tarjeta
                    .row.align-items-center.py-5
                      .col-lg-8
                        h4 Preguntas que requieran el ordenamiento de un contexto: 
                        p Son aquellas que exigen al estudiante o trabajador comprender la secuencia de una serie cronológica, generalmente utilizada para comprobar la capacidad para establecer el ordenamiento de periodos, estructuras, procedimientos, operaciones matemáticas, secuencia de aparición, etc
                        .c--4
                          h5 En un motor de combustión interna tenemos las siguientes partes:
                            br
                            |Bloque, Tapa de cárter, Tapa de balancines y Culata.
                            br
                            |Ordene para su armado de abajo hacia arriba.
                      .col-lg-4: img(src='@/assets/curso/60.svg', alt='Texto que describa la imagen')
                  .carousel-item.bg-2.p-5.tarjeta
                    .row.align-items-center.py-5
                      .col-lg-8
                        h4 Preguntas múltiples con enunciado común: 
                        p Consisten en la presentación de un enunciado que incluye texto, una gráfica, un mapa, un cuadro estadístico, y, a partir de la información que en ellos se presenta, se formulan varias preguntas, es decir que esta es una combinación de las anteriores formas de preguntas, que permite evaluar resultados complejos.
                        .row
                          .col-lg-4: img(src='@/assets/curso/61.jpg')
                          .col-lg-8
                            .c--4
                              h5 Con base en el dibujo responda las siguientes preguntas:
                                br
                                |Si se aumenta el número de dientes de la rueda conductora A, la velocidad del piñón B:
                                br
                                |a) Disminuye
                                br
                                |b) Permanece igual
                                br
                                |c) Aumenta
                                br
                                br
                                |Si la rueda conductora A gira en el sentido indicado por la flecha, el piñón B gira en:
                                br
                                |a) El mismo sentido
                                br
                                |b) Sentido diferente
                                br
                                |c) No gira
                      .col-lg-4: img(src='@/assets/curso/60.svg', alt='Texto que describa la imagen')

                
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators4' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next










</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras,
    BannerInterno, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Observación',
        texto:
          'Es un proceso perceptivo que se realiza sobre el desempeño, o sobre un producto elaborado o servicio ofrecido por el alumno, con base en los criterios de calidad definidos. El instrumento es la lista de chequeo.',
        imagen: require('@/assets/curso/44.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Estudio de caso y resolución de problemas',
        texto:
          'Es una técnica que permite obtener información a través del análisis y toma de decisiones sobre una situación o problema planteado. Puede ir acompañado por preguntas que el alumno debe responder o por algunas hipótesis que debe demostrar y argumentar. El instrumento es el cuestionario.',
        imagen: require('@/assets/curso/45.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Proyectos',
        texto:
          'El Proyecto como técnica para evaluar permite la integración de estructuras conceptuales adquiridas o construidas por el alumno, con la orientación y asesoría del instructor, para buscar la solución de problemas o necesidades individuales o sociales y la creación de prototipos, realización de experimentos o relacionados con procesos productivos, que afirmen su aprendizaje y que permitan evaluar los logros obtenidos. Los instrumentos pueden ser cuestionarios y listas de chequeo.',
        imagen: require('@/assets/curso/46.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ensayo',
        texto:
          'Es un escrito orientado por el instructor y elaborado por el alumno sobre un tema o problemática, donde esté demuestra el grado de apropiación del conocimiento, las habilidades de pensamiento (análisis, síntesis, comprensión y transferencia), habilidad de comunicación escrita, creatividad e imaginación, como resultado del estudio y trabajo de consulta. El instrumento es una lista de chequeo.',
        imagen: require('@/assets/curso/47.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Relatoría',
        texto:
          'Es una síntesis escrita y, como tal, integra los elementos constitutivos de una temática particular específica desarrollada a través de su comprensión y su discusión crítica, y permite, mediante una lista de chequeo o verificación, inferir los niveles de logro del alumno respecto de su conocimiento y comprensión, coherencia, pertinencia y concordancia.',
        imagen: require('@/assets/curso/48.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Mapa conceptual',
        texto:
          'Es una técnica que permite representar gráficamente una estructura relacional de conceptos de la cual se puede inferir el desarrollo cognoscitivo y cognitivo del alumno con respecto a un área de conocimiento o experiencia particular. El instrumento es la lista de chequeo, que debe incluir los indicadores de logro que se requieren alcanzar.',
        imagen: require('@/assets/curso/49.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Preguntas',
        texto:
          'Preguntar es el arte de mantener abierta la orientación pedagógica hacia diversas posibilidades en el proceso de aprendizaje. Es un recurso que insta a la indagación, a la duda, a la reflexión de si las cosas o fenómenos son o no son como se creían, es decir, la problematización del conocimiento. Es posible utilizar varios tipos de preguntas, abiertas, cerradas y contextualizadas, de acuerdo con el objetivo que persigue la evaluación. El instrumento es el cuestionario.',
        imagen: require('@/assets/curso/50.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-1
  .bloque-texto-g
    justify-content: start
  .bloque-texto-g__img
    left: auto
    right: 0
.tarjeta-titulo
  overflow: hidden
  position: relative
  img
    width: 100%
    height: auto
    position: absolute
    top: 0
    left: 0
  &__titulo
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 82px
  &__contenido
    transition: bottom  0.3s ease-in-out
    position: absolute
    bottom: -200%
    left: 0
    width: 100%
    height: 100%
    background-color: #fff
  &:hover
    .tarjeta-titulo__contenido
      bottom: 0
.carousel1
  .carousel-indicators
    button
      border-radius: 50%
      width: 10px
      height: 10px
      background-color: #ffe1cc
      &:hover, &:focus , &.active
        background-color: #FF6B00 !important
.carousel2
  .carousel-control-prev, .carousel-control-next, .carousel-control-prev:focus, .carousel-control-next:focus, .carousel-control-prev:hover, .carousel-control-next:hover,
    background-color: transparent
  .carousel-control-prev-icon
    background-image: url(../assets/curso/izquierda-1.svg) !important
  .carousel-control-next-icon
    background-image: url(../assets/curso/derecha-1.svg) !important
.carousel3
  .carousel-control-prev, .carousel-control-next, .carousel-control-prev:focus, .carousel-control-next:focus, .carousel-control-prev:hover, .carousel-control-next:hover,
    background-color: transparent
  .carousel-control-prev-icon
    background-image: url(../assets/curso/izquierda-2.svg) !important
  .carousel-control-next-icon
    background-image: url(../assets/curso/derecha-2.svg) !important
.bg-1
  background-image: url(../assets/curso/bg-1.svg) !important
  background-position: center
  background-repeat: no-repeat
  background-size: cover
.bg-2
  background-image: url(../assets/curso/bg-1.svg) !important
  background-position: center
  background-repeat: no-repeat
  background-size: cover
.bloque-texto-b.color-acento-botones:before
  background-color: #dec6f6
.br-1
  border-radius: 500px 0px 0px 0px
.imagen-ab
  position: relative
  img
    @media (min-width: $bp-min-lg)
      width: 100%
      height: auto
      position: absolute
      left: 0
      bottom: 0
.acordion__activo
    background-color: #E8E8E8
.cont-img
  transform: translateY(0), translateX(0)
</style>
