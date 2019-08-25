package pixel.meetview.chatting.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pixel.meetview.chatting.model.response.ChattingRoom;
import pixel.meetview.chatting.model.response.User;

@Slf4j
@Service
@Transactional
public class ChattingRoomService {

    public ChattingRoom createRoom(ChattingRoom newRoom){
        //room data저장
        log.info("roomName: "+ newRoom.getRoom_name());
        ChattingRoom room = newRoom;
        room.setRoom_uid(0); //tset용

        return room;
    }
}
