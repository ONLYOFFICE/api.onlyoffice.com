# MediaViewer

A component for displaying custom content inside the DocSpace media viewer.

**Interface**: IMediaViewer.

To control the media viewer, use the following actions in the [IMessage](../plugin-message.md) response:

- **Actions.showMediaViewer** - opens the media viewer with `mediaViewerProps`.
- **Actions.updateMediaViewer** - updates the currently open media viewer with `mediaViewerProps`.
- **Actions.closeMediaViewer** - closes the media viewer.

## Parameters

### fileId

The id of the file to display initially. If not specified, the first file in the playlist is used.

Type: number | string

Example: `42`

### content

The custom UI content rendered inside the media viewer. Must be an [IBox](./box.md) component.

Type: [IBox](./box.md)

Example: `contentBox`

### title

The title displayed in the media viewer header. If not specified, the default file name is used.

Type: string

Example: `"My Viewer"`

### onClose

A function called when the user closes the media viewer (close button, background click, or Esc key).

Type: func

Example: `() => {}`

### playlistFilter

Filter configuration that defines which files appear in the playlist. See [PlaylistFilter parameters](#playlistfilter-parameters).

Type: IMediaViewerPlaylistFilter

Example: `{filesExsts: [FilesExst.jpg, FilesExst.png]}`

### navigation

Navigation callbacks called when the user moves through the playlist. See [Navigation parameters](#navigation-parameters).

Type: IMediaViewerNavigation

Example: `{onNext: () => {}, onPrevious: () => {}}`

### onLoad

A function called once when the media viewer is first mounted. Receives an object with the current `fileId`.

Type: func

Example: `(data) => {}`

## PlaylistFilter parameters

### filesExsts

The file extensions to include in the playlist. If not specified, all extensions are included.

Type: [FilesExst](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts)[] / string

Example: `[FilesExst.jpg, FilesExst.png, ".svg"]`

### filesSecurity

The required security permissions for files in the playlist. If not specified, all permissions are allowed.

Type: [FilesSecurity](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts)[]

Example: `[FilesSecurity.Read]`

### usersTypes

The types of users who will see the media viewer. If not specified, it is displayed for all user types.

Type: [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts)[]

Example: `[UsersType.owner, UsersType.roomAdmin]`

### devices

The device types where the media viewer will be displayed. If not specified, it is displayed on all device types.

Type: [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)[]

Example: `[Devices.desktop, Devices.tablet]`

## Navigation parameters

### onNext

A function called when the user navigates to the next file in the playlist.

Type: func

Example: `() => {}`

### onPrevious

A function called when the user navigates to the previous file in the playlist.

Type: func

Example: `() => {}`

### onFileChange

A function called when the current file changes. Receives an object with the new `fileId`.

Type: func

Example: `(data) => {}`

## Example

``` ts
import {Actions, Components, type IBox, type IFrame, type IMediaViewer, type IMessage} from "@onlyoffice/docspace-plugin-sdk"

const frameProps: IFrame = {
  width: "100%",
  height: "100%",
  name: "viewer-frame",
  src: "",
}

const contentBox: IBox = {
  widthProp: "100%",
  heightProp: "100%",
  children: [
    {
      component: Components.iFrame,
      props: frameProps,
    },
  ],
}

export const mediaViewerProps: IMediaViewer = {
  title: "My Viewer",
  content: contentBox,
  onClose: () => {
    const message: IMessage = {
      actions: [Actions.closeMediaViewer],
    }
    return message
  },
  onLoad: (data) => {
    frameProps.src = `https://viewer.example.com/file/${data.fileId}`
    const message: IMessage = {
      actions: [Actions.updateMediaViewer],
      mediaViewerProps,
    }
    return message
  },
  playlistFilter: {
    devices: [Devices.desktop],
  },
}

// Open the media viewer
const openMessage: IMessage = {
  actions: [Actions.showMediaViewer],
  mediaViewerProps,
}
```
