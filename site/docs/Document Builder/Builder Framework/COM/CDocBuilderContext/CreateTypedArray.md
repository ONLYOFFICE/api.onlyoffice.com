# CreateTypedArray

Creates a Uint8Array value, an analogue of `Uint8Array` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateTypedArray` method is not used.

## Syntax

```cpp
HRESULT CreateTypedArray([in] VARIANT buffer, [in] long length, [out, retval] I_DOCBUILDER_VALUE** result);
```

## Parameters

| Parameter | Type                                                            | Description               |
| --------- | --------------------------------------------------------------- | ------------------------- |
| buffer    | VARIANT                                                         | The array buffer.         |
| length    | long                                                            | The array length.         |
| result    | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The returned typed array. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oArr = NULL;
CComSafeArray<BYTE> arr;
arr.Add(1);
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateTypedArray(ATL::CComVariant(arr), 1, &oArr);
oBuilder->Dispose();
```
