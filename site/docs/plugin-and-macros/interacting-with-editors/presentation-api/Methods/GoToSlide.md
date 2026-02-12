# GoToSlide

Sets the active slide in the editor by its index.

## Syntax

```javascript
expression.GoToSlide(slideNumber);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| slideNumber | Required | number |  | The slide index. |

## Returns

This method doesn't return any data.

## Example

```javascript
const addSlides = function () {
	const count = Asc.scope.count;
	const presentation = Api.GetPresentation();
	for (let i = 0; i < count; i += 1) {
		const slide = Api.CreateSlide();
		presentation.AddSlide(slide);
	}
};

Asc.scope.count = 1;
Asc.plugin.callCommand(addSlides);
Asc.plugin.executeMethod('GoToSlide', [2]);
```
