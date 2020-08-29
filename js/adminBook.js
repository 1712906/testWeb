var headers =new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'https://192.168.1.6');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append("Authorization",'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI1ZjQ3Y2ExNTQxZDc0ODQzNDQ2NjNlZjIiLCJleHAiOjE1OTg2ODU4Njd9.2u5LaignYEOodp0MshIdELGe_8TM6sqcqsk0RbNyBAU');
headers.append('GET', 'POST', 'OPTIONS');
var proxy= "https://cors-anywhere.herokuapp.com/"
var url ="https://adminobooks.herokuapp.com/book"
//var url ="http://jsonplaceholder.typicode.com/users"
var request = new Request(
    url,{
        method: 'GET',
        headers: headers,
        mode: 'cors'
    }
)
fetch(request)
.then(async res => {
    if (res.status !== 401) {
        console.log(res)
         let response = await res.json()
         return response
    } else {
        return Promise.reject(res.status);
    }
})
.then(res=>
    {
        console.log(res)
    })
.catch(error=>
    {
        console.log(error)
    });