(window["webpackJsonplanding-page"]=window["webpackJsonplanding-page"]||[]).push([[0],{26:function(e,a,t){e.exports=t(52)},31:function(e,a,t){},35:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(19),i=t.n(s),o=(t(31),t(20)),c=t(21),l=t(24),m=t(22),d=t(8),h=t(25),u=t(9),b=t.n(u),p=t(23),g=t.n(p),f=t(11),v={apiKey:"AIzaSyA9ZTOi5zORbbSrrfKKwfmE1_v3HDqzxrI",authDomain:"buddy-cleaner.firebaseapp.com",databaseURL:"https://buddy-cleaner.firebaseio.com",projectId:"buddy-cleaner",storageBucket:"",messagingSenderId:"508996475374",appId:"1:508996475374:web:4893d5c4c75b84facb96ff",measurementId:"G-YW7L4CD8KT"},w=(t(32),t(35),f.initializeApp(v).firestore()),y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={email:"",message:"",error:!1,gdpr:!1},t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.handlGdprChange=t.handlGdprChange.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlGdprChange",value:function(e){this.setState({gdpr:e.target.checked})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.setState({error:!1,message:""});var t=this.state,n=t.email;t.gdpr;w.collection("subscribe").add({email:n,timestamp:f.firestore.FieldValue.serverTimestamp()}).then((function(e){console.log("document for email ".concat(n," created with success"),e),a.setState({email:"",message:"Thank you for subscribing!",gdpr:!1})})).catch((function(e){console.error("\ud83d\udca5 failed to create document for email ".concat(n," with error"),e),a.setState({message:"Failed to submit the email, please try again!",error:!0})}))}},{key:"render",value:function(){var e="mt-5";return this.state.message.length&&(e+=this.state.error?" error-message":" feedback-message"),r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"App-header"},r.a.createElement("h1",{className:"title mb-0"},"Coming Soon"),r.a.createElement("p",{className:"text"},"Buddy cleaner will revolutionize households domestic tasks"),r.a.createElement(b.a,{className:"subscribe-form",onSubmit:this.handleSubmit},r.a.createElement(b.a.Control,{required:!0,type:"text",placeholder:"example@email.com",className:"mt-5 mb-2 text-center  ml-auto mr-auto",value:this.state.email,onChange:this.handleChange}),r.a.createElement(b.a.Check,{required:!0,type:"checkbox",id:"gdpr",label:"I would like to subscribe to updates from Buddy Cleaner",className:"gdpr",size:"sm",checked:this.state.gdpr,onChange:this.handlGdprChange}),r.a.createElement(g.a,{variant:"primary",className:"subscribe-btn w-100",type:"submit"},"Subscribe now")),this.state.message&&r.a.createElement("p",{className:e},this.state.message)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.3fdbdce3.chunk.js.map