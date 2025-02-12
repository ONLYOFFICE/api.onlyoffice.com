# IsTypedArray

Returns true if the `CDocBuilderValue` object is a typed array.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsTypedArray` method is not used.

## Syntax

```cpp
HRESULT IsTypedArray([out, retval] VARIANT_BOOL* result);
```

## Parameters

| Parameter | Type          | Description                                                       |
| --------- | ------------- | ----------------------------------------------------------------- |
| result    | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is a typed array. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->IsTypedArray(&b);
oBuilder->Dispose();
```
