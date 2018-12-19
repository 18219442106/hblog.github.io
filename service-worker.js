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
    "revision": "23a0640a11c21a563033d11884666180"
  },
  {
    "url": "about/index.html",
    "revision": "c8c973aac45c6be570992864868cb8ea"
  },
  {
    "url": "assets/css/0.styles.f672403a.css",
    "revision": "bb8e90bbf5718b9015461971e99ae6cf"
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
    "url": "assets/js/app.938c3ea1.js",
    "revision": "a1e9168c82590002483543339b8bb5a9"
  },
  {
    "url": "head.jpg",
    "revision": "d09538362a48e69a391ac800e9e41c41"
  },
  {
    "url": "index.html",
    "revision": "de71a21dbc3881a2299a55bd05f0ef09"
  },
  {
    "url": "notes/document/default.html",
    "revision": "a9032ae5ac68d415985f38d2223eec35"
  },
  {
    "url": "notes/p1.html",
    "revision": "856175c925d56843b22262240fd42aef"
  },
  {
    "url": "notes/p2.html",
    "revision": "b697bed79f881d7ac6316348399f63ba"
  },
  {
    "url": "notes/personal/20181221.html",
    "revision": "9792113d7744d90637b01397e29f8552"
  },
  {
    "url": "notes/personal/default.html",
    "revision": "7457a315777fd7a4ab250525edb08004"
  },
  {
    "url": "notes/project/index.html",
    "revision": "ae13459cf78dd50553f7ba09d1d4a049"
  },
  {
    "url": "notes/project/project1.html",
    "revision": "3244bac0af76be62aa5f20f04fdb586e"
  },
  {
    "url": "notes/project/project2.html",
    "revision": "c06109cd2be8f401b26e8c8c2d7eca7f"
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
