// export const BASE_URL = 'http://localhost:8080' for when running locally
export const BASE_URL = `${import.meta.env.VITE_APP_SERVER_URL}` // server hosted using gcloud and docker
// when opened directly, you will see cannot GET /, cuz nothing handles this route.
//  go to /shoes and u will see the records in DB (hopefully)