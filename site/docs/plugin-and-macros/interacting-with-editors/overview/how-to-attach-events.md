---
sidebar_position: -1
---

# How to attach events

There are two options to attach events from the editor.

## Option 1. Using the attachEditorEvent method

Starting from version 8.2, in the plugin code, define the **attachEditorEvent** method to add an event listener, a function that will be called whenever the specified event is delivered to the target.

### Parameters:

| Name     | Type     | Description         |
| -------- | -------- | ------------------- |
| *id*     | string   | The event name.     |
| *action* | function | The event listener. |

### Returns:

This method doesn't return any data.

### Example:

``` ts
Asc.plugin.attachEditorEvent("onAddComment", (data) => {
  console.log(data);
});
```

## Option 2. Using the attachEvent method

:::danger[Deprecated]
Starting from version 8.2, please use the [attachEditorEvent](#option-1-using-the-attacheditorevent-method) method instead.
:::

1. In the *config.json* file, add the [events](../../structure/manifest/manifest.md#variationsevents) parameter with the array of all the available events:

   ``` json
   {
     "events": ["onAddComment"]
   }
   ```

2. In the plugin code, define the **attachEvent** method to add an event listener, a function that will be called whenever the specified event is delivered to the target:

   ``` ts
   Asc.plugin.attachEvent(id, action);
   ```

   ### Parameters:

   | Name     | Type     | Description         |
   | -------- | -------- | ------------------- |
   | *id*     | string   | The event name.     |
   | *action* | function | The event listener. |

   ### Returns:

   This method doesn't return any data.

   ### Example:

   ``` ts
   Asc.plugin.attachEvent("onAddComment", (data) => {
     console.log(data);
   });
   ```

   You can also use the **event_\{event-name\}** method, where *event_* is a prefix used for each event method, and *\{event-name\}* is a name of any event. For example:

   ``` ts
   Asc.plugin.event_onAddComment = (data) => {
     console.log(data);
   };
   ```

   Such methods work the same way as the *attachEvent* method.
