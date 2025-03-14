import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CloseFile

Closes the file to stop working with it. You can use a single ONLYOFFICE Document Builder instance to work with all your files, but you need to close the previous file before you can start working with the next one in this case.

## Syntax

```cpp
HRESULT CloseFile();
```

## Example

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->Initialize();
        oBuilder->CloseFile();
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CloseFile()
        ```
    </TabItem>
</Tabs>
