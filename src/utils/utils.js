
const BASE_URL = "https://edgemony-backend.herokuapp.com/movies";

//function for fetch promise
const http = (resource, options) => fetch(BASE_URL + resource, options).then((result) => result.json());
// GET
export const GETMoviesData = (resource) => http(resource, { method: "GET" });

//POST
export const POSTMovieData = (body) =>
    http(null,
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
const PUTMovieData = (body) =>
    http(null,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        }
    )


