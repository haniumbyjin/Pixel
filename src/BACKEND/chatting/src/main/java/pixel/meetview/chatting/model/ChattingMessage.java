package pixel.meetview.chatting.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class ChattingMessage implements Serializable {
    private String message;
    private String user;
    private String date;
    private Long timeStamp;

    private String fileName;
    private String rawData;

    public ChattingMessage() {
    }

    public ChattingMessage(String message, String user) {
        this.user = user;
        this.message = message;
    }

    public ChattingMessage(String message, String user, String date) {
        this.user = user;
        this.message = message;
        this.date = date;
    }

//    public ChattingMessage(String fileName, String rawData, String user) {
//
//        this.fileName = fileName;
//        this.rawData = rawData;
//        this.user = user;
//    }

    public ChattingMessage(String message) {
        this.message = message;
    }
}
