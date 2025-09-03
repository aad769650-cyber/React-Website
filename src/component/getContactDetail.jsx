export const getContactDetail=async({request})=>{


    const res=await request.formData();

    const data=Object.fromEntries(res)
console.log(data);

    return null
}

