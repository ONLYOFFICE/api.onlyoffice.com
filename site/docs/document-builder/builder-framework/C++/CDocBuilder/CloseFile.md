import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CloseFile

Closes the file to stop working with it. You can use a single ONLYOFFICE Document Builder instance to work with all your files, but you need to close the previous file before you can start working with the next one in this case.

## Syntax

```cpp
void CloseFile();
```

## Example

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.CloseFile();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CloseFile()
        ```
    </TabItem>
</Tabs>
