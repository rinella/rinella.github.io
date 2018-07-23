!function(t){var e={};function s(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);var a=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{static attachTo(t){return new i(t,new a)}constructor(t,e,...s){this.root_=t,this.initialize(...s),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,s=!1){let a;"function"==typeof CustomEvent?a=new CustomEvent(t,{detail:e,bubbles:s}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,s,!1,e),this.root_.dispatchEvent(a)}}var r=i;
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},o={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},d={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l,c;function h(t=window,e=!1){if(void 0===c||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){e=!0}})}catch(t){}c=e}return!!c&&{passive:!0}}const _=["touchstart","pointerdown","mousedown","keydown"],p=["touchend","pointerup","mouseup"];let u=[];class m extends a{static get cssClasses(){return n}static get strings(){return o}static get numbers(){return d}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(m.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(t=>this.deactivate_(t)),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_=null}isSupported_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}init(){if(!this.isSupported_())return;this.registerRootHandlers_();const{ROOT:t,UNBOUNDED:e}=m.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}destroy(){if(!this.isSupported_())return;if(this.activationTimer_){clearTimeout(this.activationTimer_),this.activationTimer_=0;const{FG_ACTIVATION:t}=m.cssClasses;this.adapter_.removeClass(t)}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_();const{ROOT:t,UNBOUNDED:e}=m.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}registerRootHandlers_(){_.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):p.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){_.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),p.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=m;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const s=this.previousActivationEvent_;s&&t&&s.type!==t.type||(e.isActivated=!0,e.isProgrammatic=null===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&u.length>0&&u.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(t&&(u.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{u=[],e.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t=null){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=m.strings,{FG_DEACTIVATION:s,FG_ACTIVATION:a}=m.cssClasses,{DEACTIVATION_TIMEOUT_MS:i}=m.numbers;this.layoutInternal_();let r="",n="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();r=`${t.x}px, ${t.y}px`,n=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,r),this.adapter_.updateCssVariable(e,n),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(s),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),i)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let s;return{startPoint:s={x:(s=e?function(t,e,s){const{x:a,y:i}=e,r=a+s.left,n=i+s.top;let o,d;return"touchstart"===t.type?(o=t.changedTouches[0].pageX-r,d=t.changedTouches[0].pageY-n):(o=t.pageX-r,d=t.pageY-n),{x:o,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:s.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=m.cssClasses,{hasDeactivationUXRun:e,isActivated:s}=this.activationState_;(e||!s)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},d.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=m.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=null,m.numbers.TAP_DELAY_MS)}deactivate_(t){const e=this.activationState_;if(!e.isActivated)return;const s=Object.assign({},e);if(e.isProgrammatic){const t=null;requestAnimationFrame(()=>this.animateDeactivation_(t,s)),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(t,s),this.resetActivationState_()})}deactivate(t=null){this.deactivate_(t)}animateDeactivation_(t,{wasActivatedByPointer:e,wasElementMadeActive:s}){(e||s)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+m.numbers.PADDING})(),this.initialSize_=t*m.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:s,VAR_FG_SCALE:a}=m.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(s,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=m.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(m.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(m.cssClasses.BG_FOCUSED))}}var g=m;
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends r{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const s=new v(t);return void 0!==e&&(s.unbounded=e),s}static createAdapter(t){const e=function(t){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(e=>e in t).pop()}(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let s=l;if("boolean"==typeof l&&!e)return s;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const a=t.CSS.supports("--css-vars","yes"),i=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return s=!(!a&&!i||function(t){const e=t.document,s=e.createElement("div");s.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(s);const a=t.getComputedStyle(s),i=null!==a&&"solid"===a.borderTopStyle;return s.remove(),i}(t)),e||(l=s),s})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,s)=>t.root_.addEventListener(e,s,h()),deregisterInteractionHandler:(e,s)=>t.root_.removeEventListener(e,s,h()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,h()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,h()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,s)=>t.root_.style.setProperty(e,s),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new g(v.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class C{}C.prototype.root_,C.prototype.unbounded,C.prototype.disabled;
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed"},T={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},A={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S extends a{static get strings(){return A}static get cssClasses(){return E}static get numbers(){return T}static get defaultAdapter(){return{hasClass:()=>{},addClass:()=>{},removeClass:()=>{},setStyle:()=>{},getTopAppBarHeight:()=>{},registerNavigationIconInteractionHandler:()=>{},deregisterNavigationIconInteractionHandler:()=>{},notifyNavigationIconClicked:()=>{},registerScrollHandler:()=>{},deregisterScrollHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},getViewportScrollY:()=>0,getTotalActionItems:()=>0}}constructor(t){super(Object.assign(S.defaultAdapter,t)),this.navClickHandler_=(()=>this.adapter_.notifyNavigationIconClicked())}init(){this.adapter_.registerNavigationIconInteractionHandler("click",this.navClickHandler_)}destroy(){this.adapter_.deregisterNavigationIconInteractionHandler("click",this.navClickHandler_)}}var f=S;
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H=class extends f{constructor(t){super(t),this.wasScrolled_=!1,this.scrollHandler_=(()=>this.fixedScrollHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}fixedScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(E.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(E.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b=class extends f{constructor(t){super(t),this.isCollapsed=!1,this.scrollHandler_=(()=>this.shortAppBarScrollHandler_())}init(){super.init();const t=this.adapter_.hasClass(E.SHORT_COLLAPSED_CLASS);this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(E.SHORT_HAS_ACTION_ITEM_CLASS),t||(this.adapter_.registerScrollHandler(this.scrollHandler_),this.shortAppBarScrollHandler_())}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}shortAppBarScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.isCollapsed&&(this.adapter_.removeClass(E.SHORT_COLLAPSED_CLASS),this.isCollapsed=!1):this.isCollapsed||(this.adapter_.addClass(E.SHORT_COLLAPSED_CLASS),this.isCollapsed=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=0;var w=class extends f{constructor(t){super(t),this.lastScrollPosition_=this.adapter_.getViewportScrollY(),this.topAppBarHeight_=this.adapter_.getTopAppBarHeight(),this.wasDocked_=!0,this.isDockedShowing_=!0,this.currentAppBarOffsetTop_=0,this.isCurrentlyBeingResized_=!1,this.resizeThrottleId_=y,this.resizeDebounceId_=y,this.scrollHandler_=(()=>this.topAppBarScrollHandler_()),this.resizeHandler_=(()=>this.topAppBarResizeHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.setStyle("top","")}checkForUpdate_(){const t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,s=this.currentAppBarOffsetTop_>t,a=e&&s;if(a)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==s)return this.isDockedShowing_=s,!0}return a}moveTopAppBar_(){if(this.checkForUpdate_()){let t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-T.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}}topAppBarScrollHandler_(){const t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())}topAppBarResizeHandler_(){this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(()=>{this.resizeThrottleId_=y,this.throttledResizeHandler_()},T.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(()=>{this.topAppBarScrollHandler_(),this.isCurrentlyBeingResized_=!1,this.resizeDebounceId_=y},T.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)}throttledResizeHandler_(){const t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.topAppBarScrollHandler_()}};
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends r{constructor(...t){super(...t),this.navIcon_,this.iconRipples_}initialize(t=(t=>v.attachTo(t))){this.navIcon_=this.root_.querySelector(A.NAVIGATION_ICON_SELECTOR);const e=[].slice.call(this.root_.querySelectorAll(A.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map(e=>{const s=t(e);return s.unbounded=!0,s})}destroy(){this.iconRipples_.forEach(t=>t.destroy()),super.destroy()}static attachTo(t){return new I(t)}getDefaultFoundation(){const t=Object.assign({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setStyle:(t,e)=>this.root_.style.setProperty(t,e),getTopAppBarHeight:()=>this.root_.clientHeight,registerNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.addEventListener(t,e)},deregisterNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.removeEventListener(t,e)},notifyNavigationIconClicked:()=>{this.emit(A.NAVIGATION_EVENT,{})},registerScrollHandler:t=>window.addEventListener("scroll",t),deregisterScrollHandler:t=>window.removeEventListener("scroll",t),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getViewportScrollY:()=>window.pageYOffset,getTotalActionItems:()=>this.root_.querySelectorAll(A.ACTION_ITEM_SELECTOR).length});let e;return e=this.root_.classList.contains(E.SHORT_CLASS)?new b(t):this.root_.classList.contains(E.FIXED_CLASS)?new H(t):new w(t)}}const O="data-mdc-tabindex",D="data-mdc-tabindex-handled";let R,L;function N(t,e=window){if(!("ontouchstart"in e.document))switch(t){case"touchstart":return"pointerdown";case"touchmove":return"pointermove";case"touchend":return"pointerup";default:return t}return t}function B(t=window,e=!1){if(void 0===R||e){const e="transform"in t.document.createElement("div").style?"transform":"-webkit-transform";R=e}return R}function M(t=window,e=!1){if(void 0===L||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){e=!0}})}catch(t){}L=e}return!!L&&{passive:!0}}function F(t){t.hasAttribute("tabindex")&&t.setAttribute(O,t.getAttribute("tabindex")),t.setAttribute(D,!0)}function V(t){t.hasAttribute(D)&&(t.hasAttribute(O)?(t.setAttribute("tabindex",t.getAttribute(O)),t.removeAttribute(O)):t.removeAttribute("tabindex"),t.removeAttribute(D))}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]";class P extends a{static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},hasNecessaryDom:()=>!1,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDrawerInteractionHandler:()=>{},deregisterDrawerInteractionHandler:()=>{},registerTransitionEndHandler:()=>{},deregisterTransitionEndHandler:()=>{},registerDocumentKeydownHandler:()=>{},deregisterDocumentKeydownHandler:()=>{},setTranslateX:()=>{},getFocusableElements:()=>{},saveElementTabState:()=>{},restoreElementTabState:()=>{},makeElementUntabbable:()=>{},notifyOpen:()=>{},notifyClose:()=>{},isRtl:()=>!1,getDrawerWidth:()=>0}}constructor(t,e,s,a){super(Object.assign(P.defaultAdapter,t)),this.rootCssClass_=e,this.animatingCssClass_=s,this.openCssClass_=a,this.transitionEndHandler_=(t=>this.handleTransitionEnd_(t)),this.inert_=!1,this.componentTouchStartHandler_=(t=>this.handleTouchStart_(t)),this.componentTouchMoveHandler_=(t=>this.handleTouchMove_(t)),this.componentTouchEndHandler_=(t=>this.handleTouchEnd_(t)),this.documentKeydownHandler_=(t=>{(t.key&&"Escape"===t.key||27===t.keyCode)&&this.close()})}init(){const t=this.rootCssClass_,e=this.openCssClass_;if(!this.adapter_.hasClass(t))throw new Error(`${t} class required in root element.`);if(!this.adapter_.hasNecessaryDom())throw new Error(`Required DOM nodes missing in ${t} component.`);this.adapter_.hasClass(e)?this.isOpen_=!0:(this.detabinate_(),this.isOpen_=!1),this.adapter_.registerDrawerInteractionHandler("touchstart",this.componentTouchStartHandler_),this.adapter_.registerInteractionHandler("touchmove",this.componentTouchMoveHandler_),this.adapter_.registerInteractionHandler("touchend",this.componentTouchEndHandler_)}destroy(){this.adapter_.deregisterDrawerInteractionHandler("touchstart",this.componentTouchStartHandler_),this.adapter_.deregisterInteractionHandler("touchmove",this.componentTouchMoveHandler_),this.adapter_.deregisterInteractionHandler("touchend",this.componentTouchEndHandler_),this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_)}open(){this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_),this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_),this.adapter_.addClass(this.animatingCssClass_),this.adapter_.addClass(this.openCssClass_),this.retabinate_(),this.isOpen_||this.adapter_.notifyOpen(),this.isOpen_=!0}close(){this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_),this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_),this.adapter_.addClass(this.animatingCssClass_),this.adapter_.removeClass(this.openCssClass_),this.detabinate_(),this.isOpen_&&this.adapter_.notifyClose(),this.isOpen_=!1}isOpen(){return this.isOpen_}detabinate_(){if(this.inert_)return;const t=this.adapter_.getFocusableElements();if(t)for(let e=0;e<t.length;e++)this.adapter_.saveElementTabState(t[e]),this.adapter_.makeElementUntabbable(t[e]);this.inert_=!0}retabinate_(){if(!this.inert_)return;const t=this.adapter_.getFocusableElements();if(t)for(let e=0;e<t.length;e++)this.adapter_.restoreElementTabState(t[e]);this.inert_=!1}handleTouchStart_(t){this.adapter_.hasClass(this.openCssClass_)&&(t.pointerType&&"touch"!==t.pointerType||(this.direction_=this.adapter_.isRtl()?-1:1,this.drawerWidth_=this.adapter_.getDrawerWidth(),this.startX_=t.touches?t.touches[0].pageX:t.pageX,this.currentX_=this.startX_,this.updateRaf_=requestAnimationFrame(this.updateDrawer_.bind(this))))}handleTouchMove_(t){t.pointerType&&"touch"!==t.pointerType||(this.currentX_=t.touches?t.touches[0].pageX:t.pageX)}handleTouchEnd_(t){t.pointerType&&"touch"!==t.pointerType||(this.prepareForTouchEnd_(),Math.abs(this.newPosition_/this.drawerWidth_)>=.5?this.close():this.open())}prepareForTouchEnd_(){cancelAnimationFrame(this.updateRaf_),this.adapter_.setTranslateX(null)}updateDrawer_(){this.updateRaf_=requestAnimationFrame(this.updateDrawer_.bind(this)),this.adapter_.setTranslateX(this.newPosition_)}get newPosition_(){let t=null;return t=1===this.direction_?Math.min(0,this.currentX_-this.startX_):Math.max(0,this.currentX_-this.startX_)}isRootTransitioningEventTarget_(){return!1}handleTransitionEnd_(t){this.isRootTransitioningEventTarget_(t.target)&&(this.adapter_.removeClass(this.animatingCssClass_),this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_))}}const z={ROOT:"mdc-drawer--temporary",OPEN:"mdc-drawer--open",ANIMATING:"mdc-drawer--animating",SCROLL_LOCK:"mdc-drawer-scroll-lock"},k={DRAWER_SELECTOR:".mdc-drawer--temporary .mdc-drawer__drawer",OPACITY_VAR_NAME:"--mdc-temporary-drawer-opacity",FOCUSABLE_ELEMENTS:x,OPEN_EVENT:"MDCTemporaryDrawer:open",CLOSE_EVENT:"MDCTemporaryDrawer:close"};class U extends P{static get cssClasses(){return z}static get strings(){return k}static get defaultAdapter(){return Object.assign(P.defaultAdapter,{addBodyClass:()=>{},removeBodyClass:()=>{},isDrawer:()=>!1,updateCssVariable:()=>{},eventTargetHasClass:()=>!1})}constructor(t){super(Object.assign(U.defaultAdapter,t),U.cssClasses.ROOT,U.cssClasses.ANIMATING,U.cssClasses.OPEN),this.componentClickHandler_=(t=>{this.adapter_.eventTargetHasClass(t.target,z.ROOT)&&this.close(!0)})}init(){super.init(),this.adapter_.updateCssVariable(0),this.adapter_.registerInteractionHandler("click",this.componentClickHandler_)}destroy(){super.destroy(),this.adapter_.deregisterInteractionHandler("click",this.componentClickHandler_),this.enableScroll_()}open(){this.disableScroll_(),this.adapter_.updateCssVariable(""),super.open()}close(){this.adapter_.updateCssVariable(""),super.close()}prepareForTouchEnd_(){super.prepareForTouchEnd_(),this.adapter_.updateCssVariable("")}updateDrawer_(){super.updateDrawer_();const t=Math.max(0,1+this.direction_*(this.newPosition_/this.drawerWidth_));this.adapter_.updateCssVariable(t)}isRootTransitioningEventTarget_(t){return this.adapter_.isDrawer(t)}handleTransitionEnd_(t){super.handleTransitionEnd_(t),this.isOpen_||this.enableScroll_()}disableScroll_(){this.adapter_.addBodyClass(z.SCROLL_LOCK)}enableScroll_(){this.adapter_.removeBodyClass(z.SCROLL_LOCK)}}class X extends r{static attachTo(t){return new X(t)}get open(){return this.foundation_.isOpen()}set open(t){t?this.foundation_.open():this.foundation_.close()}get drawer(){return this.root_.querySelector(U.strings.DRAWER_SELECTOR)}getDefaultFoundation(){const{FOCUSABLE_ELEMENTS:t,OPACITY_VAR_NAME:e}=U.strings;return new U({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),addBodyClass:t=>document.body.classList.add(t),removeBodyClass:t=>document.body.classList.remove(t),eventTargetHasClass:(t,e)=>t.classList.contains(e),hasNecessaryDom:()=>Boolean(this.drawer),registerInteractionHandler:(t,e)=>this.root_.addEventListener(N(t),e,M()),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(N(t),e,M()),registerDrawerInteractionHandler:(t,e)=>this.drawer.addEventListener(N(t),e),deregisterDrawerInteractionHandler:(t,e)=>this.drawer.removeEventListener(N(t),e),registerTransitionEndHandler:t=>this.drawer.addEventListener("transitionend",t),deregisterTransitionEndHandler:t=>this.drawer.removeEventListener("transitionend",t),registerDocumentKeydownHandler:t=>document.addEventListener("keydown",t),deregisterDocumentKeydownHandler:t=>document.removeEventListener("keydown",t),getDrawerWidth:()=>this.drawer.offsetWidth,setTranslateX:t=>this.drawer.style.setProperty(B(),null===t?null:`translateX(${t}px)`),updateCssVariable:t=>{(function(t=window){return"CSS"in t&&t.CSS.supports("(--color: red)")})()&&this.root_.style.setProperty(e,t)},getFocusableElements:()=>this.drawer.querySelectorAll(t),saveElementTabState:t=>F(t),restoreElementTabState:t=>V(t),makeElementUntabbable:t=>t.setAttribute("tabindex",-1),notifyOpen:()=>this.emit(U.strings.OPEN_EVENT),notifyClose:()=>this.emit(U.strings.CLOSE_EVENT),isRtl:()=>"rtl"===getComputedStyle(this.root_).getPropertyValue("direction"),isDrawer:t=>t===this.drawer})}}const G=document.querySelector(".mdc-top-app-bar"),q=(new I(G),new X(document.querySelector(".mdc-drawer--temporary")));document.querySelector(".menu").addEventListener("click",()=>q.open=!0),document.querySelector(".close").addEventListener("click",()=>q.open=!1)}]);