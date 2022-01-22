"use strict";(self.webpackChunkspace_x=self.webpackChunkspace_x||[]).push([[132],{4128:(E,f,a)=>{a.d(f,{D:()=>_});var e=a(8306),s=a(4742),h=a(8421),g=a(3269),m=a(5403),v=a(3268),k=a(1810);function _(...l){const b=(0,g.jO)(l),{args:d,keys:x}=(0,s.D)(l),p=new e.y(i=>{const{length:t}=d;if(!t)return void i.complete();const o=new Array(t);let n=t,r=t;for(let u=0;u<t;u++){let y=!1;(0,h.Xf)(d[u]).subscribe(new m.Q(i,c=>{y||(y=!0,r--),o[u]=c},()=>n--,void 0,()=>{(!n||!y)&&(r||i.next(x?(0,k.n)(x,o):o),i.complete())}))}});return b?p.pipe((0,v.Z)(b)):p}},4968:(E,f,a)=>{a.d(f,{R:()=>b});var e=a(8421),s=a(8306),h=a(5577),g=a(1144),m=a(576),v=a(3268);const k=["addListener","removeListener"],_=["addEventListener","removeEventListener"],l=["on","off"];function b(t,o,n,r){if((0,m.m)(n)&&(r=n,n=void 0),r)return b(t,o,n).pipe((0,v.Z)(r));const[u,y]=function i(t){return(0,m.m)(t.addEventListener)&&(0,m.m)(t.removeEventListener)}(t)?_.map(c=>w=>t[c](o,w,n)):function x(t){return(0,m.m)(t.addListener)&&(0,m.m)(t.removeListener)}(t)?k.map(d(t,o)):function p(t){return(0,m.m)(t.on)&&(0,m.m)(t.off)}(t)?l.map(d(t,o)):[];if(!u&&(0,g.z)(t))return(0,h.z)(c=>b(c,o,n))((0,e.Xf)(t));if(!u)throw new TypeError("Invalid event target");return new s.y(c=>{const w=(...M)=>c.next(1<M.length?M:M[0]);return u(w),()=>y(w)})}function d(t,o){return n=>r=>t[n](o,r)}},7423:(E,f,a)=>{a.d(f,{lW:()=>d,ot:()=>p});var e=a(5e3),s=a(508),h=a(6360),g=a(8974);const m=["mat-button",""],v=["*"],l=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],b=(0,s.pj)((0,s.Id)((0,s.Kr)(class{constructor(i){this._elementRef=i}})));let d=(()=>{class i extends b{constructor(o,n,r){super(o),this._focusMonitor=n,this._animationMode=r,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const u of l)this._hasHostAttributes(u)&&this._getHostElement().classList.add(u);o.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(o,n){o?this._focusMonitor.focusVia(this._getHostElement(),o,n):this._getHostElement().focus(n)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...o){return o.some(n=>this._getHostElement().hasAttribute(n))}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(e.SBq),e.Y36(g.tE),e.Y36(h.Qb,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(o,n){if(1&o&&e.Gf(s.wG,5),2&o){let r;e.iGM(r=e.CRH())&&(n.ripple=r.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(o,n){2&o&&(e.uIk("disabled",n.disabled||null),e.ekj("_mat-animation-noopable","NoopAnimations"===n._animationMode)("mat-button-disabled",n.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[e.qOj],attrs:m,ngContentSelectors:v,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(o,n){1&o&&(e.F$t(),e.TgZ(0,"span",0),e.Hsn(1),e.qZA(),e._UZ(2,"span",1),e._UZ(3,"span",2)),2&o&&(e.xp6(2),e.ekj("mat-button-ripple-round",n.isRoundButton||n.isIconButton),e.Q6J("matRippleDisabled",n._isRippleDisabled())("matRippleCentered",n.isIconButton)("matRippleTrigger",n._getHostElement()))},directives:[s.wG],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"],encapsulation:2,changeDetection:0}),i})(),p=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[s.si,s.BQ],s.BQ]}),i})()}}]);