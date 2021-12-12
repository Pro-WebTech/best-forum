import React from 'react'
import { Card, Glyph } from 'elemental'
import { styles } from 'refire-app'
import { version } from '../../package.json'

const Footer = ({ styles }) => (
  <Card className={styles.container}>
    <a href="https://github.com/hoppula/refire-forum">
      <Glyph icon='mark-github' /> refire-forum
    </a>
    &nbsp;
    {version}
  </Card>
)

const css = {
  container: {
    textAlign: "center",
  },
}

export default styles(css, Footer)
