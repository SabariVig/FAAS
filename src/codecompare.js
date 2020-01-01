const submit = async () => {
    const config = {     
        headers: {
            "content-type": "application/json",
        }
    }
    axios.post("http://localhost:8080/auth/login", data, config)
    .then((response)=>{
        console.log(response.headers.token);
    })
    .catch((err)=>{
        console.log(err)
    });
}




await axios
.post("https://z607q.sse.codesandbox.io/api/auth/login", {
  email: values.email,
  password: values.password
})
.then(function(response) {
  console.log(response.data.jwt);
  localStorage.setItem("user", response.data.jwt);
  console.log(process.env.REACT_APP_JWT_SECRET)
})
.catch(err => {
  console.log(err);
  console.log(err.response.data);
  actions.setStatus({ email: err.response.data });
});



