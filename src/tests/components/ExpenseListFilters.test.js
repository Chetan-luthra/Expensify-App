import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altfilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />
    )
})
test('Should Render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
test('Should Render ExpenseListFilters with alt data  correctly ', () => {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should handle text change' , () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date' , () => {
    wrapper.setProps({
        filters: altfilters
    })
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount' , () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date change' , () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

})
test('Should handle date focus change' , () => {
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})