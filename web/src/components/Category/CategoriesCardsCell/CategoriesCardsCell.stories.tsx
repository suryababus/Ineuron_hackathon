import { Loading, Empty, Failure, Success } from './CategoriesCardsCell'
import { standard } from './CategoriesCardsCell.mock'
import * as GifLoader from 'src/components/Loading/Loading'


export const loading = () => {
  return Loading ? <GifLoader.default /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/CategoriesCardsCell' }
