import React from 'react'
import Avatar from './Avatar'
import SignOutButton from './SignOutButton'

const Userinfo = ({ user, signOut }) => 
{
    return (
        <div
        className="UserInfo"
        style={styles.userInfo}
      >
      <Avatar user = {user}/>
        <div style = {styles.user}>
          {user.displayName}
        </div>
        <SignOutButton signOut = {signOut}/>
      </div>
    )
}

export default Userinfo
const styles = {
  userInfo: {
    padding: '0 1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  user: {
    flex: 1,
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  },
}