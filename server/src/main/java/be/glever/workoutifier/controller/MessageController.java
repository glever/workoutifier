package be.glever.workoutifier.controller;

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
//    @SendToUser("/queue/greetings")
    public void greeting(HelloMessage message) throws InterruptedException {
//        Thread.sleep(1000L);
        Greeting greeting = new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
        this.simpMessagingTemplate.convertAndSend("/topic/greetings", greeting);
        this.simpMessagingTemplate.convertAndSend("/queue/greetings", greeting);
        System.out.println("server received message " + message);
    }
}
