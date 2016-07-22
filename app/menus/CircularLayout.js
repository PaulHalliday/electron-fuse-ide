// Click on Canvas x,y or current item (shape)
// Display circular menu of available main actions in center
// Choose one item, animates to center
// Display 2nd menu centered around first selection
// Repeat for multi-layered menus...



// For positioning menu items - radius is how far from center
// width/2 is origin (ie. center of canvas)

   for (i=0; i<numNodes; i++) {
    angle = (i / (numNodes/2)) * Math.PI; // Calculate the angle at which the element will be placed.
                                          // For a semicircle, we would use (i / numNodes) * Math.PI.
    x = (radius * Math.cos(angle)) + (width/2); // Calculate the x position of the element.
    y = (radius * Math.sin(angle)) + (width/2); // Calculate the y position of the element.
    nodes.push({'id': i, 'x': x, 'y': y});
   }
   return nodes;