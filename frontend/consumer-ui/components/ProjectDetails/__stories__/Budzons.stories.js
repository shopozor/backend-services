import { storiesOf } from '@storybook/vue'
import PersonDetails from '../PersonDetails'
import Budzons from '../Budzons'
import ProjectOverview from '../ProjectOverview'
import imgLorenzo from '~assets/img/laurent.jpg'

// TODO: get that data from the fixtures!
const person = {
  first_name: 'Lorenzo',
  last_name: 'Miguel',
  description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla tortor, luctus vel ante ac, tincidunt tempor lacus. Vivamus vestibulum mattis rutrum. Praesent dignissim neque sit amet rhoncus iaculis. Proin quis interdum arcu. Morbi placerat ornare placerat. Nullam consequat porttitor nisl et fringilla. Nulla ut lorem cursus, commodo justo non, tincidunt elit. Integer euismod dui arcu, at accumsan tellus ornare ultrices. Praesent aliquam elit non ligula congue, sit amet mollis massa aliquam. Maecenas felis nisl, dignissim id commodo et, suscipit vitae diam. Nam dignissim, nibh eget egestas laoreet, urna leo facilisis quam, eget malesuada massa arcu et purus. Nunc eget dolor vitae eros rhoncus imperdiet.
    `,
  image: {
    url: imgLorenzo,
    alt: 'Lorenzo Miguel'
  }
}

storiesOf('Budzons', module)
  .add('Person details', () => {
    return {
      components: {
        PersonDetails
      },
      template: '<person-details :person="person"/>',
      data: () => ({
        person
      })
    }
  })
  .add('Budzons', () => {
    return {
      components: {
        Budzons
      },
      template: '<budzons />'
    }
  })
  .add('Project overview', () => {
    return {
      components: {
        ProjectOverview
      },
      // TODO: load the project data from within the project-overview component <-- site table, with overall data
      template: '<project-overview/>'
    }
  })
