# Set（设置）

通过索引设置数组的值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Set` 方法。

## 语法

```cpp
void Set(const int& nIndex, CDocBuilderValue sValue);
```

## 参数

| **名称** | **数据类型**                                               | **描述**         |
| -------- | ----------------------------------------------------------- | ---------------- |
| nIndex   | const int&                                                  | 数组值的索引。   |
| sValue   | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | 要设置的值。     |

## 示例

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