(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={link:"header_link__o9QHm",nav:"header_nav__3qjwj",active:"header_active__1hoMm"}},108:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(65),_=a.n(c),l=a(11),i=a.n(l),s=a(23),o=a(7),u=a(22),m=a(28),E=a.n(m),d=a(6),p=a(16),h=a(73),f=a(2),O={count:0},b={tags:"",items:[]},g=a(34),D={notes:[]},v={weather:[],city:"",country:"",isWeatherError:!1,isFetching:!0},w={items:[],currentAnime:[],isError:!1,isFetching:!0},M={theme:"light"},P=a(26),N=a(68),C=a.n(N),A={searchRule34:"SEARCH_RULE34",increment:"INCREMENT",decrement:"DECREMENT",resetCounter:"RESET_COUNTER",addNote:"ADD_NOTE",deleteNote:"DELETE_NOTE",searchWeather:"SEARCH_WEATHER",resetRule34:"RESET_RULE34",weatherError:"WEATHER_ERROR",setCurrAnime:"SET_CURRENT_ANIME",resetAnime:"RESET_ANIME",searchAnime:"SEARCH_ANIME",setFetch:"SET_FETCH_TRUE",switchWhite:"SWITCH_WHITE_THEME",switchBlack:"SWITCH_BLACK_THEME",setNotes:"SET_NOTES_TO_LOCAL_STORAGE"},y=Object(p.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.increment:return Object(f.a)({},e,{count:e.count+1});case A.decrement:return Object(f.a)({},e,{count:e.count-1});case A.resetCounter:return Object(f.a)({},e,{count:0});case A.searchWeather:return Object(f.a)({},e,{weather:t.weather,city:t.city,country:t.country});case A.weatherError:return Object(f.a)({},e,{weather:[],isWeatherError:A.isError});default:return e}},rule34:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.resetRule34:return Object(f.a)({},e,{items:[]});case A.searchRule34:return Object(f.a)({},e,{items:t.items});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case t.setNotes:return Object(f.a)({},e,{notes:t.payload});case A.deleteNote:return Object(f.a)({},e,{notes:e.notes.filter(function(e){return e.id!==t.payload})});case A.addNote:return Object(f.a)({},e,{notes:[].concat(Object(g.a)(e.notes),[t.payload])});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.setFetch:return Object(f.a)({},e,{isFetching:!0});case A.searchWeather:return Object(f.a)({},e,{weather:t.weather,city:t.city,country:t.country,isFetching:!1});case A.weatherError:return Object(f.a)({},e,{weather:[],isWeatherError:A.isError});default:return e}},anime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.setFetch:return Object(f.a)({},e,{isFetching:!0});case A.searchAnime:return Object(f.a)({},e,{items:t.items,isFetching:!1});case A.setCurrAnime:return Object(f.a)({},e,{currentAnime:{canonicalTitle:t.canonicalTitle,description:t.description,title_en:t.title_en,title_jp:t.title_jp,startDate:t.startDate,endDate:t.endDate,popularityRank:t.popularityRank,ageRating:t.ageRating,showType:t.showType,status:t.status,posterImage:t.posterImage,episodeCount:t.episodeCount,totalLength:t.totalLength,coverImage:t.coverImage,youtubeVideoId:t.youtubeVideoId,isFetching:!1}});case A.resetAnime:return Object(f.a)({},e,{items:[],currentAnime:{}});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;switch((arguments.length>1?arguments[1]:void 0).type){case A.switchWhite:return Object(f.a)({},e,{theme:"light"});case A.switchBlack:return Object(f.a)({},e,{theme:"black"});default:return e}}}),R={key:"root",storage:C.a},T=Object(P.g)(R,y),I=Object(h.a)({reducer:T,middleware:function(e){return e({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})}}),j=Object(P.h)(I);console.log(I.getState());var W=I,L=function(e){var t=Object(d.b)(),a=Object(d.c)(function(e){return e.counter.count}),c=Object(n.useState)("#000"),_=Object(o.a)(c,2),l=_[0],m=_[1],p=Object(n.useState)("none"),h=Object(o.a)(p,2),f=h[0],O=h[1],b=Object(n.useState)("none"),g=Object(o.a)(b,2),D=g[0],v=g[1];function w(e){return M.apply(this,arguments)}function M(){return(M=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){return setTimeout(e,t)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(){return(P=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m("#32a852"),t({type:A.increment}),v("block"),e.next=5,w(200);case 5:m("#000"),v("none");case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(){return(N=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m("#fa0000"),t({type:A.decrement}),O("block"),e.next=5,w(200);case 5:m("#000"),O("none");case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{description:"A simple counter with three buttons - increase,decrease and reset"}),r.a.createElement("div",{className:E.a.wrapper},r.a.createElement("div",{className:E.a.header},r.a.createElement("h4",{className:E.a.decrease,style:{display:f}},"-1"),r.a.createElement("h1",{style:{color:l}},a),r.a.createElement("h4",{className:E.a.increase,style:{display:D}},"+1")),r.a.createElement("div",{className:E.a.buttons},r.a.createElement("button",{className:E.a.button,onClick:function(){return N.apply(this,arguments)}},"-"),r.a.createElement("button",{className:E.a.button,onClick:function(){return P.apply(this,arguments)}},"+")),r.a.createElement("button",{className:E.a.reset,onClick:function(){t({type:A.resetCounter})}},"reset")))},k=a(30),B=a.n(k),K=function(){var e=Object(d.c)(function(e){return e.theme.theme});return r.a.createElement("div",{className:"light"===e?B.a.wrapper:B.a.wrapperBlack},r.a.createElement("h1",{className:B.a.title},"Home"),r.a.createElement("p",{className:B.a.text},"Welcome to my ",r.a.createElement("span",{className:B.a.textMark},"SPA")," use ",r.a.createElement("span",{className:B.a.textMark},"links")," above to navigate through"))},U=a(10),x=a.n(U),S=a(20),F=function(){return r.a.createElement("ul",{className:x.a.nav},r.a.createElement("li",{className:x.a.link},r.a.createElement(S.b,{className:function(e){return e.isActive?x.a.active:x.a.link},to:"/"},"Home")),r.a.createElement("li",{className:x.a.link},r.a.createElement(S.b,{className:function(e){return e.isActive?x.a.active:x.a.link},to:"/counter"},"Counter")),r.a.createElement("li",{className:x.a.link},r.a.createElement(S.b,{className:function(e){return e.isActive?x.a.active:x.a.link},to:"/calculator"},"Calculator")),r.a.createElement("li",{className:x.a.link},r.a.createElement(S.b,{className:function(e){return e.isActive?x.a.active:x.a.link},to:"/rule34/search"},"Rule34")),r.a.createElement("li",{className:x.a.link},r.a.createElement(S.b,{className:function(e){return e.isActive?x.a.active:x.a.link},to:"/notes"},"Notes")),r.a.createElement("li",{className:x.a.link},r.a.createElement(S.b,{className:function(e){return e.isActive?x.a.active:x.a.link},to:"/weather/search"},"Weather")),r.a.createElement("li",{className:x.a.link},r.a.createElement(S.b,{className:function(e){return e.isActive?x.a.active:x.a.link},to:"/anime/search"},"Anime Search")))},H=a(69),V=a(25),q=a.n(V),z=function(){var e=Object(d.c)(function(e){return e.rule34.items});return r.a.createElement("div",{className:q.a.wrapper},e.map(function(e){return e.file_url.endsWith(".mp4")?r.a.createElement("div",{className:q.a.container},"  ",r.a.createElement("video",{src:e.file_url,poster:e.sample_url,style:0===e.sample_height?{height:e.height,width:e.width}:{height:e.sample_height,width:e.sample_width},controls:!0})):e.file_url.endsWith(".gif")?r.a.createElement("div",{className:q.a.container}," ",r.a.createElement("img",{className:q.a.img,style:0===e.sample_height?{height:e.height,width:e.width}:{height:e.sample_height,width:e.sample_width},src:e.sample_url,alt:e.sample_url,loading:"lazy"})," "):e.file_url.endsWith(".jpg")?r.a.createElement("div",{className:q.a.container}," ",r.a.createElement("img",{className:q.a.img,style:0===e.sample_height?{height:e.height,width:e.width}:{height:e.sample_height,width:e.sample_width},src:e.sample_url,alt:e.sample_url,loading:"lazy"})," "):e.file_url.endsWith(".jpeg")?r.a.createElement("div",{className:q.a.container}," ",r.a.createElement("img",{className:q.a.img,style:0===e.sample_height?{height:e.height,width:e.width}:{height:e.sample_height,width:e.sample_width},src:e.sample_url,alt:e.sample_url,loading:"lazy"})," "):e.file_url.endsWith(".png")?r.a.createElement("div",{className:q.a.container}," ",r.a.createElement("img",{className:q.a.img,style:0===e.sample_height?{height:e.height,width:e.width}:{height:e.sample_height,width:e.sample_width},src:e.sample_url,alt:e.sample_url,loading:"lazy"})," "):null}))},X=a(70),Z=a.n(X),G=a(139),J=a(55),Q=a(37),Y=a(40),$=a(39),ee=(a(99),a(36)),te=a.n(ee),ae=a(48),ne=a.n(ae);function re(e){var t=Object(d.b)();return r.a.createElement("div",{className:te.a.note},r.a.createElement("h3",{className:te.a.title},e.title," "),r.a.createElement("h2",{className:te.a.body},e.body),r.a.createElement("small",{className:te.a.date},ne()().format("l")),r.a.createElement("button",{className:te.a.delete,onClick:function(e){t({type:A.deleteNote,payload:e.currentTarget.value})},value:e.id},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-trash3-fill",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"}))))}function ce(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],_=Object(n.useState)(""),l=Object(o.a)(_,2),i=l[0],s=l[1],m=Object(n.useState)(!1),E=Object(o.a)(m,2),p=E[0],h=E[1],f=Object(d.b)(),O=Object(d.c)(function(e){return e.notes.notes});return r.a.createElement("div",null,r.a.createElement(u.a,{description:"A simple note app"}),r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{variant:"secondary",onClick:function(){return h(!0)},style:{display:"block",margin:"0 auto"}},"Add note"),r.a.createElement(Q.a,{show:p,onHide:function(){return h(!1)}},r.a.createElement(Q.a.Header,{closeButton:!0},r.a.createElement(Q.a.Title,null,"Create note")),r.a.createElement(Q.a.Body,null,r.a.createElement(Y.a,null,r.a.createElement(Y.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement($.a,{controlId:"floatingInputGrid",label:"Note title"},r.a.createElement(Y.a.Control,{type:"text",placeholder:"",onChange:function(e){c(e.target.value)},maxLength:20}))),r.a.createElement($.a,{controlId:"floatingTextarea2",label:"Note body"},r.a.createElement(Y.a.Control,{as:"textarea",maxLength:150,style:{height:"100px"},onChange:function(e){s(e.target.value)}})))),r.a.createElement(Q.a.Footer,null,r.a.createElement(J.a,{variant:"secondary",onClick:function(){return h(!1)}},"Close"),r.a.createElement(J.a,{variant:"primary",onClick:function(){var e=Object(G.a)();f({type:A.addNote,payload:{id:e,title:a,body:i}}),h(!1)}},"Add note")))),r.a.createElement("div",{className:Z.a.list},O.map(function(e){return r.a.createElement(re,{title:e.title,body:e.body,id:e.id})})))}var _e=a(27),le=a.n(_e),ie=a(1),se=a(50),oe=a.n(se),ue=function(e){var t=e.isOn,a=e.handleToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{checked:t,onChange:a,className:oe.a.checkbox,id:"react-switch-new",type:"checkbox"}),r.a.createElement("label",{style:{background:t&&"#06D6A0"},className:oe.a.label,htmlFor:"react-switch-new"},r.a.createElement("span",{className:oe.a.button})))},me=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],_=Object(d.b)(),l=function(){var e=Object(s.a)(i.a.mark(function e(t,a,n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("https://api.rule34.xxx//index.php?page=dapi&s=post&q=index&tags=".concat(t," sort:").concat(n,"&limit=").concat(a,"&json=1")),e.next=3,fetch("https://api.rule34.xxx//index.php?page=dapi&s=post&q=index&tags=".concat(t," sort:").concat(n,"&limit=").concat(a,"&json=1")).then(function(e){return e.json()}).then(function(e){return _({type:A.searchRule34,items:e})});case 3:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),m=Object(n.useState)(""),E=Object(o.a)(m,2),p=E[0],h=E[1],f=Object(n.useState)(""),O=Object(o.a)(f,2),b=O[0],g=O[1],D=Object(ie.f)();return r.a.createElement("div",null,r.a.createElement(u.a,{description:"App for working with rule34 api and viewing pictures easily"}),r.a.createElement("div",{className:le.a.container},r.a.createElement("input",{placeholder:"Write tags",value:p,onChange:function(e){h(e.target.value)},className:le.a.input}),r.a.createElement("input",{placeholder:"Choose limit of photos",value:b,onChange:function(e){g(e.target.value)},className:le.a.input}),r.a.createElement("div",{className:le.a.sortingHeader},"Sorting"),r.a.createElement("div",{className:le.a.switchWrapper},r.a.createElement("span",{className:le.a.sorting},"Date"),r.a.createElement(ue,{isOn:a,handleToggle:function(){return c(!a)},className:le.a.switch}),r.a.createElement("span",{className:le.a.sorting},"Score")),r.a.createElement(S.b,{className:le.a.button,to:"/rule34/pics",onClick:function(){_({type:A.resetRule34}),l(p,b,!0===a?"score":"updated"),D("/rule34/pics")}},"Search")))},Ee=(a(108),a(51)),de=a.n(Ee),pe=a(31),he=a.n(pe);function fe(e){return r.a.createElement("div",{className:he.a.item},r.a.createElement("h3",{className:he.a.date},ne()(e.date).format("LL")),r.a.createElement("img",{className:he.a.logo,src:"https://www.weatherbit.io/static/img/icons/".concat(e.icon,".png"),alt:"https://www.weatherbit.io/static/img/icons/".concat(e.icon,".png")}),r.a.createElement("h3",{className:he.a.temp},"".concat(e.temp,"\xb0 (").concat(e.min_temp,"\xb0-").concat(e.max_temp,"\xb0)")),r.a.createElement("h4",{className:he.a.description},e.description),r.a.createElement("h4",{className:he.a.wind},"Wind: ",e.wind_spd," m/s || ",e.wind_cdir_full))}var Oe=a(52),be=a.n(Oe);function ge(){return r.a.createElement("div",{className:be.a.fetching},r.a.createElement("svg",{viewBox:"0 0 100 100"},r.a.createElement("defs",null,r.a.createElement("filter",{className:be.a.shadow}," ",r.a.createElement("feDropShadow",{dx:"0",dy:"0",stdDeviation:"1.5","flood-color":"#fc6767"}))),r.a.createElement("circle",{className:be.a.spinner,cx:"50",cy:"50",r:"45"})))}function De(){var e=Object(d.c)(function(e){return e.weather.weather}),t=Object(d.c)(function(e){return e.weather.city}),a=Object(d.c)(function(e){return e.weather.country}),n=Object(d.c)(function(e){return e.weather.isFetching});return r.a.createElement("div",null,r.a.createElement("h1",{className:de.a.city},"".concat(t," ").concat(a)),0!==e.length&&!1===n?r.a.createElement("div",{className:de.a.forecast},e.map(function(e){return r.a.createElement(fe,{date:e.valid_date,icon:e.weather.icon,temp:e.temp,min_temp:e.min_temp,max_temp:e.max_temp,description:e.weather.description,wind_spd:e.wind_spd,wind_cdir_full:e.wind_cdir_full})})):!0===n?r.a.createElement(ge,null):r.a.createElement("div",{className:de.a.error},"City not found"))}var ve=a(53),we=a.n(ve);function Me(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],_=Object(d.b)(),l=Object(ie.f)(),m=function(){var e=Object(s.a)(i.a.mark(function e(t,a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _({type:A.setFetch}),e.next=3,fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=".concat((n=t,n&&n[0].toUpperCase()+n.slice(1)),"&key=").concat(a)).then(function(e){return e.json()}).then(function(e){_({type:A.searchWeather,weather:e.data,city:e.city_name,country:e.country_code})});case 3:case"end":return e.stop()}var n},e)}));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{description:"Simple forecast app for 16 days"}),r.a.createElement("div",{className:we.a.wrapper},r.a.createElement("input",{className:we.a.input,type:"text",placeholder:"Enter city",onChange:function(e){c(e.target.value)},value:a}),r.a.createElement("button",{className:we.a.button,onClick:function(){m(a,"bce94d1059164045af43bf1fc95b44a4"),l("/weather/view")}},"Search")))}var Pe=a(54),Ne=a.n(Pe),Ce=a(43),Ae=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],_=Object(Ce.b)(),l=Object(ie.f)(),m=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _({type:A.setFetch}),console.log("https://kitsu.io/api/edge/anime?filter[text]=".concat(t)),e.next=4,fetch("https://kitsu.io/api/edge/anime?filter[text]=".concat(t)).then(function(e){return e.json()}).then(function(e){return _({type:A.searchAnime,items:e.data})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{description:"Anime search tool using kitsu api"}),r.a.createElement("div",{className:Ne.a.wrapper},r.a.createElement("input",{className:Ne.a.input,type:"text",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:Ne.a.button,onClick:function(){_({type:A.resetAnime}),m(a),l("/anime/list")}})))},ye=a(60),Re=a.n(ye),Te=a(15),Ie=a.n(Te);function je(e){var t=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://kitsu.io/api/edge/anime/".concat(t)).then(function(e){return e.json()}).then(function(e){return n({type:A.setCurrAnime,canonicalTitle:e.data.attributes.canonicalTitle,description:e.data.attributes.description,title_en:e.data.attributes.titles.en_jp,title_jp:e.data.attributes.titles.ja_jp,startDate:e.data.attributes.startDate,endDate:e.data.attributes.endDate,popularityRank:e.data.attributes.popularityRank,ageRating:e.data.attributes.ageRating,showType:e.data.attributes.showType,status:e.data.attributes.status,posterImage:e.data.attributes.posterImage.large,episodeCount:e.data.attributes.episodeCount,totalLength:e.data.attributes.totalLength,coverImage:e.data.attributes.coverImage.small,youtubeVideoId:e.data.attributes.youtubeVideoId})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a=Object(ie.f)(),n=Object(d.b)();return r.a.createElement("div",{className:Ie.a.item},r.a.createElement("h1",{className:Ie.a.title},e.title),r.a.createElement("img",{src:e.poster,className:Ie.a.poster}),r.a.createElement("button",{className:Ie.a.button,onClick:function(e){t(e.target.value),a("/anime/view")},value:e.id},"More"),r.a.createElement("h2",{className:Ie.a.startDate},"Started:      ",r.a.createElement("span",{className:Ie.a.attrs},e.startDate)),r.a.createElement("h2",{className:Ie.a.episodeCount},"Episodes:  ",r.a.createElement("span",{className:Ie.a.attrs},e.episodeCount||"ongoing")),r.a.createElement("h2",{className:Ie.a.showType},"Type:          ",r.a.createElement("span",{className:Ie.a.attrs},e.showType)),r.a.createElement("h2",{className:Ie.a.popularity},"Rank:        ",r.a.createElement("span",{className:Ie.a.attrs},e.popularityRank)),r.a.createElement("h2",{className:Ie.a.rating},"Age rating:      ",r.a.createElement("span",{className:Ie.a.attrs},e.ageRating)),r.a.createElement("h2",{className:Ie.a.status},"Status:          ",r.a.createElement("span",{className:Ie.a.attrs},e.status)))}var We=function(){var e=Object(d.c)(function(e){return e.anime.isFetching}),t=Object(d.c)(function(e){return e.anime.items});return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null),r.a.createElement("div",{className:Re.a.items},0!==t.length&&!1===e?t.map(function(e){return r.a.createElement(je,{title:e.attributes.canonicalTitle,poster:e.attributes.posterImage.large,id:e.id,startDate:e.attributes.startDate,episodeCount:e.attributes.episodeCount,showType:e.attributes.showType,popularityRank:e.attributes.popularityRank,ageRating:e.attributes.ageRating,status:e.attributes.status})}):!0===e?r.a.createElement(ge,null):r.a.createElement("div",{className:Re.a.error},r.a.createElement("p",null,"Nothing found or fill is empty"))))},Le=a(17),ke=a.n(Le),Be=a(71),Ke=a.n(Be),Ue=function(){var e=Object(d.c)(function(e){return e.anime.currentAnime.description}),t=Object(d.c)(function(e){return e.anime.currentAnime.title_en}),a=Object(d.c)(function(e){return e.anime.currentAnime.title_jp}),n=Object(d.c)(function(e){return e.anime.currentAnime.endDate}),c=Object(d.c)(function(e){return e.anime.currentAnime.popularityRank}),_=Object(d.c)(function(e){return e.anime.currentAnime.ageRating}),l=Object(d.c)(function(e){return e.anime.currentAnime.showType}),i=Object(d.c)(function(e){return e.anime.currentAnime.status}),s=Object(d.c)(function(e){return e.anime.currentAnime.posterImage}),o=Object(d.c)(function(e){return e.anime.currentAnime.episodeCount}),u=Object(d.c)(function(e){return e.anime.currentAnime.totalLength}),m=Object(d.c)(function(e){return e.anime.currentAnime.coverImage}),E=Object(d.c)(function(e){return e.anime.currentAnime.youtubeVideoId}),p=Object(d.c)(function(e){return e.anime.currentAnime.canonicalTitle});return r.a.createElement("div",null,r.a.createElement(Ae,null),r.a.createElement("div",{className:ke.a.cover},r.a.createElement("img",{src:m})),r.a.createElement("div",{className:ke.a.items},r.a.createElement("div",{className:"".concat(ke.a.item," ").concat(ke.a.poster)},r.a.createElement("img",{src:s})),r.a.createElement("div",{className:"".concat(ke.a.item," ").concat(ke.a.attrs)},r.a.createElement("h1",{className:ke.a.title}," ",r.a.createElement("span",null,p," | ",t||""," | ",a||"")),r.a.createElement("h1",{className:ke.a.description},r.a.createElement("span",null,e)),r.a.createElement("h1",{className:ke.a.dates},"Released: ",r.a.createElement("span",null,n||"ongoing")),r.a.createElement("h1",{className:ke.a.rank},"Rank: ",r.a.createElement("span",null,c)),r.a.createElement("h1",{className:ke.a.rating},"Age rating: ",r.a.createElement("span",null,_)),r.a.createElement("h1",{className:ke.a.type},"Show type: ",r.a.createElement("span",null,l)),r.a.createElement("h1",{className:ke.a.episodes},"Episodes: ",r.a.createElement("span",null,o||"ongoing")),r.a.createElement("h1",{className:ke.a.status},"Status: ",r.a.createElement("span",null,i)),r.a.createElement("h1",{className:ke.a.length},"Length: ",r.a.createElement("span",null,(u/60).toFixed(1)," hours")),r.a.createElement(Ke.a,{url:"https://www.youtube.com/watch?v=".concat(E)}))))};var xe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement(F,null),r.a.createElement(ie.c,null,r.a.createElement(ie.a,{path:"/",element:r.a.createElement(K,null)}),r.a.createElement(ie.a,{path:"counter",element:r.a.createElement(L,{countStart:0})}),r.a.createElement(ie.a,{path:"calculator",element:r.a.createElement(H.a,null)}),r.a.createElement(ie.a,{path:"rule34/search",element:r.a.createElement(me,null)}),r.a.createElement(ie.a,{path:"rule34/pics",element:r.a.createElement(z,null)}),r.a.createElement(ie.a,{path:"notes",element:r.a.createElement(ce,null)}),r.a.createElement(ie.a,{path:"weather/view",element:r.a.createElement(De,null)}),r.a.createElement(ie.a,{path:"weather/search",element:r.a.createElement(Me,null)}),r.a.createElement(ie.a,{path:"anime/search",element:r.a.createElement(Ae,null)}),r.a.createElement(ie.a,{path:"anime/list",element:r.a.createElement(We,null)}),r.a.createElement(ie.a,{path:"anime/view",element:r.a.createElement(Ue,null)}))))},Se=a(72);_.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:W},r.a.createElement(Se.a,{loading:r.a.createElement(ge,null),persistor:j},r.a.createElement(xe,null)))))},15:function(e,t,a){e.exports={item:"animeItem_item__3qRkw",title:"animeItem_title__18cJE",button:"animeItem_button__1DX17",startDate:"animeItem_startDate__1xiKH",episodeCount:"animeItem_episodeCount__2SNim",showType:"animeItem_showType__3-D_3",popularity:"animeItem_popularity__1t0Sv",rating:"animeItem_rating__1zHRS",status:"animeItem_status__YvDJv",attrs:"animeItem_attrs__34yt3",poster:"animeItem_poster__1GjLD"}},17:function(e,t,a){e.exports={items:"animeView_items__1yYSy",cover:"animeView_cover__3jX8L",item:"animeView_item__1Tzgf",attrs:"animeView_attrs__Kshst",poster:"animeView_poster__2CMj3",title:"animeView_title__2jaSA",description:"animeView_description__hD9yV"}},22:function(e,t,a){"use strict";var n=a(58),r=a.n(n),c=a(0),_=a.n(c);t.a=function(e){return _.a.createElement("div",{className:r.a.description},_.a.createElement("p",{className:r.a.text},e.description))}},25:function(e,t,a){e.exports={wrapper:"rule34_wrapper__1TRkj",container:"rule34_container__2ybz4"}},27:function(e,t,a){e.exports={switchWrapper:"Rule34search_switchWrapper__1u6BQ",sorting:"Rule34search_sorting__Lmw6q",container:"Rule34search_container__2UjXW",input:"Rule34search_input__3FDVe",button:"Rule34search_button__3XmW1",sortingHeader:"Rule34search_sortingHeader__aHGbq"}},28:function(e,t,a){e.exports={button:"counter_button__7n8bS",reset:"counter_reset__1hdCd",header:"counter_header__16oCN",increase:"counter_increase__Zc0VP",buttons:"counter_buttons__3uwWD",decrease:"counter_decrease__3pwd2",wrapper:"counter_wrapper__1AueS"}},30:function(e,t,a){e.exports={title:"home_title__1ba1K",text:"home_text__2GOKT",textMark:"home_textMark__xKrjd",wrapper:"home_wrapper__6Iyyk",wrapperBlack:"home_wrapperBlack__2dcD4"}},31:function(e,t,a){e.exports={item:"weatherItem_item__J8Kw7",day:"weatherItem_day__1EN1U",date:"weatherItem_date__1humy",logo:"weatherItem_logo__3_ieL",temp:"weatherItem_temp__22RXe",description:"weatherItem_description__H4kI1",wind:"weatherItem_wind__1KX8M"}},36:function(e,t,a){e.exports={note:"note_note__OzMTv",title:"note_title__ousY6",body:"note_body__Rgzj5",button:"note_button__2oXj5",date:"note_date__DJzOe",delete:"note_delete__3xHrK"}},50:function(e,t,a){e.exports={checkbox:"switch_checkbox__281lr",label:"switch_label__jUL4L",button:"switch_button__2IqX8"}},51:function(e,t,a){e.exports={error:"weatherView_error__3Q8g9",city:"weatherView_city__3k152",forecast:"weatherView_forecast__vFP7n"}},52:function(e,t,a){e.exports={fetching:"preloader_fetching__3ROQk",spinner:"preloader_spinner__1SZ3i",animation:"preloader_animation__yP3Mo"}},53:function(e,t,a){e.exports={wrapper:"weatherSearch_wrapper__jHsWq",input:"weatherSearch_input__3_RNP",button:"weatherSearch_button__-cd03"}},54:function(e,t,a){e.exports={wrapper:"animeSearch_wrapper__9dO8O",input:"animeSearch_input__1gKg2",button:"animeSearch_button__8vpfj"}},58:function(e,t,a){e.exports={description:"description_description__MeLAQ",text:"description_text__3ZaTc"}},60:function(e,t,a){e.exports={items:"animeList_items__2AOqm",error:"animeList_error__3MycZ"}},69:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Frontend_react_js_application_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_description_description__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),_calculator_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_calculator_module_css__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState2=Object(D_Frontend_react_js_application_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),input=_useState2[0],setInput=_useState2[1],addval=function(e){var t=e.target.innerText;"0"===t&&"0"===toString(input)?setInput(t):0!==input&&setInput(function(e){return e+t})};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_description_description__WEBPACK_IMPORTED_MODULE_1__.a,{description:"A simple calculator for dividing, multiplying, summation and substraction"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input",{type:"text",placeholder:"Calculator)",disabled:"True",value:input})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"0")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"1")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"2")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"/")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"3")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"4")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"5")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"*")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"6")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"7")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"8")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"+")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"9")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:function(){return setInput("")}},"C")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:function onClick(){setInput(eval(input))}},"=")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{className:_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,onClick:addval},"-"))))};__webpack_exports__.a=Calculator},70:function(e,t,a){e.exports={list:"notesList_list__3avt8",input:"notesList_input__2MztH",textarea:"notesList_textarea__xJvKX",wrapper:"notesList_wrapper__3lUGu"}},75:function(e,t,a){e.exports=a(123)},8:function(e,t,a){e.exports={wrapper:"calculator_wrapper__3KPxW",button:"calculator_button__2d270",empty:"calculator_empty__38cBp",input:"calculator_input__2C2hY"}}},[[75,15,14]]]);
//# sourceMappingURL=main.5f80a8dd.chunk.js.map