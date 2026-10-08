---
description: "Two small fields, hours and minutes, that move the caret along as you type."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/time-picker/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TimePicker

Two small fields, hours and minutes, that move the caret along as you type. There is no clock,
no drop-down and — despite the 12-hour option — no AM/PM control.

<ThemedImage alt="TimePicker" width={76} sources={{ light: require('./time-picker--primary-light.png').default, dark: require('./time-picker--primary-dark.png').default }} />

## Use this when / not when

- Use for a time typed beside a date, or on its own where the date does not matter.
- Not on its own for a 12-hour interface. The component formats hours 1–12 but renders nothing to
  choose AM or PM; you supply `meridiem` and build that control.
  [`DateTimePicker`](./date-time-picker.md) is the one that already has it.
- Not for a duration. The value comes back as a point in time, carrying a date.
- Not where the value must be driven from outside: `initialTime` is read once.

## Import

```ts
import { TimePicker } from "@onlyoffice/apps-ui-kit/components/time-picker";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`.

Times come back as Luxon `DateTime` objects.

## Stories

### Default

A 24-hour picker preset to 10:30 (`initialTime`); type `9` in the hours field and watch it become `09` and jump to minutes; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={76} sources={{ light: require('./time-picker--default-light.png').default, dark: require('./time-picker--default-dark.png').default }} />

### With Error

The border turns red to flag a time the form rejected (`hasError`); the fields stay editable so it can be corrected in place.

<ThemedImage alt="With Error" width={76} sources={{ light: require('./time-picker--with-error-light.png').default, dark: require('./time-picker--with-error-dark.png').default }} />

### Twelve Hour Format

Hours stop at 12 (`isTwelveHourFormat`); nothing on screen tells AM from PM, only the `meridiem` behind each box decides what `onChange` receives: the first reports 10:30, the second, showing 02:30, reports 14:30.

<ThemedImage alt="Twelve Hour Format" width={278} sources={{ light: require('./time-picker--twelve-hour-format-light.png').default, dark: require('./time-picker--twelve-hour-format-dark.png').default }} />

### Focus On Render

The picker opens with the hours field selected (`focusOnRender`), so a form that asks for a time first takes the digits without a click; type `14` and the caret moves on to minutes.

<ThemedImage alt="Focus On Render" width={76} sources={{ light: require('./time-picker--focus-on-render-light.png').default, dark: require('./time-picker--focus-on-render-dark.png').default }} />

### Css Customization

The TimePicker and inner TextInput variables set on one wrapper -- the variables are listed under CSS variables on this page. The first box shows the border, background, size and radius variables and the inner fields' text colour; click into it to see `--time-input-focus-border`. The second adds `hasError`, the only state in which `--time-input-error-border` has anything to colour. `--text-input-bg` is set to the same value as `--time-input-bg` so the fields blend into the box.

<ThemedImage alt="Css Customization" width={168} sources={{ light: require('./time-picker--css-customization-light.png').default, dark: require('./time-picker--css-customization-dark.png').default }} />

## Minimal example

`onChange` gives a full `DateTime`: the date from `initialTime`, the time from the fields.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import { TimePicker } from "@onlyoffice/apps-ui-kit/components/time-picker";

export function ReminderTime({ day }: { day: DateTime }) {
  const [at, setAt] = useState(day);

  return (
    <div>
      <TimePicker initialTime={day} onChange={setAt} />
      <p>Reminder at {at.toFormat("HH:mm")}</p>
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `className`? | `string` | Applied to the outermost element. Default: `""`. |
| `classNameInput`? | `string` | Prefix for the two fields' class names: they become `<classNameInput>-hours-input` and `-minutes-input`. Left out, the fields get no extra class. |
| `focusOnRender`? | `boolean` | Whether the hours field is selected on mount. Default: `false`. |
| `forwardedRef`? | `RefObject<HTMLDivElement \| null>` | Ref to the outermost element. |
| `hasError`? | `boolean` | Whether the group is drawn in its error colours; they stay while a field is focused. Default: `false`. |
| `initialTime`? | `Date \| DateTime<boolean> \| string` | Time the fields start on. It is read once, on mount; changing it afterwards does nothing. Its **date** part is carried into every value `onChange` reports, so pass a full date-time if that matters. Midnight today is used when it is left out. |
| `isTwelveHourFormat`? | `boolean` | Whether hours run 1 to 12 rather than 0 to 23. It changes the fields only — no AM/PM control is rendered — and requires `meridiem`. |
| `meridiem`? | `string` | `"AM"` or `"PM"`, used when parsing the typed time in 12-hour mode. You own this value and the control that changes it. |
| `onBlur`? | `() => void` | Called when typing completes the minutes field — two digits, a single digit above 5, a third digit or a value above 59 — not when the field loses focus. |
| `onChange`? | `(date: DateTime) => void` | Called on every accepted keystroke with a full `DateTime` — the date from `initialTime` combined with the typed time. Default: `() => {}`. |
| `tabIndex`? | `number` | Position of both fields in the tab order. Left out, both take their natural place in it. |
| `testId`? | `string` | `data-testid` of the outermost element. Default: `"time-picker"`. |

</APITable>

## Recipes

### Error

`hasError` recolours the group around both fields. It prints no message, and there is no
validation of its own beyond rejecting impossible numbers.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import { TimePicker } from "@onlyoffice/apps-ui-kit/components/time-picker";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";

export function OfficeHours({ day }: { day: DateTime }) {
  const [at, setAt] = useState(day.set({ hour: 9, minute: 0 }));
  const isOutside = at.hour < 9 || at.hour >= 18;

  return (
    <div>
      <TimePicker initialTime={at} onChange={setAt} hasError={isOutside} />
      {isOutside ? (
        <Text fontSize="12px">Choose a time between 09:00 and 18:00</Text>
      ) : null}
    </div>
  );
}
```

### A 12-hour clock

The component will format hours 1–12, but the meridiem is yours: hold it, render the control,
and pass it in so the typed time is parsed into the right half of the day.

```tsx
import { useState } from "react";
import { DateTime } from "luxon";
import {
  ComboBox,
  type TOption,
} from "@onlyoffice/apps-ui-kit/components/combobox";
import { TimePicker } from "@onlyoffice/apps-ui-kit/components/time-picker";

const HALVES: TOption[] = [
  { key: "AM", label: "AM" },
  { key: "PM", label: "PM" },
];

export function TwelveHourTime({ day }: { day: DateTime }) {
  const [at, setAt] = useState(day);
  const [half, setHalf] = useState<TOption>(HALVES[0]);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <TimePicker
        initialTime={day}
        onChange={setAt}
        isTwelveHourFormat
        meridiem={String(half.key)}
      />
      <ComboBox
        options={HALVES}
        selectedOption={half}
        onSelect={setHalf}
        scaledOptions
      />
      <span>{at.toFormat("hh:mm a")}</span>
    </div>
  );
}
```

## Behaviour the types don't state

- **The value carries a date.** `onChange` hands back a `DateTime` built from `initialTime`'s
  date plus the typed time, so without `initialTime` every value is on today's date at the typed
  hour.
- **`initialTime` is read once.** There is no effect syncing it, so the fields cannot be driven
  from outside after mount; remount with a `key` if they must be.
- **Typing moves the caret for you.** Two digits in hours jumps to minutes, and a first digit
  that cannot start a valid hour — above 2, or above 1 in 12-hour mode — is padded with a zero
  and jumps as well. The same happens between minutes and blur.
- **Out-of-range input is dropped, not corrected.** Minutes above 59 call `onBlur` and leave the
  field as it was; letters are ignored entirely. A second hour digit that would pass 23 (12 in
  12-hour mode) is dropped: the first digit stays, padded to `0x`, and the caret moves to minutes.
- **Clearing a field sets it to `00`** and reports that time, so neither field can be left empty.
- **A single digit is zero-padded on blur**, so `9` becomes `09`.
- **`isTwelveHourFormat` renders no AM/PM control.** It changes the hour format and the maximum
  hour; `meridiem` is a plain string you pass, and the types require it alongside
  `isTwelveHourFormat`, because without it the typed time cannot be parsed and `onChange` is
  never called.
- **`classNameInput` is a prefix, not a class.** The fields get `<classNameInput>-hours-input`
  and `-minutes-input`; leave the prop out and they get no extra class.
- **The error colour survives focus.** With `hasError` the border keeps the error colour while
  a field is being edited, instead of switching to the focus colour.
- **The right-click menu is suppressed** on both fields.
- **The group is always laid out left to right**, hours then minutes, even inside a
  right-to-left interface: the wrapper sets `direction: ltr`.
- The two fields are separated by a literal `:` text node, and clicking anywhere in the group
  that is not the minutes field selects the hours.

## CSS variables

Set these on any ancestor; the group reads them through a fallback to the theme token or to a
fixed size.

<APITable>

| Variable                    | Default                | Effect                                                        |
| --------------------------- | ---------------------- | ------------------------------------------------------------- |
| `--time-input-border`       | `--input-border-color` | Border colour at rest                                         |
| `--time-input-bg`           | `--input-bg`           | Background of the group                                       |
| `--time-input-focus-border` | `--input-border-focus` | Border colour while either field is focused                   |
| `--time-input-error-border` | `--input-error-border` | Border colour under `hasError`, kept while a field is focused |
| `--time-input-width`        | `60px`                 | Width of the group                                            |
| `--time-input-height`       | `32px`                 | Height of the group                                           |
| `--time-input-radius`       | `3px`                  | Border radius                                                 |
| `--time-input-padding`      | `0px 6px`              | Padding inside the group, as a `padding` shorthand            |

</APITable>

The two fields inside are [`TextInput`](./text-input.md)s drawn without a border, so its
own variables reach them too: `--text-input-color` sets the digits' colour, and
`--text-input-bg` their background, which is painted over the group's and should be set to the
same value as `--time-input-bg` for the fields to blend in.

## Accessibility

- Both fields are real inputs with `aria-label`s of "Hours" and "Minutes", and
  `inputMode="numeric"` brings up a number keypad. Tab reaches both fields on its own;
  `tabIndex` moves them in the order and reaches both.
- `role="group"` and `aria-label="Time picker"` are hardcoded English on the wrapper and cannot
  be overridden.
- **The automatic jump between fields moves focus while the user is typing**, which is
  disorienting with a screen reader and makes correcting a mistake awkward.
- `hasError` is a colour only — it sets no `aria-invalid` and prints no message.
- Suppressing the context menu removes paste-by-right-click.

## Test ids

<APITable>

| Element       | `data-testid`              |
| ------------- | -------------------------- |
| The group     | `time-picker`, or `testId` |
| Hours field   | `hours-input`              |
| Minutes field | `minutes-input`            |

</APITable>

The two fields carry theirs as `data-test-id`, with a hyphen, not `data-testid`; only the group uses the usual attribute.

## Related

- [`DateTimePicker`](./date-time-picker.md) — this with a date and a working AM/PM.
- [`TextInput`](./text-input.md) — the two fields inside.
- [`ComboBox`](./combobox.md) — what to build the meridiem control from.
