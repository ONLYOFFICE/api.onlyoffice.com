---
description: "Multi-line text field that grows with its content, with optional line numbers, a copy button and a JSON mode."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/textarea/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Textarea

Multi-line text field that grows with its content, with optional line numbers, a copy button
and a JSON mode. It is controlled: the value you pass is what it shows.

<ThemedImage alt="Textarea" width={1014} sources={{ light: require('./textarea--primary-light.png').default, dark: require('./textarea--primary-dark.png').default }} />

## Use this when / not when

- Use for free text of more than one line: a description, a message, a pasted key or document.
- Not for a single line — [`TextInput`](./text-input.md) is sized and styled for that,
  and has the mask, prefix and password affordances this one does not.
- Not to give the field a label, a help tooltip and an error message: wrap it in
  [`FieldContainer`](./field-container.md), which is what `hasError` is meant to pair
  with.

## Import

```ts
import { Textarea } from "@onlyoffice/apps-ui-kit/components/textarea";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree, for
the surface, border and scrollbar colours.

## Stories

### Default

An empty field with a placeholder and a fixed height, the shape most forms start from (`placeholder`, `heightTextArea`); change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./textarea--default-light.png').default, dark: require('./textarea--default-dark.png').default }} />

### States

Four copies of the same field, one per state a form puts it in:

- **Normal textarea** — the plain field
- **Error state** — the red border a form shows after failed validation (`hasError`)
- **Disabled textarea** — greyed out and unfocusable (`isDisabled`)
- **Read-only textarea** — looks like the plain one but rejects typing (`isReadOnly`)

<ThemedImage alt="States" width={1014} sources={{ light: require('./textarea--states-light.png').default, dark: require('./textarea--states-dark.png').default }} />

### With Copy

The copy button in the corner puts the whole text on the clipboard and confirms it with a toast (`enableCopy`, `copyInfoText`); clicking the frame or the button also selects all the text. The toast renders only where a `Toast` container is mounted, so the story mounts one.

<ThemedImage alt="With Copy" width={416} sources={{ light: require('./textarea--with-copy-light.png').default, dark: require('./textarea--with-copy-dark.png').default }} />

### With Numeration

Line numbers beside the text for values read as code or configuration, so a reader can point to a line (`hasNumeration`).

<ThemedImage alt="With Numeration" width={416} sources={{ light: require('./textarea--with-numeration-light.png').default, dark: require('./textarea--with-numeration-dark.png').default }} />

### JSON Field

Two JSON fields, for values a reader edits as configuration:

- **Left** — a valid object, pretty-printed with line numbers (`isJSONField`, `hasNumeration`)
- **Right** — a truncated object, which keeps the red border until the text parses as JSON

<ThemedImage alt="JSON Field" width={676} sources={{ light: require('./textarea--json-field-light.png').default, dark: require('./textarea--json-field-dark.png').default }} />

### Custom Heights

Three heights of the same field, to pick the one that fits the surrounding form (`heightTextArea`):

- **Small textarea** — 80px
- **Medium textarea** — 150px
- **Large textarea** — 250px

<ThemedImage alt="Custom Heights" width={1014} sources={{ light: require('./textarea--custom-heights-light.png').default, dark: require('./textarea--custom-heights-dark.png').default }} />

### Grows With Content

The frame is as tall as its text: add a line and it grows, delete one and it shrinks, never below the default height (`isFullHeight`).

<ThemedImage alt="Grows With Content" width={416} sources={{ light: require('./textarea--grows-with-content-light.png').default, dark: require('./textarea--grows-with-content-dark.png').default }} />

### Right To Left

The same field under a right-to-left interface, mirroring the left-to-right layout: the line numbers move to the right edge, the copy button to the left one, and the text starts from the right. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={416} sources={{ light: require('./textarea--right-to-left-light.png').default, dark: require('./textarea--right-to-left-dark.png').default }} />

### Css Customization

Nine of the variables set on one wrapper -- every one is listed under CSS variables on this page. The first field shows the shared `--text-input-*` tokens, the padding and the custom height; hover and focus it to see the two border variables. The second adds `hasNumeration`, the only state in which `--textarea-numeration-text-color` has anything to color.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./textarea--css-customization-light.png').default, dark: require('./textarea--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";
import { Textarea } from "@onlyoffice/apps-ui-kit/components/textarea";

export function RoomDescription() {
  const [text, setText] = useState("");

  return (
    <Textarea
      value={text}
      aria-label="Room description"
      placeholder="What is this room for?"
      onChange={(e) => setText(e.target.value)}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `areaSelect`? | `boolean` | Selects the whole text whenever this flips to true — for a field the user is expected to copy from. Default: `false`. |
| `aria-describedby`? | `string` | `id` of the element describing the field, such as a hint or an error line below it. Announced after the name. |
| `aria-label`? | `string` | Accessible name of the field, for when no `<label>` points at it. Declared as a prop because this type is closed and accepts no arbitrary DOM attributes; `id` with a `<label for>` names the field just as well. |
| `aria-labelledby`? | `string` | `id` of the element that names this field — the usual choice when the caption is already on screen, for instance a `FieldContainer` label given an `id` of its own. |
| `autoFocus`? | `boolean` | Default input property |
| `className`? | `string` | Applied to the scrollbar around the textarea, not to the textarea itself. |
| `classNameCopyIcon`? | `string` | Applied to the copy button, alongside the component's own class. |
| `color`? | `string` | Colour of the text, applied inline. |
| `copyInfoText`? | `string` | Text of the toast shown after a successful copy. Without it the copy is silent. |
| `dataTestId`? | `string` | Value of `data-testid` on the textarea. Default: `"textarea"`. |
| `enableCopy`? | `boolean` | Shows a copy button in the corner of the field. Default: `false`. |
| `fontSize`? | `number` | Font size in pixels, applied inline to the textarea and to the line numbers. Default: `13`. |
| `fullHeight`? | `number` | Ignored. The component computes the full height itself and never reads this prop. |
| `hasError`? | `boolean` | Draws the field in the error colour. Under `isJSONField` it adds to that mode's own error state rather than being replaced by it. Default: `false`. |
| `hasNumeration`? | `boolean` | Renders line numbers down the left edge and indents the text to make room for them. Default: `false`. |
| `heightScale`? | `boolean` | Makes the field 65vh tall instead of the default 89px. Default: `false`. |
| `heightTextArea`? | `number \| string` | Fixed height, as a number of pixels or a CSS length. It wins over the default height but not over `heightScale` or `isFullHeight`. |
| `id`? | `string` | Used as HTML `id` property |
| `isChatMode`? | `boolean` | Moves the scrollbar styling from the inner scroller to the outer wrapper, which is what a chat composer needs. Default: `false`. |
| `isDisabled`? | `boolean` | Indicates that the field cannot be used. Default: `false`. |
| `isFullHeight`? | `boolean` | Sizes the field to its content instead of scrolling inside a fixed height. Default: `false`. |
| `isJSONField`? | `boolean` | Treats the value as JSON: pretty-prints it, and puts the field in the error state whenever it is empty or not a JSON object or array, whatever `hasError` says. Default: `false`. |
| `isReadOnly`? | `boolean` | Indicates that the field is displaying read-only content. Default: `false`. |
| `maxLength`? | `number` | Maximum number of characters the field accepts. Unlike `TextInput`, which caps at 255, there is no limit unless you set one. |
| `minHeight`? | `string` | Ignored. Nothing in the component or its stylesheet reads this prop. |
| `name`? | `string` | Used as HTML `name` property |
| `onChange`? | `(e: ChangeEvent<HTMLTextAreaElement>) => void` | Sets a callback function that allows handling the component's changing events |
| `onCopy`? | `(text: string) => void` | Called with the copied text after the copy button is used. |
| `onKeyDown`? | `(e: KeyboardEvent<HTMLTextAreaElement>) => void` | Sets a callback function that allows handling the component's keyDown events |
| `paddingLeftProp`? | `string` | Ignored. The indent for the line numbers is computed from the content. |
| `placeholder`? | `string` | Placeholder for Textarea. Default: `" "`. |
| `style`? | `CSSProperties` | Accepts css style |
| `tabIndex`? | `number` | Used as HTML `tabindex` property. Left out, the field takes its natural place in the tab order; pass `-1` only for a field the keyboard is meant to skip. |
| `value`? | `string` | The text. The field is controlled, so pair it with `onChange`. Default: `""`. |
| `wrapperClassName`? | `string` | Applied to the outer wrapper that carries the height and the copy icon. |

</APITable>

## Recipes

### Disabled and read-only

`isDisabled` greys the field and takes it out of the tab order; `isReadOnly` keeps it selectable
and focusable but refuses edits, and looks exactly like an editable field. For a value the user is meant to copy, read-only is the one you
want.

```tsx
import { Textarea } from "@onlyoffice/apps-ui-kit/components/textarea";

export function ApiKeyField({ apiKey }: { apiKey: string }) {
  return (
    <Textarea
      value={apiKey}
      isReadOnly
      enableCopy
      copyInfoText="API key copied"
      tabIndex={0}
      onChange={() => {}}
    />
  );
}
```

### Error

```tsx
import { useState } from "react";
import { Textarea } from "@onlyoffice/apps-ui-kit/components/textarea";

export function CommentField() {
  const [text, setText] = useState("");
  const tooLong = text.length > 280;

  return (
    <Textarea
      value={text}
      hasError={tooLong}
      maxLength={400}
      tabIndex={0}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
```

### A JSON field with line numbers

```tsx
import { useState } from "react";
import { Textarea } from "@onlyoffice/apps-ui-kit/components/textarea";

export function WebhookPayload() {
  const [payload, setPayload] = useState('{ "event": "file.created" }');

  return (
    <Textarea
      value={payload}
      isJSONField
      hasNumeration
      enableCopy
      heightScale
      tabIndex={0}
      onChange={(e) => setPayload(e.target.value)}
    />
  );
}
```

## Behaviour the types don't state

- **It has a maximum width but no width.** The field caps at `--textarea-width` (1200px) and
  otherwise takes whatever width the layout gives it — which, as a flex or grid item, is the
  width of its content, not of the free space. In a flex row it collapses to a sliver that is
  still focusable and still accepts text. Give it `width: 100%` — or `flex: 1 1 auto` with
  `min-width: 0` where the parent is a flex container — through `wrapperClassName`, which is
  the only prop that reaches the element carrying the max-width. `style` does not: it is
  spread onto the inner `Scrollbar`, whose own rule is already `width: 100% !important`, so a
  width passed that way reads as though it had worked and changes nothing.
- **`isJSONField` adds its own error state.** In that mode the field is red whenever the value
  is empty or is not a JSON object or array — `42` and `"text"` parse and still count as
  invalid — whatever you pass as `hasError`. `hasError` still applies on top of it, so a field
  holding valid JSON turns red when you pass it.
- Three props are accepted and never read: `minHeight`, `fullHeight` and `paddingLeftProp`. The
  height they suggest comes from `heightTextArea`, `heightScale` and `isFullHeight` instead.
- The default `placeholder` is a single space rather than an empty string, so
  `:placeholder-shown` matches even when no placeholder was asked for.
- A click on the field stops propagating, so a parent listening for clicks does not see it.
- The text direction is `auto`: a value that starts with Arabic or Hebrew renders right to
  left regardless of the interface language.

## CSS variables

<APITable>

| Variable                            | Default          | Effect                                                                                                                                                                 |
| ----------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--text-input-bg`                   | theme            | Background, shared with the other text inputs                                                                                                                          |
| `--text-input-color`                | theme            | Text and caret colour                                                                                                                                                  |
| `--text-input-border-color`         | theme            | Border colour                                                                                                                                                          |
| `--text-input-border-hover`         | theme            | Border colour while hovered                                                                                                                                            |
| `--text-input-border-focus`         | theme            | Border colour while focused                                                                                                                                            |
| `--text-input-radius`               | theme            | Corner radius                                                                                                                                                          |
| `--textarea-width`                  | `1200px`         | Maximum width of the field                                                                                                                                             |
| `--textarea-height`                 | `89px`           | Minimum height under `heightScale` and `isFullHeight`; no effect otherwise, where the height comes from `heightTextArea`                                               |
| `--textarea-height-scale`           | `65vh`           | Height of the outer frame under `heightScale`                                                                                                                          |
| `--textarea-scrollbar-height-scale` | `67vh`           | Height of the inner scroller, which carries the border, under `heightScale`                                                                                            |
| `--textarea-height-custom`          | `heightTextArea` | Height when neither `heightScale` nor `isFullHeight` is set, whether or not `heightTextArea` is passed; it wins over the prop                                          |
| `--textarea-height-full`            | computed         | Height under `isFullHeight`, never below `--textarea-height`; the computed value is the line count times the line height                                               |
| `--textarea-font-size`              | `13px`           | Font size of the line numbers, only while `fontSize` is left at 13; the text follows `fontSize` inline, so any other value puts the numbers out of step with the lines |
| `--textarea-padding`                | `5px 8px 2px`    | Top, end and bottom padding of the text; the start side stays 8px, or the line-number gutter under `hasNumeration`                                                     |
| `--textarea-numeration-text-color`  | theme            | Colour of the line numbers under `hasNumeration`                                                                                                                       |

</APITable>

## Accessibility

- Renders a real `<textarea>`, so it is announced as a multi-line field and supports the
  platform's own editing and selection.
- **Name it, one of three ways.** `id` lands on the `<textarea>` element itself, so a
  `FieldContainer` given the same string as `labelFor` captions it exactly as it captions a
  `TextInput` — that is the one to reach for when the caption is on screen. `aria-labelledby`
  points at any other element that names it, and `aria-label` covers a field with no visible
  caption at all. The last two are declared as props because this type is closed and accepts no
  arbitrary DOM attributes. A field named by none of the three is announced as an unnamed edit
  box.
- **`aria-describedby` carries the error or hint.** The component draws an error state in
  colour and nothing more, so the message itself has to be an element of yours that this prop
  points at.
- **The copy button is mouse-only.** It is a `<div>` with no tab stop and no accessible name;
  a keyboard user selects the text (with `areaSelect`, or by focusing the field) and copies it
  with the platform shortcut.
- It is in the tab order by default. `tabIndex` used to default to `-1`, which removed every
  multi-line field from keyboard navigation.

## Test ids

<APITable>

| Element      | `data-testid`                             |
| ------------ | ----------------------------------------- |
| The textarea | `textarea`, overridable with `dataTestId` |

</APITable>

## Related

- [`TextInput`](./text-input.md) — single line, with masking and fixed widths.
- [`FieldContainer`](./field-container.md) — the label, help tooltip and error message
  around it.
- [`InputBlock`](./input-block.md) — a single-line field with an icon or a button
  inside it.
