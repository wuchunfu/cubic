(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e68a72e"],{"360c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container case-list-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("实例列表")]),a("span",{staticStyle:{float:"right",padding:"4px 10px"}},[a("el-date-picker",{attrs:{"picker-options":t.pickerOptions,type:"datetime",size:"mini",placeholder:"选择启动时间","value-format":"yyyy-MM-dd HH:mm:ss",format:"yyyy-MM-dd HH:mm:ss",align:"right"},model:{value:t.searchForm.date,callback:function(e){t.$set(t.searchForm,"date",e)},expression:"searchForm.date"}}),a("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.getList}},[t._v("搜索")])],1)]),a("div",{staticClass:"case-info"},[a("el-tag",[t._v("在线应用："+t._s(t.caseInfo.services))]),a("el-tag",{attrs:{type:"success"}},[t._v("在线实例数："+t._s(t.caseInfo.instances))]),a("el-input",{staticStyle:{width:"220px"},attrs:{size:"mini",placeholder:"应用名称:输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.instanceName.toLowerCase().includes(t.search.toLowerCase())})),border:"",size:"small","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"instanceName",label:"应用唯一标识","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tooltip",{attrs:{content:i.instanceName,placement:"top",effect:"dark"}},[a("el-button",{staticStyle:{"font-size":"12px"},attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.goInstanceFn(i)}}},[t._v(t._s(i.instanceName))])],1)]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"instanceName",label:"实例名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"host",label:"主机名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"ip",label:"IP"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"version",label:"Agent版本"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"startDate",label:"启动时间"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"startDate",label:"在线时长"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"lastHeartbeat",label:"最后心跳"}})],1)],1)],1)},s=[],n=(a("c740"),a("a434"),a("d3b7"),a("b775"));function o(t){return Object(n["a"])({url:"/app/getList",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(n["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}a("8d41");var d="@@wavesContext";function u(t,e){function a(a){var i=Object.assign({},e.value),s=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),n=s.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var o=n.getBoundingClientRect(),l=n.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",n.appendChild(l)),s.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-o.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-o.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=s.color,l.className="waves-ripple z-active",!1}}return t[d]?t[d].removeHandle=a:t[d]={removeHandle:a},a}var p={bind:function(t,e){t.addEventListener("click",u(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[d].removeHandle,!1),t.addEventListener("click",u(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[d].removeHandle,!1),t[d]=null,delete t[d]}},m=function(t){t.directive("waves",p)};window.Vue&&(window.waves=p,Vue.use(m)),p.install=m;var h=p,f={name:"List",directives:{waves:h},data:function(){return{caseInfo:{services:0,instances:0},search:"",tableData:[],listLoading:!0,searchForm:{date:null},dialogVisible:!1,drawerVisible:!1,sort:"id_desc",pickerOptions:{shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,o({date:this.searchForm.date}).then((function(e){t.tableData=e.data.informations,t.total=e.data.total,t.caseInfo.services=e.data.services,t.caseInfo.instances=e.data.instances,setTimeout((function(){t.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作Success",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="vue-element-admin",r(t.temp).then((function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);a.timestamp=+new Date(a.timestamp),c(a).then((function(){var e=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(e,1,t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(t,e){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.list.splice(e,1)},handleFetchPv:function(t){var e=this;l(t).then((function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-489b8c18"),a.e("chunk-2125b98f")]).then(a.bind(null,"4bf8")).then((function(e){var a=["timestamp","title","type","importance","status"],i=["timestamp","title","type","importance","status"],s=t.formatJson(i);e.export_json_to_excel({header:a,data:s,filename:"table-list"}),t.downloadLoading=!1}))},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"}}},v=f,g=a("2877"),b=Object(g["a"])(v,i,s,!1,null,null,null);e["default"]=b.exports},"8d41":function(t,e,a){}}]);