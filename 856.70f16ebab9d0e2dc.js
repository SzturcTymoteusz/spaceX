"use strict";(self.webpackChunkspace_x=self.webpackChunkspace_x||[]).push([[856],{856:(A,s,i)=>{i.r(s),i.d(s,{LoginModule:()=>P});var c=i(9808),g=i(1083),o=i(5e3),d=i(262),h=i(2843),a=i(3075);let F=(()=>{class n{constructor(){this.prepareForm()}get form(){return this._form}get email(){return this._form.get("email")}get password(){return this._form.get("password")}reset(){this._form.reset({email:null,password:null})}prepareForm(){this._form=new a.cw({email:new a.NI(null,[a.kI.required,a.kI.email]),password:new a.NI(null,a.kI.required)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})(),m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Yz7({token:n,factory:function(r){return F.\u0275fac(r)},providedIn:"root"}),n})();var v=i(2339);let C=(()=>{class n{constructor(t,e){this.loginForm=t,this.authentication=e}login(){this.loginForm.password.updateValueAndValidity(),this.loginForm.form.valid?this.authentication.login(this.loginForm.email.value,this.loginForm.password.value).pipe((0,d.K)(t=>(401===t.status&&this.loginForm.password.setErrors({invalidCredentials:!0}),(0,h._)(t)))).subscribe():this.loginForm.form.markAllAsTouched()}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(m),o.LFG(v.V))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Yz7({token:n,factory:function(r){return C.\u0275fac(r)},providedIn:"root"}),n})();var u=i(9224),l=i(7322),f=i(7531);function w(n,r){1&n&&(o.TgZ(0,"mat-error"),o._uU(1,"Email is required"),o.qZA())}function M(n,r){1&n&&(o.TgZ(0,"mat-error"),o._uU(1,"Email is invalid "),o.qZA())}function Z(n,r){1&n&&(o.TgZ(0,"mat-error"),o._uU(1,"Password is required"),o.qZA())}function y(n,r){1&n&&(o.TgZ(0,"mat-error"),o._uU(1,"The email or the password that you've entered is incorrect "),o.qZA())}let T=(()=>{class n{constructor(t){this.loginForm=t}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(m))},n.\u0275cmp=o.Xpm({type:n,selectors:[["space-x-form"]],decls:13,vars:7,consts:[[1,"form",3,"formGroup"],["appearance","outline","id","email-control",1,"full-width"],["id","email-label"],["id","email-input","matInput","","type","text",3,"formControl"],[4,"ngIf"],["appearance","outline","id","password-control",1,"full-width"],["id","password-label"],["id","password-input","matInput","","type","password",3,"formControl"]],template:function(t,e){1&t&&(o.TgZ(0,"form",0),o.TgZ(1,"mat-form-field",1),o.TgZ(2,"mat-label",2),o._uU(3,"Email"),o.qZA(),o._UZ(4,"input",3),o.YNc(5,w,2,0,"mat-error",4),o.YNc(6,M,2,0,"mat-error",4),o.qZA(),o.TgZ(7,"mat-form-field",5),o.TgZ(8,"mat-label",6),o._uU(9,"Password"),o.qZA(),o._UZ(10,"input",7),o.YNc(11,Z,2,0,"mat-error",4),o.YNc(12,y,2,0,"mat-error",4),o.qZA(),o.qZA()),2&t&&(o.Q6J("formGroup",e.loginForm.form),o.xp6(4),o.Q6J("formControl",e.loginForm.email),o.xp6(1),o.Q6J("ngIf",e.loginForm.email.hasError("required")),o.xp6(1),o.Q6J("ngIf",e.loginForm.email.hasError("email")&&!e.loginForm.email.hasError("required")),o.xp6(4),o.Q6J("formControl",e.loginForm.password),o.xp6(1),o.Q6J("ngIf",e.loginForm.password.hasError("required")),o.xp6(1),o.Q6J("ngIf",e.loginForm.password.hasError("invalidCredentials")))},directives:[a._Y,a.JL,a.sg,l.KE,l.hX,f.Nt,a.Fj,a.JJ,a.oH,c.O5,l.TO],styles:[".form[_ngcontent-%COMP%]{width:100%;margin-top:24px}.full-width[_ngcontent-%COMP%]{width:100%}mat-form-field.ng-invalid.ng-touched[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]   .mat-form-field-invalid[_ngcontent-%COMP%]{animation:error-show;animation-duration:.3s;margin-bottom:25px}@keyframes error-show{0%{margin-bottom:0}to{margin-bottom:25px}}"]}),n})();var p=i(7423);const O=[{path:"",component:(()=>{class n{constructor(t,e){this.manageLogin=t,this.loginForm=e}ngOnInit(){this.loginForm.reset()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(L),o.Y36(m))},n.\u0275cmp=o.Xpm({type:n,selectors:[["space-x-login"]],decls:7,vars:0,consts:[[1,"container"],[1,"login"],[1,"title"],["mat-button","",1,"login-button",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-card",1),o.TgZ(2,"div",2),o._uU(3,"Log in"),o.qZA(),o._UZ(4,"space-x-form"),o.TgZ(5,"button",3),o.NdJ("click",function(){return e.manageLogin.login()}),o._uU(6,"Login"),o.qZA(),o.qZA(),o.qZA())},directives:[u.a8,T,p.lW],styles:[".container[_ngcontent-%COMP%]{height:100%;background-image:url(https://spacex.com.pl/files/2021-04/spacex-lunar-starship-on-moon.jpg?ea23fd679e);background-size:cover;display:flex;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{box-sizing:border-box;width:300px;opacity:.85;background-color:#fff;padding:24px}.container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:36px;font-weight:700}.container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{width:100%;background-color:#606569;color:#fff}.container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover{background-color:#373738}"]}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[g.Bz.forChild(O)],g.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.ez,x,u.QW,a.UX,l.lN,f.c,p.ot]]}),n})()}}]);