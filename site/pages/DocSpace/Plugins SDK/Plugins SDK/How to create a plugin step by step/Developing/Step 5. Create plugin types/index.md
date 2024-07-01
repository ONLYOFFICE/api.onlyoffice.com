Now that the default plugin is ready, you can start coding other plugin types.

Each plugin type has specific plugin items. Define the [context menu item](/docspace/pluginssdk/codingplugin/pluginitems/contextmenuitem) that will be displayed when you right-click on audio or video files:

```
export const contextMenuItem: IContextMenuItem = {
    key: "speech-to-text-context-menu-item",
    label: "Convert to text",
    icon: "speech-to-text-16.png",
    onClick: assemblyAI.speechToText,
    fileType: [FilesType.video],
    withActiveItem: true,
};
```

![Context menu item](/content/img/docspace/context-menu-item.png)

You can add more plugin types. For example, the **draw\.io** plugin can be accessed from the main button menu, so we need to specify the [main button item](/docspace/pluginssdk/codingplugin/pluginitems/mainbuttonitem):

```
const mainButtonItem: IMainButtonItem = {
    key: "draw-io-main-button-item",
    label: "Draw.io",
    icon: "drawio.png",
    onClick: (id: number) => {
        drawIo.setCurrentFolderId(id);

        const message: IMessage = {
            actions: [Actions.showCreateDialogModal],
            createDialogProps: {
                title: "Create diagram",
                startValue: "New diagram",
                visible: true,
                isCreateDialog: true,
                extension: ".drawio",
                onSave: async (e: any, value: string) => {
                    await drawIo.createNewFile(value);
                },
                onCancel: (e: any) => {
                    drawIo.setCurrentFolderId(null);
                },
                onClose: (e: any) => {
                    drawIo.setCurrentFolderId(null);
                },
            },
        };

        return message;
    },
    // items: [createItem],
};
```

When the main button item is clicked, the modal window appears where you can type the diagram's name and open an empty *.drawio* file.

![Create diagram](/content/img/docspace/create-diagram.png)

For the **draw\.io** plugin, you also need to configure the file plugin type which works when the user opens the specific *.drawio* file:

1. Define the [file item](/docspace/pluginssdk/codingplugin/pluginitems/fileitem) that is represented as a file with the specific extension (*.drawio*) and icon:

   ```
   export const drawIoItem: IFileItem = {
       extension: ".drawio",
       fileTypeName: "Diagram",
       fileRowIcon: "drawio-32.svg",
       fileTileIcon: "drawio-32.svg",
       devices: [Devices.desktop],
       onClick,
   };
   ```

2. Define the *onClick* event which will execute the *editDiagram* method each time the *.drawio* file is opened:

   ```
   const onClick = async (item: File) => {
       return await drawIo.editDiagram(item.id);
   };
   ```

   ![Drawio file](/content/img/docspace/drawio-file.png)
