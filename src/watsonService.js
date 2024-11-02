import { IamAuthenticator } from 'ibm-watson/auth';
import AssistantV2 from 'ibm-watson/assistant/v2';

const assistant = new AssistantV2({
  version: '2021-06-14',
  authenticator: new IamAuthenticator({
    apikey: 'YOUR_API_KEY', // Replace with your API key
  }),
  serviceUrl: 'https://api.us-east.assistant.watson.cloud.ibm.com/instances/8edafd9a-541d-41a8-9bef-7b63e7f8ac80', // Replace with your service URL
});

export const createSession = async () => {
  try {
    const session = await assistant.createSession({
      assistantId: '8bf6978f-c642-4da0-aa52-230f1869d193', // Replace with your assistant ID
    });
    return session.result.session_id;
  } catch (error) {
    console.error('Error creating session:', error);
  }
};

export const sendMessage = async (sessionId, message) => {
  try {
    const response = await assistant.message({
      assistantId: '8bf6978f-c642-4da0-aa52-230f1869d193', // Replace with your assistant ID
      sessionId,
      input: {
        'message_type': 'text',
        'text': message,
      },
    });
    return response.result;
  } catch (error) {
    console.error('Error sending message:', error);
  }
};