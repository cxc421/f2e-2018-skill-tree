"use strict";var precacheConfig=[["/index.html","be16842bcf90fdfe9b44f174488b282c"],["/static/css/main.b6254f17.css","80aa1c4691f600917763d5a33b74db98"],["/static/js/main.dd7864dd.js","12c9571ad96affdb1d84dd43ed9692ff"],["/static/media/img_axe@2x.06da60b7.png","06da60b7d56952cbdd3c75600bc5176f"],["/static/media/img_blade-1@2x.eeb4b328.png","eeb4b32858e90819b30575e9ffd7f801"],["/static/media/img_book.aeacf9f4.png","aeacf9f4d38d819400106297ecf8780f"],["/static/media/img_book@2x.0cd2b441.png","0cd2b441b5a1b73c084fd42352e1ef16"],["/static/media/img_chest.3b38a374.png","3b38a374f6077b7e442233388f2d55ca"],["/static/media/img_chest@2x.87ed164d.png","87ed164d7f052bddf3a12b40122728ad"],["/static/media/img_emblem.28a449e1.png","28a449e1151f5c59427695ffbee45c42"],["/static/media/img_emblem@2x.8176227d.png","8176227dd24e484cf501ef145419dc5f"],["/static/media/img_footer.bca4141e.png","bca4141e2ee80007e3a43c736c736651"],["/static/media/img_footer@2x.6bc764e8.png","6bc764e848f1de49cd1ec4d23afc8f22"],["/static/media/img_hammer.d936361d.png","d936361d62ee6003b655b388d41be43f"],["/static/media/img_hammer@2x.53d0aa52.png","53d0aa52d2c8764f3ff1833a9ba60513"],["/static/media/img_hat@2x.6b5238df.png","6b5238dfe4d08913f874dc2c91bc4e0d"],["/static/media/img_hexcat.44898020.png","44898020adef815008d6a1c147016bc8"],["/static/media/img_hexcat@2x.8e51f085.png","8e51f085bd3face8804fe6ca33c59a23"],["/static/media/img_horn@2x.d64ebdce.png","d64ebdcea7f4f15ad3aeeddf161c94c4"],["/static/media/img_meat@2x.31352d3b.png","31352d3b46e00d74a5bce314fb731c6b"],["/static/media/img_monocat.d934ea6f.png","d934ea6f3be53d2111c7fcda62741d16"],["/static/media/img_monocat@2x.3548412e.png","3548412e1523c534391716b71a810770"],["/static/media/img_padora.0d6b856b.png","0d6b856b9b11c1ea47b3e02251c5d30e"],["/static/media/img_padora@2x.3a4fca11.png","3a4fca1142ab4f5a295f5310a16450b8"],["/static/media/img_planet.eaa285b0.png","eaa285b016795d3d813f007fd8627d68"],["/static/media/img_planet@2x.3dfdb55f.png","3dfdb55f6bab552a02b64ceaa3a74b5a"],["/static/media/img_quill@2x.6f9777c6.png","6f9777c689ede6c93239095d8ef6b450"],["/static/media/img_red-chest.c8fed405.png","c8fed405d6528a20a3df1b9e194abfa5"],["/static/media/img_red-chest@2x.6ab00b53.png","6ab00b53cc543483bee9b24572a5a094"],["/static/media/img_red-yellow.a30cffd4.png","a30cffd4b91d35cc007971bae8364571"],["/static/media/img_red-yellow@2x.68aaa619.png","68aaa61991d9e73e3562c08e9bf2cf94"],["/static/media/img_rocket.8b5b751b.png","8b5b751b42016b73a71e721d976002cd"],["/static/media/img_rocket@2x.4587245b.png","4587245b7eb298b1d7ae6c9d858af69a"],["/static/media/img_shield@2x.3f28f32b.png","3f28f32b25f7000ac9043641efe9d325"],["/static/media/img_sword@2x.da126ba3.png","da126ba3699d43c1e919225afe93ddd4"],["/static/media/img_text@2x.06f42813.png","06f42813749f2089cdd9003cfb8ab234"],["/static/media/img_timer.1f78780a.png","1f78780aeb9f1cf93558e4cfc51c111e"],["/static/media/img_timer@2x.8ea1cc4c.png","8ea1cc4c019ac47af3840f20e641e1e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});