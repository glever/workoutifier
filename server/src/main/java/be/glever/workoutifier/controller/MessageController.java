package be.glever.workoutifier.controller;

import be.glever.workoutifier.Device;
import be.glever.workoutifier.DeviceStatusRequestMsg;
import be.glever.workoutifier.DeviceStatusResponseMsg;
import be.glever.workoutifier.Message;
import be.glever.workoutifier.stomp.messages.Greeting;
import be.glever.workoutifier.stomp.messages.HelloMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.core.AbstractMessagingTemplate;
import org.springframework.messaging.core.GenericMessagingTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import java.security.Principal;

@Controller
public class MessageController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/hello")
    @SendToUser("/queue/greetings")
    public void greeting(Message message) throws InterruptedException {

//        Thread.sleep(1000L);
        DeviceStatusResponseMsg deviceStatusResponseMsg = new DeviceStatusResponseMsg().device(new Device().status(Device.StatusEnum.DISCONNECTED));
        this.simpMessagingTemplate.convertAndSend("/topic/greetings", deviceStatusResponseMsg);
        this.simpMessagingTemplate.convertAndSend("/queue/greetings", deviceStatusResponseMsg);
        System.out.println("server received message " + message);
    }
}
