# IsInt

Returns true if the `CDocBuilderValue` object is an integer.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsInt` method is not used.

## Syntax

```cpp
HRESULT IsInt([out, retval] VARIANT_BOOL* result);
```

## Parameters

| Parameter | Type          | Description                                                    |
| --------- | ------------- | -------------------------------------------------------------- |
| result    | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is an integer. |

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
oGlobal->IsInt(&b);
oBuilder->Dispose();
```
