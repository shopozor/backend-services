import ShopsData from '~fixtures/Consumer/Shops'
import laurent from '~/assets/img/laurent.jpg'
import carlos from '~/assets/img/carlos.jpg'
import remi from '~/assets/img/remi.jpg'

export default {
  Query: () => {
    return {
      shops: () => {
        return ShopsData.data.shops
      },
      // TODO: get this list from our fixtures!
      users: () => {
        return [{
          first_name: 'Carlos',
          last_name: 'Rosa',
          email: 'carlos.rosa@budzonnerie.ch',
          description: `
            Portugais Fribourgeois, je suis papa de deux enfants et un mari dévoué à sa famille ainsi qu'à la cause environnementale. Je me suis engagé dans ce projet dans l’optique de simplifier la transition de nos foyers vers une consommation plus écologique. Avec une interface qui sera agréable, autant sur le terrain que sur le web, la Budzonnerie permettra aux Consommateurs d’acheter des Produits locaux et respectueux de l’environnement tout en aidant le tissu économique local à se développer. Et ça, c’est mon engagement!
          `,
          image: {
            url: carlos,
            alt: 'Carlos Rosa'
          }
        },
        {
          first_name: 'Rémi',
          last_name: 'Grandjean',
          email: 'remi.grandjean@budzonnerie.ch',
          description: `
            Fribourgeois, petit-fils et neveu d’agriculteur, j’ai passé une grande partie de ma vie au contact du monde paysan. Boulanger-pâtissier de formation, j’aime les produits régionaux et de qualité. Je me suis engagé dans ce projet avec une pensée particulière pour les Producteurs. En effet, je veux leur permettre de produire et vendre de la qualité à un prix juste en faisant valoir leur travail, un prix qui leur permettra de vivre décemment. L’interface “Producteur” sera intuitive, simple d’utilisation pour permettre aux Producteurs de consacrer leur temps à leurs marchandises. Avec cette plateforme, les Producteurs produisent seulement ce qui a été vendu, ce qui leur permet de réduire le gaspillage de leurs Produits.
          `,
          image: {
            url: remi,
            alt: 'Rémi Grandjean'
          }
        },
        {
          first_name: 'Laurent',
          last_name: 'Michel',
          email: 'laurent.michel@softozor.ch',
          description: 'Co-fondateur fribourgeois de <a href="http://softozor.ch" target="_blank">softozor</a>, je suis aussi naturellement sensible à la cause défendue par Carlos et Rémi. Avec l\'aide de mes associés Thomas, Cédric et Florian, ainsi que de mes coéquipiers Kilian et Nils, j\'ai bien l\'intention de mettre la technique au service de notre commerce de proximité. Notre équipe investit son temps libre pour trouver les solutions les plus pratiques et moins onéreuses possible, afin de produire elle aussi sa contribution artisanale pour sa région.',
          image: {
            url: laurent,
            alt: 'Laurent Michel'
          }
        }]
      }
    }
  }
}
