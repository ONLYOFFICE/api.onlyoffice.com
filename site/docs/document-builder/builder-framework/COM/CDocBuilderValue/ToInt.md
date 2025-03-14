# ToInt

Converts the `CDocBuilderValue` object to an integer.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.ToInt` method is not used.

## Syntax

```cpp
HRESULT ToInt([out, retval] long* result);
```

## Parameters

| Parameter | Type  | Description                 |
| --------- | ----- | --------------------------- |
| result    | long* | The returned integer value. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
long l;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->ToInt(&l);
oBuilder->Dispose();
```
