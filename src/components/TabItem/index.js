// Write your code here

import './index.css'

const TabItem = props => {
  const {tab, tabSearch} = props
  const {displayText, tabId} = tab
  const onButt = () => {
    tabSearch(tabId)
  }
  return (
    <li>
      <button className="para" type="button" onClick={onButt}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
