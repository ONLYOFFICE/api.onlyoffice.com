# IToast

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IToast.ts#L80)

A brief notification that appears on the screen.

To display a toast, return an [`IMessage`](../utils.md#imessage) with
[`Actions.showToast`](../../enums/Actions.md#showtoast) in `actions`
and pass the toast configuration in the `toastProps` array.

![toast](/assets/images/docspace/toast.png#gh-light-mode-only)![toast](/assets/images/docspace/toast.dark.png#gh-dark-mode-only)

## Examples

Auto-dismissing success notification

```typescript
const saveSuccess: IToast = {
  type: ToastType.success,
  title: "Changes saved successfully",
  withCross: false,
  timeout: 3000 // Dismiss after 3 seconds
}
```

Persistent error notification with manual dismiss

```typescript
const errorToast: IToast = {
  type: ToastType.error,
  title: "Failed to upload file. Please try again.",
  withCross: true,
  timeout: 0 // Stay until manually dismissed
}
```

Session expiration warning with medium duration

```typescript
const warningToast: IToast = {
  type: ToastType.warning,
  title: "Your session will expire in 5 minutes",
  withCross: true,
  timeout: 5000
}
```

Temporary update notification

```typescript
const infoToast: IToast = {
  type: ToastType.info,
  title: "New updates are available",
  withCross: false,
  timeout: 4000
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `type` | [`ToastType`](#toasttype) | Defines the toast type, which determines the toast color and icon |
| `title` | `string` | Defines the toast title |
| `withCross?` | `boolean` | Specifies whether the "Close" button will be displayed in the toast to close it (true). Otherwise, the toast will disappear after clicking on any toast area (false). |
| `timeout?` | `number` | Defines the time (in milliseconds) for showing the toast. Setting the value to 0 allows the toast to be displayed continuously until clicking on it. |

```mdx-code-block
</APITable>
```

## ToastType

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IToast.ts#L105)

The supported toast types.

### Enumeration Members

#### success

```ts
success: "success";
```

Success toast with green color scheme

#### error

```ts
error: "error";
```

Error toast with red color scheme

#### warning

```ts
warning: "warning";
```

Warning toast with yellow color scheme

#### info

```ts
info: "info";
```

Info toast with blue color scheme

