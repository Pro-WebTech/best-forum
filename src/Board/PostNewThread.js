import React, { Component } from 'react'
import { Button, Card, Form } from 'elemental'
import { FirebaseWrite, styles } from 'refire-app'
import PlusIcon from 'react-icons/lib/fa/plus'

import { replaceEmojis } from '../utils'
import { newThread } from '../updates'

import PreviewButton from '../App/PreviewButton'
import PreviewFields from './PreviewFields'
import TextFields from './TextFields'

class PostNewThread extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      topic: "",
      text: "",
      previewEnabled: false,
    }
    this.submit = this.submit.bind(this)
    this.updateField = this.updateField.bind(this)
    this.togglePreview = this.togglePreview.bind(this)
  }

  submit(event) {
    event.preventDefault()
    const { user, boardId, submit, showNewThreads } = this.props

    const update = newThread({
      boardId,
      user,
      topic: this.state.topic,
      text: this.state.text,
    })

    submit(update).then(() => {
      showNewThreads()
    })
    this.setState({ topic: "", text: "" })
  }

  updateField(field) {
    return (event) => {
      event.preventDefault()
      this.setState({ [field]: replaceEmojis(event.target.value) })
    }
  }

  togglePreview() {
    this.setState({ previewEnabled: !this.state.previewEnabled })
  }

  render() {
    const { user, styles, theme, inputRef } = this.props
    const submitEnabled = this.state.topic && this.state.text
    if (!user) return <div />
    return (
      <Card className={styles.container}>
        <div className={styles.userProfile}>
          <img
            className={styles.profileImage}
            src={user.profileImageURL}
          />
          <strong className={styles.displayName}>
            {user.displayName}
          </strong>
        </div>
        <Form>
          <TextFields
            preview={this.state.previewEnabled}
            inputRef={inputRef}
            topic={this.state.topic}
            text={this.state.text}
            updateTopic={this.updateField("topic")}
            updateText={this.updateField("text")}
            styles={theme.TextFields}
          />
          <PreviewFields
            preview={this.state.previewEnabled}
            topic={this.state.topic}
            text={this.state.text}
            styles={theme.PreviewFields}
          />
          <Button
            disabled={!submitEnabled}
            type="success"
            onClick={this.submit}
          >
            <PlusIcon
              className={styles.plusIcon}
            /> Post new thread
          </Button>
          <PreviewButton
            enabled={this.state.previewEnabled}
            togglePreview={this.togglePreview}
          />
        </Form>
      </Card>
    )
  }
}

const css = {
  container: {},
  userProfile: {
    margin: "0 0 10px 0",
  },
  profileImage: {
    borderRadius: "20px",
    height: "40px",
    width: "40px",
    margin: "0 10px 0 0",
  },
  displayName: {},
  plusIcon: {
    marginRight: "10px",
  },
}

export default styles(
  css,
  FirebaseWrite({ method: "update" })(PostNewThread)
)
