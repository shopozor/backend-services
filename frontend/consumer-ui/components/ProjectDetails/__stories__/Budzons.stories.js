import { storiesOf } from '@storybook/vue'
import PersonDetails from '../PersonDetails'
import Budzons from '../Budzons'
import ProjectOverview from '../ProjectOverview'
import imgLorenzo from '~assets/img/laurent.jpg'
import imgCarlito from '~assets/img/carlos.jpg'

const persons = [
  {
    fullName: 'Lorenzo Miguel',
    descr: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla tortor, luctus vel ante ac, tincidunt tempor lacus. Vivamus vestibulum mattis rutrum. Praesent dignissim neque sit amet rhoncus iaculis. Proin quis interdum arcu. Morbi placerat ornare placerat. Nullam consequat porttitor nisl et fringilla. Nulla ut lorem cursus, commodo justo non, tincidunt elit. Integer euismod dui arcu, at accumsan tellus ornare ultrices. Praesent aliquam elit non ligula congue, sit amet mollis massa aliquam. Maecenas felis nisl, dignissim id commodo et, suscipit vitae diam. Nam dignissim, nibh eget egestas laoreet, urna leo facilisis quam, eget malesuada massa arcu et purus. Nunc eget dolor vitae eros rhoncus imperdiet.
    `,
    img: imgLorenzo
  },
  {
    fullName: 'Carlito Neves',
    descr: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate odio ut enim blandit. Potenti nullam ac tortor vitae. Quis vel eros donec ac odio tempor orci. Praesent elementum facilisis leo vel fringilla est ullamcorper. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Congue mauris rhoncus aenean vel elit. Odio morbi quis commodo odio. Sem viverra aliquet eget sit amet tellus cras. In fermentum et sollicitudin ac orci phasellus egestas. Tristique nulla aliquet enim tortor at auctor urna nunc. Turpis tincidunt id aliquet risus feugiat in ante metus.
    `,
    img: imgCarlito
  }
]

storiesOf('Budzons', module)
  .add('Person details', () => {
    return {
      components: {
        PersonDetails
      },
      template: '<person-details :person="person"/>',
      data: () => ({
        person: persons[0]
      })
    }
  })
  .add('Budzons', () => {
    return {
      components: {
        Budzons
      },
      // TODO: load the persons from within the budzons component <-- users table
      template: '<budzons :persons="persons"/>',
      data: () => ({
        persons
      })
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
