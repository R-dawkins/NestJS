import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    // context는 들어온 요청을 감싼 래퍼다(wrap)
    const request = context.switchToHttp().getRequest();
    
    return request.currentUser;
  },
);
