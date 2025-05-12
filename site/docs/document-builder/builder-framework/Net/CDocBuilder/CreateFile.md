import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile

Creates a new file. The type of the file which will be created needs to be set.

## Syntax

```cs
bool CreateFile(int nType);
```

## Parameters

| Parameter | Type | Description                                                                                                                                                                                                                                      |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nType     | int  | The type of the file to be created set as a hexadecimal integer for the .Net code or `docx`, `xlsx`, `pptx`, or `pdf` for the `.docbuilder` script file (see [OFFICESTUDIO\_FILE\_XXX](../../../get-started/supported-formats.md) values). |

## Example

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        var doctype = (int)OfficeFileTypes.Document.DOCX;
        oBuilder.CreateFile(doctype);
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx");
        ```
    </TabItem>
</Tabs>
