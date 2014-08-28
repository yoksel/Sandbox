/* ---------------------------------------------------------------------------------
   file-start: js/jquery/jquery.lj.sidePane.js 
*/

/*!
 * LiveJournal sidepane
 *
 * Copyright 2011, dmitry.petrov@sup.com
 *
 * http://docs.jquery.com/UI
 * 
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.lj.basicWidget.js
 *
 * @overview Widget represents the panel that is placed on the edge of the screen
 *    and slides out if user clicks on the pane button. Only one pane can be opened
 *    at time.
 *
 */
(function( $ ) {

	// @TODO: move this to the external file.
	var transitionsSupported = function() {
		var div = document.createElement('div');

		div.setAttribute('style', 'transition:top 1s ease;-webkit-transition:top 1s ease;-moz-transition:top 1s ease;');
		cssTransitionsSupported = !!(div.style.transition || div.style.webkitTransition || div.style.MozTransition || div.style.OTransitionDuration );
		delete div;

		return cssTransitionsSupported;
	}();

	$.widget( 'lj.sidePane', $.lj.basicWidget, {
		options: {
			selectors: {
				inner: '.w-friendstimes-inner',
				toggle: '.b-friendstimes-hidden-comments-icon, .b-friendstimes-toolbar-title'
			},
			classNames: {
				open: 'w-friendstimes-opened',
				hidden: 'w-friendstimes-closed'
			},

			/**
			 * Options shows whether widget is visible or not.
			 * The field has two values: visible and hidden
			 */
			visibility: 'visible',
			state: 'closed'
		},

		/** @private */

		_create: function() {
			$.lj.basicWidget.prototype._create.call( this );
			this._inner = this.element.find( this.options.selectors.inner );
			this._setOptions( this.options );

			//panel will not close if user clicks in the area within panel contents
			this._preventClose = false;

			this._bindControls();

			var widget = this;
			this._on( 'sidePane/close', function() { widget.close() } );
			this._on( 'documentClick', function() {
				if( widget._preventClose ) {
					widget._preventClose = false;
					return;
				}

				widget.close()
			} );
		},

		_bindControls: function() {
			$.lj.basicWidget.prototype._bindControls.apply( this );

			var self = this,
				options = this.options;

			this.element.find( this.options.selectors.toggle ).click( function( ev ) {
				if( options.state === 'closed' ) {
					self.open();
				} else {
					self.close();
				}
			} );

			this.element.click( function( ev ) {
				self._preventClose = true;
			} );
		},

		_setOption: function( name, val ) {
			switch( name ) {
				case 'visibility':
					if( val === 'hidden' ) {
						this.hide();
					} else if( val === 'visible' ) {
						this.show();
					} else {
						return;
					}
					break;

				case 'state':
					if( val === 'closed' ) {
						this.close();
					} else if( val === 'open' ) {
						this.open();
					} else {
						return;
					}
					break;

				default: return;
			}
		},

		/** @public */

		/**
		 * Show panel.
		 */
		show: function() {
			var widget = this;

			if(transitionsSupported) {
				this.element
					.removeClass(this.options.classNames.hidden);
			} else {
				//if transitions are not supported we show program animation.
				//Css options below were taken from the css file.
				this._inner
					.animate( {
					left: "100%",
					marginLeft: "-47px"
				}, {
					duration: 300,
					complete: function() {
						widget.element
							.removeClass(widget.options.classNames.hidden);

						widget._inner.removeAttr('style');
					}
				} );
			}
			this.options.visibility = 'visible';
		},

		/**
		 * Hide panel.
		 */
		hide: function() {
			var widget = this;

			if(transitionsSupported) {
				this.element
					.removeClass(this.options.classNames.open)
					.addClass(this.options.classNames.hidden);
			} else {
				this._inner.animate( {
					left: "100%",
					marginLeft: "4px"
				}, {
					duration: 300,
					complete: function() {
						widget.element
							.removeClass(widget.options.classNames.open)
							.addClass(widget.options.classNames.hidden);

						widget._inner.removeAttr('style');
					}
				} );
			}

			this.options.visibility = 'hidden';
		},

		/**
		 * Open panel.
		 */
		open: function() {
			var widget = this;
			this.show();
			if( transitionsSupported ) {
				this.element.addClass( this.options.classNames.open );
			} else {
				//if transitions are not supported we show program animation.
				//Css options below were taken from the css file.
				this.element.css( {
					zoom: 1,
					zIndex: 10
				} );
				this._inner.css({ marginLeft: "0px" }).animate( {
					left: "1%"
				}, {
					duration: 300, 
					queue: true,
					complete: function() {
						widget.element
							.addClass( widget.options.classNames.open );

						widget._inner.removeAttr( 'style' );
					}
				} );
			}
			this.options.state = 'open';

			//all other panes should be closed if this pane is opened.
			this._fire( 'sidePane/close' );
		},

		/**
		 * Close panel.
		 */
		close: function() {
			var widget = this;

			if( !this.element.hasClass( this.options.classNames.open ) ) {
				return;
			}

			if( transitionsSupported ) {
				this.element.removeClass( this.options.classNames.open );
			} else {
				//if transitions are not supported we show program animation.
				//Css options below were taken from the css file.
				this._inner.css({ marginLeft: "-47px" }).animate( {
					left: "90%"
				}, {
					duration: 300,
					complete: function() {
						widget.element
							.removeClass( widget.options.classNames.open );

						widget._inner.removeAttr( 'style' );
					}
				} );
			}
			this.options.state = 'closed';
		}
	} );
} )( jQuery );
;

/* file-end: js/jquery/jquery.lj.sidePane.js 
----------------------------------------------------------------------------------*/
