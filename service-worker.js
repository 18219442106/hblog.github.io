/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9860676069d77c870cae23a0b3db5643"
  },
  {
    "url": "about/index.html",
    "revision": "844ddbf69a59f03119b129244a08b890"
  },
  {
    "url": "assets/css/0.styles.4313f343.css",
    "revision": "23dd9d1131fc0afd93150aea7b5b5264"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d638597c.js",
    "revision": "888e9b252dab45d88700e492ec919dab"
  },
  {
    "url": "assets/js/11.095003ef.js",
    "revision": "ecc763c2ce511211aca5897bea5c3084"
  },
  {
    "url": "assets/js/12.e754056e.js",
    "revision": "abff7e5530fa6b37d04a1bfb4f9d2aa3"
  },
  {
    "url": "assets/js/13.b29b96e1.js",
    "revision": "8b97faad765d1672d730f12da54f1b7f"
  },
  {
    "url": "assets/js/2.1f2ab8b1.js",
    "revision": "973b89f03472623627cdb0547753463f"
  },
  {
    "url": "assets/js/3.4451fc07.js",
    "revision": "e3e727e3c07db2088586c76d7ee18aa2"
  },
  {
    "url": "assets/js/4.8a0979dc.js",
    "revision": "93eb25f39311f8f6cba981c6f7723dd9"
  },
  {
    "url": "assets/js/5.f4b482c7.js",
    "revision": "f367ea036d8bb000afa8f9cd0ccc4515"
  },
  {
    "url": "assets/js/6.1d3fc996.js",
    "revision": "12afe1bd2d37f03e428a1eafa5308a9d"
  },
  {
    "url": "assets/js/7.6677b274.js",
    "revision": "911ee8893b73b3f3688be924930741a7"
  },
  {
    "url": "assets/js/8.35022665.js",
    "revision": "ce602057a5f4c8c63565915baefb36c1"
  },
  {
    "url": "assets/js/9.994137f9.js",
    "revision": "b8a08a392f3ef36944fa9b7218eaea6f"
  },
  {
    "url": "assets/js/app.7e6641b6.js",
    "revision": "1a318ab80232b42fab1b0a6ac37192fc"
  },
  {
    "url": "head.jpg",
    "revision": "d09538362a48e69a391ac800e9e41c41"
  },
  {
    "url": "index.html",
    "revision": "657e589f8ca48e80701cecc456722fe2"
  },
  {
    "url": "notes/document/default.html",
    "revision": "18a21dd21a3a4966c109134a7167d4c6"
  },
  {
    "url": "notes/p1.html",
    "revision": "b3a9ee67b806e298b9f5e833c291884f"
  },
  {
    "url": "notes/p2.html",
    "revision": "a9a195d9afa6f5aedc6544ace14b5577"
  },
  {
    "url": "notes/personal/20181221.html",
    "revision": "fa0faa0399950d6c3a54f78d19536df6"
  },
  {
    "url": "notes/personal/default.html",
    "revision": "edc3de1335637307f5d445c5e887f075"
  },
  {
    "url": "notes/project/index.html",
    "revision": "e51dacc3967fd96139a415f66ac55541"
  },
  {
    "url": "notes/project/project1.html",
    "revision": "65f602c958d0aaab8e8764c20504ac57"
  },
  {
    "url": "notes/project/project2.html",
    "revision": "8385bc84cd8623de0b816710c720f99d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
