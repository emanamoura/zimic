import { describe, expect, expectTypeOf, it } from 'vitest';

import BrowserHttpInterceptorWorker from '../BrowserHttpInterceptorWorker';
import HttpInterceptorWorker from '../HttpInterceptorWorker';
import { BrowserHttpWorker } from '../types';
import { createHttpInterceptorWorkerTests } from './workerTests';

describe('BrowserHttpInterceptorWorker', () => {
  it('should initialize using the Browser.js MSW server', () => {
    const interceptorWorker = new BrowserHttpInterceptorWorker({ baseURL: '' });

    expect(interceptorWorker).toBeInstanceOf(HttpInterceptorWorker);

    const mswWorker = interceptorWorker.worker();
    expectTypeOf(mswWorker).toEqualTypeOf<BrowserHttpWorker>();
  });

  describe('Shared', () => {
    createHttpInterceptorWorkerTests(BrowserHttpInterceptorWorker);
  });
});
