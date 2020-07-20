(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={filterInput:"FilterContacts_filterInput__3cpYq",filterTitle:"FilterContacts_filterTitle__3nA6t"}},17:function(e,t,n){e.exports={container:"Section_container__2BLnu"}},21:function(e,t,n){e.exports={list:"ContactList_list__1GZsj",list__item:"ContactList_list__item__3cc4P"}},22:function(e,t,n){e.exports={list:"ContactList_list__3oHNV",list__item:"ContactList_list__item__2tHPl"}},26:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),c=n(6),l=n.n(c),i=n(3),u=n(4),m=n(23),s=n(2),f=n(15),_={addContact:Object(i.b)("phoneBook/addContact",(function(e){var t=e.name,n=e.phone;return{payload:{contact:{id:Object(f.v4)(),name:t,phone:n}}}})),removeContact:Object(i.b)("phoneBook/removeContact"),changeFilter:Object(i.b)("phoneBook/changeFilter"),changeTheme:Object(i.b)("phoneBook/changeTheme")},h=Object(i.c)([],(a={},Object(u.a)(a,_.addContact,(function(e,t){var n=t.payload;return[].concat(Object(m.a)(e),[n.contact])})),Object(u.a)(a,_.removeContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),b=Object(i.c)("",Object(u.a)({},_.changeFilter,(function(e,t){return t.payload}))),p=Object(s.c)({items:h,filter:b}),d=Object(i.c)("light",Object(u.a)({},_.changeTheme,(function(e,t){return t.payload}))),C=Object(s.c)({theme:d}),g=Object(i.a)({reducer:{contacts:p,PhBookTheme:C}}),v=n(1),j={light:{color:"#000000",backgroundColor:"#ffffff"},dark:{color:"#ffffff",backgroundColor:"#000000"}},O=n(17),E=n.n(O),k=Object(v.b)((function(e){return{theme:e.PhBookTheme.theme}}))((function(e){var t=e.theme,n=e.title,a=e.children;return r.a.createElement("section",{className:E.a.container,style:j[t]},r.a.createElement("h2",null,n),a)})),y=n(18),N=n(19),F=n(25),T=n(24),B=n(5),L=n.n(B),x=function(e){Object(F.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:"",phone:""},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(u.a)({},a,o))},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onAddContact)(e.state),e.setState({name:"",phone:""})},e}return Object(N.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:L.a.form},r.a.createElement("label",{className:L.a.form__label},"Name:",r.a.createElement("input",{className:L.a.form__input,type:"text",value:this.state.name,onChange:this.handleChange,name:"name"})),r.a.createElement("label",{className:L.a.form__label},"Phone:",r.a.createElement("input",{className:L.a.form__input,type:"number",value:this.state.phone,onChange:this.handleChange,name:"phone",placeholder:"in format: 0XXXXXXXXX"})),r.a.createElement("button",{type:"submit",className:L.a.form__btn},"Add Contact"))}}]),n}(o.Component),S={onAddContact:_.addContact},X=Object(v.b)(null,S)(x),w=n(20),P=n(21),A=n.n(P),D=Object(v.b)((function(e,t){var n=e.contacts.items.find((function(e){return e.id===t.id}));return Object(w.a)({},n)}),(function(e,t){return{removeContact:function(){return e(_.removeContact(t.id))}}}))((function(e){var t=e.phone,n=e.name,a=e.id,o=e.removeContact,c="tel:+38".concat(t);return r.a.createElement("li",{key:a,className:A.a.list__item},r.a.createElement("span",null,n,":"),r.a.createElement("a",{href:c},t),r.a.createElement("button",{type:"button",onClick:o},"Delete"))})),I=n(22),J=n.n(I),q=Object(v.b)((function(e){var t=e.contacts;return{list:t.items.filter((function(e){return e.name.toLocaleLowerCase().includes(t.filter.toLocaleLowerCase())}))}}))((function(e){var t=e.list;return r.a.createElement("ul",{className:J.a.list},t.map((function(e){return r.a.createElement(D,{key:e.id,id:e.id})})))})),G=n(11),H=n.n(G);var V={onChangeFilter:_.changeFilter},W=Object(v.b)((function(e){return{value:e.contacts.filter}}),V)((function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:H.a.filterTitle},"Find contacts by name"),r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},className:H.a.filterInput,placeholder:"Search..."}))})),Z=n(7),z=n.n(Z),K={changeTheme:_.changeTheme},R=Object(v.b)(null,K)((function(e){var t=e.changeTheme;return r.a.createElement("div",{className:z.a.footer},r.a.createElement("button",{className:z.a.footer__btn,onClick:function(){return t("light")},type:"button"},"Light"),r.a.createElement("button",{className:z.a.footer__btn,onClick:function(){return t("dark")},type:"button"},"Dark"))})),Y=Object(v.b)((function(e){return{state:e}}))((function(e){var t=e.state.contacts.items.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(k,{title:"Phonebook"},r.a.createElement(X,null),t>=2&&r.a.createElement(W,null),0!==t&&r.a.createElement(q,null)))}));l.a.render(r.a.createElement(v.a,{store:g},r.a.createElement(Y,null)),document.querySelector("#root"))},5:function(e,t,n){e.exports={form:"ContactForm_form__2Zyri",form__input:"ContactForm_form__input__2bKTD",form__label:"ContactForm_form__label__3RNoP",form__btn:"ContactForm_form__btn__2wAO_"}},7:function(e,t,n){e.exports={footer:"Button_footer__52V5W",footer__btn:"Button_footer__btn__3aWvC",light:"Button_light__2Legd",dark:"Button_dark__2SJGz"}}},[[26,1,2]]]);
//# sourceMappingURL=main.96db791f.chunk.js.map