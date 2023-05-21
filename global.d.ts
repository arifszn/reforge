enum LayoutType {
  MIX = 'mix',
  TOP = 'top',
  SIDE = 'side',
}

declare const CONFIG: {
  /**
   * App name
   */
  appName: string;

  /**
   * Help link at the navbar
   */
  helpLink: string;

  /**
   * Enable Progressive Web App
   */
  enablePWA: boolean;

  /**
   * Theme config
   */
  theme: {
    /**
     * Accent color
     */
    accentColor: string;

    /**
     * Sidebar layout
     */
    sidebarLayout: LayoutType;

    /**
     * Show breadcrumb
     */
    showBreadcrumb: boolean;
  };

  /**
   * Meta tags
   */
  metaTags: {
    /**
     * Meta title
     */
    title: string;

    /**
     * Meta description
     */
    description: string;

    /**
     * Meta image
     */
    imageURL: string;
  };
};
