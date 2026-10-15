---
sidebar_position: -3
---

import APITable from '@site/src/components/APITable/APITable';

# How to call methods

To execute editor methods using the plugin, call them on the [Editor](#editor-object) object. In editors before version 10.0, use the [executeMethod](#executemethod) method instead.

## Editor object

Editor methods are called through the global `Editor` object. Each method is called as a function that takes the method arguments directly and returns a Promise with the method result:

```ts
Asc.plugin.init = async () => {
  const text = await Editor.GetSelectedText({ Numbering: false, Math: false });
  await Editor.PasteText(text.toUpperCase());
};
```

The arguments are passed in the same order as in the `params` array of [executeMethod](#executemethod):

```ts
// executeMethod
Asc.plugin.executeMethod("AddComment", [{ Text: "Check this", UserName: "John Smith" }], (id) => {
  console.log(id);
});

// Editor object
const id = await Editor.AddComment({ Text: "Check this", UserName: "John Smith" });
console.log(id);
```

`Editor` also has the [RunMacro](how-to-call-commands.md#editorrunmacro) method, which runs Office JavaScript API code as `callCommand` does.

### Availability

The editor defines `Editor` when it starts the plugin, right before it calls [init](asc-plugin.md#init). Use it in `init` and in the code that runs after it, such as button and event handlers, but not at the top level of the plugin script, where it does not exist yet. No changes to the plugin files are needed: `Editor` comes from the editor, not from the `plugins.js` script that the plugin includes.

If the plugin already defines its own global `Editor`, the editor does not replace it.

### Behavior

- The method name is not checked. A misspelled name, or a method that the current editor does not have, does not throw an error: the Promise resolves with `undefined`.
- The Promise never rejects. Editor methods report failure through their return value, as described on each method page.
- Methods run one at a time, as with `executeMethod`. A call made while another one is in progress waits in a queue, so calls started together, for example, with `Promise.all`, are executed one after another in the order they were made.

### Callback form

If the last argument is a function, it is used as a callback, as in `executeMethod`. In this case, the call does not return a Promise:

```ts
Editor.GetSelectedText({ Numbering: false, Math: false }, (text) => {
  console.log(text);
});
```

## executeMethod

The `executeMethod` method calls an editor method by its name. Use it in editors before version 10.0, where the `Editor` object is not available:

```ts
window.Asc.plugin.executeMethod(name, params, callback);
```

The `callback` is the result that the method returns. It is an optional parameter. In case it is missing, the `window.Asc.plugin.onMethodReturn` function will be used to return the result of the method execution.

### Parameters

<APITable>

| Name     | Type     | Description                                               |
|----------|----------|-----------------------------------------------------------|
| name     | string   | The name of the specific method that must be executed.    |
| params   | array    | The arguments that the method in use has (if it has any). |
| callback | function | The result that the method returns.                       |

</APITable>

### Returns

Type boolean

### Example

```ts
Asc.plugin.executeMethod("methodName", [param1, param2], (returnValue) => {
  console.log(returnValue);
});
```

## Debugging

To log all `executeMethod` and [`callCommand`](how-to-call-commands.md) calls to the browser console, set the `asc_plugin_commands_log` key in the browser's local storage:

```js
localStorage.setItem("asc_plugin_commands_log", "true");
```

To disable logging, remove the key:

```js
localStorage.removeItem("asc_plugin_commands_log");
```

The setting persists across page reloads.
