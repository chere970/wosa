import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.contrib.auth import get_user_model

User = get_user_model()

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope["user"]
        if self.user.is_anonymous:
            await self.close()
        else:
            self.room_group_name = f"user_{self.user.id}"
            await self.channel_layer.group_add(
                self.room_group_name,
                self.channel_name
            )
            await self.accept()

    async def disconnect(self, close_code):
        if hasattr(self, 'room_group_name'):
            await self.channel_layer.group_discard(
                self.room_group_name,
                self.channel_name
            )

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get('message')
        receiver_id = data.get('receiver_id')

        # Broadcast to receiver
        await self.channel_layer.group_send(
            f"user_{receiver_id}",
            {
                "type": "chat_message",
                "message": message,
                "sender_id": self.user.id,
                "sender_email": self.user.email
            }
        )
        
        # Echo back to sender (optional, but good for confirmation)
        await self.send(text_data=json.dumps({
            "status": "sent",
            "message": message
        }))

    async def chat_message(self, event):
        await self.send(text_data=json.dumps(event))
