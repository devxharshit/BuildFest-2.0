/**
 * Navigation utility functions for consistent routing across the app
 */

import { ROUTES } from "@/config/routes";

export const navigationUtils = {
  /**
   * Get the current page tag for breadcrumb/header purposes
   */
  getPageTag: (pathname: string): string => {
    switch (pathname) {
      case ROUTES.HOME:
        return "BuildFest 2.0";
      case ROUTES.PROMPTS:
        return "Optional Challenge";
      case ROUTES.DARE_BOX:
        return "Optional Challenge";
      case ROUTES.FOOD_ORDER:
        return "Fuel Station";
      case ROUTES.RULEBOOK:
        return "The Philosophy";
      case ROUTES.SUBMIT:
        return "When You're Ready";
      default:
        return "Page Not Found";
    }
  },

  /**
   * Get the current page title
   */
  getPageTitle: (pathname: string): string => {
    switch (pathname) {
      case ROUTES.HOME:
        return "BuildFest 2.0";
      case ROUTES.PROMPTS:
        return "The Prompts";
      case ROUTES.DARE_BOX:
        return "The Dare Box";
      case ROUTES.FOOD_ORDER:
        return "Fuel Up";
      case ROUTES.RULEBOOK:
        return "Rulebook";
      case ROUTES.SUBMIT:
        return "Submit Prototype";
      default:
        return "Page Not Found";
    }
  },

  /**
   * Check if a route is active (for navigation highlighting)
   */
  isActiveRoute: (currentPath: string, targetPath: string): boolean => {
    return currentPath === targetPath;
  },

  /**
   * Navigate back to home
   */
  goHome: () => ROUTES.HOME,

  /**
   * Get all available routes for sitemap/navigation
   */
  getAllRoutes: () => Object.values(ROUTES).filter((route) => route !== "*"),
};
