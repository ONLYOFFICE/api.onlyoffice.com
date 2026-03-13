import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GetLength

Returns the length if the `CDocBuilderValue` object is an array/typed array. Otherwise, returns 0.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.GetLength` method is not used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def GetLength(self) -> int
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        unsigned int GetLength();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT GetLength([out, retval] long* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        int getLength();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        unsigned int GetLength();
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type  | Description                 |
        | ------ | ----- | --------------------------- |
        | result | long* | The returned object length. |
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
        length = charts.GetLength()
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
        unsigned int nLength = aCharts.GetLength();
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
        long nLength = 0;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->GetProperty(_bstr_t("Api"), &oApi);
        oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
        oDocument->Call(_bstr_t("GetAllCharts"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &aCharts);
        aCharts->GetLength(&nLength);
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
        int length = charts.getLength();
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
        uint nLength = aCharts.GetLength();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
