"use strict";(self["webpackChunkportofolio_vue"]=self["webpackChunkportofolio_vue"]||[]).push([[934],{9934:function(t,e,l){l.r(e),l.d(e,{default:function(){return b}});var a=l(3396),i=l(7139);const n={class:"w-full md:w-3/5 h-20 mx-auto md:mt-5"},s={class:"bg-white rounded-xl mx-3 p-5 md:p-10 md:mx-0"},d={class:"text-xl md:text-4xl text-black text-left font-bold leading-relaxed"},o={class:"mt-3 text-left text-gray-800 text-sm"},c=(0,a._)("div",{class:"h-[2px] w-20 my-5 md:my-10 bg-[#48CAE4] md:w-1/3 aos-init aos-animate mr-2"},null,-1),u={class:"relative w-full",style:{"padding-top":"50%"}},r=["src"],m=["innerHTML"];function h(t,e,l,h,f,x){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("div",null,[(0,a._)("h1",d,(0,i.zw)(f.title),1),(0,a._)("div",o,[(0,a.Uk)("Published at "),(0,a._)("span",null,(0,i.zw)(f.date),1)]),c,(0,a._)("div",null,[(0,a._)("div",u,[(0,a._)("img",{src:f.image,class:"absolute top-0 left-0 rounded-lg w-full h-full object-cover",alt:"Thumbnail"},null,8,r)])]),(0,a._)("div",{class:"text-left text-black mt-8",innerHTML:f.content},null,8,m)])])])}var f=l(4161),x=l(2483),g={data(){return{route:(0,x.yj)(),title:"",image:"",date:"",content:""}},mounted(){this.getDetails()},methods:{async getDetails(){const t=this.route.params.id;f.Z.get("https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all/"+t).then((t=>{this.title=t.data.title,this.image=t.data.image,this.date=t.data.date,this.content=t.data.content}))}}},p=l(89);const v=(0,p.Z)(g,[["render",h]]);var b=v}}]);
//# sourceMappingURL=934.78e244a7.js.map