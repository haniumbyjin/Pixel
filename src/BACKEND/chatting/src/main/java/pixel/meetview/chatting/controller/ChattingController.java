package pixel.meetview.chatting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;
import pixel.meetview.chatting.model.ChattingMessage;
import pixel.meetview.chatting.service.Sender;

@RestController
public class ChattingController {

    @Autowired
    private Sender sender;

    private static String BOOT_TOPIC = "kafka-chatting";

    // "url/app/message"로 들어오는 메시지를 "/topic/public"을 구독하고있는 사람들에게 송신
    @MessageMapping("/message")//@MessageMapping works for WebSocket protocol communication. This defines the URL mapping.
    //@SendTo("/topic/public")//websocket subscribe topic& direct send
    public void sendMessage(ChattingMessage message) throws Exception {
        System.out.println("sendMessage: "+message);
        message.setTimeStamp(System.currentTimeMillis());

        sender.send(BOOT_TOPIC, message);

    }
}
