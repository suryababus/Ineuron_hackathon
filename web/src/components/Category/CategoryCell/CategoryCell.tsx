import type { FindCategoryById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Category from 'src/components/Category/Category'

import * as GifLoader from 'src/components/Loading/Loading'
export const Loading = () => <GifLoader.default />

export const QUERY = gql`
  query FindCategoryById($id: Int!) {
    category: category(id: $id) {
      id
      type
      image_url
    }
  }
`


export const Empty = () => <div>Category not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ category }: CellSuccessProps<FindCategoryById>) => {
  return <Category category={category} />
}
