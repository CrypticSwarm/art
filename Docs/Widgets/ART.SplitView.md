Class: ART.SplitView {#ART.SplitView}
=============================

A two paneled widget with left and right sides that are resizeable.

### Extends
* ART.Widget

### Options
* fixed -- Defaults to *'left'*
* resizable -- Defaults to *true*
* foldable -- Defaults to *true*
* hideSplitterOnFullFold -- Defaults to *false*


### Events

### Methods


ART.SplitView Method: resize {#ART.SplitView:resize}
----------------------------------------

Resize the entire box that the two sides reside in.

### Syntax

mySplitView.resize(100, 100);

### Arguments

1. width - (*number*) The new width of the widget
2. height - (*number*) The new height of the widget

### Returns

* (*object*) This instance of [ART.SplitView][]


ART.SplitView Method: resizeLeft {#ART.SplitView:resizeLeft}
----------------------------------------

Resize the left half to width passed in. (Right side will be take up remaining space.)

### Syntax

mySplitView.resizeLeft(50);

### Arguments

1. width - (*number*) The new width of the left half.

### Returns




ART.SplitView Method: resizeRight {#ART.SplitView:resizeRight}
----------------------------------------

Resize the Right half to width passed in. (Left side will be take up remaining space.)

### Syntax

mySplitView.resizeRight(50);

### Arguments

1. width - (*number*) The new width of the right half.

### Returns






ART.SplitView Method: fold {#ART.SplitView:fold}
----------------------------------------

A smoothly resizes the panels.

### Syntax

mySplitView.fold('left', 1, 

### Arguments

1. side - (*string*) the side to open ('left' or 'right')
2. to - (*number*) the 
3. hideSplitter

### Returns

* (*object*) This instance of [ART.SplitView][]


ART.SplitView Method: setLeftContent {#ART.SplitView:setLeftContent}
----------------------------------------

Sets the content of the left panel to the passed in element.

### Syntax

mySplitView.setLeftContent();

### Arguments

* (*elements*) The elements that should be inserted into the left content

### Returns

* (*object*) This instance of [ART.SplitView][]


ART.SplitView Method: setRightContent {#ART.SplitView:setRightContent}
----------------------------------------

Sets the content of the right panel to the passed in element.

### Syntax

mySplitView.setRightContent();

### Arguments

* (*elements*) The elements that should be inserted into the right content

### Returns

* (*object*) This instance of [ART.SplitView][]



