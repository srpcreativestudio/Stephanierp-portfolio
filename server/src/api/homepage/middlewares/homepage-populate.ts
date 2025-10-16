/**
 * `homepage-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
          cta: true,
          logoBanner: {
            populate: {
              icons: {
                populate: {
                  icon: {
                    fields: ["alternativeText", "url"],
                  },
                },
              },
            },
          },
        },
      },
      "blocks.about": {
        populate: {
          sectionHeading: true,
          aboutSection: {
            populate: {
              image: {
                fields: ["alternativeText", "url"],
              },
              icons: {
                populate: {
                  icon: {
                    fields: ["alternativeText", "url"],
                  },
                },
              },
              buttons: true,
            },
          },
        },
      },
    },
    "blocks.projects": {
      populate: {
        sectionHeading: true,
      },
      projectSection: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
          icons: {
            populate: {
              icon: {
                fields: ["alternativeText", "url"],
              },
            },
          },
          buttons: true,
        },
      },
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In homepage-populate middleware.");
    console.log(populate);
    ctx.query.populate = populate;
    await next();
  };
};
