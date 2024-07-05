#### unsigned int GetLength();

Returns the length if the **CDocBuilderValue** object is an array/typed array. Otherwise, returns 0.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.GetLength* method is not used.

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
unsigned int nLength = aCharts.GetLength();
CDocBuilder::Dispose();
```