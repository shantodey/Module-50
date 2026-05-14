
import { getUserById } from "../../lib/data";


const UserId = async ({ params }) => {
    const { userid } = await params;
    const user= await getUserById(userid)
    console.log(user);
    
    return (
        <div>
            <h2>{user.name}</h2>
        </div>
    );
};

export default UserId;