package pixel.meetview.chatting.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResponseStatusCode {
    OK(200, "SUCCESS"),

    EXAMPLE_ERROR(999, "EXAMPLE_ERROR"),

    INTERNAL_SERVER_ERROR(500, "INTERNAL_SERVER_ERROR");

    private int code;
    private String message;
}
