import profileReducer, {addPostActionCreator, deletePost, PostType, ProfileInfoType} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'hi, how are you?', likesCount: 12},
        {id: 2, message: 'it\'s my first post', likesCount: 15},
    ] as Array<PostType>,
    profile: {} as ProfileInfoType,
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

test('message of newpost should be correct', () => {
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
