// Write your code here
import './index.css'

const AppItem = props => {
  const {appListItem} = props
  const {appName, imageUrl} = appListItem

  return (
    <li className="app-cont">
      <img src={imageUrl} alt={appName} className="img-1" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
