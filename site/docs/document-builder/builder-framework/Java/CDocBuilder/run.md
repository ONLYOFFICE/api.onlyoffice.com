import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# run

Runs the ONLYOFFICE Document Builder executable. If you do not want to write a Java application, you can simply use the `docbuilder.exe` executable file and run it with the `.docbuilder` file as an argument, where all the code for the document file creation will be written. For Java, create the `CDocBuilder` object and call the `run` method with the path to the executable file from the `path` parameter.

## Syntax

```java
boolean run(String path);
```

## Parameters

| Parameter | Type   | Description                                             |
| --------- | ------ | ------------------------------------------------------- |
| path      | String | The path to the ONLYOFFICE Document Builder executable. |

## Example

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.run("path-to-script.docbuilder");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe mydocument.docbuilder
        ```
    </TabItem>
</Tabs>
