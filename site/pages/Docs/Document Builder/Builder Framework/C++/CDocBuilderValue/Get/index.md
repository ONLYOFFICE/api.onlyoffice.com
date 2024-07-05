#### CDocBuilderValue Get(nIndex);

Returns an array value by its index.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.Get* method is not used.

## Parameters:

| Name     | Type       | Description                   |
| -------- | ---------- | ----------------------------- |
| *nIndex* | const int& | The index of the array value. |

## Example

#### C++

```
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

The **operator\[]** postfix expression can be also used to get an array value by its index:

```
CDocBuilderValue operator[](const int& name);
```

## Example

#### C++

```
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