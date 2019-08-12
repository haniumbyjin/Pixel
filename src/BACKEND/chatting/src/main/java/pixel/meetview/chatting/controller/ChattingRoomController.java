package pixel.meetview.chatting.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pixel.meetview.chatting.model.User;
import pixel.meetview.chatting.service.ChattingRoomService;

@Slf4j
@RestController
public class ChattingRoomController {

    @Autowired
    ChattingRoomService chattingRoomService;

    // "url/createroom"
    @RequestMapping("/createroom")
    public void createRoom(User user) {
        log.info("Create room - Master_id: "+user.getUser_id());
        //user값 검사(ex.token)
        //if 문제가 없다면 service호출
        String status = chattingRoomService.createRoom(user);
        System.out.println(status);
    }

}