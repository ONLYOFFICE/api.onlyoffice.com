# Info

The document info section allows you to change additional parameters for the document (document owner, folder where the document is stored, uploading date, sharing settings).

## favorite

**type:** `boolean`

Defines the highlighting state of the *Favorite* icon. When the user clicks the icon, the [onMetaChange](../events.md#onmetachange) event is called. If the parameter is `undefined` or `null`, the *Favorite* icon is not displayed at the editor window header.

**Example**: `true`

![Favorite](/assets/images/editor/favorite.png)

## folder

**type:** `string`

Defines the folder where the document is stored (can be empty in case the document is stored in the root folder).

**Example**: `"Example Files"`

## owner

**type:** `string`

Defines the name of the document owner/creator.

**Example**: `"John Smith"`

## sharingSettings

**type:** `object[]`

Displays the information about the settings which allow sharing the document with other users.

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

**type:** `boolean`

Changes the user icon to the link icon.

**Example**: `false`

### sharingSettings.permissions

**type:** `string`

The access rights for the user with the name above.

**Example**: `"Full Access"`

### sharingSettings.user

**type:** `string`

The name of the user the document will be shared with.

**Example**: `"John Smith"`

![Sharing settings](/assets/images/editor/sharing-settings.png#gh-light-mode-only)![Sharing settings](/assets/images/editor/sharing-settings.dark.png#gh-dark-mode-only)

## uploaded

**type:** `string`

Defines the document uploading date.

**Example**: `"2010-07-07 3:46 PM"`

![Document information](/assets/images/editor/info.png#gh-light-mode-only)![Document information](/assets/images/editor/info.dark.png#gh-dark-mode-only)

## Example

``` ts
const config = {
  // ...
  document: {
    // ...
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
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
