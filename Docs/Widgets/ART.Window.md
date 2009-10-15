Class: ART.Window {#ART.Window}
=============================

Creates an ART Widget that has different sections (header, content, footer)

### Extends

* ART.StickyWin

### Options

* caption -- The text to display in the header bar of the window. Defaults to *null*
* min -- Defaults to *{}*
* max -- Defaults to *{}*
* close -- Defaults to *true*
* minimize -- When true adds the minimize button to the window. Defaults to *true*
* maximize -- When true adds the maximize button to the window. Defaults to *true*
* resizable -- When true the widget is resizable. Defaults to *true*
* draggable -- When true the widget is draggable. Defaults to *true*
* shadow -- When true puts a shadow on the window. Defaults to *Browser.Engine.webkit*
* cascaded -- Defaults to *true*

### Events


### Methods


ART.Window Method: maximize {#ART.Window:maximize}
----------------------------------------

Maximizes the widget

### Syntax

myWindow.maximize();

### Returns




ART.Window Method: minimize {#ART.Window:minimize}
----------------------------------------
* (*object*) This instance of [ART.StickyWin][]
Minimizes the widget

### Syntax

myWindow.minimize();

### Returns


ART.Window Method: setContent {#ART.Window:setContent}
----------------------------------------

Adds

### Syntax

### Arguments

content -- the element to be 

### Returns

* (*object*) This instance of [ART.Window][]


ART.Window Method: setCaption {#ART.Window:setCaption}
----------------------------------------



### Syntax

### Arguments

text -- (*string*) the new text to be displayed in the header.

### Returns

* (*object*) This instance of [ART.Window][]


ART.Window Method: setFooter {#ART.Window:setFooter}
----------------------------------------

Sets the passed in string as the footers html

### Syntax

myWindow.setFooter('Moo?');

### Arguments

* (*string*) The text to set in the footer.

### Returns


ART.Window Method: getSize {#ART.Window:getSize}
----------------------------------------

Gets the size of the window.

### Syntax

myWindow.getSize();

### Returns

* (*object*) The width and height of the window.


Class: ART.WindowTools {#ART.WindowTools}
=============================

A utility class that is intended to be implemented into widgets that go inside a ART.Window element.


### Syntax


### Methods

ART.Window Method: getWindow {#ART.Window:getWindow}
----------------------------------------



### Syntax

### Arguments



### Returns

this.getWindowElement().retrieve('art-window')


ART.Window Method: getWindowElement {#ART.Window:getWindowElement}
----------------------------------------



### Syntax

### Arguments



### Returns

$(this).hasClass('art-window') ? $(this) : $(this).getParent('.art-window')



