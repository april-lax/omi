"use strict";var precacheConfig=[["./cn.html","d9caf1d4ec3396bcbb3f5babf3bd23ff"],["./index.html","b6fe474389259c8a294bc6051a559c39"],["./static/css/cn.0726442c.css","10d0b9d602b3b657c55a1385c1844c28"],["./static/css/index.0726442c.css","2767bdf2b32295812e42d9d1a0293da3"],["./static/js/0.37cbb227.chunk.js","72307563dd014fb9565f5391babdd1bf"],["./static/js/1.ec8aa7ef.chunk.js","156ad48883347813404c0ae4bd7283b6"],["./static/js/10.0ac6e10a.chunk.js","427b793d853b377506a1527fc1aa3d56"],["./static/js/11.00dfc203.chunk.js","80b71af0f936c248bb584552564ad73a"],["./static/js/12.0a9d5014.chunk.js","47e14bfefc7f73f90080d9401b93ef91"],["./static/js/13.656aba61.chunk.js","52d58ac8ea747ffefb773eaccbcab606"],["./static/js/14.0152187b.chunk.js","1bb58d01a15ae31d0848d378d5b56743"],["./static/js/15.27aeed39.chunk.js","6cb73b43ead91490c19a134f96df3d1b"],["./static/js/2.741fe37b.chunk.js","aff4ce5368531b1ef0c6817881e3395f"],["./static/js/3.bf548b26.chunk.js","5c06567492efa0d51453812813a7192c"],["./static/js/4.b457845e.chunk.js","ebe4d81bd7efb1ce8659a622cf47919d"],["./static/js/5.c5155543.chunk.js","b5d15357a0f24edf59277a40dd8c435c"],["./static/js/6.1a6dfacf.chunk.js","4deade21df4e2c258bf406a0c7ee17c5"],["./static/js/7.2d9965ba.chunk.js","876474521fabbc74523b52b9299b452d"],["./static/js/8.88568921.chunk.js","766908a1c4ecc31540e63f2c3c992957"],["./static/js/9.f6532494.chunk.js","dcf2819de177dffd59e5a277c67ac01b"],["./static/js/cn.a7616ab1.js","118d004fb71882e60e77bc51b43ae7ae"],["./static/js/index.59d819b8.js","218c430b4ee5f69fc7e11c6b7c062041"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,c){var a=new URL(e);return c&&a.pathname.match(c)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],c=new URL(t,self.location),a=createCacheKey(c,hashParamName,n,/\.\w{8}\./);return[c.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,c),e=urlsToCacheKeys.has(n));var a="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});