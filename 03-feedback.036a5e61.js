var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequireeeed;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequireeeed=o);var r=o("kEUo3");const l={form:document.querySelector("form"),input:document.querySelector("input"),text:document.querySelector("textarea"),button:document.querySelector("button")};let n={email:"",massage:""},u=function(){try{return JSON.parse(localStorage.getItem("feedback-form-state"))||n}catch(e){return console.log("can't load data"),n}}();var i;i=u,l.input.value=i.email,l.text.value=i.massage,l.form.addEventListener("submit",(e=>{e.preventDefault()})),l.form.addEventListener("input",r.throttle((function(e){switch(e.target.name){case"email":u.email=e.target.value;break;case"message":u.massage=e.target.value}localStorage.setItem("feedback-form-state",JSON.stringify(u))}),500)),l.button.addEventListener("click",(()=>{""!==l.input.value&&""!==l.text.value?(console.log("you send payload:",u),l.form.reset(),u.email="",u.massage="",localStorage.removeItem("feedback-form-state")):console.log("all fields must be filled")}));
//# sourceMappingURL=03-feedback.036a5e61.js.map