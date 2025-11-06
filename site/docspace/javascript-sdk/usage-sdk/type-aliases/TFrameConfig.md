# Type Alias: TFrameConfig

> **TFrameConfig** = `object`

Defined in: [types/index.ts:225](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L225)

The frame configuration.

## Properties

### noLoader?

> `optional` **noLoader**: `boolean`

Defined in: [types/index.ts:227](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L227)

Specifies whether to initialize the frame without showing a loading spinner.

***

### roomType?

> `optional` **roomType**: `string`

Defined in: [types/index.ts:229](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L229)

The selector room type.

***

### acceptButtonLabel?

> `optional` **acceptButtonLabel**: `string`

Defined in: [types/index.ts:231](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L231)

The label for the selector accept button.

***

### cancelButtonLabel?

> `optional` **cancelButtonLabel**: `string`

Defined in: [types/index.ts:233](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L233)

The label for the selector cancel button.

***

### buttonColor?

> `optional` **buttonColor**: `string`

Defined in: [types/index.ts:235](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L235)

The HEX code to customize the selector button color.

***

### checkCSP?

> `optional` **checkCSP**: `boolean`

Defined in: [types/index.ts:237](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L237)

Specifies whether to check for the presence of CSP headers before initialization.

***

### destroyText?

> `optional` **destroyText**: `string`

Defined in: [types/index.ts:239](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L239)

The text to display when destroying the frame. It will be inserted into the `div` tag when the "destroyFrame" method is called.

***

### disableActionButton?

> `optional` **disableActionButton**: `boolean`

Defined in: [types/index.ts:241](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L241)

Specifies whether to disable the "Actions" button in the manager interface.

***

### downloadToEvent?

> `optional` **downloadToEvent**: `boolean`

Defined in: [types/index.ts:243](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L243)

Specifies whether to handle download links using the `onDownload` event instead of downloading directly.

***

### editorCustomization?

> `optional` **editorCustomization**: [`TEditorCustomization`](TEditorCustomization.md) \| `object`

Defined in: [types/index.ts:245](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L245)

The parameters to customize editors.

***

### editorGoBack?

> `optional` **editorGoBack**: `boolean` \| `string`

Defined in: [types/index.ts:247](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L247)

Specifies whether the "Open file location" button is displayed in the editor.

***

### editorType?

> `optional` **editorType**: [`TEditorType`](TEditorType.md)

Defined in: [types/index.ts:249](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L249)

The editor mode display type.

***

### events?

> `optional` **events**: [`TFrameEvents`](TFrameEvents.md)

Defined in: [types/index.ts:251](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L251)

The callback functions for SDK events.

***

### filter?

> `optional` **filter**: [`TFrameFilter`](TFrameFilter.md)

Defined in: [types/index.ts:253](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L253)

The filter parameters that facilitate searching files and folders in the DocSpace manager.

***

### filterParam?

> `optional` **filterParam**: `string`

Defined in: [types/index.ts:255](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L255)

The filter parameters that facilitate searching files in the selector mode.

***

### frameId

> **frameId**: `string`

Defined in: [types/index.ts:257](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L257)

The unique frame identifier used to refer to the SDK instance.

***

### height?

> `optional` **height**: `string`

Defined in: [types/index.ts:259](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L259)

The iframe height measured in percentages or pixels.

***

### id?

> `optional` **id**: `string` \| `number` \| `null`

Defined in: [types/index.ts:261](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L261)

The unique instance identifier used in the SDK initialization modes.

***

### infoPanelVisible?

> `optional` **infoPanelVisible**: `boolean`

Defined in: [types/index.ts:263](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L263)

Specifies whether to display a button to show the info panel in the DocSpace manager.

***

### init?

> `optional` **init**: `boolean` \| `null`

Defined in: [types/index.ts:265](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L265)

Specifies whether to initialize the frame.

***

### locale?

> `optional` **locale**: `string` \| `null`

Defined in: [types/index.ts:267](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L267)

The language of the DocSpace user interface specified with the four letter language code.

***

### mode

> **mode**: [`TFrameMode`](TFrameMode.md) \| `string`

Defined in: [types/index.ts:269](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L269)

The SDK initialization mode.

***

### name?

> `optional` **name**: `string`

Defined in: [types/index.ts:271](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L271)

The iframe name used for messaging at the SDK level.

***

### requestToken?

> `optional` **requestToken**: `string` \| `null`

Defined in: [types/index.ts:273](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L273)

The authorization token for API requests. Used to open public rooms and files in public rooms.

***

### rootPath?

> `optional` **rootPath**: `string`

Defined in: [types/index.ts:275](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L275)

The base path used for DocSpace navigation. By default, opens a list of rooms.

***

### selectorType?

> `optional` **selectorType**: [`TSelectorType`](TSelectorType.md)

Defined in: [types/index.ts:277](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L277)

The filter type used in the selector views.

***

### showFilter?

> `optional` **showFilter**: `boolean`

Defined in: [types/index.ts:279](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L279)

Specifies whether the filter options are displayed in the DocSpace manager.

***

### showHeader?

> `optional` **showHeader**: `boolean`

Defined in: [types/index.ts:281](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L281)

Specifies whether the interface header is displayed in the mobile view manager.

***

### showHeaderBanner?

> `optional` **showHeaderBanner**: [`TBannerDisplaying`](TBannerDisplaying.md)

Defined in: [types/index.ts:283](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L283)

The display settings of the header banner.

***

### showMenu?

> `optional` **showMenu**: `boolean`

Defined in: [types/index.ts:285](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L285)

Specifies whether the left menu is displayed in the DocSpace manager.

***

### showSelectorCancel?

> `optional` **showSelectorCancel**: `boolean`

Defined in: [types/index.ts:287](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L287)

Specifies whether the "Cancel" button is displayed in the selector mode.

***

### showSelectorHeader?

> `optional` **showSelectorHeader**: `boolean`

Defined in: [types/index.ts:289](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L289)

Specifies whether the interface header is displayed in the selector mode.

***

### showSettings?

> `optional` **showSettings**: `boolean`

Defined in: [types/index.ts:291](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L291)

Specifies whether to display the "Manage displayed columns" button for configuring the table columns in the list view.

***

### showSignOut?

> `optional` **showSignOut**: `boolean`

Defined in: [types/index.ts:293](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L293)

Specifies whether the "Sign out" button is displayed.

***

### showTitle?

> `optional` **showTitle**: `boolean`

Defined in: [types/index.ts:295](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L295)

Specifies whether the title of the current section/room/folder is displayed in the DocSpace manager.

***

### src

> **src**: `string`

Defined in: [types/index.ts:297](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L297)

The source URL to the iframe used to generate links.

***

### theme?

> `optional` **theme**: [`TTheme`](TTheme.md) \| `string`

Defined in: [types/index.ts:299](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L299)

The UI theme settings.

***

### type?

> `optional` **type**: [`TEditorType`](TEditorType.md)

Defined in: [types/index.ts:301](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L301)

The platform type used by the browser and affects the parameters of the inserted object.

***

### viewAs?

> `optional` **viewAs**: [`TManagerViewMode`](TManagerViewMode.md)

Defined in: [types/index.ts:303](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L303)

The default view mode - the way items are arranged in the DocSpace manager.

***

### viewTableColumns?

> `optional` **viewTableColumns**: `string`

Defined in: [types/index.ts:305](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L305)

The comma-separated string of table column names that are displayed in the table view mode.

***

### waiting?

> `optional` **waiting**: `boolean`

Defined in: [types/index.ts:307](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L307)

Specifies whether the frame is in the loading state.

***

### width?

> `optional` **width**: `string`

Defined in: [types/index.ts:309](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L309)

The iframe width measured in percentages or pixels.

***

### withBreadCrumbs?

> `optional` **withBreadCrumbs**: `boolean`

Defined in: [types/index.ts:311](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L311)

Specifies whether to show breadcrumb navigation in the selector mode.

***

### withSearch?

> `optional` **withSearch**: `boolean`

Defined in: [types/index.ts:313](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L313)

Specifies whether to display "Search" in the selector mode.

***

### withSubtitle?

> `optional` **withSubtitle**: `boolean`

Defined in: [types/index.ts:315](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/main/src/types/index.ts#L315)

Specifies whether to display a subtitle with additional comments or descriptions for the current directory.
