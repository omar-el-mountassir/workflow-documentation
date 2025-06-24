import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Workflow',
      items: [
        'workflow/overview',
        'workflow/daily-activities',
        'workflow/weekly-patterns',
        'workflow/tools-and-frameworks',
      ],
    },
    {
      type: 'category',
      label: 'Collaboration',
      items: [
        'collaboration/decision-gates',
        'collaboration/risk-management',
        'collaboration/energy-management',
        'collaboration/communication-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        'projects/project-management',
        'projects/change-control',
        'projects/documentation-standards',
      ],
    },
  ],
};

export default sidebars;