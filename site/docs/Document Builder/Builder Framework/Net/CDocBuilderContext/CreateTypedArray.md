# CreateTypedArray

Creates a Uint8Array value, an analogue of `Uint8Array` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateTypedArray` method is not used.

## Syntax

```cs
CDocBuilderValue^ CreateTypedArray(array | <Byte>^ aBuffer);
```

## Parameters

| Parameter | Type               | Description       |
| --------- | ------------------ | ----------------- |
| aBuffer   | array \| \<Byte\>^ | The array buffer. |

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
array<System::Byte>^ aBuffer = gcnew array<Byte>(1500);
CValue oTypedArray = oContext.CreateTypedArray(aBuffer);
CDocBuilder.Destroy();
```
