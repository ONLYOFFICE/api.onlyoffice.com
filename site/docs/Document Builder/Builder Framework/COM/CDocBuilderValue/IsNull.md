# IsNull

Returns true if the `CDocBuilderValue` object is null.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsNull` method is not used.

## Syntax

```cpp
HRESULT IsNull([out, retval] VARIANT_BOOL* result);
```

## Parameters

| Parameter | Type          | Description                                              |
| --------- | ------------- | -------------------------------------------------------- |
| result    | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is null. |

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
oGlobal->IsNull(&b);
oBuilder->Dispose();
```
