

import { Button, Input, Label, TextField } from "@heroui/react";
import { getUserById } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";

const UserEditPage = async ({ params }) => {
    const { userid } = await params;
    const user= await getUserById(userid)
    const updateUserWrapper= async(formData)=>{
        'use server'
        return updateUser(userid,formData)
    }
    return (
        <>
            <div>
                <h2>Edting User: {user.name}</h2>
                <div className='w-1/2 mx-auto'>
                    <form action={updateUserWrapper} className="flex flex-col gap-4">
                        <TextField className="w-full" name="name" type="text" defaultValue={user?.name}>
                            <Label>Name</Label>
                            <Input placeholder="Enter user name" />
                        </TextField>
                        <TextField className="w-full" name="email" type="email" defaultValue={user?.email}>
                            <Label>Email</Label>
                            <Input placeholder="Enter user email" />
                        </TextField>
                        <TextField className="w-full" name="role" defaultValue={user?.role}>
                            <Label>Roll</Label>
                            <Input placeholder="Enter User roll" />
                        </TextField>

                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" slot="close">Add Users</Button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default UserEditPage;