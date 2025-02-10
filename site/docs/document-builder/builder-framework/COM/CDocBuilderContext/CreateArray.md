# CreateArray

Creates an array value, an analogue of `new Array (length)` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateArray` method is not used.

## Syntax

```cpp
HRESULT CreateArray([in] long length, [out, retval] I_DOCBUILDER_VALUE** result);
```

## Parameters

| Parameter | Type                                                            | Description         |
| --------- | --------------------------------------------------------------- | ------------------- |
| length    | long                                                            | The array length.   |
| result    | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The returned array. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oContent = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateArray(1, &oContent);
oBuilder->Dispose();
```
