import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetTmpFolder

Sets the path to the folder where the program will temporarily save files needed for the program correct work. After the successful document file creation, all the files will be deleted from the folder. If no temporary folder is set, the system one will be used.

## Syntax

```py
def SetTmpFolder(self, str folder);
```

## Parameters

| Parameter | Type | Description                                                     |
| --------- | ---- | --------------------------------------------------------------- |
| folder    | str  | The path to the folder where the temporary files will be saved. |

## Example

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.SetTmpFolder("DocBuilderTemp")
        builder.CreateFile("docx")

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        ```
    </TabItem>
</Tabs>
