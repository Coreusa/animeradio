webpackJsonp([1],{"1/oy":function(t,a){},"9B7P":function(t,a){},"9M+g":function(t,a){},Id91:function(t,a){},"JE+4":function(t,a){},JOIc:function(t,a){},Jmt5:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"AnimeRadio"},n,!1,function(t){e("JE+4")},null,null).exports,r=e("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"barsContainer"},[e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"}),t._v(" "),e("div",{staticClass:"bar"})])}]};var c=e("VU/8")(null,o,!1,function(t){e("sCal")},"data-v-7ec4a98e",null).exports,l=e("mtWM"),d=e.n(l),u={data:function(){return{currentTime:"00:00",audioSource:null,currentSongName:"",radioStationName:"",radioStationMeta:"",radioStationWebPage:"",currentSongArt:"",bitRate:0,res:!1,refreshID:"",selectedRadioStation:null,currentlyPlaying:!1}},components:{Soundbars:c},mounted:function(){this.$refs.audio.volume=.07,window.clearInterval(this.refreshID)},watch:{selectedRadioStation:function(){var t=this;console.log("Changed Radio Station"),this.resetEverything(),this.audioSource=this.radioStations[this.selectedRadioStation].streamUrl,this.radioStationName=this.radioStations[this.selectedRadioStation].text,this.updateSongMeta(this.selectedRadioStation),window.clearInterval(this.refreshID),!0===this.currentlyPlaying&&(this.refreshID=window.setInterval(function(){t.updateSongMeta(t.selectedRadioStation)},25e3))}},asyncComputed:{radioStations:function(){return d.a.get("https://intense-dusk-45481.herokuapp.com/stations").then(function(t){return t.data})}},methods:{resetEverything:function(){window.clearInterval(this.refreshID),this.refreshID=null,this.currentlyPlaying=!1,this.currentSongArt="",this.audioSource=null,this.radioStationName=""},timeListener:function(){this.currentTime=this.$refs.audio.currentTime},playing:function(){this.currentlyPlaying=!0},retrieveSongImage:function(t){var a=this,e="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+t+"&api_key=444f161c60e2f8caf55a2403c20720e4&format=json";d.a.get(e).then(function(t){t.data.results.trackmatches.track.length&&(a.currentSongArt=t.data.results.trackmatches.track[0].image[2]["#text"])})},updateSongMeta:function(t){var a=this;d.a.get("https://intense-dusk-45481.herokuapp.com/?station="+this.selectedRadioStation).then(function(t){a.currentSongName=t.data.currentlyPlaying,a.bitRate=t.data.bitrate,a.radioStationMeta=t.data.stationDescription,a.retrieveSongImage(a.currentSongName)})}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"row header p-2 align-items-center fixed-top bg-dark text-white"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[t.radioStations?e("b-form-select",{attrs:{options:t.radioStations,size:"sm",stacked:"","value-field":"shortName"},model:{value:t.selectedRadioStation,callback:function(a){t.selectedRadioStation=a},expression:"selectedRadioStation"}},[e("template",{slot:"first"},[e("option",{attrs:{disabled:""},domProps:{value:null}},[t._v("Please select a station")])])],2):e("div",[e("font-awesome-icon",{attrs:{icon:"spinner",spin:""}}),t._v(" Loading station data...\r\n      ")],1)],1)]),t._v(" "),e("div",{staticClass:"player station-info text-dark fixed-bottom w-100"},[t.currentlyPlaying?e("div",{staticClass:"font-weight-bold mb-1"},[e("div",{staticClass:"p-2 bg-dark text-white"},[e("h4",{staticClass:"mb-0"},[t._v(t._s(t.radioStationName))]),t._v(" "),e("p",{staticClass:"font-weight-bold mb-0"},[e("em",[t._v(t._s(t.radioStationMeta))])]),t._v(" "),e("em",[t._v(t._s(t.radioStationWebPage))])]),t._v(" "),e("div",{staticClass:"row align-items-center p-2"},[e("div",{staticClass:"col-12 col-md-10"},[e("h4",[e("Soundbars"),t._v("\r\n            Playing now: "+t._s(t.currentSongName)+"\r\n          ")],1)]),t._v(" "),e("div",{staticClass:"col-12 col-md-2 text-right"},[t.currentSongArt?e("img",{staticClass:"img-fluid",attrs:{src:t.currentSongArt,width:"100px",alt:"Song art"}}):t._e()])])]):e("div",{staticClass:"p-2"},[e("font-awesome-icon",{attrs:{icon:"music"}}),t._v("\r\n      Waiting for selection...\r\n    ")],1),t._v(" "),e("div",[e("audio",{ref:"audio",staticClass:"w-100",attrs:{id:"audioPlayer",controls:"controls",autoplay:"true",preload:"auto",volume:"0.05",src:t.audioSource},on:{change:t.playing,playing:t.playing}})])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-12 col-sm-8"},[a("h1",[this._v("Anime Radio")])])}]};var h={name:"Index",data:function(){return{}},components:{Player:e("VU/8")(u,v,!1,function(t){e("JOIc")},"data-v-3f8ae397",null).exports}},m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container-fluid mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-white"},[a("Player")],1)])])},staticRenderFns:[]};var f=e("VU/8")(h,m,!1,function(t){e("9B7P")},"data-v-a7ea645a",null).exports;i.a.use(r.a);var p=new r.a({mode:"history",routes:[{path:"/",name:"Index",component:f},{path:"*",redirect:"/"}]}),g=e("PlbA"),S=e.n(g),_=e("C/JF"),b=e("fhbW"),C=e("U0v6"),w=e("e6fC");e("griA"),e("Jmt5"),e("9M+g");_.library.add(b.b,b.a),i.a.component("font-awesome-icon",C.FontAwesomeIcon),i.a.config.productionTip=!1,i.a.use(S.a),i.a.use(w.a),new i.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},griA:function(t,a){},sCal:function(t,a){},zj2Q:function(t,a){}},["NHnr"]);