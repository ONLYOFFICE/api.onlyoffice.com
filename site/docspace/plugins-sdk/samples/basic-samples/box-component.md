# IBox Component

This guide demonstrates how to configure and use the [IBox](../../usage-sdk/coding-plugin/plugin-components/box) component in the DocSpace Plugin SDK with nearly all supported layout and style properties.

## Overview

- Component: [Components.box](../../usage-sdk/coding-plugin/plugin-components/box)
- Interface: `IBox`
- Purpose: Acts as a container for structuring layout using margin, padding, flex, grid, borders, and other layout utilities

## Example Output

- A modal dialog will open with a 400px-wide box
- The box has a border, padding, margin, and multiple flex/grid properties
- Inside the box is a primary “Save” button

<details>
  <summary>Full Example</summary>

``` ts
import {
  IPlugin,
  PluginStatus,
  IMainButtonPlugin,
  IMainButtonItem
} from '@onlyoffice/docspace-plugin-sdk'

import {
  ButtonGroup,
  IBox,
  Components,
  IModalDialog,
  ModalDisplayType,
  IMessage,
  Actions,
  ButtonSize,
  IButton
} from '@onlyoffice/docspace-plugin-sdk';

class Boxplugin implements IPlugin, IMainButtonPlugin {
  status: PluginStatus = PluginStatus.active;          
  mainButtonItems: Map<string, IMainButtonItem> = new Map();

  onLoadCallback = async () => {};
           
  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };
          
  getStatus = () => {
    return this.status;
  };
          
  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  addMainButtonItem = (item: IMainButtonItem ): void => {
    this.mainButtonItems.set(item.key, item);
  };
        
  getMainButtonItems = (): Map<string, IMainButtonItem > => {
    return this.mainButtonItems;
  };
        
  updateMainButtonItem = (item: IMainButtonItem): void => {
    this.mainButtonItems.set(item.key, item);
  };
}

const plugin = new Boxplugin();

const ButtonProps: IButton = {
  onClick: ()=>{
    console.log("Button clicked!")
  },
  size: ButtonSize.normal,
  label: "Save",
  scale: false,
  primary: true
};

const ButtonComponent: ButtonGroup = {
  component: Components.button,
  props: ButtonProps,
  contextName: "acceptButton",
};

const demoBox: IBox = {
  // Width of the box element (e.g., "100px", "auto", "100%")
  widthProp: "400px",

  // Height of the box element (e.g., "50px", "auto")
  heightProp: "auto",

  // Inner padding on all four sides (shorthand for top/right/bottom/left)
  paddingProp: "16px",

  // Outer margin on all four sides (shorthand for top/right/bottom/left)
  marginProp: "24px auto",

  // Determines how the box is displayed: block, inline, flex, grid, etc.
  displayProp: "flex",

  // Direction of the main axis in a flex container
  flexDirection: "column",

  // Aligns children along the cross axis in a flex container
  alignItems: "flex-start",

  // Distributes multiple lines of content along the cross axis
  alignContent: "flex-start",

  // Overrides alignItems for the current element in the parent container
  alignSelf: "center",

  // Initial size of the item before growing or shrinking in flexbox
  flexBasis: "auto",

  // Shorthand for flex-grow, flex-shrink, and flex-basis
  flexProp: "0 1 auto",

  // Determines whether flex items wrap and the direction of wrapping
  flexWrap: "nowrap",

  // Places the item in a specific grid area
  gridArea: "auto",

  // Controls distribution of items along the main axis
  justifyContent: "flex-start",

  // Sets the default justify-self for all children
  justifyItems: "stretch",

  // Aligns the box within its alignment container
  justifySelf: "auto",

  // Controls overflow behavior when content is too large
  overflowProp: "visible",

  // Horizontal alignment of inline content (e.g., text)
  textAlign: "left",

  // Border settings, including color, radius, style, and width
  borderProp: {
    color: "#ccc",
    radius: "6px",
    style: "solid",
    width: "1px"
  },

  // Child components inside the box
  children: [ButtonComponent]
};

export const modalDialogProps: IModalDialog = {
  dialogHeader: "Sample modal dialog",
  dialogBody: demoBox,
  displayType: ModalDisplayType.modal,
  onClose: () => {
    const message: IMessage = {
      actions: [Actions.closeModal],
    }
    return message
  },

  onLoad: async () => {
    return {
      newDialogHeader: modalDialogProps.dialogHeader,
      newDialogBody: modalDialogProps.dialogBody,
    }
  },
  autoMaxHeight: true,
  autoMaxWidth: true,
}

// Create the main button with modal on click
const createItem: IMainButtonItem = {
  key: "test-main-button",
  label: "Show dialog",
  icon: "icon.svg",
  onClick: () => {}
}

const mainButtonItem: IMainButtonItem = {
  key: "test-main-button",
  label: "Show dialog",
  icon: "icon.svg",
  items: [createItem],
  onClick: () => {
    const message: IMessage = {
        actions: [Actions.showModal],
        modalDialogProps: modalDialogProps,
      };
      return message;
  }
}

// Add the main button to the plugin
plugin.addMainButtonItem(mainButtonItem);

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Toggleplugin = plugin || {};

export default plugin;
```

</details>

## Property Reference

| **Property**     | **Type**        | **Description**                                                     |
| ---------------- | --------------- | ------------------------------------------------------------------- |
|  widthProp       |  string         | Sets the box width (e.g., `"100%"`,`"400px"` )                      |
|  heightProp      |  string         | Sets the box height                                                 |
|  paddingProp     |  string         | Inner spacing on all sides                                          |
|  marginProp      |  string         | Outer spacing around the box                                        |
|  displayProp     |  string         | Layout behavior (typically `"flex"` or `"grid"`)                    |
|  flexDirection   |  string         | Direction of flex items (`"row"`, `"column"`)                       |
|  alignItems      |  string         | Cross-axis alignment of children (`"flex-start"`, `"center"`, etc.) |
|  alignContent    |  string         | Aligns content lines inside multi-line flex container               |
|  alignSelf       |  string         | Self-alignment of this box in its parent container                  |
|  flexBasis       |  string         | Base size in flex context (`"auto"`, `"0%"` , etc.)                 |
|  flexProp        |  string         | Shorthand for `flex-grow shrink basis`                              |
|  flexWrap        |  string         | Wrap behavior for children (`"wrap"`, `"nowrap"`)                   |
|  gridArea        |  string         | Grid template area assignment                                       |
|  justifyContent  |  string         | Main-axis distribution of children                                  |
|  justifyItems    |  string         | Default self-alignment for children                                 |
|  justifySelf     |  string         | Alignment of this box inside a grid/flex parent                     |
|  overflowProp    |  string         | Controls overflow visibility                                        |
|  textAlign       |  string         | Aligns inline content (e.g., `"left"`, `"center"`)                  |
|  borderProp      |  object         | Includes `color`, `width`, `radius`, `style` for border styling     |
|  children        |  Component[]    | Nested elements rendered inside this box                            |

