import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // The create() method returns an application object, which fulfills the INestApplication interface. 
  // This object provides a set of methods which are described in the coming chapters.
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  // swagger
  const config = new DocumentBuilder()
  .setTitle('Test API')
  .setDescription('Same as .net but written in Nest.js')
  .setVersion('1.0')
  .addTag('api')
  .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  // а енв файл не створюється
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
