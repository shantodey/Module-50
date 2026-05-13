export const getUser=async()=>{
    const res=await fetch('http://localhost:5000/users');
    const data=res.json();
    return data
}