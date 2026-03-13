import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IsSaveWithDoctrendererMode

Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.

:::note
For the `.docbuilder` file the `CDocBuilder.IsSaveWithDoctrendererMode` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def IsSaveWithDoctrendererMode(self) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool IsSaveWithDoctrendererMode();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT IsSaveWithDoctrendererMode([out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean isSaveWithDoctrendererMode();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool IsSaveWithDoctrendererMode();
        ```
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        doctrendererMode = builder.IsSaveWithDoctrendererMode()
        print(doctrendererMode)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        bool bDoctrendererMode = oBuilder.IsSaveWithDoctrendererMode();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        VARIANT_BOOL b;
        oBuilder->IsSaveWithDoctrendererMode(&b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        boolean doctrendererMode = builder.isSaveWithDoctrendererMode();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        bool doctrendererMode = oBuilder.IsSaveWithDoctrendererMode();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
