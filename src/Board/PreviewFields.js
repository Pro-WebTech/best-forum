import React from 'react'
import { styles } from 'refire-app'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../App/CodeBlock'

const PreviewFields = ({
  preview,
  topic,
  text,
  styles,
}) => {
  if (preview) {
    if (!topic.length && !text.length) {
      return (
        <div>
          <h3 className={styles.topicPreview}>
            Nothing to preview yet
          </h3>
        </div>
      )
    }

    return (
      <div>
        <h3 className={styles.topicPreview}>
          {topic}
        </h3>
        <div className={styles.textPreview}>
          <ReactMarkdown
            escapeHtml={true}
            source={text}
            renderers={
              {
                ...ReactMarkdown.renderers,
                ...{ CodeBlock },
              }
            }
          />
        </div>
      </div>
    )
  } else {
    return <div />
  }
}

const css = {
  topicPreview: {
    padding: "10px 0 10px 0",
  },
  textPreview: {
    "& p": {
      margin: "0 0 30px 0",
    },
  },
}

export default styles(css, PreviewFields)
