"use strict";(self.webpackChunkmatar_frontend=self.webpackChunkmatar_frontend||[]).push([[6561],{91609:(t,n,s)=>{function i(t){return"string"===typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"===typeof t?Number(t):t}s.d(n,{n:()=>i})},6561:(t,n,s)=>{s.d(n,{LocalWalletConnector:()=>p});var i=s(63700),e=s(2600),a=s(91609),r=s(20684),o=s(13452),h=s(62624),c=s(68408),d=s(73580);s(65892);class g extends c.Signer{constructor(t){super(),this.signer=t,(0,d.defineReadOnly)(this,"provider",t.provider)}async getAddress(){return await this.signer.getAddress()}async signMessage(t){return await this.signer.signMessage(t)}async signTransaction(t){return await this.signer.signTransaction(t)}connect(t){return new g(this.signer.connect(t))}_signTypedData(t,n,s){return this.signer._signTypedData(t,n,s)}async sendTransaction(t){if(!this.provider)throw new Error("Provider not found");const n={...await(0,o.g)(this.provider),...t};return await this.signer.sendTransaction(n)}}var u=new WeakMap,l=new WeakMap;class p extends r.C{constructor(t){super(),(0,e._)(this,"id","local_wallet"),(0,e._)(this,"name","Local Wallet"),(0,i._)(this,u,{writable:!0,value:void 0}),(0,i._)(this,l,{writable:!0,value:void 0}),(0,e._)(this,"shimDisconnectKey","localWallet.shimDisconnect"),(0,e._)(this,"onChainChanged",(t=>{const n=(0,a.n)(t),s=!this.options.chains.find((t=>t.chainId===n));this.emit("change",{chain:{id:n,unsupported:s}})})),this.options=t}async connect(t){t.chainId&&this.switchChain(t.chainId);const n=await this.getSigner();return await n.getAddress()}async disconnect(){(0,i.a)(this,u,void 0),(0,i.a)(this,l,void 0)}async getAddress(){const t=await this.getSigner();if(!t)throw new Error("No signer found");return await t.getAddress()}async isConnected(){try{return!!await this.getAddress()}catch{return!1}}async getProvider(){return(0,i.b)(this,u)||(0,i.a)(this,u,(0,h.a_)(this.options.chain,{clientId:this.options.clientId,secretKey:this.options.secretKey})),(0,i.b)(this,u)}async getSigner(){if(!(0,i.b)(this,l)){const t=await this.getProvider();(0,i.a)(this,l,w(this.options.ethersWallet,t))}return(0,i.b)(this,l)}async switchChain(t){const n=this.options.chains.find((n=>n.chainId===t));if(!n)throw new Error("Chain not found for chainId ".concat(t,", please add it to the chains property when creating this wallet"));(0,i.a)(this,u,(0,h.a_)(n,{clientId:this.options.clientId,secretKey:this.options.secretKey})),(0,i.a)(this,l,w(this.options.ethersWallet,(0,i.b)(this,u))),this.onChainChanged(t)}async setupListeners(){}updateChains(t){this.options.chains=t}}function w(t,n){let s=t;return n&&(s=t.connect(n)),new g(s)}}}]);
//# sourceMappingURL=6561.0551e3e0.chunk.js.map