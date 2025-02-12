# SaveFile

Saves the file after all the changes are made. The type of the file which will be saved needs to be set.

## Syntax

```cpp
HRESULT SaveFile([in] BSTR type, [in] BSTR path, [out, retval] VARIANT_BOOL* result);
```

## Parameters

| **Name** | **Type**      | **Description**                                                                                                                                                                                                |
| -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type     | BSTR          | The file extension. The following values are possible: `docx`, `odt`, `rtf`, `txt`, `pptx`, `xlsx`, `ods`, `csv`, `pdf` (see [OFFICESTUDIO_FILE_XXX](../../../builder-app/overview.md#format-types) values). |
| path     | BSTR          | The path to the file to be saved together with its name and extension.                                                                                                                                         |
| result   | VARIANT_BOOL* | Specifies if the operation of saving a file is successful or not.                                                                                                                                              |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->SaveFile("docx", "result.docx", &b);
oBuilder->Dispose();
```

### .docbuilder

```ts
builder.SaveFile("docx", "result.docx")
```
