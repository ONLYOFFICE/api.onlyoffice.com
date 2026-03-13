import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set

通过索引设置数组值。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.Set` 方法。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def Set(self, key: int, value: CDocBuilderValue) -> None
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        void Set(const int& nIndex, CDocBuilderValue sValue);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT Set([in] long index, [in] I_DOCBUILDER_VALUE** value);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        void set(int | String index, Object value);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        void Set(int nIndex, CDocBuilderValue^ sValue);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称  | 类型                                    | 描述               |
        | ----- | --------------------------------------- | ------------------ |
        | key   | int                                     | 数组值的索引。     |
        | value | [CDocBuilderValue](CDocBuilderValue.md) | 要设置的数组值。   |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称   | 类型                                    | 描述               |
        | ------ | --------------------------------------- | ------------------ |
        | nIndex | const int&                              | 数组值的索引。     |
        | sValue | [CDocBuilderValue](CDocBuilderValue.md) | 要设置的值。       |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称  | 类型                                        | 描述               |
        | ----- | ------------------------------------------- | ------------------ |
        | index | long                                        | 数组值的索引。     |
        | value | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | 要设置的数组值。   |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称  | 类型          | 描述                   |
        | ----- | ------------- | ---------------------- |
        | index | int \| String | 数组值的索引或名称。   |
        | value | Object        | 要设置的数组值。       |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称   | 类型                                     | 描述               |
        | ------ | ---------------------------------------- | ------------------ |
        | nIndex | int                                      | 数组值的索引。     |
        | sValue | [CDocBuilderValue^](CDocBuilderValue.md) | 要设置的数组值。   |
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
        charts = document.Call("GetAllCharts")
        chart = api.Call("CreateChart", "bar3D", [[200, 240, 280], [250, 260, 280]],
                         ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016],
                         4051300, 2347595, 24)
        charts.Set(1, chart)
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
        CValue aCharts = oDocument.Call("GetAllCharts");
        CValue oChart = oApi.Call("CreateChart", "bar3D", ...);
        aCharts.Set(1, oChart);
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
        IONLYOFFICEDocBuilderValue* aParagraphs = NULL;
        IONLYOFFICEDocBuilderValue* oParagraph = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->GetProperty(_bstr_t("Api"), &oApi);
        oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
        oDocument->Call(_bstr_t("GetAllParagraphs"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &aParagraphs);
        oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
        aParagraphs->Set(1, oParagraph);
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
        CDocBuilderValue charts = doc.call("GetAllCharts");
        CDocBuilderValue chart = api.call("CreateChart", "bar3D", ...);
        charts.set(1, chart);
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
        CValue aCharts = oDocument.Call("GetAllCharts");
        CValue oChart = oApi.Call("CreateChart", "bar3D", ...);
        aCharts.Set(1, oChart);
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>

## 索引运算符

`operator[]` 后缀表达式也可用于通过索引设置数组值：

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        array[index] = value
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        array[index] = value
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        property CDocBuilderValue^ default[int]
        ```
    </TabItem>
</Tabs>
