# template-plugin-professional-services-flexdev
A developer-friendly starting point for creating new Flex plugins

To use this template, run [`create-flex-plugin`](https://github.com/twilio/flex-plugin-builder/tree/master/packages/create-flex-plugin) with the `--template` option like so:
```
create-flex-plugin plugin-sample --template https://github.com/twilio/template-es-flex-plugin --install
```

A new Flex plugin built with this template will include a number of "Mods" to a barebones Flex plugin, with all associated code located in the `Mods` subdirectory. Each Mod can be activated or deactivated individually using the `Mods.applyMods()` function in `Plugin.js` like so:

```javascript
import * as Mods from './Mods'

...

Mods.applyMods(flex, manager, {
  addPhoneNumber: true,
  addWindowLog: true,
  addCustomTaskList: false,
});
```

With this Template, you can build your own plugin using whatever structure you prefer, then removing all boilerplate is as simple as removing the `import` and `applyMods` lines and deleting the `Mods` folder.

Current mods are: 
- addPhoneNumber
  - Looks up your Flex phone number and adds it to the Flex header
    <img src="https://github.com/twilio/template-es-flex-plugin/blob/media/addPhoneNumber.png" width="480">
- addWindowLog
  - Creates a `window.log` function that prints lines with a colored header to make them easier to find
    <img src="https://github.com/twilio/template-es-flex-plugin/blob/media/addWindowLog.png" width="480">
- addCustomTaskList
  - The boilerplate included with the default `create-flex-plugin` template, repackaged as a Mod. It includes an example of using a custom namespaced Flux store with `addReducer` and `combineReducers`
