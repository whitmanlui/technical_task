Dear Locke Bio,

This project design assumes that different pharmacies have different API urls or data structures. Therefore, if we need to support different pharmacies in the future, we usually create a new service and inherit `BasePharmacy`, and then add a new record into `getPharmacyService` function. It will automatically receive the corresponding pharmacy services. Of course, if we could synchronize everything, we could have a simple version.

In addition, I also provided postman json, `Technical Test.postman_collection.json`, for you reference

APIs

```
GET /order - Get all pharmacy order
GET /order/:pharmacy - Get pharmacy order
GET /order/:pharmacy/:orderId - Get pharmacy order by id
POST /order - Create new order

GET /pharmacy - Get available pharmacy
```
