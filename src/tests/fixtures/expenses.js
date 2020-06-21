import moment from 'moment'

export default [{
    id: '1',
    description: 'Rent',
    note: 'monthly',
    amount: 100,
    createdAt: 0
},
{
    id: '2',
    description: 'Gum',
    note: 'monthly',
    amount: 10322255,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'water',
    note: 'monthly',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}
]