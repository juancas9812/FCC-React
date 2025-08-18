import trollFace from "../images/troll-face.png"

// export default function Header() {
//   return (
//     <header className="header">
//       <img
//         src={trollFace}
//       />
//       <h1>Meme Generator</h1>
//     </header>
//   )
// }

import chefClaudeLogo from "/images/chef-claude-icon.png"

const Header = () => {
  return (
    <header>
      <img src={chefClaudeLogo} alt="chef icon" />
      <h1>Chef Claude</h1>
    </header>
  )
}

export default Header;