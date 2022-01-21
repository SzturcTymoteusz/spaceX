"use strict";(self.webpackChunkspace_x=self.webpackChunkspace_x||[]).push([[910],{7910:(S,g,i)=>{i.r(g),i.d(g,{MainModule:()=>Z});var a=i(9808),s=i(1282),n=i(4893),p=i(1135);let h=(()=>{class e{constructor(){this._isOpen=new p.X(!0),this.isOpen=this._isOpen.asObservable()}toggle(){this._isOpen.next(!this._isOpen.value)}open(){console.log("open"),this._isOpen.next(!0)}close(){this._isOpen.next(!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:function(o){return h.\u0275fac(o)},providedIn:"root"}),e})();var C=i(2339);let m=(()=>{class e{constructor(t,c){this.authentication=t,this.menuPanelOpenState=c}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(C.V),n.Y36(l))},e.\u0275cmp=n.Xpm({type:e,selectors:[["space-x-header"]],decls:10,vars:1,consts:[[1,"header"],[1,"menu-icon",3,"click"],[1,"fas","fa-bars"],[1,"content"],[1,"logo"],["src","./assets/images/spacex-logo.jpg"],[1,"user-mail"],[1,"logout-icon",3,"click"],[1,"fas","fa-sign-out-alt"]],template:function(t,c){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.NdJ("click",function(){return c.menuPanelOpenState.toggle()}),n._UZ(2,"i",2),n.qZA(),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n._UZ(5,"img",5),n.qZA(),n.TgZ(6,"div",6),n._uU(7),n.qZA(),n.qZA(),n.TgZ(8,"div",7),n.NdJ("click",function(){return c.authentication.logout()}),n._UZ(9,"i",8),n.qZA(),n.qZA()),2&t&&(n.xp6(7),n.hij(" ",null==c.authentication.user?null:c.authentication.user.email," "))},styles:[".header[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#000;display:flex;align-items:center}.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{color:#fff;font-size:24px;margin:0 24px 0 12px}.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .user-mail[_ngcontent-%COMP%]{color:#fff;font-size:16px;margin-left:48px;flex-grow:1}.header[_ngcontent-%COMP%]   .logout-icon[_ngcontent-%COMP%]{margin-right:12px;font-size:26px;color:#fff}.header[_ngcontent-%COMP%]   .logout-icon[_ngcontent-%COMP%]:hover{cursor:pointer}@media (max-width: 700px){.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-direction:column}.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .user-mail[_ngcontent-%COMP%]{margin-left:0}}"]}),e})();var f=i(7977);let O=(()=>{class e{constructor(){this._card=new p.X(null),this.card=this._card.asObservable(),this.cards=[]}set(t){this._card.next(t)}setCards(t){this.cards=t}setInitialCard(t){const c=this.cards.find(r=>r.route===`/${t}`);c&&this._card.next(c)}reset(){this._card.next(null)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:function(o){return O.\u0275fac(o)},providedIn:"root"}),e})();function v(e,o){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"a",3),n.NdJ("click",function(){const d=n.CHM(t).$implicit;return n.oxw(2).activeCard.set(d)}),n.ALo(2,"async"),n._uU(3),n.qZA(),n.BQk()}if(2&e){const t=o.$implicit,c=n.oxw(2);n.xp6(1),n.Q6J("ngClass",n.lcZ(2,3,c.activeCard.card)===t?"active":"")("routerLink",t.route),n.xp6(2),n.hij(" ",t.label," ")}}function P(e,o){if(1&e&&(n.TgZ(0,"div",1),n.YNc(1,v,4,5,"ng-container",2),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.menuRoutes)}}let x=(()=>{class e{constructor(t,c,r,d){this.menuPanelOpenState=t,this.menuRoutes=c,this.activeCard=r,this.activatedRoute=d}ngOnInit(){var t;this.activeCard.setCards(this.menuRoutes),this.activeCard.setInitialCard(null===(t=this.activatedRoute.routeConfig)||void 0===t?void 0:t.path)}ngOnDestroy(){this.activeCard.reset()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l),n.Y36(f.o),n.Y36(M),n.Y36(s.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["space-x-menu"]],decls:2,vars:3,consts:[["class","menu",4,"ngIf"],[1,"menu"],[4,"ngFor","ngForOf"],[1,"route",3,"ngClass","routerLink","click"]],template:function(t,c){1&t&&(n.YNc(0,P,2,1,"div",0),n.ALo(1,"async")),2&t&&n.Q6J("ngIf",n.lcZ(1,1,c.menuPanelOpenState.isOpen))},directives:[a.O5,a.sg,s.yS,a.mk],pipes:[a.Ov],styles:[".menu[_ngcontent-%COMP%]{position:relative;background-color:#000;width:100%;height:100%;box-shadow:11px 4px 29px -6px #3e3e3e}.menu[_ngcontent-%COMP%]   .route[_ngcontent-%COMP%]{line-height:24px;color:#ffffffd9;padding:12px;font-size:16px;display:block;text-decoration:none}.menu[_ngcontent-%COMP%]   .route[_ngcontent-%COMP%]:hover{background-color:#494949;cursor:pointer}.menu[_ngcontent-%COMP%]   .route.active[_ngcontent-%COMP%]{background-color:#494949}"]}),e})(),u=(()=>{class e{constructor(t,c){this.menuPanelOpenState=t,this.cdr=c}ngOnInit(){const t=window.matchMedia("(max-width: 700px)");this.updateView(t),t.onchange=()=>{this.updateView(t)}}updateView(t){t.matches?(this.menuPanelOpenState.close(),this.cdr.detectChanges()):(this.menuPanelOpenState.open(),this.cdr.detectChanges())}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l),n.Y36(n.sBO))},e.\u0275cmp=n.Xpm({type:e,selectors:[["space-x-core"]],decls:9,vars:6,consts:[[1,"container"],[1,"header"],[1,"content"],[1,"menu",3,"ngClass"],[1,"pages",3,"ngClass"]],template:function(t,c){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._UZ(2,"space-x-header"),n.qZA(),n.TgZ(3,"div",2),n._UZ(4,"space-x-menu",3),n.ALo(5,"async"),n.TgZ(6,"div",4),n.ALo(7,"async"),n._UZ(8,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(4),n.Q6J("ngClass",n.lcZ(5,2,c.menuPanelOpenState.isOpen)?"open":"close"),n.xp6(2),n.Q6J("ngClass",n.lcZ(7,4,c.menuPanelOpenState.isOpen)?"close":""))},directives:[m,x,a.mk,s.lC],pipes:[a.Ov],styles:[".container[_ngcontent-%COMP%]{width:100%;min-height:100vh;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:100%;height:48px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-grow:1}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu.open[_ngcontent-%COMP%]{width:250px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]{flex-grow:1}@media (max-width: 700px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:72px}.container[_ngcontent-%COMP%]     .content .menu.open{display:block;width:100%!important}.container[_ngcontent-%COMP%]     .content .close{display:none}}"]}),e})();const _=[{path:"",component:u,loadChildren:()=>i.e(287).then(i.bind(i,9287)).then(e=>e.InitialPageModule)},{path:"launches",component:u,loadChildren:()=>i.e(17).then(i.bind(i,6017)).then(e=>e.LaunchesModule)},{path:"tesla-roadster",component:u,loadChildren:()=>i.e(879).then(i.bind(i,879)).then(e=>e.TeslaRoadsterModule)}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.Bz.forChild(_)],s.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,y]]}),e})()}}]);