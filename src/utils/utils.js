
const BASE_URL = "https://edgemony-backend.herokuapp.com/movies";

//function for fetch promise
const http = (resource = "", options) => fetch(`${BASE_URL}/${resource}`, options).then((result) => result.json());
// GET
export const GETMoviesData = (resource) => http(resource, { method: "GET" });

//POST
export const POSTMovieData = (resource, body) =>
    http(resource,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        });


//DELETE
export const DELETEMovieData = (id) => http(`/${id}`, { method: "DELETE" });

//PUT
export const PUTMovieData = (id, body) =>
    http(id,
        {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        }
    )


