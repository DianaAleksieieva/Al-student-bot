import React from 'react';


import './ChatBot.css';
const bot = window.watsonAssistantChatOptions = {
    integrationID: "bd23dd27-e14f-4fbe-832a-e3ca226da5ea", // The ID of this integration.
    region: "us-east", // The region your integration is hosted in.
    serviceInstanceID: "8edafd9a-541d-41a8-9bef-7b63e7f8ac80", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };

  setTimeout(function(){
    const t=document.createElement('script');
    t.src=`https://web-chat.global.assistant.watson.appdomain.cloud/versions/${ (window.watsonAssistantChatOptions.clientVersion || 'latest')} /WatsonAssistantChatEntry.js`;
    document.head.appendChild(t);
  });


function ChatBot() {
  React.useEffect (() => { 
      const watsonAssistantChatOptions = {
      integrationID: "bd23dd27-e14f-4fbe-832a-e3ca226da5ea", // The ID of this integration.
      region: "us-east", // The region your integration is hosted in.
      serviceInstanceID: "8edafd9a-541d-41a8-9bef-7b63e7f8ac80", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
    };
    const script_src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    const t=document.createElement('script');
    t.src= script_src;
    document.head.appendChild(t);
  });
  return (
    <div id="Chatbot_div">
      <div className="ChatBot">
      </div>
    </div>
  );
}

export default ChatBot;
