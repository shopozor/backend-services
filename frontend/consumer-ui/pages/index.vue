<template>
  <div>
    <shops-map :center="center" :zoom="zoom" />
    <budzons :persons="persons" />
  </div>
</template>

<script>
import Map from '~/components/Map/Map'
import Budzons from '~/components/Budzons/Budzons'
import laurent from '~/assets/img/laurent.jpg'
import carlos from '~/assets/img/carlos.jpg'
import remi from '~/assets/img/remi.jpg'

export default {
  components: {
    Budzons,
    'shops-map': Map
  },
  data: () => ({
    center: [46.718852, 7.097669],
    zoom: 11,
    // TODO: fetch these data from the database!
    persons: [
      {
        fullName: 'Carlos Rosa',
        descr: `
          31 ans, Portugais Fribourgeois. Papa de deux enfants et mari dévoué à sa famille et à la cause environnementale. Je me suis engagé dans ce Projet dans l’optique de soulager les foyers dans la tâche ménagère que sont les courses et dans la transition vers une consommation plus responsable écologiquement. Avec une interface qui sera simple d’utilisation et intuitive, la Budzonnerie permettra aux Consommateurs d’acheter des Produits locaux et respectueux de l’environnement tout en aidant le tissu économique local à se développer. Et ça c’est mon engagement!
        `,
        img: carlos
      },
      {
        fullName: 'Rémi Grandjean',
        descr: `
          36 ans, Fribourgeois. Petit-fils et neveu d’agriculteur, j’ai passé une grande partie de ma vie au contact du monde paysan. Boulanger-Pâtissier de formation, j’aime les produits régionaux et de qualité. Je me suis engagé dans ce projet car je pense aux Producteurs, pour leur permettre de produire et vendre de la qualité à un prix juste en faisant valoir leur travail, un prix qui leur permettra de vivre décemment. L’interface “Producteur” sera intuitive, simple d’utilisation pour permettre aux Producteurs de consacrer leur temps à leurs marchandises. Avec cette plateforme, les Producteurs produisent seulement ce qui a été vendu, ce qui leur permet de réduire le gaspillage de leurs Produits.
        `,
        img: remi
      },
      {
        fullName: 'Laurent Michel',
        descr: 'hahaha',
        img: laurent
      }
    ]
  }),
  head: {
    title: 'La Budzonnerie'
  },
  layout: 'default'
}
</script>

<style src="~/assets/css/tailwind.css"></style>
