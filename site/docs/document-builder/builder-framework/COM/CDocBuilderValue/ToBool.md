# ToBool

Converts the `CDocBuilderValue` object to a boolean value.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.ToBool` method is not used.

## Syntax

```cpp
HRESULT ToBool([out, retval] VARIANT_BOOL* result);
```

## Parameters

| Parameter | Type          | Description                 |
| --------- | ------------- | --------------------------- |
| result    | VARIANT_BOOL* | The returned boolean value. |

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
oGlobal->ToBool(&b);
oBuilder->Dispose();
```
