import { gql } from '@apollo/client';

export const LOGIN = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
` 
export const ADDUSER = gql `
mutation addUser($email: String!, $username: String!, $password: String!) {
  addUser(email: $email, username: $username, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`
export const SAVEBOOK = gql `
mutation saveBook($bookdata: BookInput) {
  saveBook(bookdata: $bookdata) {
    _id
    bookCount
    email
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`
export const REMOVEBOOK = gql `
mutation removeBook($bookId: ID) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
    email
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`

