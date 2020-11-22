import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import typography from './typography'
import props from './props'
import shadows from './shadows'
import overrides from './overrides'

const theme = createMuiTheme({
  overrides,
  palette,
  typography,
  props,
  shadows,
})

export default theme
