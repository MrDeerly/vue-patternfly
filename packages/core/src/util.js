import {computed} from 'vue';

const breakpoints = ['', 'Sm', 'Md', 'Lg', 'Xl', '2xl'];

const camelize = s =>
  s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');

/**
 *
 * @param {string} s string to make camelCased
 */
export const toCamel = s => s.replace(/([-_][a-z])/gi, camelize);

export const ucfirst = s => s.charAt(0).toUpperCase() + s.slice(1);

export function useBreakpointProp(props, baseNames, styles, additional = []) {
  return computed(() => {
    const c = [...additional];

    for (const baseName of baseNames) {
      for (let breakpointSuffix of breakpoints) {
        if (breakpointSuffix === '2xl') {
          breakpointSuffix = '_2xl';
        }
        const prop = `${baseName}${breakpointSuffix}`;
        let value = props[prop];
        if (value) {
          if (value === true) {
            value = '';
          } else {
            value = ucfirst(toCamel(value));
            if (value.match(/^[0-9]/)) {
              value = `_${value}`;
            }
          }
          const mod = `${toCamel(baseName)}${value}${breakpointSuffix ? `On${breakpointSuffix}` : ''}`;
          c.push(styles.modifiers[mod]);
        }
      }
    }

    return c.filter(Boolean);
  });
}

export function breakpointProp(baseName, type, values) {
  return Object.fromEntries(breakpoints.map(b => {
    let _default = null;
    if (Array.isArray(values) && values.length) {
      _default = values[0]
    } else if (type === Boolean) {
      _default = false;
    }
    const definition = {
      type,
      default: _default,
    };
    if (Array.isArray(values)) {
      definition.validate = v => values.includes(v);
    }
    return [`${baseName}${b}`, definition];
  }));
}
