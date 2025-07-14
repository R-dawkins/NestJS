import { Controller, Get } from "@nestjs/common";

@Controller("/app") // 상위 라우팅 규칙 제어
export class AppController {
  @Get("/asdf") // 하위 라우팅 규칙 제어
  getRootRoute() {
    return "<h1>hi there</h1>";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there!";
  }
}
