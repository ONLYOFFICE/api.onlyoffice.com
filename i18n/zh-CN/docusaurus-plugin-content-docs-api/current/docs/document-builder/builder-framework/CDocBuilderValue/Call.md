import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Call

调用指定的 Document Builder 方法。有关各种文档类型可用的方法，请参阅[文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或[表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilderValue.Call` 方法。而是直接使用该方法本身。请参阅下面的示例。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def Call(self, name: str, *args) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue Call(const wchar_t* sName, CDocBuilderValue p1, CDocBuilderValue p2, CDocBuilderValue p3, CDocBuilderValue p4, CDocBuilderValue p5, CDocBuilderValue p6);
        CDocBuilderValue Call(const char* sName, CDocBuilderValue p1, CDocBuilderValue p2, CDocBuilderValue p3, CDocBuilderValue p4, CDocBuilderValue p5, CDocBuilderValue p6);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT Call([in] BSTR name, [in, optional] VARIANT val1, [in, optional] VARIANT val2, [in, optional] VARIANT val3, [in, optional] VARIANT val4, [in, optional] VARIANT val5, [in, optional] VARIANT val6, [out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue call(String name, Object p1, Object p2, Object p3, Object p4, Object p5, Object p6);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ Call(String^ sName, CDocBuilderValue^ p1, CDocBuilderValue^ p2, CDocBuilderValue^ p3, CDocBuilderValue^ p4, CDocBuilderValue^ p5, CDocBuilderValue^ p6);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称  | 类型                                      | 描述                                         |
        | ----- | ----------------------------------------- | -------------------------------------------- |
        | name  | str                                       | Document Builder 方法的名称。                |
        | *args | [CDocBuilderValue](CDocBuilderValue.md)   | Document Builder 方法接受的参数。            |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称  | 类型                                      | 描述                                                    |
        | ----- | ----------------------------------------- | ------------------------------------------------------- |
        | sName | const wchar_t* \| const char*             | Document Builder 方法的名称（Unicode 或 UTF8 格式）。   |
        | p1-p6 | [CDocBuilderValue](CDocBuilderValue.md)   | Document Builder 方法接受的参数。                       |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称      | 类型                                        | 描述                                         |
        | --------- | ------------------------------------------- | -------------------------------------------- |
        | name      | BSTR                                        | Document Builder 方法的名称。                |
        | val1-val6 | VARIANT                                     | Document Builder 方法接受的参数。            |
        | result    | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | 返回的方法值。                               |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称  | 类型                                      | 描述                                         |
        | ----- | ----------------------------------------- | -------------------------------------------- |
        | name  | String                                    | Document Builder 方法的名称。                |
        | p1-p6 | Object                                    | Document Builder 方法接受的参数。            |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称  | 类型                                       | 描述                                         |
        | ----- | ------------------------------------------ | -------------------------------------------- |
        | sName | String^                                    | Document Builder 方法的名称。                |
        | p1-p6 | [CDocBuilderValue^](CDocBuilderValue.md)   | Document Builder 方法接受的参数。            |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]
        document = api.Call("GetDocument")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        CValue oApi = oGlobal["Api"];
        CValue oDocument = oApi.Call("GetDocument");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oGlobal = NULL;
        IONLYOFFICEDocBuilderValue* oApi = NULL;
        IONLYOFFICEDocBuilderValue* oDocument = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->GetProperty(_bstr_t("Api"), &oApi);
        oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        CDocBuilderValue api = global.get("Api");
        CDocBuilderValue doc = api.call("GetDocument");
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
        CValue oApi = oGlobal["Api"];
        CValue oDocument = oApi.Call("GetDocument");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        let doc = Api.GetDocument();
        ```
    </TabItem>
</Tabs>
