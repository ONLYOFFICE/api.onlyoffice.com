import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GetContext

返回当前的 JS [上下文](../CDocBuilderContext/CDocBuilderContext.md)。

:::note
对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetContext` 方法。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def GetContext(self) -> CDocBuilderContext
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderContext GetContext();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT GetContext([out, retval] I_DOCBUILDER_CONTEXT** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderContext getContext(boolean enterContext);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderContext^ GetContext();
        ```
    </TabItem>
</Tabs>

## 参数

*仅限 COM 和 Java*

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | 名称   | 类型                   | 描述              |
        | ------ | ---------------------- | ------------------------ |
        | result | [I_DOCBUILDER_CONTEXT**](../CDocBuilderContext/CDocBuilderContext.md) | 返回的 JS 上下文。 |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称         | 类型    | 默认值 | 描述                                    |
        | ------------ | ------- | ------- | ---------------------------------------------- |
        | enterContext | boolean | false   | 指定是否进入上下文。 |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CDocBuilderContext oContext = oBuilder.GetContext();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        oBuilder->GetContext(&oContext);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
