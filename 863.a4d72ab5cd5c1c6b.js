"use strict";(self.webpackChunkspace_x=self.webpackChunkspace_x||[]).push([[863],{7863:(J,u,o)=>{o.r(u),o.d(u,{ListingModule:()=>I});var r=o(9808),s=o(0),t=o(5e3),g=o(1135),f=o(4004),h=o(520);let C=(()=>{class n{constructor(){this._options=new g.X({limit:10,page:1,sort:{name:"date_local",direction:"desc"},pagination:!0,select:{},query:{}})}set(e){this._options.next(e)}get(){return this._options.value}reset(){this._options.next({limit:10,page:1,sort:{name:"flight_number",direction:"asc"},pagination:!0,select:{id:1},query:{}})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(i){return C.\u0275fac(i)},providedIn:"root"}),n})(),v=(()=>{class n{constructor(e){this.queryOptions=e}prepare(){const e=this.queryOptions.get();return{query:e.query,options:{limit:e.limit,page:e.page,pagination:e.pagination,sort:{[e.sort.name]:e.sort.direction},select:e.select}}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(O))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(i){return v.\u0275fac(i)},providedIn:"root"}),n})(),x=(()=>{class n{constructor(e,a){this.http=e,this.prepareQueryOptions=a}get(){return this.http.post("https://api.spacexdata.com/v4/launches/query",this.prepareQueryOptions.prepare())}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN),t.LFG(M))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(i){return x.\u0275fac(i)},providedIn:"root"}),n})(),y=(()=>{class n{constructor(e){this.getLaunchesFromApi=e,this._isLoading=new g.X(!1),this.isLoading=this._isLoading.asObservable()}manage(){return this._isLoading.next(!0),this.getLaunchesFromApi.get().pipe((0,f.U)(e=>(this._isLoading.next(!1),e)))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(P))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:function(i){return y.\u0275fac(i)},providedIn:"root"}),n})();var b=o(4313),p=o(5899),c=o(9174),m=o(5245),d=o(7423);function Z(n,i){1&n&&t._UZ(0,"mat-progress-bar",5)}function w(n,i){1&n&&(t.TgZ(0,"th",18),t._uU(1,"Id"),t.qZA())}function T(n,i){if(1&n&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function F(n,i){1&n&&(t.TgZ(0,"th",18),t._uU(1," Name"),t.qZA())}function A(n,i){if(1&n&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function Q(n,i){1&n&&(t.TgZ(0,"th",18),t._uU(1," Success"),t.qZA())}function Y(n,i){if(1&n&&(t.TgZ(0,"td",20),t.TgZ(1,"mat-icon"),t._uU(2),t.qZA(),t.qZA()),2&n){const e=i.$implicit,a=t.oxw(2);t.Q6J("ngClass",a.successFilter.filter(e.success)),t.xp6(2),t.hij(" ",a.successFilter.filter(e.success)," ")}}function k(n,i){1&n&&(t.TgZ(0,"th",18),t._uU(1," Flight number"),t.qZA())}function G(n,i){if(1&n&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",e.flight_number," ")}}function S(n,i){1&n&&t._UZ(0,"th",18)}function z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"td",19),t.TgZ(1,"button",21),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).navigateToDetails(l)}),t._uU(2,"Details"),t.qZA(),t.qZA()}}function D(n,i){1&n&&t._UZ(0,"tr",22)}function N(n,i){1&n&&t._UZ(0,"tr",23)}function U(n,i){if(1&n&&(t.TgZ(0,"div",6),t.TgZ(1,"table",7),t.ynx(2,8),t.YNc(3,w,2,0,"th",9),t.YNc(4,T,2,1,"td",10),t.BQk(),t.ynx(5,11),t.YNc(6,F,2,0,"th",9),t.YNc(7,A,2,1,"td",10),t.BQk(),t.ynx(8,12),t.YNc(9,Q,2,0,"th",9),t.YNc(10,Y,3,2,"td",13),t.BQk(),t.ynx(11,14),t.YNc(12,k,2,0,"th",9),t.YNc(13,G,2,1,"td",10),t.BQk(),t.ynx(14,15),t.YNc(15,S,1,0,"th",9),t.YNc(16,z,3,0,"td",10),t.BQk(),t.YNc(17,D,1,0,"tr",16),t.YNc(18,N,1,0,"tr",17),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("dataSource",e.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}const q=[{path:"",component:(()=>{class n{constructor(e,a,_,l){this.manageGetLaunches=e,this.successFilter=a,this.router=_,this.route=l,this.displayedColumns=["id","name","success","flight_number","actions"],this.dataSource=[]}ngOnInit(){this.manageGetLaunches.manage().subscribe(e=>{this.dataSource=e.docs})}navigateToDetails(e){this.router.navigate([e.id],{relativeTo:this.route})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(L),t.Y36(b.V),t.Y36(s.F0),t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["space-x-launches"]],decls:8,vars:6,consts:[[1,"container"],[1,"title"],[1,"listing"],["mode","indeterminate",4,"ngIf"],["class","mat-elevation-z8 table-responsive",4,"ngIf"],["mode","indeterminate"],[1,"mat-elevation-z8","table-responsive"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","success"],["mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","flight_number"],["matColumnDef","actions","stickyEnd",""],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",3,"ngClass"],["mat-button","",1,"details",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2,"Launches"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,Z,1,0,"mat-progress-bar",3),t.ALo(5,"async"),t.YNc(6,U,19,3,"div",4),t.ALo(7,"async"),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",!0===t.lcZ(5,2,a.manageGetLaunches.isLoading)),t.xp6(2),t.Q6J("ngIf",!1===t.lcZ(7,4,a.manageGetLaunches.isLoading)))},directives:[r.O5,p.pW,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,c.ge,c.ev,r.mk,m.Hw,d.lW,c.XQ,c.Gk],pipes:[r.Ov],styles:['.container[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;max-width:100%;height:100%;padding:24px;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:32px;margin-bottom:24px}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]{display:block;width:auto;overflow-x:auto}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;display:table;border-collapse:collapse}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%]{color:green}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%]{color:red}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{padding-left:24px}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .cdk-column-id[_ngcontent-%COMP%]{width:200px;min-width:200px}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .cdk-column-name[_ngcontent-%COMP%]{min-width:180px}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .cdk-column-flight_number[_ngcontent-%COMP%]{width:50px;min-width:50px;max-width:50px;padding-right:24px}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .cdk-column-success[_ngcontent-%COMP%]{width:50px;min-width:50px;max-width:50px}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .cdk-column-actions[_ngcontent-%COMP%]{width:80px;min-width:80px;max-width:80px;position:relative;top:0;left:0}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .cdk-column-actions[_ngcontent-%COMP%]:before{display:block;content:"";position:absolute;width:4px;height:100%;top:0;left:0;background:linear-gradient(to right,rgba(0,0,0,0) 5%,rgba(0,0,0,.05) 57%,rgba(0,0,0,.1) 100%)}.container[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .cdk-column-actions[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{background-color:#323232;color:#fff}']}),n})()}];let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(q)],s.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,B,p.Cv,c.p0,m.Ps,d.ot]]}),n})()}}]);