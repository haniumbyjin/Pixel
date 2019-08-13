package pixel.meetview.chatting.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import pixel.meetview.chatting.model.response.ChattingMessage;

import java.util.HashMap;

@Slf4j
@Service
public class Receiver {
    private SimpMessagingTemplate template;

    @Autowired
    public Receiver(SimpMessagingTemplate template){
        this.template = template;
    }

    @KafkaListener(id = "main-listener", topics = "kafka-chatting")
    public void receive(ChattingMessage message) throws Exception {
        log.info("message='{}'", message);

        HashMap<String, String> msg = new HashMap<>();
        msg.put("timestamp", Long.toString(message.getTimeStamp()));
        msg.put("content", message.getContent());
        msg.put("user_uid", message.getUser_uid());
        msg.put("send_date",message.getSend_date());

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(msg);

        this.template.convertAndSend("/topic/public", json);
    }
}
