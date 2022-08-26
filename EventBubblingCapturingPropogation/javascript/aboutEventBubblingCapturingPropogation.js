/*

What is Event Bubbling ?
The procedure of event propagation from the closest element to the farthest element.

What means propagation ?
Propagation means bubbling up to parent elements or capturing down to child elements.

What is stopPropagation function ?
The stopPropagation() method prevents propagation of the same event from being called.
Propagation means bubbling up to parent elements or capturing down to child elements.

What is stopImmediatePropagation function ?
stopImmediatePropagation() method stops the rest of the event handlers from being executed. This method also stops the event from bubbling up the DOM tree.

What is preventDefault function ?
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

What is Event Capturing ?
Event capturing is the event starts from top element to the target element. It is the opposite of Event bubbling, which starts from target element to the top element.

*/