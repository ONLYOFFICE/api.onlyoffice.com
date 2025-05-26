import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# closeFile

Closes the file to stop working with it. You can use a single ONLYOFFICE Document Builder instance to work with all your files, but you need to close the previous file before you can start working with the next one in this case.

## Syntax

```java
void closeFile();
```

## Example

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.closeFile();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>
