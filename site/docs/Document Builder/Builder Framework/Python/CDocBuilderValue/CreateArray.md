# CreateArray

Creates an array value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateArray](../CDocBuilderContext/CreateArray.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateArray` method is not used.

## Syntax

```py
def CreateArray(int length);
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
globalObj = context.GetGlobal()
api = globalObj["Api"]
array = api.CreateArray()
```
