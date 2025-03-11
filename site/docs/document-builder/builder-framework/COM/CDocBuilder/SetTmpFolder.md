import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetTmpFolder

Sets the path to the folder where the program will temporarily save files needed for the program correct work. After the successful document file creation, all the files will be deleted from the folder. If no temporary folder is set, the system one will be used.

## Syntax

```cpp
HRESULT SetTmpFolder([in] BSTR folder);
```

## Parameters

| **Name** | **Type** | **Description**                                                 |
| -------- | -------- | --------------------------------------------------------------- |
| folder   | BSTR     | The path to the folder where the temporary files will be saved. |

## Example

### COM

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->Initialize();
        oBuilder->SetTmpFolder(L"DocBuilderTemp");
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp")
        ```
    </TabItem>
</Tabs>
