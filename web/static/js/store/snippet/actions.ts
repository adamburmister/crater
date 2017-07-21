import * as types from './actionTypes'
import { ActionWithType } from '../../utils'

export const actionCreators = {
  changeFilter: (newFilter) => <ActionWithType>{ type: types.FILTER_CHANGED, filter: newFilter }
}
