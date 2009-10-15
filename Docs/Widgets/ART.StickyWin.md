Class: ART.StickyWin {#ART.StickyWin}
=============================
Creates an ART Widget within the page with the specified contents at the location relative to the element you specify; basically an in-page popup maker.

### Syntax

	new ART.StickyWin(options);

### Arguments

1. options - (*object*) an object with key/value options

### Options

* content - (*mixed*) the content of your popup; this should be **layout html and your message** or a **DOM element** (or its id)
* zIndex - (*integer*, optional) the zIndex of the popup; defaults to *10000* (ten thousand)
* id - (*string*) the id of the wrapper div that gets created that will contain your content
* className - (*string*, optional) class name for the wrapper div that gets created that will contain your content
* position - (*string*) "center", "upperRight", "bottomRight", "upperLeft", "bottomLeft"; the point in the popup that is positioned; defaults to 'center'. see [Element:position][]
* edge - (*string*, optional) same options as position (center, upperRight, etc.) but specifies the edge of the stickyWin to position to the point specified in position. see [Element:position][] for details; defaults to the [Element:seposition] default state.
* offset - (*object*) object containing {x: # and y: #} (integers) the top and left offset from the element in the  page that the popup is relative to; this offset is applied to the center of the popup or the corner, depending on  the value you specify in the 'position' option.
* relativeTo - (*mixed*) a DOM element to position the popup relative to; defaults to *document.body* (i.e. the window)
* width - (*integer*, optional) width for the wrapper div for your popup
* height - (*integer*, optional) height for the wrapper div for your popup
* timeout - (*integer*, optional) timeout interval to hide the popup after a specified time
* showNow - (*boolean*, optional) display the popup on instantiation; defaults to *true*
* useIframeShim - (*boolean*, optional) use an [IframeShim][] to mask content below the element; defaults to *true*
* iframeShimSelector - (*string*) the css selector to find the element within your popup under which the [IframeShim][] should be placed to obscure select lists and the like (see [IframeShim][])
* inject - (*object*) the target and location of where to inject the StickyWin; defaults to *{target: document.body, where: 'bottom'}*
* destroyOnClose - (*boolean*) when closed, the container is removed and garbage collected (this makes the StickyWin instance useless after it's been closed). Defaults to *false*.
* closeOnClickOut - (*boolean*) if *true*, clicks outside the window will close it; defaults to *false*.
* closeOnEsc - (*boolean*) if *true*, closes the window when the user hits escape; defaults to *false*.
* windowManager - (*instanceOfStacker*) 
* windowManagerLayer - (*string*, optional) Sets the layer that the window manager uses defaults to *default*
* mask - Whether it should use a mask; defaults to *false*
* maskTarget - Which element to display a mask over; defaults to *document.body*
* maskOptions - options to pass to the mask object. defaults to *{}*
* hideMaskOnClick - Whether to hide mask on click. Note: will be overridden if hideOnClick is passed to maskOptions. defaults to *true* 
* closeClass - (*string*, optional) class name of the element(s) in your popup content that, when clicked, should close the window; defaults to *"closeWin"*
* close -  defaults to *true*
*	draggable - Makes the window draggable when true; defaults to *false*
* dragHandle - The element that will trigger drags. defaults to *null*
* showNow - display the window immediately. defaults to *true*
* useIframeShim - Whether to use iframeshim with the window. defaults to *true*
* cascaded - defaults to *false*
* constrainToContainer - defaults to *false*

### Events

* all events from ART.Widget
* drag:start: (*function*) callback executed when a drag is initiated.
* drag:move: (*function*) callback executed when widget is moved. Arguments is the (x,y) of the widget.
* drag:end: (*function*) callback executed when a drag has finished.
* shade: (*function*) callback executed when a drag is initiated or ended and *greyContentsOnDrag* option is set to true.

### Example

	var myWin = new ART.StickyWin({
		content: '<div id="myWin">hi there!<br /><a href="javascript:void(0);" class="closeSticky">close</a></div>'
	});
	//popups up a box in the middle of the window with "hi there" and a close link


ART.StickyWin Method: show {#ART.StickyWin:show}
----------------------------------------

Shows the popup.

### Syntax

	myStickyWin.show();

### Returns

* (*object*) This instance of [ART.StickyWin][]

ART.StickyWin Method: hide {#ART.StickyWin:hide}
----------------------------------------

Hides the popup.

### Syntax

	myStickyWin.hide();

### Returns

* (*object*) This instance of [ART.StickyWin][]


ART.StickyWin Method: setContent {#ART.StickyWin:setContent}
----------------------------------------------------

Sets the content of the popup.

### Syntax

	myStickyWin.setContent(content);

### Arguments

1. content - (*mixed*) either the html to insert as the body of the StickyWin or a DOM Element (or its id) to inject inside as the content.

### Returns

* (*object*) This instance of [ART.StickyWin][]

ART.StickyWin Method: position {#ART.StickyWin:position}
------------------------------------------------

Repositions the popup (incase it has moved or the document has been altered).

### Syntax

	myStickyWin.position(options);

### Arguments

1. options - (*object*; optional) positioning options passed to [Element:position][]. By default these options are the options defined when you instantiate the class (see the *relativeTo*, *position*, *offset*, and *edge* options defined in the Class options above). Pass in an alternate set of instructions to position differently.

### Example

	myStickyWin.position({
		relativeTo: $('someElement'),
		offset: {x: 10, y: 10},
		edge: 'upperLeft',
		position: 'upperRight'
	});

### Returns

* (*object*) This instance of [ART.StickyWin][]

ART.StickyWin Method: pin {#ART.StickyWin:pin}
--------------------------------------

Affixes the stickywin to a fixed position, even if the window is scrolled. See [Element:pin][].

### Syntax

	myStickyWin.pin();

### Returns

* (*object*) This instance of [ART.StickyWin][]

ART.StickyWin Method: unpin {#ART.StickyWin:unpin}
--------------------------------------

Sets the StickyWin to an absolute position. See [Element:unpin][].

### Syntax

	myStickyWin.unpin();

### Returns

* (*object*) This instance of [ART.StickyWin][]

ART.StickyWin Method: togglepin {#ART.StickyWin:togglepin}
--------------------------------------

Toggle the pinned state of the Sticky.

### Syntax

	myStickyWin.togglepin();

### Returns

* (*object*) This instance of [ART.StickyWin][]

ART.StickyWin Method: enableDrag {#ART.StickyWin:enableDrag}
--------------------------------------

Turns on the ability to drag a window

### Syntax

	myStickyWin.enableDrag();

### Returns

* (*object*) This instance of [ART.StickyWin][]

ART.StickyWin Method: disableDrag {#ART.StickyWin:disableDrag}
--------------------------------------

Turns off the ability to drag a window.

### Syntax

	myStickyWin.disableDrag();

### Returns

* (*object*) This instance of [ART.StickyWin][]

ART.StickyWin Method: enable {#ART.StickyWin:enable}
--------------------------------------

Sets the widget state to enabled.

### Syntax

	myStickyWin.enable();

### Returns

* (*object*) This instance of [ART.StickyWin][]


ART.StickyWin Method: getOnScreen {#ART.StickyWin:getOnScreen}
--------------------------------------

Makes sure that the widget is contained inside its parent container.

### Syntax

	myStickyWin.getOnScreen();

ART.StickyWin Method: resize {#ART.StickyWin:resize}
--------------------------------------

Resizes the widget to a specified width and height.

### Arguments

1. width - (*number*) the new width of the widget
2. height - (*number*) the new height of the widget

### Syntax

	myStickyWin.destroy();

ART.StickyWin Method: destroy {#ART.StickyWin:destroy}
--------------------------------------

Destroys this instance.

### Syntax

	myStickyWin.destroy();

[ART.StickyWin]: #ART.StickyWin

[IframeShim]: 
[Element:position]: 
[Element:pin]: 
[Element:unpin]:
[Keyboard]: 
[Options]: http://www.mootools.net/docs/core/Class/Class.Extras#Options
[Events]: http://www.mootools.net/docs/core/Class/Class.Extras#Events
