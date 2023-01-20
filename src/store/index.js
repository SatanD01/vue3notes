import {createStore} from "vuex";

export const store = createStore({
    state: {
        users: [
            {id: 1, name: 'evgeniy', admin: false},
            {id: 2, name: 'alex', admin: false},
            {id: 3, name: 'garry', admin: true}
        ]
    },
    getters: {
        getAllUsers(state) {
            return state.users
        },
        getUsers(state) {
            return state.users.filter(user => !user.admin)
        },
        getUsersById: state => id => state.users.find(user => user.id === id),
        getUsersLength(state, getters) {
            const suffix = 'count users:'
            return `${suffix} ${getters.getAllUsers.length}`
        }
    }
})