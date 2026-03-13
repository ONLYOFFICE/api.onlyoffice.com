import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get

Returns an array value by its index.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Get` method is not used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def Get(self, key: int) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue Get(const int& nIndex);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT Get([in] long index, [out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue get(int | String index);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ Get(int nIndex);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name | Type | Description                   |
        | ---- | ---- | ----------------------------- |
        | key  | int  | The index of the array value. |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name   | Type       | Description                   |
        | ------ | ---------- | ----------------------------- |
        | nIndex | const int& | The index of the array value. |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name   | Type                                        | Description                   |
        | ------ | ------------------------------------------- | ----------------------------- |
        | index  | long                                        | The index of the array value. |
        | result | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | The returned array value.     |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name  | Type          | Description                           |
        | ----- | ------------- | ------------------------------------- |
        | index | int \| String | The index or name of the array value. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name   | Type | Description                   |
        | ------ | ---- | ----------------------------- |
        | nIndex | int  | The index of the array value. |
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
        chart = charts.Get(1)
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
        CValue oChart = aCharts.Get(1);
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
        IONLYOFFICEDocBuilderValue* aCharts = NULL;
        IONLYOFFICEDocBuilderValue* oChart = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->GetProperty(_bstr_t("Api"), &oApi);
        oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
        oDocument->Call(_bstr_t("GetAllCharts"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &aCharts);
        aCharts->Get(1, &oChart);
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
        CDocBuilderValue chart = charts.get(1);
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
        CValue oChart = aCharts.Get(1);
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        let doc = Api.GetDocument();
        let charts = doc.GetAllCharts();
        let chart = charts[1];
        ```
    </TabItem>
</Tabs>

## Index operator

The `operator[]` postfix expression can also be used to get an array value by its index:

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        value[index]
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue operator[](const int& index);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        value[index]
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        property CDocBuilderValue^ default[int]
        ```
    </TabItem>
</Tabs>

### Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]
        document = api.Call("GetDocument")
        charts = document.Call("GetAllCharts")
        chart = charts[1]
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
        CValue oChart = aCharts[1];
        CDocBuilder::Dispose();
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
        CDocBuilderValue chart = charts[1];
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
        CValue oChart = aCharts[1];
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
