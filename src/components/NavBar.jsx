import {AppBar, Toolbar, styled} from '@mui/material';
import {NavLink} from 'react-router-dom'

const Header=styled(AppBar)`
background:#111111
`
const Tabs=styled(NavLink)`
color:inherit;
text-decoration:none;
font-size:26px;
margin-right:10px;
`



const NavBar=()=>{
    return(
<Header position='static'>
    <Toolbar>
        <Tabs to='/'>Imran</Tabs>
        <Tabs to='/all'>All_Users</Tabs>
        <Tabs to='/add'>Add_User</Tabs>
    </Toolbar>
</Header>        
    )
}

export default NavBar