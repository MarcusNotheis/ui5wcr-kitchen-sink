(this["webpackJsonpkitchen-sink"]=this["webpackJsonpkitchen-sink"]||[]).push([[43],{190:function(e,t,i){"use strict";i.r(t);var n=i(4),r=i.n(n),o=i(6),l=i(10),u=i(11),a=i(226),s=i(214),d=i(215),c=i(223),_=i(216),f=i(232),m=i(297),h=i(234),T=i(13),b=i(264),y=i(282),C=i(5),v=i(155),p=(i(285),i(279),i(222)),E={OneColumn:"OneColumn",TwoColumnsStartExpanded:"TwoColumnsStartExpanded",TwoColumnsMidExpanded:"TwoColumnsMidExpanded",ThreeColumnsMidExpanded:"ThreeColumnsMidExpanded",ThreeColumnsEndExpanded:"ThreeColumnsEndExpanded",ThreeColumnsStartExpandedEndHidden:"ThreeColumnsStartExpandedEndHidden",ThreeColumnsMidExpandedEndHidden:"ThreeColumnsMidExpandedEndHidden",MidColumnFullScreen:"MidColumnFullScreen",EndColumnFullScreen:"EndColumnFullScreen"},O=function(e){Object(s.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,null,[{key:"isValid",value:function(e){return!!E[e]}}]),i}(p.a);O.generateTypeAccessors(E);var w=O,L=i(283),g=i(220),x=i(221);function I(){var e=Object(g.a)(['<div class="','"><div role="region" class="','" aria-labelledby="','-startColumnText"><slot name="startColumn"></slot></div><div class="ui5-fcl-arrow-container" style="','"><ui5-button class="ui5-fcl-arrow ui5-fcl-arrow--start" icon="slim-arrow-right" design="Transparent" @click="','" style="','" aria-label="','" title="','"></ui5-button></div><div role="region" class="','" aria-labelledby="','-midColumnText"><slot name="midColumn"></slot></div><div class="ui5-fcl-arrow-container" style="','"><ui5-button class="ui5-fcl-arrow ui5-fcl-arrow--end" style="','" icon="slim-arrow-left" design="Transparent" @click="','" aria-label="','" title="','"></ui5-button></div><div role="region" class="','" aria-labelledby="','-endColumnText"><slot name="endColumn"></slot></div><span id="','-startColumnText" class="ui5-hidden-text">','</span><span id="','-midColumnText" class="ui5-hidden-text">','</span><span id="','-endColumnText" class="ui5-hidden-text">',"</span></div> "]);return I=function(){return e},e}var k=function(e,t,i){return Object(_.f)(t),Object(_.e)(i),function(e){return Object(_.c)(I(),Object(_.a)(e.classes.root),Object(_.a)(e.classes.columns.start),Object(x.a)(e._id),Object(_.g)(e.styles.arrowsContainer.start),e.startArrowClick,Object(_.g)(e.styles.arrows.start),Object(x.a)(e.accStartArrowText),Object(x.a)(e.accStartArrowText),Object(_.a)(e.classes.columns.middle),Object(x.a)(e._id),Object(_.g)(e.styles.arrowsContainer.end),Object(_.g)(e.styles.arrows.end),e.endArrowClick,Object(x.a)(e.accEndArrowText),Object(x.a)(e.accEndArrowText),Object(_.a)(e.classes.columns.end),Object(x.a)(e._id),Object(x.a)(e._id),Object(x.a)(e.accStartColumnText),Object(x.a)(e._id),Object(x.a)(e.accMiddleColumnText),Object(x.a)(e._id),Object(x.a)(e.accEndColumnText))}(e)},A=i(218),S=i(217),N=i(258);Object(A.d)("@ui5/webcomponents-theme-base","sap_fiori_3",S.a),Object(A.d)("@ui5/webcomponents-fiori","sap_fiori_3",N.a);var M={tag:"ui5-flexible-column-layout",properties:{layout:{type:w,defaultValue:w.OneColumn},noArrows:{type:Boolean},accessibilityTexts:{type:Object},_width:{type:m.a,defaultValue:0},_columnLayout:{type:Object,defaultValue:void 0},_visibleColumns:{type:h.a,defaultValue:0},_layoutsConfiguration:{type:Object,defaultValue:void 0}},slots:{startColumn:{type:HTMLElement},midColumn:{type:HTMLElement},endColumn:{type:HTMLElement}},events:{"layout-change":{detail:{layout:{type:w},columnLayout:{type:Array},startColumnVisible:{type:Boolean},midColumnVisible:{type:Boolean},endColumnVisible:{type:Boolean},arrowsUsed:{type:Boolean},resize:{type:Boolean}}}}},R=function(e){Object(s.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this))._prevLayout=null,e.initialRendering=!0,e._handleResize=e.handleResize.bind(Object(a.a)(e)),e.i18nBundle=Object(T.b)("@ui5/webcomponents-fiori"),e}return Object(u.a)(i,[{key:"onEnterDOM",value:function(){f.a.register(this,this._handleResize)}},{key:"onExitDOM",value:function(){f.a.deregister(this,this._handleResize)}},{key:"onAfterRendering",value:function(){this.initialRendering?this.handleInitialRendering():this.syncLayout()}},{key:"handleInitialRendering",value:function(){this._prevLayout=this.layout,this.updateLayout(),this.initialRendering=!1}},{key:"handleResize",value:function(){if(!this.initialRendering){var e=this.columnLayout.join();this.updateLayout(),e!==this.columnLayout.join()&&this.fireLayoutChange(!1,!0)}}},{key:"startArrowClick",value:function(){this.arrowClick({start:!0,end:!1})}},{key:"endArrowClick",value:function(){this.arrowClick({start:!1,end:!0})}},{key:"arrowClick",value:function(e){var t=e.start,i=e.end;this.layout=this.nextLayout(this.layout,{start:t,end:i}),this.updateLayout(),this.fireLayoutChange(!0,!1)}},{key:"updateLayout",value:function(){this._width=this.widthDOM,this._columnLayout=this.nextColumnLayout(this.layout),this._visibleColumns=this.calcVisibleColumns(this._columnLayout),this.toggleColumns()}},{key:"syncLayout",value:function(){this._prevLayout!==this.layout&&(this.updateLayout(),this._prevLayout=this.layout)}},{key:"toggleColumns",value:function(){this.toggleColumn("start"),this.toggleColumn("mid"),this.toggleColumn("end")}},{key:"toggleColumn",value:function(e){var t=this["".concat(e,"ColumnWidth")],n=this["".concat(e,"ColumnDOM")],r=0===t,o="0px"===n.style.width;if(!r||!o){if(r||o)return r?(n.style.width=t,void setTimeout((function(){n.classList.add("ui5-fcl-column--hidden")}),i.ANIMATION_DURATION)):void(o&&(n.classList.remove("ui5-fcl-column--hidden"),n.style.width=t));n.style.width=t}}},{key:"nextLayout",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.start?{TwoColumnsStartExpanded:"TwoColumnsMidExpanded",TwoColumnsMidExpanded:"TwoColumnsStartExpanded",ThreeColumnsMidExpanded:"ThreeColumnsMidExpandedEndHidden",ThreeColumnsEndExpanded:"ThreeColumnsStartExpandedEndHidden",ThreeColumnsStartExpandedEndHidden:"ThreeColumnsMidExpandedEndHidden",ThreeColumnsMidExpandedEndHidden:"ThreeColumnsStartExpandedEndHidden"}[e]:t.end?{ThreeColumnsMidExpanded:"ThreeColumnsEndExpanded",ThreeColumnsEndExpanded:"ThreeColumnsMidExpanded",ThreeColumnsStartExpandedEndHidden:"ThreeColumnsMidExpanded",ThreeColumnsMidExpandedEndHidden:"ThreeColumnsMidExpanded"}[e]:void 0}},{key:"nextColumnLayout",value:function(e){return this._effectiveLayoutsByMedia[this.media][e].layout}},{key:"calcVisibleColumns",value:function(e){return e.filter((function(e){return 0!==e})).length}},{key:"fireLayoutChange",value:function(e,t){this.fireEvent("layout-change",{layout:this.layout,columnLayout:this._columnLayout,startColumnVisible:this.startColumnVisible,midColumnVisible:this.midColumnVisible,endColumnVisible:this.endColumnVisible,arrowUsed:e,resize:t})}},{key:"columnLayout",get:function(){return this._columnLayout}},{key:"startColumnVisible",get:function(){return!!this._columnLayout&&0!==this._columnLayout[0]}},{key:"midColumnVisible",get:function(){return!!this._columnLayout&&0!==this._columnLayout[1]}},{key:"endColumnVisible",get:function(){return!!this._columnLayout&&0!==this._columnLayout[2]}},{key:"visibleColumns",get:function(){return this._visibleColumns}},{key:"classes",get:function(){var e=Object(y.a)()!==b.a.None;return{root:{"ui5-fcl-root":!0,"ui5-fcl--ie":Object(C.d)()},columns:{start:{"ui5-fcl-column":!0,"ui5-fcl-column-animation":e,"ui5-fcl-column--start":!0},middle:{"ui5-fcl-column":!0,"ui5-fcl-column-animation":e,"ui5-fcl-column--middle":!0},end:{"ui5-fcl-column":!0,"ui5-fcl-column-animation":e,"ui5-fcl-column--end":!0}}}}},{key:"styles",get:function(){return{arrowsContainer:{start:{display:this.showStartSeparator?"flex":"none"},end:{display:this.showEndSeparator?"flex":"none"}},arrows:{start:{display:this.showStartArrow?"inline-block":"none",transform:"mirror"===this.startArrowDirection?"rotate(180deg)":""},end:{display:this.showEndArrow?"inline-block":"none",transform:"mirror"===this.endArrowDirection?"rotate(180deg)":""}}}}},{key:"startColumnWidth",get:function(){return this._columnLayout?this._columnLayout[0]:"100%"}},{key:"midColumnWidth",get:function(){return this._columnLayout?this._columnLayout[1]:0}},{key:"endColumnWidth",get:function(){return this._columnLayout?this._columnLayout[2]:0}},{key:"showStartSeparator",get:function(){return this.effectiveArrowsInfo[0].separator||this.startArrowVisibility}},{key:"showEndSeparator",get:function(){return this.effectiveArrowsInfo[1].separator||this.endArrowVisibility}},{key:"showStartArrow",get:function(){return!this.noArrows&&this.startArrowVisibility}},{key:"showEndArrow",get:function(){return!this.noArrows&&this.endArrowVisibility}},{key:"startArrowVisibility",get:function(){return this.effectiveArrowsInfo[0].visible}},{key:"endArrowVisibility",get:function(){return this.effectiveArrowsInfo[1].visible}},{key:"startArrowDirection",get:function(){return this.effectiveArrowsInfo[0].dir}},{key:"endArrowDirection",get:function(){return this.effectiveArrowsInfo[1].dir}},{key:"effectiveArrowsInfo",get:function(){return this._effectiveLayoutsByMedia[this.media][this.layout].arrows}},{key:"media",get:function(){return this._width<=i.BREAKPOINTS.PHONE?i.MEDIA.PHONE:this._width<=i.BREAKPOINTS.TABLET?i.MEDIA.TABLET:i.MEDIA.DESKTOP}},{key:"widthDOM",get:function(){return this.getBoundingClientRect().width}},{key:"startColumnDOM",get:function(){return this.shadowRoot.querySelector(".ui5-fcl-column--start")}},{key:"midColumnDOM",get:function(){return this.shadowRoot.querySelector(".ui5-fcl-column--middle")}},{key:"endColumnDOM",get:function(){return this.shadowRoot.querySelector(".ui5-fcl-column--end")}},{key:"accStartColumnText",get:function(){return this.accessibilityTexts.startColumnAccessibleName||this.i18nBundle.getText(L.g)}},{key:"accMiddleColumnText",get:function(){return this.accessibilityTexts.midColumnAccessibleName||this.i18nBundle.getText(L.d)}},{key:"accEndColumnText",get:function(){return this.accessibilityTexts.endColumnAccessibleName||this.i18nBundle.getText(L.c)}},{key:"_effectiveLayoutsByMedia",get:function(){return this._layoutsConfiguration||{desktop:{OneColumn:{layout:["100%",0,0],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},TwoColumnsStartExpanded:{layout:["67%","33%",0],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},TwoColumnsMidExpanded:{layout:["33%","67%",0],arrows:[{visible:!0,dir:null},{visible:!1,dir:null}]},ThreeColumnsStartExpanded:{layout:["25%","50%","25%"],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},ThreeColumnsMidExpanded:{layout:["25%","50%","25%"],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},ThreeColumnsEndExpanded:{layout:["25%","25%","50%"],arrows:[{visible:!1,dir:null,separator:!0},{visible:!0,dir:"mirror"}]},ThreeColumnsStartExpandedEndHidden:{layout:["67%","33%",0],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},ThreeColumnsMidExpandedEndHidden:{layout:["33%","67%",0],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},MidColumnFullScreen:{layout:[0,"100%",0],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},EndColumnFullScreen:{layout:[0,0,"100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]}},tablet:{OneColumn:{layout:["100%",0,0],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},TwoColumnsStartExpanded:{layout:["67%","33%",0],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},TwoColumnsMidExpanded:{layout:["33%","67%",0],arrows:[{visible:!0,dir:null},{visible:!1,dir:null}]},ThreeColumnsStartExpanded:{layout:["67%","33%",0],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},ThreeColumnsMidExpanded:{layout:[0,"67%","33%"],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},ThreeColumnsEndExpanded:{layout:[0,"33%","67%"],arrows:[{visible:!1,dir:null},{visible:!0,dir:"mirror"}]},ThreeColumnsStartExpandedEndHidden:{layout:["67%","33%",0],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},ThreeColumnsMidExpandedEndHidden:{layout:["33%","67%",0],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},MidColumnFullScreen:{layout:[0,"100%",0],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},EndColumnFullScreen:{layout:[0,0,"100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]}},phone:{OneColumn:{layout:["100%",0,0],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},TwoColumnsStartExpanded:{layout:[0,"100%",0],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},TwoColumnsMidExpanded:{layout:[0,"100%",0],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsStartExpanded:{layout:[0,0,"100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsMidExpanded:{layout:[0,0,"100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsEndExpanded:{layout:[0,0,"100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsStartExpandedEndHidden:{layout:[0,0,"100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsMidExpandedEndHidden:{layout:[0,0,"100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},MidColumnFullScreen:{layout:[0,"100%",0],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},EndColumnFullScreen:{layout:[0,0,"100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]}}}}},{key:"accStartArrowText",get:function(){var e=this.accessibilityTexts;return"mirror"===this.startArrowDirection?e.startArrowLeftText||this.i18nBundle.getText(L.e):e.startArrowRightText||this.i18nBundle.getText(L.f)}},{key:"accEndArrowText",get:function(){var e=this.accessibilityTexts;return"mirror"===this.endArrowDirection?e.endArrowRightText||this.i18nBundle.getText(L.a):e.endArrowLeftText||this.i18nBundle.getText(L.b)}}],[{key:"onDefine",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)("@ui5/webcomponents-fiori");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"metadata",get:function(){return M}},{key:"render",get:function(){return _.b}},{key:"styles",get:function(){return'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host(:not([hidden])){display:block;background:var(--_ui5_fcl_solid_bg)}.ui5-fcl-root{height:100%;display:flex;flex-direction:row}.ui5-fcl-column{background:inherit;box-sizing:border-box;will-change:width;overflow-y:auto}.ui5-fcl-column-animation{transition:width .56s cubic-bezier(.1,0,.05,1),visibility .56s ease-in}:host([_visible-columns="2"]) .ui5-fcl-column--start{border-right:var(--_ui5_fcl_column_border)}:host([_visible-columns="3"]) .ui5-fcl-column--start{border-right:var(--_ui5_fcl_column_border)}:host([_visible-columns="2"]) .ui5-fcl-column--middle{border-left:var(--_ui5_fcl_column_border)}:host([_visible-columns="3"]) .ui5-fcl-column--middle{border-left:var(--_ui5_fcl_column_border)}:host([_visible-columns="3"]) .ui5-fcl-column--middle{border-right:var(--_ui5_fcl_column_border)}:host([_visible-columns="3"]) .ui5-fcl-column--end{border-left:var(--_ui5_fcl_column_border)}.ui5-fcl-column--hidden{display:none}.ui5-fcl-arrow-container{display:flex;align-items:center;justify-content:center;width:1rem;background-color:var(--sapShell_Background)}.ui5-fcl-arrow{position:relative;width:1.5rem;height:1.5rem;min-width:1.5rem;will-change:transform;overflow:visible;z-index:1}.ui5-fcl-arrow:before{background-image:var(--_ui5_fcl_decoration_top);background-position-y:-.3125rem;bottom:100%}.ui5-fcl-arrow:after{background-image:var(--_ui5_fcl_decoration_bottom);background-position-y:.3125rem;top:100%}.ui5-fcl-arrow:after,.ui5-fcl-arrow:before{content:"";position:absolute;left:0;height:4rem;width:100%;transition:all .1s ease-in;background-repeat:no-repeat;background-size:.0625rem 100%;background-position-x:calc(50% - .03125rem)}.ui5-fcl-arrow:hover:after,.ui5-fcl-arrow:hover:before{height:7rem}.ui5-fcl--ie .ui5-fcl-arrow{margin:0 -.75rem}'}},{key:"template",get:function(){return k}},{key:"dependencies",get:function(){return[v.default]}},{key:"BREAKPOINTS",get:function(){return{PHONE:599,TABLET:1023}}},{key:"MEDIA",get:function(){return{PHONE:"phone",TABLET:"tablet",DESKTOP:"desktop"}}},{key:"ANIMATION_DURATION",get:function(){return Object(y.a)()!==b.a.None?560:0}}]),i}(c.a);R.define();t.default=R},232:function(e,t,i){"use strict";var n=i(10),r=i(11),o=i(53),l=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"initialize",value:function(){e.resizeObserver=new window.ResizeObserver((function(t){t.forEach((function(t){e.observedObjects.get(t.target).forEach((function(e){return e()}))}))})),e.observedObjects=new Map}},{key:"attachListener",value:function(t,i){var n=e.observedObjects,r=n.get(t)||[];r.length||e.resizeObserver.observe(t),n.set(t,[].concat(Object(o.a)(r),[i]))}},{key:"detachListener",value:function(t,i){var n=e.observedObjects.get(t)||[],r=n.filter((function(e){return e!==i}));!n.length||n.length===r.length&&0!==n.length||(e.observedObjects.set(t,r),r.length||(e.resizeObserver.unobserve(t),e.observedObjects.delete(t)))}}]),e}(),u=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"initialize",value:function(){e.initialized=!1,e.resizeInterval=void 0,e.resizeListeners=new Map}},{key:"attachListener",value:function(t,i){var n=e.resizeListeners.get(t),r=n?n.callbacks:[];e.resizeListeners.set(t,{width:t?t.offsetWidth:0,height:t?t.offsetHeight:0,callbacks:r.concat(i)}),e.initListener()}},{key:"initListener",value:function(){e.resizeListeners.size>0&&!e.initialized&&(e.resizeInterval=setInterval(e.checkListeners.bind(e),300))}},{key:"checkListeners",value:function(){e.resizeListeners.forEach((function(t,i){(e.checkSizes(t,i)||t&&!t._hasBeenRendered)&&(e.updateSizes(t,i.offsetWidth,i.offsetHeight),t.callbacks.forEach((function(e){return e()})),t._hasBeenRendered=!0)}))}},{key:"updateSizes",value:function(e,t,i){e.width=t,e.height=i}},{key:"checkSizes",value:function(e,t){var i=e.height,n=e.width,r=t.offsetHeight,o=t.offsetWidth;return i!==r||n!==o}},{key:"detachListener",value:function(t,i){var n=e.resizeListeners.get(t),r=n?n.callbacks:[],o=r.filter((function(e){return e!==i}));!n||r.length===o.length&&0!==r.length||(e.resizeListeners.set(t,Object.assign(n,{callbacks:o})),o.length||(n.callbacks=null,e.resizeListeners.delete(t)),0===e.resizeListeners.size&&(e.initialized=!1,clearInterval(e.resizeInterval)))}}]),e}(),a=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"initialize",value:function(){e.Implementation=window.ResizeObserver?l:u,e.Implementation.initialize()}},{key:"attachListener",value:function(t,i){e.Implementation.attachListener.call(e.Implementation,t,i)}},{key:"detachListener",value:function(t,i){e.Implementation.detachListener.call(e.Implementation,t,i)}},{key:"register",value:function(t,i){t.isUI5Element&&(t=t.getDomRef()),e.attachListener(t,i)}},{key:"deregister",value:function(t,i){t.isUI5Element&&(t=t.getDomRef()),e.detachListener(t,i)}}]),e}();a.initialize();t.a=a},258:function(e,t,i){"use strict";t.a=":root{--_ui5_bar_base_height:2.75rem;--_ui5_bar_subheader_height:3rem;--_ui5_fcl_solid_bg:var(--sapShell_Background);--_ui5_fcl_column_border:none;--_ui5_fcl_decoration_top:linear-gradient(0deg,var(--sapHighlightColor),#f3f4f5);--_ui5_fcl_decoration_bottom:linear-gradient(180deg,var(--sapHighlightColor),#f3f4f5);--_ui5_product_switch_item_width:11.25rem;--_ui5_product_switch_item_height:7rem;--_ui5_product_switch_item_outline_width:.0625rem;--_ui5_product_switch_item_outline_color:var(--sapContent_FocusColor);--_ui5_product_switch_item_outline:var(--_ui5_product_switch_item_outline_width) var(--_ui5_product_switch_item_outline_color) dotted;--_ui5_product_switch_item_active_outline_color:var(--sapContent_ContrastFocusColor);--_ui5_product_switch_item_outline_offset:-.1875rem;--_ui5_product_switch_item_outline_offset_positive:.1875rem;--_ui5_TimelineItem_arrow_size:1.625rem;--_ui5_TimelineItem_bubble_outline_width:0.0625rem;--_ui5_TimelineItem_bubble_outline_top:-0.125rem;--_ui5_TimelineItem_bubble_outline_right:-0.125rem;--_ui5_TimelineItem_bubble_outline_bottom:-0.125rem;--_ui5_TimelineItem_bubble_outline_left:-0.625rem;--_ui5_TimelineItem_bubble_rtl_left_offset:-0.125rem;--_ui5_TimelineItem_bubble_rtl_right_offset:-0.625rem;--ui5_upload_collection_level_2Size:1.375rem;--ui5_upload_collection_level_5Size:1rem;--ui5_upload_collection_drag_overlay_border:0.125rem dashed var(--sapContent_ForegroundBorderColor);--ui5_upload_collection_drop_overlay_border:0.125rem solid var(--sapContent_DragAndDropActiveColor);--ui5_upload_collection_drop_overlay_background:transparent;--_ui5_wiz_tab_focus_outline:1px dotted var(--sapContent_FocusColor);--_ui5_wiz_tab_selected_bg:var(--sapSelectedColor);--_ui5_wiz_tab_border:1px solid var(--sapSelectedColor);--_ui5_wiz_tab_selection_line:var(--sapSelectedColor);--_ui5_wiz_tab_icon_color:var(--sapSelectedColor);--_ui5_wiz_tab_active_separator_color:var(--sapSelectedColor)}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_bar_base_height:2.5rem;--_ui5_bar_subheader_height:2.25rem}"},264:function(e,t,i){"use strict";t.a={Full:"full",Basic:"basic",Minimal:"minimal",None:"none"}},279:function(e,t,i){"use strict";var n=i(52),r="M357.5 233q10 10 10 23t-10 23l-165 165q-12 11-23 0t0-23l160-159q6-6 0-12l-159-159q-5-5-5-11t5-11 11-5 11 5z";Object(n.c)("slim-arrow-right",{pathData:r,ltr:!1,collection:"SAP-icons"})},282:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n,r=i(14),o=(i(264),function(){return void 0===n&&(n=Object(r.a)()),n})},283:function(e,t,i){"use strict";i.d(t,"g",(function(){return n})),i.d(t,"d",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"f",(function(){return l})),i.d(t,"e",(function(){return u})),i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return s})),i.d(t,"r",(function(){return d})),i.d(t,"q",(function(){return c})),i.d(t,"p",(function(){return _})),i.d(t,"n",(function(){return f})),i.d(t,"j",(function(){return m})),i.d(t,"o",(function(){return h})),i.d(t,"s",(function(){return T})),i.d(t,"k",(function(){return b})),i.d(t,"m",(function(){return y})),i.d(t,"l",(function(){return C})),i.d(t,"i",(function(){return v})),i.d(t,"h",(function(){return p})),i.d(t,"C",(function(){return E})),i.d(t,"D",(function(){return O})),i.d(t,"G",(function(){return w})),i.d(t,"E",(function(){return L})),i.d(t,"F",(function(){return g})),i.d(t,"J",(function(){return x})),i.d(t,"I",(function(){return I})),i.d(t,"H",(function(){return k})),i.d(t,"N",(function(){return A})),i.d(t,"M",(function(){return S})),i.d(t,"K",(function(){return N})),i.d(t,"L",(function(){return M})),i.d(t,"v",(function(){return R})),i.d(t,"w",(function(){return D})),i.d(t,"u",(function(){return j})),i.d(t,"x",(function(){return z})),i.d(t,"A",(function(){return B})),i.d(t,"z",(function(){return P})),i.d(t,"B",(function(){return H})),i.d(t,"y",(function(){return U})),i.d(t,"t",(function(){return F})),i.d(t,"O",(function(){return V})),i.d(t,"P",(function(){return X}));var n={key:"FCL_START_COLUMN_TXT",defaultText:"First column"},r={key:"FCL_MIDDLE_COLUMN_TXT",defaultText:"Middle column"},o={key:"FCL_END_COLUMN_TXT",defaultText:"Last column"},l={key:"FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP",defaultText:"Expand the first column"},u={key:"FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP",defaultText:"Collapse the first column"},a={key:"FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP",defaultText:"Expand the last column"},s={key:"FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP",defaultText:"Collapse the last column"},d={key:"NOTIFICATION_LIST_ITEM_TXT",defaultText:"Notification"},c={key:"NOTIFICATION_LIST_ITEM_SHOW_MORE",defaultText:"Show More"},_={key:"NOTIFICATION_LIST_ITEM_SHOW_LESS",defaultText:"Show Less"},f={key:"NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE",defaultText:"More"},m={key:"NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE",defaultText:"Close"},h={key:"NOTIFICATION_LIST_ITEM_READ",defaultText:"Read"},T={key:"NOTIFICATION_LIST_ITEM_UNREAD",defaultText:"Unread"},b={key:"NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT",defaultText:"High Priority"},y={key:"NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT",defaultText:"Medium Priority"},C={key:"NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT",defaultText:"Low Priority"},v={key:"NOTIFICATION_LIST_GROUP_ITEM_TXT",defaultText:"Notification Group"},p={key:"NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT",defaultText:"Counter"},E={key:"TIMELINE_ARIA_LABEL",defaultText:"Timeline"},O={key:"UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT",defaultText:"Cancel"},w={key:"UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT",defaultText:"Rename"},L={key:"UPLOADCOLLECTIONITEM_ERROR_STATE",defaultText:"Terminated"},g={key:"UPLOADCOLLECTIONITEM_READY_STATE",defaultText:"Pending"},x={key:"UPLOADCOLLECTIONITEM_UPLOADING_STATE",defaultText:"Uploading"},I={key:"UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT",defaultText:"Terminate"},k={key:"UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT",defaultText:"Retry"},A={key:"UPLOADCOLLECTION_NO_DATA_TEXT",defaultText:"No files found."},S={key:"UPLOADCOLLECTION_NO_DATA_DESCRIPTION",defaultText:'Drop files to upload them or use the "Upload" button.'},N={key:"UPLOADCOLLECTION_DRAG_FILE_INDICATOR",defaultText:"Drag files here."},M={key:"UPLOADCOLLECTION_DROP_FILE_INDICATOR",defaultText:"Drop files to upload them."},R={key:"SHELLBAR_LABEL",defaultText:"Shell Bar"},D={key:"SHELLBAR_LOGO",defaultText:"Logo"},j={key:"SHELLBAR_COPILOT",defaultText:"CoPilot"},z={key:"SHELLBAR_NOTIFICATIONS",defaultText:"{0} Notifications"},B={key:"SHELLBAR_PROFILE",defaultText:"Profile"},P={key:"SHELLBAR_PRODUCTS",defaultText:"Products"},H={key:"SHELLBAR_SEARCH",defaultText:"Search"},U={key:"SHELLBAR_OVERFLOW",defaultText:"More"},F={key:"SHELLBAR_CANCEL",defaultText:"Cancel"},V={key:"WIZARD_NAV_ARIA_ROLE_DESCRIPTION",defaultText:"Wizard"},X={key:"WIZARD_NAV_STEP_DEFAULT_HEADING",defaultText:"Step"}},285:function(e,t,i){"use strict";var n=i(52),r="M351.5 421q12 12 0 23-5 5-11 5t-11-5l-166-165q-9-10-9-23t9-23l165-164q5-5 11.5-5t11.5 5 5 11-5 11l-159 159q-6 6 0 12z";Object(n.c)("slim-arrow-left",{pathData:r,ltr:!1,collection:"SAP-icons"})}}]);
//# sourceMappingURL=43.d7bbe5a0.chunk.js.map