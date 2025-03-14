import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run

Runs the ONLYOFFICE Document Builder executable. If you do not want to write a Python application, you can simply use the `docbuilder.exe` executable file and run it with the `.docbuilder` file as an argument, where all the code for the document file creation will be written. For Python, create the `CDocBuilder` object and call the `Run` method with the path to the executable file from the `path` parameter.

## Syntax

```py
def Run(self, str path);
```

## Parameters

| Parameter | Type | Description                                             |
| --------- | ---- | ------------------------------------------------------- |
| path      | str  | The path to the ONLYOFFICE Document Builder executable. |

## Example

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        builder = docbuilder.CDocBuilder()
        builder.Run("path-to-script.docbuilder")
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe mydocument.docbuilder
        ```
    </TabItem>
</Tabs>
