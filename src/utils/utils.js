
const BASE_URL = "https://edgemony-backend.herokuapp.com/movies";

//function for fetch promise
const http = (resource = "", options) => fetch(`${BASE_URL}/${resource}`, options).then((result) => result.json());
// GET
export const GET = (resource) => http(resource, { method: "GET" });

//POST
export const POST = (resource, body) =>
    http(resource,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        });


//DELETE
export const DELETE = (id) => http(`${id}`, { method: "DELETE" });

//PUT
export const PUT = (id, body) =>
    http(id,
        {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        }
    )


