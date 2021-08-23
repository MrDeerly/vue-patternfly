import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

import { h } from 'vue';

export default {
  name: 'PfEmptyStateSecondaryActions',

  render() {
    return h('div', { class: styles.emptyStateSecondary }, this.$slots);
  },
};
