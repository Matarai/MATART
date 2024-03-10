"use strict";(self.webpackChunkmatar_frontend=self.webpackChunkmatar_frontend||[]).push([[8375],{83506:(t,e,a)=>{a.d(e,{g:()=>s,i:()=>i});var r=a(29278);function i(t){const e=new URL(t).hostname;return e.endsWith(".thirdweb.com")||e.endsWith(".thirdweb-dev.com")||"localhost"===e||"0.0.0.0"===e}function s(t){return(0,r.OZ$)(t).map((t=>{try{const e=new URL(t);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch(e){return t}}))}},68375:(t,e,a)=>{a.d(e,{SmartWalletConnector:()=>S});var r=a(20684),i=a(30520),s=a(49716),n=a(88062),o=a(65054),c=a(2257),d=a(11420),h=a(68408),l=a(9970),u=a(68624),g=a(97419),w=a(83374),p=a(6222),m=a(83506),y=a(63952),f=a(2600),A=a(6989),v=a(13452),P=a(15283),I=a(62624),O=a(29278);a(65892);async function T(t){const e=await i.resolveProperties(t);return Object.keys(e).map((t=>{let a=e[t];return"string"===typeof a&&a.startsWith("0x")||(a=s.hexValue(a)),[t,a]})).reduce(((t,e)=>{let[a,r]=e;return{...t,[a]:r}}),{})}const x=()=>{let t=(()=>{const t=BigInt(Math.floor(4294967296*Math.random())),e=BigInt(Math.floor(4294967296*Math.random())),a=BigInt(Math.floor(4294967296*Math.random())),r=BigInt(Math.floor(4294967296*Math.random())),i=BigInt(Math.floor(4294967296*Math.random())),s=BigInt(Math.floor(4294967296*Math.random()));return t<<BigInt(160)|e<<BigInt(128)|a<<BigInt(96)|r<<BigInt(64)|i<<BigInt(32)|s})().toString(16);return t.length%2!==0&&(t="0"+t),t="0x"+t,c.O$.from(s.concat([t,"0x0000000000000000"]))};class b{}var C="@thirdweb-dev/wallets",G="2.4.3";class U{constructor(t,e,a,r,i){this.bundlerUrl=t,this.entryPointAddress=e,this.chainId=a;const s={};if((0,m.i)(this.bundlerUrl)){const t="undefined"!==typeof globalThis&&"APP_BUNDLE_ID"in globalThis?globalThis.APP_BUNDLE_ID:void 0;i?s["x-secret-key"]=i:r&&(s["x-client-id"]=r,t&&(s["x-bundle-id"]=t)),"undefined"!==typeof globalThis&&"TW_AUTH_TOKEN"in globalThis&&"string"===typeof globalThis.TW_AUTH_TOKEN&&(s.authorization="Bearer ".concat(globalThis.TW_AUTH_TOKEN)),"undefined"!==typeof globalThis&&"TW_CLI_AUTH_TOKEN"in globalThis&&"string"===typeof globalThis.TW_CLI_AUTH_TOKEN&&(s.authorization="Bearer ".concat(globalThis.TW_CLI_AUTH_TOKEN),s["x-authorize-wallet"]="true"),s["x-sdk-version"]=G,s["x-sdk-name"]=C,s["x-sdk-platform"]=t?"react-native":void 0!==window.bridge?"webGL":"browser"}this.userOpJsonRpcProvider=new d.r({url:this.bundlerUrl,headers:s},{name:"Connected bundler network",chainId:a}),this.initializing=this.validateChainId()}async validateChainId(){const t=await this.userOpJsonRpcProvider.send("eth_chainId",[]),e=parseInt(t);if(e!==this.chainId)throw new Error("bundler ".concat(this.bundlerUrl," is on chainId ").concat(e,", but provider is on chainId ").concat(this.chainId))}async sendUserOpToBundler(t){await this.initializing;const e=await T(t),a=[e,this.entryPointAddress];return await this.printUserOperation("eth_sendUserOperation",a),await this.userOpJsonRpcProvider.send("eth_sendUserOperation",[e,this.entryPointAddress])}async estimateUserOpGas(t){await this.initializing;const e=await T(t),a=[e,this.entryPointAddress];return await this.printUserOperation("eth_estimateUserOperationGas",a),await this.userOpJsonRpcProvider.send("eth_estimateUserOperationGas",[e,this.entryPointAddress])}async printUserOperation(t,e){}}class E extends b{constructor(t,e,a,r){super(),this.paymasterUrl=t,this.entryPoint=e,this.clientId=a,this.secretKey=r}async getPaymasterAndData(t){const e={"Content-Type":"application/json"};if((0,m.i)(this.paymasterUrl)){if(this.secretKey&&this.clientId)throw new Error("Cannot use both secret key and client ID. Please use secretKey for server-side applications and clientId for client-side applications.");this.secretKey?e["x-secret-key"]=this.secretKey:this.clientId&&(e["x-client-id"]=this.clientId,"undefined"!==typeof globalThis&&"APP_BUNDLE_ID"in globalThis&&(e["x-bundle-id"]=globalThis.APP_BUNDLE_ID)),"undefined"!==typeof globalThis&&"TW_AUTH_TOKEN"in globalThis&&"string"===typeof globalThis.TW_AUTH_TOKEN&&(e.authorization="Bearer ".concat(globalThis.TW_AUTH_TOKEN)),"undefined"!==typeof globalThis&&"TW_CLI_AUTH_TOKEN"in globalThis&&"string"===typeof globalThis.TW_CLI_AUTH_TOKEN&&(e.authorization="Bearer ".concat(globalThis.TW_CLI_AUTH_TOKEN),e["x-authorize-wallet"]="true")}const a=await fetch(this.paymasterUrl,{method:"POST",headers:e,body:JSON.stringify({jsonrpc:"2.0",id:1,method:"pm_sponsorUserOperation",params:[await T(t),this.entryPoint]})}),r=await a.json();if(!a.ok){const t=r.error||a.statusText,e=r.code||"UNKNOWN";throw new Error("Paymaster error: ".concat(t,"\nStatus: ").concat(a.status,"\nCode: ").concat(e))}if(r.result)return"string"===typeof r.result?{paymasterAndData:r.result}:r.result;{var i;const t=(null===(i=r.error)||void 0===i?void 0:i.message)||r.error||a.statusText||"unknown error";throw new Error("Paymaster error from ".concat(this.paymasterUrl,": ").concat(t))}}}const L=(t,e,a,r)=>new E(t,e,a,r);class D{constructor(t,e,a,r,i,s,n){this.resolve=t,this.reject=e,this.entryPoint=a,this.sender=r,this.userOpHash=i,this.nonce=s,this.timeout=n,(0,f._)(this,"resolved",!1),this.boundLisener=this.listenerCallback.bind(this)}start(){const t=this.entryPoint.filters.UserOperationEvent(this.userOpHash);setTimeout((async()=>{const e=await this.entryPoint.queryFilter(t,-10);e.length>0?this.listenerCallback(e[0]):this.entryPoint.once(t,this.boundLisener)}),100)}stop(){this.entryPoint.off("UserOperationEvent",this.boundLisener)}async listenerCallback(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];const r=arguments[arguments.length-1];if(!r.args)return void console.error("got event without args",r);var i;if(r.args.userOpHash!==this.userOpHash)return void console.log("== event with wrong userOpHash: sender/nonce: event.".concat(r.args.sender,"@").concat(r.args.nonce.toString(),"!= userOp.").concat(this.sender,"@").concat(parseInt(null===(i=this.nonce)||void 0===i?void 0:i.toString())));const s=await r.getTransactionReceipt();r.args.success||await this.extractFailureReason(s),this.stop(),this.resolve(s),this.resolved=!0}async extractFailureReason(t){t.status=0;const e=await this.entryPoint.queryFilter(this.entryPoint.filters.UserOperationRevertReason(this.userOpHash,this.sender),t.blockHash);if(e[0]){let t=e[0].args.revertReason;t.startsWith("0x08c379a0")&&(t=o.$.decode(["string"],"0x"+t.substring(10)).toString()),this.reject(new Error("UserOp failed with reason: ".concat(t)))}}}class k extends h.Signer{constructor(t,e,a,r,s){super(),i.defineReadOnly(this,"provider",a),this.config=t,this.originalSigner=e,this.erc4337provider=a,this.httpRpcClient=r,this.smartAccountAPI=s}async sendTransaction(t,e){var a;const r=await i.resolveProperties(t);await this.verifyAllNecessaryFields(r);const s=x(),n=await this.smartAccountAPI.createUnsignedUserOp(this.httpRpcClient,{target:r.to||"",data:(null===(a=r.data)||void 0===a?void 0:a.toString())||"0x",value:r.value,gasLimit:r.gasLimit,nonce:s,maxFeePerGas:r.maxFeePerGas,maxPriorityFeePerGas:r.maxPriorityFeePerGas},e),o=await this.smartAccountAPI.signUserOp(n),c=await this.erc4337provider.constructUserOpTransactionResponse(o);try{await this.httpRpcClient.sendUserOpToBundler(o)}catch(d){throw this.unwrapError(d)}return c}unwrapError(t){try{let i="Unknown Error";if(t.error)i="The bundler has failed to include UserOperation in a batch: ".concat(t.error);else if(t.body&&"string"===typeof t.body){var e,a,r;const s=JSON.parse(t.body),n=t.status||"UNKNOWN",o=(null===s||void 0===s?void 0:s.code)||"UNKNOWN";let c=(null===s||void 0===s||null===(e=s.error)||void 0===e?void 0:e.message)||(null===s||void 0===s||null===(a=s.error)||void 0===a?void 0:a.data)||(null===s||void 0===s?void 0:s.error)||t.reason;if(null!==(r=c)&&void 0!==r&&r.includes("FailedOp")){let t="";const e=c.match(/FailedOp\((.*)\)/);if(e){const a=e[1].split(",");t="(paymaster address: ".concat(a[1],")"),c=a[2]}i="The bundler has failed to include UserOperation in a batch: ".concat(c," ").concat(t)}else i="RPC error: ".concat(c,"\nStatus: ").concat(n,"\nCode: ").concat(o)}const s=new Error(i);return s.stack=t.stack,s}catch(i){}return t}async verifyAllNecessaryFields(t){if(!t.to)throw new Error("Missing call target");if(!t.data&&!t.value)throw new Error("Missing call data or value")}connect(t){throw new Error("changing providers is not supported")}async getAddress(){return this.address||(this.address=await this.erc4337provider.getSenderAccountAddress()),this.address}async signMessage(t){if(await this.smartAccountAPI.checkAccountPhantom()){console.log("Account contract not deployed yet. Deploying account before signing message");const t=await this.sendTransaction({to:await this.getAddress(),data:"0x"});await t.wait()}return await this.originalSigner.signMessage(t)}async signTransaction(t,e){var a;const r=await i.resolveProperties(t);await this.verifyAllNecessaryFields(r);const s=x(),n=await this.smartAccountAPI.createUnsignedUserOp(this.httpRpcClient,{target:r.to||"",data:(null===(a=r.data)||void 0===a?void 0:a.toString())||"0x",value:r.value,gasLimit:r.gasLimit,nonce:s},e),o=await this.smartAccountAPI.signUserOp(n);return JSON.stringify(await T(o))}}class F extends l.Zk{constructor(t,e,a,r,i,s,n){super({name:"ERC-4337 Custom Network",chainId:t}),this.chainId=t,this.config=e,this.originalSigner=a,this.originalProvider=r,this.httpRpcClient=i,this.entryPoint=s,this.smartAccountAPI=n,this.signer=new k(e,a,this,i,n)}getSigner(){return this.signer}async perform(t,e){if("sendTransaction"===t||"getTransactionReceipt"===t)throw new Error("Should not get here. Investigate.");return"estimateGas"===t?c.O$.from(5e5):await this.originalProvider.perform(t,e)}async getTransaction(t){return await super.getTransaction(t)}async getTransactionReceipt(t){const e=await t,a=await this.getSenderAccountAddress();return await new Promise(((t,r)=>{new D(t,r,this.entryPoint,a,e).start()}))}async getSenderAccountAddress(){return await this.smartAccountAPI.getAccountAddress()}async waitForTransaction(t,e,a){const r=await this.getSenderAccountAddress();return await new Promise(((e,i)=>{new D(e,i,this.entryPoint,r,t,void 0,a).start()}))}async constructUserOpTransactionResponse(t){const e=await i.resolveProperties(t),a=await this.smartAccountAPI.getUserOpHash(e),r=async()=>await new Promise(((t,r)=>{new D(t,r,this.entryPoint,e.sender,a,e.nonce).start()}));return{hash:a,confirmations:0,from:e.sender,nonce:0,gasLimit:c.O$.from(e.callGasLimit),value:c.O$.from(0),data:s.hexValue(e.callData),chainId:this.chainId,wait:async t=>{const a=await r();return 0!==e.initCode.length&&await this.smartAccountAPI.checkAccountPhantom(),a}}}async detectNetwork(){return this.originalProvider.detectNetwork()}}class _{constructor(t){(0,f._)(this,"isPhantom",!0),this.provider=t.provider,this.entryPointAddress=t.entryPointAddress,this.accountAddress=t.accountAddress,this.paymasterAPI=t.paymasterAPI,this.gasless=t.gasless,this.entryPointView=y.EntryPoint__factory.connect(t.entryPointAddress,t.provider).connect(u.d)}async checkAccountPhantom(){if(!this.isPhantom)return this.isPhantom;return(await this.provider.getCode(this.getAccountAddress())).length>2&&(this.isPhantom=!1),this.isPhantom}async getInitCode(){return await this.checkAccountPhantom()?await this.getAccountInitCode():"0x"}async getVerificationGasLimit(){return 1e5}async getUserOpHash(t){const e=await this.provider.getNetwork().then((t=>t.chainId));return async function(t,e,a){const r=await i.resolveProperties(t),s={sender:r.sender,nonce:r.nonce,initCodeHash:n.keccak256(r.initCode),callDataHash:n.keccak256(r.callData),callGasLimit:r.callGasLimit,verificationGasLimit:r.verificationGasLimit,preVerificationGas:r.preVerificationGas,maxFeePerGas:r.maxFeePerGas,maxPriorityFeePerGas:r.maxPriorityFeePerGas,paymasterAndDataHash:n.keccak256(r.paymasterAndData)},c=o.$.encode([{components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes32",name:"initCodeHash"},{type:"bytes32",name:"callDataHash"},{type:"uint256",name:"callGasLimit"},{type:"uint256",name:"verificationGasLimit"},{type:"uint256",name:"preVerificationGas"},{type:"uint256",name:"maxFeePerGas"},{type:"uint256",name:"maxPriorityFeePerGas"},{type:"bytes32",name:"paymasterAndDataHash"}],name:"hashedUserOp",type:"tuple"}],[{...s}]),d=n.keccak256(c),h=o.$.encode(["bytes32","address","uint256"],[d,e,a]);return n.keccak256(h)}(t,this.entryPointAddress,e)}async getAccountAddress(){return this.senderAddress||(this.accountAddress?this.senderAddress=this.accountAddress:this.senderAddress=await this.getCounterFactualAddress()),this.senderAddress}async estimateCreationGas(t){if(!t||"0x"===t)return 0;const e=t.substring(0,42),a="0x"+t.substring(42);return await this.provider.estimateGas({to:e,data:a})}async createUnsignedUserOp(t,e,a){var r;const i=await this.getInitCode(),s=null!==(r=function(t){if(!t||""===t)return null;return c.O$.from(t.toString())}(e.value))&&void 0!==r?r:c.O$.from(0),n=null!==a&&void 0!==a&&a.batchData?e.data:await this.prepareExecute(e.target,s,e.data).then((t=>t.encode()));let{maxFeePerGas:o,maxPriorityFeePerGas:d}=e;if(!o||!d){const t=await(0,v.a)(this.provider);var h;if(!d)d=null!==(h=t.maxPriorityFeePerGas)&&void 0!==h?h:void 0;if(!o){var l;o=null!==(l=t.maxFeePerGas)&&void 0!==l?l:void 0;const e=(await this.provider.getNetwork()).chainId;e!==O.Lll.chainId&&e!==O.M8s.chainId&&e!==O.m3x.chainId||(d=o)}}if(!o||!d)throw new Error("maxFeePerGas or maxPriorityFeePerGas could not be calculated, please pass them explicitely");const[u,g]=await Promise.all([this.getAccountAddress(),e.nonce?Promise.resolve(e.nonce):this.getNonce()]),w={sender:u,nonce:g,initCode:i,callData:n,maxFeePerGas:o,maxPriorityFeePerGas:d,callGasLimit:c.O$.from(1e6),verificationGasLimit:c.O$.from(1e6),preVerificationGas:c.O$.from(1e6),paymasterAndData:"0x",signature:"0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c"};if(void 0!==(null===a||void 0===a?void 0:a.gasless)?a.gasless:this.gasless){const e=await this.paymasterAPI.getPaymasterAndData(w),a=e.paymasterAndData;if(a&&"0x"!==a&&(w.paymasterAndData=a),e.callGasLimit&&e.verificationGasLimit&&e.preVerificationGas)w.callGasLimit=c.O$.from(e.callGasLimit),w.verificationGasLimit=c.O$.from(e.verificationGasLimit),w.preVerificationGas=c.O$.from(e.preVerificationGas);else{let e;try{e=await t.estimateUserOpGas(w)}catch(p){throw this.unwrapBundlerError(p)}w.callGasLimit=c.O$.from(e.callGasLimit),w.verificationGasLimit=c.O$.from(e.verificationGasLimit),w.preVerificationGas=c.O$.from(e.preVerificationGas);const a=await this.paymasterAPI.getPaymasterAndData(w);a.paymasterAndData&&"0x"!==a.paymasterAndData&&(w.paymasterAndData=a.paymasterAndData)}}else{let e;try{e=await t.estimateUserOpGas(w)}catch(p){throw this.unwrapBundlerError(p)}w.callGasLimit=c.O$.from(e.callGasLimit),w.verificationGasLimit=c.O$.from(e.verificationGasLimit),w.preVerificationGas=c.O$.from(e.preVerificationGas)}return{...w,signature:""}}async signUserOp(t){const e=await this.getUserOpHash(t),a=await this.signUserOpHash(e);return{...t,signature:a}}async getUserOpReceipt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;const r=Date.now()+e;for(;Date.now()<r;){const e=await this.entryPointView.queryFilter(this.entryPointView.filters.UserOperationEvent(t));if(e[0])return e[0].transactionHash;await new Promise((t=>setTimeout(t,a)))}return null}unwrapBundlerError(t){var e;const a=(null===t||void 0===t||null===(e=t.error)||void 0===e?void 0:e.message)||t.error||t.message||t;return new Error(a)}}class N extends _{constructor(t,e){super({...t,provider:e}),this.params=t,this.sdk=P.T.fromPrivateKey(P.L,t.chain,{clientId:t.clientId,secretKey:t.secretKey,supportedChains:"object"===typeof t.chain?[t.chain]:void 0})}async getChainId(){return await this.provider.getNetwork().then((t=>t.chainId))}async getAccountContract(){var t;this.accountContract||(null!==(t=this.params.accountInfo)&&void 0!==t&&t.abi?this.accountContract=await this.sdk.getContract(await this.getAccountAddress(),this.params.accountInfo.abi):this.accountContract=await this.sdk.getContract(await this.getAccountAddress(),A.A));return this.accountContract}async getAccountInitCode(){const t=await this.getFactoryContract();console.log("Deploying smart wallet via factory");const e=await this.params.localSigner.getAddress(),a=await this.params.factoryInfo.createAccount(t,e);try{console.log("Cost to deploy smart wallet: ",(await a.estimateGasCost()).ether,"ETH")}catch(r){console.error("Cost to deploy smart wallet: unknown",r)}return s.hexConcat([t.getAddress(),a.encode()])}async getFactoryContract(){var t;return this.factoryContract||(null!==(t=this.params.factoryInfo)&&void 0!==t&&t.abi?this.factoryContract=await this.sdk.getContract(this.params.factoryAddress,this.params.factoryInfo.abi):this.factoryContract=await this.sdk.getContract(this.params.factoryAddress)),this.factoryContract}async getCounterFactualAddress(){if(this.params.accountAddress)return this.params.accountAddress;const t=await this.getFactoryContract(),e=await this.params.localSigner.getAddress();return this.params.factoryInfo.getAccountAddress(t,e)}async getNonce(){if(await this.checkAccountPhantom())return c.O$.from(0);const t=await this.getAccountContract();return this.params.accountInfo.getNonce(t)}async prepareExecute(t,e,a){const r=await this.getAccountContract();return this.params.accountInfo.execute(r,t,e,a)}async prepareExecuteBatch(t,e,a){return(await this.getAccountContract()).prepare("executeBatch",[t,e,a])}async signUserOpHash(t){return await this.params.localSigner.signMessage(s.arrayify(t))}async isAcountDeployed(){return!await this.checkAccountPhantom()}}class S extends r.C{constructor(t){super(),this.config=t}async initialize(t){const e=this.config,a=(0,I.a_)(e.chain,{clientId:e.clientId,secretKey:e.secretKey});this.chainId=(await a.getNetwork()).chainId;const r=this.config.bundlerUrl||"https://".concat(this.chainId,".bundler.thirdweb.com"),i=this.config.paymasterUrl||"https://".concat(this.chainId,".bundler.thirdweb.com/v2"),s=e.entryPointAddress||A.E,n=await t.personalWallet.getSigner(),o={chain:e.chain,localSigner:n,entryPointAddress:s,bundlerUrl:r,paymasterAPI:this.config.paymasterAPI?this.config.paymasterAPI:L(i,s,this.config.clientId,this.config.secretKey),gasless:e.gasless,factoryAddress:e.factoryAddress,accountAddress:t.accountAddress,factoryInfo:e.factoryInfo||this.defaultFactoryInfo(),accountInfo:e.accountInfo||this.defaultAccountInfo(),clientId:e.clientId,secretKey:e.secretKey};this.personalWallet=t.personalWallet;const c=new N(o,a);this.aaProvider=function(t,e,a,r){const i=y.EntryPoint__factory.connect(t.entryPointAddress,a),s=new U(t.bundlerUrl,t.entryPointAddress,r,t.clientId,t.secretKey);return new F(r,t,t.localSigner,a,s,i,e)}(o,c,a,this.chainId),this.accountApi=c}async connect(t){return await this.initialize(t),await this.getAddress()}getProvider(){if(!this.aaProvider)throw new Error("Personal wallet not connected");return Promise.resolve(this.aaProvider)}async getSigner(){if(!this.aaProvider)throw new Error("Personal wallet not connected");return Promise.resolve(this.aaProvider.getSigner())}async getAddress(){return(await this.getSigner()).getAddress()}async isConnected(){try{return!!await this.getAddress()}catch(t){return!1}}async disconnect(){this.personalWallet=void 0,this.aaProvider=void 0}async switchChain(t){const e=await this.getProvider();if((await e.getNetwork()).chainId!==t)throw new Error("Not supported.")}setupListeners(){return Promise.resolve()}updateChains(t){}async hasPermissionToExecute(t){var e;const a=await this.getAccountContract(),r=await this.getSigner(),i=await r.getAddress(),s=null===(e=(await a.account.getAllSigners()).filter((t=>g.getAddress(t.signer)===g.getAddress(i)))[0])||void 0===e?void 0:e.permissions;return!!s&&s.approvedCallTargets.includes(t.getTarget())}async send(t,e){return(await this.getSigner()).sendTransaction({to:t.getTarget(),data:t.encode(),value:await t.getValue()},e)}async execute(t,e){const a=await this.send(t,e);return{receipt:await a.wait()}}async sendBatch(t,e){if(!this.accountApi)throw new Error("Personal wallet not connected");const a=await this.getSigner(),{tx:r,batchData:i}=await this.prepareBatchTx(t);return await a.sendTransaction({to:await a.getAddress(),data:r.encode(),value:0},{...e,batchData:i})}async executeBatch(t,e){const a=await this.sendBatch(t,e);return{receipt:await a.wait()}}async sendRaw(t,e){if(!this.accountApi)throw new Error("Personal wallet not connected");return(await this.getSigner()).sendTransaction(t,e)}async executeRaw(t,e){const a=await this.sendRaw(t,e);return{receipt:await a.wait()}}async sendBatchRaw(t,e){if(!this.accountApi)throw new Error("Personal wallet not connected");const a=await this.getSigner(),r=await this.prepareBatchRaw(t);return a.sendTransaction({to:await a.getAddress(),data:r.tx.encode(),value:0},{...e,batchData:r.batchData})}async executeBatchRaw(t,e){const a=await this.sendBatchRaw(t,e);return{receipt:await a.wait()}}async estimate(t,e){if(!this.accountApi)throw new Error("Personal wallet not connected");return this.estimateTx({target:t.getTarget(),data:t.encode(),value:await t.getValue(),gasLimit:await t.getOverrides().gasLimit,maxFeePerGas:await t.getOverrides().maxFeePerGas,maxPriorityFeePerGas:await t.getOverrides().maxPriorityFeePerGas,nonce:await t.getOverrides().nonce},e)}async estimateRaw(t,e){var a;if(!this.accountApi)throw new Error("Personal wallet not connected");const r=await i.resolveProperties(t);return this.estimateTx({target:r.to||u.d,data:(null===(a=r.data)||void 0===a?void 0:a.toString())||"",value:r.value||c.O$.from(0),gasLimit:r.gasLimit,maxFeePerGas:r.maxFeePerGas,maxPriorityFeePerGas:r.maxPriorityFeePerGas,nonce:r.nonce},e)}async estimateBatch(t,e){if(!this.accountApi)throw new Error("Personal wallet not connected");const{tx:a,batchData:r}=await this.prepareBatchTx(t);return this.estimateTx({target:a.getTarget(),data:a.encode(),value:await a.getValue(),gasLimit:await a.getOverrides().gasLimit,maxFeePerGas:await a.getOverrides().maxFeePerGas,maxPriorityFeePerGas:await a.getOverrides().maxPriorityFeePerGas,nonce:await a.getOverrides().nonce},{...e,batchData:r})}async estimateBatchRaw(t,e){if(!this.accountApi)throw new Error("Personal wallet not connected");const{tx:a,batchData:r}=await this.prepareBatchRaw(t);return this.estimateTx({target:a.getTarget(),data:a.encode(),value:await a.getValue(),gasLimit:await a.getOverrides().gasLimit,maxFeePerGas:await a.getOverrides().maxFeePerGas,maxPriorityFeePerGas:await a.getOverrides().maxPriorityFeePerGas,nonce:await a.getOverrides().nonce},{...e,batchData:r})}async deploy(t){if(!this.accountApi)throw new Error("Personal wallet not connected");const e=await this.getSigner(),a=await e.sendTransaction({to:await e.getAddress(),data:"0x"},{...t,batchData:{targets:[],data:[],values:[]}});return{receipt:await a.wait()}}async isDeployed(){if(!this.accountApi)throw new Error("Personal wallet not connected");return await this.accountApi.isAcountDeployed()}async deployIfNeeded(t){await this.isDeployed()||await this.deploy(t)}async grantPermissions(t,e){await this.deployIfNeeded();return(await this.getAccountContract()).account.grantPermissions(t,e)}async revokePermissions(t){await this.deployIfNeeded();return(await this.getAccountContract()).account.revokeAccess(t)}async addAdmin(t){await this.deployIfNeeded();return(await this.getAccountContract()).account.grantAdminPermissions(t)}async removeAdmin(t){await this.deployIfNeeded();return(await this.getAccountContract()).account.revokeAdminPermissions(t)}async getAllActiveSigners(){if(await this.isDeployed()){return(await this.getAccountContract()).account.getAllAdminsAndSigners()}{var t;const e=await(null===(t=this.personalWallet)||void 0===t?void 0:t.getSigner());if(!e)throw new Error("Personal wallet not connected");return[{isAdmin:!0,signer:await e.getAddress(),permissions:{startDate:new Date(0),expirationDate:new Date(0),nativeTokenLimitPerTransaction:c.O$.from(0),approvedCallTargets:[]}}]}}async getAccountContract(){var t;if(!await this.isDeployed())throw new Error("Account contract is not deployed yet. You can deploy it manually using SmartWallet.deploy(), or by executing a transaction from this wallet.");const e=P.T.fromSigner(await this.getSigner(),this.config.chain,{clientId:this.config.clientId,secretKey:this.config.secretKey});return null!==(t=this.config.accountInfo)&&void 0!==t&&t.abi?e.getContract(await this.getAddress(),this.config.accountInfo.abi):e.getContract(await this.getAddress())}async getFactoryContract(){var t;const e=P.T.fromSigner(await this.getSigner(),this.config.chain,{clientId:this.config.clientId,secretKey:this.config.secretKey});return null!==(t=this.config.factoryInfo)&&void 0!==t&&t.abi?e.getContract(this.config.factoryAddress,this.config.factoryInfo.abi):e.getContract(this.config.factoryAddress)}defaultFactoryInfo(){return{createAccount:async(t,e)=>t.prepare("createAccount",[e,w.Y0("")]),getAccountAddress:async(t,e)=>await t.call("getAddress",[e,w.Y0("")])}}defaultAccountInfo(){return{execute:async(t,e,a,r)=>t.prepare("execute",[e,a,r]),getNonce:async t=>t.call("getNonce",[])}}async estimateTx(t,e){if(!this.accountApi||!this.aaProvider)throw new Error("Personal wallet not connected");let a=c.O$.from(0);const[r,s]=await Promise.all([this.getProvider(),this.isDeployed()]);s||(a=await this.estimateDeploymentGasLimit());const[n,o]=await Promise.all([this.accountApi.createUnsignedUserOp(this.aaProvider.httpRpcClient,t,e),(0,v.b)(r)]),d=await i.resolveProperties(n),h=c.O$.from(d.callGasLimit),l=h.mul(o),u=a.mul(o),g=u.add(l);return{ether:p.formatEther(g),wei:g,details:{deployGasLimit:a,transactionGasLimit:h,gasPrice:o,transactionCost:l,deployCost:u,totalCost:g}}}async estimateDeploymentGasLimit(){if(!this.accountApi)throw new Error("Personal wallet not connected");const t=await this.accountApi.getInitCode(),[e,a]=await Promise.all([this.accountApi.estimateCreationGas(t),this.accountApi.getVerificationGasLimit()]);return c.O$.from(a).add(e)}async prepareBatchRaw(t){if(!this.accountApi)throw new Error("Personal wallet not connected");const e=await Promise.all(t.map((t=>i.resolveProperties(t)))),a=e.map((t=>t.to||u.d)),r=e.map((t=>t.data||"0x")),s=e.map((t=>t.value||c.O$.from(0)));return{tx:await this.accountApi.prepareExecuteBatch(a,s,r),batchData:{targets:a,data:r,values:s}}}async prepareBatchTx(t){if(!this.accountApi)throw new Error("Personal wallet not connected");const e=t.map((t=>t.getTarget())),a=t.map((t=>t.encode())),r=await Promise.all(t.map((t=>t.getValue())));return{tx:await this.accountApi.prepareExecuteBatch(e,r,a),batchData:{targets:e,data:a,values:r}}}}}}]);
//# sourceMappingURL=8375.649258bc.chunk.js.map