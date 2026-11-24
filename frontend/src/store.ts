import { create } from 'zustand'

export type Message = {
  id: string
  role: 'user' | 'assistant'
  text: string
}

export type Conversation = {
  id: string
  title: string
  time: string
  messages: Message[]
}

type ChatState = {
  conversations: Conversation[]
  activeConversationId: string
  createConversation: () => void
  selectConversation: (id: string) => void
  sendMessage: (text: string) => void
}

const initialConversation: Conversation = {
  id: 'refresh-token',
  title: 'אימות refresh token',
  time: 'היום · 12:42',
  messages: [
    {
      id: 'question',
      role: 'user',
      text: 'איך ה-API מאמת refresh token?',
    },
    {
      id: 'answer',
      role: 'assistant',
      text: 'הבדיקה מתבצעת ב־`JwtAuthGuard` לפני שהבקשה מגיעה ל־`controller`.\n\nה-guard מאמת את חתימת ה-token ואת תוקפו, ואז מצרף את פרטי המשתמש שפוענחו אל הבקשה.',
    },
  ],
}

export const useChatStore = create<ChatState>((set) => ({
  conversations: [
    initialConversation,
    {
      id: 'routes',
      title: 'איך מוגנות נקודות הקצה?',
      time: 'אתמול',
      messages: [],
    },
    {
      id: 'config',
      title: 'איפה נטענת ההגדרות?',
      time: '18 בנובמבר',
      messages: [],
    },
  ],
  activeConversationId: initialConversation.id,
  createConversation: () => {
    const conversation: Conversation = {
      id: crypto.randomUUID(),
      title: 'שיחה חדשה',
      time: 'עכשיו',
      messages: [],
    }

    set((state) => ({
      conversations: [conversation, ...state.conversations],
      activeConversationId: conversation.id,
    }))
  },
  selectConversation: (id) => set({ activeConversationId: id }),
  sendMessage: (text) =>
    set((state) => {
      const active = state.conversations.find(
        (conversation) => conversation.id === state.activeConversationId,
      )

      if (!active) return state

      const message: Message = {
        id: crypto.randomUUID(),
        role: 'user',
        text,
      }

      return {
        conversations: state.conversations.map((conversation) =>
          conversation.id === active.id
            ? {
                ...conversation,
                title:
                  conversation.messages.length === 0 &&
                  conversation.title === 'שיחה חדשה'
                    ? text.slice(0, 34)
                    : conversation.title,
                messages: [...conversation.messages, message],
              }
            : conversation,
        ),
      }
    }),
}))
