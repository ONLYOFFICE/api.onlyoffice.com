# SaveCompanyInfoRequest
The company the installation is branded for, as shown on the About page and in letters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **companyName** | **String** | The company name. | [optional] [example: `ONLYOFFICE`] [minLength: 0] [maxLength: 255] [nullable] |
| **site** | **URI** (uri) | The company website, as an absolute URL. | [optional] [example: `https://www.onlyoffice.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **email** | **String** (email) | The contact email address. | [optional] [example: `support@onlyoffice.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **address** | **String** | The postal address. | [optional] [example: `Lubanas st. 125a-25`] [minLength: 0] [maxLength: 255] [nullable] |
| **phone** | **String** (tel) | The contact phone number. | [optional] [example: `+7 843 2271372`] [minLength: 0] [maxLength: 255] [nullable] |
| **IsLicensor** | **Boolean** | Accepted for compatibility with earlier clients and not read: saved details are never those of the licensor, so the server always stores `false`. | [optional] [example: `false`] |
| **hideAbout** | **Boolean** | Whether the About page is hidden. | [optional] [example: `false`] |
| **lastModified** | **Date** (date-time) | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `2026-01-01T10:00:00`] |
