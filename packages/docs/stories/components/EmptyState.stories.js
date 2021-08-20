import {
  PfEmptyState,
  PfEmptyStateBody,
  PfEmptyStateIcon,
  PfEmptyStateSecondaryActions,
} from '@vue-patternfly/core/src/components/EmptyState';
import PfTitle from '@vue-patternfly/core/src/components/Title.vue';
import PfButton from '@vue-patternfly/core/src/components/Button.vue';
import PfCubesIcon from '@vue-patternfly/icons/dist/esm/icons/cubes-icon';

export default {
  title: 'Components/Empty State',
  component: PfEmptyState,
  subcomponents: {
    PfEmptyStateBody,
    PfEmptyStateIcon,
    PfEmptyStateSecondaryActions,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        '',
        'xs',
        'small',
        'large',
        'xl',
      ],
    },
  },
};

export const Basic = (args) => ({
  components: {
    PfEmptyState,
    PfEmptyStateBody,
    PfEmptyStateIcon,
    PfEmptyStateSecondaryActions,
    PfTitle,
    PfButton,
    PfCubesIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <pf-empty-state>
      <pf-empty-state-icon>
        <pf-cubes-icon />
      </pf-empty-state-icon>
      <pf-title size="lg">Empty state</pf-title>
      <pf-empty-state-body>
        This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
      </pf-empty-state-body>
      <pf-button variant="primary">Primary action</pf-button>
      <pf-empty-state-secondary-actions>
        <pf-button variant="link">Multiple</pf-button>
        <pf-button variant="link">Action Buttons</pf-button>
        <pf-button variant="link">Can</pf-button>
        <pf-button variant="link">Go here</pf-button>
        <pf-button variant="link">In the secondary</pf-button>
        <pf-button variant="link">Action area</pf-button>
      </pf-empty-state-secondary-actions>
    </pf-empty-state>
  `,
});
