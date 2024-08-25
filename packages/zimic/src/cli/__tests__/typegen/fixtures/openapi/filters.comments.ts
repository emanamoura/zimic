// Auto-generated by zimic.
// NOTE: Do not manually edit this file. Changes will be overridden.

import type {
  HttpFormData,
  HttpFormDataSerialized,
  HttpHeadersSerialized,
  HttpSchema,
  HttpSearchParams,
  HttpSearchParamsSerialized,
} from '@/http';

export type MyServiceSchema = HttpSchema.Paths<{
  users: {
    GET: {
      request: {
        searchParams: HttpSearchParamsSerialized<{
          search?: string;
        }>;
      };
      response: {
        /** Success */
        200: {
          body: MyServiceComponents['schemas']['Users'];
        };
      };
    };
    POST: {
      request: {
        body: {
          name: string;
        };
      };
      response: {
        /** Success */
        200: {
          body: MyServiceComponents['schemas']['User'];
        };
      };
    };
  };
  '/users/:userId': {
    GET: {
      response: {
        /** Success */
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
        /** Success */
        204: {};
      };
    };
    PATCH: {
      request: {
        body: {
          name?: string;
        };
      };
      response: {
        /** Success */
        204: {};
      };
    };
  };
  '/users/:userId/friends/': {
    GET: {
      response: {
        /** Success */
        200: {
          body: MyServiceComponents['schemas']['Users'];
        };
      };
    };
  };
  '/notifications': {
    GET: MyServiceOperations['getNotifications'];
    DELETE: MyServiceOperations['deleteNotifications'];
  };
  '/uploads': {
    POST: {
      request: MyServiceComponents['requests']['fileUpload'] & {
        headers: HttpHeadersSerialized<{
          'api-key': string;
        }>;
      };
      response: {
        /** Success */
        200:
          | {
              headers: HttpHeadersSerialized<{
                'content-type': 'application/json';
                'x-upload-id'?: string;
              }>;
              body: {
                id?: string;
              };
            }
          | {
              headers: HttpHeadersSerialized<{
                'content-type': 'x-www-form-urlencoded';
                'x-upload-id'?: string;
              }>;
              body: HttpSearchParams<
                HttpSearchParamsSerialized<{
                  id?: string;
                }>
              >;
            };
      };
    };
  };
}>;

export interface MyServiceComponents {
  schemas: {
    User: {
      /** Format: int64 */
      id: number;
      name: string;
    };
    Users: MyServiceComponents['schemas']['User'][];
    Notification: {
      /** Format: int64 */
      id: number;
      message: string;
    };
    Notifications: MyServiceComponents['schemas']['Notification'][];
  };
  responses: {
    /** Error */
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
      body: HttpFormData<
        HttpFormDataSerialized<{
          /** The name of the file */
          name: string;
          /**
           * Format: binary
           *
           * The content of the file
           */
          content: Blob | null;
        }>
      >;
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
      /** Success */
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
      /** Success */
      204: {};
      400: MyServiceComponents['responses']['error'];
    };
  }>;
}
