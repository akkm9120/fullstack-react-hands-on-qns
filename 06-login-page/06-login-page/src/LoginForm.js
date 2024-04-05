import {useState} from 'react' ;

export default function LoginForm(){
 const [user,setUser] = useState({
    username: 'rotiprataguy',
    password:   'rotiprata123'
 })

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const handleClick = (username,password)=> {
    if((username === user.username) && (password === user.password))
    {
        alert("Login Success")
    }else {
        alert("invalid Login")
    }
}

    return <>
    <label>UserName</label> <input type='text' value={username} placeholder='Username' onChange={ (event) => setUsername(event.target.value)}/>
    <label>Password</label> <input type="text" value={password} placeholder='password' onChange={(event) => setPassword(event.target.value)}/>

    <button onClick={() =>handleClick(username,password)}>Click Me!</button>
    </>
}