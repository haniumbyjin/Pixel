package pixel.meetview.chatting.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Builder
@Data
@AllArgsConstructor
public class ChattingMessage implements Serializable {
    private String content;
    private String user_uid;
    private String send_date;
    private Long timeStamp;

    private String fileName;
    private String rawData;

    public ChattingMessage() {
    }

    public ChattingMessage(String content, String user_uid) {
        this.user_uid = user_uid;
        this.content = content;
    }

    public ChattingMessage(String content, String user_uid, String send_date) {
        this.user_uid = user_uid;
        this.content = content;
        this.send_date = send_date;
    }

//    public ChattingMessage(String fileName, String rawData, String user) {
//
//        this.fileName = fileName;
//        this.rawData = rawData;
//        this.user = user;
//    }

    public ChattingMessage(String message) {
        this.content = content;
    }
}
