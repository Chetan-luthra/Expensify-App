import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state' , () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})
test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})
test('Should not remove expense by wrong id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-6'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]])
})
test('Should add Expense' , () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'New Main',
            note: 'monthly',
            amount: 48250000,
            createdAt: moment(0).add(5, 'days').valueOf()
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,  
        {
            id: '4',
            description: 'New Main',
            note: 'monthly',
            amount: 48250000,
            createdAt: moment(0).add(5, 'days').valueOf()
        }
    ])
})

test('should edit expense' , () => {
    const amount = 459
    const action = {
        type: 'EDIT_EXPENSE',
        updates : {
            amount
        },
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})
test('should edit expense' , () => {
    const amount = 459
    const action = {
        type: 'EDIT_EXPENSE',
        updates : {
            amount
        },
        id: '-99'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})