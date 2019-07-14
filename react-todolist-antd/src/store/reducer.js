import _ from 'lodash'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {

    const newState = _.cloneDeep(state)

    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_TODO_ITEM) {
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}
