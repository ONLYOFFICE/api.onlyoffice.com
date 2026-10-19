# ShapesMergeOperation

The operation used to merge shapes.

- **"union"** - unites the shapes into one shape.
- **"combine"** - unites the shapes and removes their overlapping areas.
- **"fragment"** - splits the shapes into separate shapes along their intersecting lines.
- **"intersect"** - keeps only the overlapping area of the shapes.
- **"subtract"** - subtracts the other shapes from the first one.

## Type

Enumeration

## Values

- "union"
- "combine"
- "fragment"
- "intersect"
- "subtract"

## Example

Cut a circle out of a rectangle in a document.

```javascript editor-pptx
// Pass the merge operation as a string to the MergeShapes method.

// Merge the shapes with the "subtract" operation so that the circle is removed from the rectangle.

Api.MergeShapes([rectangle, circle], "subtract");
```
