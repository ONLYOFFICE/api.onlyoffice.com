#### HRESULT SaveFile(\[in] BSTR type, \[in] BSTR path, \[out, retval] VARIANT\_BOOL\* result);

Saves the file after all the changes are made. The type of the file which will be saved needs to be set.

## Parameters:

| Name     | Type            | Description                                                                                                                                                                                                                             |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *type*   | BSTR            | The file extension. The following values are possible: **docx**, **odt**, **rtf**, **txt**, **pptx**, **xlsx**, **ods**, **csv**, **pdf** (see [AVS\_OFFICESTUDIO\_FILE\_XXX](/docbuilder/integrationapi/default#format-types) values). |
| *path*   | BSTR            | The path to the file to be saved together with its name and extension.                                                                                                                                                                  |
| *result* | VARIANT\_BOOL\* | Specifies if the operation of saving a file is successful or not.                                                                                                                                                                       |

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->SaveFile("docx", "result.docx", &b);
oBuilder->Dispose();
```

#### .docbuilder

```
builder.SaveFile("docx", "result.docx");
```