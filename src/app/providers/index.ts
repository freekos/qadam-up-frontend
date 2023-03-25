import compose from 'compose-function'

import { withAntd } from './with-antd'
import { withRouter } from './with-router'

export const withProvider = compose(withAntd, withRouter)
