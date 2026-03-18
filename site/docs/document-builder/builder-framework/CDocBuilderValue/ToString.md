import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ToString

Converts the `CDocBuilderValue` object to a string.

:::note
For JS, this method is not used.
:::

## Syntax

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

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        This method has no parameters.
    </TabItem>
    <TabItem value="cpp" label="C++">
        This method has no parameters.
    </TabItem>
    <TabItem value="com" label="COM">
        | Name   | Type  | Description                |
        | ------ | ----- | -------------------------- |
        | result | BSTR* | The returned string value. |
    </TabItem>
    <TabItem value="java" label="Java">
        This method has no parameters.
    </TabItem>
    <TabItem value="net" label=".Net">
        This method has no parameters.
    </TabItem>
</Tabs>

## Example

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
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
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
