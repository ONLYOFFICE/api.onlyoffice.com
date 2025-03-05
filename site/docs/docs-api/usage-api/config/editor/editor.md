# Editor

The editorConfig section allows to change the parameters pertaining to the editor interface: opening mode (viewer or editor), interface language, additional buttons, etc.

## actionLink

`Type: object`

Specifies the data received from the **document editing service** using the [onMakeActionLink](../events.md#onmakeactionlink) event or the [onRequestSendNotify](../events.md#onrequestsendnotify) event in *data.actionLink* parameter, which contains the information about the action in the document that will be scrolled to.

**Example**: `ACTION_DATA`

## callbackUrl

`Type: string` | **required**

Specifies absolute URL to the **document storage service** (which [must be implemented](../../callback-handler.md) by the software integrators who use ONLYOFFICE Docs on their own server).

**Example**: `https://example.com/url-to-callback.ashx`

## coEditing

`Type: object`

Defines the co-editing mode (*Fast* or *Strict*) and the possibility to change it.

This parameter is used to apply the [co-editing](../../../get-started/how-it-works/co-editing.md#co-editing-modes) and [viewing](../../../get-started/how-it-works/viewing.md) modes.

**Example**:

``` json
{
  "mode": "fast",
  "change": true
}
```

### coEditing.mode

`Type: string`

The co-editing mode (*fast* or *strict*). The default value is **fast**.

:::note
In case *mode* setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.coEditing.mode* parameter.
:::

**Example**: `"fast"`

### coEditing.change

`Type: boolean`

Defines if the co-editing mode can be changed in the editor interface or not. The default value is **true**.

**Example**: `true`

![Coediting mode](/assets/images/editor/coediting-mode.png)

## createUrl

`Type: string`

Defines the absolute URL of the document where it will be created and available after creation. If not specified, there will be no creation button. Instead of this field, you can use the [onRequestCreateNew](../events.md#onrequestcreatenew) event.

**Example**: `https://example.com/url-to-create-document/`

![Create URL](/assets/images/editor/create.png)

## lang

`Type: string`

Defines the editor interface language (if some other languages other than English are present). Is set using the two letter (**de**, **ru**, **it**, etc.) language codes. The default value is **"en"**.

:::note
To translate the editor interface into Portuguese (Portugal) or Chinese (Traditional, Taiwan) (these languages were added in version 7.2), you need to use the four letter language codes - **pt-PT** or **zh-TW**, respectively. The two letter **pt** language code sets Portuguese (Brazil) and the **zh** code specifies Chinese (People's Republic of China).
:::

**Example**: `"en"`

## location

`Type: string`

Defines the default measurement units. Specify **us** or **ca** to set inches. The default value is **""**.

:::note
When **us** or **ca** values are set, the default measurement units are inches.
:::
:::danger[Deprecated]
Starting from version 8.2, please use the [region](#region) parameter instead.
:::

**Example**: `""`

## mode

`Type: string`

Defines the editor opening mode. Can be either **view** to open the document for viewing, or **edit** to open the document in the editing mode allowing to apply changes to the document data. The default value is **"edit"**.

**Example**: `"edit"`

## recent

`Type: array of object`

Defines the presence or absence of the documents in the **Open Recent...** menu option.

**Example**:

``` json
[
  {
    "folder": "Example Files",
    "title": "exampledocument1.docx",
    "url": "https://example.com/exampledocument1.docx"
  }
]
```

### recent.folder

`Type: string`

The folder where the document is stored (can be empty in case the document is stored in the root folder).

**Example**: `"Example Files"`

### recent.title

`Type: string`

The document title that will be displayed in the **Open Recent...** menu option.

**Example**: `"exampledocument1.docx"`

### recent.url

`Type: string`

The absolute URL to the document where it is stored.

**Example**: `https://example.com/exampledocument1.docx`

![Recent documents](/assets/images/editor/recent.png) 

## region

`Type: string`

Defines the default display format for currency and date and time (in the **Spreadsheet Editor** only). Is set using the four letter (**en-US**, **fr-FR**, etc.) language codes. For the default value the *lang* parameter is taken, or, if no regional setting corresponding to the *lang* value is available, **en-US** is used.

Starting from version 8.2, this parameter also defines the default measurement units in all editor types. For the **...-US** or **...-CA** regions, inches are used by default if other values are not specified in the [editorConfig.customization.unit](../editor/customization/customization-standard-branding.md#unit) parameter.

**Example**: `"en-US"`

## templates

`Type: array of object`

Defines the presence or absence of the templates in the **Create New\...** menu option.

**Example**:

``` json
[
  {
    "image": "https://example.com/exampletemplate1.png",
    "title": "exampletemplate1.docx",
    "url": "https://example.com/url-to-create-template1"
  }
]
```

### templates.image

`Type: string`

The absolute URL to the image for template.

**Example**: `https://example.com/exampletemplate1.png`

### templates.title

`Type: string`

The template title that will be displayed in the **Create New\...** menu option.

**Example**: `"exampletemplate1.docx"`

### templates.url

`Type: string`

The absolute URL to the document where it will be created and available after creation.

**Example**: `https://example.com/url-to-create-template1`

![Templates](/assets/images/editor/templates.png)

## user

`Type: object`

Defines the user currently viewing or editing the document.

:::note
The request to the user's avatar is sent without authorization because the avatar URL is inserted into the HTML of the editor frame. Moreover, the CORS problem may occur. In this case, use the avatar in the base64 format. For example, *"data:image/png,base64,\*\*\*\*\*"*.

If you are subscribed to the [onRequestUsers](../events.md#onrequestusers) event and send an avatar using the [setUsers](../../methods.md#setusers) method, the *user.image* field in the initialization config is not required. We especially don't recommend to specify this parameter if the avatar is sent in the base64 format and the initialization config is signed with JWT. In this case, the token will be too long.
:::

**Example**:

``` json
{
  "group": "Group1,Group2",
  "id": "78e1e841",
  "image": "https://example.com/url-to-user-avatar.png",
  "name": "John Smith"
}
```

### user.firstname

`Type: string`

The first name of the user.

:::danger[Deprecated]
Starting from version 4.2, please use the [user.name](#username) parameter instead.
:::

**Example**: `"John"`

### user.group

`Type: string`

The group (or several groups separated with commas) the user belongs to.

**Example**: `"Group1,Group2"`

### user.id

`Type: string`

The identification of the user. The length is limited to 128 symbols. This information is stored and used to distinguish co-authors, indicate the [author](../../callback-handler.md#users) of the last changes when saving and highlighting history (in the list of [changes](../../callback-handler.md#changeshistory)), and count users with access for a license based on the number of users. We recommend using some unique anonymized hash. Do not use sensitive data, like name or email for this field.

**Example**: `"78e1e841"`

### user.image

`Type: string`

The path to the user's avatar.

**Example**: `https://example.com/url-to-user-avatar.png`

### user.lastname

`Type: string`

The last name of the user.

:::danger[Deprecated]
Starting from version 4.2, please use the [user.name](#username) parameter instead.
:::

**Example**: `"Smith"`

### user.name

`Type: string`

The full name of the user. The length is limited to 128 symbols. Used since version 4.2.

**Example**: `"John Smith"`

## Example

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    actionLink: "ACTION_DATA",
    callbackUrl: "https://example.com/url-to-callback.ashx",
    coEditing: {
      mode: "fast",
      change: true,
    },
    createUrl: "https://example.com/url-to-create-document/",
    lang: "en",
    mode: "edit",
    recent: [
      {
        folder: "Example Files",
        title: "exampledocument1.docx",
        url: "https://example.com/exampledocument1.docx",
      },
    ],
    region: "en-US",
    templates: [
      {
        image: "https://example.com/exampletemplate1.png",
        title: "exampletemplate1.docx",
        url: "https://example.com/url-to-create-template1",
      },
    ],
    user: {
      group: "Group1,Group2",
      id: "78e1e841",
      image: "https://example.com/url-to-user-avatar.png",
      name: "John Smith",
    },
  },
})
```

The **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
