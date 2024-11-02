const bot = window.watsonAssistantChatOptions = {
    integrationID: "bd23dd27-e14f-4fbe-832a-e3ca226da5ea", // The ID of this integration.
    region: "us-east", // The region your integration is hosted in.
    serviceInstanceID: "8edafd9a-541d-41a8-9bef-7b63e7f8ac80", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };