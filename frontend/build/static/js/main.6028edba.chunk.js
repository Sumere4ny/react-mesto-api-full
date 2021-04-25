(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(22),i=n.n(c),o=(n(29),n(20)),r=n(2),l=n(12),u=n(24),p=n(3),d=n(0),h=function(e){var t=e.component,n=Object(u.a)(e,["component"]);return Object(d.jsx)(p.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(l.a)({},n)):Object(d.jsx)(p.a,{to:"./sign-in"})}})},j=n.p+"static/media/logo.c2821b38.svg",b=n(8);var m=function(e){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:j,className:"header__logo",alt:"\u041c\u0435\u0441\u0442\u043e"}),Object(d.jsxs)("nav",{className:"header__nav",children:[Object(d.jsx)(p.b,{path:"/sign-up",children:Object(d.jsx)(b.c,{to:"/sign-in",className:"link header__nav-link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(p.b,{path:"/sign-in",children:Object(d.jsx)(b.c,{to:"/sign-up",className:"link header__nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})}),e.isLoggedIn&&Object(d.jsxs)(p.b,{path:"/",children:[Object(d.jsx)("p",{className:"header__user-info",children:e.email}),Object(d.jsx)("button",{onClick:e.onLogout,className:"link header__nav-link",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})};var _=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],i=s.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1];return Object(d.jsx)("main",{className:"content",children:Object(d.jsxs)("section",{className:"auth",children:[Object(d.jsx)("h2",{className:"auth-form__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"auth-form",onSubmit:function(t){t.preventDefault(),l&&a&&(e.onSubmit(l,a),c(""),u(""))},children:[Object(d.jsx)("input",{type:"email",placeholder:"Email",className:"auth-form__input",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(d.jsx)("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"auth-form__input",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(d.jsx)("button",{type:"submit",className:"auth-form__submit",value:"loggedIn",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(d.jsxs)("p",{className:"auth__redirect",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(b.b,{to:"/sign-up",className:"link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0430\u0446\u0438\u044f"})]})]})})};var f=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],i=s.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1];return Object(d.jsx)("main",{children:Object(d.jsxs)("section",{className:"auth",children:[Object(d.jsx)("h2",{className:"auth-form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"auth-form",onSubmit:function(t){t.preventDefault(),e.onSubmit(a,l),c("")},children:[Object(d.jsx)("input",{type:"email",placeholder:"Email",className:"auth-form__input",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(d.jsx)("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"auth-form__input",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(d.jsx)("button",{type:"submit",className:"auth-form__submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsxs)("p",{className:"auth__redirect",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(b.b,{to:"/sign-in",className:"link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},O=n.p+"static/media/icon-ok.e004e6e7.svg",x=n.p+"static/media/icon-cross.471086c8.svg",g=s.a.createContext(),v={success:{text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",imgPath:O},fail:{text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",imgPath:x}};function N(e){var t=s.a.useContext(g);return Object(d.jsx)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:"popup__infoTooltip",children:Object(d.jsxs)("div",{className:"infoTooltip popup__container",children:[Object(d.jsx)("img",{className:"infoTooltip__icon",src:t.imgPath,alt:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(d.jsx)("p",{className:"infoTooltip__caption",children:t.text}),Object(d.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__close-button"})]})})}var k=n.p+"static/media/like-button.df0c9655.svg",C=s.a.createContext();var y=function(e){var t=s.a.useContext(C),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),c="cards__like-button ".concat(a?"cards__like-button_active":""),i="cards__remove-button ".concat(n?"":"cards__remove-button_hidden");return Object(d.jsxs)("div",{className:"cards__item",children:[Object(d.jsx)("img",{className:"cards__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onClick(e.card)}}),Object(d.jsx)("button",{className:i,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(d.jsxs)("div",{className:"cards__description",children:[Object(d.jsx)("h2",{className:"cards__title",children:e.card.name}),Object(d.jsxs)("div",{className:"cards__like-container",children:[Object(d.jsx)("img",{src:k,className:c,alt:"\u041b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(d.jsx)("span",{className:"cards__like-number",children:e.card.likes.length})]})]})]})};var S=function(e){var t=s.a.useContext(C);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("div",{className:"profile__avatar-container",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__title",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile,type:"button"})]}),Object(d.jsx)("p",{className:"profile__profession",children:t.about})]}),Object(d.jsx)("button",{className:"profile__add-button",onClick:e.onAddPlace,type:"button"})]}),Object(d.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(d.jsx)(y,{card:t,onClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var U=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var D=function(e){return Object(d.jsx)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"," popup_type_").concat(e.name),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(d.jsx)("h2",{className:"popup__title",children:e.title}),Object(d.jsx)("form",{className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:e.children})]})})};var P=function(e){var t=s.a.useContext(C),n=s.a.useState(""),a=Object(r.a)(n,2),c=a[0],i=a[1],o=s.a.useState(""),l=Object(r.a)(o,2),u=l[0],p=l[1];return s.a.useEffect((function(){i(t.name),p(t.about)}),[t]),Object(d.jsxs)(D,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:[Object(d.jsx)("input",{type:"text",className:"popup__input popup__input_name-field",id:"name",name:"name",minLength:"2",maxLength:"40",value:c,onChange:function(e){i(e.target.value)},required:!0}),Object(d.jsx)("span",{id:"name-error",className:"popup__input-error"}),Object(d.jsx)("input",{type:"text",className:"popup__input popup__input_profession",id:"profession",name:"about",minLength:"2",maxLength:"200",value:u,onChange:function(e){p(e.target.value)},required:!0}),Object(d.jsx)("span",{id:"profession-error",className:"popup__input-error"}),Object(d.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var L=function(e){var t=s.a.useRef();return Object(d.jsxs)(D,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),n.target.reset()},name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:[Object(d.jsx)("input",{type:"url",className:"popup__input popup__input_avatar-link",id:"avatar-link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:t,required:!0}),Object(d.jsx)("span",{id:"avatar-link-error",className:"popup__input-error"}),Object(d.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var E=function(e){var t=s.a.useRef(),n=s.a.useRef();return Object(d.jsxs)(D,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value})},name:"add-new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:[Object(d.jsx)("input",{type:"text",className:"popup__input popup__input_place-name",id:"place-name",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",ref:t,required:!0}),Object(d.jsx)("span",{id:"place-name-error",className:"popup__input-error"}),Object(d.jsx)("input",{type:"url",className:"popup__input popup__input_place-link",id:"place-link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:n,required:!0}),Object(d.jsx)("span",{id:"place-link-error",className:"popup__input-error"}),Object(d.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})};var I=function(e){return Object(d.jsx)("div",{className:"popup ".concat(e.isOpen&&"popup_opened"," popup_type_lightbox"),children:Object(d.jsxs)("div",{className:"lightbox",children:[Object(d.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose,"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(d.jsx)("img",{className:"lightbox__image",src:e.card.link,alt:e.card.name}),Object(d.jsx)("h2",{className:"lightbox__image-title",children:e.card.name})]})})},R=n(14),T=n(15),A=localStorage.getItem("token"),w={baseUrl:"http://api.sumere4ny.students.nomoredomains.icu",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(A||"")}},q=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(R.a)(this,e),this._baseUrl=n,this._headers=a}return Object(T.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"GET"}).then(this._getResponseData)}},{key:"getProfileData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"GET"}).then(this._getResponseData)}},{key:"setProfileData",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:n})}).then(this._getResponseData)}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}}]),e}())(w),J=new(function(){function e(t){Object(R.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(T.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserLoginInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:Object(l.a)(Object(l.a)({},this._headers),{},{Authorization:"Bearer ".concat(e)})}).then(this._handleResponse)}},{key:"signUp",value:function(e,t){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify({email:e,password:t})}).then(this._handleResponse)}},{key:"signIn",value:function(e,t){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify({email:e,password:t})}).then(this._handleResponse)}}]),e}())(w),B=n.p+"static/media/avatar.74c3c0fb.jpg";var G=function(){var e=Object(p.g)(),t=s.a.useState(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=s.a.useState(!1),l=Object(r.a)(i,2),u=l[0],j=l[1],b=s.a.useState(!1),O=Object(r.a)(b,2),x=O[0],k=O[1],y=s.a.useState(!1),R=Object(r.a)(y,2),T=R[0],A=R[1],w=s.a.useState(!1),G=Object(r.a)(w,2),z=G[0],H=G[1],M=s.a.useState(!1),V=Object(r.a)(M,2),F=V[0],K=V[1],Q=s.a.useState("fail"),W=Object(r.a)(Q,2),X=W[0],Y=W[1],Z=s.a.useState(""),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=s.a.useState({}),ae=Object(r.a)(ne,2),se=ae[0],ce=ae[1],ie=s.a.useState({name:"",about:"",avatar:B}),oe=Object(r.a)(ie,2),re=oe[0],le=oe[1],ue=s.a.useState([]),pe=Object(r.a)(ue,2),de=pe[0],he=pe[1];function je(){c(!0)}function be(){K(!0)}function me(){A(!1),j(!1),k(!1),H(!1),K(!1)}return s.a.useEffect((function(){!function(){var t=localStorage.getItem("token");t&&J.getUserLoginInfo(t).then((function(t){t&&(te(t.email),e.push("/"),je())})).catch((function(e){return console.log(e)}))}()}),[a,e]),s.a.useEffect((function(){Promise.all([q.getProfileData(),q.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];le(n),he(Object(o.a)(a))})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)(C.Provider,{value:re,children:[Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(m,{email:ee,isLoggedIn:a,onLogout:function(){c(!1),localStorage.removeItem("token"),e.push("/sign-in")}}),Object(d.jsxs)(p.d,{children:[Object(d.jsx)(h,{exact:!0,path:"/",component:S,loggedIn:a,cards:de,onEditProfile:function(){j(!0)},onAddPlace:function(){k(!0)},onEditAvatar:function(){A(!0)},onCardClick:function(e){ce(e),H(!0)},onCardDelete:function(e){q.deleteCard(e._id).then((function(){var t=de.filter((function(t){return t._id!==e._id}));he(t)})).catch((function(e){return console.log(e)}))},onCardLike:function(e){(e.likes.some((function(e){return e._id===re._id}))?q.deleteLike(e._id):q.putLike(e._id)).then((function(t){var n=de.map((function(n){return n._id===e._id?t:n}));he(n)})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(p.b,{path:"/sign-in",children:Object(d.jsx)(_,{onSubmit:function(t,n){J.signIn(n,t).then((function(t){t.token&&(localStorage.setItem("token",t.token),je(),e.push("/"))})).catch((function(){Y("fail"),be()}))}})}),Object(d.jsx)(p.b,{path:"/sign-up",children:Object(d.jsx)(f,{onSubmit:function(t,n){J.signUp(n,t).then((function(t){t?(Y("success"),e.push("/sign-in")):Y("fail")})).catch((function(e){return console.log(e)})).finally((function(){be()}))}})})]}),a&&Object(d.jsx)(U,{})]}),Object(d.jsx)(P,{isOpen:u,onClose:me,onUpdateUser:function(e){q.setProfileData(e).then((function(e){le(e),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(L,{isOpen:T,onClose:me,onUpdateAvatar:function(e){q.editAvatar(e).then((function(e){le(e),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(E,{isOpen:x,onClose:me,onAddPlace:function(e){q.createCard(e).then((function(e){he([e].concat(Object(o.a)(de))),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(D,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",children:Object(d.jsx)("button",{type:"submit",className:"popup__submit popup__submit-confirm",children:"\u0414\u0430"})}),Object(d.jsx)(g.Provider,{value:v[X],children:Object(d.jsx)(N,{isOpen:F,onClose:me,loggedIn:a})}),Object(d.jsx)(I,{isOpen:z,onClose:me,card:se})]})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b.a,{basename:"",children:Object(d.jsx)(G,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6028edba.chunk.js.map