# TSelector

```ts
type TSelector = 
  | {
  type: Base;
  props: TBaseSelector;
}
  | {
  type: Files;
  props: TFilesSelector;
}
  | {
  type: Groups;
  props: TGroupsSelector;
}
  | {
  type: People;
  props: TPeopleSelector;
}
  | {
  type: Room;
  props: TRoomSelector;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/index.ts#L58)

Provides selector components for choosing files, rooms, users, and groups within DocSpace.

Set `type` to the desired [SelectorType](../../enums/Selector.md) value and `props` to the matching
selector props interface ([TBaseSelector](#tbaseselector), [TFilesSelector](#tfilesselector),
[TGroupsSelector](#tgroupsselector), [TPeopleSelector](#tpeopleselector), or [TRoomSelector](#troomselector)).

To display a selector, return an [`IMessage`](../utils.md#imessage) with
[`Actions.showSelector`](../../enums/Actions.md#showselector) in `actions`
and pass the configuration in `selectorProps`.
Use [`Actions.updateSelector`](../../enums/Actions.md#updateselector) and
[`Actions.closeSelector`](../../enums/Actions.md#closeselector) to update or close it.

![selector](/assets/images/docspace/selector.png#gh-light-mode-only)![selector](/assets/images/docspace/selector.dark.png#gh-dark-mode-only)

## Example

```typescript
import { TSelector, TBaseSelector, SelectorType, Actions, ToastType } from "@onlyoffice/docspace-plugin-sdk";

const selector: TSelector = {
  type: SelectorType.Base,
  props: {
    submitButtonLabel: "Select",
    items: [{ id: "item-1", label: "First Item" }],
    onSubmit: ({ selectedIds }) => ({
      actions: [Actions.closeSelector, Actions.showToast],
      toastProps: [{ type: ToastType.success, title: `Selected ${selectedIds.length} items` }],
    }),
  },
};
```

## TBaseSelector

```ts
type TBaseSelector = TSelectorBreadCrumbs & TSelectorPagination & TSelectorHeader & TSelectorCancelButton & TSelectorSubmitButton & TSelectorCheckbox & TSelectorBaseProps & TSelectorLifecycleEvents & TSelectorEmptyScreen & {
  isLoading?: boolean;
  isMultiSelect?: boolean;
  maxSelectedItems?: number;
  selectedItems?: TSelectorItem[];
  descriptionText?: string;
  searchEmptyScreenHeader?: string;
  searchEmptyScreenDescription?: string;
  onSelect?: (params: {
     selectedId?: string | number;
     isDoubleClick: boolean;
  }) => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L98)

Defines the base properties for all selector components.

### Example

```typescript
// This example demonstrates how to create a basic selector with a list of items,
// a header, and a submit button. It also includes an item that, when clicked,
// dynamically adds a new input item to the list.

const selectorProps: TBaseSelector = {
  // Defines the text and visibility of the header.
  withHeader: true,
  headerProps: {
    label: "Plugin Base Selector",
  },

  // The text to display on the main action button.
  submitButtonLabel: "Submit",

  // An array of items to display in the selector.
  items: [
    {
      id: "create-new",
      label: "Create new item",
      isCreateNewItem: true, // Renders this item as a button for creating new entries.
      onCreateClick: () => {
        // When clicked, this function returns a message to the host application
        // with an `updateSelector` action. This action provides new props to
        // re-render the selector, in this case, adding a new item to the list.
        const updatedItems = [...selectorProps.items, { id: "new-item", label: "Newly Added Item" }];

        return {
          actions: [Actions.updateSelector], // Specifies the action to perform.
          selectorProps: { // Provides the new properties for the selector.
             type: SelectorType.Base,
             props: { ...selectorProps, items: updatedItems }
          }
        };

      },
    },
    {
      id: "item-1",
      label: "First Item",
      icon: "your-icon-url.svg", // Specify an icon for the item.
    },
  ],

  // A callback function that is executed when the user clicks the submit button.
  onSubmit: ({ selectedIds }) => {
    // The `selectedIds` parameter contains an array of the IDs of the selected items.
    console.log("Items submitted:", selectedIds);

    // After submission, you can perform actions like closing the selector
    // and showing a success message.
    return {
      actions: [Actions.closeSelector, Actions.showToast],
      toastProps: [{
        type: ToastType.success,
        title: `Selected ${selectedIds.length} items`,
      }],
    };
  },
};
```

***

### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `isLoading?` | `boolean` | If true, shows a loading indicator for the entire selector. |
| `isMultiSelect?` | `boolean` | If true, allows multiple items to be selected. |
| `maxSelectedItems?` | `number` | The maximum number of items that can be selected. |
| `selectedItems?` | [`TSelectorItem`](#tselectoritem)[] | An array of initially selected items. |
| `descriptionText?` | `string` | A descriptive text displayed within the selector. |
| `searchEmptyScreenHeader?` | `string` | The header text to display when a search yields no results. |
| `searchEmptyScreenDescription?` | `string` | The description text to display when a search yields no results. |
| `onSelect()?` | (`params`: \{ `selectedId?`: `string` \| `number`; `isDoubleClick`: `boolean`; \}) => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when an item is selected. |

### See

 - [TSelectorBreadCrumbs](#tselectorbreadcrumbs) - Breadcrumb navigation properties
 - [TSelectorPagination](#tselectorpagination) - Pagination and item loading properties
 - [TSelectorHeader](#tselectorheader) - Header configuration properties
 - [TSelectorCancelButton](#tselectorcancelbutton) - Cancel button properties
 - [TSelectorSubmitButton](#tselectorsubmitbutton) - Submit button properties
 - [TSelectorCheckbox](#tselectorcheckbox) - Footer checkbox properties
 - [TSelectorBaseProps](#tselectorbaseprops) - Common base properties (id, className)
 - [TSelectorLifecycleEvents](#tselectorlifecycleevents) - Lifecycle callbacks (onLoad, onClose)
 - [TSelectorEmptyScreen](#tselectoremptyscreen) - Empty state messages

## TSelectorItem

```ts
type TSelectorItem = {
  label: string;
  id?: string | number;
} & Partial<TSelectorItemFile> & Partial<TSelectorItemInput> & Partial<TSelectorItemNew>;
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L149)

Represents a single item within a selector component.

### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `label` | `string` | The display text for the item. |
| `id?` | `string` \| `number` | A unique identifier for the item. |

### See

 - [TSelectorItemFile](#tselectoritemfile) - File item properties
 - [TSelectorItemInput](#tselectoriteminput) - Input item properties
 - [TSelectorItemNew](#tselectoritemnew) - New item properties

***

## TSelectorItemFile

```ts
type TSelectorItemFile = {
  icon: string;
  fileExst: FilesExst | string;
  fileType: FilesType;
  security: FilesSecurity;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L165)

Defines properties for an item that represents a file.

### Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `icon` | `string` | The URL or identifier for the item's icon. |
| `fileExst` | [`FilesExst`](../../enums/Files.md#filesexst) \| `string` | The file extension (e.g., 'docx', 'pdf'). |
| `fileType` | [`FilesType`](../../enums/Files.md#filestype) | The general type of the file (e.g., 'text', 'spreadsheet'). |
| `security` | [`FilesSecurity`](../../enums/Files.md#filessecurity) | The security or access level of the file. |

```mdx-code-block
</APITable>
```

***

## TSelectorItemInput

```ts
type TSelectorItemInput = {
  isInputItem: boolean;
  defaultInputValue: string;
  onAcceptInput: (value: string) => TReturnMessage;
  onCancelInput: () => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L187)

Defines properties for an item that functions as an input field.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `isInputItem` | `boolean` | If true, this item will be rendered as an input field. |
| `defaultInputValue` | `string` | The default value to display in the input field. |
| `onAcceptInput` | (`value`: `string`) => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the user accepts the input value. |
| `onCancelInput` | () => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the user cancels the input. |

```mdx-code-block
</APITable>
```

***

## TSelectorItemNew

```ts
type TSelectorItemNew = {
  isCreateNewItem: boolean;
  onCreateClick: () => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L209)

Defines properties for an item that allows creating a new entity.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `isCreateNewItem` | `boolean` | If true, this item will be rendered as a 'create new' button. |
| `onCreateClick` | () => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the user clicks the 'create new' button. |

```mdx-code-block
</APITable>
```

***

## TBreadCrumbItem

```ts
type TBreadCrumbItem = {
  label: string;
  id: string | number;
  isRoom?: boolean;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L223)

Represents a single item in a breadcrumb trail.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `label` | `string` | The display text for the breadcrumb item. |
| `id` | `string` \| `number` | A unique identifier for the breadcrumb item. |
| `isRoom?` | `boolean` | If true, indicates that the breadcrumb item represents a room. |

```mdx-code-block
</APITable>
```

***

## TSelectorBreadCrumbs

```ts
type TSelectorBreadCrumbs = {
  withBreadCrumbs?: boolean;
  isBreadCrumbsLoading?: boolean;
  breadCrumbs?: TBreadCrumbItem[];
  onSelectBreadCrumb?: (id: string | number) => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L252)

Defines properties for configuring breadcrumbs in a selector.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `withBreadCrumbs?` | `boolean` | If true, displays the breadcrumb navigation. |
| `isBreadCrumbsLoading?` | `boolean` | If true, shows a loading indicator for the breadcrumbs. |
| `breadCrumbs?` | [`TBreadCrumbItem`](#tbreadcrumbitem)[] | An array of breadcrumb items to display. |
| `onSelectBreadCrumb?` | (`id`: `string` \| `number`) => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when a breadcrumb item is selected. |

```mdx-code-block
</APITable>
```

***

## TSelectorPagination

```ts
type TSelectorPagination = {
  items: TSelectorItem[];
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  onLoadNextPage?: () => TReturnMessage;
  totalItems?: number;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L274)

Defines properties for pagination within a selector.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `items` | [`TSelectorItem`](#tselectoritem)[] | The list of items to display on the current page. |
| `hasNextPage?` | `boolean` | If true, indicates that more items are available on subsequent pages. |
| `isNextPageLoading?` | `boolean` | If true, shows a loading indicator while the next page is being loaded. |
| `onLoadNextPage?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered to load the next page of items. |
| `totalItems?` | `number` | The total number of items available. |

```mdx-code-block
</APITable>
```

***

## TSelectorHeader

```ts
type TSelectorHeader = {
  withHeader?: boolean;
  headerProps?: {
     label: string;
     isCloseable?: boolean;
     onCloseClick?: () => TReturnMessage;
     withBackButton?: boolean;
     onBackClick?: () => TReturnMessage;
  };
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L300)

Defines properties for the selector's header.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `withHeader?` | `boolean` | If true, displays the header. |
| `headerProps?` | \{ `label`: `string`; `isCloseable?`: `boolean`; `onCloseClick?`: () => [`TReturnMessage`](../utils.md#treturnmessage); `withBackButton?`: `boolean`; `onBackClick?`: () => [`TReturnMessage`](../utils.md#treturnmessage); \} | An object containing properties for the header. |
| `headerProps.label` | `string` | The title text to display in the header. |
| `headerProps.isCloseable?` | `boolean` | If true, displays a close button in the header. |
| `headerProps.onCloseClick?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the close button is clicked. |
| `headerProps.withBackButton?` | `boolean` | If true, displays a back button in the header. |
| `headerProps.onBackClick?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the back button is clicked. |

```mdx-code-block
</APITable>
```

***

## TSelectorCheckbox

```ts
type TSelectorCheckbox = {
  withCheckbox?: boolean;
  footerCheckboxLabel?: string;
  isChecked?: boolean;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L335)

Defines properties for a checkbox in the selector's footer.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `withCheckbox?` | `boolean` | If true, displays a checkbox in the footer. |
| `footerCheckboxLabel?` | `string` | The label for the footer checkbox. |
| `isChecked?` | `boolean` | The initial checked state of the footer checkbox. |

```mdx-code-block
</APITable>
```

***

## TSelectorCancelButton

```ts
type TSelectorCancelButton = {
  withCancelButton?: boolean;
  cancelButtonLabel?: string;
  onCancel?: () => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L353)

Defines properties for the cancel button in the selector.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `withCancelButton?` | `boolean` | If true, displays the cancel button. |
| `cancelButtonLabel?` | `string` | The text label for the cancel button. |
| `onCancel?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the cancel button is clicked. |

```mdx-code-block
</APITable>
```

***

## TSelectorBaseProps

```ts
type TSelectorBaseProps = {
  id?: string;
  className?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L371)

Common base properties shared across all selector types.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `id?` | `string` | A unique identifier for the selector component. |
| `className?` | `string` | A CSS class name to apply to the selector component. |

```mdx-code-block
</APITable>
```

***

## TSelectorLifecycleEvents

```ts
type TSelectorLifecycleEvents = {
  onLoad?: () => TReturnMessage;
  onClose?: () => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L385)

Lifecycle callback properties for selectors.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `onLoad?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the selector is loaded. |
| `onClose?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the selector is closed. |

```mdx-code-block
</APITable>
```

***

## TSelectorEmptyScreen

```ts
type TSelectorEmptyScreen = {
  emptyScreenHeader?: string;
  emptyScreenDescription?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L399)

Empty screen message properties for selectors.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `emptyScreenHeader?` | `string` | The header text to display when there are no items to show. |
| `emptyScreenDescription?` | `string` | The description text to display when there are no items to show. |

```mdx-code-block
</APITable>
```

***

## TSelectorSearchCreate

```ts
type TSelectorSearchCreate = {
  withSearch?: boolean;
  withCreate?: boolean;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L413)

Search and create functionality properties for selectors.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `withSearch?` | `boolean` | If true, displays a search input field. |
| `withCreate?` | `boolean` | If true, allows users to create new items. |

```mdx-code-block
</APITable>
```

***

## TSelectorSubmitButton

```ts
type TSelectorSubmitButton = {
  submitButtonLabel: string;
  disabledSubmitButton?: boolean;
  onSubmit: (params: {
     selectedIds: (string | number)[];
     fileName: string;
     isFooterCheckboxChecked: boolean;
  }) => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IBaseSelector.ts#L440)

Defines properties for the submit button in the selector.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `submitButtonLabel` | `string` | The text label for the submit button. |
| `disabledSubmitButton?` | `boolean` | If true, the submit button will be disabled. |
| `onSubmit` | (`params`: \{ `selectedIds`: (`string` \| `number`)[]; `fileName`: `string`; `isFooterCheckboxChecked`: `boolean`; \}) => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the submit button is clicked. |

```mdx-code-block
</APITable>
```

***

## TFilesSelector

```ts
type TFilesSelector = TSelectorHeader & TSelectorBaseProps & TSelectorLifecycleEvents & TSelectorSearchCreate & TSelectorCancelButton & Pick<TSelectorSubmitButton, "submitButtonLabel"> & {
  isMultiSelect?: boolean;
  withBreadCrumbs?: boolean;
  currentFolderId?: string | number;
  isRoomsOnly?: boolean;
  openRoot?: boolean;
  descriptionText?: string;
  withFooterInput?: boolean;
  footerInputHeader?: string;
  currentFooterInputValue?: string;
  withFooterCheckbox?: boolean;
  footerCheckboxLabel?: string;
  filterParam?: FilterType;
  getIsDisabled: (params: {
     selectedItemId: string | number | undefined;
     selectedItemType?: "rooms" | "files";
     selectedItemSecurity?:   | FilesSecurity
        | Security;
     selectedFileInfo:   | {
        id: string | number;
        title: string;
        fileExst?: FilesExst | string;
      }
        | null;
     isFirstLoad: boolean;
     isDisabledFolder?: boolean;
     isRoot: boolean;
  }) => boolean;
  onSubmit?: (params: {
     selectedItemId: string | number | undefined;
     folderTitle: string;
     fileName: string;
     isChecked: boolean;
     selectedFileInfo:   | {
        id: string | number;
        title: string;
        fileExst?: FilesExst | string;
      }
        | null;
     breadCrumbs?: TBreadCrumbItem[];
  }) => TReturnMessage;
  onSelect?: (id: string | number | undefined) => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IFilesSelector.ts#L96)

Defines the properties for a file and folder selector component.

### Example

```typescript
// This example demonstrates a file selector for choosing a location to save a file.
// It includes a footer input for the filename, breadcrumbs for navigation, and
// custom logic to disable the submit button in the root directory.

const filesSelectorProps: TFilesSelector = {
  // Defines the text and visibility of the header.
  withHeader: true,
  headerProps: {
    label: "Save File As",
  },

  // The text to display on the main action button.
  submitButtonLabel: "Save",
  // Enables and sets the text for the cancel button.
  withCancelButton: true,
  cancelButtonLabel: "Cancel",

  // Enables breadcrumbs for easy navigation through folders.
  withBreadCrumbs: true,
  // Enables the search functionality.
  withSearch: true,
  // Allows users to create new folders within the selector.
  withCreate: true,

  // Adds an input field in the footer, typically for a filename.
  withFooterInput: true,
  footerInputHeader: "File name",
  currentFooterInputValue: "Untitled Document",

  // A callback function to determine if the submit button should be disabled.
  getIsDisabled: ({ isRoot }) => {
    // In this case, disable the submit button if the user is in the root directory.
    return isRoot;
  },

  // A callback function that is executed when the user clicks the submit button.
  onSubmit: (payload) => {
    // The `payload` object contains information about the selected location and filename.
    console.log("File save details:", payload);

    // After submission, close the selector and show a confirmation message.
    return {
      actions: [Actions.closeSelector, Actions.showToast],
      toastProps: [{
        type: ToastType.success,
        title: `File saved as ${payload.fileName}`,
      }],
    };
  },
};
```

***

### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `isMultiSelect?` | `boolean` | If true, allows multiple items to be selected. |
| `withBreadCrumbs?` | `boolean` | If true, displays breadcrumb navigation. |
| `currentFolderId?` | `string` \| `number` | The ID of the folder to open by default. |
| `isRoomsOnly?` | `boolean` | If true, displays only rooms at the root level. |
| `openRoot?` | `boolean` | If true, opens the root directory by default. |
| `descriptionText?` | `string` | A descriptive text displayed within the selector. |
| `withFooterInput?` | `boolean` | If true, displays an input field in the footer. |
| `footerInputHeader?` | `string` | The header text for the footer input. |
| `currentFooterInputValue?` | `string` | The initial value for the footer input. |
| `withFooterCheckbox?` | `boolean` | If true, displays a checkbox in the footer. |
| `footerCheckboxLabel?` | `string` | The label for the footer checkbox. |
| `filterParam?` | [`FilterType`](../../enums/Utility.md) | File type filter. |
| `getIsDisabled()` | (`params`: \{ `selectedItemId`: `string` \| `number` \| `undefined`; `selectedItemType?`: `"rooms"` \| `"files"`; `selectedItemSecurity?`: \| [`FilesSecurity`](../../enums/Files.md#filessecurity) \| [`Security`](../../enums/Security.md); `selectedFileInfo`: \| \{ `id`: `string` \| `number`; `title`: `string`; `fileExst?`: [`FilesExst`](../../enums/Files.md#filesexst) \| `string`; \} \| `null`; `isFirstLoad`: `boolean`; `isDisabledFolder?`: `boolean`; `isRoot`: `boolean`; \}) => `boolean` | A callback function to determine if the submit button should be disabled. |
| `onSubmit()?` | (`params`: \{ `selectedItemId`: `string` \| `number` \| `undefined`; `folderTitle`: `string`; `fileName`: `string`; `isChecked`: `boolean`; `selectedFileInfo`: \| \{ `id`: `string` \| `number`; `title`: `string`; `fileExst?`: [`FilesExst`](../../enums/Files.md#filesexst) \| `string`; \} \| `null`; `breadCrumbs?`: [`TBreadCrumbItem`](#tbreadcrumbitem)[]; \}) => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the submit button is clicked. |
| `onSelect()?` | (`id`: `string` \| `number` \| `undefined`) => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when an item is selected. |

### See

 - [TSelectorHeader](#tselectorheader) - Header configuration properties
 - [TSelectorBaseProps](#tselectorbaseprops) - Common base properties (id, className)
 - [TSelectorLifecycleEvents](#tselectorlifecycleevents) - Lifecycle callbacks (onLoad, onClose)
 - [TSelectorSearchCreate](#tselectorsearchcreate) - Search and create functionality
 - [TSelectorCancelButton](#tselectorcancelbutton) - Cancel button properties
 - [TSelectorSubmitButton](#tselectorsubmitbutton) - Submit button properties (partial)

## TGroupsSelector

```ts
type TGroupsSelector = TSelectorHeader & TSelectorBaseProps & TSelectorLifecycleEvents & {
  onSubmit: (params: {
     selectedIds: (string | number)[];
     fileName?: string;
     isFooterCheckboxChecked?: boolean;
  }) => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IGroupsSelector.ts#L57)

Defines the properties for a group selector component.

### Example

```typescript
// This example shows how to set up a group selector with a custom header and submit logic.

const groupsSelectorProps: TGroupsSelector = {
  // Defines the text and visibility of the header.
  withHeader: true,
  headerProps: {
    label: "Select Groups",
  },

  // A callback function that is executed when the user clicks the submit button.
  onSubmit: (payload) => {
    // The `payload` object contains the `selectedIds` of the chosen groups.
    console.log("Selected groups:", payload.selectedIds);

    // After submission, close the selector and display a toast notification.
    return {
      actions: [Actions.closeSelector, Actions.showToast],
      toastProps: [{
        type: ToastType.success,
        title: "Groups selected successfully",
      }],
    };
  },
};
```

***

### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `onSubmit()` | (`params`: \{ `selectedIds`: (`string` \| `number`)[]; `fileName?`: `string`; `isFooterCheckboxChecked?`: `boolean`; \}) => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the submit button is clicked. |

### See

 - [TSelectorHeader](#tselectorheader) - Header configuration properties
 - [TSelectorBaseProps](#tselectorbaseprops) - Common base properties (id, className)
 - [TSelectorLifecycleEvents](#tselectorlifecycleevents) - Lifecycle callbacks (onLoad, onClose)

## TPeopleSelector

```ts
type TPeopleSelector = TSelectorHeader & TSelectorCancelButton & TSelectorSubmitButton & TSelectorBaseProps & TSelectorLifecycleEvents & TSelectorEmptyScreen & {
  targetEntityType?: "file" | "folder" | "room";
  withGroups?: boolean;
  isGroupsOnly?: boolean;
  withGuests?: boolean;
  isGuestsOnly?: boolean;
  isMultiSelect?: boolean;
  currentUserId?: string;
  excludeItems?: string[];
  disableInvitedUsers?: string[];
  disableDisabledUsers?: boolean;
  roomId?: string | number;
  alwaysShowFooter?: boolean;
  onlyRoomMembers?: boolean;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IPeopleSelector.ts#L84)

Defines the properties for a user and group selector component.

### Example

```typescript
// This example demonstrates how to configure a selector for choosing users and groups.
// It allows multi-selection, includes groups, and provides clear labels and descriptions.

const peopleSelectorProps: TPeopleSelector = {
  // Defines the text and visibility of the header.
  withHeader: true,
  headerProps: {
    label: "Share Document",
  },

  // The text to display on the main action button.
  submitButtonLabel: "Share",
  // The text for the cancel button.
  cancelButtonLabel: "Cancel",

  // If true, the footer with action buttons is always visible.
  alwaysShowFooter: true,

  // Custom text to display when no users or groups are found.
  emptyScreenHeader: "No users found",
  emptyScreenDescription: "There are no users or groups matching your search.",

  // Allows the selection of multiple users and groups.
  isMultiSelect: true,
  // Includes groups in the selection list.
  withGroups: true,

  // A callback function that is executed when the user clicks the submit button.
  onSubmit: (payload) => {
    // The `payload` object contains the `selectedIds` of the chosen users and groups.
    console.log("Selected users and groups:", payload.selectedIds);

    // After submission, close the selector and show a confirmation toast.
    return {
      actions: [Actions.closeSelector, Actions.showToast],
      toastProps: [{
        type: ToastType.success,
        title: "Document shared successfully",
      }],
    };
  },
};
```

***

### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `targetEntityType?` | `"file"` \| `"folder"` \| `"room"` | The type of entity for which the user is being selected (e.g., for sharing a file). **Example** `"file" \| "folder" \| "room"` |
| `withGroups?` | `boolean` | If true, allows the selection of groups. **Default** `false` |
| `isGroupsOnly?` | `boolean` | If true, displays only groups in the selector. **Default** `false` |
| `withGuests?` | `boolean` | If true, includes guest users in the selector. **Default** `false` |
| `isGuestsOnly?` | `boolean` | If true, displays only guest users in the selector. **Default** `false` |
| `isMultiSelect?` | `boolean` | If true, allows multiple users and/or groups to be selected. **Default** `false` |
| `currentUserId?` | `string` | The ID of the current user, to be excluded from the list. **Example** `"user-1234"` |
| `excludeItems?` | `string`[] | An array of user or group IDs to exclude from the list. **Example** `["user-1234", "group-5678"]` |
| `disableInvitedUsers?` | `string`[] | An array of user IDs that are already invited and should be disabled. **Example** `["user-1234", "user-5678"]` |
| `disableDisabledUsers?` | `boolean` | If true, users with a 'disabled' status will not be displayed. **Default** `false` |
| `roomId?` | `string` \| `number` | The ID of the room to which the selector is related. **Example** `"room-1234"` |
| `alwaysShowFooter?` | `boolean` | If true, the footer will always be visible, even if no users are selected. **Default** `false` |
| `onlyRoomMembers?` | `boolean` | If true, displays only the members of the current room. **Default** `false` |

### See

 - [TSelectorHeader](#tselectorheader) - Header configuration properties
 - [TSelectorCancelButton](#tselectorcancelbutton) - Cancel button properties
 - [TSelectorSubmitButton](#tselectorsubmitbutton) - Submit button properties
 - [TSelectorBaseProps](#tselectorbaseprops) - Common base properties (id, className)
 - [TSelectorLifecycleEvents](#tselectorlifecycleevents) - Lifecycle callbacks (onLoad, onClose)
 - [TSelectorEmptyScreen](#tselectoremptyscreen) - Empty state messages

## TRoomSelector

```ts
type TRoomSelector = TSelectorHeader & TSelectorCancelButton & TSelectorBaseProps & TSelectorLifecycleEvents & TSelectorEmptyScreen & TSelectorSearchCreate & Pick<TSelectorSubmitButton, "submitButtonLabel"> & {
  isMultiSelect?: boolean;
  roomType?:   | RoomsType
     | RoomsType[];
  searchArea?: RoomSearchArea;
  excludeItems?: (number | string | undefined)[];
  createDefineRoomLabel?: string;
  createDefineRoomType?: RoomsType;
  onSubmit?: (selectedIds: (string | number)[]) => TReturnMessage;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Selector/IRoomSelector.ts#L96)

Defines the properties for a room selector component.

### Example

```typescript
// This example demonstrates how to create a room selector that allows users to
// select multiple public or custom rooms. It includes search and create functionalities.

const roomSelectorProps: TRoomSelector = {
  // Defines the text and visibility of the header.
  withHeader: true,
  headerProps: {
    label: "Select a Room",
  },

  // The text to display on the main action button.
  submitButtonLabel: "Open Rooms",
  // Enables and sets the text for the cancel button.
  withCancelButton: true,
  cancelButtonLabel: "Close",

  // Custom text to display when no rooms are found.
  emptyScreenHeader: "No Rooms Available",
  emptyScreenDescription: "You can create a new room or try a different search.",

  // Allows the selection of multiple rooms.
  isMultiSelect: true,
  // Filters the list to show only public and custom rooms.
  roomType: [RoomsType.PublicRoom, RoomsType.CustomRoom],
  // Sets the search scope to active rooms.
  searchArea: RoomSearchArea.Active,

  // Enables the search bar and the create room button.
  withCreate: true,
  withSearch: true,
  // Label for the create room button.
  createDefineRoomLabel: "Create a new collaboration room",
  // Default type for a newly created room.
  createDefineRoomType: RoomsType.EditingRoom,

  // A callback function that is executed when the user clicks the submit button.
  onSubmit: (selectedIds) => {
    // The `selectedIds` parameter is an array of the selected room IDs.
    console.log("Selected rooms:", selectedIds);

    // After submission, close the selector and show a success message.
    return {
      actions: [Actions.closeSelector, Actions.showToast],
      toastProps: [{
        type: ToastType.success,
        title: `${selectedIds.length} rooms selected`,
      }],
    };
  },
};
```

***

### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `isMultiSelect?` | `boolean` | If true, allows multiple rooms to be selected. |
| `roomType?` | \| [`RoomsType`](../../enums/Rooms.md#roomstype) \| [`RoomsType`](../../enums/Rooms.md#roomstype)[] | The type of rooms to display (e.g., 'collaboration', 'custom'). Can be a single type or an array of types. |
| `searchArea?` | [`RoomSearchArea`](../../enums/Rooms.md#roomsearcharea) | The area to search for rooms within (e.g., 'myRooms', 'allRooms'). |
| `excludeItems?` | (`number` \| `string` \| `undefined`)[] | An array of room IDs to exclude from the list. |
| `createDefineRoomLabel?` | `string` | The label for the 'create new room' option. |
| `createDefineRoomType?` | [`RoomsType`](../../enums/Rooms.md#roomstype) | The default type for newly created rooms. |
| `onSubmit()?` | (`selectedIds`: (`string` \| `number`)[]) => [`TReturnMessage`](../utils.md#treturnmessage) | A callback function that is triggered when the submit button is clicked. |

### See

 - [TSelectorHeader](#tselectorheader) - Header configuration properties
 - [TSelectorCancelButton](#tselectorcancelbutton) - Cancel button properties
 - [TSelectorBaseProps](#tselectorbaseprops) - Common base properties (id, className)
 - [TSelectorLifecycleEvents](#tselectorlifecycleevents) - Lifecycle callbacks (onLoad, onClose)
 - [TSelectorEmptyScreen](#tselectoremptyscreen) - Empty state messages
 - [TSelectorSearchCreate](#tselectorsearchcreate) - Search and create functionality
 - [TSelectorSubmitButton](#tselectorsubmitbutton) - Submit button properties (partial)

