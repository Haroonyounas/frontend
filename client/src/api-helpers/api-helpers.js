import axios from "axios";

export const getAllMovies = async() => {
const res = await axios.get("/movie")
.catch((err) => console.log(err));

if(res.status !== 200) {
    return console.log("No Data");
 }

 const data = await res.data;
 
 return data;
};

export const sendUserAuthRequest = async (data, signup) => {
    console.log(data, signup)
    const res = await axios.post(`/user/${signup ? "signup" : "login"}`,{
        name: signup ? data.name : "",
        email: data.email,
        password: data.password,
    })
    .catch((err) => console.log(err));

    if(res.status!==200 && res.status !==201) {
        console.log("Unexpected Error Occured");

       
    }
    const resData = await res.data;
    console.log(res.data)
    return resData;
};

export const sendAdminAuthRequest = async(data) =>{
    console.log('data req', data);
    const res = await axios.post("/admin/login",{
        email: data.email,
        password: data.password,
    }).catch((err) => console.log('err',err));
    console.log('res admin', res);
    if(res.status !==200) {
       return console.log("Unexpected Error");
    }
    const resData = await res.data;
        return resData;
};

export const getMovieDetails = async (id) => {
    console.log(id)
   const res = await axios
   .get(`/movie/${id}`).catch((err) => console.log(err));
//    console.log(res.status)
   if(res.status !==202) {
    return console.log("Unexpected Error");
}
const resData = await res.data;
console.log(resData);
return resData;

};

export const newBooking = async (data) => {
    console.log('data',data)
    // console.log('user id',localStorage.getItem("userId") )
    console.log('user id', data.user )
    const res = await axios.post('/booking',{
        movie: data.movie,
        seatNumber: data.seatNumber,
        date: data.date,
        // user: data.user,
        user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));
    console.log(res.status)
   if(res.status !== 200) {
   return console.log("Unexpected Error");
   
   }
   const resData = await res.data;
   console.log(resData);
return resData;
};


export const getUserBooking = async() => {
    const id = localStorage.getItem("userId");
    console.log(id)
    const res = await axios
    .get(`/user/bookings/${id}`)
    .catch((err) => console.log(err));
    if(res.status !== 200) {
        return console.log("Unexpected Error");
        }
        const resData = await res.data;
     return resData;

};

export const deleteBooking = async(id) => {
 const res = await axios
 .delete(`/booking/${id}`)
 .catch((err) => console.log(err));
 if(res.status !== 200) {
    return console.log("Unexpected Error");
    }
    const resData = await res.data;
 return resData;

};

export const getUserDetails = async () => {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/user/${id}`)
    .catch((err) => console.log(err));
 if(res.status !== 200) {
    return console.log("Unexpected Error");
    }
    const resData = await res.data;
 return resData;
    
};

export const addMovie = async (data) => {
   const res = await axios
   .post("/movie/add",{
        title: data.title,
        description: data.description,
        releaseDate: data.releaseDate,
        posterUrl: data.posterUrl,
        featured: data.featured,
        actors: data.actors,
        admin: localStorage.getItem("adminId"),
    },{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }
   ).catch((err)=> console.log(err));

    if(res.status !== 201){
        return console.log("UnExpected Error Occurred");
    }
        const resData = await res.data;
        return resData;
};

export const getAdminById =  () => {
    const adminId = localStorage.getItem("adminId");
    /*console.log('im here');
   const res = await axios
   .get(`/admin?id=${adminId}`)
    .catch((err)=> console.log(err));
    if(res.status !== 200){
        return console.log("UnExpected Error Occurred");
    }
        const resData = res.data;
        return resData;*/
    axios.get(`/admin?id=${adminId}`)
    .then(response =>{
    })
    .catch(error => {
        console.log(error);
    })

};

 