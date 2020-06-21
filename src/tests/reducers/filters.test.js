import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values' , () => {
    const state = filtersReducer(undefined, {type: "@@init"})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should setup sort by amount filter value' , () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('should setup sort by date filter value' , () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')

})
test('should setup filter text value' , () => {
    const text = "This is my filter"
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('This is my filter')
})
test('should setup start date value' , () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})
test('should setup end date value' , () => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})