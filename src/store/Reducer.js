const initialState = {
    blogs: [{
            id: 1,
            img: "/blog2-1.png"
        },
        {
            id: 2,
            img: "/blog2-2.png"
        },
        {
            id: 3,
            img: "/blog2-3.png"
        },
        {
            id: 4,
            img: "/blog2-4.png"
        },
        {
            id: 5,
            img: "/blog3-1.png"
        },
        {
            id: 6,
            img: "/blog3-2.png"
        },
        {
            id: 7,
            img: "/blog3-3.png"
        },
        {
            id: 8,
            img: "/blog3-4.png"
        },
        {
            id: 9,
            img: "/blog3-5.png"
        },
        {
            id: 10,
            img: "/blog3-6.png"
        }
    ]
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}