import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile

Creates a new file. The type of the file which will be created needs to be set.

## Syntax

```cpp
bool CreateFile(int nExtension);
```

## Parameters

| **Name**   | **Data type**  | **Description**                                                                                                                                                                  |
| ---------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nExtension | int | The file extension. The following values are possible: `OFFICESTUDIO_FILE_DOCUMENT_DOCX`, `OFFICESTUDIO_FILE_SPREADSHEET_XLSX`, `OFFICESTUDIO_FILE_PRESENTATION_PPTX`, or `OFFICESTUDIO_FILE_DOCUMENT_OFORM_PDF` (see [OFFICESTUDIO\_FILE\_XXX](../../../get-started/supported-formats.md) values). |

## Example

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.CreateFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX);
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx");
        ```
    </TabItem>
</Tabs>
