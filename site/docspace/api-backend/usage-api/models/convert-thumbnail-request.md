# ConvertThumbnailRequest
How a thumbnail is fitted. A field left out takes the document service default.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **aspect** | **Integer** (int32) | The mode to fit the image to the height and width specified: 0 - stretch file to fit height and width; 1 - keep the aspect for the image; 2 - convert the metric size of the page into pixels at 96 dpi. | [optional] [example: `1`] [nullable] |
| **first** | **Boolean** | Whether a thumbnail is made of the first page only; false makes one of every page. | [optional] [example: `true`] [nullable] |
| **height** | **Integer** (int32) | The thumbnail height in pixels; not used with aspect 2. | [optional] [example: `100`] [nullable] |
| **width** | **Integer** (int32) | The thumbnail width in pixels; not used with aspect 2. | [optional] [example: `100`] [nullable] |
