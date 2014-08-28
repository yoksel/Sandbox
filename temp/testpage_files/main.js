/* ---------------------------------------------------------------------------------
   file-start: js/ljlive/main.js 
*/

LJ.injectStyle('.b-ljtimes-wrapper {\n	position: fixed;\n	top: auto;\n	right: auto;\n	bottom: 0;\n	left: 0;\n	width: 100%;\n	margin: 0;\n	padding: 0;\n	z-index: 2999;\n	font-size: 0;\n	background: #FFF;\n	}\n\n@media all and (max-width: 650px) {\n	.b-ljtimes-wrapper {\n		display: none;\n		}\n}\n\n.b-ljtimes-lwrapper {\n	position: fixed;\n	bottom: 0;\n	left: 0;\n	}\n.i-ljtimes-border {\n	position: absolute;\n	top: -1px;\n	left: 0;\n	display: block;\n	overflow: hidden;\n	width: 100%;\n	height: 1px;\n	background: #CCC;\n	font: 0/0 serif;\n	}\n	.i-ljtimes-bl,\n	.i-ljtimes-br {\n		position: absolute;\n		top: 0;\n		left: 50%;\n		display: block;\n		font: 0/0 serif;\n		width: 3000px;\n		height: 10px;\n		background: url(/img/ljtimes/border.png?v=9478) repeat 0 0;\n		}\n	.i-ljtimes-bl {\n		margin: 0 0 0 -3030px;\n		}\n	.i-ljtimes-br {\n		margin: 0 0 0 30px;\n		} \n.b-ljtimes-lwrapper .i-ljtimes-border {\n	display: none;\n	}\n.i-ljtimes-btn {\n	overflow: hidden;\n	position: absolute;\n	top: -17px;\n	left: 14px;\n	width: 46px;\n	height: 17px;\n	background: url(/img/ljtimes/button.png?v=10067) no-repeat 0 0;\n	font: 0/0 serif;\n	}\n.b-ljtimes-lwrapper .i-ljtimes-btn {\n	bottom: auto;\n	top: 0;\n    left: 50%;\n	height: 24px;\n    width: 60px;\n    margin: 0 0 0 -30px;\n    background: none;\n	}\n	.i-ljtimes-drag {\n		display: block;\n		position: absolute;\n		top: 0;\n		left: 0;\n		width: 60px;\n		height: 5px;\n		font: 0/0 serif;\n		cursor: row-resize;\n		}\n	.b-ljtimes-lwrapper .i-ljtimes-drag {\n		top: 16px;\n		height: 8px;\n		background: url(/img/ljtimes/down.png?v=10005) no-repeat 0 0; \n		cursor: pointer;\n		}\n	.i-ljtimes-click {\n		overflow: hidden;\n		display: block;\n		position: absolute;\n		top: 5px;\n		left: 0;\n    	width: 46px;\n		height: 18px;\n		font: 0/0 serif;\n		cursor: pointer;\n		}\n	.b-ljtimes-lwrapper .i-ljtimes-click {\n		top: 0;\n		width: 60px;\n		height: 16px;\n		background: url(/img/ljtimes/arrow.png?v=10005) no-repeat 0 0;\n		}\n.b-ljtimes-inbox {\n	position: fixed;\n	bottom: 33px;\n	right: 0;\n	width: 300px;\n	font: 11px/1.2 Arial,sans-serif;\n	color: #000;\n	z-index: 999;\n	}\n	.b-ljtimes-inbox-head {\n		display:block;\n		margin: 0;\n		padding: 7px 10px;\n		text-align: center;\n		font-weight: normal;\n		}\n	.b-ljtimes-inbox-item {\n		display:block;\n		margin: 0;\n		padding: 5px 10px 7px;\n		list-style: none;\n		border-top: 1px solid #C1C1C1;\n		}\n	.b-ljtimes-inbox-item:first-child {\n		border: 0;\n		}\n		.b-ljtimes-inbox-item B {\n			font-weight: normal;\n			}\n		.b-ljtimes-inbox-item IMG {\n			vertical-align: -5px !important;\n			}\n	.b-ljtimes-inbox A:link,\n	.b-ljtimes-inbox A:visited {\n		color: #41789C !important;\n		text-decoration: underline !important;\n		border: 0 !important;\n		}\n	.b-ljtimes-inbox A:hover,\n	.b-ljtimes-inbox A:active {\n		color: #41789C !important;\n		text-decoration: none !important;\n		border: 0 !important;\n		}\n	.b-ljtimes-inbox .i-popup-arr {\n		left: auto;\n		right: 15px;\n		margin: 0;\n		}\n.b-ljtimes-update {\n	position: fixed;\n	bottom: 33px;\n	right: 0;\n	width: 380px;\n	font: 11px/1.2 Arial,sans-serif;\n	z-index: 9999;\n	}\n	.b-ljtimes-update .b-popup {\n		position: static;\n		}\n	.b-ljtimes-logged-label {\n		display: block;\n		margin: 0;\n		padding: 0;\n		}\n	.b-ljtimes-logged-input {\n		overflow: hidden;\n		display: block;\n		margin: 1px 0 7px;\n		padding: 1px;\n		}\n	.b-ljtimes-logged .i-ljtimes-text {\n		width: 330px;\n		margin: 0;\n		padding: 2px 1px;\n		font: 12px/1.2 Arial,sans-serif;\n		}\n	.b-ljtimes-logged .i-ljtimes-textarea {\n		width: 330px;\n		height: 65px;\n		margin: 0;\n		padding: 2px 1px;\n		font: 12px/1.2 Arial,sans-serif;\n		}\n	.b-ljtimes-logged .i-ljtimes-tags {\n		float: left;\n		width: 180px;\n		}\n	.b-ljtimes-logged-submit {\n		float: right;\n		margin: 0;\n		}\n	.b-ljtimes-success {\n		color: #000;\n		}\n		.b-ljtimes-success .b-popup-inner {\n			padding: 30px;\n			}\n		.b-ljtimes-success-title {\n			display: block;\n			margin: 0 0 10px;\n			font: bold 15px/1.2 Arial,sans-serif;\n			text-align: center;\n			}\n		.b-ljtimes-success-body {\n			display: block;\n			line-height: 1.4;\n			text-align: center;\n			}\n	.b-ljtimes-login {\n		color: #000;\n		font-size: 12px;\n		}\n	.b-ljtimes-login-form {\n		position: relative;\n		overflow: hidden;\n		display:block;\n		margin: 0;\n		padding: 0;\n		text-align: left;\n		}\n		.b-ljtimes-login-head,\n		.b-ljtimes-logged-head {\n			display:block;\n			margin: 0 0 5px;\n			padding: 0;\n			font: bold 14px/1.2 Arial,sans-serif;\n			color: #000;\n			}\n		.b-ljtimes-login-input {\n			float: left;\n			margin: 0;\n			padding: 20px 5px 20px 1px;\n			list-style: none;\n			line-height: 1.2;\n			}\n			.b-ljtimes-login .i-ljtimes-text {\n				width: 115px;\n				margin: 0 0 5px;\n				padding: 2px 1px;\n				font: 12px/1.2 Arial,sans-serif;\n				}\n			.b-ljtimes-login .i-ljtimes-submit {\n				vertical-align: -6px;\n				}\n		.b-ljtimes-login-create {\n			position: absolute;\n			top: 0;\n			left: 0;\n			}\n		.b-ljtimes-login-remember {\n			position: absolute;\n			top: 45px;\n			left: 0;\n			}\n		.b-ljtimes-login-lostinfo {\n			position: absolute;\n			top: 48px;\n			left: 158px;\n			}\n		.b-ljtimes-login-connect {\n			margin: 0;\n			padding: 0;\n			text-align: left;\n			}\n			.b-ljtimes-login-connect IMG {\n				border: 0;\n				margin: 0 3px 0 0;\n				}\n	.b-ljtimes-update A:link,\n	.b-ljtimes-update A:visited {\n		color: #41789C !important;\n		text-decoration: underline !important;\n		border: 0 !important;\n		}\n	.b-ljtimes-update A:hover,\n	.b-ljtimes-update A:active {\n		color: #41789C !important;\n		text-decoration: none !important;\n		border: 0 !important;\n		}\n.b-ljtimes-bubble {\n	position: absolute;\n	left: 14px;\n	width: 292px;\n	margin: 0;\n	padding: 0;\n	font: 12px/1.2 Arial,sans-serif;\n	color: #000;\n	text-align: left;\n	}\n	.b-ljtimes-bubble-top,\n	.b-ljtimes-bubble-bg,\n	.b-ljtimes-bubble-close {\n		display: block;\n		position: absolute;\n		margin: 0;\n		padding: 0;\n		font: 0/0 serif;\n		}\n	.b-ljtimes-bubble-top {\n		top: 0;\n		left: 0;\n		width: 292px;\n		height: 7px;\n		background: url(/img/ljtimes/bubble-top.png?v=10269) no-repeat 0 0;\n		}\n	.b-ljtimes-bubble-content{\n		overflow: hidden;\n		position: relative;\n		top: 7px;\n		margin: 0;\n		padding: 8px 15px 22px;\n		}\n		.b-ljtimes-bubble-head {\n			position: relative;\n			display: block;\n			margin: 0 20px 5px 0;\n			padding: 0;\n			font-weight: bold;\n			z-index: 2;\n			}\n		.b-ljtimes-bubble-p {\n			position: relative;\n			display: block;\n			z-index: 2;\n			}\n		.b-ljtimes-bubble-bg {\n			bottom: 0;\n			left: 0;\n			width: 292px;\n			height: 357px;\n			background: url(/img/ljtimes/bubble-bg.png?v=10269) no-repeat 0 0;\n			z-index: 1;\n			}\n		.b-ljtimes-bubble-close {\n			top: 8px;\n			right: 16px;\n			width: 12px;\n			height: 12px;\n			background: url(/img/ljtimes/bubble-close.gif?v=10269) no-repeat 0 0;\n			cursor: pointer;\n			z-index: 3;\n			}\n.b-ljtimes-suggest,\n.b-ljtimes-suggestbbl {\n	position: fixed;\n	bottom: 33px;\n	right: 0;\n	width: 380px;\n	font: 11px/1.2 Arial,sans-serif;\n	color: #000;\n	z-index: 999;\n	}\n	.b-ljtimes-suggest .i-ljtimes-text {\n		width: 245px;\n		margin: 0 0 5px;\n		padding: 2px 1px;\n		font: 12px/1.2 Arial,sans-serif;\n		}\n	.b-ljtimes-suggest-alert {\n		margin: 0 0 5px;\n		padding: 0;\n		font: 11px/1.2 Arial,sans-serif;\n		}\n	.b-ljtimes-suggestbbl-alert {\n		margin: 0 0 5px;\n		padding: 0;\n		font: 12px/1.2 Arial,sans-serif;\n		}\n	.b-ljtimes-suggest-input .i-ljtimes-submit {\n		vertical-align: 0;\n		}\n		\n/* Pages without footer */\n.p-nofooter #ljtime_bottom {\n	height: 21px !important;	\n	}\n.p-footer-lite #ljtime_bottom {\n	height: 21px !important;\n	}\n.p-footer-lite.ljtimes-minimized #ljtime_bottom {\n	height: 0 !important;\n	}\n\n');
/**
 * LJ Live main file
 */
;(function ($) {
  'use strict';

  var IFRAME_HEIGHT = 50,
      wrapper = $('<div />', {
        id: 'ljlive',
        'class': 'b-ljtimes-wrapper b-ljtimes-wrapper_v2'
      }),
      brandingTemplate = LJ.get('ljlive.branding_template'),
      iframe = createIframe();

  wrapper.append(iframe);
  if (brandingTemplate) {
    wrapper.append( $.parseHTML(brandingTemplate) );
  }

  /**
   * Create hidden iframe
   */
  function createIframe() {
    var params = {

          // send origin that will be applied to postMessage
          origin: location.origin
        };

    if ( typeof LJ.get('journal.id') !== 'undefined' ) {
      params.journalid = LJ.get('journal.id');
    }

    if ( typeof LJ.get('entry.ditemid') !== 'undefined' ) {
      params.entryditemid = LJ.get('entry.ditemid');
    }

    if ( brandingTemplate ) {
      params.branding = true;
    }

    return $('<iframe />', {
      width: '100%',
      height: IFRAME_HEIGHT,
      frameborder: 0,
      src: LiveJournal.constructUrl(LJ.get('siteroot') + '/discovery/times', params),
      id: 'ljtime_iframe'
    }).hide();
  }

  // listen messages from iframe
  $(window).on('message', function (event) {
    event = event.originalEvent;

    if ( event.origin !== LJ.get('siteroot') ) {
      return;
    }

    // iframe is ready
    if (event.data === 'ljlive ready') {
      LJ.Event.trigger('ljlive:ready');
    }
  });

  // wait for iframe ready
  LJ.Event.on('ljlive:ready', function () {
    iframe.show();
  });

  $(function () {
    // statement is copied from previous ljlive implementation
    var isServicePage = !LJ.get('journal') || LJ.get('scheme');

    $('[data-ljlive]').replaceWith( wrapper );

    // add empty div to non-service pages
    if ( !isServicePage ) {
      wrapper.after(
        $('<div />', {
          id: 'ljtime_bottom',
          height: IFRAME_HEIGHT
        })
      );
    }
  });
}(jQuery));
;

/* file-end: js/ljlive/main.js 
----------------------------------------------------------------------------------*/
