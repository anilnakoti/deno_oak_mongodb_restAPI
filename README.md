# Deno, MongoDB and, Oak RESTAPI

> Simple REST API using Deno, Oak, and MongoDB. Successfully implemented CRUD operations like Create, Read, Update, and, Delete.

## Technologies used
* Deno
* MongoDB
* Oak
* Postman (for querying api's)

## 1. Download and Install Deno

If you already install Deno you can skip this process, if not you can download from here.

#### Shell (Mac, Linux):
```
curl -fsSL https://deno.land/x/install/install.sh | sh
```
#### PowerShell (Windows):
```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
#### Homebrew (Mac):
```
brew install deno
```
#### Chocolatey (Windows):
```
choco install deno
```
#### Scoop (Windows):
```
scoop install deno
```
#### Build and install from source using Cargo
```
cargo install deno
```

## 2. Clone the Repo
```
git clone https://github.com/anilnakoti/deno_oak_mongodb_restAPI
```
move to the cloned repo by "cd deno_oak_mongodb_restAPI"

## 3. Run
```
deno run --allow-net --allow-read --allow-write --allow-plugin --unstable server.ts
```

## 4. Routes
```
GET     /api/v1/products
GET     /api/v1/product/:id
POST    /api/v1/products
PUT     /api/v1/product/:id
DELETE  /api/v1/product/:id
```

### Happy Learning!




