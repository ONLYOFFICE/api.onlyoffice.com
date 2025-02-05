# ToString

Converts the `CDocBuilderValue` object to a string.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.ToString` method is not used.

## Syntax

```cpp
HRESULT ToString([out, retval] BSTR* result);
```

## Parameters

| Parameter | Type  | Description                |
| --------- | ----- | -------------------------- |
| result    | BSTR* | The returned string value. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
BSTR str;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->ToString(&str);
oBuilder->Dispose();
```
