
const UserList = () => {

    const user =[ {
        id: 1,
        name: "Ahmed Ali",
        email: "ahmed@gmail.com"
    },
    {
        id:2,
        name:"yusuf",
        email:"y@gmail.com"
    }
]

   

            return (
                <>
                 <h1>User list</h1>
                <ul>
                    {user.map((user) => {
                        
                        return(
                            
                        <li key={user.id}>{[user.name,` (${user.email})`]}</li>
                    )

                    })}

                </ul>
                
                </>
                
            )

    


    



}

export default UserList;