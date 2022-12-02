$jQ('.sooqrSearchContainer').removeAttr('style');
$jQ('sooqrSearchContainer').attr('style','top:50px;position:absolute;margin-left:auto;margin-right:auto;right:0;left:0;height:100%;');
$jQ('sooqrSearchResultsContainer').attr('style','height:100%;');
$jQ('sooqrSearchResults').attr('style','height:100%;');
$jQ('sqr-results').attr('style','overflow-y:scroll;height:100%;');
document.querySelector('.searchbox__form input[name="search"]').setAttribute("id", "search");
document.querySelector('.header').innerHTML += '<input type="text" id="search-mobile" placeholder="Zoeken naar producten, categorieën, ..."/>'; 


document.getElementById('search_mini_form').innerHTML = '<div id="algolia-searchbox"><label for="search">Zoeken:</label><span class="algolia-autocomplete"><input id="search" type="text" class="input-text algolia-search-input aa-input" placeholder="Zoeken naar producten, categorieën, ..."/></span><span id="algolia-glass" class="magnifying-glass" width="24" height="24"></span></div>'; 

document.querySelector('.header').innerHTML += '<input type="text" id="search-mobile" placeholder="Zoeken naar producten, categorieën, ..."/>'; 

document.querySelector('nav').innerHTML += '<input type="text" id="search-mobile" placeholder="Zoeken naar producten, categorieën, ..." />'; 


document.querySelector('.search-modal__form-wrapper input[name="search"]').setAttribute("id", "search-mobile");
document.querySelector('.searchbox__form input[name="search"]').setAttribute("id", "search");
var _wssq = _wssq || [],
    setResizeFunction = !1,
    sooqrAccount = "119676-1";
_wssq.push(["_load", { suggest: { account: "SQ-" + sooqrAccount, version: 4, fieldId: ["search", "search-mobile"] } }]);
_wssq.push(["suggest._setPosition", "screen-middle", { top: 0 }]);
_wssq.push(["suggest._setLocale", "nl_NL"]);
_wssq.push(["suggest._excludePlaceholders", "Vul hier uw zoekterm in"]);
_wssq.push(["suggest._bindEvent", "open", function() { setResizeFunction || ($jQ(window).resize(function() { $jQ(".sooqrSearchContainer-" + sooqrAccount).is(":visible") && websight.sooqr.instances["SQ-" + sooqrAccount].positionContainer(null, null, !0) }), setResizeFunction = !0) }]);
(function() {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = ("https:" == document.location.protocol ? "https://" : "http://") + "static.sooqr.com/sooqr.js";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
})();



document.querySelector('.sooqrSearchMobileTabsResults').innerHTML = '<a><span id="sooqrSearchMobileTabsResultsText">Resultaten</span></a>'; 
