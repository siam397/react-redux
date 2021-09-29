import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'
function UserContainer(props) {
    const users = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return users.loading? (
        <h2>loading</h2>
    ): (
        <div>
            {users.users.map(user=><p>user.name</p>)}
        </div>
    )
}

export default UserContainer
