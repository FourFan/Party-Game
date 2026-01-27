'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2bfa01d0dedc4b5469d7fcbf365792ed",
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
".git/index": "b0f875fc0e4138f77bd088d58d481338",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b7e68222799f710f48c48b65d197da4",
".git/logs/refs/heads/main": "525f82aa8df152a11ec2b711ea4cf619",
".git/logs/refs/remotes/origin/main": "d697f99c594c212abeccaf564064cffa",
".git/objects/01/dc6babcf753f6fa857f3947509d5162f774a5f": "446b5a4af5d76d36cfce4ccb971b700d",
".git/objects/03/8324efa18ba8184971940d46e351b1edbdc52d": "b676692c3d93092e266a71d1fc67266e",
".git/objects/03/9c91adbc966235bbd81713d4297724b3772cba": "b7052f7b8b13aa80dc544bbaa10e7d7d",
".git/objects/03/fda0bb5772638afa4e00a715fd36c1d922de83": "6d93a6cd1db2ae9ccbcb812a3b76997d",
".git/objects/05/58b357b60b81193131b5e83b8b25c98a01a0d1": "7b19c645f3f7572ad0c47576e61ad042",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/11/722440cb64bec8d23c806c2fb0532bc35144d8": "551b8e42049b80eecfe0e68e74fb0dbf",
".git/objects/11/9a2031a8f597855627944611193f5354a815c6": "7483baab69481e92f61528f47565446d",
".git/objects/13/427155ff08a2419db0707773da55c46ad07717": "394a76cca7088a9d71eb1a938a2dff88",
".git/objects/19/1be11206b839b46187a0ed1265947d66177bd2": "4270329436059ca439a1c0964bd58be9",
".git/objects/1f/eefc1f4a6c6d3b65c52ee9e3f02f819247e7b5": "363d4f72c34b667bdc8b2a3848885096",
".git/objects/23/fe02f05765494c18f2662dfbc2daf101258475": "b9ed1a4ab7281188f319cb3f292e0ad1",
".git/objects/28/867307f9f8dde346344d702dd482a60d86a7d8": "bd7b4fdd32243812e83787f6ab01c4ae",
".git/objects/2e/c3ffa700114b5a34c60229dacbb591751403ab": "685b02ec6ae54049053810106a244e64",
".git/objects/32/547c7ade95e9830f63ef6b769695ccbfbec0a5": "8d53cb7321c42c41167a60d3bab933f0",
".git/objects/33/dffdf6c2bb0e79f8647203fe9f51e34d406f53": "81ccaf01e69d54b9def4f69b57bf2901",
".git/objects/34/4c6a8124063f239384707a4328c1deb351f358": "c828bd11aa8eac31886c985ec482664f",
".git/objects/36/460b14a54e40c6afb31e5b41b1bf0a061eb78b": "76e40ad4761b93efa33d6d39100369b7",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/0941cd05683af2d0b5380ef23635a6852978ac": "f468baaf18da3d0a8917e90666a8e9f8",
".git/objects/3c/58e987fffa30b34cf893afe2763581f546e25b": "25263f2ccf1dcd8e6e1b73873a6512db",
".git/objects/3d/4aa67a8efc735258148a4e61d8fb46f9724205": "4c1a0d6678082c3e3ce10092858c918a",
".git/objects/41/3405f635ec71c6f51d11afe3ec534a48314fcc": "f90d3a6a93afb51674b95c9021a53aa4",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ca5d61a3f3205d1dac746b90a9618d0dca5e17": "542bb5b394126afdf85a6e5709e3e2d4",
".git/objects/4d/9af07dd39c197b3fe8d8df8fcbe0ff05b48eee": "d3a71ba1ebd6177569d982cd05e6920e",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/d8544a1fae025fc7af6166116e53b70c1504ab": "4a3bc74fda2aefee847dca18b728da99",
".git/objects/58/340c8811ac38ce9169ca96d59fb70c166c84a1": "0b8725acec119181c582f4b9b061bdca",
".git/objects/5c/5ca540d546894785d493e657d181019597fc6a": "06f17e352ea84bcf2453746b5ffcca37",
".git/objects/5e/1973ca4e97cfece3fa639d0f8d2b2cf224e1e4": "a4bf183918027db4d0ba736184e44361",
".git/objects/65/40c5e8e12516565e2bfc02b2b09baa110ea551": "c3ece6356897a5139b3f857e7b854a1a",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/9cce3668f93ae86256d99341bffbcf077c94de": "093a12a0e81c3f3f452e9613d3daf74c",
".git/objects/6c/3818404659e68035bfff1b33bab8554aabec94": "21b9eeae3b0477ab9238dc09453b70f6",
".git/objects/6d/3f7c017fdaf36411a87e00dffb9482d3badc21": "91289cf8ce3b32514d2698a15bf48a30",
".git/objects/6f/30c0648d1e381ada4b249176765428335d293b": "1439880efc30cbe26c59e47ecd861156",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/df88a484a5536c5a7254e41f2b3838a648514e": "775df07e2f9493725ebb7863284d1f47",
".git/objects/73/ade08e2831e4fafe0753542363f8b1c6debcb8": "b250c348e2f3261556f7a6377f447188",
".git/objects/74/288e04a6105b2ad8ed923c33d6c67b18c87119": "ea2d712c855bc9e8e6914bba799469c2",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/83/2f06f3025fe54abd082fdf4e7772d65051773a": "8ebf5bb68a1ef84fae521a5ec0ec61a6",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/32fabaabc63a99351e6549935c2aed8f04f351": "fcb7b14b772f9f09cdea5ca660e456e6",
".git/objects/88/b2112b46f2de1d03aafd6d506140146069991c": "866d25a4510cd254c60083116dfd1184",
".git/objects/8b/fbebe36cf8f65413d03e0b3ac028f608caf7cb": "631b33c7003c2d501415567be86f5c0d",
".git/objects/8c/5ae173c2ece5864869f44532696fa90cf4aba2": "269338ac0931838298ab3965853bc392",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/a0a41d6cc9cc81a5fa48fbcecd84c814696550": "22ae512e96c5655e56625eaab1ee7f31",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9a/e2539b3c7906f2ff15b4906a0274d58d205ef8": "2b2271d40c4a7ebd60db6214748d25b5",
".git/objects/9b/f3babeaee54580a34a4d721d147a91b3d1bdc0": "85f64f24ca68165b441479199b32e1fd",
".git/objects/9c/e064eb675b6648441fae9850f7bedd6d2919bb": "1563dc43ad5b35008e40932b821474d1",
".git/objects/9f/276a85eaac3692b8ac569e82658b9b7994469e": "959a84304b987ce80fdce9715be51892",
".git/objects/a0/6337bb0325bdc8bbb81647b3901da082eae966": "c00a0057b37688fcf8db58ef7c3c7873",
".git/objects/a2/6a460917638dbafc26efad902adbbebeb32929": "b04c38b870178e01edeab386ba8ddbf2",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/6ef957270f7740057c5a0daecff9dfd890cd0c": "b86b93c2efd5ab57e10498cb325f52c6",
".git/objects/aa/f6e59a70546ef86488c88bb64b747ba9f88844": "886b4095496d23806c88072bfe8888bf",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/ec365c7bee1268533002e327eade71e328773c": "5458aaa4a82d8bce5808100ae8e82f65",
".git/objects/b0/60429e7854efe366668030bc4f2fe17acfc132": "2f253b6cb3773f2031ce1a612799c296",
".git/objects/b2/3a06b060091f5ed69e8b3a30cbb05801516f8c": "606909536001f48dce63c074e17099d3",
".git/objects/b7/7865ce3d2d3c6a53f6cd59b3fc5d8a6ea6c267": "319be9e9532ca1683ef8f0244324782f",
".git/objects/b8/bded8512979579b647062236c181c46a90bfa0": "104cee382f331c1376074218d44e4c2d",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/be/06fd2b4cdde214c8e88639b5de66c485b1f201": "ed85df84f0b73b37fba03a868ef84302",
".git/objects/c2/b22445c9911ef1b944f7f1f15b389b3e7b83f8": "ba11a8f530b55ec5e163a10efad6af37",
".git/objects/c6/56485238dda522baaee7811cba6bea0360f57d": "afcf101fd64c7488672c3d0a18f0f8ea",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cc/333aaa6c5bd596767d9f86a8d976157889cb09": "56374facd93f347033afc57fa133df8e",
".git/objects/cc/d8073eeecad4d7ed00a391e73d819c41b98505": "a1e99e0b1a6c8f33b393a584e1534d83",
".git/objects/ce/9e3d2d10d54d7ce0488339fc1296e6447c9278": "8e61eca713c1aa53a3bcf65f73196a40",
".git/objects/ce/df0813a768f71a84dc6077d55d23aa0b7d12f4": "f49cda1f9df46bd62db2185af5fdc534",
".git/objects/cf/4daf3e515ff7483eb9a33df7ed18e82738609a": "23eca6bab49f3a945dae1545d1d5003b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/39ebb640f9a1bd3df56f635bdcf574dbe90510": "f89882deaf5293c1a4a44901543a9d18",
".git/objects/d6/57a034b917af73d544bf819533d0f6ce77cb8e": "88a25ba8419ad969b0d81eaea37d554b",
".git/objects/d6/c2c964eca069eb7f8ef94e80545fb15e5ad717": "4925fba422cc88854b0157a43317c5b3",
".git/objects/d7/62e34b80f2394eac6f679e055d44c532f93ec7": "1e47617ae19c27ebbdda919c07c301bf",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/e1bf95dcdbdfc3307c4c3800b9d88addc44f54": "8e91704e6b9ba1ab8a411ff77017bcb1",
".git/objects/e0/b7e84867616865ab7773c159946d843c33eca9": "76198fb9290679ed4aa84a7d5a12cb87",
".git/objects/e1/2dda5fcd09defc989a9a8602cd2e077dce16bd": "93dd1c20ca8be5e136b6e94a59b73227",
".git/objects/e1/92fa6ceae8b7859f319f56d6ff5561eb7877f6": "33fea142bf5960181877208ebf779610",
".git/objects/e4/548da5e7e2d300033f58553470810bb0377197": "7fe9b9f598480fe961473f41a86a3726",
".git/objects/e8/e7feff719cc68a0fd6a4c5e9c449f74a60f812": "66d38db5a00c6591787d5977f32c2482",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/3d13cd41563ac9f72e84fab56cd781a5fb7186": "e7b36b56690313ec26c82fc4a5375d6f",
".git/objects/ea/cd9b33c847ecdd70a5e6fd47a61fc0b4720e89": "fa6af94c629d5b9a95a8f5c311599a47",
".git/objects/eb/58e579dc741f709bc4ff3cd26827998fd000d6": "b7d02386c5b6c740656e150993c5cab6",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/e38dbae280c38d45d78a2f841847bc77ede7b0": "b6366b85b4bea90dcd2645ead3a25426",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/66c5b1bc14d801903dea9017e182d489ea0202": "50efe97ef17927bf5af7c8303f8b6d71",
".git/objects/f8/6e02cda2da6c048d6b99e86bc5f2ef45fd7b0b": "5bc95b9c284e0f36579edced2cfc6e86",
".git/objects/f8/7a33aacc949c98c829840d3475e0dd63e87e3a": "3934ea9317c733d0b340f3095c234d53",
".git/objects/f9/0ec4094e7d1ffb1ae0f9a590e4bf18e92640e3": "d6b7ea9e1c84f3d2f76651017d396c9f",
".git/objects/fa/163f32b423abf292730cd4f30e5d7815ceb5bf": "d9aa01bda5c3dad43068c1a20069db30",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/01b9c4fa962dddda7b155189f811b5606c2c78": "38e833e0aea0f5ccfe61fc460e8e98fe",
".git/refs/heads/main": "2b610bff5a0a89b8ca82e896386b0716",
".git/refs/remotes/origin/main": "2b610bff5a0a89b8ca82e896386b0716",
"assets/AssetManifest.bin": "2243321b65732a92ab02166c81251d0b",
"assets/AssetManifest.bin.json": "d7152091e29b8c2efd746df80757cc56",
"assets/assets/charades/topics.json": "61199cb477f3b563437a99dafebd47de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b57e70d3b9991aa2c9f1abc9698bea2e",
"assets/NOTICES": "015b30df6b2790624866eb8d4e135c14",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"callback.html": "baf9298bede85df33bd2ff25a335816c",
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
"flutter_bootstrap.js": "c20c19c9e1cd3f43494653a7dd6202b1",
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
"main.dart.js": "eb6d03623e8f5c545c38b97ef4de5dd5",
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
