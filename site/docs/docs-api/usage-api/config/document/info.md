# Info

The document info section allows to change additional parameters for the document (document owner, folder where the document is stored, uploading date, sharing settings).

## author

`Type: string`

Defines the name of the document author/creator.

:::danger[Deprecated]
Starting from version 5.4, please use [owner](#owner) instead.
:::

**Example**: `"John Smith"`

## created

`Type: string`

Defines the document creation date.

:::danger[Deprecated]
Starting from version 5.4, please use [uploaded](#uploaded) instead.
:::

**Example**: `"2010-07-07 3:46 PM"`

## favorite

`Type: boolean`

Defines the highlighting state of the *Favorite* icon. When the user clicks the icon, the [onMetaChange](../events.md#onmetachange) event is called. If the parameter is *undefined* or *null*, the *Favorite* icon is not displayed at the editor window header.

**Example**: `true`

![Favorite](/assets/images/editor/favorite.png)

## folder

`Type: string`

Defines the folder where the document is stored (can be empty in case the document is stored in the root folder).

**Example**: `"Example Files"`

## owner

`Type: string`

Defines the name of the document owner/creator.

**Example**: `"John Smith"`

## sharingSettings

`Type: array of object`

Displays the information about the settings which allow to share the document with other users.

**Example**:

``` ts
[
  {
    permissions: "Full Access",
    user: "John Smith",
  },
]
```

### sharingSettings.isLink

`Type: boolean`

Changes the user icon to the link icon.

**Example**: `false`

### sharingSettings.permissions

`Type: string`

The access rights for the user with the name above. Can be **Full Access**, **Read Only** or **Deny Access**.

**Example**: `"Full Access"`

### sharingSettings.user

`Type: string`

The name of the user the document will be shared with.

**Example**: `"John Smith"`

![Sharing settings](/assets/images/editor/sharing_settings.png) 

## uploaded

`Type: string`

Defines the document uploading date.

**Example**: `"2010-07-07 3:46 PM"`

![Document information](/assets/images/editor/info.png)

## Example

``` ts
const config = {
  document: {
    info: {
      favorite: false,
      folder: "Example Files",
      owner: "John Smith",
      sharingSettings: [
        {
          permissions: "Full Access",
          user: "John Smith",
        },
      ],
      uploaded: "2010-07-07 3:46 PM",
    }
    ,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
