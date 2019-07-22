package pixel.meetview.chatting.controller;

import org.springframework.data.redis.core.HashOperations;
import org.springframework.stereotype.Component;
import pixel.meetview.chatting.model.ChattingMessage;

import javax.annotation.Resource;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class ChattingMessageDAO {

    String CHATMSG_KEY = "chattingMessage";

    @Resource(name="redisTemplate")
    HashOperations<String, UUID, ChattingMessage> hashOperations;


    public void save(ChattingMessage chatObj) {
        hashOperations.put(CHATMSG_KEY,UUID.randomUUID(),chatObj);
    }

    public List<ChattingMessage> get() {
        return hashOperations.entries(CHATMSG_KEY).values().stream()
                .sorted(Comparator.comparing(ChattingMessage::getTimeStamp))
                .collect(Collectors.toList());
    }
}
