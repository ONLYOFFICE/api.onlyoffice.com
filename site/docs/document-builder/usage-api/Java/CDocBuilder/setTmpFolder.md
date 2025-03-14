import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# setTmpFolder

Sets the path to the folder where the program will temporarily save files needed for the program correct work. After the successful document file creation, all the files will be deleted from the folder. If no temporary folder is set, the system one will be used.

## Syntax

```java
void setTmpFolder(String folder);
```

## Parameters

| Parameter | Type   | Description                                                     |
| --------- | ------ | --------------------------------------------------------------- |
| folder    | String | The path to the folder where the temporary files will be saved. |

## Example

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.setTmpFolder(L"DocBuilderTemp");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp")
        ```
    </TabItem>
</Tabs>
