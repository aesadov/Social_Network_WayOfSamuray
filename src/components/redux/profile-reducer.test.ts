import profileReducer, {addPostActionCreator, deletePost, PostType} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
    ] as Array<PostType>,
    profile: null,
    status: ''
}

test('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra.com')

    //2. new action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(3)
});

test('message of newPost should be correct', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra.com')

    //2. new action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra.com')
});

test('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)

    //2. new action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(1)
});

test(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000)

    //2. new action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(2)
});