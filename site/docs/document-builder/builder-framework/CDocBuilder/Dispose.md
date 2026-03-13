import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dispose

Unloads the ONLYOFFICE Document Builder from the application memory when it is no longer needed. Generally, there is no need to dispose JS before exiting the process, it should happen automatically. It should only be used if the process needs the resources taken up by JS.

:::note
For the `.docbuilder` file the `CDocBuilder.Dispose` method is not used. For .Net, use [Destroy](Destroy.md) instead.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        @classmethod
        def Dispose(cls)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        static void Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        static void dispose();
        ```
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        docbuilder.CDocBuilder.Initialize("../documentBuilder")
        builder = docbuilder.CDocBuilder()
        docbuilder.CDocBuilder.Dispose()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->Initialize();
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilder.dispose();
        ```
    </TabItem>
</Tabs>
