# IsError

Checks for errors in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.IsError` method is not used.

## Syntax

```cpp
HRESULT IsError([out, retval] VARIANT_BOOL* result);
```

## Parameters

| Parameter | Type          | Description                       |
| --------- | ------------- | --------------------------------- |
| result    | VARIANT_BOOL* | Specifies whether an error occurs |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->IsError(&b);
oBuilder->Dispose();
```
