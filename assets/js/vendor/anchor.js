function AnchorJS(A){"use strict";this.options=A||{},this._applyRemainingDefaultOptions=function(A){this.options.icon=this.options.hasOwnProperty("icon")?A.icon:"&#xe9cb",this.options.visible=this.options.hasOwnProperty("visible")?A.visible:"hover",this.options.placement=this.options.hasOwnProperty("placement")?A.placement:"right",this.options["class"]=this.options.hasOwnProperty("class")?A["class"]:""},this._applyRemainingDefaultOptions(A),this.add=function(A){var e,t,o,n,i,s,a,l,c,r,h,g,B,Q;if(this._applyRemainingDefaultOptions(this.options),A){if("string"!=typeof A)throw new Error("The selector provided to AnchorJS was invalid.")}else A="h1, h2, h3, h4, h5, h6";if(e=document.querySelectorAll(A),0===e.length)return!1;for(this._addBaselineStyles(),t=document.querySelectorAll("[id]"),o=[].map.call(t,function(A){return A.id}),i=0;i<e.length;i++){if(e[i].hasAttribute("id"))n=e[i].getAttribute("id");else{s=e[i].textContent,a=s.replace(/[^\w\s-]/gi,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").substring(0,32).replace(/^-+|-+$/gm,"").toLowerCase(),r=a,c=0;do void 0!==l&&(r=a+"-"+c),l=o.indexOf(r),c+=1;while(-1!==l);l=void 0,o.push(r),e[i].setAttribute("id",r),n=r}h=n.replace(/-/g," "),g='<a class="anchorjs-link '+this.options["class"]+'" href="#'+n+'" aria-label="Anchor link for: '+h+'" data-anchorjs-icon="'+this.options.icon+'"></a>',B=document.createElement("div"),B.innerHTML=g,Q=B.childNodes,"always"===this.options.visible&&(Q[0].style.opacity="1"),"&#xe9cb"===this.options.icon&&(Q[0].style.fontFamily="anchorjs-icons",Q[0].style.fontStyle="normal",Q[0].style.fontVariant="normal",Q[0].style.fontWeight="normal"),"left"===this.options.placement?(Q[0].style.position="absolute",Q[0].style.marginLeft="-1em",Q[0].style.paddingRight="0.5em",e[i].insertBefore(Q[0],e[i].firstChild)):(Q[0].style.paddingLeft="0.375em",e[i].appendChild(Q[0]))}return this},this.remove=function(A){for(var e,t=document.querySelectorAll(A),o=0;o<t.length;o++)e=t[o].querySelector(".anchorjs-link"),e&&t[o].removeChild(e);return this},this._addBaselineStyles=function(){if(null===document.head.querySelector("style.anchorjs")){var A,e=document.createElement("style"),t=" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",o=" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",n=' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',i=" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";e.className="anchorjs",e.appendChild(document.createTextNode("")),A=document.head.querySelector('[rel="stylesheet"], style'),void 0===A?document.head.appendChild(e):document.head.insertBefore(e,A),e.sheet.insertRule(t,e.sheet.cssRules.length),e.sheet.insertRule(o,e.sheet.cssRules.length),e.sheet.insertRule(i,e.sheet.cssRules.length),e.sheet.insertRule(n,e.sheet.cssRules.length)}}}var anchors=new AnchorJS;