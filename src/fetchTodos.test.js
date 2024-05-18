const axios = require('axios');
const {fetchEvenTodos} = require('./fetchTodos');

jest.mock('axios');
describe('FetchTodos', () => {
    describe('API Call', () => {
        const data = {id: 2, title: "Title", completed: true}
        const mockApi = jest.fn(() => Promise.resolve({data}));
        beforeAll(() => {
            axios.get.mockImplementation(mockApi)
        })
        it('should call API 20 times', () => {
            fetchEvenTodos();
            expect(mockApi).toHaveBeenCalledTimes(20);
        })
        it('should call API with even numbered ids', () => {
            fetchEvenTodos();
            [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40].forEach((id) => {
                expect(mockApi).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/todos/${id}`)
            })
        })
    })

    it('should fetch even todos', async () => {
        const data = {id: 2, title: "Title", completed: true}
        axios.get.mockImplementation(() => Promise.resolve({data}))

        expect(await fetchEvenTodos()).toEqual(expect.arrayContaining([{title: "Title", completed: true}]));
    })
})