# IsEmpty

Returns true if the `CDocBuilderValue` object is empty.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsEmpty` method is not used.

## Syntax

```cpp
HRESULT IsEmpty([out, retval] VARIANT_BOOL* result);
```

## Parameters

| Parameter | Type          | Description                                               |
| --------- | ------------- | --------------------------------------------------------- |
| result    | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is empty. |

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
oGlobal->IsEmpty(&b);
oBuilder->Dispose();
```
