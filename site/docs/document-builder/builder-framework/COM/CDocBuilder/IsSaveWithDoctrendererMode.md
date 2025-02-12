# IsSaveWithDoctrendererMode

Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.

> Please note, that for the `.docbuilder` file the `CDocBuilder.IsSaveWithDoctrendererMode` method is not used.

## Syntax

```cpp
HRESULT IsSaveWithDoctrendererMode([out, retval] VARIANT_BOOL* result);
```

## Parameters

| **Name** | **Type**      | **Description**                                                                                                            |
| -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| result   | VARIANT_BOOL* | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->IsSaveWithDoctrendererMode(&b);
oBuilder->Dispose();
```
