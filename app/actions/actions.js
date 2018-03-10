// 增
export const add_todo = (title)=> (dispatch, state)=> {
    let item= {
        'title': title,
        'done': false
    }
    dispatch({'type': 'add_todo', item})
}
// 删
export const del_todo = (title)=> (dispatch, state)=> {
    dispatch({'type': 'del_todo', 'title': title})
}
// 改
export const change_todo = (title,done)=> (dispatch, state)=> {
    console.log('change')
    let item = {
        'title': title,
        'done': done
    }
    dispatch({'type': 'change_todo', 'item': item})
}
// 查
export const find_todo = (visible)=> (dispatch, state)=> {
    dispatch({'type': 'find_todo', visible})
}