# express, mongodb, rest-api
So, this is a simple rest api build with express, mongoose and absolutely cors.

## This is the api spec :

| Methods  | Urls | Actions |
| ------------- | ------------- | ------------- |
| GET | api/tutorials | get all Tutorials |
| GET | api/tutorials/:id | get Tutorial by id |
| POST | api/tutorials | add new Tutorial |
| PUT | api/tutorials/:id | update Tutorial by id |
| DELETE | api/tutorials/:id | remove Tutorial by id |
| DELETE | api/tutorials | remove all Tutorials |
| GET | api/tutorials/published | find all published Tutorials |
| GET | api/tutorials?title=[kw] | find all Tutorials which title contains 'kw' |