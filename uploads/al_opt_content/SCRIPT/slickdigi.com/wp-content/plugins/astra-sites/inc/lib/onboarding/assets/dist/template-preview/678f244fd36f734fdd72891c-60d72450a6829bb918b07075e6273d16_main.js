(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a:a}),a},d:(t,a)=>{for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};{var t=window.wp.domReady,t=e.n(t);let o=()=>window.location.href!==window.parent.location.href,n="starter-templates-iframe-preview-data",r=()=>{let e="";var t=document.querySelector(".site-logo-img img");return e=t?t.src:e},s=r(),l=(e,t)=>{var a;return e?e?(a=e.match(/'([^']+)'/))?a[1]:"inherit"===e?t:e:t||void 0:""},i=e=>{switch(e.value.param){case"siteLogo":var t=document.querySelectorAll(".site-logo-img img"),a=(""===s&&(s=r()),e.value.data.url||s),a=e.value.data.dataUri||a;if(0===t.length&&""!==a){let t=document.createElement("span"),o=(t.classList.add("site-logo-img"),document.createElement("a")),n=(o.setAttribute("class","custom-logo-link"),o.setAttribute("href","#"),o.setAttribute("aria-current","page"),t.appendChild(o),document.createElement("img")),r=(n.classList.add("custom-logo"),n.setAttribute("src",a),o.appendChild(n),document.getElementById("ast-desktop-header").querySelectorAll(".ast-site-identity")[0]),s=r.querySelectorAll(".ast-site-title-wrap")[0],l=(r.insertBefore(t,s),e.value.data.width||"");""!==l&&(n.style.width=l+"px",n.style.maxWidth=l+"px")}else if(""!==a)for(let[o,n]of Object.entries(t)){n.removeAttribute("srcset"),n.setAttribute("src",a);let t=e.value.data.width;""!==t&&(n.style.width=t+"px",n.style.maxWidth=t+"px")}break;case"colorPalette":let o=e.value.data.colors||[],n=starter_templates_zip_preview.AstColorPaletteVarPrefix,i=starter_templates_zip_preview.AstEleColorPaletteVarPrefix;if(0===o.length){document.querySelector("body").classList.remove("starter-templates-preview-palette");let e=document.getElementsByClassName("starter-templates-preview-palette");void(0<e.length&&e[0].remove())}else{document.querySelector("body").classList.add("starter-templates-preview-palette");var t=Object.entries(o).map((e,t)=>[`--e-global-color-${i[t].replace(/-/g,"")}: ${e[1]};`,""+n+t+`: ${e[1]};`]).map(e=>e.join("")).join("");let c=document.getElementById("starter-templates-preview-palette-css");c||((c=document.createElement("style")).id="starter-templates-preview-palette-css",c.setAttribute("rel","stylesheet"),document.head.appendChild(c)),c.innerHTML=`.starter-templates-preview-palette{ ${t} }`}break;case"siteTypography":if(Object.keys(e.value.data).length)(e=>{if(e){if(!document.getElementById("google-fonts-domain")){let e=document.createElement("link");e.id="google-fonts-domain",e.setAttribute("rel","preconnect"),e.setAttribute("href","https://fonts.gstatic.com"),document.head.appendChild(e)}let t=document.getElementById("st-previw-google-fonts-url");t||((t=document.createElement("link")).id="st-previw-google-fonts-url",t.setAttribute("rel","stylesheet"),document.head.appendChild(t));var a=[];let o=e["body-font-family"]||"",n=parseInt(e["body-font-weight"])||"",r=(n=n&&":wght@"+n,o&&(o=(o=l(o)).replace(" ","+"),a.push("family="+o+n)),e["headings-font-family"]||""),s=parseInt(e["headings-font-weight"])||"";s=s&&":wght@"+s,r&&(r=(r=l(r,o)).replace(" ","+"),a.push("family="+r+s));var e=`https://fonts.googleapis.com/css2?${a.join("&")}&display=swap`;t.setAttribute("href",e)}})(e.value.data),(e=>{if(e){let t=document.getElementById("starter-templates-typography"),a=(t||((t=document.createElement("style")).id="starter-templates-typography",t.setAttribute("rel","stylesheet"),document.head.appendChild(t)),"");a=(a=(a=(a=(a=(a=(a=(a=(a+="body, button, input, select, textarea, .ast-button, .ast-custom-button {")+("\tfont-family: "+e["body-font-family"]+";"))+("\tfont-weight: "+e["body-font-weight"]+";"))+("\tfont-size: "+e["font-size-body"].desktop+e["font-size-body"]["desktop-unit"]+";"))+("\tline-height: "+e["body-line-height"]+";"))+"}"+"h1, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6, .site-title, .site-title a {")+("\tfont-family: "+e["headings-font-family"]+";"))+("\tline-height: "+e["headings-line-height"]+";"))+("\tfont-weight: "+e["headings-font-weight"]+";")+"}",["h1","h2","h3","h4","h5","h6"].forEach(t=>{var o="inherit"===e["font-family-"+t]?e["headings-font-family"]:e["font-family-"+t],n="inherit"===e["font-weight-"+t]?e["headings-font-weight"]:e["font-weight-"+t];let r="";void 0!==o&&""!==o&&(r=r+(t+`, .entry-content ${t} {`)+("\tfont-family: "+o+";")),void 0!==e["line-height-"+t]&&""!==e["line-height-"+t]&&(r+="\tline-height: "+e["line-height-"+t]+";"),void 0!==n&&""!==n&&(r+="\tfont-weight: "+n+";"),a+=""!==r?r+"}":""}),t.innerHTML=a}})(e.value.data);else{let e=document.getElementById("starter-templates-typography");void(e&&e.remove())}break;case"siteTitle":(e=>{var t=document.getElementById("ast-desktop-header"),t=t&&t.querySelectorAll(".ast-site-identity")[0],t=t&&t.querySelectorAll(".ast-site-title-wrap")[0];t&&(t.style.display=e?"block":"none")})(e.value.data);break;case"clearPreviewAssets":var t=document.getElementById("starter-templates-typography"),t=(t&&t.remove(),document.querySelector("body").classList.remove("starter-templates-preview-palette"),document.getElementsByClassName("starter-templates-preview-palette"));0<t.length&&t[0].remove();break;case"completeOnboarding":localStorage.removeItem("starter-templates-iframe-preview-data")}};window.addEventListener("message",function(e){if(o()&&(console.log("addEventListener message: ",e),"object"==typeof e.data)&&"starterTemplatePreviewDispatch"===e.data.call){var e=e.data;let a=JSON.parse(localStorage.getItem(n));null===a&&((a={}).data={}),a.data[e.value.param]=e.value.data,delete a.data.clearPreviewAssets,e.url=window.location.origin,a.url=window.location.origin,"cleanStorage"===e.value.param?(delete a.data.cleanStorage,a.data.siteLogo=e.value.data,a.data.colorPalette={},a.data.siteTypography={},Object.keys(a.data).map(e=>i({value:{param:e,data:a.data[e]}}))):i(e),localStorage.setItem(n,JSON.stringify(a))}},!1),t()(()=>{if(o()){var e=document.createElement("style"),e;e.id="starter-templates-logo-css",document.getElementsByTagName("head")[0].appendChild(e),e.innerHTML=".site-logo-img img { transition: unset; } #wpadminbar { display: none; } html{  margin-top: 0 !important; }}";let t=(e=n,JSON.parse(localStorage.getItem(e)));t&&Object.keys(t.data).map(e=>i({value:{param:e,data:t.data[e]}}))}})}})();