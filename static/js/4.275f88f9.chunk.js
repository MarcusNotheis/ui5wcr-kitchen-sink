(this["webpackJsonpkitchen-sink"]=this["webpackJsonpkitchen-sink"]||[]).push([[4],{227:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return a}));var o=n(233),r=100,i=function(){var e=Object(o.a)();return e&&"function"===typeof e.focus?e:null},a=function(e){var t=i();return!!t&&s(e,t)},s=function e(t,n){var o=t;if(o.shadowRoot&&(o=Array.from(o.shadowRoot.children).find((function(e){return"style"!==e.localName}))),o===n)return!0;var r="slot"===o.localName?o.assignedNodes():o.children;return r?Array.from(r).some((function(t){return e(t,n)})):void 0},c=function(e,t){var n,o;if(e.touches){var r=e.touches[0];n=r.clientX,o=r.clientY}else n=e.clientX,o=e.clientY;return function(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}(n,o,t)},u=function e(t){var n=t.parentElement||t.getRootNode&&t.getRootNode().host;return n&&(n.openBy&&n.isUI5Element||n.open&&n.isUI5Element||n===document.documentElement)?n:e(n)},l=function(){return r+=2}},233:function(e,t,n){"use strict";t.a=function(){for(var e=document.activeElement;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}},235:function(e,t,n){"use strict";t.a=function(e){return"SLOT"!==e.nodeName&&(e.offsetWidth<=0&&e.offsetHeight<=0||"hidden"===e.style.visibility)}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c}));var o=n(53),r=n(224),i=[],a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];i.includes(e)||i.push({instance:e,parentPopovers:t}),1===i.length&&l()},s=function(e){(i=i.filter((function(t){return t.instance!==e}))).length||d()},c=function(){return Object(o.a)(i)},u=function(e){i.length&&Object(r.g)(e)&&i.pop().instance.close(!0)},l=function(){document.addEventListener("keydown",u)},d=function(){document.removeEventListener("keydown",u)}},241:function(e,t,n){"use strict";var o=n(218),r=n(217),i=n(219);Object(o.d)("@ui5/webcomponents-theme-base","sap_fiori_3",r.a),Object(o.d)("@ui5/webcomponents","sap_fiori_3",i.a),t.a=':host{display:none;position:fixed;min-width:6.25rem;background:var(--sapGroup_ContentBackground);box-shadow:var(--sapContent_Shadow2);border-radius:.25rem;min-height:2rem;box-sizing:border-box}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;max-height:94vh;max-width:90vw}@media screen and (-ms-high-contrast:active){.ui5-popup-root{border:1px solid var(--sapPageFooter_BorderColor)}}.ui5-popup-root .ui5-popup-header-root{box-shadow:var(--sapContent_Shadow0);margin-bottom:.125rem}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-footer-root,.ui5-popup-header-root,:host([header-text]) .ui5-popup-header-text{margin:0;color:var(--sapPageHeader_TextColor);font-size:1rem;font-weight:400;font-family:"72override",var(--sapFontFamily);display:flex;justify-content:center;align-items:center}.ui5-popup-content{overflow:auto;padding:var(--_ui5_popup_content_padding);box-sizing:border-box}:host([no-padding]) .ui5-popup-content{padding:0}:host([header-text]) .ui5-popup-header-text{padding:0 .25rem;text-align:center;min-height:3rem;max-height:3rem;line-height:3rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([disable-scrolling]) .ui5-popup-content{overflow:hidden}'},242:function(e,t,n){"use strict";var o=n(4),r=n.n(o),i=n(6),a=n(10),s=n(11),c=n(214),u=n(215),l=n(216),d=n(39),p=n(223),f=n(235),h=/^(?:a|area)$/i,b=/^(?:input|select|textarea|button)$/i,y=function(e){if(e.disabled)return!1;var t=e.getAttribute("tabindex");return null!==t&&void 0!==t?parseInt(t)>=0:b.test(e.nodeName)||h.test(e.nodeName)&&e.href},v=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&!Object(f.a)(t)){e.next=2;break}return e.abrupt("return",null);case 2:return e.abrupt("return",m(t,!0));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&!Object(f.a)(t)){e.next=2;break}return e.abrupt("return",null);case 2:return e.abrupt("return",m(t,!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(r.a.mark((function e(t,n){var o,i,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.shadowRoot?o=n?t.shadowRoot.firstChild:t.shadowRoot.lastChild:t.assignedNodes&&t.assignedNodes()?(i=t.assignedNodes(),o=n?i[0]:i[i.length-1]):o=n?t.firstChild:t.lastChild;case 1:if(!o){e.next=20;break}if(s=o,!o.isUI5Element){e.next=7;break}return e.next=6,o.getFocusDomRefAsync();case 6:o=e.sent;case 7:if(o){e.next=9;break}return e.abrupt("return",null);case 9:if(1!==o.nodeType||Object(f.a)(o)||o.hasAttribute("data-ui5-focus-trap")){e.next=17;break}if(!y(o)){e.next=12;break}return e.abrupt("return",o&&"function"===typeof o.focus?o:null);case 12:return e.next=14,m(o,n);case 14:if(!(a=e.sent)){e.next=17;break}return e.abrupt("return",a&&"function"===typeof a.focus?a:null);case 17:o=n?s.nextSibling:s.previousSibling,e.next=1;break;case 20:return e.abrupt("return",null);case 21:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=n(249),x=n(220),w=n(221);function O(){var e=Object(x.a)(['<section style="','" class="','" role="dialog" aria-modal="','" aria-label="','" aria-labelledby="','" dir="','"><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=','></span><div style="','" class="','"  @scroll="','"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=',"></span></section> "]);return O=function(){return e},e}var _=function(e,t,n){return Object(l.f)(t),Object(l.e)(n),function(e){return Object(l.c)(O(),Object(l.g)(e.styles.root),Object(l.a)(e.classes.root),Object(w.a)(e._ariaModal),Object(w.a)(e._ariaLabel),Object(w.a)(e._ariaLabelledBy),Object(w.a)(e.dir),e.forwardToLast,Object(l.g)(e.styles.content),Object(l.a)(e.classes.content),e._scroll,e.forwardToFirst)}(e)};function j(){var e=Object(x.a)(['<div class="ui5-block-layer" ?hidden=',' tabindex="1" style="','" @keydown="','" @mousedown="','"></div>']);return j=function(){return e},e}var B=function(e,t,n){return Object(l.f)(t),Object(l.e)(n),function(e){return Object(l.c)(j(),e._blockLayerHidden,Object(l.g)(e.styles.blockLayer),e._preventBlockLayerFocus,e._preventBlockLayerFocus)}(e)},F=n(227),L=n(237),E=n(218),R=n(217),I=n(219);Object(E.d)("@ui5/webcomponents-theme-base","sap_fiori_3",R.a),Object(E.d)("@ui5/webcomponents","sap_fiori_3",I.a);Object(E.d)("@ui5/webcomponents-theme-base","sap_fiori_3",R.a),Object(E.d)("@ui5/webcomponents","sap_fiori_3",I.a);var S={managedSlots:!0,slots:{default:{type:HTMLElement}},properties:{initialFocus:{type:String},preventFocusRestore:{type:Boolean},opened:{type:Boolean},ariaLabel:{type:String,defaultValue:void 0},_disableInitialFocus:{type:Boolean},_blockLayerHidden:{type:Boolean}},events:{"before-open":{},"after-open":{},"before-close":{escPressed:{type:Boolean}},"after-close":{}}},P=!1;P||(Object(g.a)("\n\t\t.ui5-popup-scroll-blocker {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: fixed;\n\t\t\toverflow: hidden;\n\t\t}\n\t",{"data-ui5-popup-scroll-blocker":""}),P=!0);var T=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"_preventBlockLayerFocus",value:function(e){e.preventDefault()}},{key:"_scroll",value:function(e){this.fireEvent("scroll",{scrollTop:e.target.scrollTop,targetRef:e.target})}},{key:"forwardToFirst",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(this);case 2:(t=e.sent)&&t.focus();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"forwardToLast",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this);case 2:(t=e.sent)&&t.focus();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"applyInitialFocus",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.applyFocus();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"applyFocus",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._waitForDomRef();case 2:if(e.t0=this.getRootNode().getElementById(this.initialFocus)||document.getElementById(this.initialFocus),e.t0){e.next=7;break}return e.next=6,v(this);case 6:e.t0=e.sent;case 7:(t=e.t0)&&t.focus();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isOpen",value:function(){return this.opened}},{key:"isFocusWithin",value:function(){return Object(F.e)(this.shadowRoot.querySelector(".ui5-popup-root"))}},{key:"open",value:function(e){!this.fireEvent("before-open",{},!0,!1)||(this.isModal&&!this.shouldHideBackdrop&&(this.getStaticAreaItemDomRef(),this._blockLayerHidden=!1,n.blockBodyScrolling()),this._zIndex=Object(F.c)(),this.style.zIndex=this._zIndex,this._focusedElementBeforeOpen=Object(F.b)(),this.show(),this._disableInitialFocus||e||this.applyInitialFocus(),this._addOpenedPopup(),this.opened=!0,this.fireEvent("after-open",{},!1,!1))}},{key:"_addOpenedPopup",value:function(){Object(L.a)(this)}},{key:"close",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.opened){var r=!this.fireEvent("before-close",{escPressed:e},!0,!1);r||(this.isModal&&(this._blockLayerHidden=!0,n.unblockBodyScrolling()),this.hide(),this.opened=!1,t||this._removeOpenedPopup(),this.preventFocusRestore||o||this.resetFocus(),this.fireEvent("after-close",{},!1,!1))}}},{key:"_removeOpenedPopup",value:function(){Object(L.c)(this)}},{key:"resetFocus",value:function(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null)}},{key:"show",value:function(){this.style.display=this._displayProp}},{key:"hide",value:function(){this.style.display="none"}},{key:"onExitDOM",value:function(){this.isOpen()&&(n.unblockBodyScrolling(),this._removeOpenedPopup())}},{key:"_displayProp",get:function(){return"block"}},{key:"isModal",get:function(){}},{key:"shouldHideBackdrop",get:function(){}},{key:"_ariaLabelledBy",get:function(){}},{key:"_ariaModal",get:function(){}},{key:"_ariaLabel",get:function(){return this.ariaLabel||void 0}},{key:"dir",get:function(){return Object(d.a)()?"rtl":"ltr"}},{key:"styles",get:function(){return{root:{},content:{},blockLayer:{zIndex:this._zIndex-1}}}},{key:"classes",get:function(){return{root:{},content:{}}}}],[{key:"blockBodyScrolling",value:function(){document.body.style.top="-".concat(window.pageYOffset,"px"),document.body.classList.add("ui5-popup-scroll-blocker")}},{key:"unblockBodyScrolling",value:function(){document.body.classList.remove("ui5-popup-scroll-blocker"),window.scrollTo(0,-parseFloat(document.body.style.top)),document.body.style.top=""}},{key:"metadata",get:function(){return S}},{key:"render",get:function(){return l.b}},{key:"styles",get:function(){return":host{min-width:1px;display:none;position:fixed}"}},{key:"template",get:function(){return _}},{key:"staticAreaTemplate",get:function(){return B}},{key:"staticAreaStyles",get:function(){return".ui5-block-layer{display:none;position:fixed;background-color:var(--sapBlockLayer_Background);opacity:.6;top:-500px;left:-500px;right:-500px;bottom:-500px;outline:none;pointer-events:all;z-index:-1}.ui5-block-layer:not([hidden]){display:inline-block}"}}]),n}(p.a);t.a=T}}]);
//# sourceMappingURL=4.275f88f9.chunk.js.map