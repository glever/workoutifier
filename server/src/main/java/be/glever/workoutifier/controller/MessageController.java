package be.glever.workoutifier.controller;

import be.glever.workoutifier.ApiMsg;
import be.glever.workoutifier.Device;
import be.glever.workoutifier.DeviceStatusResponse;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/hello")
    @SendToUser("/queue/greetings")
    public void greeting(ApiMsg message) throws InterruptedException {

//        Thread.sleep(1000L);
        ApiMsg msg = new ApiMsg().deviceStatusResponse(new DeviceStatusResponse().device(new Device().status(Device.StatusEnum.DISCONNECTED)));
        this.simpMessagingTemplate.convertAndSend("/topic/greetings", msg);
        this.simpMessagingTemplate.convertAndSend("/queue/greetings", msg);
        System.out.println("server received message " + message);
    }
}
