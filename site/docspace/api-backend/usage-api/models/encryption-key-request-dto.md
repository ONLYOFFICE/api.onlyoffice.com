# EncryptionKeyRequestDto
The two halves of an encryption key pair to store for the calling user, plus the identifier the pair is kept under.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | Names the pair inside the caller's own key set. The client generates it, and leaving it out means the all-zero GUID, which is the pair a client that never sends an identifier keeps working with. | [optional] [example: `9924256B-447C-4F19-9dbd-8ad8c39e8ff5`] |
| **publicKey** | **String** | The public half of the pair, as the client's crypto engine produced it and stored verbatim. This is the half handed to the other members of a private room so that they can encrypt file keys for this user. | [optional] [example: `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A...`] [nullable] |
| **privateKeyEnc** | **String** | The private half of the pair, encrypted on the client with the user's password before it is sent. The portal stores it as opaque text and cannot decrypt it, so material lost on the client cannot be recovered from here. | [optional] [example: `U2FsdGVkX1+Lm3s...`] [nullable] |
