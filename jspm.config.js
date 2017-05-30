SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "reactor/": "reactor/",
    "jspm-beta-sketch-test/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
      "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.24.1",
      "core-js": "npm:core-js@2.4.1",
      "css": "github:systemjs/plugin-css@0.1.33",
      "colors.css": "npm:colors.css@3.0.0"
    },
    "packages": {
      "npm:systemjs-hot-reloader@1.1.0": {
        "map": {
          "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jspm-beta-sketch-test": {
      "main": "main.js",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ]
          }
        },
        "*.js_": {
          "loader": "plugin-babel"
        },
        "format": "esm"
      }
    },
    "reactor": {
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ]
          }
        },
        "format": "esm"
      }
    }
  },
  map: {
    "@hot": "@empty"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "better-console": "npm:better-console@1.0.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "chokidar": "npm:chokidar@1.6.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "del": "npm:del@2.2.2",
    "device.js": "github:matthewhudson/device.js@0.2.7",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "errno": "npm:errno@0.1.4",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "extend": "npm:extend@3.0.1",
    "fastclick": "github:ftlabs/fastclick@1.0.6",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "fsevents": "npm:fsevents@1.1.1",
    "graceful-fs": "npm:graceful-fs@4.1.11",
    "grommet": "npm:grommet@1.3.4",
    "grommet-addons": "npm:grommet-addons@0.3.0",
    "gulp": "npm:gulp@3.9.1",
    "gulp-autoprefixer": "npm:gulp-autoprefixer@3.1.1",
    "gulp-chmod": "npm:gulp-chmod@2.0.0",
    "gulp-clean-css": "npm:gulp-clean-css@3.0.4",
    "gulp-clone": "npm:gulp-clone@1.0.0",
    "gulp-concat": "npm:gulp-concat@2.6.1",
    "gulp-concat-css": "npm:gulp-concat-css@2.3.0",
    "gulp-copy": "npm:gulp-copy@1.0.0",
    "gulp-dedupe": "npm:gulp-dedupe@0.0.2",
    "gulp-flatten": "npm:gulp-flatten@0.3.1",
    "gulp-header": "npm:gulp-header@1.8.8",
    "gulp-help": "npm:gulp-help@1.6.1",
    "gulp-if": "npm:gulp-if@2.0.2",
    "gulp-less": "npm:gulp-less@3.3.0",
    "gulp-notify": "npm:gulp-notify@3.0.0",
    "gulp-plumber": "npm:gulp-plumber@1.1.0",
    "gulp-print": "npm:gulp-print@2.0.1",
    "gulp-rename": "npm:gulp-rename@1.2.2",
    "gulp-replace": "npm:gulp-replace@0.5.4",
    "gulp-rtlcss": "npm:gulp-rtlcss@1.0.0",
    "gulp-uglify": "npm:gulp-uglify@2.1.2",
    "gulp-util": "npm:gulp-util@3.0.8",
    "gulp-watch": "npm:gulp-watch@4.3.11",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "i18next": "npm:i18next@8.1.0",
    "i18next-browser-languagedetector": "npm:i18next-browser-languagedetector@1.0.1",
    "i18next-xhr-backend": "npm:i18next-xhr-backend@1.4.1",
    "image-size": "npm:image-size@0.5.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.1",
    "map-stream": "npm:map-stream@0.0.7",
    "mime": "npm:mime@1.3.4",
    "mixwith": "github:rnprojekt/mixwith.js@master",
    "mkdirp": "npm:mkdirp@0.5.1",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "onsenui": "npm:onsenui@2.2.6",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "promise": "npm:promise@7.1.1",
    "prop-types": "npm:prop-types@15.5.8",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "react": "npm:react@15.5.4",
    "react-desktop": "npm:react-desktop@0.3.0",
    "react-dom": "npm:react-dom@15.5.4",
    "react-i18next": "npm:react-i18next@3.1.0",
    "react-onsenui": "npm:react-onsenui@1.2.0",
    "react-progress-button": "npm:react-progress-button@5.0.2",
    "react-redux": "npm:react-redux@5.0.4",
    "react-router": "npm:react-router@4.1.1",
    "readline": "npm:jspm-nodelibs-readline@0.2.1",
    "redux": "npm:redux@3.6.0",
    "redux-thunk": "npm:redux-thunk@2.2.0",
    "repl": "npm:jspm-nodelibs-repl@0.2.1",
    "request": "npm:request@2.81.0",
    "require-dot-file": "npm:require-dot-file@0.4.0",
    "run-sequence": "npm:run-sequence@1.2.2",
    "samsara": "github:rnprojekt/samsara@master",
    "semantic-ui": "npm:semantic-ui@2.2.10",
    "semantic-ui-css": "npm:semantic-ui-css@2.2.10",
    "semantic-ui-react": "npm:semantic-ui-react@0.68.2",
    "source-map": "npm:source-map@0.5.6",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "threejs": "github:mrdoob/three.js@master",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "two.js": "github:jonobr1/two.js@0.6.0",
    "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
    "underscore": "npm:underscore@1.8.3",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "yamljs": "npm:yamljs@0.2.10",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:react-dom@15.5.4": {
      "map": {
        "fbjs": "npm:fbjs@0.8.12",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.5.8"
      }
    },
    "npm:react@15.5.4": {
      "map": {
        "prop-types": "npm:prop-types@15.5.8",
        "fbjs": "npm:fbjs@0.8.12",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:fbjs@0.8.12": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "core-js": "npm:core-js@1.2.7",
        "ua-parser-js": "npm:ua-parser-js@0.7.12"
      }
    },
    "npm:prop-types@15.5.8": {
      "map": {
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
        "node-fetch": "npm:node-fetch@1.6.3"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.9"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:readable-stream@2.2.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.0"
      }
    },
    "npm:string_decoder@1.0.0": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.17"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:stream-http@2.7.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.9",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.1": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:grommet-addons@0.3.0": {
      "map": {
        "grommet": "npm:grommet@1.1.0",
        "react-router": "npm:react-router@3.0.5"
      }
    },
    "npm:grommet@1.3.4": {
      "map": {
        "inuit-functions": "npm:inuit-functions@0.2.0",
        "deep-assign": "npm:deep-assign@2.0.0",
        "inuit-shared": "npm:inuit-shared@0.1.5",
        "inuit-reset": "npm:inuit-reset@0.1.1",
        "react-dom": "npm:react-dom@15.5.4",
        "react": "npm:react@15.5.4",
        "inuit-defaults": "npm:inuit-defaults@0.2.3",
        "inuit-responsive-settings": "npm:inuit-responsive-settings@0.1.5",
        "inuit-normalize": "npm:inuit-normalize@4.1.1",
        "inuit-responsive-tools": "npm:inuit-responsive-tools@0.1.3",
        "react-desc": "npm:react-desc@1.1.0",
        "intl": "npm:intl@1.2.5",
        "markdown-to-jsx": "npm:markdown-to-jsx@5.2.0",
        "lodash.zip": "npm:lodash.zip@4.2.0",
        "inuit-mixins": "npm:inuit-mixins@0.2.3",
        "classnames": "npm:classnames@2.2.5",
        "react-addons-transition-group": "npm:react-addons-transition-group@15.5.2",
        "hammerjs": "npm:hammerjs@2.0.8",
        "react-intl": "npm:react-intl@2.2.3",
        "moment": "npm:moment@2.18.1",
        "superagent": "npm:superagent@3.5.2",
        "react-router": "npm:react-router@4.1.1"
      }
    },
    "npm:grommet@1.1.0": {
      "map": {
        "inuit-functions": "npm:inuit-functions@0.2.0",
        "deep-assign": "npm:deep-assign@2.0.0",
        "inuit-shared": "npm:inuit-shared@0.1.5",
        "inuit-reset": "npm:inuit-reset@0.1.1",
        "react-dom": "npm:react-dom@15.5.4",
        "lodash": "npm:lodash@4.17.4",
        "react": "npm:react@15.5.4",
        "inuit-defaults": "npm:inuit-defaults@0.2.3",
        "inuit-responsive-settings": "npm:inuit-responsive-settings@0.1.5",
        "inuit-normalize": "npm:inuit-normalize@4.1.1",
        "inuit-responsive-tools": "npm:inuit-responsive-tools@0.1.3",
        "react-desc": "npm:react-desc@1.1.0",
        "intl": "npm:intl@1.2.5",
        "markdown-to-jsx": "npm:markdown-to-jsx@4.0.3",
        "inuit-mixins": "npm:inuit-mixins@0.2.3",
        "classnames": "npm:classnames@2.2.5",
        "react-addons-transition-group": "npm:react-addons-transition-group@15.5.2",
        "hammerjs": "npm:hammerjs@2.0.8",
        "inuit-headings": "npm:inuit-headings@0.3.1",
        "inuit-lists": "npm:inuit-lists@0.1.0",
        "inuit-list-bare": "npm:inuit-list-bare@0.3.0",
        "inuit-clearfix": "npm:inuit-clearfix@0.2.2",
        "inuit-images": "npm:inuit-images@0.3.3",
        "react-intl": "npm:react-intl@2.2.3",
        "inuit-page": "npm:inuit-page@0.2.1",
        "moment": "npm:moment@2.18.1",
        "gulp": "npm:gulp@3.9.1",
        "superagent": "npm:superagent@2.3.0",
        "react-router": "npm:react-router@3.0.5"
      }
    },
    "npm:inuit-shared@0.1.5": {
      "map": {
        "inuit-defaults": "npm:inuit-defaults@0.2.3"
      }
    },
    "npm:inuit-responsive-tools@0.1.3": {
      "map": {
        "inuit-responsive-settings": "npm:inuit-responsive-settings@0.1.5"
      }
    },
    "npm:react-desc@1.1.0": {
      "map": {
        "react": "npm:react@15.5.4",
        "prop-types": "npm:prop-types@15.5.8"
      }
    },
    "npm:inuit-mixins@0.2.3": {
      "map": {
        "inuit-defaults": "npm:inuit-defaults@0.2.3"
      }
    },
    "npm:inuit-headings@0.3.1": {
      "map": {
        "inuit-defaults": "npm:inuit-defaults@0.2.3",
        "inuit-mixins": "npm:inuit-mixins@0.2.3"
      }
    },
    "npm:inuit-list-bare@0.3.0": {
      "map": {
        "inuit-defaults": "npm:inuit-defaults@0.2.3"
      }
    },
    "npm:inuit-lists@0.1.0": {
      "map": {
        "inuit-defaults": "npm:inuit-defaults@0.2.3",
        "inuit-mixins": "npm:inuit-mixins@0.2.3"
      }
    },
    "npm:inuit-images@0.3.3": {
      "map": {
        "inuit-defaults": "npm:inuit-defaults@0.2.3",
        "inuit-mixins": "npm:inuit-mixins@0.2.3"
      }
    },
    "npm:inuit-page@0.2.1": {
      "map": {
        "inuit-defaults": "npm:inuit-defaults@0.2.3",
        "inuit-mixins": "npm:inuit-mixins@0.2.3"
      }
    },
    "npm:deep-assign@2.0.0": {
      "map": {
        "is-obj": "npm:is-obj@1.0.1"
      }
    },
    "npm:markdown-to-jsx@5.2.0": {
      "map": {
        "prop-types": "npm:prop-types@15.5.8",
        "lodash.get": "npm:lodash.get@4.4.2",
        "remark-parse": "npm:remark-parse@3.0.0",
        "unified": "npm:unified@6.1.2"
      }
    },
    "npm:react-addons-transition-group@15.5.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:markdown-to-jsx@4.0.3": {
      "map": {
        "lodash.get": "npm:lodash.get@4.4.2",
        "remark-parse": "npm:remark-parse@2.3.0",
        "unified": "npm:unified@5.1.0"
      }
    },
    "npm:react-router@3.0.5": {
      "map": {
        "prop-types": "npm:prop-types@15.5.8",
        "loose-envify": "npm:loose-envify@1.3.1",
        "invariant": "npm:invariant@2.2.2",
        "create-react-class": "npm:create-react-class@15.5.2",
        "warning": "npm:warning@3.0.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "history": "npm:history@3.3.0"
      }
    },
    "npm:react-router@4.1.1": {
      "map": {
        "prop-types": "npm:prop-types@15.5.8",
        "loose-envify": "npm:loose-envify@1.3.1",
        "invariant": "npm:invariant@2.2.2",
        "warning": "npm:warning@3.0.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "path-to-regexp": "npm:path-to-regexp@1.7.0",
        "history": "npm:history@4.6.1"
      }
    },
    "npm:react-intl@2.2.3": {
      "map": {
        "intl-format-cache": "npm:intl-format-cache@2.0.5",
        "intl-relativeformat": "npm:intl-relativeformat@1.3.0",
        "invariant": "npm:invariant@2.2.2",
        "intl-messageformat": "npm:intl-messageformat@1.3.0"
      }
    },
    "npm:gulp@3.9.1": {
      "map": {
        "deprecated": "npm:deprecated@0.0.1",
        "orchestrator": "npm:orchestrator@0.3.8",
        "pretty-hrtime": "npm:pretty-hrtime@1.0.3",
        "archy": "npm:archy@1.0.0",
        "interpret": "npm:interpret@1.0.3",
        "tildify": "npm:tildify@1.2.0",
        "gulp-util": "npm:gulp-util@3.0.8",
        "minimist": "npm:minimist@1.2.0",
        "chalk": "npm:chalk@1.1.3",
        "v8flags": "npm:v8flags@2.1.1",
        "vinyl-fs": "npm:vinyl-fs@0.3.14",
        "liftoff": "npm:liftoff@2.3.0",
        "semver": "npm:semver@4.3.6"
      }
    },
    "npm:superagent@2.3.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "methods": "npm:methods@1.1.2",
        "component-emitter": "npm:component-emitter@1.2.1",
        "cookiejar": "npm:cookiejar@2.1.1",
        "extend": "npm:extend@3.0.0",
        "mime": "npm:mime@1.3.4",
        "formidable": "npm:formidable@1.1.1",
        "form-data": "npm:form-data@1.0.0-rc4",
        "qs": "npm:qs@6.4.0",
        "debug": "npm:debug@2.6.4"
      }
    },
    "npm:superagent@3.5.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "methods": "npm:methods@1.1.2",
        "component-emitter": "npm:component-emitter@1.2.1",
        "cookiejar": "npm:cookiejar@2.1.1",
        "extend": "npm:extend@3.0.0",
        "mime": "npm:mime@1.3.4",
        "formidable": "npm:formidable@1.1.1",
        "form-data": "npm:form-data@2.1.4",
        "qs": "npm:qs@6.4.0",
        "debug": "npm:debug@2.6.4"
      }
    },
    "npm:intl-relativeformat@1.3.0": {
      "map": {
        "intl-messageformat": "npm:intl-messageformat@1.3.0"
      }
    },
    "npm:unified@5.1.0": {
      "map": {
        "extend": "npm:extend@3.0.0",
        "once": "npm:once@1.4.0",
        "bail": "npm:bail@1.0.1",
        "has": "npm:has@1.0.1",
        "is-buffer": "npm:is-buffer@1.1.5",
        "trough": "npm:trough@1.0.0",
        "x-is-string": "npm:x-is-string@0.1.0",
        "vfile": "npm:vfile@2.0.1"
      }
    },
    "npm:unified@6.1.2": {
      "map": {
        "extend": "npm:extend@3.0.0",
        "isarray": "npm:isarray@2.0.1",
        "bail": "npm:bail@1.0.1",
        "has": "npm:has@1.0.1",
        "is-plain-obj": "npm:is-plain-obj@1.1.0",
        "x-is-function": "npm:x-is-function@1.0.4",
        "trough": "npm:trough@1.0.0",
        "x-is-string": "npm:x-is-string@0.1.0",
        "vfile": "npm:vfile@2.0.1"
      }
    },
    "npm:gulp-util@3.0.8": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "minimist": "npm:minimist@1.2.0",
        "object-assign": "npm:object-assign@3.0.0",
        "has-gulplog": "npm:has-gulplog@0.1.0",
        "multipipe": "npm:multipipe@0.1.2",
        "replace-ext": "npm:replace-ext@0.0.1",
        "fancy-log": "npm:fancy-log@1.3.0",
        "lodash._reescape": "npm:lodash._reescape@3.0.0",
        "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
        "array-differ": "npm:array-differ@1.0.0",
        "gulplog": "npm:gulplog@1.0.0",
        "array-uniq": "npm:array-uniq@1.0.3",
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "beeper": "npm:beeper@1.1.1",
        "dateformat": "npm:dateformat@2.0.0",
        "lodash.template": "npm:lodash.template@3.6.2",
        "vinyl": "npm:vinyl@0.5.3",
        "through2": "npm:through2@2.0.3"
      }
    },
    "npm:remark-parse@2.3.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "is-decimal": "npm:is-decimal@1.0.0",
        "collapse-white-space": "npm:collapse-white-space@1.0.2",
        "unherit": "npm:unherit@1.1.0",
        "parse-entities": "npm:parse-entities@1.1.0",
        "is-word-character": "npm:is-word-character@1.0.0",
        "markdown-escapes": "npm:markdown-escapes@1.0.0",
        "is-alphabetical": "npm:is-alphabetical@1.0.0",
        "state-toggle": "npm:state-toggle@1.0.0",
        "vfile-location": "npm:vfile-location@2.0.1",
        "trim": "npm:trim@0.0.1",
        "is-whitespace-character": "npm:is-whitespace-character@1.0.0",
        "unist-util-remove-position": "npm:unist-util-remove-position@1.1.0",
        "trim-trailing-lines": "npm:trim-trailing-lines@1.1.0",
        "repeat-string": "npm:repeat-string@1.6.1",
        "has": "npm:has@1.0.1"
      }
    },
    "npm:remark-parse@3.0.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "is-decimal": "npm:is-decimal@1.0.0",
        "collapse-white-space": "npm:collapse-white-space@1.0.2",
        "unherit": "npm:unherit@1.1.0",
        "parse-entities": "npm:parse-entities@1.1.0",
        "is-word-character": "npm:is-word-character@1.0.0",
        "markdown-escapes": "npm:markdown-escapes@1.0.0",
        "is-alphabetical": "npm:is-alphabetical@1.0.0",
        "state-toggle": "npm:state-toggle@1.0.0",
        "vfile-location": "npm:vfile-location@2.0.1",
        "trim": "npm:trim@0.0.1",
        "is-whitespace-character": "npm:is-whitespace-character@1.0.0",
        "unist-util-remove-position": "npm:unist-util-remove-position@1.1.0",
        "trim-trailing-lines": "npm:trim-trailing-lines@1.1.0",
        "repeat-string": "npm:repeat-string@1.6.1",
        "has": "npm:has@1.0.1"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:liftoff@2.3.0": {
      "map": {
        "extend": "npm:extend@3.0.1",
        "fined": "npm:fined@1.0.2",
        "lodash.mapvalues": "npm:lodash.mapvalues@4.6.0",
        "rechoir": "npm:rechoir@0.6.2",
        "flagged-respawn": "npm:flagged-respawn@0.3.2",
        "lodash.isstring": "npm:lodash.isstring@4.0.1",
        "findup-sync": "npm:findup-sync@0.4.3",
        "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
        "resolve": "npm:resolve@1.3.3"
      }
    },
    "npm:tildify@1.2.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:create-react-class@15.5.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.12",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:orchestrator@0.3.8": {
      "map": {
        "end-of-stream": "npm:end-of-stream@0.1.5",
        "sequencify": "npm:sequencify@0.0.7",
        "stream-consume": "npm:stream-consume@0.1.0"
      }
    },
    "npm:unherit@1.1.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-entities@1.1.0": {
      "map": {
        "has": "npm:has@1.0.1",
        "is-decimal": "npm:is-decimal@1.0.0",
        "character-entities-legacy": "npm:character-entities-legacy@1.1.0",
        "is-alphanumerical": "npm:is-alphanumerical@1.0.0",
        "character-reference-invalid": "npm:character-reference-invalid@1.1.0",
        "is-hexadecimal": "npm:is-hexadecimal@1.0.0",
        "character-entities": "npm:character-entities@1.2.0"
      }
    },
    "npm:intl-messageformat@1.3.0": {
      "map": {
        "intl-messageformat-parser": "npm:intl-messageformat-parser@1.2.0"
      }
    },
    "npm:vfile@2.0.1": {
      "map": {
        "replace-ext": "npm:replace-ext@1.0.0",
        "has": "npm:has@1.0.1",
        "is-buffer": "npm:is-buffer@1.1.5",
        "x-is-string": "npm:x-is-string@0.1.0",
        "unist-util-stringify-position": "npm:unist-util-stringify-position@1.1.0"
      }
    },
    "npm:v8flags@2.1.1": {
      "map": {
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:path-to-regexp@1.7.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:vinyl-fs@0.3.14": {
      "map": {
        "vinyl": "npm:vinyl@0.4.6",
        "defaults": "npm:defaults@1.0.3",
        "through2": "npm:through2@0.6.5",
        "glob-watcher": "npm:glob-watcher@0.0.6",
        "strip-bom": "npm:strip-bom@1.0.0",
        "glob-stream": "npm:glob-stream@3.1.18",
        "mkdirp": "npm:mkdirp@0.5.1",
        "graceful-fs": "npm:graceful-fs@3.0.11"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:end-of-stream@0.1.5": {
      "map": {
        "once": "npm:once@1.3.3"
      }
    },
    "npm:history@4.6.1": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "loose-envify": "npm:loose-envify@1.3.1",
        "warning": "npm:warning@3.0.0",
        "resolve-pathname": "npm:resolve-pathname@2.1.0",
        "value-equal": "npm:value-equal@0.2.1"
      }
    },
    "npm:history@3.3.0": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "warning": "npm:warning@3.0.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "query-string": "npm:query-string@4.3.4"
      }
    },
    "npm:fancy-log@1.3.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "time-stamp": "npm:time-stamp@1.0.1"
      }
    },
    "npm:fined@1.0.2": {
      "map": {
        "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
        "lodash.isstring": "npm:lodash.isstring@4.0.1",
        "lodash.assignwith": "npm:lodash.assignwith@4.2.0",
        "expand-tilde": "npm:expand-tilde@1.2.2",
        "lodash.pick": "npm:lodash.pick@4.4.0",
        "parse-filepath": "npm:parse-filepath@1.0.1",
        "lodash.isempty": "npm:lodash.isempty@4.4.0"
      }
    },
    "npm:form-data@2.1.4": {
      "map": {
        "asynckit": "npm:asynckit@0.4.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.15"
      }
    },
    "npm:lodash.template@3.6.2": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
        "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
        "lodash.keys": "npm:lodash.keys@3.1.2",
        "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
        "lodash.restparam": "npm:lodash.restparam@3.6.1",
        "lodash.escape": "npm:lodash.escape@3.2.0",
        "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1",
        "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:debug@2.6.4": {
      "map": {
        "ms": "npm:ms@0.7.3"
      }
    },
    "npm:through2@2.0.3": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:vinyl@0.5.3": {
      "map": {
        "replace-ext": "npm:replace-ext@0.0.1",
        "clone-stats": "npm:clone-stats@0.0.1",
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.3.3"
      }
    },
    "npm:unist-util-remove-position@1.1.0": {
      "map": {
        "unist-util-visit": "npm:unist-util-visit@1.1.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:form-data@1.0.0-rc4": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.15",
        "async": "npm:async@1.5.2"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:glob-stream@3.1.18": {
      "map": {
        "through2": "npm:through2@0.6.5",
        "ordered-read-streams": "npm:ordered-read-streams@0.1.0",
        "glob2base": "npm:glob2base@0.0.12",
        "unique-stream": "npm:unique-stream@1.0.0",
        "minimatch": "npm:minimatch@2.0.10",
        "glob": "npm:glob@4.5.3"
      }
    },
    "npm:is-alphanumerical@1.0.0": {
      "map": {
        "is-alphabetical": "npm:is-alphabetical@1.0.0",
        "is-decimal": "npm:is-decimal@1.0.0"
      }
    },
    "npm:has-gulplog@0.1.0": {
      "map": {
        "sparkles": "npm:sparkles@1.0.0"
      }
    },
    "npm:gulplog@1.0.0": {
      "map": {
        "glogg": "npm:glogg@1.0.0"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:unist-util-stringify-position@1.1.0": {
      "map": {
        "has": "npm:has@1.0.1"
      }
    },
    "npm:multipipe@0.1.2": {
      "map": {
        "duplexer2": "npm:duplexer2@0.0.2"
      }
    },
    "npm:vinyl@0.4.6": {
      "map": {
        "clone-stats": "npm:clone-stats@0.0.1",
        "clone": "npm:clone@0.2.0"
      }
    },
    "npm:findup-sync@0.4.3": {
      "map": {
        "detect-file": "npm:detect-file@0.1.0",
        "resolve-dir": "npm:resolve-dir@0.1.1",
        "is-glob": "npm:is-glob@2.0.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:strip-bom@1.0.0": {
      "map": {
        "first-chunk-stream": "npm:first-chunk-stream@1.0.0",
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:glogg@1.0.0": {
      "map": {
        "sparkles": "npm:sparkles@1.0.0"
      }
    },
    "npm:glob-watcher@0.0.6": {
      "map": {
        "gaze": "npm:gaze@0.5.2"
      }
    },
    "npm:duplexer2@0.0.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:expand-tilde@1.2.2": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:resolve@1.3.3": {
      "map": {
        "path-parse": "npm:path-parse@1.0.5"
      }
    },
    "npm:graceful-fs@3.0.11": {
      "map": {
        "natives": "npm:natives@1.1.0"
      }
    },
    "npm:lodash.templatesettings@3.1.1": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.escape": "npm:lodash.escape@3.2.0"
      }
    },
    "npm:defaults@1.0.3": {
      "map": {
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:query-string@4.3.4": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:resolve-dir@0.1.1": {
      "map": {
        "expand-tilde": "npm:expand-tilde@1.2.2",
        "global-modules": "npm:global-modules@0.2.3"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "is-extglob": "npm:is-extglob@1.0.0",
        "filename-regex": "npm:filename-regex@2.0.1",
        "array-unique": "npm:array-unique@0.2.1",
        "object.omit": "npm:object.omit@2.0.1",
        "arr-diff": "npm:arr-diff@2.0.0",
        "regex-cache": "npm:regex-cache@0.4.3",
        "parse-glob": "npm:parse-glob@3.0.4",
        "extglob": "npm:extglob@0.3.2",
        "normalize-path": "npm:normalize-path@2.1.1",
        "kind-of": "npm:kind-of@3.2.0",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "braces": "npm:braces@1.8.5"
      }
    },
    "npm:mime-types@2.1.15": {
      "map": {
        "mime-db": "npm:mime-db@1.27.0"
      }
    },
    "npm:parse-filepath@1.0.1": {
      "map": {
        "path-root": "npm:path-root@0.1.1",
        "map-cache": "npm:map-cache@0.2.2",
        "is-absolute": "npm:is-absolute@0.2.6"
      }
    },
    "npm:glob@4.5.3": {
      "map": {
        "minimatch": "npm:minimatch@2.0.10",
        "once": "npm:once@1.4.0",
        "inflight": "npm:inflight@1.0.6",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:detect-file@0.1.0": {
      "map": {
        "fs-exists-sync": "npm:fs-exists-sync@0.1.0"
      }
    },
    "npm:lodash.escape@3.2.0": {
      "map": {
        "lodash._root": "npm:lodash._root@3.0.1"
      }
    },
    "npm:gaze@0.5.2": {
      "map": {
        "globule": "npm:globule@0.1.0"
      }
    },
    "npm:minimatch@2.0.10": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.7"
      }
    },
    "npm:glob2base@0.0.12": {
      "map": {
        "find-index": "npm:find-index@0.1.1"
      }
    },
    "npm:globule@0.1.0": {
      "map": {
        "lodash": "npm:lodash@1.0.2",
        "glob": "npm:glob@3.1.21",
        "minimatch": "npm:minimatch@0.2.14"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "is-dotfile": "npm:is-dotfile@1.0.2",
        "glob-base": "npm:glob-base@0.3.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:glob@3.1.21": {
      "map": {
        "graceful-fs": "npm:graceful-fs@1.2.3",
        "inherits": "npm:inherits@1.0.2",
        "minimatch": "npm:minimatch@0.2.14"
      }
    },
    "npm:kind-of@3.2.0": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.5"
      }
    },
    "npm:brace-expansion@1.1.7": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:is-absolute@0.2.6": {
      "map": {
        "is-relative": "npm:is-relative@0.2.1",
        "is-windows": "npm:is-windows@0.2.0"
      }
    },
    "npm:global-modules@0.2.3": {
      "map": {
        "is-windows": "npm:is-windows@0.2.0",
        "global-prefix": "npm:global-prefix@0.1.5"
      }
    },
    "npm:path-root@0.1.1": {
      "map": {
        "path-root-regex": "npm:path-root-regex@0.1.2"
      }
    },
    "npm:minimatch@0.2.14": {
      "map": {
        "sigmund": "npm:sigmund@1.0.1",
        "lru-cache": "npm:lru-cache@2.7.3"
      }
    },
    "npm:global-prefix@0.1.5": {
      "map": {
        "is-windows": "npm:is-windows@0.2.0",
        "ini": "npm:ini@1.3.4",
        "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
        "which": "npm:which@1.2.14"
      }
    },
    "npm:object.omit@2.0.1": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1",
        "for-own": "npm:for-own@0.1.5"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.3"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:normalize-path@2.1.1": {
      "map": {
        "remove-trailing-separator": "npm:remove-trailing-separator@1.0.1"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "preserve": "npm:preserve@0.2.0",
        "repeat-element": "npm:repeat-element@1.1.2",
        "expand-range": "npm:expand-range@1.8.2"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "glob-parent": "npm:glob-parent@2.0.0"
      }
    },
    "npm:is-relative@0.2.1": {
      "map": {
        "is-unc-path": "npm:is-unc-path@0.1.2"
      }
    },
    "npm:for-own@0.1.5": {
      "map": {
        "for-in": "npm:for-in@1.0.2"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:is-unc-path@0.1.2": {
      "map": {
        "unc-path-regex": "npm:unc-path-regex@0.1.2"
      }
    },
    "npm:homedir-polyfill@1.0.1": {
      "map": {
        "parse-passwd": "npm:parse-passwd@1.0.0"
      }
    },
    "npm:which@1.2.14": {
      "map": {
        "isexe": "npm:isexe@2.0.0"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-string": "npm:repeat-string@1.6.1",
        "repeat-element": "npm:repeat-element@1.1.2",
        "isobject": "npm:isobject@2.1.0",
        "is-number": "npm:is-number@2.1.0",
        "randomatic": "npm:randomatic@1.1.6"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.0"
      }
    },
    "npm:randomatic@1.1.6": {
      "map": {
        "kind-of": "npm:kind-of@3.2.0",
        "is-number": "npm:is-number@2.1.0"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.1": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    },
    "npm:react-redux@5.0.4": {
      "map": {
        "lodash-es": "npm:lodash-es@4.17.4",
        "create-react-class": "npm:create-react-class@15.5.2",
        "invariant": "npm:invariant@2.2.2",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.5.8",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "lodash-es": "npm:lodash-es@4.17.4",
        "loose-envify": "npm:loose-envify@1.3.1",
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:semantic-ui-css@2.2.10": {
      "map": {
        "jquery": "npm:jquery@3.2.1"
      }
    },
    "npm:semantic-ui@2.2.10": {
      "map": {
        "gulp-json-editor": "npm:gulp-json-editor@2.2.1",
        "jquery": "npm:jquery@3.2.1",
        "merge-stream": "npm:merge-stream@1.0.1",
        "wrench-sui": "npm:wrench-sui@0.0.3",
        "gulp-prompt": "npm:gulp-prompt@0.2.0",
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:gulp-json-editor@2.2.1": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@0.5.1",
        "detect-indent": "npm:detect-indent@2.0.0",
        "deepmerge": "npm:deepmerge@0.2.10",
        "js-beautify": "npm:js-beautify@1.5.10"
      }
    },
    "npm:gulp-chmod@2.0.0": {
      "map": {
        "through2": "npm:through2@2.0.3",
        "stat-mode": "npm:stat-mode@0.2.2",
        "deep-assign": "npm:deep-assign@1.0.0"
      }
    },
    "npm:gulp-dedupe@0.0.2": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through": "npm:through@2.3.8",
        "lodash.defaults": "npm:lodash.defaults@2.4.1",
        "colors": "npm:colors@1.0.3",
        "diff": "npm:diff@1.0.8"
      }
    },
    "npm:gulp-flatten@0.3.1": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@2.0.3"
      }
    },
    "npm:gulp-autoprefixer@3.1.1": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@2.0.3",
        "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.2.1",
        "postcss": "npm:postcss@5.2.17",
        "autoprefixer": "npm:autoprefixer@6.7.7"
      }
    },
    "npm:gulp-plumber@1.1.0": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@2.0.3"
      }
    },
    "npm:gulp-header@1.8.8": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@2.0.3",
        "object-assign": "npm:object-assign@4.1.1",
        "concat-with-sourcemaps": "npm:concat-with-sourcemaps@1.0.4"
      }
    },
    "npm:gulp-copy@1.0.0": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "gulp": "npm:gulp@3.9.1",
        "through2": "npm:through2@2.0.3"
      }
    },
    "npm:gulp-print@2.0.1": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "map-stream": "npm:map-stream@0.0.7"
      }
    },
    "npm:gulp-clean-css@3.0.4": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@2.0.3",
        "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.2.1",
        "clean-css": "npm:clean-css@4.0.12"
      }
    },
    "npm:run-sequence@1.2.2": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:gulp-less@3.3.0": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@2.0.3",
        "object-assign": "npm:object-assign@4.1.1",
        "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.2.1",
        "accord": "npm:accord@0.26.4",
        "less": "npm:less@2.7.2"
      }
    },
    "npm:gulp-notify@3.0.0": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@2.0.3",
        "lodash.template": "npm:lodash.template@4.4.0",
        "node.extend": "npm:node.extend@1.1.6",
        "node-notifier": "npm:node-notifier@5.1.2"
      }
    },
    "npm:gulp-watch@4.3.11": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "object-assign": "npm:object-assign@4.1.1",
        "readable-stream": "npm:readable-stream@2.2.9",
        "vinyl": "npm:vinyl@1.2.0",
        "glob-parent": "npm:glob-parent@3.1.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "anymatch": "npm:anymatch@1.3.0",
        "vinyl-file": "npm:vinyl-file@2.0.0",
        "slash": "npm:slash@1.0.0",
        "chokidar": "npm:chokidar@1.6.1"
      }
    },
    "npm:gulp-concat@2.6.1": {
      "map": {
        "through2": "npm:through2@2.0.3",
        "vinyl": "npm:vinyl@2.0.2",
        "concat-with-sourcemaps": "npm:concat-with-sourcemaps@1.0.4"
      }
    },
    "npm:gulp-uglify@2.1.2": {
      "map": {
        "through2": "npm:through2@2.0.3",
        "gulplog": "npm:gulplog@1.0.0",
        "has-gulplog": "npm:has-gulplog@0.1.0",
        "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.2.1",
        "make-error-cause": "npm:make-error-cause@1.2.2",
        "uglify-save-license": "npm:uglify-save-license@0.4.1",
        "uglify-js": "npm:uglify-js@2.8.22",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:js-beautify@1.5.10": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "config-chain": "npm:config-chain@1.1.11",
        "nopt": "npm:nopt@3.0.6"
      }
    },
    "npm:gulp-replace@0.5.4": {
      "map": {
        "replacestream": "npm:replacestream@4.0.2",
        "readable-stream": "npm:readable-stream@2.2.9",
        "istextorbinary": "npm:istextorbinary@1.0.2"
      }
    },
    "npm:detect-indent@2.0.0": {
      "map": {
        "repeating": "npm:repeating@1.1.3",
        "get-stdin": "npm:get-stdin@3.0.2",
        "minimist": "npm:minimist@1.2.0"
      }
    },
    "npm:del@2.2.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "is-path-cwd": "npm:is-path-cwd@1.0.0",
        "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "pify": "npm:pify@2.3.0",
        "globby": "npm:globby@5.0.0",
        "rimraf": "npm:rimraf@2.6.1"
      }
    },
    "npm:through2@0.5.1": {
      "map": {
        "xtend": "npm:xtend@3.0.0",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:merge-stream@1.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9"
      }
    },
    "npm:replacestream@4.0.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "readable-stream": "npm:readable-stream@2.2.9",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:yamljs@0.2.10": {
      "map": {
        "glob": "npm:glob@7.1.1",
        "argparse": "npm:argparse@1.0.9"
      }
    },
    "npm:vinyl@2.0.2": {
      "map": {
        "replace-ext": "npm:replace-ext@1.0.0",
        "remove-trailing-separator": "npm:remove-trailing-separator@1.0.1",
        "is-stream": "npm:is-stream@1.1.0",
        "cloneable-readable": "npm:cloneable-readable@1.0.0",
        "clone-buffer": "npm:clone-buffer@1.0.0",
        "clone-stats": "npm:clone-stats@1.0.0",
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:lodash.template@4.4.0": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.templatesettings": "npm:lodash.templatesettings@4.1.0"
      }
    },
    "npm:vinyl@1.2.0": {
      "map": {
        "replace-ext": "npm:replace-ext@0.0.1",
        "clone-stats": "npm:clone-stats@0.0.1",
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inflight": "npm:inflight@1.0.6",
        "once": "npm:once@1.4.0",
        "inherits": "npm:inherits@2.0.3",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:gulp-prompt@0.2.0": {
      "map": {
        "event-stream": "npm:event-stream@3.0.20",
        "inquirer": "npm:inquirer@0.10.1"
      }
    },
    "npm:globby@5.0.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "glob": "npm:glob@7.1.1",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "array-union": "npm:array-union@1.0.2",
        "arrify": "npm:arrify@1.0.1"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.2"
      }
    },
    "npm:deep-assign@1.0.0": {
      "map": {
        "is-obj": "npm:is-obj@1.0.1"
      }
    },
    "npm:rimraf@2.6.1": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:glob-parent@3.1.0": {
      "map": {
        "is-glob": "npm:is-glob@3.1.0",
        "path-dirname": "npm:path-dirname@1.0.2"
      }
    },
    "npm:event-stream@3.0.20": {
      "map": {
        "through": "npm:through@2.3.8",
        "map-stream": "npm:map-stream@0.0.7",
        "from": "npm:from@0.1.7",
        "split": "npm:split@0.2.10",
        "pause-stream": "npm:pause-stream@0.0.11",
        "duplexer": "npm:duplexer@0.1.1",
        "stream-combiner": "npm:stream-combiner@0.0.4"
      }
    },
    "npm:vinyl-file@2.0.0": {
      "map": {
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "vinyl": "npm:vinyl@1.2.0",
        "strip-bom-stream": "npm:strip-bom-stream@2.0.0",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "strip-bom": "npm:strip-bom@2.0.0"
      }
    },
    "npm:gulp-rtlcss@1.0.0": {
      "map": {
        "gulp-util": "npm:gulp-util@3.0.8",
        "through2": "npm:through2@0.6.5",
        "rtlcss": "npm:rtlcss@2.1.2"
      }
    },
    "npm:gulp-clone@1.0.0": {
      "map": {
        "gulp-util": "npm:gulp-util@2.2.20",
        "through2": "npm:through2@0.4.2"
      }
    },
    "npm:accord@0.26.4": {
      "map": {
        "lodash.defaults": "npm:lodash.defaults@4.2.0",
        "semver": "npm:semver@5.3.0",
        "uglify-js": "npm:uglify-js@2.8.22",
        "glob": "npm:glob@7.1.1",
        "convert-source-map": "npm:convert-source-map@1.5.0",
        "lodash.pick": "npm:lodash.pick@4.4.0",
        "indx": "npm:indx@0.2.3",
        "lodash.flatten": "npm:lodash.flatten@4.4.0",
        "lodash.uniq": "npm:lodash.uniq@4.5.0",
        "lodash.partialright": "npm:lodash.partialright@4.2.1",
        "lodash.clone": "npm:lodash.clone@4.5.0",
        "lodash.merge": "npm:lodash.merge@4.6.0",
        "resolve": "npm:resolve@1.3.3",
        "when": "npm:when@3.7.8"
      }
    },
    "npm:inquirer@0.10.1": {
      "map": {
        "through": "npm:through@2.3.8",
        "lodash": "npm:lodash@3.10.1",
        "chalk": "npm:chalk@1.1.3",
        "ansi-regex": "npm:ansi-regex@2.1.1",
        "cli-cursor": "npm:cli-cursor@1.0.2",
        "readline2": "npm:readline2@1.0.1",
        "ansi-escapes": "npm:ansi-escapes@1.4.0",
        "run-async": "npm:run-async@0.1.0",
        "cli-width": "npm:cli-width@1.1.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "figures": "npm:figures@1.7.0",
        "rx-lite": "npm:rx-lite@3.1.2"
      }
    },
    "npm:gulp-if@2.0.2": {
      "map": {
        "through2": "npm:through2@2.0.3",
        "ternary-stream": "npm:ternary-stream@2.0.1",
        "gulp-match": "npm:gulp-match@1.0.3"
      }
    },
    "npm:gulp-concat-css@2.3.0": {
      "map": {
        "lodash.defaults": "npm:lodash.defaults@3.1.2",
        "through2": "npm:through2@1.1.1",
        "gulp-util": "npm:gulp-util@3.0.8",
        "parse-import": "npm:parse-import@2.0.0",
        "rework-plugin-url": "npm:rework-plugin-url@1.1.0",
        "rework-import": "npm:rework-import@2.1.0",
        "rework": "npm:rework@1.0.1"
      }
    },
    "npm:gulp-help@1.6.1": {
      "map": {
        "object-assign": "npm:object-assign@3.0.0",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:through2@0.4.2": {
      "map": {
        "xtend": "npm:xtend@2.1.2",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:gulp-util@2.2.20": {
      "map": {
        "dateformat": "npm:dateformat@1.0.12",
        "lodash.template": "npm:lodash.template@2.4.1",
        "minimist": "npm:minimist@0.2.0",
        "vinyl": "npm:vinyl@0.2.3",
        "multipipe": "npm:multipipe@0.1.2",
        "through2": "npm:through2@0.5.1",
        "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
        "chalk": "npm:chalk@0.5.1"
      }
    },
    "npm:is-path-in-cwd@1.0.0": {
      "map": {
        "is-path-inside": "npm:is-path-inside@1.0.0"
      }
    },
    "npm:chokidar@1.6.1": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "inherits": "npm:inherits@2.0.3",
        "is-glob": "npm:is-glob@2.0.1",
        "anymatch": "npm:anymatch@1.3.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "async-each": "npm:async-each@1.0.1",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "readdirp": "npm:readdirp@2.1.0"
      }
    },
    "npm:lodash.defaults@2.4.1": {
      "map": {
        "lodash.keys": "npm:lodash.keys@2.4.1",
        "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:istextorbinary@1.0.2": {
      "map": {
        "binaryextensions": "npm:binaryextensions@1.0.1",
        "textextensions": "npm:textextensions@1.0.2"
      }
    },
    "npm:better-console@1.0.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "cli-table": "npm:cli-table@0.3.1"
      }
    },
    "npm:argparse@1.0.9": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "micromatch": "npm:micromatch@2.3.11",
        "arrify": "npm:arrify@1.0.1"
      }
    },
    "npm:through2@1.1.1": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:postcss@5.2.17": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.2.3",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:lodash.template@2.4.1": {
      "map": {
        "lodash.templatesettings": "npm:lodash.templatesettings@2.4.1",
        "lodash.defaults": "npm:lodash.defaults@2.4.1",
        "lodash.keys": "npm:lodash.keys@2.4.1",
        "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
        "lodash.escape": "npm:lodash.escape@2.4.1",
        "lodash._escapestringchar": "npm:lodash._escapestringchar@2.4.1",
        "lodash.values": "npm:lodash.values@2.4.1"
      }
    },
    "npm:dateformat@1.0.12": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "meow": "npm:meow@3.7.0"
      }
    },
    "npm:config-chain@1.1.11": {
      "map": {
        "ini": "npm:ini@1.3.4",
        "proto-list": "npm:proto-list@1.2.4"
      }
    },
    "npm:is-finite@1.0.2": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:cloneable-readable@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "through2": "npm:through2@2.0.3",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:vinyl@0.2.3": {
      "map": {
        "clone-stats": "npm:clone-stats@0.0.1"
      }
    },
    "npm:make-error-cause@1.2.2": {
      "map": {
        "make-error": "npm:make-error@1.2.3"
      }
    },
    "npm:autoprefixer@6.7.7": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "browserslist": "npm:browserslist@1.7.7",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "caniuse-db": "npm:caniuse-db@1.0.30000664"
      }
    },
    "npm:is-glob@3.1.0": {
      "map": {
        "is-extglob": "npm:is-extglob@2.1.1"
      }
    },
    "npm:lodash.templatesettings@4.1.0": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0"
      }
    },
    "npm:array-union@1.0.2": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.3"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.1.0"
      }
    },
    "npm:chalk@0.5.1": {
      "map": {
        "strip-ansi": "npm:strip-ansi@0.3.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "supports-color": "npm:supports-color@0.2.0",
        "has-ansi": "npm:has-ansi@0.1.0",
        "ansi-styles": "npm:ansi-styles@1.1.0"
      }
    },
    "npm:lodash.templatesettings@2.4.1": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
        "lodash.escape": "npm:lodash.escape@2.4.1"
      }
    },
    "npm:vinyl-sourcemaps-apply@0.2.1": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:concat-with-sourcemaps@1.0.4": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:uglify-js@2.8.22": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "yargs": "npm:yargs@3.10.0"
      }
    },
    "npm:clean-css@4.0.12": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:lodash.defaults@3.1.2": {
      "map": {
        "lodash.restparam": "npm:lodash.restparam@3.6.1",
        "lodash.assign": "npm:lodash.assign@3.2.0"
      }
    },
    "npm:xtend@2.1.2": {
      "map": {
        "object-keys": "npm:object-keys@0.4.0"
      }
    },
    "npm:node.extend@1.1.6": {
      "map": {
        "is": "npm:is@3.2.1"
      }
    },
    "npm:split@0.2.10": {
      "map": {
        "through": "npm:through@2.3.8"
      }
    },
    "npm:pause-stream@0.0.11": {
      "map": {
        "through": "npm:through@2.3.8"
      }
    },
    "npm:strip-ansi@0.3.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@0.2.1"
      }
    },
    "npm:rework-import@2.1.0": {
      "map": {
        "globby": "npm:globby@2.1.0",
        "parse-import": "npm:parse-import@2.0.0",
        "css": "npm:css@2.2.1",
        "url-regex": "npm:url-regex@3.2.0"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.7"
      }
    },
    "npm:run-async@0.1.0": {
      "map": {
        "once": "npm:once@1.4.0"
      }
    },
    "npm:rtlcss@2.1.2": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "postcss": "npm:postcss@5.2.17",
        "mkdirp": "npm:mkdirp@0.5.1",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "findup": "npm:findup@0.1.5"
      }
    },
    "npm:figures@1.7.0": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:cli-table@0.3.1": {
      "map": {
        "colors": "npm:colors@1.0.3"
      }
    },
    "npm:lodash.escape@2.4.1": {
      "map": {
        "lodash.keys": "npm:lodash.keys@2.4.1",
        "lodash._escapehtmlchar": "npm:lodash._escapehtmlchar@2.4.1",
        "lodash._reunescapedhtml": "npm:lodash._reunescapedhtml@2.4.1"
      }
    },
    "npm:rework@1.0.1": {
      "map": {
        "convert-source-map": "npm:convert-source-map@0.3.5",
        "css": "npm:css@2.2.1"
      }
    },
    "npm:is-path-inside@1.0.0": {
      "map": {
        "path-is-inside": "npm:path-is-inside@1.0.2"
      }
    },
    "npm:lodash.keys@2.4.1": {
      "map": {
        "lodash._isnative": "npm:lodash._isnative@2.4.1",
        "lodash._shimkeys": "npm:lodash._shimkeys@2.4.1",
        "lodash.isobject": "npm:lodash.isobject@2.4.1"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "minimatch": "npm:minimatch@3.0.3",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "readable-stream": "npm:readable-stream@2.2.9",
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1"
      }
    },
    "npm:globby@2.1.0": {
      "map": {
        "glob": "npm:glob@5.0.15",
        "object-assign": "npm:object-assign@3.0.0",
        "array-union": "npm:array-union@1.0.2",
        "async": "npm:async@1.5.2"
      }
    },
    "npm:node-notifier@5.1.2": {
      "map": {
        "semver": "npm:semver@5.3.0",
        "which": "npm:which@1.2.14",
        "shellwords": "npm:shellwords@0.1.0",
        "growly": "npm:growly@1.3.0"
      }
    },
    "npm:strip-bom-stream@2.0.0": {
      "map": {
        "first-chunk-stream": "npm:first-chunk-stream@2.0.0",
        "strip-bom": "npm:strip-bom@2.0.0"
      }
    },
    "npm:lodash.assign@3.2.0": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2",
        "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
        "lodash._createassigner": "npm:lodash._createassigner@3.1.1"
      }
    },
    "npm:lodash._shimkeys@2.4.1": {
      "map": {
        "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
      }
    },
    "npm:meow@3.7.0": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "object-assign": "npm:object-assign@4.1.1",
        "decamelize": "npm:decamelize@1.2.0",
        "camelcase-keys": "npm:camelcase-keys@2.1.0",
        "redent": "npm:redent@1.0.0",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "trim-newlines": "npm:trim-newlines@1.0.0",
        "map-obj": "npm:map-obj@1.0.1",
        "loud-rejection": "npm:loud-rejection@1.6.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.8"
      }
    },
    "npm:lodash.isobject@2.4.1": {
      "map": {
        "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
      }
    },
    "npm:lodash.values@2.4.1": {
      "map": {
        "lodash.keys": "npm:lodash.keys@2.4.1"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inflight": "npm:inflight@1.0.6",
        "minimatch": "npm:minimatch@3.0.3",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-import@2.0.0": {
      "map": {
        "get-imports": "npm:get-imports@1.0.0"
      }
    },
    "npm:rework-plugin-url@1.1.0": {
      "map": {
        "rework-plugin-function": "npm:rework-plugin-function@1.0.2"
      }
    },
    "npm:ternary-stream@2.0.1": {
      "map": {
        "through2": "npm:through2@2.0.3",
        "merge-stream": "npm:merge-stream@1.0.1",
        "fork-stream": "npm:fork-stream@0.0.4",
        "duplexify": "npm:duplexify@3.5.0"
      }
    },
    "npm:gulp-match@1.0.3": {
      "map": {
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:stream-combiner@0.0.4": {
      "map": {
        "duplexer": "npm:duplexer@0.1.1"
      }
    },
    "npm:has-ansi@0.1.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@0.2.1"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.8.0"
      }
    },
    "npm:readline2@1.0.1": {
      "map": {
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "mute-stream": "npm:mute-stream@0.0.5"
      }
    },
    "npm:cli-cursor@1.0.2": {
      "map": {
        "restore-cursor": "npm:restore-cursor@1.0.1"
      }
    },
    "npm:supports-color@3.2.3": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:request@2.81.0": {
      "map": {
        "extend": "npm:extend@3.0.1",
        "combined-stream": "npm:combined-stream@1.0.5",
        "form-data": "npm:form-data@2.1.4",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "performance-now": "npm:performance-now@0.2.0",
        "uuid": "npm:uuid@3.0.1",
        "caseless": "npm:caseless@0.12.0",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "forever-agent": "npm:forever-agent@0.6.1",
        "isstream": "npm:isstream@0.1.2",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "stringstream": "npm:stringstream@0.0.5",
        "tunnel-agent": "npm:tunnel-agent@0.6.0",
        "aws4": "npm:aws4@1.6.0",
        "http-signature": "npm:http-signature@1.1.1",
        "mime-types": "npm:mime-types@2.1.15",
        "har-validator": "npm:har-validator@4.2.1",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "hawk": "npm:hawk@3.1.3",
        "qs": "npm:qs@6.4.0"
      }
    },
    "npm:first-chunk-stream@2.0.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9"
      }
    },
    "npm:get-imports@1.0.0": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.3",
        "import-regex": "npm:import-regex@1.1.0"
      }
    },
    "npm:css@2.2.1": {
      "map": {
        "source-map": "npm:source-map@0.1.43",
        "inherits": "npm:inherits@2.0.3",
        "urix": "npm:urix@0.1.0",
        "source-map-resolve": "npm:source-map-resolve@0.3.1"
      }
    },
    "npm:findup@0.1.5": {
      "map": {
        "colors": "npm:colors@0.6.2",
        "commander": "npm:commander@2.1.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:lodash._reunescapedhtml@2.4.1": {
      "map": {
        "lodash.keys": "npm:lodash.keys@2.4.1",
        "lodash._htmlescapes": "npm:lodash._htmlescapes@2.4.1"
      }
    },
    "npm:lodash._baseassign@3.2.0": {
      "map": {
        "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:errno@0.1.4": {
      "map": {
        "prr": "npm:prr@0.0.0"
      }
    },
    "npm:lodash._createassigner@3.1.1": {
      "map": {
        "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
        "lodash.restparam": "npm:lodash.restparam@3.6.1",
        "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
      }
    },
    "npm:fsevents@1.1.1": {
      "map": {
        "nan": "npm:nan@2.6.2",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.34"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "decamelize": "npm:decamelize@1.2.0",
        "window-size": "npm:window-size@0.1.0",
        "cliui": "npm:cliui@2.1.0",
        "camelcase": "npm:camelcase@1.2.1"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:camelcase-keys@2.1.0": {
      "map": {
        "map-obj": "npm:map-obj@1.0.1",
        "camelcase": "npm:camelcase@2.1.1"
      }
    },
    "npm:browserslist@1.7.7": {
      "map": {
        "electron-to-chromium": "npm:electron-to-chromium@1.3.8",
        "caniuse-db": "npm:caniuse-db@1.0.30000664"
      }
    },
    "npm:rework-plugin-function@1.0.2": {
      "map": {
        "rework-visit": "npm:rework-visit@1.0.0"
      }
    },
    "npm:url-regex@3.2.0": {
      "map": {
        "ip-regex": "npm:ip-regex@1.0.3"
      }
    },
    "npm:lodash._escapehtmlchar@2.4.1": {
      "map": {
        "lodash._htmlescapes": "npm:lodash._htmlescapes@2.4.1"
      }
    },
    "npm:source-map@0.1.43": {
      "map": {
        "amdefine": "npm:amdefine@1.0.1"
      }
    },
    "npm:duplexify@3.5.0": {
      "map": {
        "end-of-stream": "npm:end-of-stream@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.9",
        "stream-shift": "npm:stream-shift@1.0.0"
      }
    },
    "npm:node-pre-gyp@0.6.34": {
      "map": {
        "nopt": "npm:nopt@4.0.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "request": "npm:request@2.81.0",
        "rimraf": "npm:rimraf@2.6.1",
        "semver": "npm:semver@5.3.0",
        "tar-pack": "npm:tar-pack@3.4.0",
        "rc": "npm:rc@1.2.1",
        "npmlog": "npm:npmlog@4.0.2",
        "tar": "npm:tar@2.2.1"
      }
    },
    "npm:normalize-package-data@2.3.8": {
      "map": {
        "semver": "npm:semver@5.3.0",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
        "hosted-git-info": "npm:hosted-git-info@2.4.2"
      }
    },
    "npm:restore-cursor@1.0.1": {
      "map": {
        "onetime": "npm:onetime@1.1.0",
        "exit-hook": "npm:exit-hook@1.1.1"
      }
    },
    "npm:tunnel-agent@0.6.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:end-of-stream@1.0.0": {
      "map": {
        "once": "npm:once@1.3.3"
      }
    },
    "npm:source-map-resolve@0.3.1": {
      "map": {
        "urix": "npm:urix@0.1.0",
        "atob": "npm:atob@1.1.3",
        "resolve-url": "npm:resolve-url@0.2.1",
        "source-map-url": "npm:source-map-url@0.3.0"
      }
    },
    "npm:nopt@4.0.1": {
      "map": {
        "abbrev": "npm:abbrev@1.1.0",
        "osenv": "npm:osenv@0.1.4"
      }
    },
    "npm:loud-rejection@1.6.0": {
      "map": {
        "currently-unhandled": "npm:currently-unhandled@0.4.1",
        "signal-exit": "npm:signal-exit@3.0.2"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:redent@1.0.0": {
      "map": {
        "strip-indent": "npm:strip-indent@1.0.1",
        "indent-string": "npm:indent-string@2.1.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "path-exists": "npm:path-exists@2.1.0"
      }
    },
    "npm:strip-indent@1.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "normalize-package-data": "npm:normalize-package-data@2.3.8",
        "path-type": "npm:path-type@1.1.0",
        "load-json-file": "npm:load-json-file@1.1.0"
      }
    },
    "npm:indent-string@2.1.0": {
      "map": {
        "repeating": "npm:repeating@2.0.1"
      }
    },
    "npm:tar-pack@3.4.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "rimraf": "npm:rimraf@2.6.1",
        "tar": "npm:tar@2.2.1",
        "once": "npm:once@1.4.0",
        "uid-number": "npm:uid-number@0.0.6",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "fstream": "npm:fstream@1.0.11",
        "debug": "npm:debug@2.6.6"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "jsprim": "npm:jsprim@1.4.0",
        "assert-plus": "npm:assert-plus@0.2.0",
        "sshpk": "npm:sshpk@1.13.0"
      }
    },
    "npm:rc@1.2.1": {
      "map": {
        "ini": "npm:ini@1.3.4",
        "minimist": "npm:minimist@1.2.0",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "deep-extend": "npm:deep-extend@0.4.1"
      }
    },
    "npm:har-validator@4.2.1": {
      "map": {
        "har-schema": "npm:har-schema@1.0.5",
        "ajv": "npm:ajv@4.11.8"
      }
    },
    "npm:repeating@2.0.1": {
      "map": {
        "is-finite": "npm:is-finite@1.0.2"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "cryptiles": "npm:cryptiles@2.0.5",
        "sntp": "npm:sntp@1.0.9",
        "boom": "npm:boom@2.10.1",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:osenv@0.1.4": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:jsprim@1.4.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "extsprintf": "npm:extsprintf@1.0.2",
        "json-schema": "npm:json-schema@0.2.3",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "center-align": "npm:center-align@0.1.3",
        "right-align": "npm:right-align@0.1.3",
        "wordwrap": "npm:wordwrap@0.0.2"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "fstream": "npm:fstream@1.0.11",
        "block-stream": "npm:block-stream@0.0.9"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:currently-unhandled@0.4.1": {
      "map": {
        "array-find-index": "npm:array-find-index@1.0.2"
      }
    },
    "npm:sshpk@1.13.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "getpass": "npm:getpass@0.1.7",
        "asn1": "npm:asn1@0.2.3",
        "dashdash": "npm:dashdash@1.14.1"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:npmlog@4.0.2": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.4",
        "gauge": "npm:gauge@2.7.4"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.4"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "fstream": "npm:fstream@1.0.11"
      }
    },
    "npm:are-we-there-yet@1.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "strip-bom": "npm:strip-bom@2.0.0",
        "parse-json": "npm:parse-json@2.2.0"
      }
    },
    "npm:fstream@1.0.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.6.1",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:gauge@2.7.4": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "signal-exit": "npm:signal-exit@3.0.2",
        "wide-align": "npm:wide-align@1.1.0",
        "has-unicode": "npm:has-unicode@2.0.1",
        "aproba": "npm:aproba@1.1.1",
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4",
        "lazy-cache": "npm:lazy-cache@1.0.4"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.2.0",
        "longest": "npm:longest@1.0.1",
        "repeat-string": "npm:repeat-string@1.6.1"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:getpass@0.1.7": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:debug@2.6.6": {
      "map": {
        "ms": "npm:ms@0.7.3"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:ajv@4.11.8": {
      "map": {
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "co": "npm:co@4.6.0"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.1"
      }
    },
    "npm:json-stable-stringify@1.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:error-ex@1.3.1": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:babel-runtime@6.23.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
      }
    },
    "npm:semantic-ui-react@0.68.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "debug": "npm:debug@2.6.6",
        "prop-types": "npm:prop-types@15.5.8",
        "classnames": "npm:classnames@2.2.5",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.24.1": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:babel-types@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.3",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:react-desktop@0.3.0": {
      "map": {
        "radium": "npm:radium@0.18.2"
      }
    },
    "npm:radium@0.18.2": {
      "map": {
        "array-find": "npm:array-find@1.0.0",
        "babel-plugin-add-module-exports": "npm:babel-plugin-add-module-exports@0.2.1",
        "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
        "babel-preset-react": "npm:babel-preset-react@6.24.1",
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.24.1",
        "exenv": "npm:exenv@1.2.2",
        "babel-cli": "npm:babel-cli@6.24.1",
        "inline-style-prefixer": "npm:inline-style-prefixer@2.0.5",
        "babel-preset-stage-1": "npm:babel-preset-stage-1@6.24.1",
        "babel-core": "npm:babel-core@6.24.1",
        "babel-preset-es2015": "npm:babel-preset-es2015@6.24.1",
        "rimraf": "npm:rimraf@2.6.1"
      }
    },
    "npm:babel-cli@6.24.1": {
      "map": {
        "babel-core": "npm:babel-core@6.24.1",
        "babel-register": "npm:babel-register@6.24.1",
        "babel-polyfill": "npm:babel-polyfill@6.23.0",
        "fs-readdir-recursive": "npm:fs-readdir-recursive@1.0.0",
        "commander": "npm:commander@2.9.0",
        "output-file-sync": "npm:output-file-sync@1.1.2",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "convert-source-map": "npm:convert-source-map@1.5.0",
        "glob": "npm:glob@7.1.1",
        "slash": "npm:slash@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "v8flags": "npm:v8flags@2.1.1",
        "lodash": "npm:lodash@4.17.4",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:babel-preset-es2015@6.24.1": {
      "map": {
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.24.1",
        "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0",
        "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0",
        "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.24.1",
        "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.22.0",
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.24.1",
        "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.23.0",
        "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.24.1",
        "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.23.0",
        "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.22.0",
        "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1",
        "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1",
        "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.24.1",
        "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.24.1",
        "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.24.1",
        "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.22.0",
        "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1",
        "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1",
        "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1",
        "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1",
        "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.24.1",
        "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.22.0",
        "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0"
      }
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "map": {
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:inline-style-prefixer@2.0.5": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2",
        "bowser": "npm:bowser@1.6.1"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1",
        "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-core@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1",
        "babel-register": "npm:babel-register@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "convert-source-map": "npm:convert-source-map@1.5.0",
        "slash": "npm:slash@1.0.0",
        "babel-types": "npm:babel-types@6.24.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "lodash": "npm:lodash@4.17.4",
        "babel-helpers": "npm:babel-helpers@6.24.1",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-generator": "npm:babel-generator@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "json5": "npm:json5@0.5.1",
        "private": "npm:private@0.1.7",
        "babylon": "npm:babylon@6.17.0",
        "source-map": "npm:source-map@0.5.6",
        "debug": "npm:debug@2.6.6",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:babel-preset-react@6.24.1": {
      "map": {
        "babel-plugin-transform-react-jsx-self": "npm:babel-plugin-transform-react-jsx-self@6.22.0",
        "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.22.0",
        "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.23.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-preset-flow": "npm:babel-preset-flow@6.23.0",
        "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.24.1"
      }
    },
    "npm:babel-preset-stage-1@6.24.1": {
      "map": {
        "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.22.0",
        "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.24.1",
        "babel-preset-stage-2": "npm:babel-preset-stage-2@6.24.1"
      }
    },
    "npm:babel-template@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.24.1",
        "babylon": "npm:babylon@6.17.0",
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:babel-register@6.24.1": {
      "map": {
        "babel-core": "npm:babel-core@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "home-or-tmp": "npm:home-or-tmp@2.0.0",
        "source-map-support": "npm:source-map-support@0.4.15",
        "mkdirp": "npm:mkdirp@0.5.1",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:babel-plugin-transform-strict-mode@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-generator@6.24.1": {
      "map": {
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-types": "npm:babel-types@6.24.1",
        "source-map": "npm:source-map@0.5.6",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "jsesc": "npm:jsesc@1.3.0",
        "trim-right": "npm:trim-right@1.0.1",
        "detect-indent": "npm:detect-indent@4.0.0"
      }
    },
    "npm:babel-helpers@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-traverse@6.24.1": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-types": "npm:babel-types@6.24.1",
        "babylon": "npm:babylon@6.17.0",
        "debug": "npm:debug@2.6.6",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "globals": "npm:globals@9.17.0",
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.24.1": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.24.1"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.24.1": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-template": "npm:babel-template@6.24.1",
        "lodash": "npm:lodash@4.17.4",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-function-name@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1"
      }
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1"
      }
    },
    "npm:babel-plugin-transform-es2015-parameters@6.24.1": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
        "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.24.1"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.24.1": {
      "map": {
        "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.24.1": {
      "map": {
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.24.1",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.24.1"
      }
    },
    "npm:babel-plugin-transform-class-constructor-call@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.18.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx-self@6.22.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx-source@6.22.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-polyfill@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.5",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:babel-plugin-transform-react-display-name@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-messages@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-check-es2015-constants@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-for-of@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-literals@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-object-super@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1"
      }
    },
    "npm:babel-plugin-transform-es2015-spread@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.24.1",
        "regexpu-core": "npm:regexpu-core@2.0.0"
      }
    },
    "npm:babel-plugin-transform-export-extensions@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.13.0"
      }
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:babel-preset-flow@6.23.0": {
      "map": {
        "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.22.0"
      }
    },
    "npm:babel-code-frame@6.22.0": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:output-file-sync@1.1.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:babel-plugin-transform-regenerator@6.24.1": {
      "map": {
        "regenerator-transform": "npm:regenerator-transform@0.9.11"
      }
    },
    "npm:babel-preset-stage-2@6.24.1": {
      "map": {
        "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.24.1",
        "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.24.1",
        "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0",
        "babel-preset-stage-3": "npm:babel-preset-stage-3@6.24.1"
      }
    },
    "npm:source-map-support@0.4.15": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:babel-helper-replace-supers@6.24.1": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-helper-define-map@6.24.1": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-helper-call-delegate@6.24.1": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-helper-regex@6.24.1": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:regenerator-transform@0.9.11": {
      "map": {
        "private": "npm:private@0.1.7",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-helper-function-name@6.24.1": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-plugin-transform-flow-strip-types@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.18.0"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-helper-hoist-variables@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-plugin-transform-class-properties@6.24.1": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0"
      }
    },
    "npm:babel-plugin-transform-decorators@6.24.1": {
      "map": {
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-explode-class": "npm:babel-helper-explode-class@6.24.1"
      }
    },
    "npm:home-or-tmp@2.0.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:regexpu-core@2.0.0": {
      "map": {
        "regjsgen": "npm:regjsgen@0.2.0",
        "regenerate": "npm:regenerate@1.3.2",
        "regjsparser": "npm:regjsparser@0.1.5"
      }
    },
    "npm:detect-indent@4.0.0": {
      "map": {
        "repeating": "npm:repeating@2.0.1"
      }
    },
    "npm:babel-preset-stage-3@6.24.1": {
      "map": {
        "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.22.0",
        "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.23.0",
        "babel-plugin-transform-async-generator-functions": "npm:babel-plugin-transform-async-generator-functions@6.24.1",
        "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.24.1",
        "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.24.1"
      }
    },
    "npm:babel-helper-explode-class@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.24.1"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.24.1",
        "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0"
      }
    },
    "npm:babel-plugin-transform-object-rest-spread@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0"
      }
    },
    "npm:babel-plugin-transform-async-generator-functions@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-async-generators": "npm:babel-plugin-syntax-async-generators@6.13.0",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
      }
    },
    "npm:babel-helper-bindify-decorators@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-template": "npm:babel-template@6.24.1",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1"
      }
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1",
        "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.24.1"
      }
    },
    "npm:babel-helper-explode-assignable-expression@6.24.1": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1"
      }
    },
    "npm:react-i18next@3.1.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0"
      }
    }
  }
});
