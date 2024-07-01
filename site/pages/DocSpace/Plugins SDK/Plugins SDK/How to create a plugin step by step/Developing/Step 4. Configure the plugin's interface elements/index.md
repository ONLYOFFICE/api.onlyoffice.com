If necessary, define the plugin's UI elements. Consult our [Storybook](/docspace-storybook) to develop your plugin's UI.

For example, the **draw\.io** plugin contains two main UI elements - the modal window and the diagram editor. Create the files for configuring each element. For your convenience, you can put these files into a separate *DrawIO* folder.

* In the [Dialog.ts](https://github.com/ONLYOFFICE/docspace-plugins/blob/master/draw-io/src/DrawIO/Dialog.ts) file, configure the modal window settings. Specify the [IFrame](/docspace/pluginssdk/codingplugin/plugincomponents/iframe) UI component that is used to embed the draw\.io website into a modal window:

  ```
  export const frameProps: IFrame = {
      width: "100%",
      height: "100%",
      name: "test-drawio",
      src: "",
  };
  ```

  Create the [IBox](/docspace/pluginssdk/codingplugin/plugincomponents/box) container to add the iframe to it:

  ```
  const body:
  IBox = {
      widthProp: "100%",
      heightProp: "100%",

      children: [
          {
              component: Components.iFrame,
              props: frameProps,
          },
      ],
  };
  ```

  Configure the [modal window](/docspace/pluginssdk/codingplugin/plugincomponents/modaldialog) properties:

  ```
  export const drawIoModalDialogProps: IModalDialog = {
      dialogHeader: "",
      dialogBody: body,
      displayType: ModalDisplayType.modal,
      fullScreen: true,
      onClose: () => {
          const message: IMessage = {
              actions: [Actions.closeModal],
          };

          return message;
      },
      onLoad: async () => {
          return {
              newDialogHeader: drawIoModalDialogProps.dialogHeader || "",
              newDialogBody: drawIoModalDialogProps.dialogBody,
          };
      },
      autoMaxHeight: true,
      autoMaxWidth: true,
  };
  ```

* In the [Editor.ts](https://github.com/ONLYOFFICE/docspace-plugins/blob/master/draw-io/src/DrawIO/Editor.ts) file, configure the diagram editor. Create the *DiagramEditor* function with the following parameters:

  | Parameter      | Description                                                       | Type    | Example                       |
  | -------------- | ----------------------------------------------------------------- | ------- | ----------------------------- |
  | ui             | Defines the editor's ui theme.                                    | string  | "default"                     |
  | dark           | Defines the editor's dark theme.                                  | string  | "auto"                        |
  | off            | Specifies if the offline mode is active or not.                   | boolean | false                         |
  | lib            | Specifies if the libraries are enabled or not.                    | boolean | false                         |
  | lang           | Defines the editor's language.                                    | string  | "auto"                        |
  | url            | Defines the URL to the editor.                                    | string  | "https\://embed.diagrams.net" |
  | showSaveButton | Specifies if the **Save** button will be displayed in the editor. | boolean | true                          |

  Then specify methods to work with diagrams:

  | Method           | Description                             |
  | ---------------- | --------------------------------------- |
  | startEditing     | Starts the editor with the given data.  |
  | getData          | Returns the diagram's data.             |
  | getTitle         | Returns the diagram's title.            |
  | getFormat        | Returns the diagram's format.           |
  | getFrameId       | Returns the editor's frame ID.          |
  | getFrameUrl      | Returns the URL to the iframe.          |
  | handleMessage    | Handles the given message.              |
  | initializeEditor | Posts the *load* message to the editor. |
  | save             | Saves the given data.                   |

  The full code for the *DiagramEditor* can be found [here](https://github.com/ONLYOFFICE/docspace-plugins/blob/master/draw-io/src/DrawIO/Editor.ts).
