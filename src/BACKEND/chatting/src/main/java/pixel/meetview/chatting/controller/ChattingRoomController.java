package pixel.meetview.chatting.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pixel.meetview.chatting.model.enums.ResponseStatusCode;
import pixel.meetview.chatting.model.response.ChattingRoom;
import pixel.meetview.chatting.model.response.User;
import pixel.meetview.chatting.model.wrapper.ResponseWrapper;
import pixel.meetview.chatting.service.ChattingRoomService;

@Slf4j
@RestController
public class ChattingRoomController {
    ChattingRoomService chattingRoomService;

    @Autowired
    public ChattingRoomController(ChattingRoomService chattingRoomService){
        this.chattingRoomService = chattingRoomService;
    }

    // "url/createroom"
    @RequestMapping("/createroom")
    public ResponseEntity createRoom(ChattingRoom newRoom) {
        log.info("Create room - Room Name: "+newRoom.getRoom_name());
        log.info("Create room - Master id: "+ newRoom.getMaster_id());
        //user값 검사(ex.token)
        //if 문제가 없다면 service호출
        ChattingRoom room = chattingRoomService.createRoom(newRoom);

        return new ResponseEntity(new ResponseWrapper(ResponseStatusCode.OK, room), HttpStatus.OK);
    }

}