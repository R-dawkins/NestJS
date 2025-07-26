import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['asdf'],
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // whitelist:true = 사용자가 요청으로 body에 추가 속성을 보내도 (예를들어 admin:true) 그를 자동으로 무시하는 보안 기능
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
