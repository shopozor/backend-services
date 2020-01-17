import ShopsData from '~fixtures/Consumer/Shops'
import Budzons from '~fixtures/Budzons'

export default {
  Query: () => {
    return {
      shops: () => {
        return ShopsData.data.shops
      },
      // TODO: are there arguments we can use here? maybe that'd be a way to have story-specific mocks
      users: () => {
        return Budzons.data.users
      }
      // TODO: get site data (like description --> project overview)
    }
  }
}
