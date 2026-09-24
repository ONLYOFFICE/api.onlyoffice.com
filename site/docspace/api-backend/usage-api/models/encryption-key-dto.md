# EncryptionKeyDto
An encryption key pair as the portal reports it: the public half of some member's key, with the encrypted private half filled in only when the pair belongs to the caller.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | Names the pair inside its owner's key set. Pass it back to rotate the pair or to delete it; the all-zero value belongs to a client that stores its keys without sending an identifier. | [optional] [example: `9924256B-447C-4F19-9dbd-8ad8c39e8ff5`] |
| **userId** | **UUID** (uuid) | The member the pair belongs to. In the key set of a room or of a file this is how the caller tells its own entries, the ones carrying a private half, from those of the other members. | [optional] [example: `9924256B-447C-4F19-9dbd-8ad8c39e8ff5`] |
| **date** | **Date** (date-time) | When this key material was written. Rotating the pair refreshes it, so it dates the material that is being reported rather than the first appearance of the identifier. | [optional] [example: `2025-01-01T00:00:00`] |
| **publicKey** | **String** | The public half of the pair, the half a client encrypts file keys with. A pair whose public half is missing is treated as no access and left out of a room's or a file's key set. | [optional] [example: `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A...`] [nullable] |
| **privateKeyEnc** | **String** | The private half, encrypted with its owner's password. It is filled in only when the pair belongs to the calling user; on another member's entry it comes back empty, because the private half is not handed out. | [optional] [example: `U2FsdGVkX1+Lm3s...`] [nullable] |
| **cryptoEngineId** | **String** | The crypto engine this material was issued for, as a braced GUID. The engine is portal-wide, so the same value comes back for every key of every member. | [optional] [example: `{DC522726-5E0E-43E5-AA02-8EA156BECBC5}`] [nullable] |
