import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const m="feedback-form-state",a={email:"",message:""},r={form:document.querySelector(".feedback-form")};function l(){const e=n(m);e&&(r.form.elements.email.value=e.email||"",r.form.elements.message.value=e.message||"")}l();r.form.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value.trim(),s=e.currentTarget.elements.message.value.trim();a.email=t,a.message=s,o(m,a)});r.form.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),s=e.currentTarget.elements.message.value.trim();if(!t||!s){alert("Please fill in all fields");return}a.email=t,a.message=s,console.log("Submitted data:",a),localStorage.removeItem(m),r.form.reset()});function o(e,t){localStorage.setItem(e,JSON.stringify(t))}function n(e){try{return JSON.parse(localStorage.getItem(e))||null}catch(t){return console.error("Error parsing data from localStorage:",t),null}}
//# sourceMappingURL=2-form.js.map
