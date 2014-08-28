/* ---------------------------------------------------------------------------------
   file-start: js/jquery/jquery.lj.repostbutton.js 
*/

LJ.UI.registerTemplate('templates-CleanHtml-PaidRepost', "{{if 1}} <span class=\" b-flatrepost repost-button {{if $data.reposted}} b-flatrepost-reposted {{/if}} {{if $data.count}} b-flatrepost-counted {{/if}} {{if $data.budget || $data.cost}} b-flatrepost-gained {{/if}} {{if $data.owner}} b-flatrepost-disabled {{/if}} {{if $data.login}} b-flatrepost-disabled {{/if}} \" ><a href=\"javascript:void(0);\" data-href=\"{{html $data.url}}\" class=\"b-flatrepost-name\" title=\"{{if $data.reposted}}{{html LJ.mltext(\'entry.reference.label.title\')}}{{else}}{{if $data.login}}{{html LJ.mltext(\'repost.button.title.login\')}}{{else}}{{if $data.owner}}{{html LJ.mltext(\'repost.button.title.myown\')}}{{else}}{{html LJ.mltext(\'repost.button.title\')}}{{/if}}{{/if}}{{/if}}\" ><span class=\"b-flatrepost-gain\" title=\"{{html $data.budget}}{{html LJ.mltext(\'paidrepost.button.title.curr\')}}\" >{{if !$data.owner}}+{{html $data.cost}}{{else $data.budget}}{{html $data.budget}}{{/if}}</span></a><span class=\"b-flatrepost-counter\" title=\"{{html LJ.mltext(\'repost.button.counter\')}}\" >{{html $data.count}}</span></span> {{else}} <span class=\"lj-button paidrepost-button {{if $data.reposted}}paidrepost-button-active{{/if}} lj-button-light\"><span class=\"lj-button-wrapper\"> <span class=\"lj-button-link\"> <span class=\"lj-button-a\"> <span title=\'{{if $data.owner}}{{html LJ.mltext(\'paidrepost.button.title.owner\')}}{{html $data.budget}}{{html LJ.mltext(\'paidrepost.button.title.curr\')}}{{else}}{{html LJ.mltext(\'paidrepost.button.title\')}}{{/if}}\' data-href=\"{{html $data.url}}\" class=\"lj-button-b\"><span class=\"lj-button-icon {{if $data.single}}lj-button-icon-sinlge{{/if}}\"></span> <span class=\"paidrepost-button-label\">{{html LJ.mltext(\'paidrepost.button.label\')}}</span> <span class=\"paidrepost-button-cost\">{{if !($data.owner)}}{{html $data.cost}}{{/if}}</span> </span> <span data-href=\"{{html $data.url}}\" title=\'{{if $data.owner}}{{html LJ.mltext(\'paidrepost.button.title.owner\')}}{{html $data.budget}}{{html LJ.mltext(\'paidrepost.button.title.curr\')}}{{else}}{{html LJ.mltext(\'paidrepost.button.title.delete\')}}{{/if}}\' class=\"lj-button-b lj-button-b-reposted\"><span class=\"lj-button-icon {{if $data.single}}lj-button-icon-sinlge{{/if}}\"></span> <span class=\"paidrepost-button-label\">{{html LJ.mltext(\'paidrepost.button.label.done\')}}</span><span class=\"paidrepost-button-cost\">{{if !($data.owner)}}{{html $data.cost}}{{/if}}</span> </span> <span title=\'{{html LJ.mltext(\'paidrepost.button.title.counter\')}}\' class=\"lj-button-c {{if !($data.count)}}empty{{/if}}\"> <span class=\"lj-button-arrow\"><span class=\"lj-button-arrow-bg\"></span></span> <span class=\"lj-like-item-count\">{{html $data.count}}</span> </span> </span> </span> </span></span> {{/if}} ", 'JQuery.stat');
LJ.UI.registerTemplate('templates-CleanHtml-Repost', "{{if 1}} <span class=\" b-flatrepost repost-button {{if $data.reposted}} b-flatrepost-reposted {{/if}} {{if $data.count}} b-flatrepost-counted {{/if}} {{if $data.budget}} b-flatrepost-gained {{/if}} {{if $data.owner}} b-flatrepost-disabled {{/if}} {{if $data.login}} b-flatrepost-disabled {{/if}} \" ><a href=\"javascript:void(0);\" data-href=\"{{html $data.url}}\" class=\"b-flatrepost-name\" title=\"{{if $data.reposted}}{{html LJ.mltext(\'entry.reference.label.title\')}}{{else}}{{if $data.login}}{{html LJ.mltext(\'repost.button.title.login\')}}{{else}}{{if $data.owner}}{{html LJ.mltext(\'repost.button.title.myown\')}}{{else}}{{html LJ.mltext(\'repost.button.title\')}}{{/if}}{{/if}}{{/if}}\" ><span class=\"b-flatrepost-gain\" title=\"{{html $data.budget}}{{html LJ.mltext(\'paidrepost.button.title.curr\')}}\" >{{if !$data.owner}}+{{html $data.cost}}{{else $data.budget}}{{html $data.budget}}{{/if}}</span></a><span class=\"b-flatrepost-counter\" title=\"{{html LJ.mltext(\'repost.button.counter\')}}\" >{{html $data.count}}</span></span> {{else}} <span class=\"lj-button repost-button {{if $data.reposted}}repost-button-active{{/if}} lj-button-light\"><span class=\"lj-button-wrapper\"> <span class=\"lj-button-link\"> <span class=\"lj-button-a\"> <span title=\'{{html LJ.mltext(\'repost.button.title\')}}\' data-href=\"{{html $data.url}}\" class=\"lj-button-b\"><span class=\"lj-button-icon {{if $data.single}}lj-button-icon-sinlge{{/if}}\"></span> {{html LJ.mltext(\'repost.button.label\')}}</span> <span title=\'{{html LJ.mltext(\'entry.reference.label.title\')}}\' data-href=\"{{html $data.url}}\" class=\"lj-button-b lj-button-b-reposted\"><span class=\"lj-button-icon {{if $data.single}}lj-button-icon-sinlge{{/if}}\"></span> {{html LJ.mltext(\'entry.reference.label.reposted\')}}</span> <span title=\'{{html LJ.mltext(\'repost.button.counter\')}}\' class=\"lj-button-c {{if !($data.count)}}empty{{/if}}\"> <span class=\"lj-button-arrow\"><span class=\"lj-button-arrow-bg\"></span></span> <span class=\"lj-like-item-count\">{{html $data.count}}</span> </span> </span> </span> </span></span> {{/if}} ", 'JQuery.stat');
LJ.UI.registerTemplate('templates-CleanHtml-reposted', "{{if $data.content}} {{each ($value.users || $data.users)}}{{if !((!$index) && !($value.dropComma || $data.dropComma))}}, {{/if}}<a href=\"{{html ($value.url || $data.url)}}\">{{html ($value.user || $data.user)}}</a>{{/each}} {{else}} <div class=\"b-reposted-popup\"> <div class=\"b-reposted-popup-header\">{{html LJ.mltext(\'repost.popup.head\')}}</div> <div class=\"b-reposted-popup-content b-reposted-popup-load\"></div> <div class=\"b-reposted-popup-footer\"><a href=\"javascript:void(0);\">{{html LJ.mltext(\'repost.popup.footer\')}}</a></div> </div> {{/if}} ", 'JQuery.stat');
/**
 * @name $.lj.repostbutton
 * @requires $.ui.core, $.ui.widget, $.lj.basicWidget, $.lj.bubble
 * @class Represents repost button
 * @author dmitry.petrov@sup.com (Dmitry Petrov), anazarov@sup.com (Alexander Nazarov)
 */
;(function ($) {
  'use strict';

  /** @lends $.lj.repostbutton.prototype */
  $.widget('lj.repostbutton', $.lj.basicWidget, {
    options: {
      classNames: {
        active: 'repost-button-active',
        inactive: 'repost-button-inactive',
        popupLoad: 'b-reposted-popup-load',
        popupNomore: 'b-reposted-popup-footer-hide',
        repostError: 'repost-error'
      },

      selectors: {
        counterParent: '.lj-button-c',
        button: '.lj-button-b',
        counter: '.lj-like-item-count',
        buttonLink: '.lj-button-link',
        popupContent: '.b-reposted-popup-content',
        popupFooter: '.b-reposted-popup-footer',
        popupMore: '.b-reposted-popup-footer > a'
      },

      templates: {
        popup: 'templates-CleanHtml-reposted'
      },

      url: '',
      reposted: false,
      cost: 0,
      budget: 0,
      paid: false
    },

    _create: function() {

      if ( LJ.Flags.isEnabled('ljlike_v3') ) {

        this.options.classNames = {
          active: 'b-flatrepost-reposted',
          inactive: 'b-flatrepost-disabled',
          popupLoad: 'b-reposted-popup-load',
          popupNomore: 'b-reposted-popup-footer-hide',
          repostError: 'repost-error'
        };

        this.options.selectors = {
          counterParent: '.b-flatrepost-counter',
          button: '.b-flatrepost-name',
          counter: '.b-flatrepost-counter',
          buttonLink: '.b-flatrepost-name',
          popupContent: '.b-reposted-popup-content',
          popupFooter: '.b-reposted-popup-footer',
          popupMore: '.b-reposted-popup-footer > a'
        };

      }

      $.lj.basicWidget.prototype._create.apply(this);

      if (!this.options.url) {
        console.warn(this.widgetName, ': no url in options, initialization won\'t continue');
      }

      this._journal = LJ.get('currentJournal');
      this._count = null;
      this._remote = LJ.get('remoteUser');
      this._reposted = this.options.reposted;
      this._el('buttonLink');
      this._href = this.element.find(this._s('button')).data('href');
      this._href = LJ.Util.Journal.parseLink(this._href) || {};

      if (!this._canRepost()) {
        this.element.addClass(this._cl('inactive'));
        this._buttonLink.removeAttr('title');
        this._lock();
      }

      this._popup = null;
      this._popupContent = null;
      this._popupLocked = false;
      this._lastUser = null;
      this._el('counterParent');
      this._el('counter');

      if (!Number(this._counter.html())) { this._hideCounter(); }

      this._bindControls();
    },

    _hideCounter: function () {
      this._counterParent.addClass('empty');
    },

    _showCounter: function () {
      this._counterParent.removeClass('empty');
    },

    _bindControls: function() {
      var repost = this;

      this.element.on('click', this._s('button'), this._onUpdateButton.bind(this));

      this._counterParent.one('click', function() {
        if ( !Number(repost._counter.html()) ) {
          return;
        }

        repost._popup = repost._tmpl('popup');
        repost._el('popupFooter', repost._popup);
        repost._popupContent = repost._popup.find(repost._s('popupContent'));

        repost._popup.bubble({
          showOn: 'click',
          align: 'side',
          alwaysShowUnderTarget: true,
          target: repost._counterParent
        })
        .on('bubblehide', function () {
          repost._lastUser = null;
          repost._popupContent.empty();
          repost._popupFooter.removeClass(repost._cl('popupNomore'));
        })
        .on('bubbleshow', function () {
          repost._loadRepostedList();
        })
        .on('click', repost._s('popupMore'), repost._loadRepostedList.bind(repost));

        Function.defer(function() {
          repost._popup.bubble('show');
        });
      });

      $.lj.basicWidget.prototype._bindControls.apply(repost);
    },

    _loadRepostedList: function(ev) {
      var repost = this;

      if (ev) { ev.preventDefault(); }
      if (this._popupLocked) { return; }

      this._popupLocked = true;
      this._popupContent.addClass(this._cl('popupLoad'));

      LJ.Api.call('repost.get_list', { url: this.options.url, last: this._lastUser }, function(answer) {
        repost._popupContent.removeClass(repost._cl('popupLoad'));
        repost._popupLocked = false;
        if (answer.error) {
          repost._handleAnswer(answer);
        } else {
          repost._render(answer.users, answer.nomore, answer.count);
          repost._lastUser = answer.last;
        }
      });
    },

    _render: function(users, nomore, count) {
      var repost = this;

      /* Display users */
      if (users.length > 0) {
        repost._tmpl('popup', {
          content: true,
          dropComma: !!repost._lastUser,
          users: users
        }).appendTo(repost._popupContent);
      }

      this._updateCounter(count);

      /* Hide 'Show More' button */
      if (nomore) {
        repost._popupFooter.addClass(repost._cl('popupNomore'));
      }
    },

    _onUpdateButton: function(ev) {
      if (!this.locked()) {
        this.toggleRepost();
      }
      ev.preventDefault();
    },

    _handleAnswer: function(answer) {
      if (answer.hasOwnProperty('delete')) {
        if (answer.message) {
          this._showMessage(answer.message);
        }

        /* LJSUP-13479: Repost type or cost changed */
        if ( this.paid !== Boolean(answer.paid) || this.paid && (this.cost !== answer.cost) ) {
          this.element.replaceWith(LJ.Social.renderRepostButton(this.options.url, answer));
          return;
        }
      }

      if (answer.error) {
        if (answer.error.message) {
          this._showMessage(answer.error.message);
        }

        if (answer.error.data) {
          // Redraw button completely with new data
          this.element.replaceWith(LJ.Social.renderRepostButton(this.options.url, answer.error.data));
          return;
        }
      } else {
        this._updateButton( !this._reposted );
      }

      if (!answer.hasOwnProperty('count') && answer.hasOwnProperty('delete')) {
        answer.count = this._count - 1;
      }

      this._updateCounter(answer.count);
      this._unlock();
    },

    _showMessage: function (message) {
      var errorBubble = $('<div />', {
        'class': this._cl('repostError'),
        text: message
      })
      .bubble({
        target: this.element,
        align: 'center',
        hide: function () {
          errorBubble.remove();
        }
      })
      .bubble('show');
    },

    _updateButton: function(reposted) {
      this._reposted = reposted;
      this.element.toggleClass(this._cl('active'), this._reposted);
    },

    _updateCounter: function (count) {
      if (typeof count !== 'undefined') {
        this._count = Number(count);
        this._counter.html(this._count);
      }

      if (!Number(this._counter.html())) {
        this._hideCounter();
      } else {
        this._showCounter();
      }
    },

    _canRepost: function () {
      if (LJ.get('preview')) { return false; }
      if (!this._remote) { return false; }
      if (LJ.get('remote_is_identity')) { return false; }
      if (this._remote === this._href.journal) { return false; }

      return true;
    },

    toggleRepost: function() {
      var repost = this,
        args = {
          url: this.options.url
        };

      if (!this._canRepost()) { return; }

      if (this._count === null) {
        this._count = parseInt( this._el('counter').html(), 10) || 0;
      }

      this._lock();
      if (this._reposted) {
        LJ.Api.call('repost.delete', args, function (answer) {
          /* LJSUP-12559: Reload page when repost is deleted in remote user's journal */
          if (
                !answer.error &&
                !answer.reposted &&
                repost._journal === repost._remote &&
                !location.href.match(/\/(friends|times|feed)\b/)
             ) {
            location.reload();
          } else {
            repost._handleAnswer(answer);
          }
        });
      } else {
        args.timezone = LJ.Util.Date.timezone();

        if (this.options.paid) {
          args.cost = this.options.cost;
        }

        LJ.Api.call('repost.create', args, this._handleAnswer.bind(this));
      }
    }
  });
}(jQuery));

;

/* file-end: js/jquery/jquery.lj.repostbutton.js 
----------------------------------------------------------------------------------*/
