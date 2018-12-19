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
    "revision": "0631a2e1a19af1aac51e5f8385b2f14b"
  },
  {
    "url": "about/index.html",
    "revision": "ae471ade77faed5621b66060d28f5de8"
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
    "url": "assets/js/5.13b08998.js",
    "revision": "57c57b4f905beec66412e0f618668ca7"
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
    "url": "assets/js/app.03adf5cb.js",
    "revision": "075480ff42ee7f9a07e3519b49faffd6"
  },
  {
    "url": "head.jpg",
    "revision": "d09538362a48e69a391ac800e9e41c41"
  },
  {
    "url": "index.html",
    "revision": "3b0039a7c0eaaee10c65351f884e9144"
  },
  {
    "url": "notes/document/default.html",
    "revision": "a6732465849ff3c11c18fc6f08ab452b"
  },
  {
    "url": "notes/p1.html",
    "revision": "4423b5480e67aa1024bad7b04879b79f"
  },
  {
    "url": "notes/p2.html",
    "revision": "8ea9508355230225eadef4a8c5477e5e"
  },
  {
    "url": "notes/personal/20181221.html",
    "revision": "75f22187d98b425c67458c470bb78ed6"
  },
  {
    "url": "notes/personal/default.html",
    "revision": "4da1e047482dde840bd7fb741ba22021"
  },
  {
    "url": "notes/project/index.html",
    "revision": "79b88165da05036ea52ca289f9bbd45d"
  },
  {
    "url": "notes/project/project1.html",
    "revision": "b5ca06dc2448307e2d10099231f85a33"
  },
  {
    "url": "notes/project/project2.html",
    "revision": "de6f0ef50293a71cc2ab8ecc87180e24"
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
