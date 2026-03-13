import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Close

Closes the current scope. This method will be called automatically when the destructor is executed.

> Please note, that for the `.docbuilder` file the `CDocBuilderContextScope.Close` method is not used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def Close(self) -> None
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        void Close();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT Close();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        void close();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        void Close();
        ```
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        scope = context.CreateScope()
        scope.Close()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CContextScope oScope = oContext.CreateScope();
        oScope.Close();
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
        oScope->Close();
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderContextScope scope = context.createScope();
        scope.close();
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
        oScope.Close();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
