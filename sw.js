importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"b3f5e112db34cfc0458359c7c1321099","url":"analysis/analysis-quiz.html"},{"revision":"0e710049b859a5f647d230e39131a8a4","url":"analysis/analysis-quiz.json"},{"revision":"c3ef5cd85c156e46c6bd5a54e1e4de48","url":"analysis/comparison-with-other-algorithms.html"},{"revision":"b97ddd53524511764e84654045ea6e1b","url":"analysis/images/comparison.png"},{"revision":"82035997ac7eff131eabe4d77d0fd249","url":"analysis/images/radix_complexity.jpg"},{"revision":"b350079cf91176b65bc740e4a31dcdac","url":"analysis/images/selection_stable.png"},{"revision":"53e4dd0dca9c14b278f60c2ef358c671","url":"analysis/images/stable_radix.jpg"},{"revision":"2cd6c080cd8e54a3db40b39524123ccc","url":"analysis/images/stable.png"},{"revision":"56eb373759f1d9817d7e1072e915d999","url":"analysis/index.html"},{"revision":"573bb77911293ce5466f9d44a61b218f","url":"analysis/overview.html"},{"revision":"ee9a3411f0b2bfa3fbff799d4e54a703","url":"analysis/stability-of-selection-sort.html"},{"revision":"ca4959cab3c9572492e80caf3be8df1f","url":"analysis/time-and-space-complexity.html"},{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"78e33469fda7f4744059bdd0cc68e3b4","url":"code-assessment.html"},{"revision":"869d226bb422d767ce4b59996a91ac4c","url":"code-assessment.json"},{"revision":"3adba2af40ca916676e88594d84963c3","url":"feedback.html"},{"revision":"17740c12c33227cf1d07f4e14fee7aa5","url":"further-reading-and-references.html"},{"revision":"35a1660ed7fdab0db54d1d6ab9e4974a","url":"images/log.png"},{"revision":"fef9aad8cedab9cc69ac44cc72eb1a8e","url":"images/sort.png"},{"revision":"5274ad57e90d15aade362d8a59b4f315","url":"index.html"},{"revision":"1d025f3f5b50938784b992b267c5560c","url":"overview.html"},{"revision":"2f5a1f247a6ce5abf7520e6fa5a29c2e","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"09328c3b48a2c82ae22fe1de0ad524aa","url":"posttest.html"},{"revision":"bfdc2694ad9f17084584ef1125da7ee2","url":"posttest.json"},{"revision":"2f941e83afd97e5b61e01757c4fdd492","url":"pretest.html"},{"revision":"8028a7c0a72664903c86f603d4365487","url":"pretest.json"},{"revision":"efcbacd6345d388f970c52ab1ff4a092","url":"radix-sort/images/demo_radix.jpg"},{"revision":"fe5662f16b166df482235b9e486b9c5c","url":"radix-sort/images/digits.jpg"},{"revision":"d1d0b8c9b5583d141e95758c08ce87c8","url":"radix-sort/images/radix.jpg"},{"revision":"00a526d2edf4e1e00edf731557094880","url":"radix-sort/index.html"},{"revision":"0899b6a0dc17e40b6273719230921a11","url":"radix-sort/radix_demo.html"},{"revision":"d1d984054e669b53ed86b7d4c31ec003","url":"radix-sort/radix_exercise.html"},{"revision":"520d58333b75e807d91934c6d204e50a","url":"radix-sort/radix_practice.html"},{"revision":"894ff6a5311b3f20103d2bf0f988bc21","url":"radix-sort/radix-sort-algorithm.html"},{"revision":"0b387c12e329063e6ed5cd68abdb0982","url":"radix-sort/radix-sort-basic-concept.html"},{"revision":"1161c53fb5a01c6f5d2c0b440c7101a0","url":"radix-sort/radix-sort-quiz.html"},{"revision":"7c69acf39be6a59ccd216511f5b5feb8","url":"radix-sort/radix-sort-quiz.json"},{"revision":"b998b48076d56d8cfbe7d31c560ba573","url":"radix-sort/simulation/css/radix.css"},{"revision":"5805f69e5a6b6a5b4c33df901281d1fb","url":"radix-sort/simulation/js/radix_demo.js"},{"revision":"4501c0819c21af285ca786a355d94c0b","url":"radix-sort/simulation/js/radix_exercise.js"},{"revision":"0f557a57352607394d59707763a3ed63","url":"radix-sort/simulation/js/radix_lib.js"},{"revision":"99130ce538248f1734fda06e5df2a3d5","url":"radix-sort/simulation/js/radix_practice.js"},{"revision":"89a81d86ea36f46d08a80490fb3340c3","url":"radix-sort/simulation/js/realization.js"},{"revision":"f41adfae91bfeb7e8ac03fa71903060c","url":"radix-sort/simulation/radix_demo.html"},{"revision":"ab9387382c444a450d9ccafcc0456cfe","url":"radix-sort/simulation/radix_exercise.html"},{"revision":"3d83b72c71e991a9fadf547275002a70","url":"radix-sort/simulation/radix_practice.html"},{"revision":"c2a45dc1bcca3a37221cd92d588fc24b","url":"recap.html"},{"revision":"e7bfcb7c65e4e8f7c061a35667a096e9","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );