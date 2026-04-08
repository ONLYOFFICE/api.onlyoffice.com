---
sidebar_position: 0
hide_table_of_contents: true
description: Add and inspect content controls from an external UI via the Automation API.
---

import { ContentControlsExternalToolbar } from '@site/src/components/BrowserWindow';

# Working with content controls

Use the Automation API to add different types of content controls and inspect their properties from an external UI.

:::info
Click a content control type badge to insert it into the document. Use the **List** button to toggle the list of all content controls. Click any content control in the editor to view its properties and JSON representation in the panel.
:::

<ContentControlsExternalToolbar/>

## How it works

1. When the user opens a document, the [GetAllContentControls](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetAllContentControls.md) method is executed to get the total count of content controls:

    ``` ts
    connector.executeMethod("GetAllContentControls", null, (data) => {
      allControls = data;
    });
    ```

2. When the user clicks a type badge, the corresponding method is called depending on the type:

    - [AddContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControl.md) — for plain text (block or inline)
    - [AddContentControlDatePicker](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControlDatePicker.md) — for date pickers
    - [AddContentControlPicture](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControlPicture.md) — for pictures
    - [AddContentControlList](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControlList.md) — for combobox or dropdown list
    - [AddContentControlCheckBox](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControlCheckBox.md) — for checkboxes

    ``` ts
    // Example: adding a block content control
    connector.executeMethod("AddContentControl", [1, { Lock: 0 }]);

    // Example: adding a checkbox
    connector.executeMethod("AddContentControlCheckBox", [
      { Checked: false },
      { Lock: 0 },
    ]);
    ```

3. When a content control receives focus, the [onFocusContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onFocusContentControl.md) event fires and the [GetCurrentContentControlPr](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetCurrentContentControlPr.md) method retrieves its properties (Id, Tag, Lock, Appearance, Color). When it loses focus, the [onBlurContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onBlurContentControl.md) event hides the panel:

    ``` ts
    connector.attachEvent("onFocusContentControl", (control) => {
      selectedId = control["InternalId"];
      connector.executeMethod("GetCurrentContentControlPr", ["none"], (props) => {
        // Display properties and JSON
      });
    });

    connector.attachEvent("onBlurContentControl", () => {
      selectedId = null;
      // Hide details panel
    });

    connector.attachEvent("onChangeContentControl", () => {
      // Refresh the list and properties
    });
    ```

4. When the user edits Tag, Lock, Appearance, or Color and clicks **Apply changes**, the properties are updated via `connector.callCommand` using the Document Builder API:

    ``` ts
    Asc.scope.ccProps = { internalId, tag, lock, appearance, r, g, b };
    connector.callCommand(() => {
      const p = Asc.scope.ccProps;
      const doc = Api.GetDocument();
      const controls = doc.GetAllContentControls();
      for (let i = 0; i < controls.length; i++) {
        const cc = controls[i];
        if (cc.GetInternalId() === p.internalId) {
          cc.SetTag(p.tag);
          cc.SetLock(p.lock);
          cc.SetAppearance(p.appearance);
          const color = Api.RGBA(p.r, p.g, p.b, 255);
          cc.SetBackgroundColor(color);
          cc.SetBorderColor(color);
          break;
        }
      }
    });
    ```

5. When the user clicks **Remove**, the [RemoveContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/RemoveContentControl.md) method removes the currently selected content control:

    ``` ts
    connector.executeMethod("RemoveContentControl", [selectedId]);
    ```

:::note
Please note that the connector is available only for **ONLYOFFICE Docs Developer**.

The connector is an additional feature not included by default in the ONLYOFFICE Docs Developer and is available at an extra cost. Please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
:::
