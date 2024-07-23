import { describe, expect, it } from 'vitest';
import { buttonClasses } from './buttonClasses';

describe('Components > Atoms > Button Classes Generator', () => {
  it('Should only base classes without props', () => {
    expect(buttonClasses({})).toBe(
      'flex items-center justify-between gap-4 transition-colors ease-in-out duration-300 font-medium'
    );
  });
});
