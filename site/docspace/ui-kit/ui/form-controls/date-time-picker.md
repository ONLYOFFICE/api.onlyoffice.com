---
description: "A date chip and a time beside it, editable in place."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/date-time-picker/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# DateTimePicker

A date chip and a time beside it, editable in place. It puts
[`DatePicker`](./date-picker.md) and [`TimePicker`](./time-picker.md) together
and adds the AM/PM control the latter lacks.

<ThemedImage alt="DateTimePicker" width={123} sources={{ light: require('./date-time-picker--primary-light.png').default, dark: require('./date-time-picker--primary-dark.png').default }} />

## Use this when / not when

- Use for a single moment — an expiry, a scheduled send, a reminder — where both halves matter.
- Not when only the day matters; [`DatePicker`](./date-picker.md) is smaller and has no
  time to leave at midnight.
- Not when only the time matters — [`TimePicker`](./time-picker.md) on its own, though
  you then own the AM/PM control.
- Not for a range, and not for a disabled or read-only display: neither is a prop.

## Import

```ts
import { DateTimePicker } from "@onlyoffice/apps-ui-kit/components/date-time-picker";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`.

Dates are Luxon `DateTime` objects. `translations` is required and is not filled in for you:
without it the AM/PM drop-down has blank options.

## Stories

### Default

The picker as a form shows it before anything is chosen: only the "Select date" button. Pick a day to see the time appear beside it, click the time to edit it, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={123} sources={{ light: require('./date-time-picker--default-light.png').default, dark: require('./date-time-picker--default-dark.png').default }} />

### With Error

Use it when the chosen moment fails validation: the time turns red and the control is marked invalid for screen readers (`hasError`). A day is picked here because the time, the only part drawn in the error colour, shows only once there is one.

<ThemedImage alt="With Error" width={249} sources={{ light: require('./date-time-picker--with-error-light.png').default, dark: require('./date-time-picker--with-error-dark.png').default }} />

### With Initial Date

Use it to edit a moment that already exists, such as a saved deadline: the day chip and the time show it from the first render (`initialDate`). The English locale gives a 12-hour clock; click the time to see the AM/PM drop-down beside the editor.

<ThemedImage alt="With Initial Date" width={249} sources={{ light: require('./date-time-picker--with-initial-date-light.png').default, dark: require('./date-time-picker--with-initial-date-dark.png').default }} />

### Hidden Cross

Use it for a field that must always hold a moment: the day chip has no cross, so the day can be changed in the calendar but never cleared (`hideCross`).

<ThemedImage alt="Hidden Cross" width={237} sources={{ light: require('./date-time-picker--hidden-cross-light.png').default, dark: require('./date-time-picker--hidden-cross-dark.png').default }} />

### Twenty Four Hour Clock

Any locale that is not English switches the clock to 24 hours (`locale`): the time reads "14:30" rather than "02:30 PM", and the editor opened by a click on it has no AM/PM drop-down. The calendar is written in the same locale.

<ThemedImage alt="Twenty Four Hour Clock" width={226} sources={{ light: require('./date-time-picker--twenty-four-hour-clock-light.png').default, dark: require('./date-time-picker--twenty-four-hour-clock-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. Click the time to see the time editor and the day chip to see the calendar; the day chip, the "select date" button and the AM/PM drop-down keep their own variables, listed in the SelectedItem, AddButton and ComboBox stories.

<ThemedImage alt="Css Customization" width={257} sources={{ light: require('./date-time-picker--css-customization-light.png').default, dark: require('./date-time-picker--css-customization-dark.png').default }} />

## Minimal example

`className`, `id`, `selectDateText`, `hasError`, `locale`, `openDate`, `onChange` and
`translations` are all required by the type.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import { DateTimePicker } from "@onlyoffice/apps-ui-kit/components/date-time-picker";

export function ExpiresAt() {
  const [at, setAt] = useState<DateTime | null>(null);

  return (
    <DateTimePicker
      id="expires-at"
      className=""
      locale="en"
      selectDateText="Set an expiry"
      hasError={false}
      openDate={DateTime.now()}
      onChange={setAt}
      translations={{ AM: "AM", PM: "PM" }}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className` | `string` | Applied to the outermost element. |
| `hasError` | `boolean` | Whether the control is drawn in its error colours. |
| `id` | `string` | Applied to the outermost element. |
| `locale` | `string` | BCP 47 tag the calendar is written in. It also decides whether the time is shown as 12-hour or 24-hour. |
| `onChange` | `(d: null \| DateTime) => void` | Called whenever either half changes, with the combined date and time, or `null` when the date is cleared. |
| `openDate` | `Date \| DateTime<boolean>` | Month the calendar opens on. |
| `selectDateText` | `string` | Text of the button shown while no date is chosen. |
| `translations` | `DateTimePickerTranslations` | Labels of the AM and PM options. Required: the component reads them while rendering, and nothing here translates them for you. |
| `dataTestId`? | `string` | `data-testid` of the outermost element. Default: `"date-time-picker"`. |
| `hideCross`? | `boolean` | Whether the date chip's clearing cross is hidden. |
| `initialDate`? | `Nullable<string \| DateTime<boolean> \| Date>` | Date and time the component starts on. |
| `maxDate`? | `Date \| DateTime<boolean>` | Latest selectable day in the calendar. |
| `minDate`? | `Date \| DateTime<boolean>` | Earliest selectable day in the calendar. |
| `useMaxTime`? | `boolean` | Whether a picked day is reported at the end of that day rather than at midnight. |

</APITable>

## Recipes

### Error

`hasError` is required. It draws the shown time in red and sets `aria-invalid` on the wrapper;
the date chip and the open time editor keep their usual colours, and no message is printed.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import { DateTimePicker } from "@onlyoffice/apps-ui-kit/components/date-time-picker";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function ScheduledSend() {
  const [at, setAt] = useState<DateTime | null>(null);
  const isPast = Boolean(at && at < DateTime.now());

  return (
    <div>
      <DateTimePicker
        id="send-at"
        className=""
        locale="en"
        selectDateText="Schedule"
        hasError={isPast}
        minDate={DateTime.now()}
        openDate={DateTime.now()}
        onChange={setAt}
        translations={{ AM: "AM", PM: "PM" }}
      />
      {isPast ? <Text fontSize="12px">Choose a time in the future</Text> : null}
    </div>
  );
}
```

## Behaviour the types don't state

- **The time only appears once a date is chosen.** Until then the control is just the date
  button; there is no way to set a time first.
- **The time is a display until it is clicked.** Clicking the clock swaps it for
  [`TimePicker`](./time-picker.md) plus the meridiem drop-down; an outside click, Enter
  or Tab swaps it back. The editor takes focus as soon as it opens.
- **Clearing the date hides the time.** The chip's cross (unless `hideCross`) empties the day,
  removes the time beside it and reports `null` to `onChange`.
- **12-hour or 24-hour is decided by `locale`, not by a prop.** The component treats anything
  starting `en`, plus `en-GB` explicitly, as 12-hour — so a British locale gets AM/PM, and every
  other locale gets a 24-hour clock with no meridiem control.
- **Choosing a meridiem shifts the time by twelve hours rather than setting it.** Picking AM
  subtracts twelve and picking PM adds twelve, whichever half the value was already in.
- **`translations` is required but was missing from the exported props type** until now; it is
  read while rendering, so an object with `AM` and `PM` has to be passed.
- **`className`, `id`, `selectDateText` and `hasError` are required by the type** even though
  empty values are perfectly ordinary. Pass `""` and `false`.
- The date half is a [`DatePicker`](./date-picker.md) driven through its `outerDate`, so
  all of that component's behaviour applies — including the fixed `dd MMM yyyy` format and the
  calendar closing on every pick.
- Outside clicks and keys are listened for on the document in the capture phase, so they act
  before anything in your own tree.

## CSS variables

Set these on an ancestor to retheme the time display. Everything else the stylesheet defines is
private to it.

<APITable>

| Variable                          | Default   | Effect                                    |
| --------------------------------- | --------- | ----------------------------------------- |
| `--date-time-picker-cell-bg`      | theme     | Background of the shown time              |
| `--date-time-picker-icon`         | theme     | Colour of the clock glyph before the time |
| `--date-time-picker-cell-height`  | `32px`    | Height of the shown time                  |
| `--date-time-picker-cell-radius`  | `3px`     | Corner radius of the shown time           |
| `--date-time-picker-cell-padding` | `6px 8px` | Padding inside the shown time             |

</APITable>

The parts it is built from keep their own variables, which reach them from the same ancestor:
`--time-input-*` for the time editor (see [`TimePicker`](./time-picker.md)),
`--calendar-*` for the calendar (see [`Calendar`](./calendar.md)), and those of
[`SelectedItem`](../data-display/selected-item.md), [`AddButton`](../interactive-elements/add-button.md) and
[`ComboBox`](./combobox.md) for the day chip, the button and the AM/PM drop-down.

## Accessibility

- The time display is a `<span role="button">` with `tabIndex={0}` and an `aria-label` giving
  the current time, but no key handler — Enter and Space do not open the editor.
- That `aria-label` always writes the time on a 24-hour clock (`Current time: 14:30`), even
  when the display shows `02:30 PM`.
- The time editor takes focus when it opens; Enter or Tab closes it again.
- The "select date" button is a `role="button"` named by `selectDateText` and reports
  `aria-expanded` while the calendar is open.
- The date half inherits [`DatePicker`](./date-picker.md)'s limits: the calendar cannot
  be operated from the keyboard.
- `aria-invalid` is set on the wrapper from `hasError`, but no message is tied to it.
- `aria-label` on the wrapper is `selectDateText`, which describes the button rather than the
  whole control.
- The meridiem drop-down is a [`ComboBox`](./combobox.md), with that component's
  limitations.

## Test ids

<APITable>

| Element          | `data-testid`                       |
| ---------------- | ----------------------------------- |
| The wrapper      | `date-time-picker`, or `dataTestId` |
| The time area    | `date-time-picker-time-wrapper`     |
| The time display | `date-time-picker-time-display`     |
| The clock glyph  | `date-time-picker-clock-icon`       |

</APITable>

## Related

- [`DatePicker`](./date-picker.md) — the date half.
- [`TimePicker`](./time-picker.md) — the time half.
- [`Calendar`](./calendar.md) — the grid behind the date.
