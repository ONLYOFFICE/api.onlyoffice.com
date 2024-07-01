**Connector** is a class that allows editing text documents, spreadsheets, presentations, and fillable forms from an external source. The examples of using Automation API can be found [here](/editors/interactingoutside).

To create the connector, use the [createConnector](/editors/methods#createConnector) method of the **document editor** object:

```
var connector = docEditor.createConnector()
```

Please note that the connector is available only for **ONLYOFFICE Developer Edition**.

This class is an additional feature which is available at extra cost. If you have any questions, please contact our sales team at <sales@onlyoffice.com>.

The connector has the same interface as plugins. Below you can find methods that are available for this class.

* [addContextMenuItem](#addContextMenuItem) - add an item to the context menu.
* [addToolbarMenuItem](#addToolbarMenuItem) - add an item to the toolbar menu.
* [attachEvent](#attachEvent) - add an event listener.
* [callCommand](#callCommand) - send the data back to the editor.
* [connect](#connect) - connect the connector to the editor.
* [detachEvent](#detachEvent) - remove an event listener.
* [disconnect](#disconnect) - disconnect the connector from the editor.
* [executeMethod](#executeMethod) - execute certain editor methods using the connector.
* [updateContextMenuItem](#updateContextMenuItem) - update an item in the context menu with the specified items.

## Methods and their description:

* **addContextMenuItem** - the function called to add an item to the context menu.

  Parameters

  | Name  | Description                                           | Type                                         |
  | ----- | ----------------------------------------------------- | -------------------------------------------- |
  | items | An array containing the context menu item parameters. | array of [ContextMenuItem](#ContextMenuItem) |

  ContextMenuItem

  | Name     | Description                                                                    | Type                     |
  | -------- | ------------------------------------------------------------------------------ | ------------------------ |
  | id       | The item ID.                                                                   | string                   |
  | text     | The item text.                                                                 | string                   |
  | data     | The item data (this data will be sent to the click event callback).            | string                   |
  | disabled | Specifies if the current item is disabled or not.                              | boolean                  |
  | icons    | The item icons (see the plugins [config](/plugin/config#icons) documentation). | string                   |
  | items    | An array containing the context menu items for the current item.               | array of ContextMenuItem |

  Example

  ```
  var items: [
      {
          "id": "onConvert",
          "text": getMessage("Convert to Markdown or HTML")
      }
  ]

  connector.addContextMenuItem(items);
  ```

* **addToolbarMenuItem** - the function called to add an item to the toolbar menu.

  Parameters

  | Name  | Description                            | Type                                        |
  | ----- | -------------------------------------- | ------------------------------------------- |
  | items | The toolbar main menu item parameters. | [ToolbarMenuMainItem](#ToolbarMenuMainItem) |

  ToolbarMenuMainItem

  | Name | Description                                                     | Type                                       |
  | ---- | --------------------------------------------------------------- | ------------------------------------------ |
  | guid | The plugin guid.                                                | string                                     |
  | tabs | An array containing the toolbar menu tabs for the current item. | array of [ToolbarMenuTab](#ToolbarMenuTab) |

  ToolbarMenuTab

  | Name  | Description                                                     | Type                                         |
  | ----- | --------------------------------------------------------------- | -------------------------------------------- |
  | id    | The tab ID.                                                     | string                                       |
  | text  | The tab text.                                                   | string                                       |
  | items | An array containing the toolbar menu items for the current tab. | array of [ToolbarMenuItem](#ToolbarMenuItem) |

  ToolbarMenuItem

  | Name           | Description                                                                                                            | Type                                                      |
  | -------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
  | id             | The item ID.                                                                                                           | string                                                    |
  | type           | The possible values of the base which the relative vertical position of the toolbar menu item will be calculated from. | [ToolbarMenuItemType](/plugin/global#ToolbarMenuItemType) |
  | text           | The item text.                                                                                                         | string                                                    |
  | hint           | The item hint.                                                                                                         | string                                                    |
  | icons          | The item icons (see the plugins [config](/plugin/config#icons) documentation).                                         | string                                                    |
  | disabled       | Specifies if the current item is disabled or not.                                                                      | boolean                                                   |
  | enableToggle   | Specifies if an item toggle is enabled or not.                                                                         | boolean                                                   |
  | lockInViewMode | Specifies if the current item is locked in the view mode or not.                                                       | boolean                                                   |
  | separator      | Specifies if a separator is used between the toolbar menu items or not.                                                | boolean                                                   |
  | split          | Specifies if the toolbar menu items are split or not.                                                                  | boolean                                                   |
  | onClick        | The click event callback.                                                                                              | function                                                  |
  | items          | An array containing the [context menu items](#ContextMenuItem) for the current item.                                   | array of ContextMenuItem                                  |

  Example

  ```
  var oToolbarMenuItem = {
      "id": "MeaningItem",
      "type": "button",
      "text": "Meaning",
      "hint": "Meaning",
      "icons": "resources/light/icon.png",
      "disabled": false,
      "enableToggle": false,
      "lockInViewMode": false,
      "separator": true,
      "split": true,
      "onClick": onClick,
      "items": [
          {
              "id": "onMeaningT",
              "text": "Explain text in comment"
          },
          {
              "id": "onFixSpelling",
              "text": "Fix spelling & grammar"
          },
          {
              "id": "onMakeLonger",
              "text": "Make longer"
          },
          {
              "id": "onMakeShorter",
              "text": "Make shorter"
          }
      ]
  };
  var oToolbarMenuTab = {
      "id": "ChatGPT",
      "text": "AI Assistant",
      "items": [oToolbarMenuItem]
  };
  var oToolbarMenuMainItem = {
      "guid": "asc.{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}",
      "tabs": [oToolbarMenuTab]
  };

  connector.addToolbarMenuItem(oToolbarMenuMainItem);
  ```

* **attachEvent** - the function called to add an event listener, a function that will be called whenever the specified event is delivered to the target. The list of all the available events is the same as for the plugins. It can be found [here](/plugin/events).

  Parameters

  | Name     | Description         | Type     |
  | -------- | ------------------- | -------- |
  | name     | The event name.     | string   |
  | callback | The event listener. | function |

  Example

  ```
  connector.attachEvent("onChangeContentControl", function()
  {
      console.log("event: onChangeContentControl");
  });
  ```

* **callCommand** - the function called to send the data back to the editor. It allows the connector to send structured data that can be inserted into the resulting document file (formatted paragraphs, tables, text parts, and separate words, etc.).

  **ONLYOFFICE Document Builder** commands can be only used to create content and insert it into the document editor (using the *Api.GetDocument().InsertContent(...))*. This limitation exists due to the co-editing feature in the online editors.

  Parameters

  | Name     | Description                                                                                                                                                                                                                                                                                                                                   | Type     |
  | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
  | command  | Defines the command written in JavaScript which purpose is to form structured data which can be inserted into the resulting document file (formatted paragraphs, tables, text parts, and separate words, etc.). Then the data is sent to the editors. The command must be compatible with [Office JavaScript API](/officeapi/basic) syntax.   | function |
  | callback | The result that the method returns. It is an optional parameter.                                                                                                                                                                                                                                                                              | function |
  | isNoCalc | Defines whether the document will be recalculated or not. The **true** value is used to recalculate the document after executing the function in the *command* parameter. The **false** value will not recalculate the document (use it only when your edits surely will not require document recalculation). The default value is **false**. | boolean  |

  This method is executed in its context isolated from other JavaScript data. If some parameters or other data need to be passed to this method, use [Asc.scope](/plugin/scope) object.

  Example

  ```
  Asc.scope.text = "Hello world!"; 

  connector.callCommand(function() {

      var oDocument = Api.GetDocument();
      var oParagraph = Api.CreateParagraph();
      oParagraph.AddText(Asc.scope.text);
      oDocument.InsertContent([oParagraph]);

  }, function() { console.log("callback command"); });
  ```

* **connect** - the function called to connect the connector to the editor.

  Please note that this method should only be called if you have disconnected the connector with the [disconnect](#disconnect) method and need to connect it to the editor again. When creating a connector, you do not need to use the *connect* method, as it is called automatically along with the [createConnector](/editors/methods#createConnector) method.

  Example

  ```
  connector.connect()
  ```

* **detachEvent** - the function called to remove an event listener.

  Parameters

  | Name | Description     | Type   |
  | ---- | --------------- | ------ |
  | name | The event name. | string |

  Example

  ```
  connector.detachEvent("onChangeContentControl");
  ```

* **disconnect** - the function called to disconnect the connector from the editor.

  Example

  ```
  connector.disconnect()
  ```

* **executeMethod** - the function called to execute certain editor methods using the connector. The full list of these methods is the same as for the plugins. It can be found [here](/plugin/executemethod/).

  Parameters

  | Name     | Description                                                      | Type     |
  | -------- | ---------------------------------------------------------------- | -------- |
  | name     | The name of the specific method that must be executed.           | string   |
  | args     | The arguments that the method in use has (if it has any).        | array    |
  | callback | The result that the method returns. It is an optional parameter. | function |

  Example

  ```
  connector.executeMethod("SetFormValue",[forms[i]["InternalId"],"OnlyOffice BANK"],null);
  ```

* **updateContextMenuItem** - the function called to update an item in the context menu with the specified items.

  Parameters

  | Name  | Description                                           | Type                                                 |
  | ----- | ----------------------------------------------------- | ---------------------------------------------------- |
  | items | An array containing the context menu item parameters. | array of [ContextMenuItem](#toolbar-ContextMenuItem) |

  ContextMenuItem

  | Name     | Description                                                                    | Type                     |
  | -------- | ------------------------------------------------------------------------------ | ------------------------ |
  | id       | The item ID.                                                                   | string                   |
  | text     | The item text.                                                                 | string                   |
  | data     | The item data (this data will be sent to the click event callback).            | string                   |
  | disabled | Specifies if the current item is disabled or not.                              | boolean                  |
  | icons    | The item icons (see the plugins [config](/plugin/config#icons) documentation). | string                   |
  | items    | An array containing the context menu items for the current item.               | array of ContextMenuItem |

  Example

  ```
  var items: [
      {
          "id": "onConvert",
          "text": getMessage("Convert to Markdown or HTML")
      }
  ]

  connector.updateContextMenuItem(items);
  ```
