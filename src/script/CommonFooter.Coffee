window.FooterControl = class FooterControl 
	_create: -> 
  									
		FooterInner = ($ '<div/>').addClass(@css.FooterInner)
								  .append(($ '<a/>').attr(href: @options.Link)
												    .text(@options.Text)
													.addClass(@css.Link))
								  
		($ this.element).attr("align": "center")
		                .append(FooterInner)
						.addClass(@css.WrapperFooter) 
	
	options: # Widget Options
		Name: "Default"
		Link: "javascript:void(0);"
		Text: "Copyright 2010 Verizon Communications"
		
	css:
		WrapperFooter: "ui-widget-footer"
		FooterInner: "ui-widget-footer-inner"
		
$.widget "vdms.CommonFooter", new FooterControl 