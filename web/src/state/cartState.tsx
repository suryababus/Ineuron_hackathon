import { ReactChild, ReactChildren, useEffect, useState } from 'react'

export const CartContext = React.createContext<Partial<CartContextProps>>({})
interface CartContextProps {
  cartItems: CartItem[]
  addItem: (menu: Menu) => void
  removeItem: (menu: Menu) => void
}

interface Props {
  children: React.ReactNode
}

interface Menu {
  id: number
  item_name?: string | null
  category_id: number
  cuisine_id: number
  restaurant_id: number
  image_url?: string
  price: number
}

export interface CartItem {
  menu: Menu
  count: number
}
export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const cartItemsLocal = JSON.parse(localStorage.getItem('cart_items') || '{}')
    setCartItems(cartItemsLocal)
  }, [])
  useEffect(() => {
    localStorage.setItem('cart_items', JSON.stringify(cartItems))
  }, [cartItems])
  const addItem = (menu: Menu) => {
    const newCardItems = []
    let added = false
    cartItems.forEach((item) => {
      if (menu.id === item.menu.id) {
        added = true
        newCardItems.push({ ...item, count: item.count + 1 })
      } else {
        newCardItems.push(item)
      }
    })
    if (!added) {
      newCardItems.push({ menu, count: 1 })
    }
    setCartItems(newCardItems)
  }

  const removeItem = (menu: Menu) => {
    const newCardItems = []
    cartItems.forEach((item) => {
      if (menu.id === item.menu.id) {
        if (item.count - 1 === 0) {
          return
        }
        newCardItems.push({ ...item, count: item.count - 1 })
      } else {
        newCardItems.push(item)
      }
    })
    setCartItems(newCardItems)
  }
  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
