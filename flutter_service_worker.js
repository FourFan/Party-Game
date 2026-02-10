'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "14850cb08571c0a91a72b5baa6b09661",
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
".git/index": "114612a407c28eddc2fe553da3f87f8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a10a0e4bb77b84a3a888603fb6c6925c",
".git/logs/refs/heads/main": "8edeb3775077122d8273e83054862d61",
".git/logs/refs/remotes/origin/main": "30114bbb85ae9fae927702d4a7338396",
".git/objects/04/e5e2dfe70aba48b6d62ed2db95fc497598952c": "cf4664f7bd31197cc8ca6e2ab692b6f9",
".git/objects/07/77dacca9e68600f7cc7a6715ff29398b2133cf": "f10f8d11fa9d58c7bcdd3458bf253d20",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/985303a62ff6ddc94a42d82d7ecda934fca54a": "6f52858b7727d68b8623cf473bb0dd4b",
".git/objects/0c/5dde3069f39374a6a8030f9215265981983e75": "27e8b89112e9d2f4bb9c8ecb1da844c8",
".git/objects/13/427155ff08a2419db0707773da55c46ad07717": "394a76cca7088a9d71eb1a938a2dff88",
".git/objects/17/2a34ab35ca1da8ba0aaf31764564f3f2e48cad": "fbf8ba706db2a26aa25e59eaebd3e0bb",
".git/objects/18/11a88818850687b7a45154ec6306841a3ff3bb": "fe87be9d3b0dabffa1fcf96ba721b7a7",
".git/objects/18/43a961a521feddb7e292edd4a46522810c2e86": "a9f6fbcaa8e2c13365b2bad24ea2c734",
".git/objects/19/0cb8eda6615b8e52cd8afa4a75173a0807111b": "90cddde57fc5c6fe694e53b711db8abd",
".git/objects/19/1be11206b839b46187a0ed1265947d66177bd2": "4270329436059ca439a1c0964bd58be9",
".git/objects/19/565c5bb323d216fda3657cbd8af3ee7bef7a6e": "4f2f66929e3547840e2c17e46f799513",
".git/objects/1a/3a6403f0341dc5b9b7de708ec4853a1c96e46b": "e1a126d1edf056128b9c006a7c29cc55",
".git/objects/1b/3a883371d2ad81cd6b2a539518567ffe400a0a": "7dfd74696ed7bddd81511533c8ba773a",
".git/objects/1e/af748fadf4b9842b8826f71872391126f265a0": "458941d3181289a71c916debc09d2bf1",
".git/objects/1f/2ceede4aa71bbf5c990b00d040df06f5a14434": "5fddb55929c8c471319ac7c693a40225",
".git/objects/20/2979819eb1ad72118b12c9cd3aa470eb7a7f69": "b04174ca375845251f5be0997b7af23e",
".git/objects/20/46414629dbbe39437dd35130e5a28f70c43d78": "a4be4f86b6a109143c334d4216bf53b8",
".git/objects/22/da0c1d6146155a83d8d23a8441aa4128ee6792": "7cd159e0c19c6fb33d7656d82eba3812",
".git/objects/23/7089f3b782f4713fb562f840b2b17430b0491d": "f9759390ddd98b8027c5ee7281d96492",
".git/objects/25/97fa22d5e105268b0c991a8bb249c0a897dd0d": "c293a32d1c99a595fd5af565271b0e7f",
".git/objects/25/ff58f8c21c17b32b1d49e0a0a98171b890e064": "d19d0f279d0b21833a48d7d15acd27fc",
".git/objects/26/d171a5b5f3cbd2efdfc675ff79b2c33912accf": "ae7d14c6f807ee99e254aad08d9bbbef",
".git/objects/27/a8ca62ddcb9f22a08d6987da6337b5ed0596dc": "06c810304db6cf759d8c673d226dc8d8",
".git/objects/28/867307f9f8dde346344d702dd482a60d86a7d8": "bd7b4fdd32243812e83787f6ab01c4ae",
".git/objects/29/8d59978e54d93881bc73d88142b11f710d83a7": "cd214842bacbee91397993fc449f96f1",
".git/objects/29/fd369b891d267ee83649eb8c63390ae16b824c": "80f918d09fb6bc7e504aae0719e4631f",
".git/objects/2b/0d7cb087f0d8174c1537edc14928a7fcf4c25b": "27d8583966df1a7861a657ee7a5b8302",
".git/objects/2d/592bb8c40c02fa2eca261280c97f08dac0d7e0": "b063a30f21a14710cc5ecc95af6a8b38",
".git/objects/2f/887a43292c4a7ada09458cc651abcc2f520f7e": "e3d46e6d68f6502821cb0eb84644340a",
".git/objects/31/42b6dc1f41a4f8938971e70ecf5c7b6616cea9": "5e7c6ef4052160a615d45e1f90b03296",
".git/objects/32/d8ac4edb031221d2012f6505d1929f4bf98b0c": "6ff838d6659a0d5f4a0c1df7b3077c70",
".git/objects/34/077b7e6bccb1f423ba29e52a77e2fd2978d7c9": "b54f002c521c81cf1bc100e861f2fd31",
".git/objects/35/6f20b0fd1b79ee3434c7b0018137e694d58a5c": "df70c997ad869c910fb3c61debd25e63",
".git/objects/35/a17cca2fba061ce46a2acb954b0317bfe0008b": "8652d39e82b5c15f9d0922a6b0ca2cd4",
".git/objects/36/626c103d1d361ced139f8329160f1f64a0b070": "94d1c01351c83e795ba253d2b56a2480",
".git/objects/37/bec9b6fd1d3f7fd18532b14497b2621db258da": "2f99c4a8f3a14b0c158e6d25488e4e24",
".git/objects/37/e806047f7706f53b3a34337a6ca871dd7e2828": "76480a59d5db44a49fedce669110c3f5",
".git/objects/38/8d00e19d8399d5fc7eaf1f23d5f4d6958bde01": "15ff4d80e07e19af02c1860a8ce13afe",
".git/objects/38/eef39386db3b8778823cc3cb3a3f1100d9a861": "69c4bff7e707ba4671cbac9971af50eb",
".git/objects/39/63f11b5a8b1ab2bd9d437debcb695c96a3ec5d": "607b2892af37e9ca66e5365fa41097ff",
".git/objects/39/e658149d1aee3fb0cb04c91f0fe3ff47d6c5b0": "7f968f2440172ce084d5ee2ee6b4516c",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/6c679ba828364cb4e31f541fcfcbd8528f3df4": "4503ec5aaded8ab99ee5352e594c6f91",
".git/objects/3f/2a1e5bf3b336a2e016b0af343c814e91f757c0": "d150679ae88230f640a4e3d4e82e7028",
".git/objects/41/9ad84841be930804f6ba0943a37564aedefc57": "9cc985e5b8828c7e5c0e86a2c5da7548",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5817691fa817751c4adda622817bf1f03a145f": "f0c466d32c6b52a332c04f2a39535567",
".git/objects/48/35f0b3b4364aefa391353a1aedb3851d71bbe3": "1af126f393c60a851bf6928ec24e5f88",
".git/objects/48/7b67f75b78148a8241388120346c0196e19056": "6ea92a18e2d4344a4b3b2d82ed71e225",
".git/objects/4b/1dac551fbc54523674b7e967c201794d533417": "e3f8b7fa1b47b54a29e5f9912bc0b048",
".git/objects/4b/e311a384d500a0636e18d70b7eb92a29fe0012": "9dfca1c7d802594ec45864ca06340884",
".git/objects/4b/e981be2eb73a1ba5ac89cfc4a13ea54638cfe0": "387fc70fd2f88d7a6d9b276457076eb7",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/7da0133f873ef471fbf3d487dfbad64893f265": "b21cb9aefae3c9197154b7eaec257ccc",
".git/objects/53/3125416513f2848c351bc788fc89871ba4c466": "3338bf25347693863623279eb17af8a4",
".git/objects/54/9adde560d87fce85acd3fda2c2fe736d993c9c": "46e8a8ea3e03a5a310d0369e32587556",
".git/objects/57/b50de038b0347083b173153c6faa2a94fd2fa0": "8fcf61e5971f5edc7a74be1bd2a4cb7e",
".git/objects/5a/425033e7399cf1a3eabc3d1f8c0e2e8c085a1d": "6f23f657d233ef35a174efc8947f115d",
".git/objects/5e/f4b8e907bc27b8431a4d51ec9adc19a13b8fb4": "1c371ed00f5559b9afe2da09004fa2b9",
".git/objects/61/85f59f8e61e07cfc112b924b5ef2255946e931": "69064408b4206f27a25a4304b9dfafd7",
".git/objects/64/4334c907ea7fa7489414b906ae46cc8e47c71d": "9a40dc63d6996c92eec950b3241dcfda",
".git/objects/64/4a79dca71f85a617fb4b140ed9fd4fce63cdb7": "945493bf33c773c25d4ce7c4c0e772e7",
".git/objects/67/59ea88896c37ea2b3485912ef874fab61c4136": "913218c72e8bdce24617eaa2c65a2c2d",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/66bb78dd77da3e9e8d816f61af15a215d21e30": "b71e78ea079a46385dd1be6295458259",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/3f7c017fdaf36411a87e00dffb9482d3badc21": "91289cf8ce3b32514d2698a15bf48a30",
".git/objects/6e/b2bb1388fd58a92b10f56b71a2a0637374a80b": "c1a607eea553b696bdebd620bd421ba1",
".git/objects/6e/f65200a835ee0b34e6109058b98b5eab6fffef": "67c5227d0a5b317960154d02c5572b1b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/e2794b3c4691948989918256c99ac1dfdcd24f": "de7fd335e843550200a3c31b9f4c7d2a",
".git/objects/71/68a9a708b77663cac198b9b5984cc867604ef2": "a4918ce9e2b0817921aea91de4c6e223",
".git/objects/71/85aafe1165d4bc80bc755b1b60efda6cbabea9": "060131d09b64c00376d6eba3c2846cce",
".git/objects/73/74678c76352e918d7c841903aac26bf16c353c": "2223a011b85d9bd29baed7fb1312462f",
".git/objects/75/24f5d432e54951a55fc5bd905e8b6891d94955": "810d5dfabae8a22fb53c00078a6b74ab",
".git/objects/7a/9679b41054b981102d496bf26e0b96a4f9c34e": "1254a18e413fb2b9def92a06f9e300aa",
".git/objects/7b/df3af556d26976330462952836dcc3708d84c8": "b60c751d2685dcc3f2739c18c62f3a5e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/9835ae54439ccbf4d999d196e900bd235eacef": "bf64e847e2a51425da1fcab1c8b067e0",
".git/objects/80/838c1ac84b1001ed10c4e6656954116f44e0bd": "267e08dc478744df4141f7a8c1681eb8",
".git/objects/80/c840e7bc945fa6bc3fda0a40a798cd84e3b455": "da7d2dbde098aa0ce31121e22187b8a8",
".git/objects/83/2f06f3025fe54abd082fdf4e7772d65051773a": "8ebf5bb68a1ef84fae521a5ec0ec61a6",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/89/752fa988005d920ccbe616d4f766625d05b3b8": "a44849efb986254b59f86ce8a9ef84c0",
".git/objects/89/d5afa8ad7559e654b6faeb438b9113e0f32977": "094b612ff1c4e5163c4d33a20fda55f1",
".git/objects/89/e78a8ac2bd5c332a94a6eb6e4703d607e6d448": "4185bbc59abd4b5b48c4f2f2f9512623",
".git/objects/8a/85292c9e230a5e868b07b32b53ae1ef08caf8f": "0394c112f4da31a5bd3edc6b409d3d11",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/32bad07ccbdce8ba96cd5856b11d4c9d923d12": "47898d24a7ca1ded5c42a233f4494de1",
".git/objects/8e/c267e101d341e47e87b2f3537f966ff9e75bdb": "a01dc9e3052ad6abee93e9215c1bdaf9",
".git/objects/90/d33aab22101f5c3a75d5fe5e0ce0542e75497e": "e7bd57abc1cf0fb4759eaae4c3c0f826",
".git/objects/92/a22d2780b504bde303e73b14e3783128caf8f9": "c624737554a65b4b5f3b2f5f16c3a37d",
".git/objects/93/359f189bb23449d262ba3c2b6a384cf4f22ade": "a1dda59fee5a6276d7bf05d8dd01ad51",
".git/objects/93/625b58f076dded3656e7e48f0b9b889074152b": "088491ead19270f2a76087f9386b11dd",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/f6be6ecb41178a37185956b25111ff144fffb6": "2e056d52ed56f3f62421abd62a9e34a7",
".git/objects/98/c9629cae6493460056898a9ea5860e0064de49": "057cd72fb092860d638c6d2cadd9dc34",
".git/objects/99/1d1887d3ef27d64e3bde44d8fbeb85138c7324": "035da210b795dd688b3111030ef91885",
".git/objects/99/5c5ff4671d855af812c4e9cfbf53acff66b82f": "105e87a73ba6dd9dbaef5d1fca0b21ff",
".git/objects/9a/e2539b3c7906f2ff15b4906a0274d58d205ef8": "2b2271d40c4a7ebd60db6214748d25b5",
".git/objects/9e/9eed288617f15def4fe95b2304caa6fe73c8c3": "f22a68bff972863cfb5b72d97043004a",
".git/objects/9e/a0e6667f7b09c6d650f4ed47876ce903dd12d0": "a5605e21033696ed9d2845af2889e418",
".git/objects/a3/c056b67a45db0a563af54ef5cee34d4e38c85c": "cadbf6e02ba76654d025e394799dbf74",
".git/objects/a4/9a35ff9b6cec4fed2203a04e3b37988d9b6ca2": "927ce39970d42bdeba12b30a9ef13d1c",
".git/objects/a6/bb51784b098d101a0d5d7b6dd255197b306175": "3552547f9c9b29bfd3e2fbd6fe42b136",
".git/objects/a6/e98960462159a29f1c8ec58f8d56b0cd641e82": "88deb43e3fa3e75c8da11cbc5e568a6a",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/7f8183f3c41054e0ec76b6c08a930d39df577a": "85fe903e70336f494f764acfcf100caa",
".git/objects/aa/5743843751a40a7f7f88fbb437e06b001eaec7": "452a7b8d3bb46f30e662c2d16b418e01",
".git/objects/aa/eddd7c69d4659733bed33cf0de38c36c729718": "c0af45c959a6607a161e11d7407fd9d7",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/19a4365e41d65a5b7e6595d41297710b78e87c": "8c72512879abc000eb0b0454b0d51632",
".git/objects/b2/3a06b060091f5ed69e8b3a30cbb05801516f8c": "606909536001f48dce63c074e17099d3",
".git/objects/b3/5aa0a30017519b220bcdfb2fd5fb74a638fdfc": "d5c66784cb0564f98208a283d3a27f30",
".git/objects/b3/7d04d5dfbdee1d5f2baaf799f95d50de0d0e53": "d1ba5de6c1af7a968405e60c9cc0376b",
".git/objects/b4/e639e5d534492089d48631fe00634096d3d228": "4bef543a38659ef425482fb8d920f866",
".git/objects/b5/ace2646ddc5a9bcd47d035e223f93f57a3c40f": "9ed88f17afc367d33e8b7c5e4d92f5a0",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/abc89576edb9f1257070eb6b45b4fd85e33bd8": "3a8f187cd924251ea3c6514eedd034ea",
".git/objects/bb/225ab6e6fa3ce25eb3411911ed6dc5b3d1bd74": "5a04d98a3259b2f864f99bd7ec9493fb",
".git/objects/bc/0ec3516e0aec01e124a9b6d286242d2a61af8c": "75a35979b25d387ac26a77c489c284d4",
".git/objects/bc/1b372d987b2b19f5cfcc653a056731bd8c77c3": "a925cedd3a24cb2bde5c63ab5d9892b4",
".git/objects/bc/54423dea39a3246fe835dcd325aa26a06efe66": "8014657ef7a076c7e7704b9010dfe142",
".git/objects/bc/8f28912f7574ddc51f42b1c5e9481f41911616": "a9a5e7d33ea5a088751220f5bcc6a9b5",
".git/objects/bc/bce3cbcbbdff0f734759a3270aaaccdeed88f1": "13f033764721135ff3567cfd068fae0f",
".git/objects/be/0dbce95c63f2175e0e5bcabaca39701f308bf7": "2e48c2d67094ec96d10831d1fe5def9c",
".git/objects/be/af653cdbc370ee0685f406d86170d1bc161130": "dc8104a3e1c8093e97c25bf4a5049da0",
".git/objects/c0/95ce3a37846f1ff4d0aee4c8e6bc7ae7731b45": "83b6abde4f8d492c3e91051105635f7c",
".git/objects/c1/b3db323cfc082d9b6e115e6eb995b8cea282fc": "ab7b3a5f689b96713abd2720f92e0abc",
".git/objects/c6/4ceb67cbb70a7830a66a147fecfc4167dc3da1": "ebad8268cdcdb086bdb3312a3618d14b",
".git/objects/c6/7b64643f60abf7d27bb342f2dbc222e85c3b5d": "f90c69f80f72759337c57e0d02314695",
".git/objects/c6/ac5a6157b7886b6a536dc0d2dbf85c3a6345e5": "658ad63fa93a349c3d2afcedd2a553bb",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/5b666dd208ee093c7e75894203f3b9d7d398d5": "a4abbdb7b1a1cf16bd8958a79b366c13",
".git/objects/ca/fecf3521937fb87a72794d0fd67c0ee381b92f": "1af0d203ddf4945aafbe920ea46f6e37",
".git/objects/ce/df0813a768f71a84dc6077d55d23aa0b7d12f4": "f49cda1f9df46bd62db2185af5fdc534",
".git/objects/d0/9a73cf2cf02012f53ceaadbe3e2717b417a221": "f867153531f675e4e60342f4e262b228",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/39ebb640f9a1bd3df56f635bdcf574dbe90510": "f89882deaf5293c1a4a44901543a9d18",
".git/objects/d6/c2c964eca069eb7f8ef94e80545fb15e5ad717": "4925fba422cc88854b0157a43317c5b3",
".git/objects/d7/084545c14f3599670f2f747528036f6f3a5e11": "ba1a4806c9ebb6375bae45135fe60ec6",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/36d9881695c49882758aa02c71073623b84ea1": "921f3a75675e182aa3cd0bae62502e86",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dd/97a3e1ded31b0af281cd0865dca48c547548a8": "a5cce15981be085f0da9c1f8051caed0",
".git/objects/df/1d87c7701866076207d70fb3f35266749c4d08": "01a58fd36001e2a58deeb227bd11d951",
".git/objects/e1/fe80700afe0a490e2ba78ca3205ba391e34a29": "8a243afcb3ee3db8cbe97517787fa47d",
".git/objects/e3/2ebed13f89e3fdf80ab6ebb2aea4dc286119c4": "a9ec296c89dab879fa1567c685a1a239",
".git/objects/e6/32feb844317fd97a135cdf4e1df0698221e6ab": "f5850ce1c40f56efd549bf8faad544df",
".git/objects/e7/764ab3fa16fc1f47887aa7dca8b16afc6c3f51": "a699814abe1594e4828338988d8df0d3",
".git/objects/e7/d839940cc7c3ce0ff847380724679fd162e95b": "e162dd210d219c75db3ae7c1f0bacacc",
".git/objects/e9/1eba5a539b386c6087209f0e9469a4e327d260": "29bbc81994c039bdbf38f39f90f198b4",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/58e579dc741f709bc4ff3cd26827998fd000d6": "b7d02386c5b6c740656e150993c5cab6",
".git/objects/ec/134f5b72bafca99d1fb259f84960eb9ef5e08e": "6b74a93b601d4288aa61b169a5d31569",
".git/objects/ec/6e162d2c7e3dc4ccba76e186f8a8ff9c308a5a": "f2ab6316936cb90a1a1703b2e1743e13",
".git/objects/ef/26e0d5f215dda560570d016cd0ec0204754fb3": "01e2096d72c1eced7ddf4034bcf551b1",
".git/objects/f0/f6e092049c4b6d89e86d0709ecdd178fd281ec": "e548218d1c44468a9bec30fa212187d1",
".git/objects/f2/d2978abb35ba648e26ab16dea2d1b7f8cba814": "9a277375cfc1b4220bc8fd0cd79873b3",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/849e18009d7643f5cae6ebebb32c5a1799438e": "ccb0b5077eb06527ce12eac88eee7005",
".git/objects/f4/e38dbae280c38d45d78a2f841847bc77ede7b0": "b6366b85b4bea90dcd2645ead3a25426",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/1bdc0c1191bdbceee535b1c558a225873c0be8": "c045c3897fbba97f5d2108fb1a194d42",
".git/objects/f6/80494635072a52e2dce13d5851b309bf0fd5c7": "c74ee716b9159278fd888040e4ee3ea4",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/66c5b1bc14d801903dea9017e182d489ea0202": "50efe97ef17927bf5af7c8303f8b6d71",
".git/objects/f7/fb87c42fc70f9c7c801ee7b34419f651583512": "d289b0067b430f0bb2acac942a0775f2",
".git/objects/f8/4128cf7266878ec99367d3128a2b804091adba": "cfb4480fe0f98de2c8f874a36dfbaa1b",
".git/objects/f8/7a33aacc949c98c829840d3475e0dd63e87e3a": "3934ea9317c733d0b340f3095c234d53",
".git/objects/f8/c7cbd781b7dcbcd40c34baab2711a7326e7bfc": "4729a47a77485c00c7334ac356656443",
".git/objects/f9/0ec4094e7d1ffb1ae0f9a590e4bf18e92640e3": "d6b7ea9e1c84f3d2f76651017d396c9f",
".git/objects/fa/150f94c69c57e85491b1cccaeb7941d5844b98": "5f50dd5e36fdd41da4d37d1b0fa3cfea",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/a638548e6baf4aa49c53a74436cf35dbe140ee": "d4cf72e1d51f65086bac1409e000d7bc",
".git/objects/ff/7c6e511431da1316b1fa71a2dbcfcf04bc50dc": "f57026fc8ef95e362f64dbecb2de6b94",
".git/refs/heads/main": "5af45ee79d3868dbf7884bade4d9443d",
".git/refs/remotes/origin/main": "5af45ee79d3868dbf7884bade4d9443d",
"assets/AssetManifest.bin": "2243321b65732a92ab02166c81251d0b",
"assets/AssetManifest.bin.json": "d7152091e29b8c2efd746df80757cc56",
"assets/assets/charades/topics.json": "8d1745e18821c0fcecb33159b379246e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5e49e70a5a57f4cc21cab89c3985372d",
"assets/NOTICES": "68c5334fc327d1057d2184e34b0a32d3",
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
"flutter_bootstrap.js": "1f00f29d89fde79e60f5271c0df48b24",
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
"main.dart.js": "cdcf35b9f66586d77725763113c32166",
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
