---
description: "TableGroupMenu is the toolbar that takes the place of the table header while rows are selected, with a select-all checkbox and the actions that apply to the selection.\n\nThe Table README describes it in full."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/table/table-group-menu/TableGroupMenu.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TableGroupMenu

TableGroupMenu is the toolbar that takes the place of the table header while rows are selected, with a select-all checkbox and the actions that apply to the selection.

The Table README describes it in full.

<ThemedImage alt="TableGroupMenu" width={1014} sources={{ light: require('./tablegroupmenu--primary-light.png').default, dark: require('./tablegroupmenu--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `isChecked` | `boolean` | Ticks the select-all checkbox. |
| `isIndeterminate` | `boolean` | Draws the select-all checkbox partly ticked, for a selection that covers some rows but not all. |
| `headerMenu` | `TGroupMenuItem[]` | The action buttons, in order; an entry whose disabled is set is left out. |
| `checkboxOptions`? | `ReactElement<{ children?: ReactNode; }, string \| JSXElementConstructor<any>> \| undefined` | Element whose children become the options of the menu the arrow after the checkbox opens. |
| `onClick`? | `(() => void) \| undefined` | Called on a click anywhere in the toolbar. |
| `onChange` | `(isChecked: boolean) => void` | Called with the new state when the select-all checkbox is clicked. |
| `checkboxMargin`? | `stringundefined` | Space before the checkbox or the label as a CSS length, such as 12px; tablets and phones always use 24px. Default: `28px`. |
| `withoutInfoPanelToggler` | `boolean` | Leaves out the info panel button at the end. |
| `isInfoPanelVisible`? | `booleanundefined` | Draws the info panel button in the accent colour on a round background. Default: `false`. |
| `isMobileView`? | `booleanundefined` | Opens the selection menu and the action menus in their phone form. Default: `false`. |
| `isBlocked`? | `booleanundefined` | Greys every action button out and ignores clicks on them. Default: `false`. |
| `toggleInfoPanel`? | `(() => void) \| undefined` | Called when the info panel button is clicked. |
| `withComboBox`? | `booleanundefined` | Shows the arrow after the checkbox that opens checkboxOptions. Default: `true`. |
| `headerLabel`? | `stringundefined` | Text shown in place of the select-all checkbox. |
| `isCloseable`? | `booleanundefined` | Adds a cross before the info panel button; it comes together with onCloseClick. Default: `false`. |
| `onCloseClick`? | `(() => void) \| undefined` | Called when the cross is clicked. |

</APITable>

## Stories

### Default

The toolbar a user sees after selecting rows, with the actions that apply to them; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./tablegroupmenu--default-light.png').default, dark: require('./tablegroupmenu--default-dark.png').default }} />

### Checked

Every row is selected, so the checkbox is ticked and a click on it clears the selection (`isChecked`).

<ThemedImage alt="Checked" width={1014} sources={{ light: require('./tablegroupmenu--checked-light.png').default, dark: require('./tablegroupmenu--checked-dark.png').default }} />

### Indeterminate

Some rows but not all are selected, so the checkbox is partly ticked and a click on it selects the rest (`isIndeterminate`).

<ThemedImage alt="Indeterminate" width={1014} sources={{ light: require('./tablegroupmenu--indeterminate-light.png').default, dark: require('./tablegroupmenu--indeterminate-dark.png').default }} />

### With Header Label

A text in place of the checkbox, for a toolbar that acts on something other than a list of rows the user can select all of (`headerLabel`).

<ThemedImage alt="With Header Label" width={1014} sources={{ light: require('./tablegroupmenu--with-header-label-light.png').default, dark: require('./tablegroupmenu--with-header-label-dark.png').default }} />

### Closeable

A cross before the info panel button, for a toolbar the user can dismiss without clearing the selection by hand (`isCloseable`, `onCloseClick`).

<ThemedImage alt="Closeable" width={1014} sources={{ light: require('./tablegroupmenu--closeable-light.png').default, dark: require('./tablegroupmenu--closeable-dark.png').default }} />

### Blocked

Every action greyed out and ignoring clicks while an operation on the selection is still running (`isBlocked`); the checkbox stays usable.

<ThemedImage alt="Blocked" width={1014} sources={{ light: require('./tablegroupmenu--blocked-light.png').default, dark: require('./tablegroupmenu--blocked-dark.png').default }} />

### Info Panel Open

While the info panel is open, its button at the end is drawn in the accent colour on a round background, so the user sees that a click closes the panel (`isInfoPanelVisible`).

<ThemedImage alt="Info Panel Open" width={1014} sources={{ light: require('./tablegroupmenu--info-panel-open-light.png').default, dark: require('./tablegroupmenu--info-panel-open-dark.png').default }} />

### Right To Left

In a right-to-left interface the checkbox moves to the right edge, the actions follow it leftwards and the info panel button sits at the left edge with its icon mirrored.

<ThemedImage alt="Right To Left" width={1014} sources={{ light: require('./tablegroupmenu--right-to-left-light.png').default, dark: require('./tablegroupmenu--right-to-left-dark.png').default }} />

### Css Customization

The variable set on a wrapper -- it is listed under CSS variables in the Table README.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./tablegroupmenu--css-customization-light.png').default, dark: require('./tablegroupmenu--css-customization-dark.png').default }} />
