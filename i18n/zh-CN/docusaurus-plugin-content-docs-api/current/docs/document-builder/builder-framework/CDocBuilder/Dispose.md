import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dispose

当不再需要时，从应用程序内存中卸载 ONLYOFFICE Document Builder。通常情况下，在退出进程之前不需要释放 JS，它应该会自动释放。仅当进程需要 JS 占用的资源时才应使用此方法。

:::note
对于 `.docbuilder` 文件，不使用 `CDocBuilder.Dispose` 方法。对于 .Net，请使用 [Destroy](Destroy.md) 替代。
:::

## 语法

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

## 示例

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
