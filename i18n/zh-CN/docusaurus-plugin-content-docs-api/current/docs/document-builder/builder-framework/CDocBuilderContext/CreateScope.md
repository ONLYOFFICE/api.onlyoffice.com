import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateScope

创建[上下文作用域](../CDocBuilderContextScope/CDocBuilderContextScope.md)，用于设置在本地作用域内执行的所有操作的执行上下文。

:::note
对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.CreateScope` 方法。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateScope(self) -> CDocBuilderContextScope
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderContextScope CreateScope();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateScope([out, retval] I_DOCBUILDER_CONTEXT_SCOPE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderContextScope createScope();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderContextScope^ CreateScope();
        ```
    </TabItem>
</Tabs>

## 参数

*仅限 COM*

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | 名称   | 类型                                                                                  | 描述                 |
        | ------ | ------------------------------------------------------------------------------------- | --------------------------- |
        | result | [I_DOCBUILDER_CONTEXT_SCOPE**](../CDocBuilderContextScope/CDocBuilderContextScope.md) | 返回的上下文作用域。 |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        scope = context.CreateScope()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CContextScope oScope = oContext.CreateScope();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderContextScope* oScope = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->CreateScope(&oScope);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderContextScope scope = context.createScope();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CContextScope oScope = oContext.CreateScope();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
