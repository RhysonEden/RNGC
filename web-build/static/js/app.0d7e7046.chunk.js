(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{212:function(e,t,a){"use strict";var n=a(41),o=a(337),r=a(23),i=a.n(r),c=a(0),l=a.n(c),s=a(21),u=a.n(s),m=a(152),h=a.n(m);var g=a(1),d=a(15),p=a(2),f=function(e){var t=e.message;e.setMessage;return l.a.createElement(p.a,null,t.map((function(e,t){return l.a.createElement(p.a,{style:b.container,key:t},l.a.createElement(d.a,{style:b.text},e.gvrid),1==e.prov?l.a.createElement(d.a,{style:b.text},"Active with Guardian Connect"):l.a.createElement(d.a,{style:b.text},"Provisioned, but not Active"))})))},b=g.a.create({text:{fontSize:25,textAlign:"center",marginTop:20},container:{flex:1,justifyContent:"space-between",backgroundColor:"#03e8fc",padding:20,margin:10,shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.8,shadowRadius:4}}),E=a(210),w=a(22),y=a(45),x=a(55),v=a(176),C=a(189),k=function(e){var t=e.books;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(w.a,{onPress:function(){x.a.openURL("mailto:guardianconnect@guardianfueltech.com")},style:R.email},l.a.createElement(v.a,{name:"email",size:50,color:"white"}),l.a.createElement(d.a,{style:R.color},"Email"),l.a.createElement(d.a,{style:R.color},"Guardian Connect"))),l.a.createElement(p.a,null,l.a.createElement(w.a,{onPress:function(){x.a.openURL("tel:9044957480")},style:R.phone},l.a.createElement(C.a,{name:"phone",size:50,color:"white"}),l.a.createElement(d.a,{style:R.color},"Call"),l.a.createElement(d.a,{style:R.color},"Guardian Connect"))),l.a.createElement(p.a,null,l.a.createElement(w.a,{style:R.book},l.a.createElement(C.a,{onPress:function(){return t()},name:"book",size:50,color:"white"}),l.a.createElement(d.a,{style:R.color},"Support"),l.a.createElement(d.a,{style:R.color},"Documents"))))},R=g.a.create({color:{color:"white"},email:{alignItems:"center",position:"absolute",right:5,bottom:5},phone:{alignItems:"center",position:"absolute",left:5,bottom:5},book:{alignItems:"center",position:"absolute",left:140,bottom:5}}),S=g.a.create({text:{flex:1,fontSize:30,textAlign:"center"},searchtext:{position:"relative",bottom:310,fontSize:30,textAlign:"center",color:"white",paddingTop:10},searchtextmargin:{position:"relative",bottom:310,fontSize:30,textAlign:"center",color:"white",padding:20},container:{flex:1,justifyContent:"space-between",backgroundColor:"#319ac2",paddingBottom:20,margin:10},button:{margin:10,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#81cb2f",borderRadius:50,shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.8,shadowRadius:4},search:{position:"relative",top:0,marginBottom:320,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#81cb2f",borderRadius:50,width:250,marginLeft:80,shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.8,shadowRadius:4,marginTop:10}}),O=function(e){var t=e.navigation,a=Object(c.useState)(""),n=i()(a,2),o=n[0],r=n[1],s=Object(c.useState)(""),m=i()(s,2),g=m[0],b=m[1],x=function(){g&&function(e){var t,a,n;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,u.a.awrap(h.a.get("https://reactgvr.herokuapp.com/api/gvrs/"+e));case 3:return t=o.sent,a=t.data,n=a.gvr,o.abrupt("return",n);case 9:throw o.prev=9,o.t0=o.catch(0),o.t0;case 12:case"end":return o.stop()}}),null,null,[[0,9]],Promise)}(g).then((function(e){r(e)})).catch((function(e){r(e.message)}))};return l.a.createElement(p.a,{style:S.container},l.a.createElement(E.a,{lightTheme:!0,placeholder:"Search GVR ID",onChangeText:b,value:g}),0==o.length?l.a.createElement(p.a,null,l.a.createElement(w.a,{style:S.button,onPress:function(){return x()},style:S.search},l.a.createElement(d.a,{style:S.text},"Search")),l.a.createElement(d.a,{style:S.searchtextmargin},"Welcome to the Guardian Connect App!"),l.a.createElement(d.a,{style:S.searchtext},"Search Above"),l.a.createElement(d.a,{style:S.searchtext},"or"),l.a.createElement(d.a,{style:S.searchtext},"Contact the Support Center!")):l.a.createElement(y.a,null,l.a.createElement(f,{message:o,setMessage:r}),l.a.createElement(w.a,{onPress:function(){return r(""),void b("")},style:S.button},l.a.createElement(d.a,{style:S.text},"Clear"))),l.a.createElement(p.a,null,l.a.createElement(k,{books:function(){t.navigate("Guides")}})))},A=function(e){e.navigation;return l.a.createElement(p.a,{style:j.container},l.a.createElement(w.a,{onPress:function(){x.a.openURL("https://drive.google.com/file/d/1GHFLPiND2ggRGleALID1eZXy_oSYhOMu/view?usp=sharing")},style:j.button},l.a.createElement(d.a,{style:j.text},"Insite 360 MDE-5314")),l.a.createElement(w.a,{onPress:function(){x.a.openURL("https:drive.google.com/file/d/1z3EFoIjVx26gHbCdz9kDZnQRqhYl7jSb/view?usp=sharing")},style:j.button},l.a.createElement(d.a,{style:j.text},"Insite 360 Network Troubleshooting")))},j=g.a.create({button:{margin:10,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#81cb2f",borderRadius:50,height:75,shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.8,shadowRadius:4},container:{flex:1,backgroundColor:"#319ac2",paddingBottom:20,margin:10,fontSize:30,textAlign:"center"},text:{fontSize:30,textAlign:"center"}}),z=Object(o.a)({Home:O,Guides:A},{initialRouteName:"Home",defaultNavigationOptions:{title:"Guardian Connect"}});t.a=Object(n.createAppContainer)(z)},215:function(e,t,a){e.exports=a(313)}},[[215,1,2]]]);
//# sourceMappingURL=app.0d7e7046.chunk.js.map