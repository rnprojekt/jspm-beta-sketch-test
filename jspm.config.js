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
      "npm:babel-runtime@6.23.0": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.10.3"
        }
      },
      "npm:babel-types@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "esutils": "npm:esutils@2.0.2",
          "to-fast-properties": "npm:to-fast-properties@1.0.2",
          "lodash": "npm:lodash@4.17.4"
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
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "grommet": "npm:grommet@1.3.4",
    "grommet-addons": "npm:grommet-addons@0.3.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "mixwith": "github:rnprojekt/mixwith.js@master",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "react": "npm:react@15.5.4",
    "react-dom": "npm:react-dom@15.5.4",
    "react-redux": "npm:react-redux@5.0.4",
    "react-router": "npm:react-router@4.1.1",
    "redux": "npm:redux@3.6.0",
    "redux-thunk": "npm:redux-thunk@2.2.0",
    "samsara": "github:rnprojekt/samsara@master",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "underscore": "npm:underscore@1.8.3",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
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
        "iconv-lite": "npm:iconv-lite@0.4.16"
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
        "extend": "npm:extend@3.0.0",
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
        "filename-regex": "npm:filename-regex@2.0.0",
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
        "process": "npm:process@0.11.9"
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
    }
  }
});
