import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ToString

将 `CDocBuilderValue` 对象转换为字符串。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.ToString` 方法。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def ToString(self) -> str
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        wchar_t* ToString();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT ToString([out, retval] BSTR* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        String toString();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        String^ ToString();
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | 名称   | 类型  | 描述             |
        | ------ | ----- | ---------------- |
        | result | BSTR* | 返回的字符串值。 |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        sGlobal = globalObj.ToString()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        wchar_t* sGlobal = oGlobal.ToString();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oGlobal = NULL;
        BSTR s;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->ToString(&s);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        String stringValue = global.toString();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        String^ sGlobal = oGlobal.ToString();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
