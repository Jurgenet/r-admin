export default {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/tableset': 'Tableset',
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Tableset',
      url: '/tableset',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'OLD',
      },
    },
  ],
};
