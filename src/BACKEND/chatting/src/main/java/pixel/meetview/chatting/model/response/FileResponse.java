package pixel.meetview.chatting.model.response;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class FileResponse {
    private String name;
    private String uri;
    private String type;
    private long size;
}