# UserConfig
The account the editors attribute the changes of this session to.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The account the changes are recorded under. Two sessions carrying the same value are taken by the editors for the same person. | [optional] [example: `9924256b-447c-4f19-9dbd-8ad8c39e8ff5`] [nullable] |
| **name** | **String** | The name shown next to the changes and in the list of participants. | [optional] [example: `John Doe`] [nullable] |
| **image** | **String** | An absolute address of the avatar shown for this participant. | [optional] [example: `https://portal.example.com/storage/userphotos/9924256b_medium.png`] [nullable] |
| **roles** | **List** | The filling roles this participant holds in the form being filled out. It is set only for a form in a virtual data room, where the role decides which fields open for them. | [optional] [example: `[Manager]`] [nullable] |
| **customerId** | **String** | Identifies the paying customer this participant belongs to, on deployments where the editors are licensed per customer. | [optional] [example: `cust_001`] [nullable] |
