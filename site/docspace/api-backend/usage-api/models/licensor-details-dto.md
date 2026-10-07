# LicensorDetailsDto
The vendor details of the installation in the shape the licensor listing and the reset of the company details return, with the licensor flag spelled `IsLicensor`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **companyName** | **String** | The vendor name the About page shows and the letters sign off with. Until details are saved it holds whatever the installation ships as its built-in vendor, and it is empty on an installation that ships none. | [optional] [example: `My Own Corporation`] [minLength: 0] [maxLength: 255] [nullable] |
| **site** | **URI** (uri) | The address the vendor name links to, as an absolute URL with its scheme. Empty under the same conditions as `companyName`. | [optional] [example: `https://www.example.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **email** | **String** (email) | The mailbox the About page offers for reaching the vendor. It is not the portal's own support address, and it is empty under the same conditions as `companyName`. | [optional] [example: `contact@example.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **address** | **String** | The postal address of the vendor as one free-form line, in the shape it was saved in - no structure is imposed on it. | [optional] [example: `123 Business St, New York, NY 10001`] [minLength: 0] [maxLength: 255] [nullable] |
| **phone** | **String** (tel) | The telephone number of the vendor in the shape it was saved in, with no dialling format enforced. | [optional] [example: `+1-800-555-0123`] [minLength: 0] [maxLength: 255] [nullable] |
| **IsLicensor** | **Boolean** | Whether these details are those of the licensor of the product itself rather than of a reseller. Saving through `POST api/2.0/settings/rebranding/company` always clears it, so only details that came with the installation can report `true`. The name starts with a capital letter, unlike the other fields. | [optional] [example: `false`] |
| **hideAbout** | **Boolean** | Whether the About page is hidden from the interface. A plan that does not include branding cannot switch it on: the value is stored as `false` in that case, so it can come back different from what was saved. | [optional] [example: `false`] |
| **lastModified** | **Date** (date-time) | When these details were last stored. Details that were never stored report the moment they were read; the built-in ONLYOFFICE entry and the answer of the reset operation report `0001-01-01T00:00:00`. | [optional] [example: `2026-01-01T10:00:00`] |
