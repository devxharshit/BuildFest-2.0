/**
 * Central routing configuration for the application
 * All routes are defined here for consistency and maintainability
 */

export const ROUTES = {
  HOME: "/",
  PROMPTS: "/prompts",
  DARE_BOX: "/dare",
  SUBMIT: "/submit",
  RULEBOOK: "/rulebook",
  FOOD_ORDER: "/food",
  NOT_FOUND: "*",
} as const;

export const NAVIGATION_ITEMS = [
  {
    path: ROUTES.PROMPTS,
    label: "Prompts",
    tag: "Optional Challenge",
  },
  {
    path: ROUTES.DARE_BOX,
    label: "Dare Box",
    tag: "Optional Challenge",
  },
  {
    path: ROUTES.FOOD_ORDER,
    label: "Food",
    tag: "Fuel Station",
  },
  {
    path: ROUTES.RULEBOOK,
    label: "Rulebook",
    tag: "The Philosophy",
  },
] as const;

export const CTA_BUTTON = {
  path: ROUTES.SUBMIT,
  label: "Submit",
} as const;

export type RouteKey = keyof typeof ROUTES;
