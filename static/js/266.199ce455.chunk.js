"use strict";(self.webpackChunksocial_network_1=self.webpackChunksocial_network_1||[]).push([[266],{5266:function(e,s,t){t.r(s),t.d(s,{default:function(){return V}});var i=t(1413),n=t(5671),r=t(3144),o=t(136),a=t(2882),l=t(2791),u=t(885),c="ProfileInfo_descriptionBlock__XBXuJ",d="ProfileInfo_inputFile__pWmXS",f="ProfileInfo_mainPhoto__QU8TO",h="ProfileInfo_contact__sQB8W",p="ProfileInfo_profileData__m1bqM",x=t(1471),j=t(184),m=function(e){var s=(0,l.useState)(!1),t=(0,u.Z)(s,2),i=t[0],n=t[1],r=(0,l.useState)(e.status),o=(0,u.Z)(r,2),a=o[0],c=o[1];(0,l.useEffect)((function(){c(e.status)}),[e.status]);return(0,j.jsxs)("div",{children:[!i&&(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Status: "}),(0,j.jsx)("span",{onDoubleClick:function(){n(!0)},children:a||"------"})]}),i&&(0,j.jsx)("div",{children:(0,j.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(a)},value:a})})]})},v=t(4214),b=t(2668),P=t(704),_=t(5368),g=(0,P.Z)({form:"edite-profile"})((function(e){var s=e.handleSubmit,t=e.profile,i=e.error;return(0,j.jsxs)("form",{onSubmit:s,children:[(0,j.jsx)("div",{children:(0,j.jsx)("button",{children:"save"})}),i&&(0,j.jsx)("div",{className:_.Z.formSummaryError,children:i}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Full name:"})," ",(0,b.Gr)("Full name:","fullName",[],b.II)]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Looking for a job:"})," ",(0,b.Gr)("","lookingForAJob",[],b.II,{type:"checkbox"})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"My professional skills:"})," ",(0,b.Gr)("My professional skills:","lookingForAJobDescription",[],b.gx)]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"About me:"})," ",(0,b.Gr)("About me:","aboutMe",[],b.gx)]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Contacts:"})," ",Object.keys((null===t||void 0===t?void 0:t.contacts)||{}).map((function(e){return(0,j.jsx)("div",{className:h,children:(0,j.jsxs)("b",{children:[e,": ",(0,b.Gr)(e,"contacts."+e,[],b.II)]})},e)}))]})]})})),k=function(e){var s=e.isOwner,t=e.profile,i=e.status,n=e.updateStatus,r=e.savePhoto,o=e.safeProfile,a=(0,l.useState)(!1),h=(0,u.Z)(a,2),p=h[0],b=h[1];if(!t)return(0,j.jsx)(x.p,{});return(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:c,children:[t.photos&&(0,j.jsx)("img",{src:t.photos.large||v,className:f,alt:""}),s&&(0,j.jsxs)("span",{className:d,children:[(0,j.jsx)("input",{type:"file",id:"input__file",onChange:function(e){var s;null!==(s=e.target.files)&&void 0!==s&&s.length&&r(e.target.files[0])}}),(0,j.jsx)("label",{htmlFor:"input__file",className:"input__file-button",children:"Choose file"})]}),p?(0,j.jsx)(g,{onSubmit:function(e){o(e).then((function(){b(!1)}))},initialValues:t,profile:t}):(0,j.jsx)(y,{profile:t,isOwner:s,goToEditeMode:function(){b(!0)}}),(0,j.jsx)(m,{status:i,updateStatus:n})]})})},y=function(e){var s=e.profile,t=e.isOwner,i=e.goToEditeMode;return(0,j.jsxs)("div",{className:p,children:[t&&(0,j.jsx)("div",{children:(0,j.jsx)("button",{onClick:i,children:"Edit"})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Full name:"})," ",s.fullName]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Looking for a job:"})," ",s.lookingForAJob?"yes":"no"]}),s.lookingForAJob&&(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"My professional skills:"})," ",s.lookingForAJobDescription]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"About me:"})," ",s.aboutMe]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Contacts:"})," ",Object.keys(s.contacts||{}).map((function(e){return(0,j.jsx)(S,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})]})},S=function(e){var s=e.contactTitle,t=e.contactValue;return(0,j.jsxs)("div",{className:h,children:[(0,j.jsxs)("b",{children:[s,":"]})," ",t]})},I="MyPosts_postBlock__dvM-z",N="MyPosts_posts__GSiZ2",w="MyPosts_addPost__vrj7C",C="Post_item__Yu4oG",Z="Post_like__+fQP+",A=function(e){return(0,j.jsxs)("div",{className:C,children:[(0,j.jsx)("img",{src:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/14/36/ustv-friends-10.jpg?crop=1.00xw:0.735xh;0,0.0217xh&resize=480:*",alt:"LisaK"}),e.message,(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:Z,children:"like "}),(0,j.jsx)("span",{className:Z,children:e.likesCount})]})]})},M=t(6139),F=t(3079),D=(0,F.D)(10),O=l.memo((function(e){var s=e.posts.map((function(e){return(0,j.jsx)(A,{message:e.message,likesCount:e.likesCount},e.id)}));return(0,j.jsxs)("div",{className:I,children:[(0,j.jsx)("h3",{children:"My posts"}),(0,j.jsx)("div",{children:(0,j.jsx)(T,{onSubmit:function(s){e.addPost(s.newPostText)}})}),(0,j.jsx)("div",{className:N,children:s})]})})),T=(0,P.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,j.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,j.jsx)("div",{children:(0,j.jsx)(M.Z,{component:b.NI,name:"newPostText",placeholder:"Post message",validate:[F.C,D],typeField:"textarea"})}),(0,j.jsx)("div",{className:w,children:(0,j.jsx)("button",{children:"Add post"})})]})})),J=O,E=t(6708),G=t(364),U=(0,G.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(s){e((0,E.Wl)(s))}}}))(J),B=function(e){return(0,j.jsxs)("div",{children:[(0,j.jsx)(k,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,safeProfile:e.safeProfile}),(0,j.jsx)(U,{})]})},z=t(9271),L=t(7781),Q=function(e){(0,o.Z)(t,e);var s=(0,a.Z)(t);function t(){return(0,n.Z)(this,t),s.apply(this,arguments)}return(0,r.Z)(t,[{key:"getDataProfile",value:function(e){this.props.getUsersProfile(e),this.props.getStatus(e)}},{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)?this.getDataProfile(e):this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,j.jsx)(B,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,safeProfile:this.props.safeProfile}))}}]),t}(l.Component),V=(0,L.qC)((0,G.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUsersProfile:E.et,getStatus:E.lR,updateStatus:E.Nf,savePhoto:E.Ju,safeProfile:E.Jl}),z.EN)(Q)},4214:function(e,s,t){e.exports=t.p+"static/media/user-png.92b3944027780642eb69.png"},885:function(e,s,t){t.d(s,{Z:function(){return n}});var i=t(181);function n(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,n,r=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(i=t.next()).done)&&(r.push(i.value),!s||r.length!==s);o=!0);}catch(l){a=!0,n=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw n}}return r}}(e,s)||(0,i.Z)(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=266.199ce455.chunk.js.map