# Editor

The editorConfig section allows you to change the parameters pertaining to the editor interface: opening mode (viewer or editor), interface language, additional buttons, etc.

## actionLink

**type:** `object`

Specifies the data received from the **document editing service** using the [onMakeActionLink](../events.md#onmakeactionlink) event or the [onRequestSendNotify](../events.md#onrequestsendnotify) event in `data.actionLink` parameter, which contains the information about the action in the document that will be scrolled to.

**Example**:

``` ts
{
  action: {
    type: "bookmark",
    data: "bookmark_name",
  },
}
```

### actionLink.action

**type:** `object`

The action object that defines what to scroll to in the document.

### actionLink.action.type

**type:** `"bookmark" | "comment"`

The type of action in the document.

**Example**: `"bookmark"`

### actionLink.action.data

**type:** `string`

The data associated with the action: the bookmark name or the comment ID.

**Example**: `"bookmark_name"`

## callbackUrl

**type:** `string` | **required**

Specifies absolute URL to the **document storage service** (which [must be implemented](../../callback-handler.md) by the software integrators who use ONLYOFFICE Docs on their own server).

**Example**: `"https://example.com/url-to-callback"`

## coEditing

**type:** `object`

Defines the co-editing mode and the possibility to change it. This parameter is used to apply the [co-editing](../../../get-started/how-it-works/co-editing.md#co-editing-modes) and [viewing](../../../get-started/how-it-works/viewing.md) modes.

**Example**:

``` json
{
  "mode": "fast",
  "change": true
}
```

### coEditing.mode

**type:** `string` | **default:** `"fast"`

The co-editing mode. Can be `fast` or `strict`.

:::note
In case `mode` setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the `editorConfig.coEditing.mode` parameter.
:::

**Example**: `"fast"`

### coEditing.change

**type:** `boolean` | **default:** `true`

Defines if the co-editing mode can be changed in the editor interface or not.

**Example**: `true`

![Coediting mode](/assets/images/editor/coediting-mode.png)

## createUrl

**type:** `string`

Defines the absolute URL of the document where it will be created and available after creation. If not specified, there will be no creation button. Instead of this field, you can use the [onRequestCreateNew](../events.md#onrequestcreatenew) event.

**Example**: `"https://example.com/url-to-create-document"`

![Create URL](/assets/images/editor/create.png)

## fileChoiceUrl

**type:** `string`

Defines the URL of the file selection dialog opened in an iframe for inserting images, selecting documents for comparison, or choosing mail merge data sources. The URL can contain the `{documentType}` and `{fileExt}` placeholders, which will be replaced with the appropriate values (e.g., `ImagesOnly`, `DocumentsOnly`).

:::note
The `{documentType}` placeholder is required for the *Image from Storage* and *Document from Storage* buttons to appear.
:::

:::danger[Deprecated]
Instead of this parameter, use the [onRequestInsertImage](../events.md#onrequestinsertimage), [onRequestSelectDocument](../events.md#onrequestselectdocument), or [onRequestSelectSpreadsheet](../events.md#onrequestselectspreadsheet) events.
:::

**Example**: `"https://example.com/filechoice?type={documentType}"`

## lang

**type:** `string` | **default:** `"en"`

Defines the editor interface language. Uses two-letter (`de`, `ru`, `it`, etc.) language codes.

:::note
To translate the editor interface into Portuguese (Portugal) or Chinese (Traditional, Taiwan) (these languages were added in version 7.2), you need to use the four-letter language codes - `pt-PT` or `zh-TW`, respectively. The two-letter `pt` language code sets Portuguese (Brazil) and the `zh` code specifies Chinese (People's Republic of China).
:::

<details>
<summary>Supported language codes</summary>

| Code | Language |
| ---- | -------- |
| `ar` | Arabic |
| `az` | Azerbaijani |
| `be` | Belarusian |
| `bg` | Bulgarian |
| `ca` | Catalan |
| `cs` | Czech |
| `da` | Danish |
| `de` | German |
| `el` | Greek |
| `en` | English |
| `es` | Spanish |
| `eu` | Basque |
| `fi` | Finnish |
| `fr` | French |
| `gl` | Galician |
| `he` | Hebrew |
| `hr` | Croatian |
| `hu` | Hungarian |
| `hy` | Armenian |
| `id` | Indonesian |
| `it` | Italian |
| `ja` | Japanese |
| `ko` | Korean |
| `lo` | Lao |
| `lv` | Latvian |
| `ms` | Malay |
| `nl` | Dutch |
| `no` | Norwegian |
| `pl` | Polish |
| `pt` | Portuguese (Brazil) |
| `pt-PT` | Portuguese (Portugal) |
| `ro` | Romanian |
| `ru` | Russian |
| `si` | Sinhala |
| `sk` | Slovak |
| `sl` | Slovenian |
| `sq` | Albanian |
| `sr` | Serbian (Latin) |
| `sr-Cyrl` | Serbian (Cyrillic) |
| `sv` | Swedish |
| `tr` | Turkish |
| `uk` | Ukrainian |
| `ur` | Urdu |
| `vi` | Vietnamese |
| `zh` | Chinese (Simplified) |
| `zh-TW` | Chinese (Traditional) |

</details>

**Example**: `"en"`

## location

**type:** `string` | **default:** `""`

Defines the default measurement units. Specify `us` or `ca` to set inches.

:::danger[Deprecated]
Starting from version 8.2, please use the [region](#region) parameter instead.
:::

**Example**: `""`

## mode

**type:** `"edit" | "view"` | **default:** `"edit"`

Defines the editor opening mode. Can be either `view` to open the document for viewing, or `edit` to open the document in the editing mode allowing you to apply changes to the document data.

**Example**: `"edit"`

## mergeFolderUrl

**type:** `string`

Defines the absolute URL to the folder for saving the mail merge result.

:::danger[Deprecated]
Instead of this parameter, use the [onRequestSaveAs](../events.md#onrequestsaveas) event.
:::

**Example**: `"https://example.com/url-to-merge-folder"`

## recent

**type:** `object[]`

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

**type:** `string`

The folder where the document is stored (can be empty in case the document is stored in the root folder).

**Example**: `"Example Files"`

### recent.title

**type:** `string`

The document title that will be displayed in the **Open Recent...** menu option.

**Example**: `"exampledocument1.docx"`

### recent.url

**type:** `string`

The absolute URL to the document where it is stored.

**Example**: `"https://example.com/exampledocument1.docx"`

![Recent documents](/assets/images/editor/recent.png)

## region

**type:** `string` | **default:** `"en-US"`

Defines the default display format for currency and date and time (in the **Spreadsheet Editor** only). Is set using the four-letter (`en-US`, `fr-FR`, etc.) language codes.

:::note
If `lang` is defined and a matching regional setting exists, the default value is taken from the `lang` parameter. Otherwise, `en-US` is used.
:::

Starting from version 8.2, this parameter also defines the default measurement units in all editor types. For the **...-US** or **...-CA** regions, inches are used by default if other values are not specified in the [editorConfig.customization.unit](./customization/customization-standard-branding.md#unit) parameter.

<details>
<summary>Supported regional settings</summary>

| Code | Region |
| ---- | ------ |
| `ar-EG` | Arabic (Egypt) |
| `ar-SA` | Arabic (Saudi Arabia) |
| `az-Latn-AZ` | Azerbaijani (Latin, Azerbaijan) |
| `bg-BG` | Bulgarian (Bulgaria) |
| `cs-CZ` | Czech (Czech Republic) |
| `da-DK` | Danish (Denmark) |
| `de-AT` | German (Austria) |
| `de-CH` | German (Switzerland) |
| `de-DE` | German (Germany) |
| `el-GR` | Greek (Greece) |
| `en-AU` | English (Australia) |
| `en-GB` | English (United Kingdom) |
| `en-ID` | English (Indonesia) |
| `en-US` | English (United States) |
| `es-ES` | Spanish (Spain) |
| `es-MX` | Spanish (Mexico) |
| `fi-FI` | Finnish (Finland) |
| `fr-CH` | French (Switzerland) |
| `fr-FR` | French (France) |
| `hu-HU` | Hungarian (Hungary) |
| `id-ID` | Indonesian (Indonesia) |
| `it-CH` | Italian (Switzerland) |
| `it-IT` | Italian (Italy) |
| `ja-JP` | Japanese (Japan) |
| `ko-KR` | Korean (Korea) |
| `lv-LV` | Latvian (Latvia) |
| `nl-NL` | Dutch (Netherlands) |
| `pl-PL` | Polish (Poland) |
| `pt-BR` | Portuguese (Brazil) |
| `pt-PT` | Portuguese (Portugal) |
| `ru-RU` | Russian (Russia) |
| `sk-SK` | Slovak (Slovakia) |
| `sl-SI` | Slovenian (Slovenia) |
| `sr-Cyrl-RS` | Serbian (Cyrillic, Serbia) |
| `sr-Latn-RS` | Serbian (Latin, Serbia) |
| `sv-FI` | Swedish (Finland) |
| `sv-SE` | Swedish (Sweden) |
| `tr-TR` | Turkish (Turkey) |
| `uk-UA` | Ukrainian (Ukraine) |
| `vi-VN` | Vietnamese (Vietnam) |
| `zh-CN` | Chinese (Simplified) |
| `zh-TW` | Chinese (Traditional) |

</details>

**Example**: `"en-US"`

## saveAsUrl

**type:** `string`

Defines the absolute URL to the folder for saving files.

:::danger[Deprecated]
Instead of this parameter, use the [onRequestSaveAs](../events.md#onrequestsaveas) event.
:::

**Example**: `"https://example.com/url-to-save-folder"`

## sharingSettingsUrl

**type:** `string`

Defines the absolute URL to the document sharing settings page.

:::danger[Deprecated]
Instead of this parameter, use the [onRequestSharingSettings](../events.md#onrequestsharingsettings) event.
:::

**Example**: `"https://example.com/url-to-sharing-settings"`

## templates

**type:** `object[]`

Defines the presence or absence of the templates in the **Create New...** menu option.

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

**type:** `string`

The absolute URL to the image for template.

**Example**: `"https://example.com/exampletemplate1.png"`

### templates.title

**type:** `string`

The template title that will be displayed in the **Create New...** menu option.

**Example**: `"exampletemplate1.docx"`

### templates.url

**type:** `string`

The absolute URL to the document where it will be created and available after creation.

**Example**: `"https://example.com/url-to-create-template1"`

![Templates](/assets/images/editor/templates.png)

## user

**type:** `object`

Defines the user currently viewing or editing the document.

:::note
The request to the user's avatar is sent without authorization because the avatar URL is inserted into the HTML of the editor frame. Moreover, the CORS problem may occur. In this case, use the avatar in the base64 format. For example, `"data:image/png;base64,*****"`.

If you are subscribed to the [onRequestUsers](../events.md#onrequestusers) event and send an avatar using the [setUsers](../../methods.md#setusers) method, the `user.image` field in the initialization config is not required. We especially don't recommend to specify this parameter if the avatar is sent in the base64 format and the initialization config is signed with JWT. In this case, the token will be too long.
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

### user.group

**type:** `string`

The group (or several groups separated with commas) the user belongs to.

**Example**: `"Group1,Group2"`

### user.id

**type:** `string`

The identification of the user. The length is limited to 128 symbols. This information is stored and used to distinguish co-authors, indicate the [author](../../callback-handler.md#users) of the last changes when saving and highlighting history (in the list of [changes](../../callback-handler.md#history)), and count users with access for a license based on the number of users. We recommend using some unique anonymized hash. Do not use sensitive data, like name or email for this field.

**Example**: `"78e1e841"`

### user.image

**type:** `string`

The path to the user's avatar.

**Example**: `"https://example.com/url-to-user-avatar.png"`

### user.name

**type:** `string`

The full name of the user. The length is limited to 128 symbols.

**Example**: `"John Smith"`

## customization

**type:** `object`

The editor customization section. See the [standard branding](customization/customization-standard-branding.md) and [white label](customization/customization-white-label.md) pages for available parameters.

## embedded

**type:** `object`

The embedded mode configuration section. See the [embedded](embedded.md) page for available parameters.

## plugins

**type:** `object`

The plugins configuration section. See the [plugins](plugins.md) page for available parameters.

## Example

``` ts
const config = {
  // ...
  editorConfig: {
    actionLink: {
      action: {
        type: "bookmark",
        data: "bookmark_name",
      },
    },
    callbackUrl: "https://example.com/url-to-callback",
    coEditing: {
      mode: "fast",
      change: true,
    },
    createUrl: "https://example.com/url-to-create-document",
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
    customization: {
      // ...
    },
    embedded: {
      // ...
    },
    plugins: {
      // ...
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

The **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
