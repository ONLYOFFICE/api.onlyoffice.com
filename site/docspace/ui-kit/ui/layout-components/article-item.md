---
description: "One catalog entry of the Article panel's body: an icon, a label and an optional badge."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/article/item/ArticleItem.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ArticleItem

One catalog entry of the Article panel's body: an icon, a label and an optional badge. The Article page describes it in full.

<ThemedImage alt="ArticleItem" width={296} sources={{ light: require('./article-item--primary-light.png').default, dark: require('./article-item--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `icon`? | `stringundefined` | Catalog item icon. |
| `text` | `string` | Catalog item text. |
| `showText`? | `booleanundefined` | Sets the catalog item to display text. |
| `onClick`? | `((e: MouseEvent<Element, MouseEvent>, id?: string \| undefined) => void) \| undefined` | Invokes a function upon clicking on a catalog item. |
| `onDrop`? | `((id?: string \| undefined, text?: string \| undefined, item?: ArticleItemType \| undefined) => void) \| undefined` | Invokes a function upon dragging and dropping a catalog item. |
| `showInitial`? | `booleanundefined` | Tells when the catalog item should display initial on icon, text should be hidden. |
| `isEndOfBlock`? | `booleanundefined` | Sets the catalog item as end of block. |
| `isActive`? | `booleanundefined` | Sets catalog item active. |
| `isDragging`? | `booleanundefined` | Sets the catalog item available for dragndrop. |
| `isDragActive`? | `booleanundefined` | Sets the catalog item active for dragndrop. |
| `showBadge`? | `booleanundefined` | Sets the catalog item to display badge. |
| `labelBadge`? | `stringnumberundefined` | Label in catalog item badge. |
| `iconBadge`? | `stringundefined` | Sets custom badge icon. |
| `onClickBadge`? | `((id?: string \| undefined) => void) \| undefined` | Invokes a function upon clicking on the catalog item badge. |
| `isHeader`? | `booleanundefined` | Sets the catalog item to be displayed as a header. |
| `folderId`? | `stringundefined` | Accepts folder id. |
| `badgeTitle`? | `stringundefined` | Title for the badge tooltip. |
| `badgeComponent`? | `ReactNode` | Custom badge component. |
| `title`? | `stringundefined` | Title for the item tooltip. |
| `linkData` | `TArticleLinkData` | Link data for routing. |
| `item`? | `ArticleItemTypeundefined` | Item data. |
| `iconNode`? | `ReactNode` | Catalog item icon for SSR. |
| `withAnimation`? | `booleanundefined` |  |
| `dataTooltipId`? | `stringundefined` |  |
| `isDisabled`? | `booleanundefined` |  |

</APITable>

## Stories

### Default

<ThemedImage alt="Default" width={296} sources={{ light: require('./article-item--default-light.png').default, dark: require('./article-item--default-dark.png').default }} />

### Icon Only

<ThemedImage alt="Icon Only" width={296} sources={{ light: require('./article-item--icon-only-light.png').default, dark: require('./article-item--icon-only-dark.png').default }} />

### With Badge

<ThemedImage alt="With Badge" width={296} sources={{ light: require('./article-item--with-badge-light.png').default, dark: require('./article-item--with-badge-dark.png').default }} />

### With Custom Badge

<ThemedImage alt="With Custom Badge" width={296} sources={{ light: require('./article-item--with-custom-badge-light.png').default, dark: require('./article-item--with-custom-badge-dark.png').default }} />

### Active

<ThemedImage alt="Active" width={296} sources={{ light: require('./article-item--active-light.png').default, dark: require('./article-item--active-dark.png').default }} />

### Dragging

<ThemedImage alt="Dragging" width={296} sources={{ light: require('./article-item--dragging-light.png').default, dark: require('./article-item--dragging-dark.png').default }} />

### Drag Target

<ThemedImage alt="Drag Target" width={296} sources={{ light: require('./article-item--drag-target-light.png').default, dark: require('./article-item--drag-target-dark.png').default }} />

### Header

<ThemedImage alt="Header" width={296} sources={{ light: require('./article-item--header-light.png').default, dark: require('./article-item--header-dark.png').default }} />

### End Of Block

<ThemedImage alt="End Of Block" width={296} sources={{ light: require('./article-item--end-of-block-light.png').default, dark: require('./article-item--end-of-block-dark.png').default }} />

### Css Customization

The row's variables set on one wrapper -- they are listed under CSS variables on the Article page.

<ThemedImage alt="Css Customization" width={296} sources={{ light: require('./article-item--css-customization-light.png').default, dark: require('./article-item--css-customization-dark.png').default }} />
