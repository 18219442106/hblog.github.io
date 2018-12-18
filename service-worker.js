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
    "revision": "a6355ae7a7c13c437fa30257211bfe95"
  },
  {
    "url": "about/index.html",
    "revision": "e935d147b335fb0464c552cec717f204"
  },
  {
    "url": "assets/css/0.styles.2d62b11f.css",
    "revision": "9596c196db74abe5aded1684bb83cb1a"
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
    "url": "assets/js/app.af412ef3.js",
    "revision": "bce96f76dd587e37362ccc2c360dfc88"
  },
  {
    "url": "head.jpg",
    "revision": "d09538362a48e69a391ac800e9e41c41"
  },
  {
    "url": "index.html",
    "revision": "10bfde14b15cd63e2ef5e894a4f46f5a"
  },
  {
    "url": "notes/document/default.html",
    "revision": "92672839f82ed039efc08f2edf25da01"
  },
  {
    "url": "notes/p1.html",
    "revision": "8835250f6a1fca4f5b6ce2978aea8cf5"
  },
  {
    "url": "notes/p2.html",
    "revision": "c73b9719728b2706298b423bc604af87"
  },
  {
    "url": "notes/personal/20181221.html",
    "revision": "e786c8008bc90fc6139a3dedaec8d3d6"
  },
  {
    "url": "notes/personal/default.html",
    "revision": "d0038e35f204192167789d3e1873a635"
  },
  {
    "url": "notes/project/index.html",
    "revision": "dc0d5ee72dff9c97b8329211e2c32c4b"
  },
  {
    "url": "notes/project/project1.html",
    "revision": "13af8c78d8c8c4d2522336e72d8e736b"
  },
  {
    "url": "notes/project/project2.html",
    "revision": "d87cdfbeed854cbaabb8203e2fd1e434"
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
