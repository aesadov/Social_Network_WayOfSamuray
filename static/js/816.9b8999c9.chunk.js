/*! For license information please see 816.9b8999c9.chunk.js.LICENSE.txt */
(self.webpackChunksocial_network_1=self.webpackChunksocial_network_1||[]).push([[816],{447:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return A}});var t=r(5671),o=r(3144),s=r(136),i=r(2882),u=r(364),l=r(5542),a=r(2791),c=r(4942),f=r(885),g="Paginator_paginator__WzIeI",p="Paginator_pageNumber__XQ56n",h="Paginator_selectedPage__Kr8x6",d=r(1694),v=r.n(d),P=r(184),w=function(n){for(var e=n.totalItemsCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,s=n.portionSize,i=Math.ceil(e/r),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/s),w=(0,a.useState)(1),x=(0,f.Z)(w,2),j=x[0],m=x[1],y=(j-1)*s+1,C=j*s;return(0,P.jsxs)("div",{className:g,children:[j>1&&(0,P.jsx)("button",{onClick:function(){m(j-1)},children:"prev"}),u.filter((function(n){return n>=y&&n<=C})).map((function(n){return(0,P.jsx)("span",{className:v()((0,c.Z)({},h,t===n),p),onClick:function(){o(n)},children:n},n)})),d>j&&(0,P.jsx)("button",{onClick:function(){m(j+1)},children:"next"})]})},x="users_userPhoto__sKbuw",j=r.p+"static/media/user-png.92b3944027780642eb69.png",m=r(1523),y=function(n){var e=n.user,r=n.followingInProgress,t=n.follow,o=n.unfollow;return(0,P.jsxs)("div",{children:[(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:(0,P.jsx)(m.OL,{to:"/profile/"+e.id,children:(0,P.jsx)("img",{src:null!==e.photos.small?e.photos.small:j,className:x,alt:"userPhoto"})})}),(0,P.jsx)("div",{children:e.followed?(0,P.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"Unfollow"}):(0,P.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"Follow"})})]}),(0,P.jsxs)("span",{children:[(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:e.name}),(0,P.jsx)("div",{children:e.status})]}),(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:"user.location.country"}),(0,P.jsx)("div",{children:"user.location.city"})]})]})]})},C=function(n){var e=n.currentPage,r=n.onPageChanged,t=n.totalUsersCount,o=n.pageSize,s=n.users,i=n.followingInProgress,u=n.follow,l=n.unfollow;return(0,P.jsxs)("div",{children:[(0,P.jsx)(w,{currentPage:e,onPageChanged:r,totalItemsCount:t,pageSize:o,portionSize:10}),(0,P.jsx)("div",{children:s.map((function(n){return(0,P.jsx)(y,{user:n,followingInProgress:i,follow:u,unfollow:l},n.id)}))})]})},b=r(1471),S=r(7781),_=function(n){return n.usersPage.users},k=function(n){return n.usersPage.pageSize},I=function(n){return n.usersPage.totalUsersCount},z=function(n){return n.usersPage.currentPage},Z=function(n){return n.usersPage.isFetching},U=function(n){return n.usersPage.followingInProgress},F=function(n){(0,s.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){var r=n.props.pageSize;n.props.getUsers(e,r),n.props.setCurrentPage(e)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsers(e,r)}},{key:"render",value:function(){return(0,P.jsxs)(P.Fragment,{children:[this.props.isFetching?(0,P.jsx)(b.p,{}):null,(0,P.jsx)(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),r}(a.Component),A=(0,S.qC)((0,u.$j)((function(n){return{users:_(n),pageSize:k(n),totalUsersCount:I(n),currentPage:z(n),isFetching:Z(n),followingInProgress:U(n)}}),{follow:l.ZN,unfollow:l.fv,setCurrentPage:l.D4,toggleFollowingProgress:l.ZH,getUsers:l.D7}))(F)},1694:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var s=typeof r;if("string"===s||"number"===s)n.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&n.push(i)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){n.push(r.toString());continue}for(var u in r)t.call(r,u)&&r[u]&&n.push(u)}}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()},885:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(181);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,s=[],i=!0,u=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(s.push(t.value),!e||s.length!==e);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return s}}(n,e)||(0,t.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=816.9b8999c9.chunk.js.map