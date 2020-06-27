import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
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
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})
// test('Should setup Add expen action object with default values',() => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note : '',
//             amount : 0,
//             createdAt : 0,
//             id: expect.any(String)
//         }
//     })
// })