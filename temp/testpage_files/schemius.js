/* ---------------------------------------------------------------------------------
   file-start: js/scheme/schemius.js 
*/

/* ---------------------------------------------------------------------------------
   file-start: js/lib/jquery.selectric.min.js 
*/

/*! Selectric ϟ v1.6.3 (2014-02-26) - git.io/tjl9sQ - Copyright (c) 2013 Leonardo Santos - Dual licensed: MIT/GPL */
!function(a){var b="selectric",c=function(a){var b,c="40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g,"\\3$&").split(" ");for(b in c){if(!c.hasOwnProperty(b))return;a=a.toLowerCase().replace(RegExp("["+c[b]+"]","g"),"aeiouncy".charAt(b))}return a},d=function(d,e){function f(){function d(a){/^(9|13|27)$/.test(a.keyCode||a.which)&&(a.stopPropagation(),k(v,!0))}var f=B.children();_$li="<ul>",selectedIndex=f.filter(":"+P).index(),w=v=~selectedIndex?selectedIndex:0,(A=f.length)&&(f.each(function(b){var d=a(this),e=d.html(),f=d.prop("disabled");G[b]={value:d.val(),text:e,slug:c(e),disabled:f},_$li+='<li class="'+(b==w?P:"")+(b==A-1?" last":"")+(f?" disabled":"")+'">'+e+"</li>"}),E.html(_$li+"</ul>"),H.html(G[w].text)),D.add(B).off(I),F.data(b,!0).prop("class",[r[6],B.prop("class"),N,e.responsive?r[8]:""].join(" ")),B.prop("disabled")?C.prop("disabled",!0):(F.removeClass(N).hover(function(){a(this).toggleClass(r[7])}),e.openOnHover&&D.on("mouseenter"+I,h),D.on(L,function(a){s?j():h(a)}),C.on({keypress:d,keydown:function(a){d(a),clearTimeout(u),u=setTimeout(function(){C.val("")},e.keySearchTimeout);var b=a.keyCode||a.which;b>36&&41>b&&k(39>b?n():m())},focusin:function(a){C.one("blur",function(){C.blur()}),s||h(a)}}).on(Q,function(){C.val().length&&a.each(G,function(a,b){return RegExp("^"+C.val(),"i").test(b.slug)&&!b.disabled?(k(a),!1):void 0})}),t=a("li",E.removeAttr("style")).click(function(){return k(a(this).index(),!0),!1}))}function g(){var a=E.closest(":visible").children(":hidden"),b=e.maxHeight;a.addClass(O);var c=E.outerWidth(),d=D.outerWidth()-(c-E.width());!e.expandToItemText||d>c?z=d:(E.css("overflow","scroll"),F.width(9e4),z=c,E.css("overflow",""),F.width("")),E.width(z).height()>b&&E.height(b),a.removeClass(O)}function h(b){b.preventDefault(),b.stopPropagation(),g(),a("."+M).removeClass(M),s=!0,x=E.outerHeight(),i(),C.val("").is(":focus")||C.focus(),J.on(L,j),e.openOnHover&&(clearTimeout(y),F.one("mouseleave"+I,function(){y=setTimeout(j,500)})),F.addClass(M),l(v),e.onOpen(d)}function i(){s&&(g(),E.css("top",F.offset().top+F.outerHeight()+x>K.scrollTop()+K.height()?-x:""),setTimeout(i,100))}function j(a){if(!a&&w!=v){var b=G[v].text;B.prop("selectedIndex",w=v).data("value",b).trigger("change",[b,w]),e.onChange(d),H.html(b)}J.off(I),F.removeClass(M),s=!1,e.onClose(d)}function k(a,b){G[v=a].disabled||(t.removeClass(P).eq(a).addClass(P),l(a),b&&j())}function l(a){var b=t.eq(a).outerHeight(),c=t[a].offsetTop,d=E.scrollTop(),e=c+2*b;E.scrollTop(e>d+x?e-x:d>c-b?c-b:d)}function m(a){if(G[a=(v+1)%A].disabled)for(;G[a=(a+1)%A].disabled;);return a}function n(a){if(G[a=(v>0?v:A)-1].disabled)for(;G[a=(a>0?a:A)-1].disabled;);return a}var o,e=a.extend({onOpen:a.noop,onClose:a.noop,onChange:a.noop,maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:!0,openOnHover:!1,expandToItemText:!1,responsive:!1,customClass:{prefix:"selectric",postfixes:"Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive",camelCase:!0}},e),p=e.customClass,q=p.postfixes.split(" "),r=[];if(!e.disableOnMobile||!/android|ip(hone|od|ad)/i.test(navigator.userAgent)){for(;o=q.shift();)r.push(p.camelCase?p.prefix+o:(p.prefix+o).replace(/([A-Z])/g,"-$&").toLowerCase());var s,t,u,v,w,x,y,z,A,B=a(d),C=a('<input type="text" class="'+r[0]+'"/>'),D=a('<div class="'+p.prefix+'"><p class="label"/>'+e.arrowButtonMarkup+"</div>"),E=a('<div class="'+r[1]+'" tabindex="-1"></div>'),F=B.data(b,!0).wrap("<div>").parent().append(D.add(E).add(C)),G=[],H=a(".label",D),I=".sl",J=a(document),K=a(window),L="click"+I,M=r[2],N=r[3],O=r[4],P="selected",Q="oninput"in C[0]?"input":"keyup";B.wrap('<div class="'+r[5]+'">'),f(),B.on({refresh:f,destroy:function(){E.add(D).remove(),B.removeData(b).removeData("value").off(I+" refresh destroy open close").unwrap().unwrap()},open:h,close:j})}};a.fn[b]=function(c,e){return this.each(function(){a(this).data(b)?""+c===c&&a(this).trigger(c):d(this,c||e)})}}(jQuery);
;

/* file-end: js/lib/jquery.selectric.min.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/captcha.js 
*/

/*global ACPuzzle */
/**
 * LiveJournal implementation of captcha
 * @author Valeriy Vasin (valeriy.vasin@sup.com)
 */
;(function ($) {
  'use strict';

  LJ.define('LJ.Captcha');

  LJ.Captcha = {
    create:  create,
    reload:  reload,
    destroy: destroy,

    getChallenge: getChallenge,
    getResponse:  getResponse
  };

  var publicKey,
      captchaScriptLoaded = false,
      options = {
        lang: 'ru',
      };

  function _getPublicKey() {
    var defer = $.Deferred();

    if ( publicKey ) {
      defer.resolve( publicKey );
    } else {
      LJ.Api.call('captcha.get_public_key', {}, function (response) {
        publicKey = response.captcha_public;
        defer.resolve(publicKey);
      });
    }

    return defer.promise();
  }

  function _loadCaptchaScript() {
    var defer = $.Deferred();

    if ( captchaScriptLoaded ) {
      defer.resolve();
    } else {

      // add captcha onload callback
      window.ACPuzzleOptions = {
        onload: function () {
          captchaScriptLoaded = true;
          defer.resolve();
        }
      };

      LJ.injectScript(location.protocol === 'https:' ?
        'https://api-secure.solvemedia.com/papi/challenge.ajax' :
        'http://api.solvemedia.com/papi/challenge.ajax'
      );
    }

    return defer.promise();
  }

  function create(containerId, opts) {
    opts = $.extend(options, opts || {});

    return $.when(
      _getPublicKey(),
      _loadCaptchaScript()
    ).done(function () {
      if ( typeof ACPuzzle !== 'undefined' ) {
        ACPuzzle.create(publicKey, containerId, opts);
      } else {
        console.error('Something went wrong. Captcha object is not defined.');
      }
    });
  }

  function destroy() {
    if ( typeof ACPuzzle !== 'undefined' ) {
      ACPuzzle.destroy();
    }
  }

  function reload() {
    if ( typeof ACPuzzle !== 'undefined' ) {
      ACPuzzle.reload();
    }
  }

  function getChallenge() {
    return ACPuzzle.get_challenge();
  }

  function getResponse() {
    return ACPuzzle.get_response();
  }
}(jQuery));
;

/* file-end: js/captcha.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/scheme/schemius/feedback.js 
*/

;(function ($){
  'use strict';

  $(function (){
    var that = this;
    var $welcome = $('.s-welcometo');
    var $icon = $('.s-do-item-feedback');
    var isFeedbackOpen = false;
    var _body = $('body');
    var $feedback = $('.s-feedback');
    var $error = $feedback.find('.s-feedback-error');
    var $success = $feedback.find('.b-bubble-success-inner');
    var stateClass = {
      inprogress: 's-feedback-creating',
      done :'s-feedback-successfully',
      error :'s-feedback-erroneously'
    };

    this.setState = function(state) {
      $feedback.toggleClass(stateClass.inprogress, state === 'inprogress');
      $feedback.toggleClass(stateClass.done, state === 'done');
      $feedback.toggleClass(stateClass.error, state === 'error');
    };

    $feedback
      .on('click', '.s-feedback-submit', function (event) {
        var data = {};

        event.preventDefault();

        that.setState('inprogress');

        $feedback.find('input, textarea, select').each(function () {
          data[this.name] = $(this).val();
        });

        LJ.Api.call('support.create_request', data, function (response) {
          if (response.error) {
            $error.html(response.error.message);

            return that.setState('error');
          }

          $success.html( $('<a>').attr('href', response.request.url).html(response.request.url) );
          that.setState('done');
        });
      })
      .on('click', '.s-feedback-another', function (event) {
        event.preventDefault();

        $feedback.find('input, textarea').each(function () {
          $(this).val('');
        });

        LJ.Captcha.reload();

        that.setState(null);
      });


    $welcome.bubble({
      target: $icon,
      showOn: 'click',
      alwaysShowUnderTarget: true,
      arrowWidth: 'auto'
    })

    //click button in bubble
    .on('click', '.s-welcometo-action .b-flatbutton', function (event) {
      event.preventDefault();

      // show feedback form
      _body.addClass('p-feedback');
      isFeedbackOpen = true;

      // captcha should be shown only for non logged users
      if ( !LJ.get('remote') ) {
        LJ.Captcha.create('b-captcha', { tabindex: 50 });
      }

      // hide bubble
      $welcome.bubble('hide');
    })

    // return to old design.
    .on('click', '.s-welcometo-switcher', function (event) {
      event.preventDefault();

      //not logged - set cookie
      if ( !LJ.get('remote') ) {
        LJ.Cookie.setGlobal('ljold', 1, { expires: 7 });
        location.reload();
        return;
      }

      // logged - Api call
      LJ.Api.call( 'settings.set_old_design', { value: 1 }, function () {
        location.reload();
      });
    });

    // close feedback form
    _body.on('click', function (event) {
      var target = $(event.target);

      if ( !isFeedbackOpen || (!target.hasClass('b-fader-feedback') && !target.hasClass('s-feedback-close')) ) {
        return;
      }

      _body.removeClass('p-feedback');
      isFeedbackOpen = false;
      that.setState(null);

      // destroy captcha
      if ( !LJ.get('remote') ) {
        LJ.Captcha.destroy();
      }
    });

  });

}(jQuery));
;

/* file-end: js/scheme/schemius/feedback.js 
----------------------------------------------------------------------------------*/

;(function ($){
  'use strict';

  $(function (){

    function isSpecialKey(event) {

      // return false if ctrl/cmd pushed
      return !!(event.ctrlKey || (event.metaKey && LJ.Support.isMac));
    }

    /**
     *  Search Box pageTop toggle.
     */
    var searchBox    = $('.s-do-item-search'),
        searchField  = searchBox.find('input'),
        searchButton = searchBox.find('a'),
        searchClass  = 's-do-item-search-open',
        preventClose = false,
        langBox      = $('.s-nav-item-lang'),
        langBoxClass = 's-nav-item-lang-open';

    searchButton.on('click', function (event) {
      // do nothing if ctrl/cmd
      if ( isSpecialKey(event) ) {
        return;
      }
      event.preventDefault();

      searchBox.toggleClass(searchClass);

      if ( searchBox.hasClass(searchClass) ) {
        preventClose = true;
        searchField.focus();
      }
    });

    searchField.on('click', function () {
      preventClose = true;
    });

    $(document.body).on('click', function () {
      if ( !preventClose ) {
        searchBox.removeClass(searchClass);
        langBox.removeClass(langBoxClass);
      }
      preventClose = false;
    });

    /**
     * Lang icon for unlogged users.
     */
    function langSwitch(langCode) {
      if (langCode) {
        LJ.Api.call('lang.set', {lang: langCode}, function () {
          location.reload();
        });
      }
    }

    $('[data-lang]').on('click', function () {
      langSwitch( $(this).data('lang') );
    });

    langBox.on('click', function (event) {
      if ( isSpecialKey(event) ) {
        return;
      }

      event.preventDefault();
      langBox.toggleClass(langBoxClass);

      preventClose = langBox.hasClass(langBoxClass);
    });

    /**
     * Lang footer select
     */
    $('.s-lang-select').selectric({
      customClass: {
        prefix: 'b-selectus',
        postfixes: 'Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive',
        camelCase: false
      }
    }).on('change', function () {
      langSwitch( $(this).val() );
    });

    /**
     * Link to mobile site
     */
    $('.b-message-mobile-close').one('click', function () {
      $('.b-message-mobile').hide();
    });

    /**
     * Main Navigation
     */
    var dropMenus     = $('.s-drop-master'),
        _body         = $('body'),
        openMenuClass = 's-drop-open',
        isMobileView  = LJ.Support.isMobile(),
        isMenuOpen = false;

    if ( !isMobileView ) {
      var timer,
          bubbles = $(':lj-bubble');

      dropMenus.on('mouseenter', function () {
        var currentMenu = $(this),
            delay = 300;

        // clear state if already open
        if ( isMenuOpen ) {
          clearTimeout(timer);
          delay = 0;
        }

        //drop menu with delay
        timer = setTimeout( function () {

          //close all other menus
          dropMenus.removeClass(openMenuClass);

          //open current menu
          currentMenu.addClass(openMenuClass);
          isMenuOpen = true;

          //close bubbles on menu open LJSUP-18463
          bubbles.bubble('hide');

        }, delay);

      }).on('mouseleave', function () {
        var currentMenu = $(this);

        // close menu with delay
        if ( isMenuOpen ) {

          timer = setTimeout(function () {
            currentMenu.removeClass(openMenuClass);
            isMenuOpen = false;
          }, 500);

          return;
        }

        // remove opening timer
        clearTimeout(timer);
        currentMenu.removeClass(openMenuClass);
      });
    }

    // mobile version prevent
    if ( isMobileView ) {
      var isFirstOpened = false;

      // menu accordion
      dropMenus.on('click', function (event) {
        var currentMenu = $(this),
            hasSubItems = currentMenu.find('li').length !== 0;

        // not prevent clicks input in menus.
        if ( event.target.tagName.toLowerCase() === 'input' ) {
          return;
        }

        if ( !currentMenu.hasClass(openMenuClass) && hasSubItems ) {
          event.preventDefault();
        }

        if ( !currentMenu.hasClass(openMenuClass) ) {
          isMenuOpen = true;
          dropMenus.removeClass(openMenuClass);
        }

        currentMenu.toggleClass(openMenuClass);
      });

      // open first menu if common menu opens in mobile view
      $('.s-nav-control-common').one('click', function () {

        if ( !isFirstOpened ) {
          dropMenus.first().addClass(openMenuClass);
          isFirstOpened = true;
        }

      });

      //iphone safari crash on css transition+calc
      if ( LJ.Support.isMobile && LJ.Support.browser.safari ) {
        _body.addClass('iphone');
      }

      // prevent tap on active item (in categories/filters menu) to allow collapse it.
      $('.l-flatslide-menu-active, .l-flatslide-menu-expander').click(function (event) {
        event.preventDefault();
        $(this).closest('.l-flatslide-menu').toggleClass('l-flatslide-menu-expanded');
      });
    }

    /**
     * Login Form popup
     */
    $('.s-nav-item-login, .b-fader-login, .b-loginform-close').on('click', function (event) {

      if ( isMobileView ) {
        return;
      }

      event.preventDefault();
      _body.toggleClass('p-loginform');
      $('#user').focus();
    });

    /**
     * Change default userpic
     */
    LJ.Event.on('userpic.changed', function (newUserpicSrc) {
      $('.s-userpic').css('backgroundImage', 'url(' + newUserpicSrc + ')');
    });
  });
}(jQuery));
;

/* file-end: js/scheme/schemius.js 
----------------------------------------------------------------------------------*/
