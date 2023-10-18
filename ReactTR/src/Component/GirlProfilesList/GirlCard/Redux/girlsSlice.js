import {createSlice} from '@reduxjs/toolkit';

export const girlsSlice = createSlice({
    name: 'girls',
    initialState: {
        value: 10,
        list: [
            {
                "id": 1,
                "name": "Alice",
                "birthday": "01.02.1995",
                "photo": "/girls/Alexandra.png",
                "isFavorite": false,
                "like": false
            },
            {
                "id": 2,
                "name": "Emma",
                "birthday": "15.05.1998",
                "photo": "/girls/Alyonka.png",
                "isFavorite": true,
                "like": true
            },
            {
                "id": 3,
                "name": "Olivia",
                "birthday": "08.07.1993",
                "photo": "/girls/Mariana.png",
                "isFavorite": true,
                "like": false
            },
            {
                "id": 4,
                "name": "Sophia",
                "birthday": "03.09.2000",
                "photo": "/girls/Marina.png",
                "isFavorite": true,
                "like": true
            },
            {
                "id": 5,
                "name": "Isabella",
                "birthday": "25.11.1996",
                "photo": "/girls/Marinaa.png",
                "isFavorite": true,
                "like": true
            },
            {
                "id": 6,
                "name": "Mia",
                "birthday": "12.04.1992",
                "photo": "/girls/Sofi.png",
                "isFavorite": false,
                "like": false
            },
            {
                "id": 7,
                "name": "Charlotte",
                "birthday": "19.08.1997",
                "photo": "/girls/Svetlana.png",
                "isFavorite": true,
                "like": true
            },
            {
                "id": 8,
                "name": "Amelia",
                "birthday": "10.01.1999",
                "photo": "/girls/Yana.png",
                "isFavorite": true,
                "like": false
            },
            {
                "id": 9,
                "name": "Harper",
                "birthday": "29.06.1994",
                "photo": "/girls/Yana.png",
                "isFavorite": true,
                "like": true
            }
        ],
        sortArray: [],

    },

    reducers: {
        isFavorite: (state, {payload}) => {
            state.sortArray[payload].isFavorite = !state.sortArray[payload].isFavorite
        },
        isLiked: (state, {payload}) => {
            state.sortArray[payload].like = !state.sortArray[payload].like
        },
        sortList: (state, {payload}) => {
            if (payload === 'favorite') {
                state.sortArray = state.list.filter(item => item.isFavorite && !item.like)

            }
            if (payload === 'sweet') {
                state.sortArray = state.list.filter(item => item.isFavorite && item.like)
            }
            if (payload === 'all') {
                state.sortArray.map((item) => {
                    if (item.id === localStorage.gils.id) {
                        item.isFavorite = localStorage.gils.isFavorite
                        item.like = localStorage.gils.like
                    }
                })
            }
            state.sortArray = Object.assign(state.list, state.sortArray)
        },
    }
});

export const {isFavorite, isLiked, sortList} = girlsSlice.actions;
export default girlsSlice.reducer;
