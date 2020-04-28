# netlify-geolib-functions
Use geolib as netlify function

Simple API to run the Geolib functions as serverless functions on netlify.
Find out more about [Geolib]((https://github.com/manuelbieh/geolib)) and [netlify functions]((https://docs.netlify.com/functions/overview)) at the original Resources  


## Install

```
yarn install
``` 

```
yarn dev
```

This starts a local Lambda server.
After that you can test the endpoints with Postman.
Install [Postman](https://www.postman.com/) and import the Collection from the static folder.
In my case the local Lambda server is listening on 9000, so the variable `base_url_geolib` is 

```
http://localhost:9000
```

You can change this variable in the Collection Settings or add your own Environment Variable.


## Usage

To use the API make a HTTP POST Request and pass the arguments as json in the body


### Example

**Method:** `POST`

**Endpoint:** `/getDistance`

**Query:** `body`
```
{
	"start": {
		"latitude": 51.5103,
		"longitude": 7.49347
	},
	"end": {
		"latitude": "51° 31' N",
		"longitude": "7° 28' E"
	}
}
```


## Deploy to netlify

Deploy the functions to your netlify account by clicking the button und following the provided steps.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/khuppenbauer/netlify-geolib-functions" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

Afterwards you will find the functions under the functions item in your netlify project.
To test the endpoints with the Postman Collection you have to change the `base_url_geolib` variable to your netlify site name and the funtions path
