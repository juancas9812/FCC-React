import chefClaudeLogo from "/images/chef-claude-icon.png"

const Header = () => {
  return (
    <header>
      <img src={chefClaudeLogo} alt="chef icon" />
      <h1>Chef Claude</h1>
    </header>
  )
}


// import avatar from "/images/user-border.png"

// const Header = ({userName}) => {

//   return (
//     <header>
//       <img src={avatar} />
//       <p>{userName}</p>
//     </header>
//   )
// }



export default Header;