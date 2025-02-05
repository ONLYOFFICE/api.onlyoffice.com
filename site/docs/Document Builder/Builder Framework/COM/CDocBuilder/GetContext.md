# GetContext

Returns the current JS [context](../CDocBuilderContext/CDocBuilderContext.md).

> Please note, that for the `.docbuilder` file the `CDocBuilder.GetContext` method is not used.

## Syntax

```cpp
HRESULT GetContext([out, retval] I_DOCBUILDER_CONTEXT** result);
```

## Parameters

| **Name** | **Type**                                                              | **Description**          |
| -------- | --------------------------------------------------------------------- | ------------------------ |
| result   | [I_DOCBUILDER_CONTEXT**](../CDocBuilderContext/CDocBuilderContext.md) | The returned JS context. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
oBuilder->GetContext(&oContext);
oBuilder->Dispose();
```
