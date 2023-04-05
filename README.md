
# Node.js CRUD

Create REST APIs using expressJs that allows to perform CRUD operations on Camera entity, as well as do CRUD operations on "network of cameras"(CameraNetworks). The "networks of camera" will consist of "cameras" that can be mutually inclusive. On performing the delete operations on the camera document and the CameraNetworks document should be updated accordingly.

Technologies used: Node.js,Express.js,MongoDB,Postman

## camerasModel

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required** |
|`description`|`string`|**Required**|
|`url`|`string`|**Required**|

## API Reference - CamerasRoutes
#### Get all items

```http
  GET http://localhost:5000/getcams
```


#### Get item
Get specific one
```http
  GET http://localhost:5000/getcam/:id
```


#### Add item
```http
  POST http://localhost:5000/addcam
```

#### Update item
Update specific one
```http
  PUT http://localhost:5000/updatecam/:id
```

#### Delete item
Delete specific one
```http
  DELETE http://localhost:5000/deletecam/:id
```



## cameraNetworkModel

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required** |
|`description`|`string`|**Required**|
|`cameras`|`string`|**Required**|

## API Reference - cameraNetworkRoutes

#### Get all items
```http
  GET http://localhost:5000/getnetcams
```

#### Get item
Get specific one
```http
  GET http://localhost:5000/getnetcam/:id
```

#### Add item
```http
  POST http://localhost:5000/addnetcam
```

#### Update item
Update specific one
```http
  PUT http://localhost:5000/upnetcam/:id
```

#### Delete item
Delete specific one
```http
  DELETE http://localhost:5000/deletenetcam/:id
```