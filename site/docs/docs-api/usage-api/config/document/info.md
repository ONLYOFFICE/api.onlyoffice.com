# Info

The info section defines the document info parameters.

## favorite

**type:** `boolean`

The highlighting state of the *Favorite* icon. When the user clicks the icon, the [onMetaChange](../events.md#onmetachange) event is called. If the parameter is `undefined` or `null`, the *Favorite* icon is not displayed at the editor window header.

**Example**: `true`

![Favorite](/assets/images/editor/favorite.png#gh-light-mode-only)![Favorite](/assets/images/editor/favorite.dark.png#gh-dark-mode-only)

## folder

**type:** `string`

The folder where the document is stored. Can be empty if the document is in the root folder.

**Example**: `"Example Files"`

## owner

**type:** `string`

The name of the document owner/creator.

**Example**: `"John Smith"`

## sharingSettings

**type:** `object[]`

The information about the settings which allow sharing the document with other users.

**Example**:

```ts
[
  {
    isLink: false,
    permissions: "Full Access",
    user: "John Smith",
  },
]
```

### sharingSettings.isLink

**type:** `boolean`

Whether to replace the user icon with the link icon.

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

The document uploading date.

**Example**: `"2010-07-07 3:46 PM"`

![Document information](/assets/images/editor/info.png#gh-light-mode-only)![Document information](/assets/images/editor/info.dark.png#gh-dark-mode-only)

## Example

```ts
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
          isLink: false,
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
