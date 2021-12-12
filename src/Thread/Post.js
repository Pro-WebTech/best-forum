import React, { Component } from 'react'
import { Link, styles } from 'refire-app'
import { Row, Col, Card } from 'elemental'
import PostBody from './PostBody'
import EditPost from './EditPost'
import includes from 'lodash/includes'
import { fromNow } from '../utils'
import DeletePostButton from './DeletePostButton'
import QuoteButton from './QuoteButton'
import ReplyButton from './ReplyButton'
import UpvoteButton from './UpvoteButton'
import EditButton from './EditButton'

class Post extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      showEdit: false,
    }
  }

  setShowEdit = (show) => {
    this.setState({
      showEdit: show,
    })
  }

  render() {
    const {
      postKey,
      post,
      user,
      locked,
      isAdmin,
      deletePost,
      updateQuote,
      toggleUpvote,
      selectLastPage,
      threadKey,
      styles,
      theme,
    } = this.props
  if (!post) {
    return (
      <Row>
        <Col
          xs="0%"
          sm="1/8"
          lg="1/12"
        >
          <div className={styles.profileContainer}></div>
        </Col>
        <Col
          xs="100%"
          sm="7/8"
          lg="11/12"
        >
          <Card className={styles.container}>
            <div className={styles.naContainer}>
              Not available
            </div>
          </Card>
        </Col>
      </Row>
    )
  }

  const uid = user ? user.uid : undefined
  const mine = post.user.id === uid
  const edited = post.edited
    ? <div className={styles.edited}>Edited</div>
    : null

  return (
    <Row>
      <Col
        xs="0%"
        sm="1/8"
        lg="1/12"
      >
        <div className={styles.profileContainer}>
          <Link to={`/profile/${post.user.id}`}>
            <img src={post.user.image} className={styles.image} />
          </Link>
        </div>
      </Col>
      <Col
        xs="100%"
        sm="7/8"
        lg="11/12"
      >
        <Card className={styles.container}>
          <PostBody
            post={post}
            hide={this.state.showEdit}
            styles={theme.Post}
          />
          <EditPost
            user={user}
            threadKey={threadKey}
            postKey={postKey}
            cancel={this.cancelEditPost}
            showEdit={this.state.showEdit}
            setShowEdit={this.setShowEdit}
            text={post.body}
            cancelable={true}
            editing={true}
            selectLastPage={selectLastPage}
            buttonCaption={'Save'}
            styles={theme.ReplyToThread}
            theme={theme}
          />
          <div className={styles.bottomToolbar}>
            <div className={styles.mobileProfileContainer}>
              <Link to={`/profile/${post.user.id}`}>
                <img
                  src={post.user.image}
                  className={styles.mobileImage}
                />
              </Link>
            </div>
            <strong className={styles.nameContainer}>
              {post.user.displayName}
            </strong>

            <div className={styles.actionsContainer}>
              {edited}
              <div className={styles.postDate}>
                {fromNow(post.createdAt)}
              </div>
              <EditButton
                user={user}
                locked={locked}
                isAdmin={isAdmin}
                mine={mine}
                onClick={() => { this.setShowEdit(true)}}
                styles={theme.EditButton}
              />
              <DeletePostButton
                user={user}
                isAdmin={isAdmin}
                onClick={() => deletePost(postKey, post)}
                styles={theme.DeletePostButton}
              />
              <QuoteButton
                user={user}
                locked={locked}
                onClick={() => updateQuote(post.body, postKey)}
                styles={theme.QuoteButton}
              />
              <ReplyButton
                user={user}
                locked={locked}
                onClick={() => updateQuote("", postKey)}
                styles={theme.ReplyButton}
              />
              <UpvoteButton
                user={user}
                upvotes={Object.keys(post.likes || {}).length || 0}
                liked = {includes(Object.keys(post.likes || {}),(uid) || {}) && post.likes[uid] === true}
                onClick={() => toggleUpvote(postKey)}
                styles={theme.UpvoteButton}
              />
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  )
}
}

const css = {
  container: {},
  image: {
    display: "none",
    "@media (min-width: 480px)": {
      display: "inline-block",
      width: "40px",
      height: "40px",
      borderRadius: "20px",
      marginTop: "10px",
    },
  },
  mobileImage: {
    display: "inline-block",
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    marginRight: "10px",
    "@media (min-width: 480px)": {
      display: "none",
    },
  },
  profileContainer: {
    position: "relative",
    textAlign: "center",
  },
  profileImage: {
    borderRadius: "20px",
    height: "40px",
    width: "40px",
    margin: "0 10px 0 0",
  },
  mobileProfileContainer: {
    position: "relative",
    textAlign: "left",
    display: "inline-block",
    marginTop: "10px",
    "@media (min-width: 480px)": {
      display: "none",
    },
  },
  bodyContainer: {
    margin: "0 0 10px 0",
  },
  naContainer: {
    color: "#ddd",
  },
  bottomToolbar: {
    position: "relative",
  },
  nameContainer: {
    display: "inline-block",
    verticalAlign: "middle",
    "@media (min-width: 480px)": {
      display: "block",
    },
  },
  actionsContainer: {
    display: "block",
    paddingTop: "10px",
    "@media (min-width: 480px)": {
      paddingTop: 0,
      position: "absolute",
      right: 0,
      top: 0,
    },
  },
  postDate: {
    display: "inline-block",
    verticalAlign: "top",
    paddingRight: "20px",
  },
  markdown: {
    "& > p": {
      margin: "10px 0 20px 0",
    },
  },
  edited: {
    display: "inline-block",
    fontWeight: "bold",
    verticalAlign: "top",
    paddingRight: "20px",
    marginTop: "-1px",
  },
}

export default styles(css, Post)
