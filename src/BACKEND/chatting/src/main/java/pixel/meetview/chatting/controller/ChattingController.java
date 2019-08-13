package pixel.meetview.chatting.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pixel.meetview.chatting.model.enums.ResponseStatusCode;
import pixel.meetview.chatting.model.response.ChattingMessage;
import pixel.meetview.chatting.model.wrapper.ResponseWrapper;
import pixel.meetview.chatting.service.Sender;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Slf4j
@RestController
public class ChattingController {
    private Sender sender;
    private ChattingMessageDAO chattingMessageDAO;

    @Autowired
    public ChattingController(Sender sender, ChattingMessageDAO chattingMessageDAO){
        this.sender = sender;
        this.chattingMessageDAO = chattingMessageDAO;
    }

    private static String BOOT_TOPIC = "kafka-chatting";

    // "url/app/message"로 들어오는 메시지를 "/topic/public"을 구독하고있는 사람들에게 송신
    @MessageMapping("/message")//@MessageMapping works for WebSocket protocol communication. This defines the URL mapping.
    // @SendTo("/topic/public")//websocket subscribe topic& direct send
    public void sendMessage(ChattingMessage message) throws Exception {
        message.setTimeStamp(System.currentTimeMillis());
        LocalDateTime currentDateTime = LocalDateTime.now();
        String current = currentDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        message.setSend_date(current);
        chattingMessageDAO.save(message);
        System.out.println("sendMessage: "+message);
        sender.send(BOOT_TOPIC, message);
    }

    @PostMapping("/test")
    public ResponseEntity test(@RequestBody ChattingMessage test){

        log.info("Test sample");
        ChattingMessage message = ChattingMessage.builder().content(test.getContent()).build();

        return new ResponseEntity(new ResponseWrapper(ResponseStatusCode.OK, message), HttpStatus.OK);
    }

    @RequestMapping("/history")
    public List<ChattingMessage> getChattingHistory() throws Exception {
        System.out.println("history!");
        return chattingMessageDAO.get();
    }
}
