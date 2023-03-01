"use strict";(self.webpackChunkreact_spy_financial=self.webpackChunkreact_spy_financial||[]).push([[651],{42651:function(e,n,t){t.r(n),t.d(n,{OpenloginAdapter:function(){return O},getOpenloginDefaultOptions:function(){return E}});var r=t(84339),i=t(41436),o=t(15861),a=t(15671),c=t(43144),s=t(97326),u=t(11752),l=t(60136),p=t(82963),h=t(61120),f=t(4942),d=t(64687),v=t.n(d),g=t(88129),y=t(79305),m=t.n(y),E=function(e,n){return{adapterSettings:{network:r.dr.MAINNET,clientId:"",uxMode:r.$e.POPUP},chainConfig:e?(0,i.h2)(e,n):null,loginSettings:{}}};function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,h.Z)(e);if(n){var i=(0,h.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,p.Z)(this,t)}}var O=function(e){(0,l.Z)(p,e);var n=C(p);function p(e){var t,o,c,u,l;(0,a.Z)(this,p),l=n.call(this),(0,f.Z)((0,s.Z)(l),"name",i.rW.OPENLOGIN),(0,f.Z)((0,s.Z)(l),"adapterNamespace",i.yk.MULTICHAIN),(0,f.Z)((0,s.Z)(l),"type",i.hN.IN_APP),(0,f.Z)((0,s.Z)(l),"openloginInstance",null),(0,f.Z)((0,s.Z)(l),"clientId",void 0),(0,f.Z)((0,s.Z)(l),"status",i.MP.NOT_READY),(0,f.Z)((0,s.Z)(l),"currentChainNamespace",i.EN.EIP155),(0,f.Z)((0,s.Z)(l),"openloginOptions",void 0),(0,f.Z)((0,s.Z)(l),"loginSettings",{}),(0,f.Z)((0,s.Z)(l),"privKeyProvider",null),i.cM.debug("const openlogin adapter",e);var h=E(null===(t=e.chainConfig)||void 0===t?void 0:t.chainNamespace,null===(o=e.chainConfig)||void 0===o?void 0:o.chainId);if(l.openloginOptions=N(N({clientId:"",network:r.dr.MAINNET},h.adapterSettings),e.adapterSettings||{}),l.clientId=null===(c=e.adapterSettings)||void 0===c?void 0:c.clientId,l.loginSettings=N(N({},h.loginSettings),e.loginSettings),l.sessionTime=l.loginSettings.sessionTime||86400,null!==(u=e.chainConfig)&&void 0!==u&&u.chainNamespace){var d;l.currentChainNamespace=null===(d=e.chainConfig)||void 0===d?void 0:d.chainNamespace;var v=h.chainConfig?h.chainConfig:{};if(l.chainConfig=N(N({},v),null===e||void 0===e?void 0:e.chainConfig),i.cM.debug("const openlogin chainConfig",l.chainConfig),!l.chainConfig.rpcTarget&&e.chainConfig.chainNamespace!==i.EN.OTHER)throw i.Ty.invalidParams("rpcTarget is required in chainConfig")}return l}return(0,c.Z)(p,[{key:"chainConfigProxy",get:function(){return this.chainConfig?N({},this.chainConfig):null}},{key:"provider",get:function(){var e;return(null===(e=this.privKeyProvider)||void 0===e?void 0:e.provider)||null},set:function(e){throw new Error("Not implemented")}},{key:"init",value:function(){var e=(0,o.Z)(v().mark((function e(n){var t,o,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,u.Z)((0,h.Z)(p.prototype),"checkInitializationRequirements",this).call(this),null!==(t=this.openloginOptions)&&void 0!==t&&t.clientId){e.next=3;break}throw i.Ty.invalidParams("clientId is required before openlogin's initialization");case 3:if(this.chainConfig){e.next=5;break}throw i.Ty.invalidParams("chainConfig is required before initialization");case 5:return o=!1,this.openloginOptions.uxMode===r.$e.REDIRECT&&(a=(0,r.Gv)(),Object.keys(a).length>0&&a._pid&&(o=!0)),this.openloginOptions=N(N({},this.openloginOptions),{},{replaceUrlOnRedirect:o}),this.openloginInstance=new r.ZP(this.openloginOptions),i.cM.debug("initializing openlogin adapter init"),e.next=12,this.openloginInstance.init();case 12:if(this.status=i.MP.READY,this.emit(i.n2.READY,i.rW.OPENLOGIN),e.prev=14,i.cM.debug("initializing openlogin adapter"),!this.openloginInstance.privKey||!n.autoConnect&&!o){e.next=19;break}return e.next=19,this.connect();case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(14),i.cM.error("Failed to connect with cached openlogin provider",e.t0),this.emit("ERRORED",e.t0);case 25:case"end":return e.stop()}}),e,this,[[14,21]])})));return function(n){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=(0,o.Z)(v().mark((function e(n){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,u.Z)((0,h.Z)(p.prototype),"checkConnectionRequirements",this).call(this),this.status=i.MP.CONNECTING,this.emit(i.n2.CONNECTING,N(N({},n),{},{adapter:i.rW.OPENLOGIN})),e.prev=3,e.next=6,this.connectWithProvider(n);case 6:return e.abrupt("return",this.provider);case 9:if(e.prev=9,e.t0=e.catch(3),i.cM.error("Failed to connect with openlogin provider",e.t0),this.status=i.MP.READY,this.emit(i.n2.ERRORED,e.t0),null===e.t0||void 0===e.t0||!e.t0.message.includes("user closed popup")){e.next=16;break}throw i.RM.popupClosed();case 16:throw i.RM.connectionError("Failed to login with openlogin");case 17:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(n){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,o.Z)(v().mark((function e(){var n,t=arguments;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:{cleanup:!1},this.status===i.MP.CONNECTED){e.next=3;break}throw i.RM.notConnectedError("Not connected with wallet");case 3:if(this.openloginInstance){e.next=5;break}throw i.Ty.notReady("openloginInstance is not ready");case 5:return e.next=7,this.openloginInstance.logout();case 7:n.cleanup?(this.status=i.MP.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=i.MP.READY,this.emit(i.n2.DISCONNECTED);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"authenticateUser",value:function(){var e=(0,o.Z)(v().mark((function e(){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.status===i.MP.CONNECTED){e.next=2;break}throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return e.next=4,this.getUserInfo();case 4:return n=e.sent,e.abrupt("return",{idToken:n.idToken});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=(0,o.Z)(v().mark((function e(){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.status===i.MP.CONNECTED){e.next=2;break}throw i.RM.notConnectedError("Not connected with wallet");case 2:if(this.openloginInstance){e.next=4;break}throw i.Ty.notReady("openloginInstance is not ready");case 4:return e.next=6,this.openloginInstance.getUserInfo();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(e){if(this.status!==i.MP.READY){var n=E();this.openloginOptions=N(N(N({},n.adapterSettings),this.openloginOptions||{}),e),e.sessionTime&&(this.loginSettings=N(N({},this.loginSettings),{},{sessionTime:e.sessionTime})),e.clientId&&(this.clientId=e.clientId)}}},{key:"setChainConfig",value:function(e){(0,u.Z)((0,h.Z)(p.prototype),"setChainConfig",this).call(this,e),this.currentChainNamespace=e.chainNamespace}},{key:"connectWithProvider",value:function(){var e=(0,o.Z)(v().mark((function e(n){var o,a,c,s,u,l,p,h;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.chainConfig){e.next=2;break}throw i.Ty.invalidParams("chainConfig is required before initialization");case 2:if(this.openloginInstance){e.next=4;break}throw i.Ty.notReady("openloginInstance is not ready");case 4:if(this.currentChainNamespace!==i.EN.SOLANA){e.next=12;break}return e.next=7,Promise.all([t.e(889),t.e(972),t.e(999),t.e(702)]).then(t.bind(t,89999));case 7:o=e.sent,a=o.SolanaPrivateKeyProvider,this.privKeyProvider=new a({config:{chainConfig:this.chainConfig}}),e.next=25;break;case 12:if(this.currentChainNamespace!==i.EN.EIP155){e.next=20;break}return e.next=15,Promise.all([t.e(354),t.e(534),t.e(772)]).then(t.bind(t,10193));case 15:c=e.sent,s=c.EthereumPrivateKeyProvider,this.privKeyProvider=new s({config:{chainConfig:this.chainConfig}}),e.next=25;break;case 20:if(this.currentChainNamespace!==i.EN.OTHER){e.next=24;break}this.privKeyProvider=new g.FL,e.next=25;break;case 24:throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));case 25:if(this.openloginInstance.privKey||!n){e.next=29;break}return this.loginSettings.curve||(this.loginSettings.curve=this.currentChainNamespace===i.EN.SOLANA?r.x7.ED25519:r.x7.SECP256K1),e.next=29,this.openloginInstance.login(m()(this.loginSettings,{loginProvider:n.loginProvider},{extraLoginOptions:N(N({},n.extraLoginOptions||{}),{},{login_hint:n.login_hint||(null===(u=n.extraLoginOptions)||void 0===u?void 0:u.login_hint)})}));case 29:if(!(l=this.openloginInstance.privKey)){e.next=41;break}if(this.currentChainNamespace!==i.EN.SOLANA){e.next=37;break}return e.next=34,Promise.all([t.e(889),t.e(508)]).then(t.bind(t,80834));case 34:p=e.sent,h=p.getED25519Key,l=h(l).sk.toString("hex");case 37:return e.next=39,this.privKeyProvider.setupProvider(l);case 39:this.status=i.MP.CONNECTED,this.emit(i.n2.CONNECTED,{adapter:i.rW.OPENLOGIN,reconnected:!n});case 41:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),p}(i.J5)},88129:function(e,n,t){t.d(n,{FL:function(){return P},Zk:function(){return O}});var r=t(15671),i=t(43144),o=t(97326),a=t(60136),c=t(82963),s=t(11752),u=t(61120),l=t(4942),p=t(7874),h=t(41436),f=t(98689),d=t(15861),v=t(64687),g=t.n(v),y=t(23484),m=t(39702),E=t.n(m);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,u.Z)(e);if(n){var i=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,c.Z)(this,t)}}var O=function(e){(0,a.Z)(t,e);var n=C(t);function t(e){var i,a,c=e.config,p=e.state;if((0,r.Z)(this,t),a=n.call(this,{config:c,state:p}),(0,l.Z)((0,o.Z)(a),"_providerEngineProxy",null),!c.chainConfig)throw h.Ty.invalidProviderConfigError("Please provide chainConfig");if(!c.chainConfig.chainId)throw h.Ty.invalidProviderConfigError("Please provide chainId inside chainConfig");if(!c.chainConfig.rpcTarget)throw h.Ty.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");return a.defaultState={chainId:"loading"},a.defaultConfig={chainConfig:c.chainConfig,networks:(0,l.Z)({},c.chainConfig.chainId,c.chainConfig)},(0,s.Z)((i=(0,o.Z)(a),(0,u.Z)(t.prototype)),"initialize",i).call(i),a}return(0,i.Z)(t,[{key:"provider",get:function(){return this._providerEngineProxy},set:function(e){throw new Error("Method not implemented.")}},{key:"addChain",value:function(e){if(!e.chainId)throw f.ethErrors.rpc.invalidParams("chainId is required");if(!e.rpcTarget)throw f.ethErrors.rpc.invalidParams("chainId is required");this.configure({networks:N(N({},this.config.networks),{},(0,l.Z)({},e.chainId,e))})}},{key:"getChainConfig",value:function(e){var n,t=null===(n=this.config.networks)||void 0===n?void 0:n[e];if(!t)throw f.ethErrors.rpc.invalidRequest("Chain ".concat(e," is not supported, please add chainConfig for it"));return t}},{key:"getProviderEngineProxy",value:function(){return this._providerEngineProxy}},{key:"updateProviderEngineProxy",value:function(e){this._providerEngineProxy?this._providerEngineProxy.setTarget(e):this._providerEngineProxy=(0,p.qY)(e)}}]),t}(p.xG),P=function(){function e(){(0,r.Z)(this,e),(0,l.Z)(this,"_providerEngineProxy",null)}return(0,i.Z)(e,[{key:"provider",get:function(){return this._providerEngineProxy},set:function(e){throw new Error("Method not implemented.")}},{key:"addChain",value:function(e){throw new Error("Method not implemented.")}},{key:"setupProvider",value:function(){var e=(0,d.Z)(g().mark((function e(n){var t,r,i;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getPrivKeyMiddleware(n),(r=new y.eI).push(t),i=(0,p.Xj)(r),this.updateProviderEngineProxy(i);case 5:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,d.Z)(g().mark((function e(n){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve());case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getProviderEngineProxy",value:function(){return this._providerEngineProxy}},{key:"updateProviderEngineProxy",value:function(e){this._providerEngineProxy?this._providerEngineProxy.setTarget(e):this._providerEngineProxy=(0,p.qY)(e)}},{key:"getPrivKeyMiddleware",value:function(e){var n={getPrivatekey:function(){var n=(0,d.Z)(g().mark((function n(){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e);case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()};return this.createPrivKeyMiddleware(n)}},{key:"createPrivKeyMiddleware",value:function(e){var n=e.getPrivatekey;function t(){return(t=(0,d.Z)(g().mark((function e(t,r){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:r.result=e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,y.v0)({private_key:(0,y.Pk)((function(e,n){return t.apply(this,arguments)}))})}}]),e}();(0,l.Z)(P,"getProviderInstance",function(){var e=(0,d.Z)(g().mark((function e(n){var t;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new P,e.next=3,t.setupProvider(n.privKey);case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());E()()},41436:function(e,n,t){t.d(n,{EN:function(){return d},H2:function(){return M},J5:function(){return S},MP:function(){return R},RM:function(){return k},Ty:function(){return E},cM:function(){return D},h2:function(){return g},hN:function(){return Z},n2:function(){return A},rW:function(){return w},yk:function(){return v}});var r=t(15671),i=t(43144),o=t(97326),a=t(60136),c=t(82963),s=t(61120),u=t(4942),l=t(23484),p=t(2583),h=(t(64687),t(29072),t(7861),t(62649)),f=t.n(h),d={EIP155:"eip155",SOLANA:"solana",OTHER:"other"},v={EIP155:"eip155",SOLANA:"solana",MULTICHAIN:"multichain"},g=function(e,n){if(e===d.OTHER)return null;var t=n?"number"===typeof n?n:parseInt(n,16):function(e){if(e===d.EIP155)return 1;if(e===d.SOLANA)return 1;throw new Error("Chain namespace ".concat(e," is not supported"))}(e);return e===d.EIP155?function(e){var n=d.EIP155;return 1===e?{chainNamespace:n,chainId:"0x1",rpcTarget:"https://rpc.ankr.com/eth",displayName:"Ethereum Mainnet",blockExplorer:"https://etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:3===e?{chainNamespace:n,chainId:"0x3",rpcTarget:"https://rpc.ankr.com/eth_ropsten",displayName:"Ropsten Testnet",blockExplorer:"https://ropsten.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:4===e?{chainNamespace:n,chainId:"0x4",rpcTarget:"https://rpc.ankr.com/eth_rinkeby",displayName:"Rinkeby Testnet",blockExplorer:"https://rinkeby.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:5===e?{chainNamespace:n,chainId:"0x5",rpcTarget:"https://rpc.ankr.com/eth_goerli",displayName:"Goerli Testnet",blockExplorer:"https://goerli.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:137===e?{chainNamespace:n,chainId:"0x89",rpcTarget:"https://rpc.ankr.com/polygon",displayName:"Polygon Mainnet",blockExplorer:"https://polygonscan.com",ticker:"MATIC",tickerName:"Polygon"}:80001===e?{chainNamespace:n,chainId:"0x13881",rpcTarget:"https://rpc.ankr.com/polygon_mumbai",displayName:"Polygon Mumbai Testnet",blockExplorer:"https://mumbai.polygonscan.com/",ticker:"MATIC",tickerName:"Polygon"}:56===e?{chainNamespace:n,chainId:"0x38",rpcTarget:"https://rpc.ankr.com/bsc",displayName:"Binance SmartChain Mainnet",blockExplorer:"https://bscscan.com",ticker:"BNB",tickerName:"Binance SmartChain"}:97===e?{chainNamespace:n,chainId:"0x61",rpcTarget:"https://rpc.ankr.com/bsc_testnet_chapel",displayName:"Binance SmartChain Testnet",blockExplorer:"https://testnet.bscscan.com",ticker:"BNB",tickerName:"Binance SmartChain"}:25===e?{chainNamespace:n,chainId:"0x19",rpcTarget:"https://rpc.cronos.org",displayName:"Cronos Mainnet",blockExplorer:"https://cronoscan.com/",ticker:"CRO",tickerName:"Cronos"}:338===e?{chainNamespace:n,chainId:"0x152",rpcTarget:"https://rpc-t3.cronos.org/",displayName:"Cronos Testnet",blockExplorer:"https://cronoscan.com/",ticker:"CRO",tickerName:"Cronos"}:8217===e?{chainNamespace:n,chainId:"0x2019",rpcTarget:"https://public-node-api.klaytnapi.com/v1/cypress",displayName:"Klaytn Mainnet",blockExplorer:"https://scope.klaytn.com",ticker:"KLAY",tickerName:"Klaytn"}:null}(t):e===d.SOLANA?function(e){var n=d.SOLANA;return 1===e?{chainNamespace:n,chainId:"0x1",rpcTarget:"https://rpc.ankr.com/solana",displayName:"Solana Mainnet",blockExplorer:"https://explorer.solana.com",ticker:"SOL",tickerName:"Solana"}:2===e?{chainNamespace:n,chainId:"0x2",rpcTarget:"https://api.testnet.solana.com",displayName:"Solana Testnet",blockExplorer:"https://explorer.solana.com?cluster=testnet",ticker:"SOL",tickerName:"Solana"}:3===e?{chainNamespace:n,chainId:"0x3",rpcTarget:"https://api.devnet.solana.com",displayName:"Solana Devnet",blockExplorer:"https://explorer.solana.com?cluster=devnet",ticker:"SOL",tickerName:"Solana"}:null}(t):null};function y(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,s.Z)(e);if(n){var i=(0,s.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,c.Z)(this,t)}}var m=function(e){(0,a.Z)(t,e);var n=y(t);function t(e,i){var a;return(0,r.Z)(this,t),a=n.call(this,i),(0,u.Z)((0,o.Z)(a),"code",void 0),(0,u.Z)((0,o.Z)(a),"message",void 0),a.code=e,a.message=i||"",Object.defineProperty((0,o.Z)(a),"name",{value:"Web3AuthError"}),a}return(0,i.Z)(t,[{key:"toJSON",value:function(){return{name:this.name,code:this.code,message:this.message}}},{key:"toString",value:function(){return JSON.stringify(this.toJSON())}}]),t}(p.s),E=function(e){(0,a.Z)(t,e);var n=y(t);function t(e,i){var a;return(0,r.Z)(this,t),a=n.call(this,e,i),Object.defineProperty((0,o.Z)(a),"name",{value:"WalletInitializationError"}),a}return(0,i.Z)(t,null,[{key:"fromCode",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new t(e,"".concat(t.messages[e],", ").concat(n))}},{key:"notFound",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5001,e)}},{key:"notInstalled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5002,e)}},{key:"notReady",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5003,e)}},{key:"windowBlocked",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5004,e)}},{key:"windowClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5005,e)}},{key:"incompatibleChainNameSpace",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5006,e)}},{key:"duplicateAdapterError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5007,e)}},{key:"invalidProviderConfigError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5008,e)}},{key:"providerNotReadyError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5009,e)}},{key:"rpcConnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5010,e)}},{key:"invalidParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5011,e)}},{key:"invalidNetwork",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5013,e)}}]),t}(m);(0,u.Z)(E,"messages",{5e3:"Custom",5001:"Wallet is not found",5002:"Wallet is not installed",5003:"Wallet is not ready yet",5004:"Wallet window is blocked",5005:"Wallet window has been closed by the user",5006:"Incompatible chain namespace provided",5007:"Adapter has already been included",5008:"Invalid provider Config",5009:"Provider is not ready yet",5010:"Failed to connect with rpc url",5011:"Invalid params passed in",5013:"Invalid network provided"});var k=function(e){(0,a.Z)(t,e);var n=y(t);function t(e,i){var a;return(0,r.Z)(this,t),a=n.call(this,e,i),Object.defineProperty((0,o.Z)(a),"name",{value:"WalletLoginError"}),a}return(0,i.Z)(t,null,[{key:"fromCode",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new t(e,"".concat(t.messages[e]).concat(n))}},{key:"connectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5111,e)}},{key:"disconnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5112,e)}},{key:"notConnectedError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5113,e)}},{key:"popupClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.fromCode(5114,e)}}]),t}(m);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}(0,u.Z)(k,"messages",{5e3:"Custom",5111:"Failed to connect with wallet",5112:"Failed to disconnect from wallet",5113:"Wallet is not connected",5114:"Wallet popup has been closed by the user"});var O={OPENLOGIN:"openlogin",WALLET_CONNECT_V1:"wallet-connect-v1",WALLET_CONNECT_V2:"wallet-connect-v2"},P=C({TORUS_SOLANA:"torus-solana",PHANTOM:"phantom",SOLLET:"sollet",SOLLET_EXTENSION:"sollet-extension",SOLFLARE:"solflare",SLOPE:"slope"},O),b=C({TORUS_EVM:"torus-evm",METAMASK:"metamask",COINBASE:"coinbase"},O),w=C(C({},b),P);function x(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,s.Z)(e);if(n){var i=(0,s.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,c.Z)(this,t)}}function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z={EXTERNAL:"external",IN_APP:"in_app"},R={NOT_READY:"not_ready",READY:"ready",CONNECTING:"connecting",CONNECTED:"connected",DISCONNECTED:"disconnected",ERRORED:"errored"},A=I(I({},R),{},{ADAPTER_DATA_UPDATED:"adapter_data_updated"}),S=function(e){(0,a.Z)(t,e);var n=x(t);function t(){var e;(0,r.Z)(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return e=n.call.apply(n,[this].concat(a)),(0,u.Z)((0,o.Z)(e),"adapterData",{}),(0,u.Z)((0,o.Z)(e),"sessionTime",86400),(0,u.Z)((0,o.Z)(e),"chainConfig",null),e}return(0,i.Z)(t,[{key:"chainConfigProxy",get:function(){return this.chainConfig?I({},this.chainConfig):null}},{key:"setChainConfig",value:function(e){if(this.status!==R.READY){if(!e.chainNamespace)throw E.notReady("ChainNamespace is required while setting chainConfig");var n=g(e.chainNamespace,e.chainId);this.chainConfig=I(I({},n),e)}}},{key:"setAdapterSettings",value:function(e){}},{key:"checkConnectionRequirements",value:function(){if(this.name!==w.WALLET_CONNECT_V1||this.status!==R.CONNECTING){if(this.status===R.CONNECTING)throw E.notReady("Already connecting");if(this.status===R.CONNECTED)throw k.connectionError("Already connected");if(this.status!==R.READY)throw k.connectionError("Wallet adapter is not ready yet, Please wait for init function to resolve before calling connect/connectTo function");if(!this.clientId)throw k.connectionError("Please initialize Web3Auth with a valid clientId in constructor")}}},{key:"checkInitializationRequirements",value:function(){if(this.status!==R.NOT_READY){if(this.status===R.CONNECTED)throw E.notReady("Already connected");if(this.status===R.READY)throw E.notReady("Adapter is already initialized")}}},{key:"updateAdapterData",value:function(e){this.adapterData=e,this.emit(A.ADAPTER_DATA_UPDATED,{adapterName:this.name,data:e})}}]),t}(l.Ue),D=f().getLogger("web3auth-logger");var M=function(e){return("string"===typeof e||"number"===typeof e)&&/^(-)?0x[0-9a-f]*$/i.test(e)}}}]);