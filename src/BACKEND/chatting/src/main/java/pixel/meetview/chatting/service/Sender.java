package pixel.meetview.chatting.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;
import org.springframework.util.concurrent.ListenableFuture;
import pixel.meetview.chatting.model.response.ChattingMessage;

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
        System.out.println("send message" + data);
        // send to Receiver
        kafkaTemplate.send(topic, data);
    }
}
