import { storiesOf } from '@storybook/vue'
import PersonDetails from '../PersonDetails'
import Budzons from '../Budzons'
import ProjectOverview from '../ProjectOverview'
import BudzonData from '~fixtures/Budzons'

const person = BudzonData.data.users[0]

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
