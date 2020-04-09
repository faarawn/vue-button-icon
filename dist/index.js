/*!
 * vue-button-icon v1.0.5
 * (c) Parsa Shariat
 * Released under the MIT License.
 */
"use strict"
function normalizeComponent(e,t,n,o,i,r,l,a,s,d){"boolean"!=typeof l&&(s=a,a=l,l=!1)
var u="function"==typeof n?n.options:n
e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o)
var c
if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,s(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):t&&(c=l?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),c)if(u.functional){var _=u.render
u.render=function(e,t){return c.call(t),_(e,t)}}else{var p=u.beforeCreate
u.beforeCreate=p?[].concat(p,c):[c]}return n}function createInjector(e){return function(e,t){return addStyle(e,t)}}function addStyle(e,t){var n=isOldIE?t.media||"default":e,o=styles[n]||(styles[n]={ids:new Set,styles:[]})
if(!o.ids.has(e)){o.ids.add(e)
var i=t.source
if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n")
else{var r=o.ids.size-1,l=document.createTextNode(i),a=o.element.childNodes
a[r]&&o.element.removeChild(a[r]),a.length?o.element.insertBefore(l,a[r]):o.element.appendChild(l)}}}function install(e){console.log("here1"),install.installed||(console.log("here2"),install.installed=!0,e.component("vue-button-icon",__vue_component__))}Object.defineProperty(exports,"__esModule",{value:!0})
var script={data:function(){return{mouseover:!1}},props:{width:{type:Number,default:200},color:{type:String,default:"#ffffff"},bgcolor:{type:String,default:"blue",validator:function(e){return-1!==["blue","green","red"].indexOf(e)}},rounded:{type:Boolean,default:!0},icon:{type:String,default:"fa fa-instagram"},block:{type:Boolean,default:!1},size:{type:String,default:"default",validator:function(e){return-1!==["small","default","large"].indexOf(e)}}},methods:{onClick:function(e){this.$emit("click",e)},onDoubleClick:function(e){this.$emit("dblclick",e)}}},isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),HEAD,styles={},__vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement,n=e._self._c||t
return n("button",{class:["btn addToCard","btn addToCard--"+e.bgcolor,{"btn addToCard--rounded":e.rounded,"btn addToCard--block":e.block}],staticStyle:{position:"relative"},style:e.mouseover?{color:e.color,width:e.width+"px","background-position":-e.width/5+"px"}:{color:e.color,width:e.width+"px"},on:{mouseover:function(t){e.mouseover=!0},mouseout:function(t){e.mouseover=!1},click:e.onClick,dblclick:e.onDoubleClick}},[n("i",{class:e.icon,staticStyle:{position:"absolute",color:"white","font-size":"15pt",padding:"2px"},style:{right:"calc("+e.width/10+"px - 7.5pt)"}}),e._v(" "),e._t("default")],2)},__vue_staticRenderFns__=[],__vue_inject_styles__=function(e){e&&e("data-v-0fd20cea_0",{source:".btn{display:inline-block;font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.addToCard--block{display:block;width:100%!important}.addToCard{background:#fe4c50;background:-webkit-linear-gradient(to right,#fe4c50,#b91d73);background:linear-gradient(to right,#fe4c50,#b91d73);transition:background .5s ease-out}.addToCard--mouseover{background-position:-100px}",map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,!1,createInjector,void 0,void 0),vueButtonIcon=install,plugin={install:install},GlobalVue=null
"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)
var ButtonComponent=__vue_component__
exports.ButtonComponent=ButtonComponent,exports.default=vueButtonIcon,exports.install=install
