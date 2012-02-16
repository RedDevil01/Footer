(function () {

    var FooterControl;

    window.FooterControl = FooterControl = (function () {

        function FooterControl() { }

        FooterControl.prototype._create = function () {
            var FooterInner;
            FooterInner = ($('<div/>')).addClass(this.css.FooterInner).append(($('<a/>')).attr({
                href: this.options.Link
            }).text(this.options.Text).addClass(this.css.Link));
            return ($(this.element)).attr({
                "align": "center"
            }).append(FooterInner).addClass(this.css.WrapperFooter);
        };

        FooterControl.prototype.options = {
            Name: "Default",
            Link: "javascript:void(0);",
            Text: "Copyright 2010 Verizon Communications"
        };

        FooterControl.prototype.css = {
            WrapperFooter: "ui-widget-footer",
            FooterInner: "ui-widget-footer-inner"
        };

        return FooterControl;

    })();

    $.widget("vdms.CommonFooter", new FooterControl);

}).call(this);
