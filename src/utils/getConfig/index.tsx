import axios from "axios";

export default function getConfig() {
axios.get("/public/public_configuration.json").then((response:any)=>{
console.log(response, "response");
localStorage.setItem("public_configuration", btoa(JSON.stringify(response.data)))

})
}