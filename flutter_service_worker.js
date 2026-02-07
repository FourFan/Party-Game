'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dcf5b7a2d61a98cd1f3004eccfa20ef7",
".git/config": "6433c58db9289ab96360ce2e5edbe045",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "876ce60d4192d92f66623e8723dcca38",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a918bfb250d6518fafcc913f07433e6",
".git/logs/refs/heads/main": "b7a0ccbe4645461359a30b9d944c28ff",
".git/logs/refs/remotes/origin/main": "9054b54aab14bd5bec12e5ccce9a841d",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/13/427155ff08a2419db0707773da55c46ad07717": "394a76cca7088a9d71eb1a938a2dff88",
".git/objects/17/2a34ab35ca1da8ba0aaf31764564f3f2e48cad": "fbf8ba706db2a26aa25e59eaebd3e0bb",
".git/objects/19/1be11206b839b46187a0ed1265947d66177bd2": "4270329436059ca439a1c0964bd58be9",
".git/objects/1b/3a883371d2ad81cd6b2a539518567ffe400a0a": "7dfd74696ed7bddd81511533c8ba773a",
".git/objects/25/97fa22d5e105268b0c991a8bb249c0a897dd0d": "c293a32d1c99a595fd5af565271b0e7f",
".git/objects/28/867307f9f8dde346344d702dd482a60d86a7d8": "bd7b4fdd32243812e83787f6ab01c4ae",
".git/objects/29/fd369b891d267ee83649eb8c63390ae16b824c": "80f918d09fb6bc7e504aae0719e4631f",
".git/objects/35/a17cca2fba061ce46a2acb954b0317bfe0008b": "8652d39e82b5c15f9d0922a6b0ca2cd4",
".git/objects/39/63f11b5a8b1ab2bd9d437debcb695c96a3ec5d": "607b2892af37e9ca66e5365fa41097ff",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/e311a384d500a0636e18d70b7eb92a29fe0012": "9dfca1c7d802594ec45864ca06340884",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/5a/425033e7399cf1a3eabc3d1f8c0e2e8c085a1d": "6f23f657d233ef35a174efc8947f115d",
".git/objects/5e/f4b8e907bc27b8431a4d51ec9adc19a13b8fb4": "1c371ed00f5559b9afe2da09004fa2b9",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/3f7c017fdaf36411a87e00dffb9482d3badc21": "91289cf8ce3b32514d2698a15bf48a30",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/e2794b3c4691948989918256c99ac1dfdcd24f": "de7fd335e843550200a3c31b9f4c7d2a",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/80/838c1ac84b1001ed10c4e6656954116f44e0bd": "267e08dc478744df4141f7a8c1681eb8",
".git/objects/83/2f06f3025fe54abd082fdf4e7772d65051773a": "8ebf5bb68a1ef84fae521a5ec0ec61a6",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/92/a22d2780b504bde303e73b14e3783128caf8f9": "c624737554a65b4b5f3b2f5f16c3a37d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9a/e2539b3c7906f2ff15b4906a0274d58d205ef8": "2b2271d40c4a7ebd60db6214748d25b5",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/7f8183f3c41054e0ec76b6c08a930d39df577a": "85fe903e70336f494f764acfcf100caa",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/19a4365e41d65a5b7e6595d41297710b78e87c": "8c72512879abc000eb0b0454b0d51632",
".git/objects/b2/3a06b060091f5ed69e8b3a30cbb05801516f8c": "606909536001f48dce63c074e17099d3",
".git/objects/b3/5aa0a30017519b220bcdfb2fd5fb74a638fdfc": "d5c66784cb0564f98208a283d3a27f30",
".git/objects/b3/7d04d5dfbdee1d5f2baaf799f95d50de0d0e53": "d1ba5de6c1af7a968405e60c9cc0376b",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/0ec3516e0aec01e124a9b6d286242d2a61af8c": "75a35979b25d387ac26a77c489c284d4",
".git/objects/bc/1b372d987b2b19f5cfcc653a056731bd8c77c3": "a925cedd3a24cb2bde5c63ab5d9892b4",
".git/objects/c0/95ce3a37846f1ff4d0aee4c8e6bc7ae7731b45": "83b6abde4f8d492c3e91051105635f7c",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ce/df0813a768f71a84dc6077d55d23aa0b7d12f4": "f49cda1f9df46bd62db2185af5fdc534",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/39ebb640f9a1bd3df56f635bdcf574dbe90510": "f89882deaf5293c1a4a44901543a9d18",
".git/objects/d6/c2c964eca069eb7f8ef94e80545fb15e5ad717": "4925fba422cc88854b0157a43317c5b3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e1/fe80700afe0a490e2ba78ca3205ba391e34a29": "8a243afcb3ee3db8cbe97517787fa47d",
".git/objects/e9/1eba5a539b386c6087209f0e9469a4e327d260": "29bbc81994c039bdbf38f39f90f198b4",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/58e579dc741f709bc4ff3cd26827998fd000d6": "b7d02386c5b6c740656e150993c5cab6",
".git/objects/f2/d2978abb35ba648e26ab16dea2d1b7f8cba814": "9a277375cfc1b4220bc8fd0cd79873b3",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/849e18009d7643f5cae6ebebb32c5a1799438e": "ccb0b5077eb06527ce12eac88eee7005",
".git/objects/f4/e38dbae280c38d45d78a2f841847bc77ede7b0": "b6366b85b4bea90dcd2645ead3a25426",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/66c5b1bc14d801903dea9017e182d489ea0202": "50efe97ef17927bf5af7c8303f8b6d71",
".git/objects/f8/4128cf7266878ec99367d3128a2b804091adba": "cfb4480fe0f98de2c8f874a36dfbaa1b",
".git/objects/f8/7a33aacc949c98c829840d3475e0dd63e87e3a": "3934ea9317c733d0b340f3095c234d53",
".git/objects/f9/0ec4094e7d1ffb1ae0f9a590e4bf18e92640e3": "d6b7ea9e1c84f3d2f76651017d396c9f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "721d74fa84d1f03f2f6792235edc6ee7",
".git/refs/remotes/origin/main": "721d74fa84d1f03f2f6792235edc6ee7",
"assets/AssetManifest.bin": "2243321b65732a92ab02166c81251d0b",
"assets/AssetManifest.bin.json": "d7152091e29b8c2efd746df80757cc56",
"assets/assets/charades/topics.json": "8d1745e18821c0fcecb33159b379246e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4b07c7c300e2f26967d38dc2d972caf7",
"assets/NOTICES": "63f09d9d3f70d241f162f63b39e51317",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"callback.html": "bce53b595da5ecb438015b87e52ec557",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "8c924a31cfc304d0a79a88eed7f00e72",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3f7485366ba914c771f8b75732fdc913",
"icons/about.txt": "90bb0e49d76450f6381f3792f002799b",
"icons/apple-touch-icon.png": "cd57f3fe2bb7d4377c51d45d3f655f17",
"icons/favicon-16x16.png": "30afcee75d5f8f2fe918bf1460e30be0",
"icons/favicon-32x32.png": "8c924a31cfc304d0a79a88eed7f00e72",
"icons/favicon.ico": "ed628b3d58030fbd1c11dab170df6c14",
"icons/favicon_io.zip": "25d99ec8bd08f1254aa634352fe30716",
"icons/Icon-192.png": "75d92481f5e679fb404e236a3f516aae",
"icons/Icon-512.png": "e3e9d4c54dd81c5b67fc56274d958803",
"icons/Icon-maskable-192.png": "75d92481f5e679fb404e236a3f516aae",
"icons/Icon-maskable-512.png": "e3e9d4c54dd81c5b67fc56274d958803",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "fc741b9674157e614a97befb76e3e5fd",
"/": "fc741b9674157e614a97befb76e3e5fd",
"main.dart.js": "55569b0686d0ef607c364ee1832cc699",
"manifest.json": "745bffb1ef0995fc6d689ab82fe48a6a",
"version.json": "b6927f0f8acf8c258ec592cbaff57e4c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
