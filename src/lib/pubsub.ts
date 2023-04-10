import { PubSub } from '@google-cloud/pubsub'

const pubsub = new PubSub()

export const pubsubPublish = async <T>(topicName: string, body: T) => {
  try {
    const data = Buffer.from(JSON.stringify(body))
    const messageId = await pubsub.topic(topicName).publishMessage({ data })
    console.log(`Message ${messageId} published.`)
    return messageId
  } catch (error) {
    console.log(`pubsubPublish: ${JSON.stringify(error)}`)
    throw new Error(JSON.stringify(error))
  }
}

export const createTopic = async (pubsub: PubSub, topicName: string) => {
  try {
    const [topic] = await pubsub.createTopic(topicName)
    console.log(`Topic ${topic.name} created.`)
    return topic.name
  } catch (error) {
    console.log(`createTopic: ${JSON.stringify(error)}`)
    throw new Error(JSON.stringify(error))
  }
}
