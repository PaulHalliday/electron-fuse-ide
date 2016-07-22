import alignment from './alignment';

// each control has general settings and some particulars to that control
// The menus point to menus which are collected into a single menu at that level
export default var ControlsMenu =  {
  // default panel
  composite: {
    label: 'Composite',
    class: CompositeMenu,
  },
  button: {
    label: 'Button',
    menus: {
      settings: settings,
      label: label
    }
  },
  slider: {
    label: 'Slider',
    menus: {
      settings: settings,
      slider: slider
    }
  },
  switch: {
    label: 'Slider',
    menus: {
      settings: settings,
      switch: switch
    }
  },
  mapView: {
    label: 'Slider',
    menus: {
      settings: settings,
      mapView: mapView
    }
  },
  webView: {
    label: 'Slider',
    menus: {
      settings: settings,
      webView: webView
    }
  },
  textInput: {
    label: 'Text input',
    menus: {
      settings: settings,
      textInput: textInput
    }
  },
  textArea: {
    label: 'MultiText',
    menus: {
      settings: settings,
      textInput: textInput,
      textArea: textArea
    }
  }
};
