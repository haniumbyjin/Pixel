package pixel.meetview.chatting.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;
import pixel.meetview.chatting.model.ChattingMessage;

@Slf4j
@Component
public class Sender {

    private KafkaTemplate<String, ChattingMessage> kafkaTemplate;

    @Autowired
    public Sender(KafkaTemplate<String, ChattingMessage> kafkaTemplate){
        this.kafkaTemplate = kafkaTemplate;
    }

    public void send(String topic, ChattingMessage data) {
        log.info("sending data='{}' to topic='{}'", data, topic);
        kafkaTemplate.send(topic, data);// send to react clients via websocket(STOMP)
    }
}
