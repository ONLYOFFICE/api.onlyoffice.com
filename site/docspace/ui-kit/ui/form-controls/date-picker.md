---
description: "Button that becomes a removable chip once a date is chosen, with a calendar behind it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/date-picker/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# DatePicker

Button that becomes a removable chip once a date is chosen, with a calendar behind it. It is
[`Calendar`](./calendar.md) wrapped in an [`AddButton`](../interactive-elements/add-button.md) and a
[`SelectedItem`](../data-display/selected-item.md).

<ThemedImage alt="DatePicker" width={123} sources={{ light: require('./date-picker--primary-light.png').default, dark: require('./date-picker--primary-dark.png').default }} />

## Use this when / not when

- Use for an optional date in a filter or a form, where "no date" is a normal state and the
  chosen date should read as a removable chip.
- Not for a date that is always present. The unchosen state is a "Select date" button, not an
  empty field, and there is no label or border.
- Not for a date **and** a time — [`DateTimePicker`](./date-time-picker.md) is that.
- Not when you want the grid on the page; use [`Calendar`](./calendar.md) directly.

## Import

```ts
import { DatePicker } from "@onlyoffice/apps-ui-kit/components/date-picker";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`.

Dates are Luxon `DateTime` objects.


## Stories

### Default

The picker as a form shows it before a date is chosen: click **Select date** to open the calendar, pick a day to turn the button into a chip, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={123} sources={{ light: require('./date-picker--default-light.png').default, dark: require('./date-picker--default-dark.png').default }} />

### With Initial Date

DatePicker initialized with the current date. The selected date appears as a chip that can be removed.

<ThemedImage alt="With Initial Date" width={147} sources={{ light: require('./date-picker--with-initial-date-light.png').default, dark: require('./date-picker--with-initial-date-dark.png').default }} />

### Future Dates Only

Restricts selection to future dates only by setting minDate to today. Past dates appear disabled in the calendar.

<ThemedImage alt="Future Dates Only" width={164} sources={{ light: require('./date-picker--future-dates-only-light.png').default, dark: require('./date-picker--future-dates-only-dark.png').default }} />

### Specific Year Range

Constrains the calendar to a specific year (2023). Only dates within January 1 - December 31, 2023 are selectable.

<ThemedImage alt="Specific Year Range" width={187} sources={{ light: require('./date-picker--specific-year-range-light.png').default, dark: require('./date-picker--specific-year-range-dark.png').default }} />

### Without Calendar Icon

The calendar icon in the selected date chip can be hidden with showCalendarIcon=\{false\}.

<ThemedImage alt="Without Calendar Icon" width={123} sources={{ light: require('./date-picker--without-calendar-icon-light.png').default, dark: require('./date-picker--without-calendar-icon-dark.png').default }} />

### Without Clear Button

For a date the form requires: the chip has no cross, so a date can be replaced by clicking the chip and picking another day, but not removed (`hideCross`).

<ThemedImage alt="Without Clear Button" width={135} sources={{ light: require('./date-picker--without-clear-button-light.png').default, dark: require('./date-picker--without-clear-button-dark.png').default }} />

### Aligned To Right Edge

For a picker near the right edge of the window, such as the last column of a toolbar: click **Select date** and the calendar opens leftwards from the right edge of the nearest positioned container, here the window, instead of running off the screen (`autoPosition`).

<ThemedImage alt="Aligned To Right Edge" width={123} sources={{ light: require('./date-picker--aligned-to-right-edge-light.png').default, dark: require('./date-picker--aligned-to-right-edge-dark.png').default }} />

### End Of Day Value

For an inclusive end of a period, such as a "valid until" date: pick a day and the value above ends in 23:59:59.999, so the whole day is covered (`useMaxTime`). Without the prop the day is reported at the current time of day.

<ThemedImage alt="End Of Day Value" width={1014} sources={{ light: require('./date-picker--end-of-day-value-light.png').default, dark: require('./date-picker--end-of-day-value-dark.png').default }} />

### Right To Left

The picker under a right-to-left interface: the chip starts at the right edge, with the calendar icon on its right and the cross on its left, and the calendar opens under the right end of the picker. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={150} sources={{ light: require('./date-picker--right-to-left-light.png').default, dark: require('./date-picker--right-to-left-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. They are set on one wrapper around two pickers. The first holds the first day of this month, so it shows the chip; the second has no date, so it shows the **Select date** button. Open either calendar to see the calendar variables: both start at the first of this month (`minDate`), so the days of the previous month and the left arrow show their disabled colours, and the first picker's chosen day differs from today. Hover the chip, the button and a day to see the hover variables.

<ThemedImage alt="Css Customization" width={298} sources={{ light: require('./date-picker--css-customization-light.png').default, dark: require('./date-picker--css-customization-dark.png').default }} />

## Minimal example

**`outerDate` is what makes the chosen date stick.** Hold the date yourself, set it from
`onChange`, and pass it back in.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import { DatePicker } from "@onlyoffice/apps-ui-kit/components/date-picker";

export function DueDateFilter() {
  const [due, setDue] = useState<DateTime | null>(null);

  return (
    <DatePicker
      locale="en"
      openDate={DateTime.now()}
      outerDate={due}
      onChange={setDue}
      selectDateText="Due date"
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `locale` | `string` | BCP 47 tag the calendar and the chip's date are written in. |
| `onChange` | `(d: null \| DateTime) => void` | Called with the chosen date, and with `null` when the cross clears it. Feed the value back through `outerDate` or the chip never appears. |
| `openDate` | `Date \| DateTime<boolean>` | Month the calendar opens on. |
| `autoPosition`? | `boolean` | Whether the calendar flips to the right edge when there is less than 340px of room to its right. Measured when it opens, not while it is open. |
| `className`? | `string` | Applied to the outermost element. |
| `hideCross`? | `boolean` | Whether the chip's clearing cross is hidden. |
| `id`? | `string` | Applied to the outermost element. |
| `initialDate`? | `Nullable<string \| DateTime<boolean> \| Date>` | Date the component starts with. On its own it does not survive the first effect — pass `outerDate` as well, or instead. |
| `isMobile`? | `boolean` | Whether the calendar uses its larger touch layout. |
| `maxDate`? | `Date \| DateTime<boolean>` | Latest selectable day in the calendar. |
| `minDate`? | `Date \| DateTime<boolean>` | Earliest selectable day in the calendar. |
| `outerDate`? | `DateTime<boolean> \| null` | The chosen date, held by you. This is the prop that actually controls what is displayed: the component copies it into its own state on every render and clears that state whenever this is empty. |
| `selectDateText`? | `string` | Text of the button shown while no date is chosen. Default: `"Select date"`. |
| `showCalendarIcon`? | `boolean` | Whether a calendar glyph is drawn before the date in the chip. Default: `true`. |
| `testId`? | `string` | `data-testid` of the outermost element. Default: `"date-picker"`. |
| `useMaxTime`? | `boolean` | Whether a picked day is reported at the end of that day rather than at midnight. |

</APITable>

## Recipes

### Clearing, and a bounded range

`onChange` is called with `null` when the chip's cross is clicked; `hideCross` removes that
cross when the date must not be cleared.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import { DatePicker } from "@onlyoffice/apps-ui-kit/components/date-picker";

export function DeliveryDate() {
  const [date, setDate] = useState<DateTime | null>(null);

  return (
    <div>
      <DatePicker
        locale="en"
        openDate={DateTime.now()}
        minDate={DateTime.now()}
        maxDate={DateTime.now().plus({ months: 3 })}
        outerDate={date}
        onChange={setDate}
        selectDateText="Choose a delivery date"
        autoPosition
      />
      {date ? <p>Delivering {date.toFormat("dd MMM yyyy")}</p> : null}
    </div>
  );
}
```

## Behaviour the types don't state

- **`outerDate` is the real value prop, and it is optional in the type.** An effect clears the
  component's own date whenever `outerDate` is empty, so without it the chip never appears: you
  pick a day, `onChange` fires, and the control drops straight back to its button. `initialDate`
  alone does not survive that effect either.
- **The chosen date is formatted `dd MMM yyyy` and that is fixed.** There is no format prop; the
  month name follows `locale`.
- **The calendar closes on any pick.** Choosing a day calls `onChange` and closes, so there is no
  way to change your mind inside the popup.
- **Outside clicks are caught in the capture phase on the document**, with an exception for
  scrollbar thumbs so that dragging the calendar's scrollbar does not dismiss it.
- **`autoPosition` is measured once, as the calendar opens**, against a fixed 340px of room to
  the right. Resizing the window while it is open does not move it.
- **`useMaxTime` only applies while nothing is chosen** — once a date is held, the flag is passed
  to the calendar as `false`, so re-picking keeps the existing time instead of the end of day.
- The wrapper has `role="presentation"`, and the unchosen state is a `<div role="button">` around
  an `AddButton`, so the button is nested inside a second button role.
- There is no disabled state and no error state; neither is a prop.

## CSS variables

DatePicker's own stylesheet exposes nothing that reaches the rendered picker; its look comes from
the three components inside it, so their variables, set on any ancestor, restyle it. The ones
that show here:

<APITable>

| Variable                                                                            | Default              | Effect                                                                                                           |
| ----------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `--add-button-bg`, `-bg-hover`, `-bg-active`                                        | theme                | Background of the square before the **Select date** text, at rest, hovered and pressed                           |
| `--add-button-icon-color`, `-icon-color-hover`                                      | theme                | Colour of the calendar glyph in that square, at rest and hovered                                                 |
| `--add-button-radius`                                                               | `3px`                | Corner radius of that square                                                                                     |
| `--selected-item-bg`, `--selected-item-bg-hover`                                    | theme                | Background of the chip that shows the chosen date, at rest and hovered                                           |
| `--selected-item-radius`                                                            | `3px`                | Corner radius of the chip                                                                                        |
| `--calendar-bg`, `--calendar-border`, `--calendar-shadow`                           | theme                | Background, one-pixel border colour and shadow of the calendar                                                   |
| `--calendar-radius`                                                                 | `6px`                | Corner radius of the calendar                                                                                    |
| `--calendar-title`, `--calendar-title-size`                                         | theme, `18px`        | Colour and font size of the month and year title; the size is ignored in the mobile layout                       |
| `--calendar-outline`, `--calendar-arrow`, `--calendar-disabled-arrow`               | theme                | Ring of the arrow buttons, their chevrons, and the chevron of an arrow that cannot go further                    |
| `--calendar-weekday`                                                                | theme                | Colour of the weekday labels                                                                                     |
| `--calendar-accent`, `--calendar-selected-text`                                     | theme, `#ffffff`     | Fill of today (also the chosen day's ring, the arrow ring on hover and the title chevron) and today's text on it |
| `--calendar-focused-bg`, `--calendar-focused-text`                                  | `transparent`, theme | Background and text colour of the chosen day                                                                     |
| `--calendar-current-radius`, `--calendar-focused-radius`, `--calendar-hover-radius` | `50%`                | Corner radius of today, of the chosen day and of a day under the pointer                                         |
| `--calendar-hover-bg`                                                               | theme                | Background of a day under the pointer                                                                            |
| `--calendar-past`, `--calendar-disabled`                                            | theme                | Text colour of the neighbouring months' days, and of the days outside `minDate` and `maxDate`                    |

</APITable>

The full lists, with the caveats, are in [`AddButton`](../interactive-elements/add-button.md#css-variables),
[`SelectedItem`](../data-display/selected-item.md#css-variables) and
[`Calendar`](./calendar.md#css-variables). The calendar glyph inside the chip is filled
with a fixed grey that no variable reaches.

## Accessibility

- The "select date" control is a `<div role="button">` with `tabIndex={0}` and an `aria-label`,
  so it is focusable — but it has no key handler, so Enter and Space do not open the calendar.
- **The calendar itself cannot be used from the keyboard at all** — see
  [`Calendar`](./calendar.md). Taken together, a keyboard-only user cannot choose a date.
- The chip's clearing cross comes from [`SelectedItem`](../data-display/selected-item.md) and inherits
  whatever name that gives it.
- `aria-expanded` is set on the select-date control, but not on the chip, so once a date is
  chosen nothing announces that the calendar can be reopened.

## Test ids

<APITable>

| Element                   | `data-testid`              |
| ------------------------- | -------------------------- |
| The wrapper               | `date-picker`, or `testId` |
| The "select date" control | `date-selector`            |
| The chip's label          | `selected-label`           |
| The calendar glyph        | `calendar-icon`            |

</APITable>

## Related

- [`Calendar`](./calendar.md) — the grid this opens.
- [`DateTimePicker`](./date-time-picker.md) — this plus a time.
- [`SelectedItem`](../data-display/selected-item.md) — the chip the chosen date is drawn as.
