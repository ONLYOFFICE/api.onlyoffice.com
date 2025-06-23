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

This example sets the scaling condition when the current picture form is scaled if it is too big.

```javascript editor-pdf
// How to set a scale flag for picture form.

// Set picture form scale flag to "tooBig".

pictureForm.SetScaleFlag("tooBig");
```
