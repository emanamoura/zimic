import { describe, expect, it } from 'vitest';

import BrowserHttpInterceptorWorker from '../../HttpInterceptorWorker/BrowserHttpInterceptorWorker';
import BrowserHttpInterceptor from '../browser/BrowserHttpInterceptor';
import InternalBrowserHttpInterceptor from '../browser/InternalBrowserHttpInterceptor';
import HttpInterceptor from '../HttpInterceptor';
import { createHttpInterceptorTests } from './interceptorTests';

describe('BrowserHttpInterceptor', () => {
  const defaultBaseURL = 'http://localhost:3000';

  it('should initialize with the correct worker', () => {
    const interceptor = new InternalBrowserHttpInterceptor({ baseURL: defaultBaseURL });

    expect(interceptor).toBeInstanceOf(HttpInterceptor);

    const worker = interceptor.worker();
    expect(worker).toBeInstanceOf(BrowserHttpInterceptorWorker);

    const baseURL = interceptor.baseURL();
    expect(baseURL).toBe(defaultBaseURL);
  });

  createHttpInterceptorTests(BrowserHttpInterceptor);
});
