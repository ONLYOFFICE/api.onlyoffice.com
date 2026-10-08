---
description: "Month grid for picking a day, with month and year views behind it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/calendar/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Calendar

Month grid for picking a day, with month and year views behind it. It is always visible — it
has no trigger, no popup and no visibility prop.

<ThemedImage alt="Calendar" width={378} sources={{ light: require('./calendar--primary-light.png').default, dark: require('./calendar--primary-dark.png').default }} />

## Use this when / not when

- Use when the grid should be on the page permanently, or inside a popup you are positioning
  yourself.
- Prefer [`DatePicker`](./date-picker.md) for a form field: it is this calendar behind a
  button and a chip, with opening, closing and clearing handled.
- Not for a date **and** a time — [`DateTimePicker`](./date-time-picker.md) is that.
- Not for a range. Only one day can be highlighted; two calendars and your own state are the way
  to a range.

## Import

```ts
import { Calendar } from "@onlyoffice/apps-ui-kit/components/calendar";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the grid's colours.

Dates are Luxon `DateTime` objects, not JavaScript `Date`s. `selectedDate` must be a `DateTime`;
`minDate`, `maxDate` and `initialDate` take either.

## Stories

### Default

The calendar as it opens: today is filled with the accent colour. Click a day to select it and watch the Actions panel, click the title to switch to months and then years, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={378} sources={{ light: require('./calendar--default-light.png').default, dark: require('./calendar--default-dark.png').default }} />

### With Date Constraints

Calendar with min and max date constraints. Only dates within the current year are selectable.

<ThemedImage alt="With Date Constraints" width={378} sources={{ light: require('./calendar--with-date-constraints-light.png').default, dark: require('./calendar--with-date-constraints-dark.png').default }} />

### Locale Examples

Calendar rendered in different locales. Shows how month names, weekday headers, and date formatting adapt to each locale.

<ThemedImage alt="Locale Examples" width={1014} sources={{ light: require('./calendar--locale-examples-light.png').default, dark: require('./calendar--locale-examples-dark.png').default }} />

### Right To Left

The calendar in a right-to-left layout with Arabic names: the weeks run from right to left, the title moves to the right edge and the arrows to the left, while the chevron after the title stays on its right, before the text. The wrapper carries `dir="rtl"`; the direction also comes from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={378} sources={{ light: require('./calendar--right-to-left-light.png').default, dark: require('./calendar--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The calendar opens with a selected day other than today, so the today and selected-day variables both show, and with `minDate` at the start of this month, so the days of the previous month and the left arrow show their disabled colours. Hover a day and an arrow to see the hover variables.

<ThemedImage alt="Css Customization" width={356} sources={{ light: require('./calendar--css-customization-light.png').default, dark: require('./calendar--css-customization-dark.png').default }} />

## Minimal example

`selectedDate` is required, so hold it yourself and move it from `onChange`.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import { Calendar } from "@onlyoffice/apps-ui-kit/components/calendar";

export function DueDate() {
  const [due, setDue] = useState(DateTime.now());

  return (
    <Calendar
      locale="en"
      selectedDate={due}
      onChange={setDue}
      minDate={DateTime.now()}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `locale` | `string` | BCP 47 tag the month and weekday names are written in. Default: `"en"`. |
| `selectedDate` | `DateTime<boolean>` | The highlighted day, as a Luxon `DateTime`. Its **time** is kept when another day is picked — only the date part is replaced. |
| `className`? | `string` | Applied to the outermost element. |
| `dataTestId`? | `string` | `data-testid` of the outermost element. Default: `"calendar"`. |
| `forwardedRef`? | `RefObject<HTMLDivElement \| null>` | Ref to the outermost element. |
| `id`? | `string` | Applied to the outermost element. |
| `initialDate`? | `Date \| DateTime<boolean>` | Month the calendar opens on. Out-of-range values are moved to the nearer of `minDate` and `maxDate`, with a warning on the console. |
| `isMobile`? | `boolean` | Whether the larger touch layout is used. |
| `isScroll`? | `boolean` | Whether the grid is wrapped in a `Scrollbar` instead of sizing to its content. Default: `false`. |
| `maxDate`? | `Date \| DateTime<boolean>` | Latest selectable day, with the same effect at the other end. |
| `minDate`? | `Date \| DateTime<boolean>` | Earliest selectable day. Days before it are greyed and the header arrows stop at its month. |
| `onChange`? | `(formattedDate: DateTime) => void` | Called with the newly picked day, after `setSelectedDate`. Both receive the same value; there is no separate "confirm" step. |
| `setSelectedDate`? | `(formattedDate: DateTime) => void` | Called with the newly picked day, before `onChange`. |
| `style`? | `CSSProperties` | Applied to the outermost element. |
| `useMaxTime`? | `boolean` | Whether a picked day is reported at 23:59:59.999 rather than keeping the old time. |

</APITable>

## Recipes

### Keeping the time when only the day changes

Picking a day replaces the date part of `selectedDate` and keeps its time, which is what makes
this usable as half of a date-and-time control. `useMaxTime` overrides that with the end of the
chosen day — the shape a "valid until" field wants.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import { Calendar } from "@onlyoffice/apps-ui-kit/components/calendar";

export function ExpiresAt() {
  const [expires, setExpires] = useState(DateTime.now());

  return (
    <div>
      <Calendar
        locale="en"
        selectedDate={expires}
        onChange={setExpires}
        minDate={DateTime.now()}
        useMaxTime
      />
      <p>Expires {expires.toFormat("dd MMM yyyy HH:mm:ss")}</p>
    </div>
  );
}
```

## Behaviour the types don't state

- **It is not a popup.** The calendar renders where you put it and has no visibility prop;
  mounting and unmounting it is the caller's job.
- **The time of `selectedDate` survives.** Picking a day builds the new value from the chosen
  date plus the _existing_ time, so a calendar fed a date-time keeps the minutes. `useMaxTime`
  replaces that with 23:59:59.999.
- **`onChange` and `setSelectedDate` are the same event.** Both are called with the same value,
  `setSelectedDate` first. There is no confirm step and no difference in meaning.
- **It opens on today, whatever `minDate` says.** Without an `initialDate` the view starts at the
  current month even when today is outside the allowed range — the clamping the code sets up is
  overwritten immediately afterwards. Pass `initialDate` when the range does not include today.
- **An out-of-range `initialDate` is clamped and logged.** It moves to whichever of `minDate` and
  `maxDate` is nearer, and a warning is written to the console.
- **`locale` is typed as required but defaults to `"en"`.** The type will not let you leave it
  out; the component would cope if it could.
- **There are three views behind one component**: days, months and years. Clicking the title of
  the days view opens the months, and the title of the months view opens the years; the years
  title does nothing. Picking a month or a year goes back one view, to that month or year. The
  arrows step one month, one year or ten years, depending on the view. The view resets to days
  when the calendar remounts, not when the date changes.
- **Today is filled, the selected day is ringed**, both in the accent colour; the same goes for
  the current and the selected month and year. When the selected day is today, only the fill
  shows.
- **The mobile layout follows the window, not `isMobile`.** Below 600px of window width the
  calendar takes the full width, is 420px high with 16px padding and uses larger items and
  title. `isMobile` only widens the gap between the two arrows from 8px to 12px.
- `isScroll` wraps the grid in a [`Scrollbar`](../layout/scrollbar.md), which needs the container
  to have a height; without it the grid sizes itself.
- Out-of-range days, months and years are greyed and `disabled`, so they cannot be picked, and
  the header arrows stop at the boundary.

## CSS variables

Set these on an ancestor to retheme or resize the calendar. Without them it takes its colours
from the theme; everything else the stylesheet defines is private to it.

<APITable>

| Variable                    | Default               | Effect                                                                                                    |
| --------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------- |
| `--calendar-bg`             | theme                 | Background of the calendar                                                                                |
| `--calendar-border`         | theme                 | Colour of its one-pixel border                                                                            |
| `--calendar-shadow`         | theme                 | Its box shadow                                                                                            |
| `--calendar-radius`         | `6px`                 | Its corner radius                                                                                         |
| `--calendar-padding`        | `30px 28px 28px 28px` | Inner padding; ignored with `isScroll` and in the mobile layout                                           |
| `--calendar-width`          | `362px`               | Width; ignored in the mobile layout, which takes the full width                                           |
| `--calendar-height`         | `376px`               | Height; ignored in the mobile layout, which is 420px high                                                 |
| `--calendar-title`          | theme                 | Colour of the title and of its dashed underline on hover                                                  |
| `--calendar-title-size`     | `18px`                | Font size of the title; ignored in the mobile layout                                                      |
| `--calendar-outline`        | theme                 | Ring colour of the arrow buttons                                                                          |
| `--calendar-arrow`          | theme                 | Colour of the arrow chevrons                                                                              |
| `--calendar-disabled-arrow` | theme                 | Chevron colour of an arrow that cannot go further                                                         |
| `--calendar-weekday`        | theme                 | Colour of the weekday labels                                                                              |
| `--calendar-accent`         | theme accent          | Fill of today, ring of the selected day, arrow ring on hover and the title chevron                        |
| `--calendar-selected-text`  | `#ffffff`             | Text colour of today, on the accent fill                                                                  |
| `--calendar-current-radius` | `50%`                 | Corner radius of today                                                                                    |
| `--calendar-focused-radius` | `50%`                 | Corner radius of the selected day                                                                         |
| `--calendar-focused-bg`     | `transparent`         | Background of the selected day                                                                            |
| `--calendar-focused-text`   | theme text colour     | Text colour of the selected day                                                                           |
| `--calendar-hover-bg`       | theme                 | Background of an item under the pointer                                                                   |
| `--calendar-hover-radius`   | `50%`                 | Corner radius of an item under the pointer                                                                |
| `--calendar-past`           | theme                 | Text colour of the days of the previous and next month, and of the items outside the shown year or decade |
| `--calendar-disabled`       | theme                 | Text colour of the items outside `minDate` and `maxDate`                                                  |

</APITable>

"The mobile layout" is the one below 600px of window width, not `isMobile`.

## Accessibility

Every day, month, year and arrow is a native `<button>`, so the keyboard support is the
platform's:

- Tab and Shift+Tab move through the arrows and the grid one item at a time; Enter and Space
  pick the focused item. The arrow keys do not move between days, and there is no `grid` role.
- Out-of-range items and arrows are `disabled`, so Tab skips them and they cannot be picked.
- The arrows are named `aria-label="Previous"` and `aria-label="Next"`; changing the month is
  announced only by the grid re-rendering.
- The title that opens the month and year views is an `<h2>` with a click handler, so those
  views are reachable by mouse only.
- Nothing states which day is selected or which is today other than colour — there is no
  `aria-selected` or `aria-current`, and each day is named only by its number.

## Test ids

<APITable>

| Element     | `data-testid`               |
| ----------- | --------------------------- |
| The wrapper | `calendar`, or `dataTestId` |

</APITable>

## Related

- [`DatePicker`](./date-picker.md) — this calendar as a form field.
- [`DateTimePicker`](./date-time-picker.md) — with a time beside it.
- [`Scrollbar`](../layout/scrollbar.md) — what `isScroll` wraps the grid in.
