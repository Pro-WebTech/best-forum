import React from 'react'
import { styles } from 'refire-app'
import { Card } from 'elemental'

import LoadingSpinner from './LoadingSpinner'
import Boards from './Boards'

const Categories = ({ categories, boards, styles, theme }) => {

  if (!boards.length || !categories.length) {
    return <LoadingSpinner styles={styles} />
  }

  return (
    <div>
      {
        categories.map(({ key, value: category }) => {
          return (
            <Card key={key} className={styles.category}>
              <h2 className={styles.header}>
                {category.title}
              </h2>
              <Boards
                category={category}
                boards={boards}
                styles={theme.Boards}
              />
            </Card>
          )
        })
      }
    </div>
  )
}

const css = {
  category: {},
  header: {},
}

export default styles(css, Categories)
