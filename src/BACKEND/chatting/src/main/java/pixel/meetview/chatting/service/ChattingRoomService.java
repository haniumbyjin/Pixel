package pixel.meetview.chatting.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pixel.meetview.chatting.model.ChattingRoom;
import pixel.meetview.chatting.model.User;

@Slf4j
@Service
@Transactional
public class ChattingRoomService {

    public String createRoom(User user){
        ChattingRoom room = new ChattingRoom();
        room.setRoom_name("testRoom");
        room.setMaster_uid(user.getUser_uid());

        log.info("roomName: "+ room.getRoom_name());
        log.info("Master uid: "+ room.getMaster_uid());

        return "OK";
    }
}
