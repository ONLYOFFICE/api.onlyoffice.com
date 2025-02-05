# CreateUndefined

Creates an undefined value, an analogue of `undefined` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateUndefined` method is not used.

## Syntax

```cpp
HRESULT CreateUndefined([out, retval] I_DOCBUILDER_VALUE** result);
```

## Parameters

| Parameter | Type                                                            | Description                   |
| --------- | --------------------------------------------------------------- | ----------------------------- |
| result    | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The returned undefined value. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oContent = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateUndefined(&oContent);
oBuilder->Dispose();
```
