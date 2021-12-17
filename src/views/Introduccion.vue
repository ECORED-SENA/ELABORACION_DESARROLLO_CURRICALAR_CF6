<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/0.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este componente formativo presenta los conceptos básicos de la evaluación del aprendizaje, la importancia de la evaluación en el proceso de enseñanza aprendizaje, la fase de comparación entre los conocimientos adquiridos y los objetivos educativos, así como la función, los métodos de evaluación, los tipos de evaluación y los principios que la fundamentan para que exista calidad educativa. Revise a continuación el material de introducción.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
