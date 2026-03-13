import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set

Sets an array value by its index.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Set` method is not used.

## Syntax

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

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name  | Type                                    | Description                   |
        | ----- | --------------------------------------- | ----------------------------- |
        | key   | int                                     | The index of the array value. |
        | value | [CDocBuilderValue](CDocBuilderValue.md) | The array value to be set.    |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name   | Type                                    | Description                   |
        | ------ | --------------------------------------- | ----------------------------- |
        | nIndex | const int&                              | The index of the array value. |
        | sValue | [CDocBuilderValue](CDocBuilderValue.md) | The value to be set.          |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name  | Type                                        | Description                   |
        | ----- | ------------------------------------------- | ----------------------------- |
        | index | long                                        | The index of the array value. |
        | value | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | The array value to be set.    |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name  | Type          | Description                           |
        | ----- | ------------- | ------------------------------------- |
        | index | int \| String | The index or name of the array value. |
        | value | Object        | The array value to be set.            |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name   | Type                                     | Description                   |
        | ------ | ---------------------------------------- | ----------------------------- |
        | nIndex | int                                      | The index of the array value. |
        | sValue | [CDocBuilderValue^](CDocBuilderValue.md) | The array value to be set.    |
    </TabItem>
</Tabs>

## Example

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

## Index operator

The `operator[]` postfix expression can also be used to set an array value by its index:

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
