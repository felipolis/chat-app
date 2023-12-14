import { gql } from "@apollo/client"

export const GET_MESSAGES_FOR_CHATROOM = gql`
  query GetMessagesForChatroom($chatroomId: Float!) {
    getMessagesForChatroom(chatroomId: $chatroomId) {
      id
      content
      imageUrl
      createdAt
      user {
        id
        fullName
        email
        avatarUrl
      }
      chatroom {
        id
        name
        users {
          id
          fullName
          email
          avatarUrl
        }
      }
    }
  }
`