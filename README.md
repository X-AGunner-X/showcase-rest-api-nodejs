# Showcase REST API - Node.js

## Task description

1. receives HTTP POST requests only on a "/track" route
    - gets data in JSON format passed in the request body
    - saves the JSON data into a local file (append)
    - if the data contains a "count" parameter, the application increments the value of the "count" key by the value of the 'count' parameter in a Redis database
2. receives HTTP GET requests only on a "/count" route
    - returns the value of the "count" key from the Redis database

### Features

apart from the above-mentioned requirements

- ✅ NestJS framework
- ✅ Extensive unit tests
- ✅ Coding standards
- ✅ Error handling
- ✅ Error logging to file (winston)
- ✅ JSON input validation (ZOD)
- ✅ Docker for convenient team development
- ✅ Easy to change count storage implementation
- ✅ Easy to change Request data storage implementation

## Local development

### Configuration

common configuration is in

```
.env.global
```

environmentally dependent configuration is set in `.env` file. You can start by copying `.env.dist` template.

```
cp .env.dist .env
```

### Docker

#### User UID and group GID

If your system user is set to **UID=1000** and **GID=1000**, you can **skip** this section.

In order to have correct folder permission, correct system user UID and group GID must be configured in `.env` file. 

```
SYSTEM_USER_UID=1000
SYSTEM_GROUP_GID=1000
```

#### Building your containers

build your docker containers in root folder of the project

```
docker-compose up -d --build
```

application is waiting fo requests on url (port may differ, check `/docker-compose.yml` in case of problems)

```
http://localhost:3000/
```

#### node shell + @nestjs/cli

you can run commands inside node container.

```
docker-compose exec app sh
```

@nestjs/cli is installed inside container so generator command can be run within. Example:

```
nest g mo whatever-module
```

## Deployment to production

- redis must not be set up in docker container on server. Failed container would cause data loss. Configure connection
  to redis in `.env` file accordingly.

## API

in local development, the application is receiving request on url `http://localhost:3000/`.

- the API documentation can be managed using OpenAPI, when the application grows
- use i.e. Postman application to send requests

### GET "/count"

returns value of "count" key in redis

curl command to run from terminal: 

```
curl -X GET http://localhost:3000/count
```

### POST "/track"

receives "application/json" requests and stores content in `/storage/tracking-file`.
If "count" parameter is present, it increments value of "count" key in redis.

The route simulates strictly typed/organized json.

- extra unexpected parameters will cause Err 400
- missing required parameters will cause Err 400

#### Example json string - all supported parameters

```
{
    "id": 2,
    "count": 33,
    "content": "some content",
    "whatever": "whatever"
}
```

curl command for running from terminal:

```
curl -X POST http://localhost:3000/track -H "Content-Type: application/json" -d '{
  "id": 2,
  "count": 99,
  "content": "some content",
  "whatever": "whatever"
}'
```

#### Example json string - required parameters only

```
{
    "id": 2,
    "whatever": "whatever"
}
```

curl command for running from terminal:

```
curl -X POST http://localhost:3000/track -H "Content-Type: application/json" -d '{
  "id": 2,
  "whatever": "whatever"
}'
```