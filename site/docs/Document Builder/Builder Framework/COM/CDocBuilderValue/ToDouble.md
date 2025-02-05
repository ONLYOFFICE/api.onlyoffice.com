# ToDouble

Converts the `CDocBuilderValue` object to a double value.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.ToDouble` method is not used.

## Syntax

```cpp
HRESULT ToDouble([out, retval] double* result);
```

## Parameters

| Parameter | Type    | Description                |
| --------- | ------- | -------------------------- |
| result    | double* | The returned double value. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
double dbl;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->ToDouble(&dbl);
oBuilder->Dispose();
```
