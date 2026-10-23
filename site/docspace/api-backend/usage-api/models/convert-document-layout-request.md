# ConvertDocumentLayoutRequest
The layout of forms printed as pdf documents or images.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **drawPlaceHolders** | **Boolean** | Whether an empty form field shows its placeholder text in the result; false leaves it blank. | [optional] [example: `true`] [nullable] |
| **drawFormHighlight** | **Boolean** | Whether form fields keep their highlight colour in the result; false draws them without it. | [optional] [example: `false`] [nullable] |
| **isPrint** | **Boolean** | Whether the print mode is turned on. It only applies to a docx converted into pdf: with the print mode off the highlight flag does nothing and the placeholder flag saves the forms in the pdf. | [optional] [example: `true`] [nullable] |
