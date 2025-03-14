# CreateArray

Creates an array value, an analogue of `new Array (length)` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateArray` method is not used.

## Syntax

```cs
CDocBuilderValue^ CreateArray(int nLength);
```

## Parameters

| Parameter | Type | Description       |
| --------- | ---- | ----------------- |
| nLength   | int  | The array length. |

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oArray = oContext.CreateArray(2);
CDocBuilder.Destroy();
```
