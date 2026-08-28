# ISkeleton

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ISkeleton.ts#L60)

A component that is used to hide components during uploading.

![skeleton](/assets/images/docspace/skeleton.png#gh-light-mode-only)![skeleton](/assets/images/docspace/skeleton.dark.png#gh-dark-mode-only)

## Examples

Circular avatar placeholder for loading states

```typescript
const avatarSkeleton: ISkeleton = {
  width: "40px",
  height: "40px",
  borderRadius: "50%"
}
```

Responsive content card loading placeholder

```typescript
const cardSkeleton: ISkeleton = {
  width: "100%",
  height: "120px",
  borderRadius: "8px"
}
```

Text line loading animation

```typescript
const textSkeleton: ISkeleton = {
  width: "80%",
  height: "16px",
  borderRadius: "4px"
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `width` | `string` | Defines the skeleton width |
| `height` | `string` | Defines the skeleton height |
| `borderRadius?` | `string` | Defines the skeleton border radius |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
