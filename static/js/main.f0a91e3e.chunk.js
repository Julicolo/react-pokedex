(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=n(6),i=n(9),s=n(1),m=n(2),u=n(4),p=n(3),h=n(5),d=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={evolutionChain:[],pokedexEntry:"",kind:""},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.pokemon,t=e.name,n=e.index,a=e.types,o=(e.description,e.stats);e.height,e.weight,e.eggGroup,e.abilities,e.genderRatioMale,e.genderRatioFemale,e.evs,e.hatchSteps;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pokemonCardTop"},r.a.createElement("h3",null,"#",n.padStart(3,"00")),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"pokemonCardBot"},r.a.createElement("div",{className:"typing"},a.map(function(e){var t=e.type.name;return r.a.createElement("span",{className:t,key:t})})),r.a.createElement("div",{className:"pokemonSprite"},r.a.createElement("img",{src:"http://cursist38.reacollege.eu/sprites/".concat(n,".png"),alt:t+"sprite"}),r.a.createElement("img",{src:"http://cursist38.reacollege.eu/sprites/shiny/".concat(n,".png"),alt:t+"sprite"})),r.a.createElement("div",{className:"pokemonStats"},o.map(function(e){return r.a.createElement("div",{className:e.stat.name,key:e.stat.name},r.a.createElement("span",null,e.stat.name),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{style:{width:e.base_stat/2+"%"},className:e.stat.name+"value"},r.a.createElement("span",null,e.base_stat))))})),r.a.createElement("p",null,"Click anywhere to close the screen!")))}}]),t}(r.a.Component);function f(e){var t=e.isShiny,n=e.index,a=e.name,o=e.types,c=t?"http://cursist38.reacollege.eu/sprites/shiny/".concat(n,".png"):"http://cursist38.reacollege.eu/sprites/".concat(n,".png");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pokemonCardTop"},r.a.createElement("h3",null,"#",n.padStart(3,"00")),r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"pokemonCardBot"},r.a.createElement("div",{className:"typing"},o.map(function(e){var t=e.type.name;return r.a.createElement("span",{className:t,key:t})})),r.a.createElement("div",{className:"pokemonSprite"},r.a.createElement("img",{src:c,alt:a+"sprite"}))))}n(15),n(16);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E="https://pokeapi.co",k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={url:"".concat(E,"/api/v2/pokemon/?limit=50"),offset:0,allPokemon:null,isShiny:!1,highlightedPokemon:null},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(){return e.setState({loading:!0}),fetch(e.state.url).then(function(e){return e.json()}).then(function(t){var n=t.results.map(function(e){var t=e.name,n=e.url;return fetch(n).then(function(e){return e.json()}).then(function(e){return v({name:t,url:n,index:n.replace(/\/$/,"").split("/").pop()},e,{types:e.types.sort(function(e,t){return e.slot-t.slot})})})});return Promise.all(n).then(function(t){return e.setState({loading:!1}),t})})};window.addEventListener("scroll",function(n){e.state.loading||e.state.doneLoading||.85*document.documentElement.offsetHeight<=window.scrollY+window.innerHeight&&(e.setState(function(e){var t=e.offset+50;return v({},e,{offset:t,url:"".concat(E,"/api/v2/pokemon/?limit=50&offset=").concat(t)})}),t().then(function(t){return e.setState(function(e){return{doneLoading:0===t.length,allPokemon:[].concat(Object(l.a)(e.allPokemon),Object(l.a)(t))}})}))}),t().then(function(t){return e.setState({allPokemon:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.allPokemon,a=t.highlightedPokemon,o=t.isShiny;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"header"},r.a.createElement("h3",{onClick:function(){return e.setState({highlightedPokemon:null})}},"Pokedex"),r.a.createElement("button",{onClick:function(){return e.setState({isShiny:!o})}},"Toggle Shinies!")),r.a.createElement("div",{className:"main",onClick:function(t){null!==a&&e.setState({highlightedPokemon:null})}},a?r.a.createElement("div",{className:"highlighted"},r.a.createElement(d,{isShiny:o,pokemon:a})):null,n?n.map(function(t){return r.a.createElement("div",{className:"pokemonCard",key:t.name,onClick:function(){return e.setState({highlightedPokemon:t})}},r.a.createElement(f,Object.assign({isShiny:o},t)))}):r.a.createElement("h2",null,"Loading Pokedex")))}}]),t}(r.a.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f0a91e3e.chunk.js.map