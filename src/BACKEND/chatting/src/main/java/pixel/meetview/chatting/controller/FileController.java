package pixel.meetview.chatting.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import pixel.meetview.chatting.model.response.ChattingMessage;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@Controller
public class FileController {
    public static final String FILE_PATH = System.getProperty("user.dir") + "/file/";

    private ChattingMessageDAO chattingMessageDAO;

    @Autowired
    public FileController(ChattingMessageDAO chattingMessageDAO){
        this.chattingMessageDAO = chattingMessageDAO;
    }

    @GetMapping("/")
    public String uploadFile(Model model) {
        File file = new File(FILE_PATH);
        model.addAttribute("files", file.listFiles());

        ChattingMessage message = new ChattingMessage();
        message.setTimeStamp(System.currentTimeMillis());
        LocalDateTime currentDateTime = LocalDateTime.now();
        String current = currentDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        message.setSendDate(current);
        message.setContent("File : " + file.getName());
        message.setFile(true);

        chattingMessageDAO.save(message);
    }

    @PostMapping("/")
    public String uploadFilePost(@RequestParam("uploadingFiles") MultipartFile[] uploadingFiles) throws IOException {
        for(MultipartFile uploadedFile : uploadingFiles) {
            File file = new File(FILE_PATH + uploadedFile.getOriginalFilename());
            uploadedFile.transferTo(file);
        }

        return "redirect:/";
    }
}
