(this.webpackJsonpawesome=this.webpackJsonpawesome||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/product-6.b49d1b7c.png"},101:function(e,t,a){e.exports=a.p+"static/media/product-7.4c6ab223.png"},102:function(e,t,a){e.exports=a.p+"static/media/product-8.d390282f.png"},17:function(e,t,a){"use strict";a.r(t),a.d(t,"ProductsContext",(function(){return s})),a.d(t,"Products",(function(){return m}));var r=a(20),n=a(21),o=a(23),i=a(22),c=a(0),l=a.n(c),s=Object(c.createContext)(),m=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={products:[{id:1,title:"Google Pixel - Black",img:"img/product-1.png",price:130,company:"GOOGLE",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:2,title:"Samsung S7",img:"img/product-2.png",price:160,company:"SAMSUNG",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:3,title:"HTC 10 - Black",img:"img/product-3.png",price:190,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:4,title:"HTC 10 - White",img:"img/product-4.png",price:180,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:5,title:"HTC Desire 626s",img:"img/product-5.png",price:240,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:6,title:"Vintage Iphone",img:"img/product-6.png",price:170,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:7,title:"Iphone 7",img:"img/product-7.png",price:300,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:8,title:"Smashed Iphone",img:"img/product-8.png",price:80,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0}],badgecontent:0,totalprice:""},e.componentDidMount=function(){e.totalPrice()},e.totalPrice=function(){var t=e.state.products,a=0;t.filter((function(e){e.inCart&&(a+=e.count*e.price)})),e.setState({totalprice:a})},e.addtoCart=function(t){var a=e.state.products;a.filter((function(e,a){a==t&&(e.inCart=!0,e.count++)})),e.setState({products:a}),e.totalPrice()},e.removefromCart=function(t){var a=e.state.products;a.filter((function(a,r){r==t&&(a.inCart=!1,e.setState({badgecontent:e.state.badgecontent-1}))})),e.setState({products:a}),e.totalPrice()},e.setbadgeContent=function(t){0==t?alert("hh"):e.setState({badgecontent:e.state.badgecontent+1})},e.handleQuantity=function(t,a){var r=e.state.products;r.filter((function(e,r){r==t&&("incr"==a?e.count++:e.count--)})),e.setState({products:r}),e.totalPrice()},e.clearCart=function(){e.setState({badgecontent:0});var t=e.state.products;t.filter((function(e,t){e.inCart=!1})),e.setState({products:t})},e}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement(s.Provider,{value:{array:this.state.products,addtoCart:this.addtoCart,removefromCart:this.removefromCart,setbadgeContent:this.setbadgeContent,badgecontent:this.state.badgecontent,handleQuantity:this.handleQuantity,clearCart:this.clearCart,totalprice:this.state.totalprice}},this.props.children)}}]),a}(c.Component)},40:function(e,t,a){var r={"./AppBar":48,"./AppBar.jsx":48,"./cart":47,"./cart.jsx":47,"./css/cart.css":66,"./css/details.css":68,"./css/producthome.css":69,"./details":49,"./details.jsx":49,"./home":46,"./home.jsx":46,"./home2":50,"./home2.jsx":50,"./img/product-1.png":95,"./img/product-2.png":96,"./img/product-3.png":97,"./img/product-4.png":98,"./img/product-5.png":99,"./img/product-6.png":100,"./img/product-7.png":101,"./img/product-8.png":102,"./productsContext":17,"./productsContext.jsx":17};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=40},46:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),o=a(23),i=a(22),c=a(0),l=a.n(c),s=a(17),m=a(27),u=a(9),p=a(47),d=a(48),g=a(50),h=a(49),f=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,{basename:window.location.pathname||""},l.a.createElement(s.Products,null,l.a.createElement(d.default,null),l.a.createElement(u.a,{path:"/",exact:!0,component:g.default}),l.a.createElement(u.a,{path:"/details/:id",exact:!0,component:h.default}),l.a.createElement(u.a,{path:"/my-cart",exact:!0,component:p.default}))))}}]),a}(c.Component);t.default=f},47:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),o=a(23),i=a(22),c=a(0),l=a.n(c),s=a(17),m=(a(66),a(35)),u=a(8),p=a(44),d=a(78),g=a(14),h=a(79),f=a(15),b=a(61),y=a.n(b),E=a(105),v=a(107),x=a(25),C=a(104),k=a(106),w=a(74),j=function(e){Object(o.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={},e.componentDidMount=function(){},e}return Object(n.a)(c,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(m.a,{xsDown:!0},l.a.createElement(s.ProductsContext.Consumer,null,(function(e){return 0==e.badgecontent?l.a.createElement(u.a,{variant:"h6",color:"secondary"},"Sorry, No Items in Your Cart"):l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{component:p.a},l.a.createElement(E.a,{"aria-label":"simple table",style:{width:"100%"}},l.a.createElement(k.a,null,l.a.createElement(w.a,{style:{fontWeight:"bold"}},l.a.createElement(x.a,null,"PRODUCTS"),l.a.createElement(x.a,{align:"right"},"Name of product"),l.a.createElement(x.a,{align:"right"},"Price"),l.a.createElement(x.a,{align:"right"},"Quantity"),l.a.createElement(x.a,{align:"right"},"Remove"),l.a.createElement(x.a,{align:"right"},"Total"))),l.a.createElement(v.a,null,e.array.map((function(t,r){if(1==t.inCart)return l.a.createElement(w.a,null,l.a.createElement(x.a,{component:"th",scope:"row"},l.a.createElement("img",{src:a(40)("./"+t.img),style:{maxWidth:"100px",height:"60px",objectFit:"cover"}})),l.a.createElement(x.a,{align:"right"},t.title),l.a.createElement(x.a,{align:"right"},"$",t.price),l.a.createElement(x.a,{align:"right"},l.a.createElement(d.a,{size:"small",align:"right"},l.a.createElement(g.a,{disabled:1==t.count,onClick:function(){return e.handleQuantity(r,"decr")},style:{margin:"2px"}},"-"),l.a.createElement(g.a,{size:"small",style:{margin:"2px"}},t.count),l.a.createElement(g.a,{size:"small",style:{margin:"2px"},onClick:function(){return e.handleQuantity(r,"incr")}},"+"))),l.a.createElement(x.a,{align:"right"},l.a.createElement(h.a,{onClick:function(){return e.removefromCart(r)}},l.a.createElement(y.a,null))),l.a.createElement(x.a,{align:"right"},l.a.createElement(u.a,{variant:"subtitle1",style:{fontWeight:"bold"}},"Item Price:$",t.price*t.count)))}))))),l.a.createElement(g.a,{color:"secondary",variant:"outlined",size:"small",style:{marginLeft:"auto",marginTop:"10px"},onClick:e.clearCart},"CLEAR CART"),l.a.createElement("div",{style:{position:"relative",marginLeft:"auto",width:"200px"}},l.a.createElement(u.a,{variant:"h6",align:"left"},"Sub Total : $",e.totalprice),l.a.createElement(u.a,{variant:"h6",align:"center"},"TAX: $6.3"),l.a.createElement(u.a,{variant:"h6",align:"center"},"Total: $",e.totalprice+6.3)))}))),l.a.createElement(m.a,{smUp:!0},l.a.createElement(s.ProductsContext.Consumer,null,(function(e){return 0==e.badgecontent?l.a.createElement(u.a,{variant:"h6",color:"secondary"},"Sorry, No Items in Your Cart"):l.a.createElement(l.a.Fragment,null,e.array.map((function(t,r){if(1==t.inCart)return l.a.createElement(p.a,{style:{marginTop:"4px"}},l.a.createElement(f.a,{container:!0,direction:"column",spacing:1,alignItems:"center"},l.a.createElement(f.a,{item:!0,container:!0,xs:12},l.a.createElement(f.a,{item:!0,xs:9,justify:"center",alignItems:"center"},l.a.createElement("img",{src:a(40)("./"+t.img),style:{maxWidth:"100%",height:"150px",objectFit:"cover",marginLeft:"auto"}})),l.a.createElement(f.a,{item:!0,container:!0,xs:3,direction:"column",justify:"space-between",alignItems:"center"},l.a.createElement(f.a,{item:!0},l.a.createElement(h.a,{onClick:function(){return e.removefromCart(r)}},l.a.createElement(y.a,null))),l.a.createElement(f.a,{item:!0},l.a.createElement(u.a,{variant:"body1",color:"textSecondary"},"$",t.price)))),l.a.createElement(f.a,{item:!0,container:!0,style:{paddingLeft:"30px"},direction:"column",xs:12,alignItems:"flex-start"},l.a.createElement(f.a,{item:!0},l.a.createElement(u.a,null,t.title)),l.a.createElement(f.a,{item:!0,container:!0,spacing:2,alignItems:"center"},l.a.createElement(f.a,{item:!0},l.a.createElement(u.a,null,"Quantity")),l.a.createElement(f.a,{item:!0},l.a.createElement(d.a,{size:"small",style:{width:"20px",background:"red"}},l.a.createElement(g.a,{disabled:1==t.count,onClick:function(){return e.handleQuantity(r,"decr")},style:{fontSize:"0.1rem",width:"2px",background:"yellow"}},"-"),l.a.createElement(g.a,{size:"small",style:{}},t.count),l.a.createElement(g.a,{size:"small",style:{},onClick:function(){return e.handleQuantity(r,"incr")}},"+")))),l.a.createElement(f.a,{item:!0},l.a.createElement(u.a,{variant:"subtitle1"},l.a.createElement("span",{style:{fontWeight:"bold"}},"Total: $",t.price*t.count))))))})),l.a.createElement("div",{style:{marginTop:"10px",paddingRight:"30px"}},l.a.createElement(u.a,{align:"right"},"Sub Total : $",e.totalprice),l.a.createElement(u.a,{align:"right"},"TAX: $6.3"),l.a.createElement(u.a,{align:"right"},"Total: $",e.totalprice+6.3)),l.a.createElement(f.a,{container:!0,justify:"flex-end",style:{paddingRight:"30px"}},l.a.createElement(f.a,{item:!0},l.a.createElement(g.a,{color:"secondary",variant:"contained",style:{marginLeft:"auto",marginRight:"1px",marginTop:"10px",fontSize:"0.7rem",padding:"2px 6px"},onClick:e.clearCart},"CLEAR CART"))))}))))}}]),c}(c.Component);t.default=j},48:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),o=a(23),i=a(22),c=a(0),l=a.n(c),s=a(108),m=a(109),u=a(14),p=a(35),d=a(110),g=a(34),h=a.n(g),f=a(27),b=a(17),y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement(s.a,{position:"sticky",style:{display:"flex",background:"white",marginBottom:"10px"}},l.a.createElement(m.a,null,l.a.createElement(f.b,{to:"/"},l.a.createElement(u.a,{size:"small"},"Products")),l.a.createElement(f.b,{to:"/my-cart"},l.a.createElement(b.ProductsContext.Consumer,null,(function(e){return 0===e.badgecontent?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{xsDown:!0},l.a.createElement(u.a,{style:{position:"absolute",right:"20px",top:"50%",transform:"translateY(-50%)"},variant:"outlined",size:"small",color:"primary",startIcon:l.a.createElement(h.a,null)},"My cart")),l.a.createElement(p.a,{smUp:!0},l.a.createElement(u.a,{style:{position:"absolute",right:"20px",top:"50%",transform:"translateY(-50%)"},size:"small",color:"primary"},l.a.createElement(h.a,null)))):l.a.createElement(d.a,{style:{position:"absolute",right:"20px",top:"50%",transform:"translateY(-50%)"},badgeContent:e.badgecontent,color:"secondary"},l.a.createElement(p.a,{smDown:!0},l.a.createElement(u.a,{variant:"outlined",size:"small",color:"primary",startIcon:l.a.createElement(h.a,null)}," ","My cart")),l.a.createElement(p.a,{smUp:!0},l.a.createElement(h.a,null)))})))))}}]),a}(c.Component);t.default=y},49:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),o=a(23),i=a(22),c=a(0),l=a.n(c),s=a(17),m=a(44),u=a(15),p=a(8),d=a(14),g=a(27),h=(a(68),function(e){Object(o.a)(c,e);var t=Object(i.a)(c);function c(e){var a;return Object(r.a)(this,c),(a=t.call(this,e)).state={},a}return Object(n.a)(c,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.ProductsContext.Consumer,null,(function(t){return t.array.map((function(r,n){if(r.id==e.props.match.params.id)return l.a.createElement(m.a,{elevation:0,style:{padding:"4px"},className:"details-card"},l.a.createElement(u.a,{container:!0,spacing:1,justify:"center",alignItems:"center"},l.a.createElement(u.a,{item:!0,xs:12,sm:6},l.a.createElement("img",{src:a(40)("./"+r.img),className:"detail-product-image"})),l.a.createElement(u.a,{item:!0,xs:12,sm:6},l.a.createElement(p.a,{variant:"h5"}," ","Model : ",r.title),l.a.createElement(p.a,{variant:"body1"},"Made by :"," ",l.a.createElement("span",{style:{textTransform:"uppercase"}},r.company)),l.a.createElement(p.a,{variant:"body1"},"price:"," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ","$",r.price)),l.a.createElement(p.a,{variant:"body2",style:{margin:"10px 0"}},r.info),l.a.createElement(g.b,{to:"/"},l.a.createElement(d.a,{variant:"outlined",size:"small",color:"primary"},"Back to Products")),l.a.createElement(d.a,{variant:"outlined",size:"small",disabled:r.inCart,onClick:function(){t.addtoCart(n),t.setbadgeContent()},color:"secondary"},r.inCart?"In Cart":"Add to cart"))))}))})))}}]),c}(c.Component));t.default=h},50:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),o=a(23),i=a(22),c=a(0),l=a.n(c),s=a(17),m=a(75),u=a(76),p=a(77),d=a(8),g=a(35),h=a(113),f=a(111),b=a(112),y=a(14),E=a(27),v=a(34),x=a.n(v),C=(a(69),function(e){Object(o.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={array:[],isopen:!1,activeProductDetails:""},e.closeDialog=function(){e.setState({isopen:!1})},e.showDialog=function(t){e.setState({activeProductDetails:t}),e.setState({isopen:!0})},e}return Object(n.a)(c,[{key:"render",value:function(){var e=this,t=this.state.activeProductDetails;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"title"},"Our Products"),l.a.createElement("div",{className:"wrapper"},l.a.createElement(s.ProductsContext.Consumer,null,(function(t){return t.array.map((function(r,n){return l.a.createElement(E.b,{to:"/details/".concat(r.id)},l.a.createElement(m.a,{className:"product-card"},l.a.createElement(u.a,{className:"card-media",style:{width:"100%",height:"70%",margin:"10px auto"}},l.a.createElement("img",{className:"product-img",syle:{margin:"0px auto"},src:a(40)("./".concat(r.img))}),!r.inCart&&l.a.createElement("div",{onClick:function(a){t.addtoCart(n),e.showDialog(r),t.setbadgeContent(),a.preventDefault()},className:"product-cart-icon"},l.a.createElement(x.a,{style:{color:"white"}})),r.inCart&&l.a.createElement("div",{className:"product-cart-icon incart"},"In Cart")),l.a.createElement(p.a,null,l.a.createElement(d.a,{variant:"body2",style:{position:"absolute",left:"10px",bottom:"10px"}},r.title),l.a.createElement(d.a,{style:{position:"absolute",right:"10px",bottom:"10px",fontWeight:"bold"}},"$",r.price))))}))}))),l.a.createElement(g.a,{xsDown:!0},""!==this.state.activeProductDetails&&l.a.createElement(h.a,{className:"dialog-box",open:this.state.isopen,"aria-labelledby":"simple-dialog-title"},l.a.createElement(m.a,{className:"dialog-card"},l.a.createElement(f.a,{title:l.a.createElement(d.a,{variant:"h6"},"Item Added to Cart")}),l.a.createElement(u.a,{className:"dialog-image",image:a(40)("./"+this.state.activeProductDetails.img)}),l.a.createElement(b.a,null,l.a.createElement(d.a,{variant:"h6"},this.state.activeProductDetails.title),l.a.createElement(d.a,{variant:"subtitle2",disabled:!0},"Price: $",t.price)),l.a.createElement(p.a,{style:{margin:"0px auto",maxWidth:"250px",textAlign:"center"}},l.a.createElement(y.a,{variant:"outlined",size:"small",color:"secondary",onClick:this.closeDialog},"Continue shopping"),l.a.createElement(E.b,{to:"my-cart"},l.a.createElement(y.a,{variant:"contained",size:"small",color:"primary"},"Go to Cart")))))))}}]),c}(c.Component));t.default=C},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},83:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),i=a.n(o),c=a(46);i.a.render(n.a.createElement(c.default,null),document.getElementById("root"))},95:function(e,t,a){e.exports=a.p+"static/media/product-1.d63d9eff.png"},96:function(e,t,a){e.exports=a.p+"static/media/product-2.ad7ef891.png"},97:function(e,t,a){e.exports=a.p+"static/media/product-3.d27ec2bc.png"},98:function(e,t,a){e.exports=a.p+"static/media/product-4.d9ed7537.png"},99:function(e,t,a){e.exports=a.p+"static/media/product-5.8f9a1f89.png"}},[[83,1,2]]]);
//# sourceMappingURL=main.0f66ea03.chunk.js.map