# library-CRUD

Buatlah sebuah simple proses library dengan menggunakan 3 collection:

1. Users
1. Books
1. Circular

***

## List API Users

|Method|API|Param|Description|Headers|
|------|---|----|-----------|-------|
|`GET`|`/user`|none|get all data|authorization|
|`GET`|`/user/:id`|id|get data by parameter id|authorization|
|`PUT`|`/user/:id`|id|update data by parameter id with body json `name, email`|authorization|
|`POST`|`/user`|none|create new data with body json `name, email, password, role` |authorization|
|`DELETE`|`/user/:id`|id|delete data by parameter id|authorization|
|`POST`|`/user/login`|none|login user with body json email and pssword|none|

***

## List API Books

|Method|API|Param|Description|Headers|
|------|---|----|-----------|-------|
|`GET`|`/books`|none|get all data|authorization|
|`GET`|`/books/:id`|id|get data by parameter id|authorization|
|`PUT`|`/books/:id`|id|update data by parameter id with body `judul, pengarang, penerbit, thTerbit` |authorization|
|`POST`|`/books`|none|create new data with body json `judul, pengarang, penerbit, thTerbit` |authorization|
|`DELETE`|`/books/:id`|id|delete data by parameter id|authorization|

***

## List API Circular

|Method|API|Param|Description|Headers|
|------|---|----|-----------|-------|
|`GET`|`/cirular`|none|get all data|authorization|
|`GET`|`/cirular/:id`|id|get data by parameter id|authorization|
|`PUT`|`/cirular/:id`|id|update data by parameter id|authorization|
|`POST`|`/cirular`|none|create new data|authorization|
|`DELETE`|`/cirular/:id`|id|delete data by parameter id|authorization|

***

### Status Code
1. `200` : Status ok
1. `201` : Accepted
1. `400` : Bad Request
1. `401` : Forbidden
1. `403` : unauthorized
1. `404` : not found