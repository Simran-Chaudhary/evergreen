import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'

const base = {
  borderRadius: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  // 15 instead of 16 in order to maintain height with 1px border
  padding: '15px',
  boxSizing: 'border-box'
}

function useAlertApperance(intent) {
  const {
    tokens: { intents }
  } = useTheme()

  const borderColor = intents[intent].border
  const backgroundColor = intents[intent].background

  return {
    ...base,
    borderColor,
    backgroundColor
  }
}

export default memoizeClassName(useAlertApperance)
