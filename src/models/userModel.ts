import { Ref } from 'typesaurus'

// CollectionId: auto
// DocumentId: uid
export type User = {
  uid: string
  username: string
  email: string
  iconUrl: string
  createdAt?: string
  updatedAt?: string
}

// CollectionId: auto
// DocumentId: auto
export type UserChatRoom = {
  userRef: Ref<User>
  model: string
  maxTokens: number
  temperature: number
  stream: boolean
  createdAt?: string
  updatedAt?: string
}

// CollectionId: auto
// DocumentId: auto
export type UserChatRoomMessage = {
  userChatRoomRef: Ref<UserChatRoom>
  role: string
  content: string
  createdAt?: string
  updatedAt?: string
}
