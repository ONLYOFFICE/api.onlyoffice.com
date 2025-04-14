import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile

Creates a new file. The type of the file which will be created needs to be set.

## Syntax

```cpp
HRESULT CreateFile([in] BSTR type, [out, retval] VARIANT_BOOL* result);
```

## Parameters

| **Name** | **Type**      | **Description**                                                                                                                                                                |
| -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type     | BSTR          | The file extension. The following values are possible: `docx`, `xlsx`, `pptx`, or `pdf` (see [OFFICESTUDIO_FILE_XXX](../../../get-started/supported-formats.md) values). |
| result   | VARIANT_BOOL* | Specifies if the operation of creating a file is successful or not.                                                                                                            |

## Example

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->CreateFile(_bstr_t("docx"), &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx")
        ```
    </TabItem>
</Tabs>
