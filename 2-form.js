import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const m="form-state",a={email:"",message:""},r={form:document.querySelector(".feedback-form")};r.form.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value.trim(),s=e.currentTarget.elements.message.value.trim();a.email=t,a.message=s,n(m,a)});function l(){const e=o(m);e&&(r.form.elements.email.value=e.email||"",r.form.elements.message.value=e.message||"")}l();r.form.addEventListener("submit",e=>{if(e.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}const t=e.currentTarget.elements.email.value.trim(),s=e.currentTarget.elements.message.value.trim();a.email=t,a.message=s,console.log(a),localStorage.removeItem(m),e.target.reset()});function n(e,t){const s=JSON.stringify(t);localStorage.setItem(e,s)}function o(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}
//# sourceMappingURL=2-form.js.map
