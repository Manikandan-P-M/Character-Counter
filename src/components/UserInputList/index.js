import './index.css'

const UserInputList = props => {
  const {userTextDetails} = props
  const {userText, userTextLength} = userTextDetails
  return (
    <ul className="list-item">
      <li className="item">
        <p>
          {userText} : {userTextLength}
        </p>
      </li>
    </ul>
  )
}

export default UserInputList
