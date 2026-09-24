# FolderContentDtoInteger
One page of the contents of a folder or of a section: its entries split into files and folders, the folder itself, and the counters needed to page through the rest.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **files** | [**List**](file-entry-base-dto.md) | The file entries of this page. It is empty when the folder holds no files, when the filters matched none of them, and in the sections that list rooms only. | [optional] [example: `[{id=10, title=document.docx}]`] [nullable] |
| **folders** | [**List**](file-entry-base-dto.md) | The folder entries of this page. In a section of rooms these entries are the rooms themselves, which is where their type, tags, logo and quota are read from. | [optional] [example: `[{id=20, title=My Folder}]`] [nullable] |
| **current** | [**FolderDtoInteger**](folder-dto-integer.md) | The folder or section the page was read from, with its own title, type and access rights. It describes the container, not the entries, and is filled in even when the page is empty. | [optional] |
| **pathParts** | **oas_any_type_not_mapped** |  | [required] [nullable] |
| **startIndex** | **Integer** (int32) | The position of the first entry of this page in the whole result, echoing the requested start index. Add the number of entries received to it to ask for the next page. | [optional] [example: `0`] |
| **count** | **Integer** (int32) | How many entries this page carries, files and folders together. A page shorter than the requested size means the result is exhausted. | [optional] [example: `4`] |
| **total** | **Integer** (int32) | How many entries matched before paging was applied, across the whole folder. Page until the start index plus the entries received reaches it. | [required] [example: `4`] |
| **new** | **Integer** (int32) | How many entries of this folder are marked as new for the caller. It is 0 for every listing when the account has switched the new-item badges off, so a zero here does not prove that nothing has changed. | [optional] [example: `0`] |
