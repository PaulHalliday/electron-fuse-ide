export default var MainMenu = {
  // when you click on a composite view
  compositeView: {
    view: view, // also acts as a view
    addView: addView // add a new view as a kid (opens up sub view of allowed types of kids)
    removeView: removeView // as a kid
    layout: layout // to change the layout manager for managing the kid views
  },
  // when you click on a single leaf view
  view: {
    background: background,
    alignment: alignment,
    stroke: stroke,
    // ...
  }
}
