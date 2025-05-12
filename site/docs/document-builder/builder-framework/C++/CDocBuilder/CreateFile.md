import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile

Creates a new file. The type of the file which will be created needs to be set.

## Syntax

```cpp
bool CreateFile(sExtension);
```

## Parameters

| **Name**   | **Data type**  | **Description**                                                                                                                                                                  |
| ---------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sExtension | const wchar_t* | The file extension. The following values are possible: `docx`, `xlsx`, `pptx`, or `pdf` (see [OFFICESTUDIO\_FILE\_XXX](../../../get-started/supported-formats.md) values). |

## Example

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.CreateFile("docx");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx");
        ```
    </TabItem>
</Tabs>
