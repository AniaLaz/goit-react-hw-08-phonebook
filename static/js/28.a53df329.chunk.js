"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[28],{5028:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var a=t(2791),r=t(9434),s=t(4270),i="ContactsList_list__M1r-e",c="ContactsList_item__rV9wQ",l="ContactsList_buttonDelete__7Y2Vg",o="ContactsList_itemContent__nP68K",u=t(7322),d=t(3634),m=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},_=function(e){return e.contacts.error},f=function(e){return e.filter},p=t(3329),x=function(){var e=(0,r.v9)(m),n=(0,r.v9)(h),t=(0,r.v9)(_),s=(0,r.v9)(f),x=(0,r.I0)();return(0,a.useEffect)((function(){x((0,d.yF)())}),[x]),(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)("b",{children:"Loading contacts..."}),t&&(0,p.jsx)("b",{children:t}),(0,p.jsx)("ul",{className:i,children:e.length>0&&e.filter((function(e){return e.name.toLowerCase().includes(s)})).map((function(e){var n=e.id,t=e.name,a=e.phone;return(0,p.jsxs)("li",{className:c,id:n,children:[(0,p.jsxs)("div",{className:o,children:[t,": ",a]}),(0,p.jsx)("button",{className:l,onClick:function(){return x((0,d.GK)(n))},children:(0,p.jsx)(u.FU5,{})})]},n)}))})]})},j=t(5984),b="Form_form__e1yzW",v="Form_labelName__XTI5T",N="Form_labelNamber__XHMxu",g="Form_buttonAdd__FKDDY",C="Form_spanName__TnxBC",F="Form_spanNamber__SWMU7",y=function(){var e=(0,r.I0)(),n=(0,r.v9)(m);return(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={name:t.target.name.value,phone:t.target.phone.value,id:(0,j.x0)()};if(n.length>0&&n.find((function(e){return e.name===a.name})))return alert("\u0422\u0430\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454"),void t.target.reset();e((0,d.uK)(a)),t.target.reset()},className:b,children:[(0,p.jsxs)("label",{className:v,children:[(0,p.jsx)("span",{className:C,children:"Name"}),(0,p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)("label",{className:N,children:[(0,p.jsx)("span",{className:F,children:"Namber"}),(0,p.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{type:"submit",className:g,children:"Add contact"})]})},k="filtr_findSpam__4uT90",w="filtr_findInput__RkfCP",L=t(8759),A=function(){var e=(0,r.I0)();return(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{className:k,children:"Find contacts by name"}),(0,p.jsx)("input",{className:w,type:"text",name:"filter",onChange:function(n){return e((0,L.K)(n.target.value.toLowerCase()))}})]})};function I(){var e=(0,r.I0)(),n=(0,r.v9)(h);return(0,a.useEffect)((function(){e((0,d.yF)())}),[e]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.q,{children:(0,p.jsx)("title",{children:"Phonebook"})}),(0,p.jsx)(y,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)("div",{children:n&&"Request in progress..."}),(0,p.jsx)(A,{}),(0,p.jsx)(x,{})]})}}}]);
//# sourceMappingURL=28.a53df329.chunk.js.map