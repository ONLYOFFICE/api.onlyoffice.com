import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# createFile

Creates a new file. The type of the file which will be created needs to be set.

## Syntax

```java
boolean createFile(int | String type);
```

## Parameters

| Parameter | Type         | Description                                                                                                                                                                                                                                    |
| --------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | int \| String | The type of the file to be created set as a hexadecimal integer for the Java code or `docx`, `xlsx`, `pptx`, or `pdf` for the `.docbuilder` script file (see [OFFICESTUDIO_FILE_XXX](../../../get-started/supported-formats.md) values). |

## Example


<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.createFile(FileTypes.Document.DOCX);
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx")
        ```
    </TabItem>
</Tabs>
