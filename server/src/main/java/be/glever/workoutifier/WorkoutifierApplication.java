package be.glever.workoutifier;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.resource.ResourceResolver;

import java.io.IOException;

@SpringBootApplication
public class WorkoutifierApplication implements WebMvcConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(WorkoutifierApplication.class, args);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("**/*")
                .addResourceLocations("classpath:/public/")
                .resourceChain(true)
                .addResolver(resolver());
    }

    private ResourceResolver resolver() {
        return new PathResourceResolver() {
            @Override
            protected Resource getResource(String resourcePath, Resource location) throws IOException {
                Resource requestedResource = location.createRelative(resourcePath);
                if (requestedResource.exists() && requestedResource.isReadable()) {
                    return requestedResource;
                }
                return new ClassPathResource("/public/index.html");
            }
        };
    }
}
