import React, { Component } from 'react'
import { Button, Form } from 'elemental'
import { FirebaseWrite, styles } from 'refire-app'
import PlusIcon from 'react-icons/lib/fa/plus'
import { replaceEmojis, quote } from '../utils'
import { replyToThread, savePost } from '../updates'
import PreviewButton from '../App/PreviewButton'
import PreviewFields from './PreviewFields'
import TextFields from './TextFields'

class EditPost extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      text: props.text,
      previewEnabled: false,
      initialText: props.text,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quote !== this.props.quote) {
      this.setState({
        text: quote(replaceEmojis(`${nextProps.quote}`)),
      }, () => {
        if (this.textInput) {
          this.textInput.scrollTop = this.textInput.scrollHeight
          this.textInput.focus()
        }
      })
    }
    if (nextProps.text !== this.props.text) {
      this.setState({
        text: nextProps.text,
        initialText: nextProps.text,
      })
    }
  }

  submit = (event) => {
    event.preventDefault()
    const { user, threadKey, selectLastPage, submit, replyToKey, editing, postKey, setShowEdit } = this.props

    if (editing) {
      const update = savePost({
        postKey: postKey,
        text: this.state.text,
        user: user,
      })
      submit(update)
      setShowEdit(false)
    } else {
      const update = replyToThread({
        threadKey,
        text: this.state.text,
        replyToKey,
        user,
      })
      submit(update)
      selectLastPage()
      this.setState({ text: "" })
    }
  }

  cancel = (event) => {
    event.preventDefault()
    this.props.setShowEdit(false)
    this.setState({ text: this.state.initialText })
  }

  updateField = (field) => {
    return (event) => {
      event.preventDefault()
      this.setState({ [field]: replaceEmojis(event.target.value) })
    }
  }

  togglePreview = () => {
    this.setState({ previewEnabled: !this.state.previewEnabled })
  }

  textInputRef = (input) => {
    this.textInput = input
    if (this.textInput && this.props.showEdit && this.props.cancelable) {
      this.textInput.focus()
    }
  }

  render() {
    const { user, locked, theme, buttonCaption, showEdit, cancelable, styles } = this.props
    const submitEnabled = !!this.state.text
    const cancelButton = cancelable
      ? (
        <Button
          onClick={this.cancel}
          hidden={true}
          className={styles.cancelButton}
        >
          Cancel
        </Button>
      )
      : null
    const saveIcon = cancelable
      ? null
      : <PlusIcon className={styles.plusIcon} />
    if (!user || locked || !showEdit) return <div />
    return (
      <div className='editPostContainer'>
        <Form>
          <TextFields
            preview={this.state.previewEnabled}
            text={this.state.text}
            updateText={this.updateField("text")}
            inputRef={this.textInputRef}
            styles={theme.TextFields}
          />
          <PreviewFields
            preview={this.state.previewEnabled}
            text={this.state.text}
            styles={theme.PreviewFields}
          />
          <Button
            disabled={!submitEnabled}
            type="success"
            onClick={this.submit}
          >
            {saveIcon} {buttonCaption}
          </Button>
          {cancelButton}
          <PreviewButton
            enabled={this.state.previewEnabled}
            togglePreview={this.togglePreview}
          />
        </Form>
      </div>
    )
  }
}

const css = {
  container: {},
  displayName: {},
  userProfile: {
    margin: "0 0 10px 0",
  },
  plusIcon: {
    marginRight: "10px",
  },
  cancelButton: {
    marginLeft: "5px",
  },
}

export default styles(
  css,
  FirebaseWrite({ method: "update" })(EditPost)
)
