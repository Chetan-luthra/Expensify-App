import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
test('Should setup remove expense action object', () => {
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('abc123',{note: 'New notes object'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {note: 'New notes object'}
    })
})
test('Should setup Add expen action object',() => {
    const expenseData = {
        description : 'Chetan',
        note : 'CoolDude69',
        amount : 109500,
        createdAt : 10000000000000000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           ...expenseData,
           id: expect.any(String)
        }
    })
})
test('Should setup Add expen action object with default values',() => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note : '',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
        }
    })
})