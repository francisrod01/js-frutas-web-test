# JavaScript Frutas Web API #

ReactJS Developer Test by [E-restó][1]

Author: [Francis Rodrigues][2]

## Environments ##

* Web API using:
  * Node.js
  * Sqlite
  * Airbnb JavaScript Style Guide
  * EcmaScript 6
  * EcmaScript Lint

## API Routes ##

@GET request to all fruits: `/api/fruits`

```json
[
    {
        "id": 1,
        "name": "Fresas",
        "color": "rojo"
    },
    {
        "id": 2,
        "name": "Kiwi",
        "color": "verde"
    },
    {
        "id": 3,
        "name": "Mango",
        "color": "amarillo"
    },
    {
        "id": 4,
        "name": "Naranja",
        "color": "naranja"
    }
]
```

@GET request to a fruit by id: `/api/fruit/:id`

```json
{
  "id": 1,
  "name": "Fresas",
  "color": "rojo"
}
```

## References ##

* [Using SQLite /w Node.js for Rapid Prototyping][3]
* [Storing JSON file to SQLite database using Node.js][4]

## License ##

MIT

  [1]: https://e-resto.com/
  [2]: https://github.com/francisrod01/
  [3]: https://medium.com/@tarkus/node-js-and-sqlite-for-rapid-prototyping-bc9cf1f26f10
  [4]: https://stackoverflow.com/a/34019478/3332734
