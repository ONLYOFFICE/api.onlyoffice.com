# ApiSection

Represents the ApiSection class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "section" | Returns a type of the ApiSection class. |
| [GetFooter](./Methods/GetFooter.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the content for the specified footer type. |
| [GetHeader](./Methods/GetHeader.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the content for the specified header type. |
| [GetNext](./Methods/GetNext.md) | [ApiSection](../ApiSection/ApiSection.md) \| null | Returns the next section if exists. |
| [GetPageHeight](./Methods/GetPageHeight.md) | [twips](../Enumeration/twips.md) | Gets page height for current section. |
| [GetPageWidth](./Methods/GetPageWidth.md) | [twips](../Enumeration/twips.md) | Gets page width for current section. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiSection](../ApiSection/ApiSection.md) \| null | Returns the previous section if exists. |
| [GetStartPageNumber](./Methods/GetStartPageNumber.md) | number | Returns the start page number of the specified section. |
| [GetType](./Methods/GetType.md) | [SectionBreakType](../Enumeration/SectionBreakType.md) | Returns the section break type. |
| [RemoveFooter](./Methods/RemoveFooter.md) | boolean | Removes the footer of the specified type from the current section. After removal, the footer will be inherited from  the previous section, or if this is the first section in the document, no footer of the specified type will be presented. |
| [RemoveHeader](./Methods/RemoveHeader.md) | boolean | Removes the header of the specified type from the current section. After removal, the header will be inherited from the previous section, or if this is the first section in the document, no header of the specified type will be presented. |
| [SetEqualColumns](./Methods/SetEqualColumns.md) | boolean | Specifies that all the text columns in the current section are of equal width. |
| [SetFooterDistance](./Methods/SetFooterDistance.md) | boolean | Specifies the distance from the bottom edge of the page to the bottom edge of the footer. |
| [SetHeaderDistance](./Methods/SetHeaderDistance.md) | boolean | Specifies the distance from the top edge of the page to the top edge of the header. |
| [SetNotEqualColumns](./Methods/SetNotEqualColumns.md) | boolean | Specifies that all the columns in the current section have the different widths. Number of columns is equal  to the length of the aWidth array. The length of the aSpaces array MUST BE equal to (aWidth.length - 1). |
| [SetPageMargins](./Methods/SetPageMargins.md) | boolean | Specifies the page margins for all the pages in this section. |
| [SetPageSize](./Methods/SetPageSize.md) | boolean | Specifies the properties (size and orientation) for all the pages in the current section. |
| [SetStartPageNumber](./Methods/SetStartPageNumber.md) | boolean | Sets the start page number for the specified section. |
| [SetTitlePage](./Methods/SetTitlePage.md) | boolean | Specifies whether the current section in this document has the different header and footer for the section first page. |
| [SetType](./Methods/SetType.md) | boolean | Specifies a type of the current section. The section type defines how the contents of the current  section are placed relative to the previous section. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiSection object into the JSON object. |
