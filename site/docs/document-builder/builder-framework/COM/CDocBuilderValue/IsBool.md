# IsBool

Returns true if the `CDocBuilderValue` object is a boolean value.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsBool` method is not used.

## Syntax

```cpp
HRESULT IsBool([out, retval] VARIANT_BOOL* result);
```

## Parameters

| Parameter | Type          | Description                                                         |
| --------- | ------------- | ------------------------------------------------------------------- |
| result    | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is a boolean value. |

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
oGlobal->IsBool(&b);
oBuilder->Dispose();
```
