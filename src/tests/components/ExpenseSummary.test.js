import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpenseSummary'

test('Should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235235235897}/>)
    expect(wrapper).toMatchSnapshot()
})