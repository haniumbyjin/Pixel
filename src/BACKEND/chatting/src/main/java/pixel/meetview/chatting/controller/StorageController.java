package pixel.meetview.chatting.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.ui.Model;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import pixel.meetview.chatting.model.response.ChattingMessage;
import pixel.meetview.chatting.model.response.FileResponse;
import pixel.meetview.chatting.service.Sender;
import pixel.meetview.chatting.service.StorageService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/files")
@CrossOrigin("*")
@Slf4j
public class StorageController {
    public static final String FILE_PATH = System.getProperty("user.dir") + "/file/";
    private StorageService storageService;
    private Sender sender;
    private ChattingMessageDAO chattingMessageDAO;
    @Value("${storage.location}") private String tempPath;
    @Value("${chatting.topic}") private String messageTopic;

    @Autowired
    public StorageController(StorageService storageService, Sender sender, ChattingMessageDAO chattingMessageDAO){
        this.storageService = storageService;
        this.sender = sender;
        this.chattingMessageDAO = chattingMessageDAO;
    }

   /* @PostMapping("")
    public String upload(@RequestParam String msg, @RequestParam MultipartFile[] files) throws IOException {
        log.info("Upload start : {}", msg);
        for (MultipartFile file : files) {
            File tmp = new File(tempPath + UUID.randomUUID().toString());
            try {
                FileUtils.copyInputStreamToFile(file.getInputStream(), tmp);
            } catch (IOException e) {
                log.error("Error while copying.", e);
                throw e;
            }
        }

        return "success";
    }*/
    public void saveMessage(String fileName, String uri){
        ChattingMessage message = new ChattingMessage();
        message.setTimeStamp(System.currentTimeMillis());
        LocalDateTime currentDateTime = LocalDateTime.now();
        String current = currentDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        message.setSendDate(current);
        message.setContent(uri);
        message.setFileName(fileName);
        message.setFile(true);
        System.out.println("file message : " + message);
        chattingMessageDAO.save(message);
        sender.send(messageTopic, message);
    }

    @GetMapping("/")
    public String listAllFiles(Model model) {

        model.addAttribute("files", storageService.loadAll().map(
                path -> ServletUriComponentsBuilder.fromCurrentContextPath()
                        .path("/download/")
                        .path(path.getFileName().toString())
                        .toUriString())
                .collect(Collectors.toList()));

        return "listFiles";
    }

    @GetMapping("/download/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> downloadFile(@PathVariable String filename) {

        Resource resource = storageService.loadAsResource(filename);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @PostMapping("/upload-file")
    @ResponseBody
    public FileResponse uploadFile(@RequestParam("file") MultipartFile file) {
        log.info("upload single files");
        String name = storageService.store(file);

        String uri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/download/")
                .path(name)
                .toUriString();
        System.out.println("file uri : " + uri);
        saveMessage(name, uri);
        return new FileResponse(name, uri, file.getContentType(), file.getSize());
    }

    @PostMapping("/upload-multiple-files")
    @ResponseBody
    public List<FileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        log.info("upload multiple files");
        System.out.println(files.length + " " + files.toString());
        return Arrays.stream(files)
                .map(file -> uploadFile(file))
                .collect(Collectors.toList());
    }
}
