import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteUser = async (userId) => {
    'use server';

    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE'
    });
    const data = await res.json();

    if (data.deletedCount > 0) {
        revalidatePath('/users');
    }
    return data;
}


export const createUser = async (FormData) => {
    'use server';
    const newUser = Object.fromEntries(FormData.entries())
    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json()
    // TODO revalide the path
    if (data.insertedId) {
        revalidatePath('/users');
    }
    return data
}

export const updateUser = async (userid, formData) => {
    'use server'
    const updateUserData = Object.fromEntries(formData.entries());
    console.log(typeof updateUserData);
    
    const res = await fetch(`http://localhost:5000/user/${userid}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateUserData)
    });
    const data = await res.json()
    if (data.modifiedCount > 0) {
        revalidatePath('/users');
        redirect('/users')
    }
}