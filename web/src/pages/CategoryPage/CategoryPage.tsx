import { Button } from '@mui/material'
import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { CategoryCardsCell } from 'src/components/Category/CategoriesCardsCell/CategoriesCardsCell'

const CategoryPage = () => {
  const {logOut} = useAuth()
  const logOutHandler = async () => {
    await logOut()
    navigate('/')
  } 
  return (
    <>
      <CategoryCardsCell />
    </>
  )
}

export default CategoryPage
