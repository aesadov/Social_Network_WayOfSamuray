import React from 'react';
import s from './Post.module.css';
type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {

  return (
    <div className={s.item}>
      <img src='https://hips.hearstapps.com/digitalspyuk.cdnds.net/14/36/ustv-friends-10.jpg?crop=1.00xw:0.735xh;0,0.0217xh&resize=480:*' alt={'LisaK'}/>
        {props.message}
          <div>
        <span className={s.like}>like </span><span className={s.like}>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;