const DenominationItem = props => {
  const {item, withdrawButton} = props
  const {value} = item

  const onclickingButton = () => {
    withdrawButton(value)
  }
  return (
    <li>
      <button type="button" onClick={onclickingButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
