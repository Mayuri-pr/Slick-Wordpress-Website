parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JA8d":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r(n.key),n)}}function n(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(t){var a=i(t,"string");return"symbol"===e(a)?a:String(a)}function i(t,a){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,a||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(function(){var e=[].indexOf;jQuery(function(a){"use strict";return window.SV_WC_Payment_Form_Handler_v5_12_1=function(){function r(e){var n=this;if(t(this,r),this.id=e.id,this.id_dasherized=e.id_dasherized,this.plugin_id=e.plugin_id,this.type=e.type,this.csc_required=e.csc_required,this.csc_required_for_tokens=e.csc_required_for_tokens,this.enabled_card_types=e.enabled_card_types,a("form.checkout").length)this.form=a("form.checkout"),this.handle_checkout_page();else if(a("form#order_review").length)this.form=a("form#order_review"),this.handle_pay_page();else{if(!a("form#add_payment_method").length)return void console.log("No payment form found!");this.form=a("form#add_payment_method"),this.handle_add_payment_method_page()}this.params=window.sv_wc_payment_gateway_payment_form_params,"echeck"===this.type&&this.form.on("click",".js-sv-wc-payment-gateway-echeck-form-check-hint, .js-sv-wc-payment-gateway-echeck-form-sample-check",function(){return n.handle_sample_check_hint()}),a(document).trigger("sv_wc_payment_form_handler_init",{id:this.id,instance:this})}return n(r,[{key:"handle_checkout_page",value:function(){var e=this;return"credit-card"===this.type&&a(document.body).on("updated_checkout",function(){return e.format_credit_card_inputs()}),a(document.body).on("updated_checkout",function(){return e.set_payment_fields()}),a(document.body).on("updated_checkout",function(){return e.handle_saved_payment_methods()}),this.form.on("checkout_place_order_".concat(this.id),function(){return e.validate_payment_data()})}},{key:"handle_pay_page",value:function(){var e=this;return this.set_payment_fields(),"credit-card"===this.type&&this.format_credit_card_inputs(),this.handle_saved_payment_methods(),this.form.submit(function(){if(a("#order_review input[name=payment_method]:checked").val()===e.id)return e.validate_payment_data()})}},{key:"handle_add_payment_method_page",value:function(){var e=this;return this.set_payment_fields(),"credit-card"===this.type&&this.format_credit_card_inputs(),this.form.submit(function(){if(a("#add_payment_method input[name=payment_method]:checked").val()===e.id)return e.validate_payment_data()})}},{key:"set_payment_fields",value:function(){return this.payment_fields=a(".payment_method_".concat(this.id)),this.payment_fields.find(".validate-required .input-text").each(function(e,t){return!a(t).val()&&a(t).trigger("input")})}},{key:"validate_payment_data",value:function(){var e,t;return!this.form.is(".processing")&&(this.saved_payment_method_selected=this.payment_fields.find(".js-sv-wc-payment-gateway-payment-token:checked").val(),t="credit-card"===this.type?this.validate_card_data():this.validate_account_data(),e=!1!==a(document.body).triggerHandler("sv_wc_payment_form_valid_payment_data",{payment_form:this,passed_validation:t}),t&&e)}},{key:"format_credit_card_inputs",value:function(){var e,t,n,r=this;return e=a(".js-sv-wc-payment-gateway-credit-card-form-account-number").payment("formatCardNumber"),n=a(".js-sv-wc-payment-gateway-credit-card-form-expiry").payment("formatCardExpiry"),t=a(".js-sv-wc-payment-gateway-credit-card-form-csc").payment("formatCardCVC"),e.val()&&e.val().length>0&&e.trigger("change"),n.val()&&n.val().length>0&&n.trigger("change"),t.val()&&t.val().length>0&&t.trigger("change"),a(".js-sv-wc-payment-gateway-credit-card-form-input").on("change paste keyup",function(){return r.do_inline_credit_card_validation()})}},{key:"do_inline_credit_card_validation",value:function(){var t,n,r,i;return t=a(".js-sv-wc-payment-gateway-credit-card-form-account-number"),i=a(".js-sv-wc-payment-gateway-credit-card-form-expiry"),r=a(".js-sv-wc-payment-gateway-credit-card-form-csc"),n=a.payment.cardType(t.val()),e.call(this.enabled_card_types,n)<0?t.addClass("invalid-card-type"):t.removeClass("invalid-card-type"),a.payment.validateCardExpiry(i.payment("cardExpiryVal"))?i.addClass("identified"):i.removeClass("identified"),a.payment.validateCardCVC(r.val())?r.addClass("identified"):r.removeClass("identified")}},{key:"validate_card_data",value:function(){var e,t,n,r;return n=[],null!=(t=this.payment_fields.find(".js-sv-wc-payment-gateway-credit-card-form-csc").val())&&(t?(/\D/.test(t)&&n.push(this.params.cvv_digits_invalid),(t.length<3||t.length>4)&&n.push(this.params.cvv_length_invalid)):this.csc_required&&(this.saved_payment_method_selected&&!this.csc_required_for_tokens||n.push(this.params.cvv_missing))),this.saved_payment_method_selected||(e=this.payment_fields.find(".js-sv-wc-payment-gateway-credit-card-form-account-number").val(),r=a.payment.cardExpiryVal(this.payment_fields.find(".js-sv-wc-payment-gateway-credit-card-form-expiry").val()),(e=e.replace(/-|\s/g,""))?((e.length<12||e.length>19)&&n.push(this.params.card_number_length_invalid),/\D/.test(e)&&n.push(this.params.card_number_digits_invalid),a.payment.validateCardNumber(e)||n.push(this.params.card_number_invalid)):n.push(this.params.card_number_missing),a.payment.validateCardExpiry(r)||n.push(this.params.card_exp_date_invalid)),n.length>0?(this.render_errors(n),!1):(this.payment_fields.find(".js-sv-wc-payment-gateway-credit-card-form-account-number").val(e),!0)}},{key:"validate_account_data",value:function(){var e,t,a;return!!this.saved_payment_method_selected||(t=[],a=this.payment_fields.find(".js-sv-wc-payment-gateway-echeck-form-routing-number").val(),e=this.payment_fields.find(".js-sv-wc-payment-gateway-echeck-form-account-number").val(),a?(9!==a.length&&t.push(this.params.routing_number_length_invalid),/\D/.test(a)&&t.push(this.params.routing_number_digits_invalid)):t.push(this.params.routing_number_missing),e?((e.length<3||e.length>17)&&t.push(this.params.account_number_length_invalid),/\D/.test(e)&&t.push(this.params.account_number_invalid)):t.push(this.params.account_number_missing),t.length>0?(this.render_errors(t),!1):(this.payment_fields.find(".js-sv-wc-payment-gateway-echeck-form-account-number").val(e),!0))}},{key:"render_errors",value:function(e){return a(".woocommerce-error, .woocommerce-message").remove(),this.form.prepend('<ul class="woocommerce-error"><li>'+e.join("</li><li>")+"</li></ul>"),this.form.removeClass("processing").unblock(),this.form.find(".input-text, select").blur(),a("html, body").animate({scrollTop:this.form.offset().top-100},1e3)}},{key:"handle_saved_payment_methods",value:function(){var e,t,n,r;if(r=this.id_dasherized,this.csc_required,n=this.csc_required_for_tokens,t=a("div.js-wc-".concat(r,"-new-payment-method-form")),e=t.find(".js-sv-wc-payment-gateway-credit-card-form-csc").closest(".form-row"),a("input.js-wc-".concat(this.id_dasherized,"-payment-token")).on("change",function(){if(a("input.js-wc-".concat(r,"-payment-token:checked")).val()){if(t.slideUp(200),n)return e.removeClass("form-row-last").addClass("form-row-first"),t.after(e)}else if(t.slideDown(200),n)return e.removeClass("form-row-first").addClass("form-row-last"),t.find(".js-sv-wc-payment-gateway-credit-card-form-expiry").closest(".form-row").after(e)}).change(),a("input#createaccount").on("change",function(){var e;return e=a("input.js-wc-".concat(r,"-tokenize-payment-method")).closest("p.form-row"),a(this).is(":checked")?(e.slideDown(),e.next().show()):(e.hide(),e.next().hide())}),!a("input#createaccount").is(":checked"))return a("input#createaccount").change()}},{key:"handle_sample_check_hint",value:function(){var e;return(e=this.payment_fields.find(".js-sv-wc-payment-gateway-echeck-form-sample-check")).is(":visible")?e.slideUp():e.slideDown()}},{key:"block_ui",value:function(){return this.form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}})}},{key:"unblock_ui",value:function(){return this.form.unblock()}}]),r}(),a(document.body).trigger("sv_wc_payment_form_handler_v5_12_1_loaded")})}).call(this);
},{}]},{},["JA8d"], null)
//# sourceMappingURL=../frontend/sv-wc-payment-gateway-payment-form.js.map