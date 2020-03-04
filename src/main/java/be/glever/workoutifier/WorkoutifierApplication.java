package be.glever.workoutifier;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.resource.GzipResourceResolver;
import org.springframework.web.reactive.resource.PathResourceResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class WorkoutifierApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(WorkoutifierApplication.class, args);
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
	}
}
