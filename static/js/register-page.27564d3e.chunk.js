(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[6],{186:function(e,a,t){"use strict";t.r(a);var n=t(4),s=t(15),o=t(106),i=t(101),r=t(120),l=t(119),d=t(0),c=t(9),h=t(10),b=(t(34),t(187)),u=t(185),j=t(195),w=t(194),m=t(196),p=t(190),O=t(129),g=t.n(O),v=t(133),f=t.n(v),x=t(1),C=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(o.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",password:""},e.state={name:"",email:"",password:"",showPassword:!1},e.handleClickShowPassword=function(){e.setState(Object(s.a)(Object(s.a)({},e.state),{},{showPassword:!e.state.showPassword}))},e.handleMouseDownPassword=function(e){e.preventDefault()},e.handleChange=function(a){return function(t){e.setState(Object(s.a)(Object(s.a)({},e.state),{},Object(n.a)({},a,t.target.value)))}},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:"",showPassword:!1})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password,s=e.showPassword;return Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)("h1",{className:"title",children:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",autoComplete:"on",children:[Object(x.jsx)(b.a,{id:"outlined-basic",label:"\u0406\u043c'\u044f",variant:"outlined",value:a,name:"name",onChange:this.handleChange("name")}),Object(x.jsx)(b.a,{id:"outlined-basic",label:"\u041f\u043e\u0448\u0442\u0430",variant:"outlined",value:t,name:"email",onChange:this.handleChange("email")}),Object(x.jsxs)(u.a,{variant:"outlined",children:[Object(x.jsx)(j.a,{htmlFor:"outlined-adornment-password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(x.jsx)(w.a,{id:"outlined-adornment-password",type:s?"text":"password",value:n,name:"password",onChange:this.handleChange("password"),endAdornment:Object(x.jsx)(m.a,{position:"end",children:Object(x.jsx)(p.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,onMouseDown:this.handleMouseDownPassword,edge:"end",children:s?Object(x.jsx)(g.a,{}):Object(x.jsx)(f.a,{})})}),labelWidth:70})]}),Object(x.jsx)("button",{type:"submit",className:"formBtn",children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"})]})]})}}]),t}(d.Component),P={onRegister:h.a.register};a.default=Object(c.b)(null,P)(C)}}]);
//# sourceMappingURL=register-page.27564d3e.chunk.js.map