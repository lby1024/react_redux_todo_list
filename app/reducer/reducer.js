
const initState = {
    'todos': [
        {
            "title": "吃饭",
            'done': true,
        },
        {
            "title": "睡觉",
            'done': false,
        },
        {
            "title": "拉屎",
            'done': false,
        },
    ],
    'visible': 0
}

const strategy = {
    // 增
    add_todo(state, action){
        return {
            'todos': [
                ...state.todos,
                action.item
            ],
            'visible': state.visible
        }
    },
    // 删
    del_todo(state, action){
        let f = state.todos.filter(item=> item.title!=action.title)
        return {
            'todos': f,
            'visible':state.visible
        }
    },
    // 改
    change_todo(state, action){
        let c = state.todos.map((item, index)=> {
            if(item.title==action.item.title){
                return {
                    ...item,
                    'done': !action.item.done
                }
            }
            return item
        })
        return {
            ...state,
            'todos': c
        }
    },
    // 查
    find_todo(state, action){
        return {
            ...state,
            'visible': action.visible
        }
    }
}

export default (state=initState, action) => {
    if(strategy.hasOwnProperty(action.type)){
        return strategy[action.type](state, action)
    }
    return state
}