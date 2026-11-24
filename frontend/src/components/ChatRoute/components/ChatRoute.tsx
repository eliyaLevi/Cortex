import { memo } from "react";
import { useOutletContext } from "react-router-dom";
import ChatPage from "../../ChatPage";
import type { ChatPageContext } from "../../MainLayout";

const ChatRoute = memo(() => {
  const props = useOutletContext<ChatPageContext>();
  return <ChatPage {...props} />;
});

export default ChatRoute;
