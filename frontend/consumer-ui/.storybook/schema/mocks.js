import ShopsData from '~fixtures/Consumer/Shops'
import Budzons from '~fixtures/Budzons'

export default {
  Query: () => {
    return {
      shops: () => {
        return ShopsData.data.shops
      },
      users: () => {
        return Budzons.data.users
      }
    }
  }
}
