# PatternType

The available preset patterns which can be used for the fill.

## Type

Enumeration

## Values

- "cross"
- "dashDnDiag"
- "dashHorz"
- "dashUpDiag"
- "dashVert"
- "diagBrick"
- "diagCross"
- "divot"
- "dkDnDiag"
- "dkHorz"
- "dkUpDiag"
- "dkVert"
- "dnDiag"
- "dotDmnd"
- "dotGrid"
- "horz"
- "horzBrick"
- "lgCheck"
- "lgConfetti"
- "lgGrid"
- "ltDnDiag"
- "ltHorz"
- "ltUpDiag"
- "ltVert"
- "narHorz"
- "narVert"
- "openDmnd"
- "pct10"
- "pct20"
- "pct25"
- "pct30"
- "pct40"
- "pct5"
- "pct50"
- "pct60"
- "pct70"
- "pct75"
- "pct80"
- "pct90"
- "plaid"
- "shingle"
- "smCheck"
- "smConfetti"
- "smGrid"
- "solidDmnd"
- "sphere"
- "trellis"
- "upDiag"
- "vert"
- "wave"
- "wdDnDiag"
- "wdUpDiag"
- "weave"
- "zigZag"


## Example

This example sets the picture position measured in percent inside the current form.

```javascript editor-docx
// How to create a pattern fill indicating its pattern type.

// Create a dash diagonal pattern.

let fill = Api.CreatePatternFill(
	"dashDnDiag",
	Api.RGB(0, 225, 0),
	Api.RGB(255, 0, 0)
);

```
