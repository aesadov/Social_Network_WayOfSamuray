import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../redux/profile-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {FieldCreator} from '../../common/Forms controls/FormsControls';


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPost: string) => void
}
type FormDataType = {
    newPostText: string
}
const maxlength10 = maxLengthCreator(10)

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    const addPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FieldCreator}
                       name='newPostText'
                       placeholder='Post message'
                       validate={[required, maxlength10]}
                       typeField='textarea'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;