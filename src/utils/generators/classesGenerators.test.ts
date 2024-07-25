import { Color, Rounded, Size, Variant } from '@/types';
import { describe, expect, it } from 'vitest';
import { colorClassesGenerator, roundedClassGenerator, sizeTextClassesGenerator } from './classesGenerators';

describe('Utils > Tailwind Classes Generator', () => {
  describe('Text size generator', () => {
    it('Should return text-sm when prop is small', () => {
      expect(sizeTextClassesGenerator('small')).toBe('text-sm');
    });

    it('Should return text-base when prop is medium', () => {
      expect(sizeTextClassesGenerator('medium')).toBe('text-base');
    });

    it('Should return text-lg when prop is large', () => {
      expect(sizeTextClassesGenerator('large')).toBe('text-lg');
    });

    it('Should return an empty string for invalid size', () => {
      expect(sizeTextClassesGenerator('extra-large' as Size)).toBe('');
    });
  });

  describe('Rounded class generator', () => {
    it('Should return rounded when prop is sm', () => {
      expect(roundedClassGenerator('sm')).toBe('rounded');
    });

    it('Should return rounded-md when prop is md', () => {
      expect(roundedClassGenerator('md')).toBe('rounded-md');
    });

    it('Should return rounded-lg when prop is lg', () => {
      expect(roundedClassGenerator('lg')).toBe('rounded-lg');
    });

    it('Should return rounded-full when prop is full', () => {
      expect(roundedClassGenerator('full')).toBe('rounded-full');
    });

    it('Should return rounded-none when prop is none', () => {
      expect(roundedClassGenerator('none')).toBe('rounded-none');
    });

    it('Should return an empty string for invalid rounded', () => {
      expect(roundedClassGenerator('extra' as Rounded)).toBe('');
    });
  });

  describe('Color and variant class generator', () => {
    it('Should return correct classes for primary color and content variant', () => {
      expect(colorClassesGenerator({ color: 'primary', variant: 'contained' })).toBe(
        'bg-amber-400 hover:bg-amber-600 text-slate-900'
      );
    });

    it('Should return correct classes for secondary color and content variant', () => {
      expect(colorClassesGenerator({ color: 'secondary', variant: 'contained' })).toBe('bg-blue-400 hover:bg-blue-600');
    });

    it('Should return correct classes for neutral color and content variant', () => {
      expect(colorClassesGenerator({ color: 'neutral', variant: 'contained' })).toBe(
        'bg-neutral-800 text-neutral-200 hover:bg-neutral-950'
      );
    });

    it('Should return correct classes for primary color and outlined variant', () => {
      expect(colorClassesGenerator({ color: 'primary', variant: 'outlined' })).toBe(
        'border border-amber-400 text-amber-400'
      );
    });

    it('Should return correct classes for secondary color and outlined variant', () => {
      expect(colorClassesGenerator({ color: 'secondary', variant: 'outlined' })).toBe(
        'border border-blue-400 text-blue-400'
      );
    });

    it('Should return correct classes for neutral color and outlined variant', () => {
      expect(colorClassesGenerator({ color: 'neutral', variant: 'outlined' })).toBe(
        'border border-neutral-800 text-neutral-800 dark:border-neutral-200 dark:text-neutral-200'
      );
    });

    it('Should return an empty string for invalid color or variant', () => {
      expect(colorClassesGenerator({ color: 'invalid' as Color, variant: 'contained' })).toBe('');
      expect(colorClassesGenerator({ color: 'primary', variant: 'invalid' as Variant })).toBe('');
    });
  });
});
