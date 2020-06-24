(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{511:function(t,a,o){"use strict";o.r(a);var n=o(14),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"mongodb-安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-安装"}},[t._v("#")]),t._v(" Mongodb 安装")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#%E5%AE%89%E8%A3%85"}},[t._v("安装")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#%E5%90%AF%E5%8A%A8"}},[t._v("启动")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#%E8%84%9A%E6%9C%AC"}},[t._v("脚本")])])]),t._v(" "),o("h2",{attrs:{id:"安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),o("p",[t._v("安装步骤如下：")]),t._v(" "),o("p",[t._v("（1）下载并解压到本地")]),t._v(" "),o("p",[t._v("进入官网下载地址：https://www.mongodb.com/download-center#community ，选择合适的版本下载。")]),t._v(" "),o("p",[t._v("我选择的是最新稳定版本 3.6.3：https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.3.tgz")]),t._v(" "),o("p",[t._v("我个人喜欢存放在："),o("code",[t._v("/opt/mongodb")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("wget -O /opt/mongodb/mongodb-linux-x86_64-3.6.3.tgz https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.3.tgz\ncd /opt/mongodb\ntar zxvf mongodb-linux-x86_64-3.6.3.tgz\nmv mongodb-linux-x86_64-3.6.3 mongodb-3.6.3\nmkdir -p /data/db\n")])])]),o("h2",{attrs:{id:"启动"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),o("p",[o("strong",[t._v("启动 mongodb 服务")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd /opt/mongodb/mongodb-3.6.3/bin\n./mongod --dbpath=/data/db\n")])])]),o("p",[o("strong",[t._v("启动 mongodb 客户端")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd /opt/mongodb/mongodb-3.6.3/bin\n./mongo\n")])])]),o("h2",{attrs:{id:"脚本"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[t._v("#")]),t._v(" 脚本")]),t._v(" "),o("p",[t._v("| "),o("a",{attrs:{href:"https://github.com/dunwu/linux-tutorial/tree/master/codes/linux/soft",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装脚本"),o("OutboundLink")],1),t._v(" |")])])}),[],!1,null,null,null);a.default=s.exports}}]);