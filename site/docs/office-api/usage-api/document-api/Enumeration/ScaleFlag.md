# ScaleFlag

The condition to scale an image in the picture form.

## Type

Enumeration

## Values

- "always"
- "never"
- "tooBig"
- "tooSmall"

## Example

Set the scaling condition when the current picture form is scaled if it is too big.

```javascript editor-docx
// How do I set the scale flag of a picture form?

// Set picture form scale flag to "tooBig".

pictureForm.SetScaleFlag("tooBig");
```
