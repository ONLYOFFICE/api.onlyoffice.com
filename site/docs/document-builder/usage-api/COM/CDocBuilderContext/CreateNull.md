# CreateNull

Creates a null value, an analogue of `null` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateNull` method is not used.

## Syntax

```cpp
HRESULT CreateNull([out, retval] I_DOCBUILDER_VALUE** result);
```

## Parameters

| Parameter | Type                                                            | Description                                 |
| --------- | --------------------------------------------------------------- | ------------------------------------------- |
| result    | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The pointer to store the created null value |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oContent = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateNull(&oContent);
oBuilder->Dispose();
```
