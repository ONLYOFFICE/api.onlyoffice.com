# CreateArray

Creates an array value, an analogue of `new Array (length)` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateArray` method is not used.

## Syntax

```py
def CreateArray(self, int length);
```

## Parameters

| Parameter | Type | Description       |
| --------- | ---- | ----------------- |
| length    | int  | The array length. |

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateArray(1)
```
