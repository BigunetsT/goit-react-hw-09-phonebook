(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[1],{126:function(t,e,n){t.exports={enter:"notification_enter__3JWk3",enterActive:"notification_enterActive__2UqyF",exit:"notification_exit__1PxC8",exitActive:"notification_exitActive__1xcRf"}},127:function(t,e,n){t.exports={enter:"pop_enter__39SwO",enterActive:"pop_enterActive__3sHvc",exit:"pop_exit__8tF8i",exitActive:"pop_exitActive__1RHxi"}},141:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__W9vpB",title:"ContactForm_title__dQQMX",label:"ContactForm_label__3gKcl",input:"ContactForm_input__2rPSJ",addContactBtn:"ContactForm_addContactBtn__3hpDE"}},142:function(t,e,n){t.exports={notification:"Notification_notification__2shNO"}},143:function(t,e,n){t.exports={overlay:"Modal_overlay__2zypP",modal:"Modal_modal__29I8U",closeModalBtn:"Modal_closeModalBtn__2QLQ7"}},144:function(t,e,n){t.exports={filter:"Filter_filter__3IL4l",label:"Filter_label__1haaR",input:"Filter_input__LvKz3"}},145:function(t,e,n){t.exports={phoneNumber:"ContactItem_phoneNumber__3WKXB",contactItem:"ContactItem_contactItem__3reYV",img:"ContactItem_img__PDCtf",name:"ContactItem_name__1qM9m",contactBtn:"ContactItem_contactBtn__ogAru",ring:"ContactItem_ring__1DN3A",svg:"ContactItem_svg__VYDcA"}},146:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__2uvk5"}},189:function(t,e,n){"use strict";n.r(e);var c=n(11),a=n(34),s=n(33),o=n(37),r=n(36),i=n(0),l=n(10),u=n(190),d=n(192),m=n(4),b=n(141),h=n.n(b),j=n(1),p=function(t){var e=t.name,n=t.number,c=t.onSubmit,a=t.onChange,s=t.textBtn;return Object(j.jsxs)("form",{onSubmit:c,className:h.a.contactForm,children:[Object(j.jsx)("h2",{className:h.a.title,children:"\u0414\u0430\u043d\u0456 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443: "}),Object(j.jsxs)("label",{className:h.a.label,children:["\u0406\u043c'\u044f",Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",value:e,placeholder:"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:a})]}),Object(j.jsxs)("label",{className:h.a.label,children:["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",placeholder:"XXX-XX-XX",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:a})]}),Object(j.jsx)("button",{type:"submit",className:h.a.addContactBtn,children:s})]})},x=n(142),f=n.n(x),O=function(t){var e=t.message;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:f.a.notification,children:e}),";"]})},v=n(35),_=n(126),g=n.n(_),C={name:"",number:"",message:null},w=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state=Object(c.a)({},C),t.handleChange=function(e){var n=e.currentTarget,a=n.name,s=n.value;t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(m.a)({},a,s))}))},t.handleSubmit=function(e){var n=t.state.name;if(e.preventDefault(),t.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase()))return t.setState({message:"".concat(n," is already in contacts")}),void setTimeout((function(){t.setState((function(){return{message:null}}))}),2e3);t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState(Object(c.a)({},C))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.message;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{in:Boolean(c),timeout:250,classNames:g.a,unmountOnExit:!0,children:Object(j.jsx)(O,{message:c})}),Object(j.jsx)(p,{onSubmit:this.handleSubmit,onChange:this.handleChange,name:e,number:n,textBtn:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(i.Component),N=Object(l.b)((function(t){return{contacts:v.d.getContacts(t)}}),(function(t){return{onSubmit:function(e){var n=e.name,c=e.number;return t(v.b.addContact({name:n,number:c}))}}}))(w),y=n(25),k=n(143),z=n.n(k),B=document.querySelector("#modal-root"),S=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this,e=this.props.children;return Object(y.createPortal)(Object(j.jsx)("div",{className:z.a.overlay,onClick:this.handleBackdropClick,children:Object(j.jsxs)("div",{className:z.a.modal,children:[Object(j.jsx)("button",{type:"button",className:z.a.closeModalBtn,onClick:function(){t.props.onClose()},children:"X"}),e]})}),B)}}]),n}(i.Component),M=n(144),I=n.n(M),A=Object(l.b)((function(t){return{value:v.d.getFilter(t)}}),(function(t){return{onChange:function(e){return t(Object(v.a)(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(j.jsx)("div",{className:I.a.filter,children:Object(j.jsxs)("label",{className:I.a.label,children:["\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u0437\u0430 \u0456\u043c'\u044f\u043c",Object(j.jsx)("input",{type:"text",className:I.a.input,value:e,onChange:n})]})})})),F=n(153),D=n(127),L=n.n(D),X=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={name:t.props.name,number:t.props.number,id:t.props.id,message:null},t.handleChange=function(e){var n=e.currentTarget,a=n.name,s=n.value;t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(m.a)({},a,s))}))},t.handleSubmit=function(e){var n=t.state,c=n.name,a=n.number,s=t.props.contacts;if(e.preventDefault(),s.map((function(t){return t.name.toLowerCase()})).includes(c.toLowerCase())&&s[s.map((function(t,e){return t.name===c?e:null})).filter((function(t){return null!==t})).join("")].number===a)return t.setState({message:"This contact is already in list"}),void setTimeout((function(){t.setState((function(){return{message:null}}))}),2e3);t.props.onSubmit(t.state)},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.message;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{in:Boolean(c),timeout:250,classNames:g.a,unmountOnExit:!0,children:Object(j.jsx)(O,{message:c})}),Object(j.jsx)(p,{onSubmit:this.handleSubmit,onChange:this.handleChange,name:e,number:n,textBtn:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"})]})}}]),n}(i.Component),T=Object(l.b)((function(t){return{contacts:v.d.getContacts(t)}}),(function(t){return{onSubmit:function(e){var n=e.id,c=e.name,a=e.number;return t(v.b.updateContact({id:n,name:c,number:a}))}}}))(X),E=n(145),K=n.n(E),q=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={showModal:!1},t.openModal=function(){t.setState({showModal:!0})},t.closeModal=function(){t.setState({showModal:!1})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.id,c=e.name,a=e.number,s=e.onDelete,o=this.state.showModal;return Object(j.jsxs)("li",{name:c,number:a,className:K.a.contactItem,children:[Object(j.jsxs)("div",{className:K.a.contactData,children:[Object(j.jsx)("svg",{className:K.a.img,id:"Capa_1",enableBackground:"new 0 0 512 512",height:"30",viewBox:"0 0 512 512",width:"30",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsxs)("g",{children:[Object(j.jsx)("circle",{cx:"255.997",cy:"255.997",fill:"#fd9468",r:"255.997"}),Object(j.jsx)("path",{d:"m512 255.997c0 141.381-114.622 256.003-256.003 256.003-42.346 0-82.285-10.278-117.471-28.488 30.597 12.922 64.24 20.072 99.549 20.072 141.381 0 255.992-114.621 255.992-256.002 0-99.076-56.277-185.003-138.614-227.555 91.978 38.827 156.547 129.857 156.547 235.97z",fill:"#fe7d43"}),Object(j.jsx)("circle",{cx:"255.997",cy:"255.997",fill:"#f9f3f1",r:"212.835"}),Object(j.jsx)("path",{d:"m468.83 255.997c0 117.543-95.29 212.833-212.833 212.833-32.264 0-62.851-7.181-90.259-20.031 21.225 7.109 43.951 10.957 67.573 10.957 117.553 0 212.843-95.29 212.843-212.833 0-85.279-50.155-158.84-122.585-192.802 84.417 28.242 145.261 107.955 145.261 201.876z",fill:"#efe2dd"}),Object(j.jsx)("path",{d:"m226.382 144.985c-15.039-23.199-35.383-41.206-63.445-23.299-15.673 10.002-27.089 25.962-33.236 43.509-13.068 37.303-6.857 77.233 10.736 111.934 21.676 42.754 59.049 81.69 101.112 104.661 46.325 25.298 92.168 20.165 131.372-15.177 16.568-14.936 24.524-40.862 4.519-56.948-16.476-13.248-41.545-33.756-63.268-19.57-14.952 9.765-19.618 26.154-39.359 27.515-33.757 2.327-69.626-50.132-74.033-79.392-1.366-9.075 1.105-16.973 6.538-24.209 5.695-7.585 12.534-9.481 19.286-14.745 16.056-12.519 11.979-35.457-.222-54.279z",fill:"#fd9468"}),Object(j.jsx)("path",{d:"m372.923 366.617c-39.208 35.34-85.053 40.474-131.371 15.175-42.069-22.974-79.436-61.904-101.113-104.662-13.118-25.865-19.908-54.631-17.099-83.057 1.883 19.753 7.953 39.208 17.099 57.233 21.677 42.758 59.044 81.689 101.113 104.662 46.318 25.299 92.162 20.165 131.371-15.175 6.019-5.432 10.895-12.305 13.714-19.63 6.997 15.206-.699 33.715-13.714 45.454z",fill:"#fe7d43"})]})}),Object(j.jsxs)("span",{className:K.a.name,children:[c," :"]}),Object(j.jsx)("span",{className:K.a.phoneNumber,children:a})]}),Object(j.jsxs)("div",{className:K.a.contactOperations,children:[Object(j.jsxs)("button",{type:"button",className:K.a.contactBtn,onClick:function(){return s(n)},children:["\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",Object(j.jsx)("svg",{className:K.a.svg,id:"Capa_1",enableBackground:"new 0 0 512 512",height:"20",viewBox:"0 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsxs)("g",{children:[Object(j.jsx)("path",{d:"m256 441.142c8.284 0 15-6.716 15-15v-201.409c0-8.284-6.716-15-15-15s-15 6.716-15 15v201.409c0 8.284 6.716 15 15 15z"}),Object(j.jsx)("path",{d:"m173.412 427.552c.78 8.263 8.115 14.303 16.344 13.523 8.248-.779 14.302-8.096 13.523-16.344l-19.018-201.409c-.779-8.247-8.083-14.303-16.344-13.523-8.248.779-14.302 8.096-13.523 16.344z"}),Object(j.jsx)("path",{d:"m322.244 441.076c8.238.779 15.564-5.269 16.344-13.523l19.018-201.409c.779-8.248-5.276-15.565-13.523-16.344-8.26-.784-15.565 5.276-16.344 13.523l-19.018 201.409c-.779 8.247 5.276 15.565 13.523 16.344z"}),Object(j.jsx)("path",{d:"m57.646 168.875h8.967l43.448 330.083c.982 7.463 7.344 13.042 14.872 13.042h262.135c7.528 0 13.889-5.579 14.872-13.042l43.448-330.083h8.967c8.284 0 15-6.716 15-15v-65.629c0-8.284-6.716-15-15-15h-128.357v-5.911c0-37.128-30.207-67.335-67.335-67.335h-5.325c-37.128 0-67.335 30.207-67.335 67.335v5.911h-128.357c-8.284 0-15 6.716-15 15v65.629c0 8.284 6.715 15 15 15zm316.267 313.125h-235.826l-41.215-313.125h318.257zm-157.911-414.665c0-20.586 16.749-37.335 37.335-37.335h5.325c20.586 0 37.335 16.749 37.335 37.335v5.911h-79.995zm-143.356 35.911h366.709v35.629c-3.207 0-362.709 0-366.709 0z"})]})})]}),Object(j.jsxs)("button",{type:"button",className:K.a.contactBtn,onClick:function(){return t.openModal()},children:["\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",Object(j.jsxs)("svg",{className:K.a.svg,height:"20",viewBox:"0 -1 381.53417 381",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"m370.589844 230.964844c-5.523438 0-10 4.476562-10 10v88.792968c-.019532 16.558594-13.4375 29.980469-30 30h-280.589844c-16.5625-.019531-29.980469-13.441406-30-30v-260.589843c.019531-16.5625 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.589843c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.789062c0-5.523438-4.476563-10.003906-10-10.003906zm0 0"}),Object(j.jsx)("path",{d:"m156.367188 178.34375 146.011718-146.015625 47.089844 47.089844-146.011719 146.015625zm0 0"}),Object(j.jsx)("path",{d:"m132.542969 249.257812 52.039062-14.414062-37.625-37.625zm0 0"}),Object(j.jsx)("path",{d:"m362.488281 7.578125c-9.769531-9.746094-25.585937-9.746094-35.355469 0l-10.605468 10.605469 47.089844 47.089844 10.605468-10.605469c9.75-9.769531 9.75-25.585938 0-35.355469zm0 0"})]})]}),o&&Object(j.jsx)(S,{onClose:this.closeModal,children:Object(j.jsx)(T,{name:c,number:a,id:n})})]})]})}}]),n}(i.Component),J=Object(l.b)(null,(function(t){return{onDelete:function(e){return t(v.b.deleteContact(e))}}}))(q),P=n(146),Q=n.n(P),R=function(t){var e=t.contacts;return Object(j.jsx)(F.a,{component:"ul",className:Q.a.contactsList,children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(j.jsx)(u.a,{timeout:200,classNames:L.a,children:Object(j.jsx)(J,{id:e,name:n,number:c})},e)}))})},W=(n(147),n(38),26),U=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={showModal:!1,firstIndex:0,secondIndex:Number("".concat(W))},t.openModal=function(){t.setState(Object(c.a)(Object(c.a)({},t.state),{},{showModal:!0}))},t.closeModal=function(){t.setState(Object(c.a)(Object(c.a)({},t.state),{},{showModal:!1}))},t.prevContacts=function(){t.setState((function(e){return Object(c.a)(Object(c.a)({},t.state),{},{firstIndex:e.firstIndex-Number("".concat(W)),secondIndex:e.secondIndex-Number("".concat(W))})})),window.scrollTo({top:0,left:0,behavior:"smooth"})},t.nextContacts=function(){t.setState((function(e){return Object(c.a)(Object(c.a)({},t.state),{},{firstIndex:e.firstIndex+Number("".concat(W)),secondIndex:e.secondIndex+Number("".concat(W))})})),window.scrollTo({top:0,left:0,behavior:"smooth"})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contactsCount,n=t.contacts,c=t.filter,a=this.state,s=a.showModal,o=a.firstIndex,r=a.secondIndex,i=r>"".concat(W),l=e-r>0;return Object(j.jsxs)("div",{className:"container__page container__page-contacts",children:[Object(j.jsx)("h1",{className:"title",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),Object(j.jsxs)("div",{className:"contacts",children:[Object(j.jsxs)("div",{className:"contacts__operations",children:[Object(j.jsx)("h3",{className:"contacts__count",children:e?"\u0412\u0441\u044c\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432: ".concat(e):"\u0423 \u0412\u0430\u0441 \u0449\u0435 \u043d\u0435\u043c\u0430\u0454 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}),Object(j.jsxs)(d.a,{variant:"secondary",onClick:this.openModal,className:"addBtn",children:["\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",Object(j.jsxs)("svg",{className:"contacts__addBtnImg",id:"_x31__px",enableBackground:"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"m9.02 21h-6.52c-1.378 0-2.5-1.121-2.5-2.5v-16c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5v6.06c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6.06c0-.827-.673-1.5-1.5-1.5h-12c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h6.52c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(j.jsx)("path",{d:"m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(j.jsx)("path",{d:"m9.5 13h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(j.jsx)("path",{d:"m8.5 5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(j.jsx)("path",{d:"m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z"}),Object(j.jsx)("path",{d:"m17.5 21c-.276 0-.5-.224-.5-.5v-6c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .276-.224.5-.5.5z"}),Object(j.jsx)("path",{d:"m20.5 18h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"})]})]}),s&&Object(j.jsx)(S,{onClose:this.closeModal,children:Object(j.jsx)(N,{})}),Object(j.jsx)(u.a,{in:Number(e)>1,timeout:250,classNames:L.a,unmountOnExit:!0,children:Object(j.jsx)(A,{})})]}),Object(j.jsxs)("div",{className:"contacts__info",children:[c&&Object(j.jsx)(R,{contacts:n.slice(0,Number("".concat(W))),className:"contact__list"}),Object(j.jsx)(R,{contacts:n.slice(o,r),className:"contact__list"}),Object(j.jsxs)("div",{className:"pagination",children:[i&&Object(j.jsx)("button",{type:"button",className:"pagination-btn",onClick:this.prevContacts,children:"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044f \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"}),l&&Object(j.jsx)("button",{type:"button",className:"pagination-btn",onClick:this.nextContacts,children:"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"})]})]})]}),Object(j.jsx)("div",{className:"footer",children:"GoIt-2021 React#27"})]})}}]),n}(i.Component);e.default=Object(l.b)((function(t){return{contactsCount:v.d.getContactsCount(t),contacts:v.d.getSortContacts(t),filter:v.d.getFilter(t)}}),(function(t){return{fetchContacts:function(){return t(v.b.fetchContacts())}}}))(U)}}]);
//# sourceMappingURL=contacts-page.beb94f00.chunk.js.map