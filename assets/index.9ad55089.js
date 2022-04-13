var X=(d,s)=>()=>(s||d((s={exports:{}}).exports,s),s.exports);import{l as I,S as ee,F as ie,T as A,e as te,C as se,$ as ae}from"./vendor.f52adb16.js";var ce=X((ve,q)=>{const oe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function v(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerpolicy&&(u.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?u.credentials="include":l.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(l){if(l.ep)return;l.ep=!0;const u=v(l);fetch(l.href,u)}};oe();function E(d,{$:s,$on:v,$f7:n,$update:l,$h:u,$f7router:o,$onUnmounted:e,$f7ready:i}){let t=[],a=[],c=[],m=d.list_config,k={published:"0"},r=!0,p=!0,C=30;const B={slidesPerView:"auto",spaceBetween:15,grabCursor:!0,mousewheel:!0},D={slidesPerView:"auto",spaceBetween:10,freeMode:!0,grabCursor:!0,mousewheel:!0},P=()=>{m.page=0,o.navigate(o.currentRoute.url,{reloadCurrent:!0,ignoreCache:!0,props:{list_config:m}})},T=()=>{n.request.json("https://flekstore.com/rest/apps/getWarning").then(function(w){k=w.data.data,l()})},b=()=>{n.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(w){JSON.parse(w.data.data),l()})},h=()=>{n.request.json("https://flekstore.com/rest/news/getArticlesPreview/").then(function(w){t=w.data,l(function(){n.swiper.create(".swiper-container.news",B)})})},f=()=>{n.request.json("https://flekstore.com/rest/categories/getCategories/").then(function(w){a=w.data,l(function(){n.swiper.create(".swiper-container.categories",D)})})},g=()=>{m.page||(c=[],p=!0,l()),!!r&&(!p||(r=!1,n.request.json("https://flekstore.com/rest/apps/getApps/",m).then(function(w){m.page++,c=c.concat(w.data),c.length<C*m.page&&(p=!1,l(function(){n.lazy.create(".apps-list")})),r=!0,l(function(){n.lazy.create(".apps-list")})})))},y=w=>{m.filter=w,m.page=0,m.search=!1,g()},S=()=>{m.page=0,m.search=!1,s("#apps-search-input").val(""),g()};return v("pageInit",()=>{s(".page-content").scroll(function(){var w=210;s(this).scrollTop()>=w?s(".toolbar-sticky").css("position","sticky"):s(".toolbar-sticky").css("position","inherit")}),s("#apps-search-form").on("keyup",function(w){s("#apps-search-input").val()!==""?(m.page=0,m.filter="updates",l(),m.search=s("#apps-search-input").val(),g()):(m.page=0,m.search=!1,s("#apps-search-input").val(""),g())}),s("#apps-search-form").submit(function(w){w.preventDefault(),m.page=0,m.filter="updates",l(),m.search=s("#apps-search-input").val(),g()})}),i(()=>{h(),f(),g(),T(),localStorage.device_id&&b()}),function(w){w.$;var $=w.$h;return w.$root,w.$f7,w.$f7route,w.$f7router,w.$theme,w.$update,w.$store,$`
  <div class="page no-navbar" data-name="apps">
    <!-- Top Navbar -->
    <div class="navbar no-hairline navbar-current">
      <div class="navbar-bg" style="background:var(--f7-page-bg-color)"></div>
      <div class="navbar-inner">
      </div>
    </div>

    <!-- Scrollable page content-->
    <div class="page-content app-content-page infinite-scroll-content ptr-content" data-sticky-container @infinite=${g} @ptr:refresh=${P}>
      <div class="ptr-preloader">
        <div class="preloader"></div>
        <div class="ptr-arrow"></div>
      </div>
      <div class="content-medium-width">
  	    <!-- Slider main container -->
  			<div class="swiper-container news">
  			    <div class="swiper-wrapper">
              ${!t.length&&$`
                ${Array(3).fill().map(_=>$`
                <a href="" class="link swiper-slide margin-right">
                  <div class="skeleton-block skeleton-effect-wave" style="width:300px;height:180px; border-radius:15px"></div>
                  <backout></backout>
                  <div class="title skeleton-text skeleton-effect-wave">
                    ------------------ ----  ---------- ---- -
                  </div>
                </a>
                `)}
              `}
              <!-- <a href="https://twitter.com/flekstore_com/status/1483764878745743361?s=20" class="link swiper-slide external" target="_blank">
                <img src="https://i.imgur.com/q7UzIbo.jpg" width="300.000000pt" height="180.000000pt"/>
                <backout></backout>
                <div class="title text-color-white">
                  Vote for your favorite apps on our Twitter
                </div>
              </a>               -->
              ${t.map(_=>$`
  			        <a href="/article/${_.id}/" class="link swiper-slide">
  				        <img src="${_.image}" width="300.000000pt" height="180.000000pt"/>
  				        <backout></backout>
  				        <div class="title text-color-white">
  					        ${_.title}
  				        </div>
  			        </a>
              `)}
  			    </div>
  			</div>
        
        
          <div class="toolbar-sticky" style="${m.search!==!1?"height:55px":""}">
            <form class="list inset" id="apps-search-form">
              <ul>
                <li class="item-content">
                  <div class="item-inner">
                    <div class="item-input-wrap">
                      <input type="text" placeholder="Search by app name" id="apps-search-input" required=""/>
                    </div>
                  </div>
                  <div class="item-inner" style="width: auto;">
                    ${m.search!==!1&&$`
                    <a class="link" @click=${()=>S()}><i class="icon f7-icons">xmark</i></a>
                    `}
                  </div>
                </li>
              </ul>
            </form>
            
            ${a.length?$`
            <div class="swiper-container categories ${m.search!==!1?"display-none":""}">
              <div class="swiper-wrapper">
                <div class="swiper-slide item-link ${m.filter==="updates"&&"active"}" @click=${()=>y("updates")}>Updates</div>
                <div class="swiper-slide item-link ${m.filter==="all"&&"active"}" @click=${()=>y("all")}>All</div>
                ${a.map(_=>$`
                <div class="swiper-slide item-link ${m.filter===_.id&&"active"}" @click=${()=>y(_.id)}>${_.name}</div>
                `)}
              </div>
            </div>
            `:$`
            <div class="swiper-container categories">
              <div class="swiper-wrapper">
                ${Array(8).fill().map(_=>$`
                  <div class="swiper-slide item-link skeleton-text skeleton-effect-fade" style="width:60px;height:18px;margin-right:10px;"></div>
                `)}
              </div>
            </div>
            `}
          </div>
          
        ${k.published==="1"&&$`
        <div class="block block-strong block-warning margin inset">
          ${k.message}
        </div>
        `}
        
        <div class="list media-list inset no-hairlines-between apps-list">
          <ul class="row">
            ${c.map(_=>$`
            <li class="col-100 medium-50">
              <a href="/app_view/${_.id}/" class="item-link item-content">
                <div class="item-media">
                  <img data-src="${_.icon}" class="lazy"/>
                </div>
                <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title">${_.name}</div>
                  </div>
                  <div class="item-subtitle">v ${_.version}</div>
                  <div class="item-footer">${_.short_description}</div>
                </div>
              </a>
            </li>
            `)}
          </ul>
        </div>
        ${!p&&!c.length&&$`
        <center class="md margin-top">
          Nothing found
          <br/><br/>
          <a class="link button button-lite button-round button-link" style="width: fit-content;text-transform: inherit;" @click=${()=>S()}>
            <i class="icon f7-icons">arrow_left_circle_fill</i> Return to catalog
          </a>
        </center>
        `}
        ${p&&$`
        <div class="infinite-scroll-preloader">
          <center class="md margin-top">
            <div class="preloader">
              <span class="preloader-inner">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16"></circle>
                </svg>
              </span>
            </div>
          </center>
        </div>
      
    </div>
  </div>
`}}L.id="9dfb0c10af";function z(d,{$:s,$f7:v,$on:n,$update:l,$f7ready:u}){var o={icon:"http://daramghaus.github.io/icontester/images/iTunesArtwork.png",name:"App Name",version:"",default_settings:1,config:{}},e=!1,i,t=!1,a=I("https://syka.flekstore.com/",{autoConnect:!1}),c;a.on("connect",b=>{console.log("SOCKET CONNECTION"),c?c.upload(document.getElementById("ipa-input")):(c=new ee(a),c.on("ready",function(){console.log("READY UPLOAD"),c.upload(document.getElementById("ipa-input"))}),c.on("start",function(h){console.log("Start uploading",h)}),c.on("stream",function(h){console.log(h);var f=(h.sent/h.size*100).toFixed(0);s("#upload-percent").html(f+"%"),v.progressbar.set("#upload-progressbar",f)}),c.on("complete",function(h){console.log("Upload Complete",h),s("#upload-percent").html("100%"),v.progressbar.set("#upload-progressbar",100),r(h)}),c.on("error",function(h){if(h=String(h),h.includes("Max Uploading File")){var f=B(c.maxFileSize,!0,2);h="Max Uploading File size must be under "+f,v.dialog.alert(h,"Error"),k()}else v.dialog.alert(h,"Error"),k()}),c.on("abort",function(h){onsole.log("Aborted: ",h),k()}))}),a.on("callback",b=>{t=b,console.log(t),l(),b.status===!0&&(i=encodeURIComponent("https://flekstore.com/install_ipa/"+o.name+"/"+e.stream+"/signer_app.plist?filename="+t.message),window.open("itms-services://?action=download-manifest&url="+i,"_self"),a.disconnect()),b.status===!1&&(k(),v.dialog.alert(t.message,"Error"))}),a.on("disconnect",function(){console.log("DISCONNECTED")});const m=()=>{o.status="upload",o.config.name=s("#signer-ipa-app-name").val(),o.config.bundle_id=s("#signer-ipa-bundle-id").val(),l(),a.connect()},k=()=>{a.disconnect(),o.status=!1,l(),s("#upload-percent").html("0%"),v.progressbar.set("#upload-progressbar",0)},r=b=>{o.status="sign",l(),o.config.name=o.config.name==o.name?!1:o.config.name,t={status:"process",message:"Connection to server"},l(),a.emit("start_sign",{device_id:e.id,stream:e.stream,file:b.name,app_name:o.config.name,bundle_id:o.config.bundle_id})},p=()=>{const b=document.getElementById("ipa-input").files;try{new AppInfoParser(b[0]).parse().then(f=>{console.log(f),o.icon=f.icon,o.name=f.package||f.CFBundleName||f.CFBundleDisplayName,o.size=b[0].size,o.version=f.versionName||f.CFBundleShortVersionString,l()}).catch(f=>{console.log(f),v.dialog.alert("Incorrect file format. Please make sure the file is in the right format and not damaged."),v.accordion.open(".accordion-item.select-file"),s("#ipa-input").val()}),o.default_settings&&v.accordion.close(".accordion-item.select-file"),v.accordion.open(".accordion-item.file-preview"),o.default_settings=0}catch(h){console.log(h),v.dialog.alert("Incorrect file format. Please make sure the file is in the right format and not damaged."),v.accordion.open(".accordion-item.select-file"),s("#ipa-input").val()}},C=()=>{s("#ipa-app-name").val(o.name),s("#ipa-bundle-id").val("")},B=(b,h=!1,f=1)=>{const g=h?1e3:1024;if(Math.abs(b)<g)return b+" B";const y=h?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let S=-1;const w=10**f;do b/=g,++S;while(Math.round(Math.abs(b)*w)/w>=g&&S<y.length-1);return b.toFixed(f)+" "+y[S]},D=(b=()=>{})=>{v.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(h){e=JSON.parse(h.data.data),l(function(){return b(e)})})},P=()=>{v.tab.show(".view-device-tab",".device-tab-link"),s(".link-device").click(),v.popup.close()};window.onblur=function(){t.status===!0&&(t=!1,o.status=!1,l())};const T=()=>{if(!localStorage.device_id){P();return}D(function(b){if(b.stream_active!=="1"){P();return}s("#ipa-input").click()})};return u(()=>{localStorage.device_id&&D()}),function(b){b.$;var h=b.$h;b.$root,b.$f7,b.$f7route,b.$f7router,b.$theme;var f=b.$update;return b.$store,h`
  <div class="page" data-name="settings">
    <div class="navbar navbar-large navbar-transparent">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left"></div>
        <div class="title">Signer</div>
        <div class="right"></div>
        <div class="title-large">
          <div class="title-large-text">Signer</div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-medium-width">
        <div
          class="block block-strong margin inset"
          style="background-color: rgba(var(--f7-theme-color-rgb), 0.08)"
        >
          <p>
            Sign and install any app you want. You just need to find the .ipa
            file of the app that interests you on the Internet.
          </p>
          <center>
            <a class="link button-link external" href="https://youtu.be/5NRGq2R0HK4" target="_blank"
              ><i class="icon f7-icons">play_rectangle_fill</i> How it works</a
            >
          </center>
        </div>

        <div class="block accordion-list custom-accordion no-padding">
            <div class="accordion-item file-preview">
              <div class="accordion-item-content">
                <div class="list accordion-list inset">
                    <ul>
                        <li class="accordion-item">
                            <div class="item-content no-chevron">
                              <div class="item-media">
                                <img 
                                  src="${o.icon}" 
                                  id="app-icon-preview" 
                                  width="60px" 
                                  style="border-radius: 23%;"
                                  @error=${()=>{o.icon="icons/error_icon.png",f()}}
                                />
                              </div>
                              <div class="item-inner">
                                <div class="item-title">
                                    ${o.name}
                                    <div class="item-footer">${o.version}</div>
                                </div>
                                <div class="item-after">${B(o.size,!0,2)}</div>
                              </div>
                            </div>
                        </li>
                        ${o.status?h`
                        <div class="block" style="padding: 0 15px 1px;">
                          ${o.status=="upload"?h`
                          <p>Uploaded <span id="upload-percent">0%</span></p>
                          <div>
                            <p><span data-progress="0" class="progressbar" id="upload-progressbar"></span></p>
                          </div>
                          `:h`
                            ${t.status==="process"?h`
                              <div class="signing-status">
                                <p>${t.message}</p>
                                <div>
                                  <p><span class="progressbar-infinite"></span></p>
                                </div>
                              </div>
                            `:h`
                              <a 
                                class="button button-large button-fill margin-top" 
                                @click=${()=>window.open("itms-services://?action=download-manifest&url="+i,"_self")}>
                                <i class="icon f7-icons">cloud_download</i>Install</a
                              >
                            `}
                          `}
                          <a class="button button-large button-lite" @click=${()=>k()}><i class="icon f7-icons">arrow_left_circle_fill</i> Back</a>
                        </div>
                        
                        `:h`
                        <li class="accordion-item">
                          <a class="item-content item-link" href="#">
                              <div class="item-media">
                              <i class="f7-icons normal">gear</i>
                              </div>
                              <div class="item-inner">
                              <div class="item-title">Customize</div>
                              </div>
                          </a>
                          <div class="accordion-item-content">
                              <div class="block margin-top">
                                  <center>
                                  <div class="block-header">This is an advanced settings. We recommend that you <a href="/faq_view/36/" class="link"><b>read the instructions</b></a> before use.</div>
                                  </center>
                              </div>
                              <div class="list inset margin-top">
                                  <ul style="border: 1px solid rgba(var(--f7-theme-color-rgb), 0.15);">
                                  <li class="item-content item-input">
                                      <div class="item-inner">
                                      <div class="item-title item-label">Custom app name</div>
                                      <div class="item-input-wrap">
                                          <input type="text" placeholder="App name" id="signer-ipa-app-name" value="${o.name}"/>
                                      </div>
                                      </div>
                                  </li>
                                  <li class="item-content item-input">
                                      <div class="item-inner">
                                      <div class="item-title item-label">Bundle ID (empty by default)</div>
                                      <div class="item-input-wrap">
                                          <input type="text" placeholder="com.xxxx.xxx" id="signer-ipa-bundle-id" validate pattern="com\.[a-zA-Z]*\.[a-zA-Z]+"/>
                                      </div>
                                      </div>
                                  </li>
                                  </ul>
                              </div>
                              <center>
                                  <div class="block-footer no-margin-bottom">
                                  <b class="text-color-orange">Warning:</b> Bundle ID changing can break certain apps or increase the chances of tweaked apps being detected.
                                  </div>
                              </center>
                              <a class="button button-large button-fill button-lite margin" @click=${()=>C()}>
                                  <i class="icon f7-icons">arrow_clockwise</i> Reset settings
                              </a>
                          </div>
                        </li>
                        <div class="block" style="padding: 10px 15px 1px;">
                            <a class="button button-large button-fill" @click=${()=>m()}><i class="icon f7-icons">pencil_outline</i> Sign App</a>
                        </div>
                        <div class="block" style="padding: 0 15px 1px;">
                            <label class="button button-large button-lite" for="ipa-input"><i class="icon f7-icons">arrow_up_doc_fill</i> Select IPA file</label>
                        </div>
                        `}
                    </ul>
                  </div>
              </div>
            </div>
            <div class="accordion-item accordion-item-opened select-file">
                <div class="accordion-item-content">
                    <div class="block">
                        <input type="file" class="display-none" id="ipa-input" @change=${()=>p()}/>
                        ${e&&e.stream_active==="1"?h`
                          <label class="button button-fill button-large" for="ipa-input">
                            <i class="icon f7-icons" style="font-size: 20px">arrow_up_doc</i>
                            Select IPA file
                          </label>
                        `:h`
                          <a class="button button-fill button-large" @click=${()=>T()}>
                            <i class="icon f7-icons" style="font-size: 20px">arrow_up_doc</i>
                            Select IPA file
                          </a>
                        `}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
`}}z.id="4048322b2f";function x(d,{$:s,$f7:v,$on:n}){let l,u;const o=()=>{if(localStorage.layout==="dark"){let e=v.utils.colorThemeCSSProperties("#ffffff");setColorTheme(e),l.setValue({hex:"#ffffff"}),localStorage["color-theme"]="#ffffff"}else{let e=v.utils.colorThemeCSSProperties("#000000");setColorTheme(e),l.setValue({hex:"#000000"}),localStorage["color-theme"]="#000000"}};return n("pageInit",()=>{u=v.toggle.create({el:".toggle.toggle-dark",on:{change:function(){if(this.checked){if(localStorage.layout="dark",s("html").removeClass("theme-dark").addClass("theme-dark"),localStorage["color-theme"]==="#000000"){let e=v.utils.colorThemeCSSProperties("#ffffff");setColorTheme(e),l.setValue({hex:"#ffffff"}),localStorage["color-theme"]="#ffffff"}}else if(localStorage.layout="light",s("html").removeClass("theme-dark"),localStorage["color-theme"]==="#ffffff"){let e=v.utils.colorThemeCSSProperties("#000000");setColorTheme(e),l.setValue({hex:"#000000"}),localStorage["color-theme"]="#000000"}}}}),l=v.colorPicker.create({inputEl:"#demo-color-picker-wheel",targetEl:"#demo-color-picker-wheel-value",targetElSetBackgroundColor:!0,modules:["wheel"],openIn:"popover",value:{hex:localStorage["color-theme"]},on:{change:function(e){let i=v.utils.colorThemeCSSProperties(e.value.hex);setColorTheme(i),localStorage["color-theme"]=i["--f7-theme-color"]}}}),localStorage.layout=="light"&&u.toggle()}),function(e){e.$;var i=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,i`
<div class="page" data-name="settings">
  <div class="navbar navbar-large navbar-transparent">
    <div class="navbar-bg"></div>
    <div class="navbar-inner">
      <div class="left">
      </div>
      <div class="title">Settings</div>
      <div class="right">
      </div>
      <div class="title-large">
        <div class="title-large-text">Settings</div>
      </div>
    </div>
  </div>
  <div class="page-content">
    <div class="content-medium-width">
      
      <div class="list inset no-hairlines-between items-inset">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="f7-icons normal">moon_fill</i>
              </div>
              <div class="item-inner">
                <div class="item-title">Dark mode</div>
                <div class="item-after">
                  <label class="toggle toggle-dark toggle-init">
                    <input type="checkbox" checked />
                    <span class="toggle-icon"></span>
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="f7-icons normal">paintbrush_fill</i>
              </div>
              <div class="item-inner">
                <div class="item-title">Color theme</div>
                <div class="item-after">
                  <i class="icon demo-list-icon" id="demo-color-picker-wheel-value" style="background-color: ${localStorage["color-theme"]?localStorage["color-theme"]:"#ffffff"};"></i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a class="item-link item-content no-chevron" @click=${()=>o()}>
              <div class="item-media">
                <i class="f7-icons normal">arrow_clockwise</i>
              </div>
              <div class="item-inner">
                <div class="item-title">Restore color</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <div class="block-title block-title-medium">Documentation</div>
      <div class="list inset no-hairlines-between items-inset">
        <ul style="background: transparent;">
          <li>
            <a href="/faq_view/3/" class="item-link item-content">
              <div class="item-media"><i class="f7-icons">info_circle_fill</i></div>
              <div class="item-inner">
                <div class="item-title">Terms of services</div>
              </div>
            </a>
          </li>
          <li>
            <a href="/faq/" class="item-link item-content">
              <div class="item-media"><i class="f7-icons">question_diamond_fill</i></div>
              <div class="item-inner">
                <div class="item-title">FAQ</div>
              </div>
            </a>
          </li>
          <li>
            <a href="/faq_view/4/" class="item-link item-content">
              <div class="item-media"><i class="f7-icons">hand_raised_fill</i></div>
              <div class="item-inner">
                <div class="item-title">Privacy policy</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      
      <div class="list inset no-hairlines-between items-inset">
        <ul style="background: transparent;">
          <li>
            <a href="https://twitter.com/flekstore_com" class="item-link item-content external">
              <div class="item-media"><i class="f7-icons">logo_twitter</i></div>
              <div class="item-inner">
                <div class="item-title">Follow us</div>
              </div>
            </a>
          </li>
          <li>
            <a href="https://t.me/ru_flekstore" class="item-link item-content external">
              <div class="item-media"><i class="f7-icons">paperplane_fill</i></div>
              <div class="item-inner">
                <div class="item-title">Telegram RU</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- <div class="list inset no-hairlines-between items-inset">
        <ul style="background: transparent;">
          <li>
            <a class="item-link item-content" @click=${()=>location.reload()}>
              <div class="item-media"><i class="f7-icons">arrow_clockwise</i></div>
              <div class="item-inner">
                <div class="item-title">Reload app</div>
              </div>
            </a>
          </li>
        </ul>
      </div> -->
      
      <center>
        <div class="block-header">
          flekstore.com © 2015-${new Date().getFullYear()}
        </div>
      </center>
      
    </div>
  </div>
</div>
`}}x.id="323dda560e";function O(d,{$:s,$on:v,$f7:n,$update:l,$h:u,$f7ready:o}){let e=!1;const i=()=>{n.request.json("https://flekstore.com/rest/news/getArticle",{id:d.id}).then(function(t){e=t.data,l()})};return o(()=>{i()}),function(t){t.$;var a=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,a`
<div class="page article-page" data-name="article">
	<!-- Top Navbar -->
	<div class="navbar">
		<div class="navbar-inner">
			<div class="left article-back">
				<a class="link back"><i class="icon f7-icons">arrow_left</i></a>
			</div>
			<div class="title sliding"></div>
			<div class="right"></div>
		</div>
	</div>
		<div class="page-content no-padding-top content-medium-width">
			<div class="art-block">
				${e?a`
				<img src="${e.image}"/>
				<backout></backout>
				<div class="title">
					${e.title}
				</div>
				`:a`
				<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
				 width="300.000000pt" height="180.000000pt" viewBox="0 0 300.000000 180.000000"
				 preserveAspectRatio="xMidYMid meet" style="background:var(--skeleton-color);">
				</svg>
				<backout></backout>
				<div class="title skeleton-text skeleton-effect-wave">
					--------- ------------ ---------- -----
				</div>
				`}
			</div>
			${e?a`
			<div class="block views-counter">
				<div class="block-header">
					${e&&a`
					<div>${axisDateFormat.format(Date.parse(e.date.replace(/-/g,"/")))}</div>
					`}
					<div><i class="icon f7-icons">eye</i> ${e.views}</div>
				</div>
			</div>
			<div class="block text-document-content" innerHTML=${e.text}></div>
			`:a`
			<center class="md margin-top">
				<div class="preloader">
					<span class="preloader-inner">
						<svg viewBox="0 0 36 36">
							<circle cx="18" cy="18" r="16"></circle>
						</svg>
					</span>
				</div>
			</center>
			`}
		</div>
</div>
`}}O.id="385468a264";function R(d,{$:s,$on:v,$f7:n,$update:l,$h:u,$f7ready:o,$onUnmounted:e}){let i=!1,t=!1,a=!1,c=!1,m=!1;window.onblur=function(){a.status===!0&&(a=!1,l())};const k=()=>{n.accordion.toggle(".app-sign-settings")};n.on("accordionOpen",function(f){s(".toggle-sign-settings").html('<i class="f7-icons">chevron_up_circle</i>')}),n.on("accordionClose",function(f){s(".toggle-sign-settings").html('<i class="f7-icons">gear</i>')});const r=()=>{s("#ipa-app-name").val(i.name),s("#ipa-bundle-id").val("")},p={slidesPerView:"auto",spaceBetween:15,grabCursor:!0,on:{imagesReady:function(){c=!0,l()}}};let C=n.photoBrowser.create({theme:"dark",captionsTheme:"theme",iconsColor:"theme-color"});const B=()=>{n.request.json("https://flekstore.com/rest/apps/getApp",{id:d.id}).then(function(f){i=f.data,l(function(){n.swiper.create(".swiper-container.screenshots",p),C.params.photos=i.photos})})},D=()=>{n.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(f){t=JSON.parse(f.data.data),l()})},P=()=>{var f=s("#ipa-app-name").val();f==i.name&&(f=!1),i.install_url.search(/_igd/g)!=-1&&(f=i.name);var g=s("#ipa-bundle-id").val();a={status:"process",message:"Connection to server"},l();const y=I("https://sign.flekstore.com/");y.emit("start_sign",{device_id:t.id,stream:t.stream,file:i.install_url,app_name:f,bundle_id:g}),y.on("callback",S=>{console.log(S),a=S,l(),S.status===!0&&(m=encodeURIComponent("https://flekstore.com/install_ipa/"+d.id+"/"+t.stream+"/app.plist?filename="+a.message),window.open("itms-services://?action=download-manifest&url="+m,"_self"),console.log("Process Finished. Disconnected"),y.disconnect()),S.status===!1&&n.dialog.alert(a.message,"Error")}),y.on("connect_error",function(){console.log("Connection Failed"),y.disconnect(),n.dialog.alert("Connection failed. Try again or contact technical support.","Error"),a=!1,l()}),e(()=>{console.log("Process Finished. Disconnected"),y.disconnect()})},T=()=>{n.tab.show(".view-device-tab",".device-tab-link"),s(".link-device").click(),n.popup.close()},b=f=>{C.open(f)},h=(f,g=!1,y=1)=>{const S=g?1e3:1024;if(Math.abs(f)<S)return f+" B";const w=g?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let $=-1;const _=10**y;do f/=S,++$;while(Math.round(Math.abs(f)*_)/_>=S&&$<w.length-1);return f.toFixed(y)+" "+w[$]};return o(()=>{B(),localStorage.device_id&&D()}),function(f){f.$;var g=f.$h;return f.$root,f.$f7,f.$f7route,f.$f7router,f.$theme,f.$update,f.$store,g`
  <div class="popup popup-push flek-swipe-handler">
    <div class="view">
      <div class="page">
        <div class="popup-push-navbar">
          <div class="link popup-close"><i class="icon f7-icons color-gray" style="font-size:44px;">chevron_compact_down</i></div>
        </div>
        <div class="page-content app-info">
          <div class="list media-list no-hairlines">
            <ul>
              <li>
                <div class="item-content">
                  <div class="item-media">
                    <img src="${i.icon}" />
                  </div>
                  <div class="item-inner">
                    <div class="item-title-row">
                      ${i?g`
                      <div class="item-title">${i.name}</div>
                      `:g`
                        <div class="item-title skeleton-text skeleton-effect-wave">------------ ----------</div>
                      `}
                    </div>
                    ${i?g`
                    <div class="item-text">By ${i.developer}</div>
                    ${!t||t.stream=="0"||t.stream_active=="0"?g`
                      <div class="row justify-content-flex-start">
                        <a class="col button button-round button-fill" @click=${()=>T()}>Sign App</a>
                        <a class="col button button-round toggle-sign-settings" @click=${()=>k()}><i class="f7-icons">gear</i></a>
                      </div>
                    `:g`
                      ${a?g`
                        ${a.status==="process"?g`
                          <div class="signing-status">
                            <div class="item-header" style="font-size:14px">Please wait</div>
                            ${a.message}
                            <span class="progressbar-infinite"></span>
                          </div>
                        `:g`
                          <a class="button button-small button-round button-fill" @click=${()=>window.open("itms-services://?action=download-manifest&url="+m,"_self")}>Install</a>
                        `}
                      `:g`
                        <div class="row justify-content-flex-start">
                          <a class="col button button-round button-fill" @click=${()=>P()}>Sign App</a>
                          <a class="col button button-round toggle-sign-settings" @click=${()=>k()}><i class="f7-icons">gear</i></a>
                        </div>
                      `}
                    `}
                    `:g`
                      <div class="item-text skeleton-text skeleton-effect-wave">-------------</div>
                    `}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="accordion-item app-sign-settings">
             <div class="accordion-item-content" style="background: var(--search-form-bg);">
                <div class="accordion-inner">
                  <div class="block margin-top">
                    <center>
                      <div class="block-header">This is an advanced settings. We recommend that you <a href="/faq_view/36/" class="link"><b>read the instructions</b></a> before use.</div>
                    </center>
                  </div>
                  <div class="list inset margin-top">
                    <ul style="border: 1px solid rgba(var(--f7-theme-color-rgb), 0.15);">
                      <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Custom app name</div>
                          <div class="item-input-wrap">
                            <input type="text" placeholder="App name" id="ipa-app-name" value="${i.name}"/>
                          </div>
                        </div>
                      </li>
                      <!-- <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Custom version (empty by default)</div>
                          <div class="item-input-wrap">
                            <input type="text" placeholder="0.x.x" id="ipa-app-version" validate pattern="[0-9\.]*[0-9]"/>
                          </div>
                        </div>
                      </li> -->
                      <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Bundle ID (empty by default)</div>
                          <div class="item-input-wrap">
                            <input type="text" placeholder="com.xxxx.xxx" id="ipa-bundle-id" validate pattern="com\.[a-zA-Z]*\.[a-zA-Z]+"/>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <center>
                    <div class="block-footer no-margin-bottom">
                      <b class="text-color-orange">Warning:</b> Bundle ID changing can break certain apps or increase the chances of tweaked apps being detected.
                    </div>
                  </center>
                  ${!t||t.stream=="0"||t.stream_active=="0"?g`
                    <a class="button button-large button-fill margin" id="sign-from-settings" @click=${()=>T()}>
                      Sign app
                    </a>
                  `:g`
                    ${a?g`
                      ${a.status!=="process"&&g`
                        <a class="button button-large button-fill margin" @click=${()=>window.open("itms-services://?action=download-manifest&url="+m,"_self")}>
                          Install
                        </a>
                      `}
                    `:g`
                    <a class="button button-large button-fill margin" id="sign-from-settings" @click=${()=>P()}>
                      Sign app
                    </a>
                    `}
                  `}
                  <a class="button button-large button-fill button-lite margin" @click=${()=>r()}>
                    <i class="icon f7-icons">arrow_clockwise</i> Reset settings
                  </a>
                </div>
             </div>
          </div>
          ${i?g`
            ${i.warning&&g`
            <div class="block block-strong block-warning margin inset">
              ${i.warning}
            </div>
            `}
          `:""}
          <center>
            <div class="row block inset block-top-info">
              <div class="col">
                ${i?g`
                <div class="block-title block-title-medium" style="margin-top: 10px">${i.version}</div>
                `:g`
                <div class="block-title block-title-medium skeleton-text skeleton-effect-wave" style="margin-top: 10px">--------</div>
                `}
                <p class="block-header">Version</p>
              </div>
              <div class="col">
                ${i?g`
                <div class="block-title block-title-medium" style="margin-top: 10px">${i.downloads}</div>
                `:g`
                <div class="block-title block-title-medium skeleton-text skeleton-effect-wave" style="margin-top: 10px">--------</div>
                `}
                <p class="block-header">Downloads</p>
              </div>
            </div>
          </center>
          <div class="swiper-container screenshots" ${c?"":g`style="visibility: hidden;"`}>
            <div class="swiper-wrapper">
              ${i.photos&&g`
                ${i.photos.map((y,S)=>g`
                  <a class="link swiper-slide" @click=${()=>b(S)}>
                    <img src="${y}"/>
                  </a>
                `)}
              `}
            </div>
          </div>
          <div class="block-title block-title-medium">Description</div>
          <div class="block no-margin-top" innerHTML=${i.description}></div>
          ${i?g`
          <div class="block-title block-title-medium">Size</div>
          <div class="block">${h(i.size,!0,2)}</div>
          <div class="block-title block-title-medium">Updated</div>
          <div class="block">${axisDateFormat.format(Date.parse(i.date.replace(/-/g,"/")))}</div>
          `:g`
          <div class="block-title no-margin-top skeleton-text skeleton-effect-wave">
            ----------------- ------- ----<br/>
            ----------- ------- --------- ------<br/>
            ------- -----<br/>
            ---------------------- ------<br/>
            <br/><br/>
            -----------<br/>
            ------------------------
            <br/><br/>
            -----------<br/>
            ------------------------
          </div>
          `}
        </div>
      </div>
    </div>
  </div>
`}}R.id="86f0d1f0dd";function M(d,{$:s,$on:v,$f7:n,$update:l,$h:u,$f7ready:o}){let e=!1;const i=()=>{n.request.json("https://flekstore.com/rest/faq/getList",{help:1}).then(function(t){e=JSON.parse(t.data.data),l()})};return o(()=>{i()}),function(t){t.$;var a=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,a`
  <div class="page faq-list">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">FAQ</div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-medium-width">
        <div class="list links-list list-links medium-inset">
          <ul style="background: transparent">
            ${e?a`
              ${e.map(c=>a`
                <li><a href="/faq_view/${c.id}/">${c.title}</a></li>
              `)}
            `:a`
              ${Array(8).fill().map(c=>a`
                <li><a href="#" class="skeleton-text skeleton-effect-wave">--------------------------------<br/>---------------</a></li>
              `)}
            `}
          </ul>
        </div>
      </div>
    </div>
  </div>
`}}M.id="7314eee318";function V(d,{$f7:s,$update:v,$h:n,$f7ready:l}){let u=!1,o=!1;const e=()=>{s.request.json("https://flekstore.com/rest/faq/getItem",{id:d.id}).then(function(t){u=t.data,v()})},i=()=>{s.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(t){o=JSON.parse(t.data.data),v()})};return l(()=>{e(),i()}),function(t){t.$;var a=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,a`
  <div class="popup popup-push flek-swipe-handler">
    <div class="view">
      <div class="page">
        <div class="popup-push-navbar">
          <div class="link popup-close"><i class="icon f7-icons color-gray" style="font-size:44px;">chevron_compact_down</i></div>
        </div>
        <div class="page-content">
          
          ${u?a`
          <div class="block-title block-title-medium" style="white-space: inherit;">${u.title}</div>
          `:a`
          <div class="block-title block-title-medium skeleton-text skeleton-effect-wave" style="white-space: inherit;">--------------------------------<br/>-----------------</div>
          `}
          ${u?a`
          <div class="block text-document-content" innerHTML=${u.text}></div>
          `:a`
          <center class="md margin-top">
            <div class="preloader">
              <span class="preloader-inner">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16"></circle>
                </svg>
              </span>
            </div>
          </center>
          `}
          
          ${u&&u.help=="1"&&o&&a`
            ${o.queue||o.stream!="0"?a`
            <div class="row justify-content-center">
              <a class="button button-large button-fill button-lite external" href="mailto:premium@flekstore.com?subject=UDID: ${o.udid} iOS: ${o.ios}">
                <i class="icon f7-icons">envelope_fill</i> I still need help
              </a>
            </div>
            `:""}
          `}
          
        </div>
      </div>
    </div>
  </div>
`}}V.id="be2af4acc1";function G(d,{$f7:s,$update:v,$h:n,$f7ready:l,$on:u,$f7router:o,$:e}){let i=""+Math.random().toString(36).substr(2,9);const t=()=>{s.tab.show(".view-main",".apps-tab-link"),e(".link-apps").click()},a=c=>{e(".purchase-button").attr("href","https://flekstore.com/rest/device/"+c+"/?id="+localStorage.device_id+"&p="+i)};return u("popupClose",(c,m)=>{o.navigate("/device/",{reloadCurrent:!0,ignoreCache:!0})}),window.addEventListener("focus",function(){s.request.json("https://flekstore.com/rest/device/saveIp",{device_id:localStorage.device_id}).then(function(c){c.data.status==="ok"&&console.log("ip saved || "+c.data.message)})}),function(c){c.$;var m=c.$h;return c.$root,c.$f7,c.$f7route,c.$f7router,c.$theme,c.$update,c.$store,m`
<div class="popup popup-push flek-swipe-handler">
  <div class="view">
    <div class="page">
      <div class="popup-push-navbar">
        <div class="link popup-close"><i class="icon f7-icons color-gray" style="font-size:44px;">chevron_compact_down</i></div>
      </div>
      <div class="page-content">
        
        <div class="block">
          <center>
            <p>
              By paying for activation, you confirm that you accept the <a href="/faq_view/3/" class="link color-blue"><b>Terms of service</b></a>
            </p>
          </center>
          <!-- <div class="swiper-container news">
            <div class="swiper-wrapper justify-content-center">
              <a href="/article/6/" class="link swiper-slide popup-close" @click=${()=>t()}>
                <img src="https://i.imgur.com/fSrmxGT.jpg" width="300.000000pt" height="180.000000pt"/>
                <backout></backout>
                <div class="title text-color-white">
                  What do you need to know before paying
                </div>
              </a>
            </div>
          </div> -->
          <!-- <center><p>and terms of services</p></center>
          <a href="/faq_view/3/" class="button button-large button-fill button-lite">
            <i class="icon f7-icons">doc</i> Terms of services
          </a> -->
        </div>
        
          <div class="list inset no-hairlines-between items-inset">
            <ul style="background: transparent;">
              <li>
                <a href="/article/6/" class="item-link item-content popup-close" @click=${()=>t()}>
                  <div class="item-media"><i class="f7-icons">question_diamond</i></div>
                  <div class="item-inner">
                    <div class="item-title" style="white-space: inherit;">What do you need to know before paying</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="md list inset no-hairlines-between items-inset">
            <ul>
              <!-- <li>
                <label class="item-radio item-radio-icon-start item-content" @click=${()=>a("paypalRedirect")}>
                  <input type="radio" name="demo-radio-start" checked />
                  <i class="icon icon-radio"></i>
                  <div class="item-inner">
                      <img src="https://flekstore.com/client/img/device/PayPal_payments.png" style="max-width: 200px; padding: 10px 0;"/>
                  </div>
                </label>
              </li> -->
              <li>
                <label class="item-radio item-radio-icon-start item-content" @click=${()=>a("freekassaVisaRedirect")}>
                  <input type="radio" name="demo-radio-start" checked/>
                  <i class="icon icon-radio"></i>
                  <div class="item-inner">
                      <img src="https://flekstore.com/client/img/device/visa_mc_usd_methods.png?1" style="max-width: 200px; padding: 10px 0;"/>
                  </div>
                </label>
              </li>
              <li>
                <label class="item-radio item-radio-icon-start item-content" @click=${()=>a("payeerRedirect")}>
                  <input type="radio" name="demo-radio-start"/>
                  <i class="icon icon-radio"></i>
                  <div class="item-inner">
                      <img src="https://flekstore.com/client/img/device/payeer_methods.png" style="max-width: 250px; padding: 10px 0;"/>
                  </div>
                </label>
              </li>
              <li>
                <label class="item-radio item-radio-icon-start item-content" @click=${()=>a("freekassaRedirect")}>
                  <input type="radio" name="demo-radio-start" />
                  <i class="icon icon-radio"></i>
                  <div class="item-inner">
                      <img src="https://flekstore.com/client/img/device/FK_methods.png?1" style="max-width: 200px; padding: 10px 0;"/>
                  </div>
                </label>
              </li>
              
            </ul>
          </div>
          <div class="block block-strong block-warning margin inset">
            It is easy to pay with cryptocurrency through online exchangers at <a herf="https://www.bestchange.com/" class="link color-blue external" target="_blank">bestchange.com</a>
          </div>
        <div class="block">
          <a href="https://flekstore.com/rest/device/freekassaVisaRedirect/?id=${localStorage.device_id}&p=${i}" class="button button-large button-fill external purchase-button" target="_blank">
            <i class="icon f7-icons">arrow_right_circle_fill</i> Purchase
          </a>
        </div>
        <!-- <div class="block block-strong block-warning margin inset">
          If the PayPal payment page doesn't open the first time, please try again or reload the PayPal page.
        </div> -->
        
      </div>
    </div>
  </div>
</div>
`}}G.id="a4c2967ac9";function J(d,{$f7:s,$update:v,$h:n,$f7ready:l,$on:u,$f7router:o,$:e}){let i=""+Math.random().toString(36).substr(2,9);return u("popupClose",(t,a)=>{}),window.addEventListener("focus",function(){s.request.json("https://flekstore.com/rest/device/saveIp",{device_id:localStorage.device_id}).then(function(t){t.data.status==="ok"&&console.log("ip saved || "+t.data.message)})}),function(t){t.$;var a=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,a`
<div class="popup popup-push flek-swipe-handler">
  <div class="view">
    <div class="page">
      <div class="popup-push-navbar">
        <div class="link popup-close"><i class="icon f7-icons color-gray" style="font-size:44px;">chevron_compact_down</i></div>
      </div>
      <div class="page-content">
        
        <div class="block block-pricing inset" style="background-image: linear-gradient(
          150deg, rgba(0, 90, 253, 0.1) 30%, rgb(0 90 255 / 40%) 100%), linear-gradient(
          30deg, rgba(0, 161, 255, 0.65) 0%, rgb(0 202 255 / 30%) 46%, rgba(255, 0, 224, 0.3) 100%);">
          <div class="list pricing-header no-hairlines">
            <ul>
              <li class="item-content">
                <div class="item-media">
                  <img src="https://flekstore.com/client/img/fspro-gift-icon.png" class="pricing-icon" style="padding:0 5px"/>
                </div>
                <div class="item-inner" style="margin: 0">
                  <div class="item-title" style="white-space: unset;">
                    <div class="title">A Christmas gift</div>
                    <div class="item-subtitle">
                      <div class="chip color-gray margin-right-half">
                        <div class="chip-label"><s class="">$20.99</s></div>
                      </div>
                      <div class="chip color-orange">
                        <div class="chip-label"><span class="price-text">$15.99</span></div>
                      </div>
                    </div>
                    <div class="item-footer">one-time payment</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <center>
            <div class="tariff-description padding-bottom">
              You can purchase a gift card for premium access to FlekSt0re apps library at a discounted price.
            </div>
          </center>
          <div style="display:grid;">
            <a href="https://flekstore.com/rest/device/giftPaypalRedirect/?id=${localStorage.device_id}&p=${i}" class="button button-large button-fill external" target="_blank">
              <i class="icon f7-icons">arrow_right_circle_fill</i> Purchase gift
            </a>
          </div>
        </div>
        
        <div class="block">
          <!-- <center>
            <p>
              The gift code will be in the settings section after payment.
            </p>
          </center> -->
          <a href="/faq_view/3/" class="button button-large button-fill button-lite">
            <i class="icon f7-icons">doc</i> Terms of services
          </a>
          <!-- <a href="https://flekstore.com/rest/device/paypalRedirect/?id=${localStorage.device_id}&p=${i}" class="button button-large button-fill external" target="_blank">
            <i class="icon f7-icons">arrow_right_circle_fill</i> Purchase gift
          </a> -->
        </div>
        <div class="block block-strong block-warning margin inset">
          If the PayPal payment page doesn't open the first time, please try again or reload the PayPal page.
        </div>
        
      </div>
    </div>
  </div>
</div>
`}}J.id="fe7f4e5bbf";function Y(d,{$:s,$on:v,$f7:n,$update:l,$h:u,$f7ready:o}){let e=!1;const i=n.toast.create({text:"Link copied",position:"top",horizontalPosition:"center",closeTimeout:1500,closeButton:!0}),t=()=>{n.request.json("https://flekstore.com/rest/device/getGifts",{id:localStorage.device_id}).then(function(a){e=JSON.parse(a.data.data),l()})};return o(()=>{t(),new ClipboardJS(".copy-gift-link").on("success",function(c){i.open()})}),function(a){a.$;var c=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,c`
  <div class="page faq-list">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">Gifts</div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-small-width">
        <center class="block">
          <p>Copy the link to the gift and send it to the person to whom it is intended. </p>
        </center>
            ${e?c`
              ${e.map(m=>c`
              <div class="block block-gift inset">
                <center>
                  <div class="gift-content">
                    <div class="">
                      <img src="https://flekstore.com/client/img/device/Crown2.png" class="gift-img"/>
                    </div>
                    <div class="gift-inner">
                      <div class="gift-title">Premium access coupon</div>
                      <p>${m.code} 
                      ${m.used&&c`
                        <div class="chip chip-outline color-red">
                          <div class="chip-label">Used</div>
                        </div>
                      `}
                      </p>
                    </div>
                  </div>
                  <div style="display:grid;">
                    <a href="" class="button button-large button-fill button-lite no-margin-bottom copy-gift-link" data-clipboard-text="https://flekstore.com/gift/${m.code}">
                      <i class="icon f7-icons">link</i> Copy link
                    </a>
                  </div>
                </center>
              </div>
              `)}
            `:c`
              <div class="infinite-scroll-preloader">
                <center class="md margin-top">
                  <div class="preloader">
                    <span class="preloader-inner">
                      <svg viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16"></circle>
                      </svg>
                    </span>
                  </div>
                </center>
              </div>
            `}
      </div>
    </div>
  </div>
`}}Y.id="62cf04c170";function W(){return function(d){d.$;var s=d.$h;return d.$root,d.$f7,d.$f7route,d.$f7router,d.$theme,d.$update,d.$store,s`
<div class="page">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
      <div class="title">Not found</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block block-strong">
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </div>
  </div>
</div>
`}}W.id="7c9d265c42";var le=[{path:"/apps/",component:E,options:{props:{list_config:{page:0,search:!1,filter:"updates"}}}},{path:"/device/",component:L},{path:"/signer/",component:z},{path:"/settings/",component:x},{path:"/article/:id/",component:O},{path:"/app_view/:id/",popup:{push:!0,swipeToClose:"to-bottom",component:R}},{path:"/purchase/",popup:{push:!0,swipeToClose:"to-bottom",component:G}},{path:"/purchase_gift/",popup:{push:!0,swipeToClose:"to-bottom",component:J}},{path:"/gifts_hub/",component:Y},{path:"/faq/",component:M},{path:"/faq_view/:id/",popup:{push:!0,swipeToClose:"to-bottom",component:V}},{path:"(.*)",component:W}];(function(d=window){var s=0,v=!1,n=!1;try{var l=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,l)}catch(k){}var u=function(k){var r=k.target,p=window.innerWidth/window.document.documentElement.clientWidth;if(!(k.touches.length>1||p!==1)){for(;r!==document.body&&r!==document;){var C=window.getComputedStyle(r);if(!C)break;if(r.nodeName==="INPUT"&&r.getAttribute("type")==="range")return;var B=C.getPropertyValue("-webkit-overflow-scrolling"),D=C.getPropertyValue("overflow-y"),P=parseInt(C.getPropertyValue("height"),10),T=B==="touch"&&(D==="auto"||D==="scroll"),b=r.scrollHeight>r.offsetHeight;if(T&&b){var h=k.touches?k.touches[0].screenY:k.screenY,f=s<=h&&r.scrollTop===0,g=s>=h&&r.scrollHeight-r.scrollTop===P;(f||g)&&k.preventDefault();return}r=r.parentNode}k.preventDefault()}},o=function(k){s=k.touches?k.touches[0].screenY:k.screenY},e=function(){window.addEventListener("touchstart",o,n?{passive:!1}:!1),window.addEventListener("touchmove",u,n?{passive:!1}:!1),v=!0},i=function(){window.removeEventListener("touchstart",o,!1),window.removeEventListener("touchmove",u,!1),v=!1},t=function(){return v},a=document.createElement("div");document.documentElement.appendChild(a),a.style.WebkitOverflowScrolling="touch";var c="getComputedStyle"in window&&window.getComputedStyle(a)["-webkit-overflow-scrolling"]==="touch";document.documentElement.removeChild(a),c&&e();var m={enable:e,disable:i,isEnabled:t};typeof q!="undefined"&&q.exports&&(q.exports=m),typeof d.define=="function"?function(k){k("iNoBounce",[],function(){return m})}(d.define):d.iNoBounce=m})(void 0);function H(d,{$update:s,$f7router:v,$f7:n,$on:l,$:u}){let o="apps";const e=i=>{n.tab.show(".view-"+i+"-tab","."+i+"-tab-link"),o=i,s()};return function(i){i.$;var t=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,t`
	<div class="panel panel-left panel-cover panel-init" data-visible-breakpoint="960">
		<div class="view view-left-panel" data-name="left">
			<div class="page">
				<div class="page-content">
					
					<center class="panel-logo" style="padding-top: 8vh">
						<i class="fs-icon" style="font-size: 45px"></i>
					</center>
					<div class="list menu-list no-hairlines">
						<ul style="background: transparent;">
							<li>
								<a 
									class="item-content link-apps item-link  ${o==="apps"?"item-selected":""}"
									@click=${()=>e("apps")}
								>
									<div class="item-media">
										<i class="icon f7-icons">layers_alt_fill</i>
									</div>
									<div class="item-inner">
										<div class="item-title">Apps</div>
									</div>
								</a>
							</li>
							<li>
								<a
									class="item-content link-device item-link ${o==="device"?"item-selected":""}"
									@click=${()=>e("device")}
								>
									<div class="item-media">
										<i class="icon f7-icons">device_phone_portrait</i>
									</div>
									<div class="item-inner">
										<div class="item-title">Device</div>
									</div>
								</a>
							</li>
							<li>
								<a
									class="item-content link-signer item-link ${o==="signer"?"item-selected":""}"
									@click=${()=>e("signer")}
								>
									<div class="item-media">
										<i class="icon f7-icons">pencil_outline</i>
									</div>
									<div class="item-inner">
										<div class="item-title">Signer</div>
									</div>
								</a>
							</li>
							<li>
								<a 
									class="item-content link-settings item-link ${o==="settings"?"item-selected":""}"
									@click=${()=>e("settings")}
								>
									<div class="item-media">
										<i class="icon f7-icons">gear_alt_fill</i>
									</div>
									<div class="item-inner">
										<div class="item-title">Settings</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
	</div>
`}}H.id="ce5c75edc0";function Z(d,s){if(!s||!d||(typeof s=="string"&&(s=d.$(s)[0]),!s))return;if(!s.querySelector(".tab-link-highlight")){const u=document.createElement("span");u.classList.add("tab-link-highlight"),s.querySelector(".toolbar-inner, .tabbar-inner").appendChild(u),d.toolbar.setHighlight(s)}const v=()=>{s.classList.add("lamp-tabbar","tabbar-highlight");const u=s.querySelector(".tab-link-active");if(!u)return;const o=u.style.getPropertyValue("--lamp-color");s.style.setProperty("--active-lamp-color",o||"")},n=u=>{!u||u.forEach(o=>{o.type==="attributes"&&o.target&&!o.target.classList.contains("tab-link")||v()})};new MutationObserver(n).observe(s.querySelector(".toolbar-inner"),{childList:!0,subtree:!0,attributes:!0}),v()}function K(d,{$:s,$f7:v,$el:n,$update:l,$onMounted:u}){let o=0;return v.device.standalone||localStorage.in_browser?s(".install-screen").remove():s(".install-screen-page").css("display","block"),localStorage.dev_mode&&s(".install-screen").remove(),u(()=>{const e=n.value.find(".tabbar")[0];console.log(e),Z(v,e),console.log(Z),s(".close-install-screen").on("click",function(i){localStorage.in_browser=1,s(".install-screen").remove()}),s(".tab-link").on("click",function(i){s(".link-"+s(this).data("tabname")).click()}),localStorage.dev_mode||s(".dev-mode").on("click",function(){o++,o>=10&&(localStorage.dev_mode=1,s(".install-screen").remove())}),v.request.json("https://flekstore.com/rest/apps/getAppVersion/").then(function(i){console.log(i.data);let t=i.data.data;localStorage.app_version?t!==localStorage.app_version&&(localStorage.app_version=t,location.reload()):localStorage.app_version=t})}),function(e){e.$;var i=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,i`
  <div id="app">
    <!-- Left panel with cover effect -->
    <${H} />
    <!-- Views/Tabs container -->
    <div class="views tabs safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <div class="toolbar toolbar-bottom toolbar-main tabbar tabbar-labels">
        <div class="toolbar-inner">
          <a
            href="#view-apps"
            class="tab-link apps-tab-link tab-link-active"
            data-tabname="apps"
          >
            <i class="icon f7-icons if-not-md">layers_alt_fill</i>
            <span class="tabbar-label">Apps</span>
          </a>
          <a
            href="#view-device"
            class="tab-link device-tab-link"
            data-tabname="device"
          >
            <i class="icon f7-icons if-not-md">device_phone_portrait</i>
            <span class="tabbar-label">Device</span>
          </a>
          <a
            href="#view-signer"
            class="tab-link signer-tab-link"
            data-tabname="signer"
          >
            <i class="icon f7-icons if-not-md">pencil_outline</i>
            <span class="tabbar-label">Signer</span>
          </a>
          <a
            href="#view-settings"
            class="tab-link settings-tab-link"
            data-tabname="settings"
          >
            <i class="icon f7-icons if-not-md">gear_alt_fill</i>
            <span class="tabbar-label">Settings</span>
          </a>
        </div>
      </div>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <div
        id="view-apps"
        class="view view-main view-init tab tab-active view-apps-tab"
        data-url="/apps/"
      >
        <!-- Home page will be loaded here dynamically from /apps/ route -->
      </div>

      <!-- Device View -->
      <div
        id="view-device"
        class="view view-init tab view-device-tab"
        data-name="device"
        data-url="/device/"
      >
        <!-- Catalog page will be loaded here dynamically from /device/ route -->
      </div>

      <!-- Signer View -->
      <div
        id="view-signer"
        class="view view-init tab view-signer-tab"
        data-name="signer"
        data-url="/signer/"
      >
        <!-- Signer page will be loaded here dynamically from /device/ route -->
      </div>

      <!-- Settings View -->
      <div
        id="view-settings"
        class="view view-init tab view-settings-tab"
        data-name="settings"
        data-url="/settings/"
      >
        <!-- Settings page will be loaded here dynamically from /settings/ route -->
      </div>
    </div>
  </div>
`}}K.id="941893b5c9";var Q=new ie({name:"FlekSt0re",theme:"ios",el:"#app",component:K,routes:le});const ne=d=>{var s=window.location.search.substring(1),v=s.split("&"),n,l;for(l=0;l<v.length;l++)if(n=v[l].split("="),n[0]===d)return typeof n[1]===void 0?!0:decodeURIComponent(n[1]);return!1};localStorage.deal_id||Q.request.json("https://flekstore.com/rest/device/getDealId/",{deal_code:ne("d")}).then(function(d){localStorage.deal_id=d.data.data});localStorage.client_uid||(localStorage.client_uid=""+Math.random().toString(36).substr(2,9)+Math.random().toString(36).substr(2,9)+(+new Date).toString(36));localStorage.layout||(localStorage.layout="dark");localStorage["color-theme"]||(localStorage["color-theme"]="#ffffff");A.addDefaultLocale(te);window.timeAgo=new A("en-US");window.ClipboardJS=se;window.axisDateFormat=Intl.DateTimeFormat(void 0,{day:"numeric",month:"short",year:"numeric"});window.setColorTheme=d=>{document.documentElement.style.setProperty("--f7-theme-color",d["--f7-theme-color"]),document.documentElement.style.setProperty("--f7-theme-color-shade",d["--f7-theme-color-shade"]),document.documentElement.style.setProperty("--f7-theme-color-rgb",d["--f7-theme-color-rgb"]),document.documentElement.style.setProperty("--f7-theme-color-tint",d["--f7-theme-color-tint"])};window.onload=()=>{if(localStorage["color-theme"]==null)localStorage["color-theme"]="#393939";else{let d=localStorage["color-theme"];setColorTheme(Q.utils.colorThemeCSSProperties(d))}localStorage.layout=="light"&&ae("html").removeClass("theme-dark")}});export default ce();
