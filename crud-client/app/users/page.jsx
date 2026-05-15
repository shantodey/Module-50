import AddUserModal from "../Component/AddUserModal";
import UserTable from "../Component/UserTable";
import { createUser } from "../lib/actions";
import { getUser } from "../lib/data";


const UsersPage = async () => {
  const userdata = await getUser()
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Users</h1>
            <p className="text-default-500 mt-1">
              Total Users: {userdata.length}
            </p>
          </div>
          <div>
            <AddUserModal createUserAction={createUser}></AddUserModal>
          </div>
        </div>
        <UserTable userdata={userdata}></UserTable>
      </div>
    </div>
  );
};

export default UsersPage;