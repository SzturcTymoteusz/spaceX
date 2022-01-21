"use strict";(self.webpackChunkspace_x=self.webpackChunkspace_x||[]).push([[510],{5510:(Z,u,c)=>{c.r(u),c.d(u,{MainModule:()=>x});var a=c(9808),s=c(1282),n=c(4893),g=c(1135);let p=(()=>{class e{constructor(){this._isOpen=new g.X(!0),this.isOpen=this._isOpen.asObservable()}toggle(){this._isOpen.next(!this._isOpen.value)}open(){console.log("open"),this._isOpen.next(!0)}close(){this._isOpen.next(!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:function(o){return p.\u0275fac(o)},providedIn:"root"}),e})();var d=c(2339);let h=(()=>{class e{constructor(t,i){this.authentication=t,this.menuPanelOpenState=i}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(d.V),n.Y36(r))},e.\u0275cmp=n.Xpm({type:e,selectors:[["space-x-header"]],decls:10,vars:1,consts:[[1,"header"],[1,"menu-icon",3,"click"],[1,"fas","fa-bars"],[1,"content"],[1,"logo"],["src","./assets/images/spacex-logo.jpg"],[1,"user-mail"],[1,"logout-icon",3,"click"],[1,"fas","fa-sign-out-alt"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.NdJ("click",function(){return i.menuPanelOpenState.toggle()}),n._UZ(2,"i",2),n.qZA(),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n._UZ(5,"img",5),n.qZA(),n.TgZ(6,"div",6),n._uU(7),n.qZA(),n.qZA(),n.TgZ(8,"div",7),n.NdJ("click",function(){return i.authentication.logout()}),n._UZ(9,"i",8),n.qZA(),n.qZA()),2&t&&(n.xp6(7),n.hij(" ",null==i.authentication.user?null:i.authentication.user.email," "))},styles:[".header[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#000;display:flex;align-items:center}.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{color:#fff;font-size:24px;margin:0 24px 0 12px}.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .user-mail[_ngcontent-%COMP%]{color:#fff;font-size:16px;margin-left:48px;flex-grow:1}.header[_ngcontent-%COMP%]   .logout-icon[_ngcontent-%COMP%]{margin-right:12px;font-size:26px;color:#fff}.header[_ngcontent-%COMP%]   .logout-icon[_ngcontent-%COMP%]:hover{cursor:pointer}@media (max-width: 700px){.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-direction:column}.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .user-mail[_ngcontent-%COMP%]{margin-left:0}}"]}),e})();var m=c(7977);function f(e,o){if(1&e&&(n.ynx(0),n.TgZ(1,"a",3),n._uU(2),n.qZA(),n.BQk()),2&e){const t=o.$implicit;n.xp6(1),n.Q6J("routerLink",t.route),n.xp6(1),n.hij(" ",t.label," ")}}function M(e,o){if(1&e&&(n.TgZ(0,"div",1),n.YNc(1,f,3,2,"ng-container",2),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.menuRoutes)}}let O=(()=>{class e{constructor(t,i){this.menuPanelOpenState=t,this.menuRoutes=i}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r),n.Y36(m.o))},e.\u0275cmp=n.Xpm({type:e,selectors:[["space-x-menu"]],decls:2,vars:3,consts:[["class","menu",4,"ngIf"],[1,"menu"],[4,"ngFor","ngForOf"],[1,"route",3,"routerLink"]],template:function(t,i){1&t&&(n.YNc(0,M,2,1,"div",0),n.ALo(1,"async")),2&t&&n.Q6J("ngIf",n.lcZ(1,1,i.menuPanelOpenState.isOpen))},directives:[a.O5,a.sg,s.yS],pipes:[a.Ov],styles:[".menu[_ngcontent-%COMP%]{background-color:#141617;width:250px;height:100%}.menu[_ngcontent-%COMP%]   .route[_ngcontent-%COMP%]{line-height:24px;color:#ffffffd9;padding:12px;font-size:16px;display:block;text-decoration:none}.menu[_ngcontent-%COMP%]   .route[_ngcontent-%COMP%]:hover{background-color:#494949;cursor:pointer}"]}),e})(),l=(()=>{class e{constructor(t,i){this.menuPanelOpenState=t,this.cdr=i}ngOnInit(){const t=window.matchMedia("(max-width: 700px)");this.updateView(t),t.onchange=()=>{this.updateView(t)}}updateView(t){t.matches?(this.menuPanelOpenState.close(),this.cdr.detectChanges()):(this.menuPanelOpenState.open(),this.cdr.detectChanges())}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r),n.Y36(n.sBO))},e.\u0275cmp=n.Xpm({type:e,selectors:[["space-x-core"]],decls:8,vars:3,consts:[[1,"container"],[1,"header"],[1,"content"],[1,"menu",3,"ngClass"],[1,"pages"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._UZ(2,"space-x-header"),n.qZA(),n.TgZ(3,"div",2),n._UZ(4,"space-x-menu",3),n.ALo(5,"async"),n.TgZ(6,"div",4),n._UZ(7,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(4),n.Q6J("ngClass",n.lcZ(5,1,i.menuPanelOpenState.isOpen)?"open":"close"))},directives:[h,O,a.mk,s.lC],pipes:[a.Ov],styles:[".container[_ngcontent-%COMP%]{width:100%;min-height:100vh;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:100%;height:48px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-grow:1}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]{flex-grow:1}@media (max-width: 700px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:72px}}"]}),e})();const C=[{path:"",component:l,loadChildren:()=>c.e(287).then(c.bind(c,9287)).then(e=>e.InitialPageModule)},{path:"launches",component:l,loadChildren:()=>c.e(17).then(c.bind(c,6017)).then(e=>e.LaunchesModule)},{path:"tesla-roadster",component:l,loadChildren:()=>c.e(879).then(c.bind(c,879)).then(e=>e.TeslaRoadsterModule)}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.Bz.forChild(C)],s.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,P]]}),e})()}}]);