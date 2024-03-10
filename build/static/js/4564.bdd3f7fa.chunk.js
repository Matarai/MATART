"use strict";(self.webpackChunkmatar_frontend=self.webpackChunkmatar_frontend||[]).push([[4564],{72106:(t,r,a)=>{a.d(r,{C:()=>e});class e{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},43296:(t,r,a)=>{a.d(r,{C:()=>c});var e=a(64572),n=a(13452),s=a(62624);class c{constructor(t){(0,e.Z)(this,"featureName",s.dn.name),(0,e.Z)(this,"set",(0,n.d)((async t=>{const r=await s.bF.parseAsync(t);return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return s.bF.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},93578:(t,r,a)=>{a.d(r,{C:()=>c});var e=a(64572),n=a(13452),s=a(62624);class c{constructor(t){(0,e.Z)(this,"featureName",s.d2.name),(0,e.Z)(this,"setRecipient",(0,n.d)((async t=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},83224:(t,r,a)=>{a.d(r,{S:()=>i});var e=a(64572),n=a(62624),s=a(13452),c=a(67195);class i{get chainId(){return this._chainId}constructor(t,r,a){(0,e.Z)(this,"transfer",(0,s.d)((async(t,r)=>this.erc721.transfer.prepare(t,r)))),(0,e.Z)(this,"setApprovalForAll",(0,s.d)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)))),(0,e.Z)(this,"setApprovalForToken",(0,s.d)((async(t,r)=>s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,n.aL)(t),r]})))),this.contractWrapper=t,this.storage=r,this.erc721=new c.E(this.contractWrapper,this.storage,a),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await(0,n.aL)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await(0,n.aL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},24564:(t,r,a)=>{a.r(r),a.d(r,{SignatureDrop:()=>v});var e=a(64572),n=a(2257),s=a(68624),c=a(16140),i=a(62624),o=a(13452),p=a(56586),h=a(24113),l=a(72106),d=a(95403),u=a(43296),m=a(57428),y=a(93578),w=a(39774),g=a(83224),f=a(67195),W=a(98095);a(80518),a(31583),a(98528),a(78262);class v extends g.S{constructor(t,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cq(t,r,s,n,a),a,c),(0,e.Z)(this,"createBatch",(0,o.d)((async(t,r)=>this.erc721.lazyMint.prepare(t,r)))),(0,e.Z)(this,"claimTo",(0,o.d)((async(t,r,a)=>this.erc721.claimTo.prepare(t,r,a)))),(0,e.Z)(this,"claim",(0,o.d)((async(t,r)=>this.erc721.claim.prepare(t,r)))),(0,e.Z)(this,"burn",(0,o.d)((async t=>this.erc721.burn.prepare(t)))),this.abi=i.bj.parse(s||[]),this.metadata=new p.C(this.contractWrapper,i.bR,this.storage),this.app=new p.b(this.contractWrapper,this.metadata,this.storage),this.roles=new m.C(this.contractWrapper,v.contractRoles),this.royalties=new d.C(this.contractWrapper,this.metadata),this.sales=new y.C(this.contractWrapper),this.encoder=new h.C(this.contractWrapper),this.estimator=new p.G(this.contractWrapper),this.events=new p.a(this.contractWrapper),this.platformFees=new u.C(this.contractWrapper),this.interceptor=new l.C(this.contractWrapper),this.claimConditions=new w.D(this.contractWrapper,this.metadata,this.storage),this.signature=new f.a(this.contractWrapper,this.storage),this.revealer=new d.D(this.contractWrapper,this.storage,i.cN.name,(()=>this.erc721.nextTokenIdToMint())),this.signature=new f.a(this.contractWrapper,this.storage),this.owner=new d.a(this.contractWrapper),this.checkout=new W.P(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=n.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=n.O$.from((null===t||void 0===t?void 0:t.count)||c.D).toNumber(),e=Math.min((await this.totalClaimedSupply()).toNumber(),r+a);return await Promise.all(Array.from(Array(e).keys()).map((t=>this.get(t.toString()))))}async getAllUnclaimed(t){const r=n.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=n.O$.from((null===t||void 0===t?void 0:t.count)||c.D).toNumber(),e=n.O$.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),s=n.O$.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),e.toNumber()+a));return await Promise.all(Array.from(Array(s.sub(e).toNumber()).keys()).map((t=>this.erc721.getTokenMetadata(e.add(t).toString()))))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,i.H)("transfer"),s.d])}async getClaimTransaction(t,r,a){return this.erc721.getClaimTransaction(t,r,a)}async prepare(t,r,a){return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}(0,e.Z)(v,"contractRoles",i.dz)},98095:(t,r,a)=>{a.d(r,{P:()=>p});var e=a(62624),n=a(44554);const s="".concat("https://paper.xyz/api","/").concat("2022-08-12","/platform/thirdweb"),c={[e.aS.Mainnet]:"Ethereum",[e.aS.Goerli]:"Goerli",[e.aS.Polygon]:"Polygon",[e.aS.Mumbai]:"Mumbai",[e.aS.Avalanche]:"Avalanche"};async function i(t,r){const a=function(t){return(0,n.Z)(t in c,"chainId not supported by paper: ".concat(t)),c[t]}(r),e=await fetch("".concat(s,"/register-contract?contractAddress=").concat(t,"&chain=").concat(a)),i=await e.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}const o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};class p{constructor(t){this.contractWrapper=t}async getCheckoutId(){return i(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await async function(t,r){const a=await fetch("".concat(s,"/checkout-link-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),e=await a.json();return(0,n.Z)(e.checkoutLinkIntentUrl,"Failed to create checkout link intent"),e.checkoutLinkIntentUrl}(await this.getCheckoutId(),t)}}}}]);
//# sourceMappingURL=4564.bdd3f7fa.chunk.js.map