// Auto-generated by zimic@0.7.1.

import type { HttpFormData, HttpHeadersSerialized, HttpSchema, HttpSearchParamsSerialized } from '@/index';

export type MyServiceSchema = HttpSchema.Paths<{
  users: {
    POST: {
      request: {
        body: {
          name: string;
        };
      };
      response: {
        200: {
          body: MyServiceComponents['schemas']['User'];
        };
      };
    };
  };
  '/users/:userId': {
    GET: {
      response: {
        200: {
          body: MyServiceComponents['schemas']['User'];
        };
      };
    };
    PUT: {
      request: {
        body: MyServiceComponents['schemas']['User'];
      };
      response: {
        204: {};
      };
    };
  };
  '/users/:userId/friends/': {
    GET: {
      response: {
        200: {
          body: MyServiceComponents['schemas']['Users'];
        };
      };
    };
  };
  '/notifications': {
    DELETE: MyServiceOperations['deleteNotifications'];
  };
}>;

export interface MyServiceComponents {
  schemas: {
    User: {
      id: number;
      name: string;
    };
    Users: MyServiceComponents['schemas']['User'][];
    Notification: {
      id: number;
      message: string;
    };
    Notifications: MyServiceComponents['schemas']['Notification'][];
  };
  responses: {
    error: HttpSchema.Response<{
      body: {
        message: string;
      };
    }>;
  };
  parameters: {
    from: string;
    authorization: string;
  };
  requests: {
    fileUpload: HttpSchema.Request<{
      body: HttpFormData<{
        name: string;
        content: Blob | null;
      }>;
    }>;
  };
}

export interface MyServiceOperations {
  getNotifications: HttpSchema.Method<{
    request: {
      searchParams: HttpSearchParamsSerialized<{
        from?: MyServiceComponents['parameters']['from'];
      }>;
    };
    response: {
      200: {
        body: MyServiceComponents['schemas']['Notifications'];
      };
    };
  }>;
  deleteNotifications: HttpSchema.Method<{
    request: {
      headers: HttpHeadersSerialized<{
        authorization: MyServiceComponents['parameters']['authorization'];
      }>;
    };
    response: {
      204: {};
      400: MyServiceComponents['responses']['error'];
    };
  }>;
}
