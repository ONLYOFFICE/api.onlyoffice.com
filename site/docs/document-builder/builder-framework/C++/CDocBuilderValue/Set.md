# Set

Sets an array value by its index.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Set` method is not used.

## Syntax

```cpp
void Set(const int& nIndex, CDocBuilderValue sValue);
```

## Parameters

| **Name** | **Data type**                                               | **Description**               |
| -------- | ----------------------------------------------------------- | ----------------------------- |
| nIndex   | const int&                                                  | The index of the array value. |
| sValue   | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | The value to be set.          |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
CValue aCharts = oDocument.GetAllCharts(); 
CValue oChart =  Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
aCharts.Set(1, oChart);
CDocBuilder::Dispose();
```
