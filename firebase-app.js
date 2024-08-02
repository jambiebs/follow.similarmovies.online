!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).firebase=t()}(this,function(){"use strict";const r=function(t){const r=[];let n=0;for(let i=0;i<t.length;i++){let e=t.charCodeAt(i);e<128?r[n++]=e:(e<2048?r[n++]=e>>6|192:(55296==(64512&e)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(e=65536+((1023&e)<<10)+(1023&t.charCodeAt(++i)),r[n++]=e>>18|240,r[n++]=e>>12&63|128):r[n++]=e>>12|224,r[n++]=e>>6&63|128),r[n++]=63&e|128)}return r},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_;const i=[];for(let h=0;h<r.length;h+=3){var a=r[h],s=h+1<r.length,o=s?r[h+1]:0,c=h+2<r.length,l=c?r[h+2]:0;let e=(15&o)<<2|l>>6,t=63&l;c||(t=64,s||(e=64)),i.push(n[a>>2],n[(3&a)<<4|o>>4],n[e],n[t])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){var i,a,s=e[r++];s<128?t[n++]=String.fromCharCode(s):191<s&&s<224?(i=e[r++],t[n++]=String.fromCharCode((31&s)<<6|63&i)):239<s&&s<365?(a=((7&s)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536,t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))):(i=e[r++],a=e[r++],t[n++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&a))}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();var r=t?this.charToByteMapWebSafe_:this.charToByteMap_;const n=[];for(let c=0;c<e.length;){var i=r[e.charAt(c++)],a=c<e.length?r[e.charAt(c)]:0;++c;var s=c<e.length?r[e.charAt(c)]:64;++c;var o=c<e.length?r[e.charAt(c)]:64;if(++c,null==i||null==a||null==s||null==o)throw new l;n.push(i<<2|a>>4),64!==s&&(n.push(a<<4&240|s>>2),64!==o&&n.push(s<<6&192|o))}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(e){return e=e,t=r(e),n.encodeByteArray(t,!0).replace(/\./g,"");var t};function c(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const r=t;return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=c(e[n],t[n]));return e}const e=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,t=()=>{if("undefined"!=typeof document){let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&function(e){try{return n.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(e[1]);return t&&JSON.parse(t)}},a=()=>{try{return e()||(()=>{if("undefined"!=typeof process&&void 0!==process.env){var e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0}})()||t()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},h=()=>{var e;return null===(e=a())||void 0===e?void 0:e.config};class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(r){return(e,t)=>{e?this.reject(e):this.resolve(t),"function"==typeof r&&(this.promise.catch(()=>{}),1===r.length?r(e):r(e,t))}}}function d(){return"undefined"!=typeof window||u()}function u(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}class o extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var n,r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],a=a?(n=r,a.replace(f,(e,t)=>{var r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",a=`${this.serviceName}: ${a} (${i}).`;return new o(i,a,r)}}const f=/\{\$([^}]+)}/g;function g(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function b(e,t){if(e===t)return 1;const r=Object.keys(e),n=Object.keys(t);for(const s of r){if(!n.includes(s))return;var i=e[s],a=t[s];if(m(i)&&m(a)){if(!b(i,a))return}else if(i!==a)return}for(const o of n)if(!r.includes(o))return;return 1}function m(e){return null!==e&&"object"==typeof e}function v(e,t){const r=new _(e,t);return r.subscribe.bind(r)}class _{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=y),void 0===n.error&&(n.error=y),void 0===n.complete&&(n.complete=y);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y(){}class E{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const w="[DEFAULT]";class C{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new s;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(r=null==e?void 0:e.optional)&&void 0!==r&&r;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:w})}catch(e){}for(var[t,r]of this.instancesDeferred.entries()){t=this.normalizeInstanceIdentifier(t);try{var n=this.getOrInitializeService({instanceIdentifier:t});r.resolve(n)}catch(e){}}}}clearInstance(e=w){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=w){return this.instances.has(e)}getOptions(e=w){return this.instancesOptions.get(e)||{}}initialize(e={}){var{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);var n,i,a=this.getOrInitializeService({instanceIdentifier:r,options:t});for([n,i]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(n)&&i.resolve(a);return a}onInit(e,t){var r=this.normalizeInstanceIdentifier(t);const n=null!==(i=this.onInitCallbacks.get(r))&&void 0!==i?i:new Set;n.add(e),this.onInitCallbacks.set(r,n);var i=this.instances.get(r);return i&&e(i,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){var r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===w?void 0:n,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e=w){return!this.component||this.component.multipleInstances?e:w}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class D{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);var t=new C(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const I=[];var S,O,A;(O=S=S||{})[O.DEBUG=0]="DEBUG",O[O.VERBOSE=1]="VERBOSE",O[O.INFO=2]="INFO",O[O.WARN=3]="WARN",O[O.ERROR=4]="ERROR",O[O.SILENT=5]="SILENT";const L={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},N=S.INFO,B={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},T=(e,t,...r)=>{if(!(t<e.logLevel)){var n=(new Date).toISOString(),i=B[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${n}]  ${e.name}:`,...r)}};class R{constructor(e){this.name=e,this._logLevel=N,this._logHandler=T,this._userLogHandler=null,I.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?L[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const P=(t,e)=>e.some(e=>t instanceof e);let k,M;const F=new WeakMap,j=new WeakMap,z=new WeakMap,$=new WeakMap,H=new WeakMap;let x={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return j.get(e);if("objectStoreNames"===t)return e.objectStoreNames||z.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return U(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function V(n){return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(M=M||[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]).includes(n)?function(...e){return n.apply(G(this),e),U(F.get(this))}:function(...e){return U(n.apply(G(this),e))}:function(e,...t){var r=n.call(G(this),e,...t);return z.set(r,e.sort?e.sort():[e]),U(r)}}function W(e){return"function"==typeof e?V(e):(e instanceof IDBTransaction&&(a=e,j.has(a)||(t=new Promise((e,t)=>{const r=()=>{a.removeEventListener("complete",n),a.removeEventListener("error",i),a.removeEventListener("abort",i)},n=()=>{e(),r()},i=()=>{t(a.error||new DOMException("AbortError","AbortError")),r()};a.addEventListener("complete",n),a.addEventListener("error",i),a.addEventListener("abort",i)}),j.set(a,t))),P(e,k=k||[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])?new Proxy(e,x):e);var a,t}function U(e){if(e instanceof IDBRequest)return function(a){const e=new Promise((e,t)=>{const r=()=>{a.removeEventListener("success",n),a.removeEventListener("error",i)},n=()=>{e(U(a.result)),r()},i=()=>{t(a.error),r()};a.addEventListener("success",n),a.addEventListener("error",i)});return e.then(e=>{e instanceof IDBCursor&&F.set(e,a)}).catch(()=>{}),H.set(e,a),e}(e);if($.has(e))return $.get(e);var t=W(e);return t!==e&&($.set(e,t),H.set(t,e)),t}const G=e=>H.get(e);const J=["get","getKey","getAll","getAllKeys","count"],K=["put","add","delete","clear"],Y=new Map;function X(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(Y.get(t))return Y.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,s=K.includes(i);if(i in(a?IDBIndex:IDBObjectStore).prototype&&(s||J.includes(i))){var r=async function(e,...t){var r=this.transaction(e,s?"readwrite":"readonly");let n=r.store;return a&&(n=n.index(t.shift())),(await Promise.all([n[i](...t),s&&r.done]))[0]};return Y.set(t,r),r}}}x={...A=x,get:(e,t,r)=>X(e,t)||A.get(e,t,r),has:(e,t)=>!!X(e,t)||A.has(e,t)};class q{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if("VERSION"!==(null==(t=e.getComponent())?void 0:t.type))return null;var t,t=e.getImmediate();return`${t.library}/${t.version}`}).filter(e=>e).join(" ")}}const Z="@firebase/app",Q="0.10.7",ee=new R("@firebase/app");var te;const re="[DEFAULT]",ne={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},ie=new Map,ae=new Map,se=new Map;function oe(t,r){try{t.container.addComponent(r)}catch(e){ee.debug(`Component ${r.name} failed to register with FirebaseApp ${t.name}`,e)}}function ce(e,t){e.container.addOrOverwriteComponent(t)}function le(e){var t=e.name;if(se.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;se.set(t,e);for(const r of ie.values())oe(r,e);for(const n of ae.values())oe(n,e);return!0}function he(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function de(e){return void 0!==e.options}const ue=new p("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class pe{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new E("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}class fe extends pe{constructor(e,t,r,n){var i=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,a={name:r,automaticDataCollectionEnabled:i};void 0!==e.apiKey?super(e,a,n):super(e.options,a,n),this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ve(Z,Q,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){me(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw ue.create("server-app-deleted")}}const ge="10.12.4";function be(e,t={}){let r=e;if("object"!=typeof t){const i=t;t={name:i}}var n=Object.assign({name:re,automaticDataCollectionEnabled:!1},t);const i=n.name;if("string"!=typeof i||!i)throw ue.create("bad-app-name",{appName:String(i)});if(r=r||h(),!r)throw ue.create("no-options");var a=ie.get(i);if(a){if(b(r,a.options)&&b(n,a.config))return a;throw ue.create("duplicate-app",{appName:i})}const s=new D(i);for(const o of se.values())s.addComponent(o);n=new pe(r,n,s);return ie.set(i,n),n}async function me(e){let t=!1;var r=e.name;if(ie.has(r))t=!0,ie.delete(r);else if(ae.has(r)){const n=e;n.decRefCount()<=0&&(ae.delete(r),t=!0)}t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ve(e,t,r){let n=null!==(a=ne[e])&&void 0!==a?a:e;r&&(n+=`-${r}`);var i=n.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const s=[`Unable to register library "${n}" with version "${t}":`];return i&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ee.warn(s.join(" "))}le(new E(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}function _e(e,t){if(null!==e&&"function"!=typeof e)throw ue.create("invalid-log-argument");!function(a,e){for(const t of I){let i=null;e&&e.level&&(i=L[e.level]),t.userLogHandler=null===a?null:(e,t,...r)=>{var n=r.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");t>=(null!==i&&void 0!==i?i:e.logLevel)&&a({level:S[t].toLowerCase(),message:n,args:r,type:e.name})}}}(e,t)}function ye(e){var t;t=e,I.forEach(e=>{e.setLogLevel(t)})}const Ee="firebase-heartbeat-database",we=1,Ce="firebase-heartbeat-store";let De=null;function Ie(){return De=De||function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}){const s=indexedDB.open(e,t),o=U(s);return n&&s.addEventListener("upgradeneeded",e=>{n(U(s.result),e.oldVersion,e.newVersion,U(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}(Ee,we,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Ce)}catch(e){console.warn(e)}}}).catch(e=>{throw ue.create("idb-open",{originalErrorMessage:e.message})}),De}async function Se(e,t){try{const n=await Ie(),i=n.transaction(Ce,"readwrite"),a=i.objectStore(Ce);await a.put(t,Oe(e)),await i.done}catch(e){var r;e instanceof o?ee.warn(e.message):(r=ue.create("idb-set",{originalErrorMessage:null==e?void 0:e.message}),ee.warn(r.message))}}function Oe(e){return`${e.name}!${e.options.appId}`}class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;var t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then(e=>this._heartbeatsCache=e)}async triggerHeartbeat(){var e;const t=this.container.getProvider("platform-logger").getImmediate();var r=t.getPlatformInfoString();const n=Le();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(r=this._heartbeatsCache)||void 0===r?void 0:r.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";var e=Le(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const i of e){const a=r.find(e=>e.agent===i.agent);if(a){if(a.dates.push(i.date),Be(r)>t){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Be(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),t=i(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,0<r.length?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}}function Le(){const e=new Date;return e.toISOString().substring(0,10)}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return}}()&&new Promise((t,r)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var e;r((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){r(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){var e=await async function(e){try{const r=await Ie(),n=r.transaction(Ce);var t=await n.objectStore(Ce).get(Oe(e));return await n.done,t}catch(e){e instanceof o?ee.warn(e.message):(t=ue.create("idb-get",{originalErrorMessage:null==e?void 0:e.message}),ee.warn(t.message))}}(this.app);return null!=e&&e.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){var r=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){var r=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function Be(e){return i(JSON.stringify({version:2,heartbeats:e})).length}te="",le(new E("platform-logger",e=>new q(e),"PRIVATE")),le(new E("heartbeat",e=>new Ae(e),"PRIVATE")),ve(Z,Q,te),ve(Z,Q,"esm2017"),ve("fire-js","");var Te=Object.freeze({__proto__:null,SDK_VERSION:ge,_DEFAULT_ENTRY_NAME:re,_addComponent:oe,_addOrOverwriteComponent:ce,_apps:ie,_clearComponents:function(){se.clear()},_components:se,_getProvider:he,_isFirebaseApp:de,_isFirebaseServerApp:function(e){return void 0!==e.settings},_registerComponent:le,_removeServiceInstance:function(e,t,r=re){he(e,t).clearInstance(r)},_serverApps:ae,deleteApp:me,getApp:function(e=re){var t=ie.get(e);if(!t&&e===re&&h())return be();if(!t)throw ue.create("no-app",{appName:e});return t},getApps:function(){return Array.from(ie.values())},initializeApp:be,initializeServerApp:function(e,t){if(d()&&!u())throw ue.create("invalid-server-app-environment");void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1);let r;r=de(e)?e.options:e;const n=Object.assign(Object.assign({},t),r);if(void 0!==n.releaseOnDeref&&delete n.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw ue.create("finalization-registry-not-supported",{});var i=""+[...JSON.stringify(n)].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0);const a=ae.get(i);if(a)return a.incRefCount(t.releaseOnDeref),a;const s=new D(i);for(const c of se.values())s.addComponent(c);var o=new fe(r,t,i,s);return ae.set(i,o),o},onLog:_e,registerVersion:ve,setLogLevel:ye,FirebaseError:o});class Re{constructor(e,t){this._delegate=e,this.firebase=t,oe(e,new E("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),me(this._delegate)))}_getService(e,t=re){var r;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(r=n.getComponent())||void 0===r?void 0:r.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=re){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){oe(this._delegate,e)}_addOrOverwriteComponent(e){ce(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const Pe=new p("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});function ke(i){const a={},s={__esModule:!0,initializeApp:function(e,t={}){var r=be(e,t);if(g(a,r.name))return a[r.name];var n=new i(r,s);return a[r.name]=n},app:o,registerVersion:ve,setLogLevel:ye,onLog:_e,apps:null,SDK_VERSION:ge,INTERNAL:{registerComponent:function(r){const n=r.name,t=n.replace("-compat","");{var e;le(r)&&"PUBLIC"===r.type&&(e=(e=o())=>{if("function"!=typeof e[t])throw Pe.create("invalid-app-argument",{appName:n});return e[t]()},void 0!==r.serviceProps&&c(e,r.serviceProps),s[t]=e,i.prototype[t]=function(...e){const t=this._getService.bind(this,n);return t.apply(this,r.multipleInstances?e:[])})}return"PUBLIC"===r.type?s[t]:null},removeApp:function(e){delete a[e]},useAsService:function(e,t){if("serverAuth"===t)return null;var r=t;return r},modularAPIs:Te}};function o(e){if(e=e||re,!g(a,e))throw Pe.create("no-app",{appName:e});return a[e]}return s.default=s,Object.defineProperty(s,"apps",{get:function(){return Object.keys(a).map(e=>a[e])}}),o.App=i,s}var Me=function e(){const t=ke(Re);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){c(t,e)},createSubscribe:v,ErrorFactory:p,deepExtend:c}),t}();const Fe=new R("@firebase/app-compat");if(d()&&void 0!==self.firebase){Fe.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const ze=self.firebase.SDK_VERSION;ze&&0<=ze.indexOf("LITE")&&Fe.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const je=Me;ve("@firebase/app-compat","0.2.37",void 0);return je.registerVersion("firebase","10.12.4","app-compat-cdn"),je});
//# sourceMappingURL=firebase-app-compat.js.map
