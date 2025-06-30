import { describe, expect, it } from 'vitest';
import {isValidEmail} from '.';

describe('isValidEmail', () => {
  it('allows correctly formatted email', () => {
    expect(isValidEmail('leonardo@my-domain.com')).toBe(true);
  });

  it('disallows wrongly formatted email', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('wrong@.com')).toBe(false);
    expect(isValidEmail('@domain.com')).toBe(false);
    expect(isValidEmail('no-at.com')).toBe(false);
    expect(isValidEmail('double-at@@domain.com')).toBe(false);
    expect(isValidEmail('nothing-after-at@')).toBe(false);
    expect(isValidEmail('with spaces@domain.com')).toBe(false);
    expect(isValidEmail('user@domain with spaces.com')).toBe(false);
  })
})