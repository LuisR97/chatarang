import React from 'react'

const Userinfo = (props) => 
{
    return (
        <div
        className="UserInfo"
        style={styles.userInfo}
      >
        <div className="Avatar"></div>
        <div style = {styles.user}>
          {props.user.displayName}
        </div>
        <a href="#">
          <i className="fas fa-sign-out-alt"></i>
        </a>
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
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  },
}