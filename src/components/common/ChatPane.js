import React from "react";

import Participants from "./Participants.js";
import Conversation from "./Conversation.js";

export default function ChatPane( props ){
  return (
    <div className="pane-group">
      <Participants />
      <Conversation />
    </div>
  );

}
